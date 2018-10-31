// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

test('#rightPad', () => {
  const result = stringfu.rightPad('abc', 10);
  expect(typeof result).toEqual('string');
  expect(result).toEqual('abc       ');
});
