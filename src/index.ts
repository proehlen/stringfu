const NUMERIC_DIGITS = '0123456789';

/**
 * Takes a string and makes it length, left-padded with padChar
 * @param {string} str 
 * @param {number} length 
 * @param {string} padChar 
 */
export function leftPad(str: string, length: number, padChar: string) {
  let result = str;
  const padLength = length - str.length;
  for (let i = 0; i < padLength; ++i) {
    result = `${padChar}${result}`;
  }
  return result;
}

/**
 * Takes a string and makes it length, right-padded with spaces
 * 
 * @param {string} str 
 * @param {number} length 
 */
export function rightPad(str: string, length: number): string {
  let result = str;
  let difference = length - str.length;
  if (difference > 0) {
    result = `${str}${' '.repeat(difference)}`;
  } else if (difference < 0) {
    result = str.substr(8, length);
  } else {
    result = str;
  }
  return result;
}

/**
 * Takes a hex string and returns Uint8Array of bytes
 * @param {string} str 
 */
export function toBytes(str: string): Uint8Array {
  if (str.length % 2) {
    throw new Error('String to bytes conversion requires even length string');
  }
  const bytes = new Uint8Array(str.length / 2);
  for (let sourcePos = 0, targetIndex = 0; sourcePos < str.length; sourcePos += 2, ++targetIndex) {
    const byteString = str.substr(sourcePos, 2);
    const byte = parseInt(byteString, 16);
    bytes[targetIndex] = byte;
  }
  return bytes;
}

/**
 * Takes an array of bytes and returns them as a string
 *
 * @param {Uint8Array} bytes 
 */
export function fromBytes(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map(byte => leftPad(byte.toString(16), 2, '0'))
    .join('');
}

/**
 * Takes a string of hexadecimal and returns a string with the bytes reversed
 * 
 * @param {string} str 
 */
export function reverseBytes(str: string): string {
  if (str.length % 2) {
    throw new Error('Cannnot reverse bytes in uneven length string');
  }

  let result = '';
  for (let i = str.length; i > 0; i -= 2) {
    const end = i;
    const start = end - 2;
    result += str.substring(start, end);
  }

  return result;
}

/**
 * Returns true if string only contains nominated chars
 * @param {string} str    String to check
 * @param {string} chars  Chars to test with
 */
export function containsOnly(str: string, chars: string): boolean {
  const firstIllegalChar = str
    .split('')
    .find(char => chars.indexOf(char) < 0);
  return (firstIllegalChar === undefined);
}

/**
 * Returns true if string represents an integer number
 * @param {string} str String to check
 */
export function isInteger(str: string): boolean {
  const firstChar = str.substr(0, 1);
  const remainingChars = str.substr(1);

  return (firstChar === '-' || containsOnly(firstChar, NUMERIC_DIGITS))
    && containsOnly(remainingChars, NUMERIC_DIGITS);
}

/**
 * Return a string as an array split at lineWidth chars
 * @param {string} str - String to check
 * @param {number} lineWidth - Make lines this width
 * @returns {string[]} - Array of strings
 */
export function splitWidth(str: string, lineWidth: number): string[] {
  const result = [];
  const lineCount = Math.ceil(str.length / lineWidth);
  for (let x = 0; x < lineCount; x++) {
    result.push(str.substr(x * lineWidth, lineWidth));
  }
  return result;
}

/**
 * Checks if string contains only whitespace characters
 * @param {string} str - String to check
 * @returns {boolean} - True/false
 */
export function isWhitespace(str: string) {
  return /^\s*$/.test(str);
};

/**
 * Checks if string contains only alphanumeric characters
 * @param {string} str - String to check
 * @returns {boolean} - True if only alphanumeric
 */
export function isAlphaNumeric(str: string) {
  return /^[a-zA-Z0-9]*$/.test(str);
};
