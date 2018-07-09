(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@tangle-frost/iota-core", [], factory);
	else if(typeof exports === 'object')
		exports["@tangle-frost/iota-core"] = factory();
	else
		root["TangleFrostIotaCore"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/data/color.js":
/*!****************************!*\
  !*** ./dist/data/color.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! ../helpers/numberHelper */ "./dist/helpers/numberHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "./dist/helpers/stringHelper.js");
/**
 * Class to represent a color.
 */


var Color =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of color.
   * @param alpha The alpha element of the color.
   * @param red The red element of the color.
   * @param green The green element of the color.
   * @param blue The blue element of the color.
   */
  function Color(alpha, red, green, blue) {
    _classCallCheck(this, Color);

    if (!numberHelper_1.NumberHelper.isInteger(alpha) || alpha < 0 || alpha > 255) {
      throw new Error("The alpha parameter must be a number >= 0 and <= 255");
    }

    if (!numberHelper_1.NumberHelper.isInteger(red) || red < 0 || red > 255) {
      throw new Error("The red parameter must be a number >= 0 and <= 255");
    }

    if (!numberHelper_1.NumberHelper.isInteger(green) || green < 0 || green > 255) {
      throw new Error("The green parameter must be a number >= 0 and <= 255");
    }

    if (!numberHelper_1.NumberHelper.isInteger(blue) || blue < 0 || blue > 255) {
      throw new Error("The blue parameter must be a number >= 0 and <= 255");
    }

    this._alpha = alpha;
    this._red = red;
    this._green = green;
    this._blue = blue;
  }
  /**
   * Construct a color from a hex string.
   * @param hex The hex string to parse.
   * @returns The color.
   */


  _createClass(Color, [{
    key: "alpha",

    /**
     * Get the alpha element.
     * @returns The alpha element.
     */
    value: function alpha() {
      return this._alpha;
    }
    /**
     * Get the red element.
     * @returns The red element.
     */

  }, {
    key: "red",
    value: function red() {
      return this._red;
    }
    /**
     * Get the green element.
     * @returns The green element.
     */

  }, {
    key: "green",
    value: function green() {
      return this._green;
    }
    /**
     * Get the blue element.
     * @returns The blue element.
     */

  }, {
    key: "blue",
    value: function blue() {
      return this._blue;
    }
    /**
     * Get color as argb.
     * @returns The color as argb.
     */

  }, {
    key: "argb",
    value: function argb() {
      return (this._alpha << 24 | this._red << 16 | this._green << 8 | this._blue) >>> 0;
    }
    /**
     * Get color as rgba.
     * @returns The color as rgba.
     */

  }, {
    key: "rgba",
    value: function rgba() {
      return (this._red << 24 | this._green << 16 | this._blue << 8 | this._alpha) >>> 0;
    }
    /**
     * Get color as rgb text.
     * @returns The color as rgb.
     */

  }, {
    key: "rgbText",
    value: function rgbText() {
      return "rgb(".concat(this._red, ",").concat(this._green, ",").concat(this._blue, ")");
    }
    /**
     * Get color as rgba text.
     * @returns The color as rgba.
     */

  }, {
    key: "rgbaText",
    value: function rgbaText() {
      return "rgba(".concat(this._red, ",").concat(this._green, ",").concat(this._blue, ",").concat(Math.round(this._alpha / 255 * 100) / 100, ")");
    }
    /**
     * Get color as hex no alpha.
     * @returns The color as hex with no alpha component.
     */

  }, {
    key: "hex",
    value: function hex() {
      var red = "00".concat(this._red.toString(16)).slice(-2);
      var green = "00".concat(this._green.toString(16)).slice(-2);
      var blue = "00".concat(this._blue.toString(16)).slice(-2);
      return "#".concat(red).concat(green).concat(blue).toUpperCase();
    }
    /**
     * Get color as hex with alpha.
     * @returns The color as hex with with alpha component.
     */

  }, {
    key: "hexWithAlpha",
    value: function hexWithAlpha() {
      var alpha = "00".concat(this._alpha.toString(16)).slice(-2);
      var red = "00".concat(this._red.toString(16)).slice(-2);
      var green = "00".concat(this._green.toString(16)).slice(-2);
      var blue = "00".concat(this._blue.toString(16)).slice(-2);
      return "#".concat(alpha).concat(red).concat(green).concat(blue).toUpperCase();
    }
  }], [{
    key: "fromHex",
    value: function fromHex(hex) {
      if (!stringHelper_1.StringHelper.isString(hex)) {
        throw new Error("The hex parameter can not be empty");
      }

      var alpha;
      var red;
      var green;
      var blue;

      if (/^#[A-Fa-f0-9]{3}$/.test(hex)) {
        // #RGB
        alpha = "0xFF";
        red = hex.substr(1, 1).repeat(2);
        green = hex.substr(2, 1).repeat(2);
        blue = hex.substr(3, 1).repeat(2);
      } else if (/^#[A-Fa-f0-9]{4}$/.test(hex)) {
        // #ARGB
        alpha = hex.substr(1, 1).repeat(2);
        red = hex.substr(2, 1).repeat(2);
        green = hex.substr(3, 1).repeat(2);
        blue = hex.substr(4, 1).repeat(2);
      } else if (/^#[A-Fa-f0-9]{6}$/.test(hex)) {
        // #RRGGBB
        alpha = "0xFF";
        red = hex.substr(1, 2);
        green = hex.substr(3, 2);
        blue = hex.substr(5, 2);
      } else if (/^#[A-Fa-f0-9]{8}$/.test(hex)) {
        // #AARRGGBB
        alpha = hex.substr(1, 2);
        red = hex.substr(3, 2);
        green = hex.substr(5, 2);
        blue = hex.substr(7, 2);
      } else {
        throw new Error("The hex color must be one of the following formats #RGB, #ARGB, #RRGGBB, #AARRGGBB");
      }

      return new Color(parseInt(alpha, 16), parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16));
    }
  }]);

  return Color;
}();

exports.Color = Color;

/***/ }),

/***/ "./dist/factories/factoryBase.js":
/*!***************************************!*\
  !*** ./dist/factories/factoryBase.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),

/***/ "./dist/helpers/arrayHelper.js":
/*!*************************************!*\
  !*** ./dist/helpers/arrayHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "./dist/helpers/objectHelper.js");
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),

/***/ "./dist/helpers/numberHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/numberHelper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),

/***/ "./dist/helpers/objectHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/objectHelper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),

/***/ "./dist/helpers/stringHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/stringHelper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isASCII",
    value: function isASCII(value) {
      return value === null || value === undefined ? false : /^[\x00-\x7F]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u0080-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),

/***/ "./dist/helpers/trytesHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/trytesHelper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var stringHelper_1 = __webpack_require__(/*! ./stringHelper */ "./dist/helpers/stringHelper.js");
/**
 * Class to manipulate Trytes.
 */


var TrytesHelper =
/*#__PURE__*/
function () {
  function TrytesHelper() {
    _classCallCheck(this, TrytesHelper);
  }

  _createClass(TrytesHelper, null, [{
    key: "to",

    /**
     * Convert a string value into trytes.
     * @param value The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    value: function to(value) {
      var trytes = "";

      if (stringHelper_1.StringHelper.isEmpty(value)) {
        throw new Error("The value can not be empty");
      }

      for (var i = 0; i < value.length; i++) {
        var asciiValue = value.charCodeAt(i);
        var firstValue = asciiValue % 27;
        var secondValue = (asciiValue - firstValue) / 27;
        trytes += TrytesHelper.ALPHABET[firstValue] + TrytesHelper.ALPHABET[secondValue];
      }

      return trytes;
    }
    /**
     * Convert trytes into a string value.
     * @param trytes The trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */

  }, {
    key: "from",
    value: function from(trytes) {
      var ascii = "";

      if (stringHelper_1.StringHelper.isEmpty(trytes)) {
        throw new Error("The trytes can not be empty");
      }

      if (trytes.length % 2 === 1) {
        throw new Error("The trytes length must be an even number, it is ".concat(trytes.length));
      }

      if (!TrytesHelper.isTrytes(trytes)) {
        throw new Error("The trytes contains non-tryte characters");
      }

      for (var i = 0; i < trytes.length; i += 2) {
        var firstValue = TrytesHelper.ALPHABET.indexOf(trytes[i]);
        var secondValue = TrytesHelper.ALPHABET.indexOf(trytes[i + 1]);
        var decimalValue = firstValue + secondValue * 27;
        ascii += String.fromCharCode(decimalValue);
      }

      return ascii;
    }
    /**
     * Check to make sure all the characters in the strin are tryte characters.
     * @param trytes To check for validity.
     * @returns true if the trytes are valid.
     */

  }, {
    key: "isTrytes",
    value: function isTrytes(trytes) {
      return trytes !== null && trytes !== undefined && /^[9A-Z]+$/.test(trytes);
    }
  }]);

  return TrytesHelper;
}();
/**
 * All the characters that can be used in trytes.
 */


TrytesHelper.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.TrytesHelper = TrytesHelper;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./data/color */ "./dist/data/color.js"));

__export(__webpack_require__(/*! ./factories/factoryBase */ "./dist/factories/factoryBase.js"));

__export(__webpack_require__(/*! ./helpers/arrayHelper */ "./dist/helpers/arrayHelper.js"));

__export(__webpack_require__(/*! ./helpers/numberHelper */ "./dist/helpers/numberHelper.js"));

__export(__webpack_require__(/*! ./helpers/objectHelper */ "./dist/helpers/objectHelper.js"));

__export(__webpack_require__(/*! ./helpers/stringHelper */ "./dist/helpers/stringHelper.js"));

__export(__webpack_require__(/*! ./helpers/trytesHelper */ "./dist/helpers/trytesHelper.js"));

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2RhdGEvY29sb3IudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy90cnl0ZXNIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7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SUFBSSxDQUFYLENBQTlCLENBQXBCO0FBRUEsWUFBTSxlQUFlLGFBQWEsY0FBYyxFQUFoRDtBQUVBLGlCQUFTLE9BQU8sWUFBUCxDQUFvQixZQUFwQixDQUFUO0FBQ0g7O0FBRUQsYUFBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7NkJBS3VCLE0sRUFBYztBQUNqQyxhQUFPLFdBQVcsSUFBWCxJQUFtQixXQUFXLFNBQTlCLElBQTJDLFlBQVksSUFBWixDQUFpQixNQUFqQixDQUFsRDtBQUNIOzs7OztBQXBFRDs7Ozs7QUFHYyx3QkFBbUIsNkJBQW5CO0FBSmxCLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEYiLCJmaWxlIjoidGFuZ2xlLWZyb3N0LWlvdGEtY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFuZ2xlRnJvc3RJb3RhQ29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIGNvbG9yLlxyXG4gKi9cclxuY2xhc3MgQ29sb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gYWxwaGEgVGhlIGFscGhhIGVsZW1lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIHJlZCBUaGUgcmVkIGVsZW1lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIGdyZWVuIFRoZSBncmVlbiBlbGVtZW50IG9mIHRoZSBjb2xvci5cclxuICAgICAqIEBwYXJhbSBibHVlIFRoZSBibHVlIGVsZW1lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihhbHBoYSwgcmVkLCBncmVlbiwgYmx1ZSkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihhbHBoYSkgfHwgYWxwaGEgPCAwIHx8IGFscGhhID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBhbHBoYSBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihyZWQpIHx8IHJlZCA8IDAgfHwgcmVkID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSByZWQgcGFyYW1ldGVyIG11c3QgYmUgYSBudW1iZXIgPj0gMCBhbmQgPD0gMjU1XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoZ3JlZW4pIHx8IGdyZWVuIDwgMCB8fCBncmVlbiA+IDI1NSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ3JlZW4gcGFyYW1ldGVyIG11c3QgYmUgYSBudW1iZXIgPj0gMCBhbmQgPD0gMjU1XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoYmx1ZSkgfHwgYmx1ZSA8IDAgfHwgYmx1ZSA+IDI1NSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYmx1ZSBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FscGhhID0gYWxwaGE7XHJcbiAgICAgICAgdGhpcy5fcmVkID0gcmVkO1xyXG4gICAgICAgIHRoaXMuX2dyZWVuID0gZ3JlZW47XHJcbiAgICAgICAgdGhpcy5fYmx1ZSA9IGJsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIGNvbG9yIGZyb20gYSBoZXggc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIGhleCBUaGUgaGV4IHN0cmluZyB0byBwYXJzZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21IZXgoaGV4KSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcoaGV4KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaGV4IHBhcmFtZXRlciBjYW4gbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWxwaGE7XHJcbiAgICAgICAgbGV0IHJlZDtcclxuICAgICAgICBsZXQgZ3JlZW47XHJcbiAgICAgICAgbGV0IGJsdWU7XHJcbiAgICAgICAgaWYgKC9eI1tBLUZhLWYwLTldezN9JC8udGVzdChoZXgpKSB7IC8vICNSR0JcclxuICAgICAgICAgICAgYWxwaGEgPSBcIjB4RkZcIjtcclxuICAgICAgICAgICAgcmVkID0gaGV4LnN1YnN0cigxLCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cigyLCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgICAgIGJsdWUgPSBoZXguc3Vic3RyKDMsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoL14jW0EtRmEtZjAtOV17NH0kLy50ZXN0KGhleCkpIHsgLy8gI0FSR0JcclxuICAgICAgICAgICAgYWxwaGEgPSBoZXguc3Vic3RyKDEsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgcmVkID0gaGV4LnN1YnN0cigyLCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cigzLCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgICAgIGJsdWUgPSBoZXguc3Vic3RyKDQsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoL14jW0EtRmEtZjAtOV17Nn0kLy50ZXN0KGhleCkpIHsgLy8gI1JSR0dCQlxyXG4gICAgICAgICAgICBhbHBoYSA9IFwiMHhGRlwiO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDEsIDIpO1xyXG4gICAgICAgICAgICBncmVlbiA9IGhleC5zdWJzdHIoMywgMik7XHJcbiAgICAgICAgICAgIGJsdWUgPSBoZXguc3Vic3RyKDUsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs4fSQvLnRlc3QoaGV4KSkgeyAvLyAjQUFSUkdHQkJcclxuICAgICAgICAgICAgYWxwaGEgPSBoZXguc3Vic3RyKDEsIDIpO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDMsIDIpO1xyXG4gICAgICAgICAgICBncmVlbiA9IGhleC5zdWJzdHIoNSwgMik7XHJcbiAgICAgICAgICAgIGJsdWUgPSBoZXguc3Vic3RyKDcsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGhleCBjb2xvciBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHMgI1JHQiwgI0FSR0IsICNSUkdHQkIsICNBQVJSR0dCQlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihwYXJzZUludChhbHBoYSwgMTYpLCBwYXJzZUludChyZWQsIDE2KSwgcGFyc2VJbnQoZ3JlZW4sIDE2KSwgcGFyc2VJbnQoYmx1ZSwgMTYpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBhbHBoYSBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGFscGhhIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGFscGhhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbHBoYTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSByZWQgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSByZWQgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgcmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZ3JlZW4gZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBncmVlbiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBncmVlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JlZW47XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgYmx1ZSBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGJsdWUgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYmx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIGFyZ2IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IgYXMgYXJnYi5cclxuICAgICAqL1xyXG4gICAgYXJnYigpIHtcclxuICAgICAgICByZXR1cm4gKCh0aGlzLl9hbHBoYSA8PCAyNCkgfCAodGhpcy5fcmVkIDw8IDE2KSB8ICh0aGlzLl9ncmVlbiA8PCA4KSB8IHRoaXMuX2JsdWUpID4+PiAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgcmdiYS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyByZ2JhLlxyXG4gICAgICovXHJcbiAgICByZ2JhKCkge1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMuX3JlZCA8PCAyNCkgfCAodGhpcy5fZ3JlZW4gPDwgMTYpIHwgKHRoaXMuX2JsdWUgPDwgOCkgfCB0aGlzLl9hbHBoYSkgPj4+IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyByZ2IgdGV4dC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyByZ2IuXHJcbiAgICAgKi9cclxuICAgIHJnYlRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0aGlzLl9yZWR9LCR7dGhpcy5fZ3JlZW59LCR7dGhpcy5fYmx1ZX0pYDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIHJnYmEgdGV4dC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyByZ2JhLlxyXG4gICAgICovXHJcbiAgICByZ2JhVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gYHJnYmEoJHt0aGlzLl9yZWR9LCR7dGhpcy5fZ3JlZW59LCR7dGhpcy5fYmx1ZX0sJHtNYXRoLnJvdW5kKHRoaXMuX2FscGhhIC8gMjU1ICogMTAwKSAvIDEwMH0pYDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIGhleCBubyBhbHBoYS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyBoZXggd2l0aCBubyBhbHBoYSBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIGhleCgpIHtcclxuICAgICAgICBjb25zdCByZWQgPSBgMDAke3RoaXMuX3JlZC50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBgMDAke3RoaXMuX2dyZWVuLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBibHVlID0gYDAwJHt0aGlzLl9ibHVlLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICByZXR1cm4gYCMke3JlZH0ke2dyZWVufSR7Ymx1ZX1gLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyBoZXggd2l0aCBhbHBoYS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyBoZXggd2l0aCB3aXRoIGFscGhhIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgaGV4V2l0aEFscGhhKCkge1xyXG4gICAgICAgIGNvbnN0IGFscGhhID0gYDAwJHt0aGlzLl9hbHBoYS50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgcmVkID0gYDAwJHt0aGlzLl9yZWQudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IGdyZWVuID0gYDAwJHt0aGlzLl9ncmVlbi50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgYmx1ZSA9IGAwMCR7dGhpcy5fYmx1ZS50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgcmV0dXJuIGAjJHthbHBoYX0ke3JlZH0ke2dyZWVufSR7Ymx1ZX1gLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOWpiMnh2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTUVSQlFYVkVPMEZCUTNaRUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTzBsQlZVazdPenM3T3p0UFFVMUhPMGxCUTBnc1dVRkJXU3hMUVVGaExFVkJRVVVzUjBGQlZ5eEZRVUZGTEV0QlFXRXNSVUZCUlN4SlFVRlpPMUZCUXk5RUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGRE5VUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UkVGQmMwUXNRMEZCUXl4RFFVRkRPMU5CUXpORk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGQlJUdFpRVU4wUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOUVRVUZ2UkN4RFFVRkRMRU5CUVVNN1UwRkRla1U3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlF6VkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBSQlFYTkVMRU5CUVVNc1EwRkJRenRUUVVNelJUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVTdXVUZEZWtRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHhSRUZCY1VRc1EwRkJReXhEUVVGRE8xTkJRekZGTzFGQlJVUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03VVVGRGFFSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGNFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVmM3VVVGRE4wSXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNiME5CUVc5RExFTkJRVU1zUTBGQlF6dFRRVU42UkR0UlFVVkVMRWxCUVVrc1MwRkJTeXhEUVVGRE8xRkJRMVlzU1VGQlNTeEhRVUZITEVOQlFVTTdVVUZEVWl4SlFVRkpMRXRCUVVzc1EwRkJRenRSUVVOV0xFbEJRVWtzU1VGQlNTeERRVUZETzFGQlExUXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUE8xbEJRM2hETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNN1dVRkRaaXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOeVF6dGhRVUZOTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1VVRkJVVHRaUVVOb1JDeExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzSkRPMkZCUVUwc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeFZRVUZWTzFsQlEyeEVMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRFppeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtJc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTXpRanRoUVVGTkxFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNXVUZCV1R0WlFVTndSQ3hMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrSXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNMEk3WVVGQlRUdFpRVU5JTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2IwWkJRVzlHTEVOQlFVTXNRMEZCUXp0VFFVTjZSenRSUVVORUxFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNSSExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hMUVVGTE8xRkJRMUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hIUVVGSE8xRkJRMDRzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hMUVVGTE8xRkJRMUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hKUVVGSk8xRkJRMUFzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hKUVVGSk8xRkJRMUFzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROMFlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFbEJRVWs3VVVGRFVDeFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1JpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVDBGQlR6dFJRVU5XTEU5QlFVOHNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4UlFVRlJMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1NVRkRNVWNzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFZEJRVWM3VVVGRFRpeE5RVUZOTEVkQlFVY3NSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VRc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM2hFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hQUVVGUExFbEJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NSMEZCUnl4SlFVRkpMRVZCUVVVc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NXVUZCV1R0UlFVTm1MRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VRc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM2hFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZITEVkQlFVY3NSMEZCUnl4TFFVRkxMRWRCUVVjc1NVRkJTU3hGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdTVUZETVVRc1EwRkJRenREUVVOS08wRkJia3RFTEhOQ1FXMUxReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVGQk8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJjMFExUlN4RFFVRkRPMGxCY0VSSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1NVRkRUQ3hEUVVGRE8wTkJTVW83UVVGNFJFUXNhME5CZDBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlN4RlFVRkZMRWxCUVdNN1VVRkROVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRemxDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE1VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU55UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNNVJDeERRVUZETzBOQlJVbzdRVUZxUTBRc2EwTkJhVU5ESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE51bWJlciBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE51bWJlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBpbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgaW50ZWdlcm5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBpbnRlZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG51bWJlcnluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEY2tZc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFWVTdVVUZETjBJc1QwRkJUeXhMUVVGTExFdEJRVXNzVTBGQlV5eEpRVUZKTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRMmhKTEVOQlFVTTdRMEZEU2p0QlFXeENSQ3h2UTBGclFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT2JqZWN0IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgT2JqZWN0SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiB0eXBlb2YgKHZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QgaWYgZ2l2ZW4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgQSBjYWxsYmFjayBtZXRob2Qgd2hpY2ggcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDbGFzc05hbWUgPSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZUNsYXNzTmFtZSA9PT0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh0eXBlQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0IGlmIGl0IGhhcyBvbmUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBjbGFzcyBuYW1lIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjbGFzcyBuYW1lIGlmIGl0IGhhcyBvbmUgb3IgdW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENsYXNzTmFtZShvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIiA/IG9iamVjdC50b1N0cmluZygpIDogb2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBjb25zdHJ1Y3Rvci5tYXRjaCgvXFx3Ky9nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdEhlbHBlciA9IE9iamVjdEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRVVzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGVkxFVkJRVVVzWlVGQmVVSTdVVUZEZEVRc1RVRkJUU3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONFJDeFBRVUZQTEdOQlFXTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1kwRkJZeXhMUVVGTExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVZjN1VVRkRiRU1zU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVrTXNUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEUxQlFVMHNWMEZCVnl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETVVNc1QwRkJUeXhEUVVGRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dFRRVU51UlR0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVRkRFJDeHZRMEUyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTdHJpbmcgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBzdHJpbmd5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZyB0aGF0IGlzIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbm8gZW1wdHluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIVN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgc3RyaW5nIGFsbCBBU0NJSSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHN0cmluZyB0byB0ZXN0IGlmIGlzIGlzIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFsbCBBU0NJSS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogL15bXFx4MDAtXFx4N0ZdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgbm9uIEFTQ0lJIGNoYXJhY3RlcnMgd2l0aCBjb250cm9sIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB2YWx1ZSB0byBlc2NhcGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXNjYXBlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbmNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvW1xcdTAwODAtXFx1RkZGRl0vZywgKGNocikgPT4gYFxcXFx1JHsoYDAwMDAke2Noci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKS5zdWJzdHIoLTQpfWApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzIHRvIEFTQ0lJLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHN0cmluZyB0byBjb252ZXJ0IGJhY2sgdG8gQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvXFxcXHUoW1xcZFxcd117NH0pL2dpLCAobWF0Y2gsIGdycCkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChncnAsIDE2KSkpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nSGVscGVyID0gU3RyaW5nSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1J5YVc1blNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZjM1J5YVc1blNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdsQ1FVRnBRaXhEUVVGRE8wbEJRemxGTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGaE8xRkJReTlDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRMMG9zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMmhLTEVOQlFVTTdRMEZEU2p0QlFTOURSQ3h2UTBFclEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIG1hbmlwdWxhdGUgVHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIHN0cmluZyB2YWx1ZSBpbnRvIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydCBpbnRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG8odmFsdWUpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHZhbHVlIGNhbiBub3QgYmUgZW1wdHlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhc2NpaVZhbHVlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGFzY2lpVmFsdWUgJSAyNztcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVmFsdWUgPSAoYXNjaWlWYWx1ZSAtIGZpcnN0VmFsdWUpIC8gMjc7XHJcbiAgICAgICAgICAgIHRyeXRlcyArPSBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbZmlyc3RWYWx1ZV0gKyBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbc2Vjb25kVmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyeXRlcyBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIGNvbnZlcnQgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgdmFsdWUgY29udmVydGVkIGZyb20gdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb20odHJ5dGVzKSB7XHJcbiAgICAgICAgbGV0IGFzY2lpID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0cnl0ZXMgY2FuIG5vdCBiZSBlbXB0eWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVzLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdHJ5dGVzIGxlbmd0aCBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyLCBpdCBpcyAke3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzSGVscGVyLmlzVHJ5dGVzKHRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHRyeXRlcyBjb250YWlucyBub24tdHJ5dGUgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IFRyeXRlc0hlbHBlci5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFZhbHVlID0gVHJ5dGVzSGVscGVyLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxWYWx1ZSA9IGZpcnN0VmFsdWUgKyBzZWNvbmRWYWx1ZSAqIDI3O1xyXG4gICAgICAgICAgICBhc2NpaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY2ltYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhc2NpaTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdG8gbWFrZSBzdXJlIGFsbCB0aGUgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW4gYXJlIHRyeXRlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRvIGNoZWNrIGZvciB2YWxpZGl0eS5cclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHRyeXRlcyBhcmUgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1RyeXRlcyh0cnl0ZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzICE9PSBudWxsICYmIHRyeXRlcyAhPT0gdW5kZWZpbmVkICYmIC9eWzlBLVpdKyQvLnRlc3QodHJ5dGVzKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzSGVscGVyLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXNIZWxwZXIgPSBUcnl0ZXNIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmRISjVkR1Z6U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTeHBSRUZCT0VNN1FVRkZPVU03TzBkQlJVYzdRVUZEU0R0SlFVMUpPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRV0U3VVVGRE1VSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSV2hDTEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETjBJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8xTkJRMnBFTzFGQlJVUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJrTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVjJReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTI1RExFMUJRVTBzVjBGQlZ5eEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVVZ1UkN4TlFVRk5MRWxCUVVrc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFOQlEzQkdPMUZCUlVRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRV003VVVGRE4wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSV1lzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU01UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExEWkNRVUUyUWl4RFFVRkRMRU5CUVVNN1UwRkRiRVE3VVVGRlJDeEpRVUZKTEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU42UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU4yUmp0UlFVVkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU12UkR0UlFVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hWUVVGVkxFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVRc1RVRkJUU3hYUVVGWExFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUldwRkxFMUJRVTBzV1VGQldTeEhRVUZITEZWQlFWVXNSMEZCUnl4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJSVzVFTEV0QlFVc3NTVUZCU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzFOQlF6bERPMUZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRV003VVVGRGFrTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU12UlN4RFFVRkRPenRCUVhCRlJEczdSMEZGUnp0QlFVTlhMSEZDUVVGUkxFZEJRVmNzTmtKQlFUWkNMRU5CUVVNN1FVRktia1VzYjBOQmMwVkRJbjA9IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvY29sb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL2FycmF5SGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9udW1iZXJIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy90cnl0ZXNIZWxwZXJcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NhME5CUVRaQ08wRkJRemRDTERaRFFVRjNRenRCUVVONFF5d3lRMEZCYzBNN1FVRkRkRU1zTkVOQlFYVkRPMEZCUTNaRExEUkRRVUYxUXp0QlFVTjJReXcwUTBGQmRVTTdRVUZEZGtNc05FTkJRWFZESW4wPSJdLCJzb3VyY2VSb290IjoiIn0=