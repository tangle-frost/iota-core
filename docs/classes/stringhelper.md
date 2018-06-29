[@tangle-frost/iota-core](../README.md) > [StringHelper](../classes/stringhelper.md)

# Class: StringHelper

Class to maniuplate Strings.

## Hierarchy

**StringHelper**

## Index

### Methods

* [decodeNonASCII](stringhelper.md#decodenonascii)
* [encodeNonASCII](stringhelper.md#encodenonascii)
* [isASCII](stringhelper.md#isascii)

---

## Methods

<a id="decodenonascii"></a>

### `<Static>` decodeNonASCII

▸ **decodeNonASCII**(value: *`string`*): `string`

*Defined in helpers/stringHelper.ts:20*

Decode control characters to ASCII.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The encoded string to convert back to ASCII. |

**Returns:** `string`
The decoded version of the string.

___
<a id="encodenonascii"></a>

### `<Static>` encodeNonASCII

▸ **encodeNonASCII**(value: *`string`*): `string`

*Defined in helpers/stringHelper.ts:10*

Encode non ASCII characters with control characters.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The string value to escape. |

**Returns:** `string`
The escaped version of the string.

___
<a id="isascii"></a>

### `<Static>` isASCII

▸ **isASCII**(value: *`string`*): `boolean`

*Defined in helpers/stringHelper.ts:30*

Check to see if the whole string is ASCII.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The value to check. |

**Returns:** `boolean`
True if all the characters are ascii.

___

