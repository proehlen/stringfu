// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

test('#toBytes', () => {
  const result = stringfu.toBytes('EFAA03');
  expect(result instanceof Uint8Array).toEqual(true);
  expect(result.length).toEqual(3);
  expect(result[0]).toEqual(0xef);
  expect(result[1]).toEqual(0xaa);
  expect(result[2]).toEqual(0x03);
});
