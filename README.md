# String Fu

String manipulation and conversion functions including for working with bytes/hex strings.

**Warning**: This sofware is under construction and in pre-alpha state.

## Example usage

```js
import { reverseBytes } from 'stringfu';

console.log(reverseBytes('0FAB03')); // 03AB0F
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [leftPad](#leftpad)
    -   [Parameters](#parameters)
-   [rightPad](#rightpad)
    -   [Parameters](#parameters-1)
-   [toBytes](#tobytes)
    -   [Parameters](#parameters-2)
-   [fromBytes](#frombytes)
    -   [Parameters](#parameters-3)
-   [reverseBytes](#reversebytes)
    -   [Parameters](#parameters-4)
-   [containsOnly](#containsonly)
    -   [Parameters](#parameters-5)
-   [isInteger](#isinteger)
    -   [Parameters](#parameters-6)

### leftPad

Takes a string and makes it length, left-padded with padChar

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `length` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `padChar` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### rightPad

Takes a string and makes it length, right-padded with spaces

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `length` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### toBytes

Takes a hex string and returns Uint8Array of bytes

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)** 

### fromBytes

Takes an array of bytes and returns them as a string

#### Parameters

-   `bytes` **[Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### reverseBytes

Takes a string of hexadecimal and returns a string with the bytes reversed

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### containsOnly

Returns true if string only contains nominated chars

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** String to check
-   `chars` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Chars to test with

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### isInteger

Returns true if string represents an integer number

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** String to check

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
