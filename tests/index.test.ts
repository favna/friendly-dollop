import { sum } from '../src';

describe('sum', () => {
  test('GIVEN two numbers THEN sums', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
