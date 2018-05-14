import { rxjs6, angular6 } from '../src/flags';

describe('flags', () => {
  it('should tell if rxjs 6 works', () => {
    const dependencies = {
      rxjs: '^5.6.0-forward-compat.0 || ^6.0.0-beta.0',
    };
    expect(rxjs6(dependencies, {})).toBe(true);
    expect(rxjs6({}, dependencies)).toBe(true);
    dependencies.rxjs = '^5.5.0';
    expect(rxjs6(dependencies, {})).toBe(false);
    expect(rxjs6({}, dependencies)).toBe(false);
  });
  it('should tell if angular 6 works', () => {
    const dependencies = {
      ['@angular/core']: '^5.6.0-forward-compat.0 || ^6.0.0-beta.0',
    };
    expect(angular6(dependencies, {})).toBe(true);
    expect(angular6({}, dependencies)).toBe(true);
    dependencies['@angular/core'] = '^5.5.0';
    expect(angular6(dependencies, {})).toBe(false);
    expect(angular6({}, dependencies)).toBe(false);
  });
});
