// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

test('#leftPad', () => {
  const result = stringfu.leftPad('abc', 10, ' ');
  expect(typeof result).toEqual('string');
  expect(result).toEqual('       abc');
});
