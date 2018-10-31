// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

describe('#isInteger', () => {
  test('"1234567890" === true', () => {
    const result = stringfu.isInteger('1234567890');
    expect(result).toEqual(true);
  });
  test('"-12" === true', () => {
    const result = stringfu.isInteger('-12');
    expect(result).toEqual(true);
  });
  test('"12-" === false', () => {
    const result = stringfu.isInteger('12-');
    expect(result).toEqual(false);
  });
  test('"12.3" === false', () => {
    const result = stringfu.isInteger('12.3');
    expect(result).toEqual(false);
  });
  test('"12 3" === false', () => {
    const result = stringfu.isInteger('12 3');
    expect(result).toEqual(false);
  });
});
