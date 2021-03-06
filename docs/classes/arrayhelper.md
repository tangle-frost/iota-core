[@tangle-frost/iota-core](../README.md) > [ArrayHelper](../classes/arrayhelper.md)

# Class: ArrayHelper

Array helper methods.

## Hierarchy

**ArrayHelper**

## Index

### Methods

* [isArray](arrayhelper.md#isarray)
* [isEmpty](arrayhelper.md#isempty)
* [isTyped](arrayhelper.md#istyped)

---

## Methods

<a id="isarray"></a>

### `<Static>` isArray

▸ **isArray**(value: *`any`*): `boolean`

*Defined in [helpers/arrayHelper.ts:12](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/arrayHelper.ts#L12*

Is the value an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Object to test. |

**Returns:** `boolean`
True if the value is an array.

___
<a id="isempty"></a>

### `<Static>` isEmpty

▸ **isEmpty**(value: *`any`*): `boolean`

*Defined in [helpers/arrayHelper.ts:22](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/arrayHelper.ts#L22*

Is the value a empty array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Object to test. |

**Returns:** `boolean`
True if the value is a empty array.

___
<a id="istyped"></a>

### `<Static>` isTyped

▸ **isTyped**(value: *`any`*, type: *`Function`*): `boolean`

*Defined in [helpers/arrayHelper.ts:32](https://github.com/tangle-frost/iota-core/tree/master/src/helpers/arrayHelper.ts#L32*

Is the value a non empty array of specific type.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Object to test. |
| type | `Function` |  The type of the object |

**Returns:** `boolean`
True if the value is a non empty array of a specific type.

___

