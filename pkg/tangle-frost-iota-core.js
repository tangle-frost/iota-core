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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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
      return (0, _keys.default)(this.getInstance()._types);
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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

var _isFinite = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/number/is-finite */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/number/is-finite.js"));

var _isNan = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/number/is-nan */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/number/is-nan.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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
      return typeof value === "number" && !(0, _isNan.default)(value) && (0, _isFinite.default)(value) && Math.floor(value) === value;
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !(0, _isNan.default)(value) && (0, _isFinite.default)(value);
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


var _iterator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js"));

var _symbol = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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
     * Check to make sure all the characters in the string are tryte characters.
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

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/number/is-finite.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/number/is-finite.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-finite */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/number/is-finite.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/number/is-nan.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/number/is-nan.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/number/is-nan.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/keys.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/keys.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/number/is-finite.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/number/is-finite.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-finite */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.number.is-finite.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Number.isFinite;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/number/is-nan.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/number/is-nan.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-nan */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.number.is-nan.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Number.isNaN;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/define-property.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/define-property.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/keys.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/keys.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_a-function.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_a-function.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_array-includes.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_array-includes.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-keys.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_html.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_html.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iobject.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iobject.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-array.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-array.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-create.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-create.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-step.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-step.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_meta.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_meta.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dps.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dps.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-sap.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-sap.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_string-at.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_string-at.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-length.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-length.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.number.is-finite.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.number.is-finite.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.number.is-nan.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.number.is-nan.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.keys.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.symbol.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2RhdGEvY29sb3IudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvaGVscGVycy90cnl0ZXNIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNTEvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvbnVtYmVyL2lzLWZpbml0ZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS41MS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9udW1iZXIvaXMtbmFuLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AYmFiZWwvcnVudGltZS83LjAuMC1iZXRhLjUxL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNTEvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNTEvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AYmFiZWwvcnVudGltZS83LjAuMC1iZXRhLjUxL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL251bWJlci9pcy1maW5pdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvaXMtbmFuLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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QTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsZUFBZSxFQUFFO0FBQzNDLDBCQUEwQixnQkFBZ0I7QUFDMUMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sUUFBUSxpQ0FBaUM7QUFDcEcsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDek9BOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0YW5nbGUtZnJvc3QtaW90YS1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYW5nbGVGcm9zdElvdGFDb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgY29sb3IuXHJcbiAqL1xyXG5jbGFzcyBDb2xvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBjb2xvci5cclxuICAgICAqIEBwYXJhbSBhbHBoYSBUaGUgYWxwaGEgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gcmVkIFRoZSByZWQgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gZ3JlZW4gVGhlIGdyZWVuIGVsZW1lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIGJsdWUgVGhlIGJsdWUgZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFscGhhLCByZWQsIGdyZWVuLCBibHVlKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGFscGhhKSB8fCBhbHBoYSA8IDAgfHwgYWxwaGEgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGFscGhhIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHJlZCkgfHwgcmVkIDwgMCB8fCByZWQgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHJlZCBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihncmVlbikgfHwgZ3JlZW4gPCAwIHx8IGdyZWVuID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBncmVlbiBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSAyNTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihibHVlKSB8fCBibHVlIDwgMCB8fCBibHVlID4gMjU1KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBibHVlIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcclxuICAgICAgICB0aGlzLl9yZWQgPSByZWQ7XHJcbiAgICAgICAgdGhpcy5fZ3JlZW4gPSBncmVlbjtcclxuICAgICAgICB0aGlzLl9ibHVlID0gYmx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0IGEgY29sb3IgZnJvbSBhIGhleCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nIHRvIHBhcnNlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUhleChoZXgpIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyhoZXgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBoZXggcGFyYW1ldGVyIGNhbiBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbHBoYTtcclxuICAgICAgICBsZXQgcmVkO1xyXG4gICAgICAgIGxldCBncmVlbjtcclxuICAgICAgICBsZXQgYmx1ZTtcclxuICAgICAgICBpZiAoL14jW0EtRmEtZjAtOV17M30kLy50ZXN0KGhleCkpIHsgLy8gI1JHQlxyXG4gICAgICAgICAgICBhbHBoYSA9IFwiMHhGRlwiO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDEsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDIsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoMywgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs0fSQvLnRlc3QoaGV4KSkgeyAvLyAjQVJHQlxyXG4gICAgICAgICAgICBhbHBoYSA9IGhleC5zdWJzdHIoMSwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICByZWQgPSBoZXguc3Vic3RyKDIsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDMsIDEpLnJlcGVhdCgyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNCwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgvXiNbQS1GYS1mMC05XXs2fSQvLnRlc3QoaGV4KSkgeyAvLyAjUlJHR0JCXHJcbiAgICAgICAgICAgIGFscGhhID0gXCIweEZGXCI7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cigzLCAyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKC9eI1tBLUZhLWYwLTldezh9JC8udGVzdChoZXgpKSB7IC8vICNBQVJSR0dCQlxyXG4gICAgICAgICAgICBhbHBoYSA9IGhleC5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMywgMik7XHJcbiAgICAgICAgICAgIGdyZWVuID0gaGV4LnN1YnN0cig1LCAyKTtcclxuICAgICAgICAgICAgYmx1ZSA9IGhleC5zdWJzdHIoNywgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaGV4IGNvbG9yIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0cyAjUkdCLCAjQVJHQiwgI1JSR0dCQiwgI0FBUlJHR0JCXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHBhcnNlSW50KGFscGhhLCAxNiksIHBhcnNlSW50KHJlZCwgMTYpLCBwYXJzZUludChncmVlbiwgMTYpLCBwYXJzZUludChibHVlLCAxNikpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGFscGhhIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYWxwaGEgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgYWxwaGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FscGhhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJlZCBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHJlZCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICByZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBncmVlbiBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGdyZWVuIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGdyZWVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncmVlbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBibHVlIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYmx1ZSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBibHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgYXJnYi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xvciBhcyBhcmdiLlxyXG4gICAgICovXHJcbiAgICBhcmdiKCkge1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMuX2FscGhhIDw8IDI0KSB8ICh0aGlzLl9yZWQgPDwgMTYpIHwgKHRoaXMuX2dyZWVuIDw8IDgpIHwgdGhpcy5fYmx1ZSkgPj4+IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyByZ2JhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKi9cclxuICAgIHJnYmEoKSB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5fcmVkIDw8IDI0KSB8ICh0aGlzLl9ncmVlbiA8PCAxNikgfCAodGhpcy5fYmx1ZSA8PCA4KSB8IHRoaXMuX2FscGhhKSA+Pj4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIHJnYiB0ZXh0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYi5cclxuICAgICAqL1xyXG4gICAgcmdiVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gYHJnYigke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgcmdiYSB0ZXh0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKi9cclxuICAgIHJnYmFUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBgcmdiYSgke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSwke01hdGgucm91bmQodGhpcy5fYWxwaGEgLyAyNTUgKiAxMDApIC8gMTAwfSlgO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgaGV4IG5vIGFscGhhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGhleCB3aXRoIG5vIGFscGhhIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgaGV4KCkge1xyXG4gICAgICAgIGNvbnN0IHJlZCA9IGAwMCR7dGhpcy5fcmVkLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBncmVlbiA9IGAwMCR7dGhpcy5fZ3JlZW4udG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IGJsdWUgPSBgMDAke3RoaXMuX2JsdWUudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIHJldHVybiBgIyR7cmVkfSR7Z3JlZW59JHtibHVlfWAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIGhleCB3aXRoIGFscGhhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGhleCB3aXRoIHdpdGggYWxwaGEgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBoZXhXaXRoQWxwaGEoKSB7XHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSBgMDAke3RoaXMuX2FscGhhLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCByZWQgPSBgMDAke3RoaXMuX3JlZC50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBgMDAke3RoaXMuX2dyZWVuLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBibHVlID0gYDAwJHt0aGlzLl9ibHVlLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICByZXR1cm4gYCMke2FscGhhfSR7cmVkfSR7Z3JlZW59JHtibHVlfWAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5amIyeHZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVWMlJEczdSMEZGUnp0QlFVTklMRTFCUVdFc1MwRkJTenRKUVZWa096czdPenM3VDBGTlJ6dEpRVU5JTEZsQlFWa3NTMEZCWVN4RlFVRkZMRWRCUVZjc1JVRkJSU3hMUVVGaExFVkJRVVVzU1VGQldUdFJRVU12UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZPMWxCUXpWRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMFJCUVhORUxFTkJRVU1zUTBGQlF6dFRRVU16UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRkRVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4dlJFRkJiMFFzUTBGQlF5eERRVUZETzFOQlEzcEZPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWRCUVVjc1JVRkJSVHRaUVVNMVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5FUVVGelJDeERRVUZETEVOQlFVTTdVMEZETTBVN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRM3BFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0VFFVTXhSVHRSUVVWRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRlhPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU0zUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXp0UlFVTldMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRMUlzU1VGQlNTeExRVUZMTEVOQlFVTTdVVUZEVml4SlFVRkpMRWxCUVVrc1EwRkJRenRSUVVOVUxFbEJRVWtzYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNUMEZCVHp0WlFVTjRReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETzFsQlEyWXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEY2tNN1lVRkJUU3hKUVVGSkxHMUNRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRTdXVUZEYUVRc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOeVF6dGhRVUZOTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1ZVRkJWVHRaUVVOc1JDeExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTJZc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pDTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wSTdZVUZCVFN4SlFVRkpMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxGbEJRVms3V1VGRGNFUXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRla0lzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkNPMkZCUVUwN1dVRkRTQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5R1FVRnZSaXhEUVVGRExFTkJRVU03VTBGRGVrYzdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4wUnl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NSMEZCUnp0UlFVTk9MRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTVUZCU1R0UlFVTlFMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTVUZCU1R0UlFVTlFMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZEdMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4SlFVRkpPMUZCUTFBc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBZc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTlCUVU4N1VVRkRWaXhQUVVGUExFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXp0SlFVTTFSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzVVVGQlVTeEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzBsQlF6RkhMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4SFFVRkhPMUZCUTA0c1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFUXNUMEZCVHl4SlFVRkpMRWRCUVVjc1IwRkJSeXhMUVVGTExFZEJRVWNzU1VGQlNTeEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGbEJRVms3VVVGRFppeE5RVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFUXNUMEZCVHl4SlFVRkpMRXRCUVVzc1IwRkJSeXhIUVVGSExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wbEJRekZFTEVOQlFVTTdRMEZEU2p0QlFXNUxSQ3h6UWtGdFMwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hOUVVGelFpeFhRVUZYTzBsQlFXcERPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTNwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVZrc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGRFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjJRaXhQUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UXp0aFFVRk5PMWxCUTBnc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdTVUZEVEN4RFFVRkRPME5CU1VvN1FVRjRSRVFzYTBOQmQwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZ3NUVUZCWVN4WFFVRlhPMGxCUTNCQ096czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1QwRkJUeXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZMRVZCUVVVc1NVRkJZenRSUVVNMVF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU03V1VGRE9VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU14UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzSkNMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRemxFTEVOQlFVTTdRMEZGU2p0QlFXcERSQ3hyUTBGcFEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVOeVFqczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRlZPMUZCUXpsQ0xFOUJRVThzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUzBGQlN5eERRVUZETzBsQlEzUklMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZWTzFGQlF6ZENMRTlCUVU4c1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOb1NTeERRVUZETzBOQlEwbzdRVUZzUWtRc2IwTkJhMEpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIEEgY2FsbGJhY2sgbWV0aG9kIHdoaWNoIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGUodmFsdWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ2xhc3NOYW1lID0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdmFsdWVDbGFzc05hbWUgPT09IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodHlwZUNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdCBpZiBpdCBoYXMgb25lLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIGdldCB0aGUgY2xhc3MgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xhc3MgbmFtZSBpZiBpdCBoYXMgb25lIG9yIHVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY29uc3RydWN0b3IubWF0Y2goL1xcdysvZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RIZWxwZXIgPSBPYmplY3RIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVOeVFqczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGVk8xRkJRemRDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMFJTeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVlVzUlVGQlJTeGxRVUY1UWp0UlFVTjBSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM2hFTEU5QlFVOHNZMEZCWXl4TFFVRkxMRk5CUVZNc1NVRkJTU3hqUVVGakxFdEJRVXNzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRKUVVONlJ5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJWenRSUVVOc1F5eEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU42UXl4UFFVRlBMRk5CUVZNc1EwRkJRenRUUVVOd1FqdGhRVUZOTzFsQlEwZ3NUVUZCVFN4WFFVRlhMRWRCUVVjc1QwRkJUeXhOUVVGTkxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRGNrY3NUVUZCVFN4UFFVRlBMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0WlFVTXhReXhQUVVGUExFTkJRVU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFOQlEyNUZPMGxCUTB3c1EwRkJRenREUVVOS08wRkJOME5FTEc5RFFUWkRReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpdCBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceDdGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgcHJpbnRhYmxlIGNoYXJhY3RlcnMsIGluY2x1ZGluZyB0YWIsIGNhcnJpYWdlIHJldHVybiBhbmQgbGluZSBmZWVkLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHN0cmluZyB0byB0ZXN0IGlmIGl0IGlzIHByaW50YWJsLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFsbCBwcmludGFibGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzUHJpbnRhYmxlKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDA5XFx4MEFcXHgwRFxceDIwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDgwLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxFMUJRV0VzV1VGQldUdEpRVU55UWpzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGVk8xRkJRemRDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NhVUpCUVdsQ0xFTkJRVU03U1VGRE9VVXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlU3VVVGRE5VSXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGREwwUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRV0U3VVVGREwwSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTzFsQlEzaERMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCWVR0UlFVTnVReXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRek5FTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGaE8xRkJRM1JETEU5QlFVOHNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlF5OUtMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eExRVUZoTzFGQlEzUkRMRTlCUVU4c1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTm9TaXhEUVVGRE8wTkJRMG83UVVGNlJFUXNiME5CZVVSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4vc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gbWFuaXB1bGF0ZSBUcnl0ZXMuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZXNIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHZhbHVlIGludG8gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0IGludG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0byh2YWx1ZSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXMgPSBcIlwiO1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdmFsdWUgY2FuIG5vdCBiZSBlbXB0eWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzY2lpVmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFZhbHVlID0gYXNjaWlWYWx1ZSAlIDI3O1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRWYWx1ZSA9IChhc2NpaVZhbHVlIC0gZmlyc3RWYWx1ZSkgLyAyNztcclxuICAgICAgICAgICAgdHJ5dGVzICs9IFRyeXRlc0hlbHBlci5BTFBIQUJFVFtmaXJzdFZhbHVlXSArIFRyeXRlc0hlbHBlci5BTFBIQUJFVFtzZWNvbmRWYWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdHJ5dGVzIGludG8gYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gY29udmVydCBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyB2YWx1ZSBjb252ZXJ0ZWQgZnJvbSB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbSh0cnl0ZXMpIHtcclxuICAgICAgICBsZXQgYXNjaWkgPSBcIlwiO1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHRyeXRlcyBjYW4gbm90IGJlIGVtcHR5YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cnl0ZXMubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0cnl0ZXMgbGVuZ3RoIG11c3QgYmUgYW4gZXZlbiBudW1iZXIsIGl0IGlzICR7dHJ5dGVzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFUcnl0ZXNIZWxwZXIuaXNUcnl0ZXModHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdHJ5dGVzIGNvbnRhaW5zIG5vbi10cnl0ZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFZhbHVlID0gVHJ5dGVzSGVscGVyLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzW2ldKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVmFsdWUgPSBUcnl0ZXNIZWxwZXIuQUxQSEFCRVQuaW5kZXhPZih0cnl0ZXNbaSArIDFdKTtcclxuICAgICAgICAgICAgY29uc3QgZGVjaW1hbFZhbHVlID0gZmlyc3RWYWx1ZSArIHNlY29uZFZhbHVlICogMjc7XHJcbiAgICAgICAgICAgIGFzY2lpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGVjaW1hbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzY2lpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB0byBtYWtlIHN1cmUgYWxsIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBzdHJpbmcgYXJlIHRyeXRlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRvIGNoZWNrIGZvciB2YWxpZGl0eS5cclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHRyeXRlcyBhcmUgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1RyeXRlcyh0cnl0ZXMpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzICE9PSBudWxsICYmIHRyeXRlcyAhPT0gdW5kZWZpbmVkICYmIC9eWzlBLVpdKyQvLnRlc3QodHJ5dGVzKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzSGVscGVyLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXNIZWxwZXIgPSBUcnl0ZXNIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmRISjVkR1Z6U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTeHBSRUZCT0VNN1FVRkZPVU03TzBkQlJVYzdRVUZEU0N4TlFVRmhMRmxCUVZrN1NVRk5ja0k3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCWVR0UlFVTXhRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGYUVJc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRFJDUVVFMFFpeERRVUZETEVOQlFVTTdVMEZEYWtRN1VVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnVReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWFpETEUxQlFVMHNWVUZCVlN4SFFVRkhMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRGJrTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUlc1RUxFMUJRVTBzU1VGQlNTeFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1UwRkRjRVk3VVVGRlJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCWXp0UlFVTTNRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGWml4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMWxCUXpsQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNwQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNiVVJCUVcxRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNaR08xRkJSVVFzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXd3UTBGQk1FTXNRMEZCUXl4RFFVRkRPMU5CUXk5RU8xRkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmFrVXNUVUZCVFN4WlFVRlpMRWRCUVVjc1ZVRkJWU3hIUVVGSExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZGYmtRc1MwRkJTeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1UwRkRPVU03VVVGRlJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTnFReXhQUVVGUExFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUXk5RkxFTkJRVU03TzBGQmNFVkVPenRIUVVWSE8wRkJRMWNzY1VKQlFWRXNSMEZCVnl3MlFrRkJOa0lzUTBGQlF6dEJRVXB1UlN4dlEwRnpSVU1pZlE9PSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL2NvbG9yXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9hcnJheUhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9vYmplY3RIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHJ5dGVzSGVscGVyXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzYTBOQlFUWkNPMEZCUXpkQ0xEWkRRVUYzUXp0QlFVTjRReXd5UTBGQmMwTTdRVUZEZEVNc05FTkJRWFZETzBGQlEzWkRMRFJEUVVGMVF6dEJRVU4yUXl3MFEwRkJkVU03UVVGRGRrTXNORU5CUVhWREluMD0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL2lzLWZpbml0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL2lzLW5hblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk51bWJlci5pc0Zpbml0ZTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk51bWJlci5pc05hTjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgX2lzRmluaXRlID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuaXNGaW5pdGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG4gIH1cbn0pO1xuIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=