// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

test('#reverseBytes', () => {
  const result = stringfu.reverseBytes('01020304aabbccdd');
  expect(typeof result).toEqual('string');
  expect(result).toEqual('ddccbbaa04030201');
});
