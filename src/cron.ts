import chalk from 'chalk';
import * as logging from 'debug';

import { build } from './build';

const debug = logging('parts');

setInterval(
  () =>
    build()
      .then(() => debug(chalk.greenBright('build success!')))
      .catch(e => {
        console.error(e);
        process.exit(1);
      }),
  14400, // 4 hours
);
