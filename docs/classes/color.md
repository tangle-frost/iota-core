[@tangle-frost/iota-core](../README.md) > [Color](../classes/color.md)

# Class: Color

Class to represent a color.

## Hierarchy

**Color**

## Index

### Constructors

* [constructor](color.md#constructor)

### Methods

* [alpha](color.md#alpha)
* [argb](color.md#argb)
* [blue](color.md#blue)
* [green](color.md#green)
* [hex](color.md#hex)
* [hexWithAlpha](color.md#hexwithalpha)
* [red](color.md#red)
* [rgbText](color.md#rgbtext)
* [rgba](color.md#rgba)
* [rgbaText](color.md#rgbatext)
* [fromHex](color.md#fromhex)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Color**(alpha: *`number`*, red: *`number`*, green: *`number`*, blue: *`number`*): [Color](color.md)

*Defined in [data/color.ts:15](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L15*

Create a new instance of color.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| alpha | `number` |  The alpha element of the color. |
| red | `number` |  The red element of the color. |
| green | `number` |  The green element of the color. |
| blue | `number` |  The blue element of the color. |

**Returns:** [Color](color.md)

___

## Methods

<a id="alpha"></a>

###  alpha

▸ **alpha**(): `number`

*Defined in [data/color.ts:88](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L88*

Get the alpha element.

**Returns:** `number`
The alpha element.

___
<a id="argb"></a>

###  argb

▸ **argb**(): `number`

*Defined in [data/color.ts:120](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L120*

Get color as argb.

**Returns:** `number`
The color as argb.

___
<a id="blue"></a>

###  blue

▸ **blue**(): `number`

*Defined in [data/color.ts:112](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L112*

Get the blue element.

**Returns:** `number`
The blue element.

___
<a id="green"></a>

###  green

▸ **green**(): `number`

*Defined in [data/color.ts:104](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L104*

Get the green element.

**Returns:** `number`
The green element.

___
<a id="hex"></a>

###  hex

▸ **hex**(): `string`

*Defined in [data/color.ts:152](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L152*

Get color as hex no alpha.

**Returns:** `string`
The color as hex with no alpha component.

___
<a id="hexwithalpha"></a>

###  hexWithAlpha

▸ **hexWithAlpha**(): `string`

*Defined in [data/color.ts:163](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L163*

Get color as hex with alpha.

**Returns:** `string`
The color as hex with with alpha component.

___
<a id="red"></a>

###  red

▸ **red**(): `number`

*Defined in [data/color.ts:96](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L96*

Get the red element.

**Returns:** `number`
The red element.

___
<a id="rgbtext"></a>

###  rgbText

▸ **rgbText**(): `string`

*Defined in [data/color.ts:136](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L136*

Get color as rgb text.

**Returns:** `string`
The color as rgb.

___
<a id="rgba"></a>

###  rgba

▸ **rgba**(): `number`

*Defined in [data/color.ts:128](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L128*

Get color as rgba.

**Returns:** `number`
The color as rgba.

___
<a id="rgbatext"></a>

###  rgbaText

▸ **rgbaText**(): `string`

*Defined in [data/color.ts:144](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L144*

Get color as rgba text.

**Returns:** `string`
The color as rgba.

___
<a id="fromhex"></a>

### `<Static>` fromHex

▸ **fromHex**(hex: *`string`*): [Color](color.md)

*Defined in [data/color.ts:49](https://github.com/tangle-frost/iota-core/tree/master/src/data/color.ts#L49*

Construct a color from a hex string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hex | `string` |  The hex string to parse. |

**Returns:** [Color](color.md)
The color.

___

