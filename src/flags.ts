import * as semver from 'semver';

import { NPM } from './npm';

export function flags(info: NPM) {
  const res: any = {
    rxjs6: null,
  };
  if (info.peerDependencies) {
    res.rxjs6 = rxjs6(info);
  }
  return res;
}

export function rxjs6(info: NPM) {
  // TODO: maybe look at dependencies as well.
  const peer = semver.coerce(info.peerDependencies.rxjs);
  if (!peer) {
    return null;
  }
  return semver.satisfies('6.0.0', peer.version);
}
