import { rxjs6 } from '../src/flags';

describe('flags', () => {
  it('should tell if rxjs 6 works', () => {
    const peerDependencies = {
      rxjs: '^5.6.0-forward-compat.0 || ^6.0.0-beta.0',
    };
    expect(rxjs6(peerDependencies)).toBe(true);
    peerDependencies.rxjs = '^5.5.0';
    expect(rxjs6(peerDependencies)).toBe(false);
  });
});
