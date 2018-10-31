// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

test('#fromBytes', () => {
  const bytes = new Uint8Array([0x01, 0xff, 0x02, 0xaa]);
  const result = stringfu.fromBytes(bytes);
  expect(typeof result).toEqual('string');
  expect(result).toEqual('01ff02aa');
});
