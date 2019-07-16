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
});
