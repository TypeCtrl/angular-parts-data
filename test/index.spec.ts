import * as _ from 'lodash';
import { packages } from '../src/packages';

describe('data', () => {
  it('should not have duplicates', () => {
    const values: string[] = _.map(packages, _.property('name'));
    const duplicates = _.filter(values, (value, index, iteratee) => _.includes(iteratee, value, index + 1));
    expect(duplicates).toEqual([]);
  });
});
