import * as algoliasearch from 'algoliasearch';
import * as _ from 'lodash';

import { packages } from './packages';
import * as npm from './npm';
import { flags } from './flags';

if (!process.env.ALGOLIA_KEY) {
  throw TypeError('provide ALGOLIA_KEY');
}
const client = algoliasearch('8HDRK698YZ', process.env.ALGOLIA_KEY);
const index = client.initIndex('packages');

async function build() {
  for (const group of _.chunk(packages, 100)) {
    const update: any[] = [];
    const add: any[] = [];
    for (const pkg of group) {
      const current = await index.search({
        query: pkg.name,
        hitsPerPage: 1,
        typoTolerance: false,
        restrictSearchableAttributes: ['name'],
      });
      // get data from npms.io
      let info: any = await npm.get(pkg.name);
      info = { ...info, ...flags(info) };
      // set tags for algolia
      info._tags = pkg.categories;
      // add custom flags
      if (!current.nbHits || current.hits[0].name !== pkg.name) {
        add.push(info);
        console.log('PUSHING', pkg.name);
        continue;
      }
      info.objectID = current.hits[0].objectID;
      update.push(info);
    }
    if (add.length) {
      await index.addObjects(add);
    }
    // console.log(update);
    if (update.length) {
      await index.saveObjects(update);
    }
  }
}

build()
  .then(() => console.log('build success'))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
