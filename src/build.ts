import * as algoliasearch from 'algoliasearch';
import * as _ from 'lodash';
import chalk from 'chalk';
import * as logging from 'debug';

import { packages, AngularPackage } from './packages';
import * as npm from './npm';
import { flags } from './flags';

if (!process.env.ALGOLIA_KEY) {
  throw TypeError('provide ALGOLIA_KEY');
}

const debug = logging('parts');
const client = algoliasearch('8HDRK698YZ', process.env.ALGOLIA_KEY);
const index = client.initIndex('packages');

export const allPackages = packages.map<string>(_.property('name'));

function difference(object: any, base: any): any {
  return _.transform<any, any>(object, (result, value, key) => {
    if (!_.isEqual(value, base[key])) {
      result[key] =
        _.isObject(value) && _.isObject(base[key]) ? difference(value, base[key]) : value;
    }
  });
}

async function* allAlgolia() {
  let browser = await index.browse('');
  yield browser.hits as any[];
  while (browser.cursor) {
    browser = await index.browseFrom(browser.cursor);
    yield browser.hits as any[];
  }
}

async function updatePackage(pkg: any) {
  let info: any = await npm.get(pkg.name);
  info.objectID = pkg.name;
  info = { ...info, ...flags(info) };
  info._tags = packages.find(n => n.name === pkg.name)!.categories;
  return info;
}

async function build() {
  // update new packages
  for await (const packages of allAlgolia()) {
    const add: any[] = [];
    for (const pkg of packages) {
      // remove extraneous packages
      if (!allPackages.includes(pkg.name)) {
        debug('Removing', pkg.name, pkg.objectID);
        await index.deleteObject(pkg.objectID);
        continue;
      }
      debug(chalk.green('Checking:'), pkg.name);
      const info = await updatePackage(pkg);
      // remove from array of all package names
      _.pull(allPackages, pkg.name);
      // check if save is necessary
      // for (const x of Object.keys(difference(pkg, info))) {
      //   console.log(x, pkg[x], info[x]);
      // }
      if (!Object.keys(difference(pkg, info)).length) {
        continue;
      }
      add.push(info);
    }
    if (add.length) {
      debug(add.map(n => n.name));
      await index.addObjects(add);
    }
  }
  // add new packages
  for (const group of _.chunk<string>(allPackages, 100)) {
    const add: any[] = [];
    for (const pkgName of group) {
      console.log('ADDING', pkgName);
      const pkg: AngularPackage = packages.find(n => n.name === pkgName) as AngularPackage;
      const info = await updatePackage(pkg);
      add.push(info);
    }
    if (add.length) {
      await index.addObjects(add);
    }
  }
}

if (!module.parent) {
  build()
    .then(() => console.log('build success'))
    .catch(e => {
      console.error(e);
      process.exit(1);
    });
}
