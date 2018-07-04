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

      if (value) {
        if (!stringHelper_1.StringHelper.isASCII(value)) {
          throw new Error("The value contains non ASCII characters");
        }

        for (var i = 0; i < value.length; i++) {
          var asciiValue = value.charCodeAt(i);
          var firstValue = asciiValue % 27;
          var secondValue = (asciiValue - firstValue) / 27;
          trytes += TrytesHelper.ALPHABET[firstValue] + TrytesHelper.ALPHABET[secondValue];
        }
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

      if (trytes) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2RhdGEvY29sb3IudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy90cnl0ZXNIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7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RUEsY0FBTSxlQUFlLGFBQWEsY0FBYyxFQUFoRDtBQUVBLG1CQUFTLE9BQU8sWUFBUCxDQUFvQixZQUFwQixDQUFUO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLEtBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs2QkFLdUIsTSxFQUFjO0FBQ2pDLGFBQU8sV0FBVyxJQUFYLElBQW1CLFdBQVcsU0FBOUIsSUFBMkMsWUFBWSxJQUFaLENBQWlCLE1BQWpCLENBQWxEO0FBQ0g7Ozs7O0FBcEVEOzs7OztBQUdjLHdCQUFtQiw2QkFBbkI7QUFKbEIsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSw4RiIsImZpbGUiOiJ0YW5nbGUtZnJvc3QtaW90YS1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYW5nbGVGcm9zdElvdGFDb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgY29sb3IuXHJcbiAqL1xyXG5jbGFzcyBDb2xvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBjb2xvci5cclxuICAgICAqIEBwYXJhbSBhbHBoYSBUaGUgYWxwaGEgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gcmVkIFRoZSByZWQgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gZ3JlZW4gVGhlIGdyZWVuIGVsZW1lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIGJsdWUgVGhlIGJsdWUgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFscGhhLCByZWQsIGdyZWVuLCBibHVlKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGFscGhhKSB8fCBhbHBoYSA8IDAgfHwgYWxwaGEgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGFscGhhIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHJlZCkgfHwgcmVkIDwgMCB8fCByZWQgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHJlZCBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihncmVlbikgfHwgZ3JlZW4gPCAwIHx8IGdyZWVuID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBncmVlbiBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihibHVlKSB8fCBibHVlIDwgMCB8fCBibHVlID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBibHVlIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcclxuICAgICAgICB0aGlzLl9yZWQgPSByZWQ7XHJcbiAgICAgICAgdGhpcy5fZ3JlZW4gPSBncmVlbjtcclxuICAgICAgICB0aGlzLl9ibHVlID0gYmx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0IGEgY29sb3IgZnJvbSBhIGhleCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nIHRvIHBhcnNlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUhleChoZXgpIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhoZXgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBoZXggcGFyYW1ldGVyIGNhbiBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbHBoYTtcclxuICAgICAgICBsZXQgcmVkO1xyXG4gICAgICAgIGxldCBncmVlbjtcclxuICAgICAgICBsZXQgYmx1ZTtcclxuICAgICAgICBpZiAoL14jW0EtRmEtZjAtOV17M30kLy50ZXN0KGhleCkpIHsgLy8gI1JHQlxyXG4gICAgICAgICAgICBhbHBoYSA9IFwiMHhGRlwiO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDEsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDIsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoMywgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs0fSQvLnRlc3QoaGV4KSkgeyAvLyAjQVJHQlxyXG4gICAgICAgICAgICBhbHBoYSA9IGhleC5zdWJzdHIoMSwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDIsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDMsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNCwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs2fSQvLnRlc3QoaGV4KSkgeyAvLyAjUlJHR0JCXHJcbiAgICAgICAgICAgIGFscGhhID0gXCIweEZGXCI7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cigzLCAyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKC9eI1tBLUZhLWYwLTldezh9JC8udGVzdChoZXgpKSB7IC8vICNBQVJSR0dCQlxyXG4gICAgICAgICAgICBhbHBoYSA9IGhleC5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMywgMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cig1LCAyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNywgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaGV4IGNvbG9yIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0cyAjUkdCLCAjQVJHQiwgI1JSR0dCQiwgI0FBUlJHR0JCXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHBhcnNlSW50KGFscGhhLCAxNiksIHBhcnNlSW50KHJlZCwgMTYpLCBwYXJzZUludChncmVlbiwgMTYpLCBwYXJzZUludChibHVlLCAxNikpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGFscGhhIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYWxwaGEgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYWxwaGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FscGhhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJlZCBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHJlZCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICByZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBncmVlbiBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGdyZWVuIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGdyZWVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmVlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBibHVlIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYmx1ZSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBibHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgYXJnYi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyBhcmdiLlxyXG4gICAgICovXHJcbiAgICBhcmdiKCkge1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMuX2FscGhhIDw8IDI0KSB8ICh0aGlzLl9yZWQgPDwgMTYpIHwgKHRoaXMuX2dyZWVuIDw8IDgpIHwgdGhpcy5fYmx1ZSkgPj4+IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyByZ2JhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKi9cclxuICAgIHJnYmEoKSB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5fcmVkIDw8IDI0KSB8ICh0aGlzLl9ncmVlbiA8PCAxNikgfCAodGhpcy5fYmx1ZSA8PCA4KSB8IHRoaXMuX2FscGhhKSA+Pj4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIHJnYiB0ZXh0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYi5cclxuICAgICAqL1xyXG4gICAgcmdiVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgcmdiYSB0ZXh0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKi9cclxuICAgIHJnYmFUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSwke01hdGgucm91bmQodGhpcy5fYWxwaGEgLyAyNTUgKiAxMDApIC8gMTAwfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgaGV4IG5vIGFscGhhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGhleCB3aXRoIG5vIGFscGhhIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgaGV4KCkge1xyXG4gICAgICAgIGNvbnN0IHJlZCA9IGAwMCR7dGhpcy5fcmVkLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBncmVlbiA9IGAwMCR7dGhpcy5fZ3JlZW4udG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IGJsdWUgPSBgMDAke3RoaXMuX2JsdWUudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIHJldHVybiBgIyR7cmVkfSR7Z3JlZW59JHtibHVlfWAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIGhleCB3aXRoIGFscGhhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGhleCB3aXRoIHdpdGggYWxwaGEgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBoZXhXaXRoQWxwaGEoKSB7XHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSBgMDAke3RoaXMuX2FscGhhLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCByZWQgPSBgMDAke3RoaXMuX3JlZC50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBgMDAke3RoaXMuX2dyZWVuLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBibHVlID0gYDAwJHt0aGlzLl9ibHVlLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICByZXR1cm4gYCMke2FscGhhfSR7cmVkfSR7Z3JlZW59JHtibHVlfWAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5amIyeHZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVWMlJEczdSMEZGUnp0QlFVTklPMGxCVlVrN096czdPenRQUVUxSE8wbEJRMGdzV1VGQldTeExRVUZoTEVWQlFVVXNSMEZCVnl4RlFVRkZMRXRCUVdFc1JVRkJSU3hKUVVGWk8xRkJReTlFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEhRVUZITEVWQlFVVTdXVUZETlVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpSRUZCYzBRc1EwRkJReXhEUVVGRE8xTkJRek5GTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZCUlR0WlFVTjBSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5RVFVRnZSQ3hEUVVGRExFTkJRVU03VTBGRGVrVTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZPMWxCUXpWRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMFJCUVhORUxFTkJRVU1zUTBGQlF6dFRRVU16UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRla1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4eFJFRkJjVVFzUTBGQlF5eERRVUZETzFOQlF6RkZPMUZCUlVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEYUVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFWYzdVVUZETjBJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2IwTkJRVzlETEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETzFGQlExWXNTVUZCU1N4SFFVRkhMRU5CUVVNN1VVRkRVaXhKUVVGSkxFdEJRVXNzUTBGQlF6dFJRVU5XTEVsQlFVa3NTVUZCU1N4RFFVRkRPMUZCUTFRc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTzFsQlEzaERMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03V1VGRFppeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU55UXp0aFFVRk5MRWxCUVVrc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVUdFpRVU5vUkN4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtNc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNKRE8yRkJRVTBzU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4VlFVRlZPMWxCUTJ4RUxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZEWml4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka0lzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcENMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNelFqdGhRVUZOTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1dVRkJXVHRaUVVOd1JDeExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtJc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wSTdZVUZCVFR0WlFVTklMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYjBaQlFXOUdMRU5CUVVNc1EwRkJRenRUUVVONlJ6dFJRVU5FTEU5QlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1JITEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeEhRVUZITzFGQlEwNHNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeExRVUZMTzFGQlExSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeEpRVUZKTzFGQlExQXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeEpRVUZKTzFGQlExQXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE4wWXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEVsQlFVazdVVUZEVUN4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0zUml4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUMEZCVHp0UlFVTldMRTlCUVU4c1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETzBsQlF6VkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhSUVVGUkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRE1VY3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEVkQlFVYzdVVUZEVGl4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaEVMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJDeFBRVUZQTEVsQlFVa3NSMEZCUnl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1dVRkJXVHRSUVVObUxFMUJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU40UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzaEVMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWRCUVVjc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5LTzBGQmJrdEVMSE5DUVcxTFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHR5cGVzLlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICovXHJcbmNsYXNzIEZhY3RvcnlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX3R5cGVzID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHR5cGUgd2l0aCB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHJlZ2lzdGVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLlxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihuYW1lLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdID0gdHlwZUNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGEgdHlwZSBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gdW5yZWdpc3Rlci5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIGZhY3RvcnkgY29udGFpbiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBleGlzdHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIExpc3QgdGhlIHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgdHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBjcmVhdGUuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGluc3RhbmNlIG9mIHRoZSB0eXBlIGlmIGl0IGV4aXN0cywgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGUobmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5fdHlwZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl90eXBlc1tuYW1lXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmFjdG9yeUJhc2UgPSBGYWN0b3J5QmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllVUpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDJaaFkzUnZjbmxDWVhObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNEdEpRVUZCTzFGQlEwa3NaVUZCWlR0UlFVTkZMRmRCUVUwc1IwRkJPRU1zUlVGQlJTeERRVUZETzBsQmMwUTFSU3hEUVVGRE8wbEJjRVJIT3pzN08wOUJTVWM3U1VGRFNTeFJRVUZSTEVOQlFVTXNTVUZCV1N4RlFVRkZMR1ZCUVhORE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NaVUZCWlN4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU14UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTVUZCV1R0UlFVTjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEzcEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRkRU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlF6dGhRVUZOTzFsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3U1VGRFRDeERRVUZETzBOQlNVbzdRVUY0UkVRc2EwTkJkMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBcnJheSBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBlbXB0eSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG5vbiBlbXB0eSBhcnJheSBvZiBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBub24gZW1wdHkgYXJyYXkgb2YgYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlZCh2YWx1ZSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNFbXB0eSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKHVuZGVmaW5lZCkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKG51bGwpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmV2ZXJ5KChhKSA9PiBvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGEsIHR5cGUpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5SGVscGVyID0gQXJyYXlIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYSnlZWGxJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5aGNuSmhlVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2FVUkJRVGhETzBGQlJUbERPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpkRUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWU3hGUVVGRkxFbEJRV003VVVGRE5VTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6bENMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETVVJc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPME5CUlVvN1FVRnFRMFFzYTBOQmFVTkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVySGVscGVyID0gTnVtYmVySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeVNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiblZ0WW1WeVNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJWVHRSUVVNNVFpeFBRVUZQTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRja1lzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVZVN1VVRkROMElzVDBGQlR5eExRVUZMTEV0QlFVc3NVMEZCVXl4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaEpMRU5CUVVNN1EwRkRTanRCUVd4Q1JDeHZRMEZyUWtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBBIGNhbGxiYWNrIG1ldGhvZCB3aGljaCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRFVXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZWTEVWQlFVVXNaVUZCZVVJN1VVRkRkRVFzVFVGQlRTeGpRVUZqTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UkN4UFFVRlBMR05CUVdNc1MwRkJTeXhUUVVGVExFbEJRVWtzWTBGQll5eExRVUZMTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVmM3VVVGRGJFTXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZWtNc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdZVUZCVFR0WlFVTklMRTFCUVUwc1YwRkJWeXhIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEzSkhMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0VFFVTnVSVHRKUVVOTUxFTkJRVU03UTBGRFNqdEJRVGREUkN4dlEwRTJRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXMgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHg3Rl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA4MC1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMR2xDUVVGcFFpeERRVUZETzBsQlF6bEZMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF5OUVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZoTzFGQlF5OUNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03U1VGREwwb3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEyaEtMRU5CUVVNN1EwRkRTanRCUVM5RFJDeHZRMEVyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4vc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gbWFuaXB1bGF0ZSBUcnl0ZXMuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZXNIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHZhbHVlIGludG8gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0IGludG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0byh2YWx1ZSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXMgPSBcIlwiO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0FTQ0lJKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdmFsdWUgY29udGFpbnMgbm9uIEFTQ0lJIGNoYXJhY3RlcnNgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc2NpaVZhbHVlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0VmFsdWUgPSBhc2NpaVZhbHVlICUgMjc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRWYWx1ZSA9IChhc2NpaVZhbHVlIC0gZmlyc3RWYWx1ZSkgLyAyNztcclxuICAgICAgICAgICAgICAgIHRyeXRlcyArPSBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbZmlyc3RWYWx1ZV0gKyBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbc2Vjb25kVmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdHJ5dGVzIGludG8gYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gY29udmVydCBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyB2YWx1ZSBjb252ZXJ0ZWQgZnJvbSB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbSh0cnl0ZXMpIHtcclxuICAgICAgICBsZXQgYXNjaWkgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0cnl0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRyeXRlcy5sZW5ndGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0cnl0ZXMgbGVuZ3RoIG11c3QgYmUgYW4gZXZlbiBudW1iZXIsIGl0IGlzICR7dHJ5dGVzLmxlbmd0aH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIVRyeXRlc0hlbHBlci5pc1RyeXRlcyh0cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdHJ5dGVzIGNvbnRhaW5zIG5vbi10cnl0ZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFZhbHVlID0gVHJ5dGVzSGVscGVyLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFZhbHVlID0gVHJ5dGVzSGVscGVyLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNpbWFsVmFsdWUgPSBmaXJzdFZhbHVlICsgc2Vjb25kVmFsdWUgKiAyNztcclxuICAgICAgICAgICAgICAgIGFzY2lpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGVjaW1hbFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXNjaWk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIHRvIG1ha2Ugc3VyZSBhbGwgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHN0cmluIGFyZSB0cnl0ZSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUbyBjaGVjayBmb3IgdmFsaWRpdHkuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSB0cnl0ZXMgYXJlIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUcnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlcyAhPT0gbnVsbCAmJiB0cnl0ZXMgIT09IHVuZGVmaW5lZCAmJiAvXls5QS1aXSskLy50ZXN0KHRyeXRlcyk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEFsbCB0aGUgY2hhcmFjdGVycyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyeXRlcy5cclxuICovXHJcblRyeXRlc0hlbHBlci5BTFBIQUJFVCA9IFwiOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbmV4cG9ydHMuVHJ5dGVzSGVscGVyID0gVHJ5dGVzSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWelNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZkSEo1ZEdWelNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3hwUkVGQk9FTTdRVUZGT1VNN08wZEJSVWM3UVVGRFNEdEpRVTFKT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVdFN1VVRkRNVUlzU1VGQlNTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUldoQ0xFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExQXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVNNVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdZVUZET1VRN1dVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRia01zVFVGQlRTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZGZGtNc1RVRkJUU3hWUVVGVkxFZEJRVWNzVlVGQlZTeEhRVUZITEVWQlFVVXNRMEZCUXp0blFrRkRia01zVFVGQlRTeFhRVUZYTEVkQlFVY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVVnVSQ3hOUVVGTkxFbEJRVWtzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMkZCUTNCR08xTkJRMG83VVVGRlJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGWml4SlFVRkpMRTFCUVUwc1JVRkJSVHRaUVVOU0xFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU42UWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU4yUmp0WlFVVkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVOb1F5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMREJEUVVFd1F5eERRVUZETEVOQlFVTTdZVUZETDBRN1dVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMmRDUVVOMlF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE5VUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVnFSU3hOUVVGTkxGbEJRVmtzUjBGQlJ5eFZRVUZWTEVkQlFVY3NWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRmJrUXNTMEZCU3l4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdZVUZET1VNN1UwRkRTanRSUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZqTzFGQlEycERMRTlCUVU4c1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeE5RVUZOTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZETDBVc1EwRkJRenM3UVVGd1JVUTdPMGRCUlVjN1FVRkRWeXh4UWtGQlVTeEhRVUZYTERaQ1FVRTJRaXhEUVVGRE8wRkJTbTVGTEc5RFFYTkZReUo5IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvY29sb3JcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL2FycmF5SGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9udW1iZXJIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy90cnl0ZXNIZWxwZXJcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NhME5CUVRaQ08wRkJRemRDTERaRFFVRjNRenRCUVVONFF5d3lRMEZCYzBNN1FVRkRkRU1zTkVOQlFYVkRPMEZCUTNaRExEUkRRVUYxUXp0QlFVTjJReXcwUTBGQmRVTTdRVUZEZGtNc05FTkJRWFZESW4wPSJdLCJzb3VyY2VSb290IjoiIn0=