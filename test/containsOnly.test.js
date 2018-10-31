// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

describe('#containsOnly', () => {
  test('test 1', () => {
    const result = stringfu.containsOnly('abc', 'abc');
    expect(result).toEqual(true);
  });
  test('test 2', () => {
    const result = stringfu.containsOnly('ccc', 'abc');
    expect(result).toEqual(true);
  });
  test('test 3', () => {
    const result = stringfu.containsOnly('abc', 'bc');
    expect(result).toEqual(false);
  });
});
