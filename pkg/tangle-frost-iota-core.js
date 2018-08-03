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
     * @param value string to test if it is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isASCII",
    value: function isASCII(value) {
      return value === null || value === undefined ? false : /^[\x00-\x7F]*$/.test(value);
    }
    /**
     * Is the string all printable characters, including tab, carriage return and line feed.
     * @param value string to test if it is printabl.
     * @returns True if the object is all printable
     */

  }, {
    key: "isPrintable",
    value: function isPrintable(value) {
      return value === null || value === undefined ? false : /^[\x09\x0A\x0D\x20-\xFF]*$/.test(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2RhdGEvY29sb3IudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy90cnl0ZXNIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7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QztBQUN2QyxZQUFNLGFBQWEsYUFBYSxRQUFiLENBQXNCLE9BQXRCLENBQThCLE9BQU8sQ0FBUCxDQUE5QixDQUFuQjtBQUNBLFlBQU0sY0FBYyxhQUFhLFFBQWIsQ0FBc0IsT0FBdEIsQ0FBOEIsT0FBTyxJQUFJLENBQVgsQ0FBOUIsQ0FBcEI7QUFFQSxZQUFNLGVBQWUsYUFBYSxjQUFjLEVBQWhEO0FBRUEsaUJBQVMsT0FBTyxZQUFQLENBQW9CLFlBQXBCLENBQVQ7QUFDSDs7QUFFRCxhQUFPLEtBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs2QkFLdUIsTSxFQUFjO0FBQ2pDLGFBQU8sV0FBVyxJQUFYLElBQW1CLFdBQVcsU0FBOUIsSUFBMkMsWUFBWSxJQUFaLENBQWlCLE1BQWpCLENBQWxEO0FBQ0g7Ozs7O0FBcEVEOzs7OztBQUdjLHdCQUFtQiw2QkFBbkI7QUFKbEIsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4RiIsImZpbGUiOiJ0YW5nbGUtZnJvc3QtaW90YS1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYW5nbGVGcm9zdElvdGFDb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgY29sb3IuXHJcbiAqL1xyXG5jbGFzcyBDb2xvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBjb2xvci5cclxuICAgICAqIEBwYXJhbSBhbHBoYSBUaGUgYWxwaGEgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gcmVkIFRoZSByZWQgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gZ3JlZW4gVGhlIGdyZWVuIGVsZW1lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIGJsdWUgVGhlIGJsdWUgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFscGhhLCByZWQsIGdyZWVuLCBibHVlKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGFscGhhKSB8fCBhbHBoYSA8IDAgfHwgYWxwaGEgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGFscGhhIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHJlZCkgfHwgcmVkIDwgMCB8fCByZWQgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHJlZCBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihncmVlbikgfHwgZ3JlZW4gPCAwIHx8IGdyZWVuID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBncmVlbiBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihibHVlKSB8fCBibHVlIDwgMCB8fCBibHVlID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBibHVlIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcclxuICAgICAgICB0aGlzLl9yZWQgPSByZWQ7XHJcbiAgICAgICAgdGhpcy5fZ3JlZW4gPSBncmVlbjtcclxuICAgICAgICB0aGlzLl9ibHVlID0gYmx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0IGEgY29sb3IgZnJvbSBhIGhleCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nIHRvIHBhcnNlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUhleChoZXgpIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhoZXgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBoZXggcGFyYW1ldGVyIGNhbiBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbHBoYTtcclxuICAgICAgICBsZXQgcmVkO1xyXG4gICAgICAgIGxldCBncmVlbjtcclxuICAgICAgICBsZXQgYmx1ZTtcclxuICAgICAgICBpZiAoL14jW0EtRmEtZjAtOV17M30kLy50ZXN0KGhleCkpIHsgLy8gI1JHQlxyXG4gICAgICAgICAgICBhbHBoYSA9IFwiMHhGRlwiO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDEsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDIsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoMywgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs0fSQvLnRlc3QoaGV4KSkgeyAvLyAjQVJHQlxyXG4gICAgICAgICAgICBhbHBoYSA9IGhleC5zdWJzdHIoMSwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDIsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDMsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNCwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs2fSQvLnRlc3QoaGV4KSkgeyAvLyAjUlJHR0JCXHJcbiAgICAgICAgICAgIGFscGhhID0gXCIweEZGXCI7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cigzLCAyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKC9eI1tBLUZhLWYwLTldezh9JC8udGVzdChoZXgpKSB7IC8vICNBQVJSR0dCQlxyXG4gICAgICAgICAgICBhbHBoYSA9IGhleC5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMywgMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cig1LCAyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNywgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaGV4IGNvbG9yIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0cyAjUkdCLCAjQVJHQiwgI1JSR0dCQiwgI0FBUlJHR0JCXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHBhcnNlSW50KGFscGhhLCAxNiksIHBhcnNlSW50KHJlZCwgMTYpLCBwYXJzZUludChncmVlbiwgMTYpLCBwYXJzZUludChibHVlLCAxNikpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGFscGhhIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYWxwaGEgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYWxwaGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FscGhhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJlZCBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHJlZCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICByZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBncmVlbiBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGdyZWVuIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGdyZWVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmVlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBibHVlIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYmx1ZSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBibHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgYXJnYi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyBhcmdiLlxyXG4gICAgICovXHJcbiAgICBhcmdiKCkge1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMuX2FscGhhIDw8IDI0KSB8ICh0aGlzLl9yZWQgPDwgMTYpIHwgKHRoaXMuX2dyZWVuIDw8IDgpIHwgdGhpcy5fYmx1ZSkgPj4+IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyByZ2JhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKi9cclxuICAgIHJnYmEoKSB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5fcmVkIDw8IDI0KSB8ICh0aGlzLl9ncmVlbiA8PCAxNikgfCAodGhpcy5fYmx1ZSA8PCA4KSB8IHRoaXMuX2FscGhhKSA+Pj4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIHJnYiB0ZXh0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYi5cclxuICAgICAqL1xyXG4gICAgcmdiVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgcmdiYSB0ZXh0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKi9cclxuICAgIHJnYmFUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSwke01hdGgucm91bmQodGhpcy5fYWxwaGEgLyAyNTUgKiAxMDApIC8gMTAwfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgaGV4IG5vIGFscGhhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGhleCB3aXRoIG5vIGFscGhhIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgaGV4KCkge1xyXG4gICAgICAgIGNvbnN0IHJlZCA9IGAwMCR7dGhpcy5fcmVkLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBncmVlbiA9IGAwMCR7dGhpcy5fZ3JlZW4udG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IGJsdWUgPSBgMDAke3RoaXMuX2JsdWUudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIHJldHVybiBgIyR7cmVkfSR7Z3JlZW59JHtibHVlfWAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIGhleCB3aXRoIGFscGhhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGhleCB3aXRoIHdpdGggYWxwaGEgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBoZXhXaXRoQWxwaGEoKSB7XHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSBgMDAke3RoaXMuX2FscGhhLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCByZWQgPSBgMDAke3RoaXMuX3JlZC50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBgMDAke3RoaXMuX2dyZWVuLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBibHVlID0gYDAwJHt0aGlzLl9ibHVlLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICByZXR1cm4gYCMke2FscGhhfSR7cmVkfSR7Z3JlZW59JHtibHVlfWAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5amIyeHZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVWMlJEczdSMEZGUnp0QlFVTklMRTFCUVdFc1MwRkJTenRKUVZWa096czdPenM3VDBGTlJ6dEpRVU5JTEZsQlFWa3NTMEZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hMUVVGaExFVkJRVVVzU1VGQldUdFJRVU12UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZPMWxCUXpWRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMFJCUVhORUxFTkJRVU1zUTBGQlF6dFRRVU16UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRkRVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4dlJFRkJiMFFzUTBGQlF5eERRVUZETzFOQlEzcEZPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWRCUVVjc1JVRkJSVHRaUVVNMVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5FUVVGelJDeERRVUZETEVOQlFVTTdVMEZETTBVN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRM3BFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVWRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRlhPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU0zUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXp0UlFVTldMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRMUlzU1VGQlNTeExRVUZMTEVOQlFVTTdVVUZEVml4SlFVRkpMRWxCUVVrc1EwRkJRenRSUVVOVUxFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNUMEZCVHp0WlFVTjRReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETzFsQlEyWXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxHMUNRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRTdXVUZEYUVRc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOeVF6dGhRVUZOTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1ZVRkJWVHRaUVVOc1JDeExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTJZc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wSTdZVUZCVFN4SlFVRkpMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxGbEJRVms3V1VGRGNFUXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRla0lzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkNPMkZCUVUwN1dVRkRTQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5R1FVRnZSaXhEUVVGRExFTkJRVU03VTBGRGVrYzdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4wUnl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NSMEZCUnp0UlFVTk9MRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTVUZCU1R0UlFVTlFMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTVUZCU1R0UlFVTlFMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZEdMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4SlFVRkpPMUZCUTFBc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBZc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXp0SlFVTTFSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzVVVGQlVTeEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlF6RkhMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4SFFVRkhPMUZCUTA0c1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFUXNUMEZCVHl4SlFVRkpMRWRCUVVjc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGbEJRVms3VVVGRFppeE5RVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFUXNUMEZCVHl4SlFVRkpMRXRCUVVzc1IwRkJSeXhIUVVGSExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJRekZFTEVOQlFVTTdRMEZEU2p0QlFXNUxSQ3h6UWtGdFMwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hOUVVGelFpeFhRVUZYTzBsQlFXcERPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTNwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVZrc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGRFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjJRaXhQUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UXp0aFFVRk5PMWxCUTBnc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdTVUZEVEN4RFFVRkRPME5CU1VvN1FVRjRSRVFzYTBOQmQwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZ3NUVUZCWVN4WFFVRlhPMGxCUTNCQ096czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1QwRkJUeXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZMRVZCUVVVc1NVRkJZenRSUVVNMVF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU03V1VGRE9VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU14UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzSkNMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRemxFTEVOQlFVTTdRMEZGU2p0QlFXcERSQ3hyUTBGcFEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVySGVscGVyID0gTnVtYmVySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeVNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiblZ0WW1WeVNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNXVUZCV1R0SlFVTnlRanM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZWTzFGQlF6bENMRTlCUVU4c1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU55Uml4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhUUVVGVExFbEJRVWtzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4UFFVRlBMRXRCUVVzc1MwRkJTeXhSUVVGUkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRhRWtzUTBGQlF6dERRVU5LTzBGQmJFSkVMRzlEUVd0Q1F5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBBIGNhbGxiYWNrIG1ldGhvZCB3aGljaCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNXVUZCV1R0SlFVTnlRanM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBSU3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVZVc1JVRkJSU3hsUVVGNVFqdFJRVU4wUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRUxFOUJRVThzWTBGQll5eExRVUZMTEZOQlFWTXNTVUZCU1N4alFVRmpMRXRCUVVzc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0SlFVTjZSeXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVnp0UlFVTnNReXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVONlF5eFBRVUZQTEZOQlFWTXNRMEZCUXp0VFFVTndRanRoUVVGTk8xbEJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4TlFVRk5MRXRCUVVzc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkRja2NzVFVGQlRTeFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU14UXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRMjVGTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjBORUxHOURRVFpEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXQgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHg3Rl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIHByaW50YWJsZSBjaGFyYWN0ZXJzLCBpbmNsdWRpbmcgdGFiLCBjYXJyaWFnZSByZXR1cm4gYW5kIGxpbmUgZmVlZC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpdCBpcyBwcmludGFibC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgcHJpbnRhYmxlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ByaW50YWJsZSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwOVxceDBBXFx4MERcXHgyMC1cXHhGRl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA4MC1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVOeVFqczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMMFFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVdFN1VVRkRMMElzVDBGQlR5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQllUdFJRVU51UXl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpORUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRmhPMUZCUTNSRExFOUJRVThzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJReTlLTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGaE8xRkJRM1JETEU5QlFVOHNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRjZSRVFzYjBOQmVVUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIG1hbmlwdWxhdGUgVHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIHN0cmluZyB2YWx1ZSBpbnRvIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydCBpbnRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG8odmFsdWUpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHZhbHVlIGNhbiBub3QgYmUgZW1wdHlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhc2NpaVZhbHVlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGFzY2lpVmFsdWUgJSAyNztcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVmFsdWUgPSAoYXNjaWlWYWx1ZSAtIGZpcnN0VmFsdWUpIC8gMjc7XHJcbiAgICAgICAgICAgIHRyeXRlcyArPSBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbZmlyc3RWYWx1ZV0gKyBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbc2Vjb25kVmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyeXRlcyBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIGNvbnZlcnQgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgdmFsdWUgY29udmVydGVkIGZyb20gdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb20odHJ5dGVzKSB7XHJcbiAgICAgICAgbGV0IGFzY2lpID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0cnl0ZXMgY2FuIG5vdCBiZSBlbXB0eWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVzLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdHJ5dGVzIGxlbmd0aCBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyLCBpdCBpcyAke3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzSGVscGVyLmlzVHJ5dGVzKHRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHRyeXRlcyBjb250YWlucyBub24tdHJ5dGUgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IFRyeXRlc0hlbHBlci5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFZhbHVlID0gVHJ5dGVzSGVscGVyLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxWYWx1ZSA9IGZpcnN0VmFsdWUgKyBzZWNvbmRWYWx1ZSAqIDI3O1xyXG4gICAgICAgICAgICBhc2NpaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY2ltYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhc2NpaTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdG8gbWFrZSBzdXJlIGFsbCB0aGUgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW4gYXJlIHRyeXRlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRvIGNoZWNrIGZvciB2YWxpZGl0eS5cclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHRyeXRlcyBhcmUgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1RyeXRlcyh0cnl0ZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzICE9PSBudWxsICYmIHRyeXRlcyAhPT0gdW5kZWZpbmVkICYmIC9eWzlBLVpdKyQvLnRlc3QodHJ5dGVzKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzSGVscGVyLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXNIZWxwZXIgPSBUcnl0ZXNIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmRISjVkR1Z6U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTeHBSRUZCT0VNN1FVRkZPVU03TzBkQlJVYzdRVUZEU0N4TlFVRmhMRmxCUVZrN1NVRk5ja0k3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCWVR0UlFVTXhRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGYUVJc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRFJDUVVFMFFpeERRVUZETEVOQlFVTTdVMEZEYWtRN1VVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnVReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWFpETEUxQlFVMHNWVUZCVlN4SFFVRkhMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGJrTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUlc1RUxFMUJRVTBzU1VGQlNTeFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1UwRkRjRVk3VVVGRlJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGWml4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMWxCUXpsQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNwQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNiVVJCUVcxRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNaR08xRkJSVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXd3UTBGQk1FTXNRMEZCUXl4RFFVRkRPMU5CUXk5RU8xRkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmFrVXNUVUZCVFN4WlFVRlpMRWRCUVVjc1ZVRkJWU3hIUVVGSExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZGYmtRc1MwRkJTeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1UwRkRPVU03VVVGRlJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTnFReXhQUVVGUExFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RkxFTkJRVU03TzBGQmNFVkVPenRIUVVWSE8wRkJRMWNzY1VKQlFWRXNSMEZCVnl3MlFrRkJOa0lzUTBGQlF6dEJRVXB1UlN4dlEwRnpSVU1pZlE9PSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL2NvbG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9hcnJheUhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9vYmplY3RIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHJ5dGVzSGVscGVyXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzYTBOQlFUWkNPMEZCUXpkQ0xEWkRRVUYzUXp0QlFVTjRReXd5UTBGQmMwTTdRVUZEZEVNc05FTkJRWFZETzBGQlEzWkRMRFJEUVVGMVF6dEJRVU4yUXl3MFEwRkJkVU03UVVGRGRrTXNORU5CUVhWREluMD0iXSwic291cmNlUm9vdCI6IiJ9