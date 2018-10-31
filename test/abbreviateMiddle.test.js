// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

describe('#abbreviateMiddle', () => {
  test('string less than length is not abbreviated', () => {
    const str = 'abcdefgh';
    const targetLen = 10;
    const result = stringfu.abbreviateMiddle(str, targetLen);
    expect(result).toEqual(str);
  });
  test('string is correctly abbreviated', () => {
    const str = 'abcdefghijklmnop';
    const targetLen = 7;
    const result = stringfu.abbreviateMiddle(str, targetLen);
    const expected = 'ab...op';
    expect(result).toEqual(expected);
    expect(result.length).toEqual(targetLen);
  });
  test('string is correctly non-default replacement string', () => {
    const str = 'abcdefghijklmnop';
    const targetLen = 8;
    const result = stringfu.abbreviateMiddle(str, 8, '..');
    const expected = 'abc..nop';
    expect(result).toEqual(expected);
    expect(result.length).toEqual(targetLen);
  });
});
