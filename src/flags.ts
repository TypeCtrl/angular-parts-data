import * as semver from 'semver';

import { NPM } from './npm';

export function flags(info: NPM) {
  const res: any = {
    rxjs6: null,
    angular6: null,
  };
  if (info.peerDependencies || info.dependencies) {
    res.rxjs6 = rxjs6(info.peerDependencies || {}, info.dependencies || {});
    res.angular6 = angular6(info.peerDependencies || {}, info.dependencies || {});
  }
  return res;
}

export function rxjs6(
  peerDependencies: { [name: string]: string },
  dependencies: { [name: string]: string },
) {
  if (!peerDependencies.rxjs && !dependencies.rxjs) {
    return null;
  }
  return semver.satisfies('6.0.0', peerDependencies.rxjs || dependencies.rxjs);
}

export function angular6(
  peerDependencies: { [name: string]: string },
  dependencies: { [name: string]: string },
) {
  const dep =
    peerDependencies['@angular/core'] ||
    peerDependencies['@angular/common'] ||
    peerDependencies['@angular/animations'] ||
    dependencies['@angular/core'] ||
    dependencies['@angular/common'] ||
    dependencies['@angular/animations'];
  if (!dep) {
    return null;
  }
  return semver.satisfies('6.0.0', dep);
}
