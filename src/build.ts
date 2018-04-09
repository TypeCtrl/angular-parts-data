import * as algoliasearch from 'algoliasearch';
import * as _ from 'lodash';

import { packages } from './packages';
import * as npm from './npm';

const client = algoliasearch('8HDRK698YZ', process.env.ALGOLIA_KEY);
const index = client.initIndex('packages');

async function build() {
  for (const group of _.chunk(packages, 100)) {
    const update = [];
    const add = [];
    for (const pkg of group) {
      const current = await index.search({ query: pkg.name, hitsPerPage: 1 });
      const info: any = await npm.get(pkg.name);
      info._tags = pkg.categories;
      if (!current.nbHits) {
        add.push(info);
        continue;
      }
      console.log(current);
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
