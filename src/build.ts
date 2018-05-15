import * as algoliasearch from 'algoliasearch';
import * as _ from 'lodash';

import { packages, AngularPackage } from './packages';
import * as npm from './npm';
import { flags } from './flags';

if (!process.env.ALGOLIA_KEY) {
  throw TypeError('provide ALGOLIA_KEY');
}

const client = algoliasearch('8HDRK698YZ', process.env.ALGOLIA_KEY);
const index = client.initIndex('packages');

export const allPackages = packages.map<string>(_.property('name'));

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
        console.log('Removing', pkg.name, pkg.objectID);
        await index.deleteObject(pkg.objectID);
        continue;
      }
      console.log('UPDATING', pkg.name);
      const info = await updatePackage(pkg);
      add.push(info);
      _.pull(allPackages, pkg.name);
    }
    await index.addObjects(add);
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
    await index.addObjects(add);
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
