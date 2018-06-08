import * as _ from 'lodash';
import { getAllPackages } from '../src/build';

describe('data', () => {
  it('should not have duplicates', () => {
    const duplicates = getAllPackages().filter((value, index, iteratee) =>
      _.includes(iteratee, value, index + 1),
    );
    expect(duplicates).toEqual([]);
  });
});
