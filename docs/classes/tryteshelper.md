[@tangle-frost/iota-core](../README.md) > [TrytesHelper](../classes/tryteshelper.md)

# Class: TrytesHelper

Class to manipulate Trytes.

## Hierarchy

**TrytesHelper**

## Index

### Properties

* [ALPHABET](tryteshelper.md#alphabet)

### Methods

* [from](tryteshelper.md#from)
* [isTrytes](tryteshelper.md#istrytes)
* [to](tryteshelper.md#to)

---

## Properties

<a id="alphabet"></a>

### `<Static>` ALPHABET

**● ALPHABET**: *`string`* = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ"

*Defined in [helpers/trytesHelper.ts:10](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/trytesHelper.ts#L10*

All the characters that can be used in trytes.

___

## Methods

<a id="from"></a>

### `<Static>` from

▸ **from**(trytes: *`string`*): `string`

*Defined in [helpers/trytesHelper.ts:41](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/trytesHelper.ts#L41*

Convert trytes into a string value.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trytes | `string` |  The trytes to convert into a string value. |

**Returns:** `string`
The string value converted from the trytes.

___
<a id="istrytes"></a>

### `<Static>` isTrytes

▸ **isTrytes**(trytes: *`string`*): `boolean`

*Defined in [helpers/trytesHelper.ts:73](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/trytesHelper.ts#L73*

Check to make sure all the characters in the string are tryte characters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trytes | `string` |  To check for validity. |

**Returns:** `boolean`
true if the trytes are valid.

___
<a id="to"></a>

### `<Static>` to

▸ **to**(value: *`string`*): `string`

*Defined in [helpers/trytesHelper.ts:17](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/trytesHelper.ts#L17*

Convert a string value into trytes.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  The value to convert into trytes. |

**Returns:** `string`
The trytes representation of the value.

___

