// @flow

declare var describe: any;
declare var test: any;
declare var expect: any;

const stringfu = require('../lib/index');

// export function stringFixedWidth(str: string, width: number): string

describe('Tests', () => {
  test('#leftPad', () => {
    const result = stringfu.leftPad('abc', 10, ' ');
    expect(typeof result).toEqual('string');
    expect(result).toEqual('       abc');
  });
  test('#rightPad', () => {
    const result = stringfu.rightPad('abc', 10);
    expect(typeof result).toEqual('string');
    expect(result).toEqual('abc       ');
  });
  test('#toBytes', () => {
    const result = stringfu.toBytes('EFAA03');
    expect(result instanceof Uint8Array).toEqual(true);
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual(0xef);
    expect(result[1]).toEqual(0xaa);
    expect(result[2]).toEqual(0x03);
  });
  test('#toBytes', () => {
    const bytes = new Uint8Array([0x01, 0xff, 0x02, 0xaa]);
    const result = stringfu.fromBytes(bytes);
    expect(typeof result).toEqual('string');
    expect(result).toEqual('01ff02aa');
  });
  test('#reverseBytes', () => {
    const result = stringfu.reverseBytes('01020304aabbccdd');
    expect(typeof result).toEqual('string');
    expect(result).toEqual('ddccbbaa04030201');
  });
});