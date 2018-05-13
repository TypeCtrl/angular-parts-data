import * as semver from 'semver';

import { NPM } from './npm';

export function flags(info: NPM) {
  const res: any = {
    rxjs6: null,
  };
  if (info.peerDependencies) {
    res.rxjs6 = rxjs6(info.peerDependencies);
  }
  return res;
}

export function rxjs6(peerDependencies: { [name: string]: string }) {
  // TODO: maybe look at dependencies as well?
  if (!peerDependencies.rxjs) {
    return null;
  }
  return semver.satisfies('6.0.0', peerDependencies.rxjs);
}
