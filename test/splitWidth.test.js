// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

describe('#splitWidth', () => {
  test('str.length < requested width', () => {
    const str = 'abcdefgh';
    const result = stringfu.splitWidth(str, 10);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(str);
  });
  test('str.length == requested width', () => {
    const str = 'abcdefgh';
    const result = stringfu.splitWidth(str, 8);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(str);
  });
  test('str.length > requested width', () => {
    const str = 'abcdefgh';
    const result = stringfu.splitWidth(str, 6);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual('abcdef');
    expect(result[1]).toEqual('gh');
  });
  test('3 line result', () => {
    const str = 'abcdefgh';
    const result = stringfu.splitWidth(str, 3);
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual('abc');
    expect(result[1]).toEqual('def');
    expect(result[2]).toEqual('gh');
  });
});
