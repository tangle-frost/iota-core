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

/***/ "./dist/data/linearGradient.js":
/*!*************************************!*\
  !*** ./dist/data/linearGradient.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! ../helpers/arrayHelper */ "./dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! ../helpers/numberHelper */ "./dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! ../helpers/objectHelper */ "./dist/helpers/objectHelper.js");
/**
 * Class to represent a linear gradient.
 */


var LinearGradient =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of linear gradient.
   * @param stops The stop for the gradient.
   * @param angle The angle for the gradient.
   */
  function LinearGradient(stops, angle) {
    _classCallCheck(this, LinearGradient);

    if (!arrayHelper_1.ArrayHelper.isArray(stops)) {
      throw new Error("The stops array must not be empty");
    }

    if (!objectHelper_1.ObjectHelper.isEmpty(angle) && !numberHelper_1.NumberHelper.isInteger(angle)) {
      throw new Error("The angle must be a number");
    }

    this._stops = stops;
    this._angle = angle;
  }
  /**
   * Get the stops.
   * @returns The stops.
   */


  _createClass(LinearGradient, [{
    key: "stops",
    value: function stops() {
      return this._stops;
    }
    /**
     * Get the angle.
     * @returns The angle.
     */

  }, {
    key: "angle",
    value: function angle() {
      return this._angle;
    }
  }]);

  return LinearGradient;
}();

exports.LinearGradient = LinearGradient;

/***/ }),

/***/ "./dist/data/radialGradient.js":
/*!*************************************!*\
  !*** ./dist/data/radialGradient.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! ../helpers/arrayHelper */ "./dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! ../helpers/numberHelper */ "./dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! ../helpers/objectHelper */ "./dist/helpers/objectHelper.js");
/**
 * Class to represent a radial gradient.
 */


var RadialGradient =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of radial gradient.
   * @param stops The stop for the gradient.
   * @param offsetXPercent The offsetXPercent for the gradient.
   * @param offsetYPercent The offsetYPercent for the gradient.
   * @param radiusPercent The radiusPercent for the gradient.
   */
  function RadialGradient(stops, offsetXPercent, offsetYPercent, radiusPercent) {
    _classCallCheck(this, RadialGradient);

    if (!arrayHelper_1.ArrayHelper.isArray(stops)) {
      throw new Error("The stops array must not be empty");
    }

    if (!objectHelper_1.ObjectHelper.isEmpty(offsetXPercent) && !numberHelper_1.NumberHelper.isInteger(offsetXPercent)) {
      throw new Error("The offsetXPercent must be a number");
    }

    if (!objectHelper_1.ObjectHelper.isEmpty(offsetYPercent) && !numberHelper_1.NumberHelper.isInteger(offsetYPercent)) {
      throw new Error("The offsetYPercent must be a number");
    }

    if (!objectHelper_1.ObjectHelper.isEmpty(radiusPercent) && !numberHelper_1.NumberHelper.isInteger(radiusPercent)) {
      throw new Error("The radiusPercent must be a number");
    }

    this._stops = stops;
    this._offsetXPercent = offsetXPercent;
    this._offsetYPercent = offsetYPercent;
    this._radiusPercent = radiusPercent;
  }
  /**
   * Get the stops.
   * @returns The stops.
   */


  _createClass(RadialGradient, [{
    key: "stops",
    value: function stops() {
      return this._stops;
    }
    /**
     * Get the offsetXPercent.
     * @returns The offsetXPercent.
     */

  }, {
    key: "offsetXPercent",
    value: function offsetXPercent() {
      return this._offsetXPercent;
    }
    /**
     * Get the offsetYPercent.
     * @returns The offsetYPercent.
     */

  }, {
    key: "offsetYPercent",
    value: function offsetYPercent() {
      return this._offsetYPercent;
    }
    /**
     * Get the radiusPercent.
     * @returns The radiusPercent.
     */

  }, {
    key: "radiusPercent",
    value: function radiusPercent() {
      return this._radiusPercent;
    }
  }]);

  return RadialGradient;
}();

exports.RadialGradient = RadialGradient;

/***/ }),

/***/ "./dist/factories/factoryBase.js":
/*!***************************************!*\
  !*** ./dist/factories/factoryBase.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

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
      return typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value) && Math.floor(value) === value;
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
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

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

__export(__webpack_require__(/*! ./data/linearGradient */ "./dist/data/linearGradient.js"));

__export(__webpack_require__(/*! ./data/radialGradient */ "./dist/data/radialGradient.js"));

__export(__webpack_require__(/*! ./factories/factoryBase */ "./dist/factories/factoryBase.js"));

__export(__webpack_require__(/*! ./helpers/arrayHelper */ "./dist/helpers/arrayHelper.js"));

__export(__webpack_require__(/*! ./helpers/numberHelper */ "./dist/helpers/numberHelper.js"));

__export(__webpack_require__(/*! ./helpers/objectHelper */ "./dist/helpers/objectHelper.js"));

__export(__webpack_require__(/*! ./helpers/stringHelper */ "./dist/helpers/stringHelper.js"));

__export(__webpack_require__(/*! ./helpers/trytesHelper */ "./dist/helpers/trytesHelper.js"));

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2RhdGEvY29sb3IudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhQ29yZS8uLi8uLi9zcmMvZGF0YS9saW5lYXJHcmFkaWVudC50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4uLy4uL3NyYy9kYXRhL3JhZGlhbEdyYWRpZW50LnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2hlbHBlcnMvdHJ5dGVzSGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBO0FBRUE7Ozs7O0lBR2EsSzs7O0FBVVQ7Ozs7Ozs7QUFPQSxpQkFBWSxLQUFaLEVBQTJCLEdBQTNCLEVBQXdDLEtBQXhDLEVBQXVELElBQXZELEVBQW1FO0FBQUE7O0FBQy9ELFFBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLEtBQXZCLENBQUQsSUFBa0MsS0FBSyxHQUFHLENBQTFDLElBQStDLEtBQUssR0FBRyxHQUEzRCxFQUFnRTtBQUM1RCxZQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU47QUFDSDs7QUFDRCxRQUFJLENBQUMsNEJBQWEsU0FBYixDQUF1QixHQUF2QixDQUFELElBQWdDLEdBQUcsR0FBRyxDQUF0QyxJQUEyQyxHQUFHLEdBQUcsR0FBckQsRUFBMEQ7QUFDdEQsWUFBTSxJQUFJLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsS0FBdkIsQ0FBRCxJQUFrQyxLQUFLLEdBQUcsQ0FBMUMsSUFBK0MsS0FBSyxHQUFHLEdBQTNELEVBQWdFO0FBQzVELFlBQU0sSUFBSSxLQUFKLENBQVUsc0RBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLElBQXZCLENBQUQsSUFBaUMsSUFBSSxHQUFHLENBQXhDLElBQTZDLElBQUksR0FBRyxHQUF4RCxFQUE2RDtBQUN6RCxZQUFNLElBQUksS0FBSixDQUFVLHFEQUFWLENBQU47QUFDSDs7QUFFRCxTQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBSyxJQUFMLEdBQVksR0FBWjtBQUNBLFNBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0g7QUFFRDs7Ozs7Ozs7OztBQXdDQTs7Ozs0QkFJWTtBQUNSLGFBQU8sS0FBSyxNQUFaO0FBQ0g7QUFFRDs7Ozs7OzswQkFJVTtBQUNOLGFBQU8sS0FBSyxJQUFaO0FBQ0g7QUFFRDs7Ozs7Ozs0QkFJWTtBQUNSLGFBQU8sS0FBSyxNQUFaO0FBQ0g7QUFFRDs7Ozs7OzsyQkFJVztBQUNQLGFBQU8sS0FBSyxLQUFaO0FBQ0g7QUFFRDs7Ozs7OzsyQkFJVztBQUNQLGFBQU8sQ0FBRSxLQUFLLE1BQUwsSUFBZSxFQUFoQixHQUF1QixLQUFLLElBQUwsSUFBYSxFQUFwQyxHQUEyQyxLQUFLLE1BQUwsSUFBZSxDQUExRCxHQUErRCxLQUFLLEtBQXJFLE1BQWdGLENBQXZGO0FBQ0g7QUFFRDs7Ozs7OzsyQkFJVztBQUNQLGFBQU8sQ0FBRSxLQUFLLElBQUwsSUFBYSxFQUFkLEdBQXFCLEtBQUssTUFBTCxJQUFlLEVBQXBDLEdBQTJDLEtBQUssS0FBTCxJQUFjLENBQXpELEdBQThELEtBQUssTUFBcEUsTUFBZ0YsQ0FBdkY7QUFDSDtBQUVEOzs7Ozs7OzhCQUljO0FBQ1YsMkJBQWMsS0FBSyxJQUFuQixjQUEyQixLQUFLLE1BQWhDLGNBQTBDLEtBQUssS0FBL0M7QUFDSDtBQUVEOzs7Ozs7OytCQUllO0FBQ1gsNEJBQWUsS0FBSyxJQUFwQixjQUE0QixLQUFLLE1BQWpDLGNBQTJDLEtBQUssS0FBaEQsY0FBeUQsSUFBSSxDQUFDLEtBQUwsQ0FBVyxLQUFLLE1BQUwsR0FBYyxHQUFkLEdBQW9CLEdBQS9CLElBQXNDLEdBQS9GO0FBQ0g7QUFFRDs7Ozs7OzswQkFJVTtBQUNOLFVBQU0sR0FBRyxHQUFHLFlBQUssS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixFQUFuQixDQUFMLEVBQThCLEtBQTlCLENBQW9DLENBQUMsQ0FBckMsQ0FBWjtBQUNBLFVBQU0sS0FBSyxHQUFHLFlBQUssS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixFQUFyQixDQUFMLEVBQWdDLEtBQWhDLENBQXNDLENBQUMsQ0FBdkMsQ0FBZDtBQUNBLFVBQU0sSUFBSSxHQUFHLFlBQUssS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixFQUFwQixDQUFMLEVBQStCLEtBQS9CLENBQXFDLENBQUMsQ0FBdEMsQ0FBYjtBQUNBLGFBQU8sV0FBSSxHQUFKLFNBQVUsS0FBVixTQUFrQixJQUFsQixFQUF5QixXQUF6QixFQUFQO0FBQ0g7QUFFRDs7Ozs7OzttQ0FJbUI7QUFDZixVQUFNLEtBQUssR0FBRyxZQUFLLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsRUFBckIsQ0FBTCxFQUFnQyxLQUFoQyxDQUFzQyxDQUFDLENBQXZDLENBQWQ7QUFDQSxVQUFNLEdBQUcsR0FBRyxZQUFLLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsRUFBbkIsQ0FBTCxFQUE4QixLQUE5QixDQUFvQyxDQUFDLENBQXJDLENBQVo7QUFDQSxVQUFNLEtBQUssR0FBRyxZQUFLLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsRUFBckIsQ0FBTCxFQUFnQyxLQUFoQyxDQUFzQyxDQUFDLENBQXZDLENBQWQ7QUFDQSxVQUFNLElBQUksR0FBRyxZQUFLLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsRUFBcEIsQ0FBTCxFQUErQixLQUEvQixDQUFxQyxDQUFDLENBQXRDLENBQWI7QUFDQSxhQUFPLFdBQUksS0FBSixTQUFZLEdBQVosU0FBa0IsS0FBbEIsU0FBMEIsSUFBMUIsRUFBaUMsV0FBakMsRUFBUDtBQUNIOzs7NEJBeEhxQixHLEVBQVc7QUFDN0IsVUFBSSxDQUFDLDRCQUFhLFFBQWIsQ0FBc0IsR0FBdEIsQ0FBTCxFQUFpQztBQUM3QixjQUFNLElBQUksS0FBSixDQUFVLG9DQUFWLENBQU47QUFDSDs7QUFFRCxVQUFJLEtBQUo7QUFDQSxVQUFJLEdBQUo7QUFDQSxVQUFJLEtBQUo7QUFDQSxVQUFJLElBQUo7O0FBQ0EsVUFBSSxvQkFBb0IsSUFBcEIsQ0FBeUIsR0FBekIsQ0FBSixFQUFtQztBQUFFO0FBQ2pDLGFBQUssR0FBRyxNQUFSO0FBQ0EsV0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsTUFBakIsQ0FBd0IsQ0FBeEIsQ0FBTjtBQUNBLGFBQUssR0FBRyxHQUFHLENBQUMsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLE1BQWpCLENBQXdCLENBQXhCLENBQVI7QUFDQSxZQUFJLEdBQUcsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixNQUFqQixDQUF3QixDQUF4QixDQUFQO0FBQ0gsT0FMRCxNQUtPLElBQUksb0JBQW9CLElBQXBCLENBQXlCLEdBQXpCLENBQUosRUFBbUM7QUFBRTtBQUN4QyxhQUFLLEdBQUcsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixNQUFqQixDQUF3QixDQUF4QixDQUFSO0FBQ0EsV0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsTUFBakIsQ0FBd0IsQ0FBeEIsQ0FBTjtBQUNBLGFBQUssR0FBRyxHQUFHLENBQUMsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLE1BQWpCLENBQXdCLENBQXhCLENBQVI7QUFDQSxZQUFJLEdBQUcsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixNQUFqQixDQUF3QixDQUF4QixDQUFQO0FBQ0gsT0FMTSxNQUtBLElBQUksb0JBQW9CLElBQXBCLENBQXlCLEdBQXpCLENBQUosRUFBbUM7QUFBRTtBQUN4QyxhQUFLLEdBQUcsTUFBUjtBQUNBLFdBQUcsR0FBRyxHQUFHLENBQUMsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQU47QUFDQSxhQUFLLEdBQUcsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFSO0FBQ0EsWUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUDtBQUNILE9BTE0sTUFLQSxJQUFJLG9CQUFvQixJQUFwQixDQUF5QixHQUF6QixDQUFKLEVBQW1DO0FBQUU7QUFDeEMsYUFBSyxHQUFHLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUjtBQUNBLFdBQUcsR0FBRyxHQUFHLENBQUMsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQU47QUFDQSxhQUFLLEdBQUcsR0FBRyxDQUFDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFSO0FBQ0EsWUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBUDtBQUNILE9BTE0sTUFLQTtBQUNILGNBQU0sSUFBSSxLQUFKLENBQVUsb0ZBQVYsQ0FBTjtBQUNIOztBQUNELGFBQU8sSUFBSSxLQUFKLENBQVUsUUFBUSxDQUFDLEtBQUQsRUFBUSxFQUFSLENBQWxCLEVBQStCLFFBQVEsQ0FBQyxHQUFELEVBQU0sRUFBTixDQUF2QyxFQUFrRCxRQUFRLENBQUMsS0FBRCxFQUFRLEVBQVIsQ0FBMUQsRUFBdUUsUUFBUSxDQUFDLElBQUQsRUFBTyxFQUFQLENBQS9FLENBQVA7QUFDSDs7Ozs7O0FBM0VMLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFDQTs7QUFDQTtBQUdBOzs7OztJQUdhLGM7OztBQU1UOzs7OztBQUtBLDBCQUFZLEtBQVosRUFBNkQsS0FBN0QsRUFBMkU7QUFBQTs7QUFDdkUsUUFBSSxDQUFDLDBCQUFZLE9BQVosQ0FBb0IsS0FBcEIsQ0FBTCxFQUFpQztBQUM3QixZQUFNLElBQUksS0FBSixDQUFVLG1DQUFWLENBQU47QUFDSDs7QUFDRCxRQUFJLENBQUMsNEJBQWEsT0FBYixDQUFxQixLQUFyQixDQUFELElBQWdDLENBQUMsNEJBQWEsU0FBYixDQUF1QixLQUF2QixDQUFyQyxFQUFvRTtBQUNoRSxZQUFNLElBQUksS0FBSixDQUFVLDRCQUFWLENBQU47QUFDSDs7QUFFRCxTQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBSyxNQUFMLEdBQWMsS0FBZDtBQUNIO0FBRUQ7Ozs7Ozs7OzRCQUlZO0FBQ1IsYUFBTyxLQUFLLE1BQVo7QUFDSDtBQUVEOzs7Ozs7OzRCQUlZO0FBQ1IsYUFBTyxLQUFLLE1BQVo7QUFDSDs7Ozs7O0FBckNMLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFDQTs7QUFDQTtBQUdBOzs7OztJQUdhLGM7OztBQVVUOzs7Ozs7O0FBT0EsMEJBQVksS0FBWixFQUE2RCxjQUE3RCxFQUFzRixjQUF0RixFQUErRyxhQUEvRyxFQUFxSTtBQUFBOztBQUNqSSxRQUFJLENBQUMsMEJBQVksT0FBWixDQUFvQixLQUFwQixDQUFMLEVBQWlDO0FBQzdCLFlBQU0sSUFBSSxLQUFKLENBQVUsbUNBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQyw0QkFBYSxPQUFiLENBQXFCLGNBQXJCLENBQUQsSUFBeUMsQ0FBQyw0QkFBYSxTQUFiLENBQXVCLGNBQXZCLENBQTlDLEVBQXNGO0FBQ2xGLFlBQU0sSUFBSSxLQUFKLENBQVUscUNBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQyw0QkFBYSxPQUFiLENBQXFCLGNBQXJCLENBQUQsSUFBeUMsQ0FBQyw0QkFBYSxTQUFiLENBQXVCLGNBQXZCLENBQTlDLEVBQXNGO0FBQ2xGLFlBQU0sSUFBSSxLQUFKLENBQVUscUNBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQyw0QkFBYSxPQUFiLENBQXFCLGFBQXJCLENBQUQsSUFBd0MsQ0FBQyw0QkFBYSxTQUFiLENBQXVCLGFBQXZCLENBQTdDLEVBQW9GO0FBQ2hGLFlBQU0sSUFBSSxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNIOztBQUVELFNBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLLGVBQUwsR0FBdUIsY0FBdkI7QUFDQSxTQUFLLGVBQUwsR0FBdUIsY0FBdkI7QUFDQSxTQUFLLGNBQUwsR0FBc0IsYUFBdEI7QUFDSDtBQUVEOzs7Ozs7Ozs0QkFJWTtBQUNSLGFBQU8sS0FBSyxNQUFaO0FBQ0g7QUFFRDs7Ozs7OztxQ0FJcUI7QUFDakIsYUFBTyxLQUFLLGVBQVo7QUFDSDtBQUVEOzs7Ozs7O3FDQUlxQjtBQUNqQixhQUFPLEtBQUssZUFBWjtBQUNIO0FBRUQ7Ozs7Ozs7b0NBSW9CO0FBQ2hCLGFBQU8sS0FBSyxjQUFaO0FBQ0g7Ozs7OztBQW5FTCx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7SUFJc0IsVzs7O0FBQXRCO0FBQUE7O0FBQ0k7QUFDaUIsa0JBQW9ELEVBQXBEO0FBc0RwQjtBQXBERzs7Ozs7Ozs7OzZCQUtnQixJLEVBQWMsZSxFQUFzQztBQUNoRSxXQUFLLFdBQUwsR0FBbUIsTUFBbkIsQ0FBMEIsSUFBMUIsSUFBa0MsZUFBbEM7QUFDSDtBQUVEOzs7Ozs7OytCQUlrQixJLEVBQVk7QUFDMUIsYUFBTyxLQUFLLFdBQUwsR0FBbUIsTUFBbkIsQ0FBMEIsSUFBMUIsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzJCQUtjLEksRUFBWTtBQUN0QixhQUFPLEtBQUssV0FBTCxHQUFtQixNQUFuQixDQUEwQixJQUExQixNQUFvQyxTQUEzQztBQUNIO0FBRUQ7Ozs7Ozs7OzRCQUtZO0FBQ1IsYUFBTyxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQUssV0FBTCxHQUFtQixNQUEvQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7OzJCQU1jLEksRUFBNEI7QUFDdEMsVUFBTSxRQUFRLEdBQUcsS0FBSyxXQUFMLEVBQWpCOztBQUNBLFVBQUksUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBSixFQUEyQjtBQUFBOztBQUFBLDBDQUZBLElBRUE7QUFGQSxjQUVBO0FBQUE7O0FBQ3ZCLGVBQU8sNEJBQVEsQ0FBQyxNQUFULEVBQWdCLElBQWhCLDBCQUF5QixJQUF6QixDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxTQUFQO0FBQ0g7QUFDSjs7Ozs7O0FBcERMLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBOzs7OztJQUdhLFc7Ozs7Ozs7Ozs7QUFDVDs7Ozs7NEJBS3NCLEssRUFBVTtBQUM1QixhQUFPLEtBQUssS0FBSyxJQUFWLElBQWtCLEtBQUssS0FBSyxTQUE1QixHQUNELEtBREMsR0FDTyxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsQ0FEZDtBQUVIO0FBRUQ7Ozs7Ozs7OzRCQUtzQixLLEVBQVU7QUFDNUIsYUFBTyxDQUFDLFdBQVcsQ0FBQyxPQUFaLENBQW9CLEtBQXBCLENBQUQsSUFBK0IsS0FBSyxDQUFDLE1BQU4sS0FBaUIsQ0FBdkQ7QUFDSDtBQUVEOzs7Ozs7Ozs7NEJBTXNCLEssRUFBWSxJLEVBQWM7QUFDNUMsYUFBTyxDQUFDLFdBQVcsQ0FBQyxPQUFaLENBQW9CLEtBQXBCLENBQUQsSUFDSCxDQUFDLEtBQUssQ0FBQyxRQUFOLENBQWUsU0FBZixDQURFLElBRUgsQ0FBQyxLQUFLLENBQUMsUUFBTixDQUFlLElBQWYsQ0FGRSxJQUdILEtBQUssQ0FBQyxLQUFOLENBQVksVUFBQyxDQUFEO0FBQUEsZUFBWSw0QkFBYSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLElBQXZCLENBQVo7QUFBQSxPQUFaLENBSEo7QUFJSDs7Ozs7O0FBL0JMLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0lBR2EsWTs7Ozs7Ozs7OztBQUNUOzs7Ozs4QkFLd0IsSyxFQUFVO0FBQzlCLGFBQU8sT0FBTyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLENBQUMsTUFBTSxDQUFDLEtBQVAsQ0FBYSxLQUFiLENBQTlCLElBQXFELE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQWhCLENBQXJELElBQStFLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBWCxNQUFzQixLQUE1RztBQUNIO0FBRUQ7Ozs7Ozs7OzZCQUt1QixLLEVBQVU7QUFDN0IsYUFBTyxLQUFLLEtBQUssU0FBVixJQUF1QixLQUFLLEtBQUssSUFBakMsSUFBeUMsT0FBTyxLQUFQLEtBQWlCLFFBQTFELElBQXNFLENBQUMsTUFBTSxDQUFDLEtBQVAsQ0FBYSxLQUFiLENBQXZFLElBQThGLE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQWhCLENBQXJHO0FBQ0g7Ozs7OztBQWpCTCxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0lBR2EsWTs7Ozs7Ozs7OztBQUNUOzs7Ozs0QkFLc0IsSyxFQUFVO0FBQzVCLGFBQU8sS0FBSyxLQUFLLElBQVYsSUFBa0IsS0FBSyxLQUFLLFNBQW5DO0FBQ0g7QUFFRDs7Ozs7Ozs7NkJBS3VCLEssRUFBVTtBQUM3QixhQUFPLEtBQUssS0FBSyxJQUFWLElBQWtCLEtBQUssS0FBSyxTQUE1QixHQUNELEtBREMsR0FDTyxRQUFPLEtBQVAsTUFBa0IsUUFBbEIsSUFBOEIsQ0FBQyxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsQ0FEN0M7QUFFSDtBQUVEOzs7Ozs7Ozs7MkJBTXFCLEssRUFBWSxlLEVBQXlCO0FBQ3RELFVBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxZQUFiLENBQTBCLEtBQTFCLENBQXZCO0FBQ0EsYUFBTyxjQUFjLEtBQUssU0FBbkIsSUFBZ0MsY0FBYyxLQUFLLFlBQVksQ0FBQyxZQUFiLENBQTBCLGVBQTFCLENBQTFEO0FBQ0g7QUFFRDs7Ozs7Ozs7aUNBSzJCLE0sRUFBVztBQUNsQyxVQUFJLE1BQU0sS0FBSyxJQUFYLElBQW1CLE1BQU0sS0FBSyxTQUFsQyxFQUE2QztBQUN6QyxlQUFPLFNBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxZQUFNLFlBQVcsR0FBRyxPQUFPLE1BQVAsS0FBa0IsVUFBbEIsR0FBK0IsTUFBTSxDQUFDLFFBQVAsRUFBL0IsR0FBbUQsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsUUFBbkIsRUFBdkU7O0FBQ0EsWUFBTSxPQUFPLEdBQUcsWUFBVyxDQUFDLEtBQVosQ0FBa0IsTUFBbEIsQ0FBaEI7O0FBQ0EsZUFBUSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQVIsR0FBaUIsQ0FBN0IsR0FBa0MsT0FBTyxDQUFDLENBQUQsQ0FBekMsR0FBK0MsU0FBdEQ7QUFDSDtBQUNKOzs7Ozs7QUE1Q0wsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7SUFHYSxZOzs7Ozs7Ozs7O0FBQ1Q7Ozs7OzZCQUt1QixLLEVBQVU7QUFDN0IsYUFBTyxLQUFLLEtBQUssSUFBVixJQUFrQixLQUFLLEtBQUssU0FBNUIsR0FDRCxLQURDLEdBQ08sTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsTUFBMEMsaUJBRHhEO0FBRUg7QUFFRDs7Ozs7Ozs7NEJBS3NCLEssRUFBVTtBQUM1QixhQUFPLENBQUMsWUFBWSxDQUFDLFFBQWIsQ0FBc0IsS0FBdEIsQ0FBRCxJQUFpQyxLQUFLLENBQUMsTUFBTixLQUFpQixDQUF6RDtBQUNIO0FBRUQ7Ozs7Ozs7OzRCQUtzQixLLEVBQWE7QUFDL0IsYUFBTyxLQUFLLEtBQUssSUFBVixJQUFrQixLQUFLLEtBQUssU0FBNUIsR0FDRCxLQURDLEdBQ08saUJBQWlCLElBQWpCLENBQXNCLEtBQXRCLENBRGQ7QUFFSDtBQUVEOzs7Ozs7OztnQ0FLMEIsSyxFQUFhO0FBQ25DLGFBQU8sS0FBSyxLQUFLLElBQVYsSUFBa0IsS0FBSyxLQUFLLFNBQTVCLEdBQ0QsS0FEQyxHQUNPLDZCQUE2QixJQUE3QixDQUFrQyxLQUFsQyxDQURkO0FBRUg7QUFFRDs7Ozs7Ozs7bUNBSzZCLEssRUFBYTtBQUN0QyxhQUFPLFlBQVksQ0FBQyxRQUFiLENBQXNCLEtBQXRCLElBQStCLEtBQUssQ0FBQyxPQUFOLENBQWMsa0JBQWQsRUFBa0MsVUFBQyxHQUFEO0FBQUEsNEJBQWUsY0FBUSxHQUFHLENBQUMsVUFBSixDQUFlLENBQWYsRUFBa0IsUUFBbEIsQ0FBMkIsRUFBM0IsQ0FBUixFQUEwQyxNQUExQyxDQUFpRCxDQUFDLENBQWxELENBQWY7QUFBQSxPQUFsQyxDQUEvQixHQUEwSSxTQUFqSjtBQUNIO0FBRUQ7Ozs7Ozs7O21DQUs2QixLLEVBQWE7QUFDdEMsYUFBTyxZQUFZLENBQUMsUUFBYixDQUFzQixLQUF0QixJQUErQixLQUFLLENBQUMsT0FBTixDQUFjLGtCQUFkLEVBQWtDLFVBQUMsS0FBRCxFQUFRLEdBQVI7QUFBQSxlQUFnQixNQUFNLENBQUMsWUFBUCxDQUFvQixRQUFRLENBQUMsR0FBRCxFQUFNLEVBQU4sQ0FBNUIsQ0FBaEI7QUFBQSxPQUFsQyxDQUEvQixHQUEySCxTQUFsSTtBQUNIOzs7Ozs7QUF4REwsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7Ozs7O0lBR2EsWTs7Ozs7Ozs7OztBQU1UOzs7Ozt1QkFLaUIsSyxFQUFhO0FBQzFCLFVBQUksTUFBTSxHQUFHLEVBQWI7O0FBRUEsVUFBSSw0QkFBYSxPQUFiLENBQXFCLEtBQXJCLENBQUosRUFBaUM7QUFDN0IsY0FBTSxJQUFJLEtBQUosOEJBQU47QUFDSDs7QUFFRCxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUExQixFQUFrQyxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFlBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFOLENBQWlCLENBQWpCLENBQW5CO0FBRUEsWUFBTSxVQUFVLEdBQUcsVUFBVSxHQUFHLEVBQWhDO0FBQ0EsWUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBZCxJQUE0QixFQUFoRDtBQUVBLGNBQU0sSUFBSSxZQUFZLENBQUMsUUFBYixDQUFzQixVQUF0QixJQUFvQyxZQUFZLENBQUMsUUFBYixDQUFzQixXQUF0QixDQUE5QztBQUNIOztBQUVELGFBQU8sTUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7O3lCQUttQixNLEVBQWM7QUFDN0IsVUFBSSxLQUFLLEdBQUcsRUFBWjs7QUFFQSxVQUFJLDRCQUFhLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUM5QixjQUFNLElBQUksS0FBSiwrQkFBTjtBQUNIOztBQUVELFVBQUksTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBaEIsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsY0FBTSxJQUFJLEtBQUosMkRBQTZELE1BQU0sQ0FBQyxNQUFwRSxFQUFOO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFiLENBQXNCLE1BQXRCLENBQUwsRUFBb0M7QUFDaEMsY0FBTSxJQUFJLEtBQUosQ0FBVSwwQ0FBVixDQUFOO0FBQ0g7O0FBRUQsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBM0IsRUFBbUMsQ0FBQyxJQUFJLENBQXhDLEVBQTJDO0FBQ3ZDLFlBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxRQUFiLENBQXNCLE9BQXRCLENBQThCLE1BQU0sQ0FBQyxDQUFELENBQXBDLENBQW5CO0FBQ0EsWUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQWIsQ0FBc0IsT0FBdEIsQ0FBOEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFMLENBQXBDLENBQXBCO0FBRUEsWUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFHLFdBQVcsR0FBRyxFQUFoRDtBQUVBLGFBQUssSUFBSSxNQUFNLENBQUMsWUFBUCxDQUFvQixZQUFwQixDQUFUO0FBQ0g7O0FBRUQsYUFBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7NkJBS3VCLE0sRUFBYztBQUNqQyxhQUFPLE1BQU0sS0FBSyxJQUFYLElBQW1CLE1BQU0sS0FBSyxTQUE5QixJQUEyQyxZQUFZLElBQVosQ0FBaUIsTUFBakIsQ0FBbEQ7QUFDSDs7Ozs7QUFwRUQ7Ozs7O0FBR2Msd0JBQW1CLDZCQUFuQjtBQUpsQixvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBLDhGIiwiZmlsZSI6InRhbmdsZS1mcm9zdC1pb3RhLWNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRhbmdsZUZyb3N0SW90YUNvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZXByZXNlbnQgYSBjb2xvci5cclxuICovXHJcbmNsYXNzIENvbG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGNvbG9yLlxyXG4gICAgICogQHBhcmFtIGFscGhhIFRoZSBhbHBoYSBlbGVtZW50IG9mIHRoZSBjb2xvci5cclxuICAgICAqIEBwYXJhbSByZWQgVGhlIHJlZCBlbGVtZW50IG9mIHRoZSBjb2xvci5cclxuICAgICAqIEBwYXJhbSBncmVlbiBUaGUgZ3JlZW4gZWxlbWVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gYmx1ZSBUaGUgYmx1ZSBlbGVtZW50IG9mIHRoZSBjb2xvci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYWxwaGEsIHJlZCwgZ3JlZW4sIGJsdWUpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoYWxwaGEpIHx8IGFscGhhIDwgMCB8fCBhbHBoYSA+IDI1NSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYWxwaGEgcGFyYW1ldGVyIG11c3QgYmUgYSBudW1iZXIgPj0gMCBhbmQgPD0gMjU1XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIocmVkKSB8fCByZWQgPCAwIHx8IHJlZCA+IDI1NSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmVkIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGdyZWVuKSB8fCBncmVlbiA8IDAgfHwgZ3JlZW4gPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdyZWVuIHBhcmFtZXRlciBtdXN0IGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDI1NVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGJsdWUpIHx8IGJsdWUgPCAwIHx8IGJsdWUgPiAyNTUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGJsdWUgcGFyYW1ldGVyIG11c3QgYmUgYSBudW1iZXIgPj0gMCBhbmQgPD0gMjU1XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hbHBoYSA9IGFscGhhO1xyXG4gICAgICAgIHRoaXMuX3JlZCA9IHJlZDtcclxuICAgICAgICB0aGlzLl9ncmVlbiA9IGdyZWVuO1xyXG4gICAgICAgIHRoaXMuX2JsdWUgPSBibHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3QgYSBjb2xvciBmcm9tIGEgaGV4IHN0cmluZy5cclxuICAgICAqIEBwYXJhbSBoZXggVGhlIGhleCBzdHJpbmcgdG8gcGFyc2UuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tSGV4KGhleCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKGhleCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGhleCBwYXJhbWV0ZXIgY2FuIG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFscGhhO1xyXG4gICAgICAgIGxldCByZWQ7XHJcbiAgICAgICAgbGV0IGdyZWVuO1xyXG4gICAgICAgIGxldCBibHVlO1xyXG4gICAgICAgIGlmICgvXiNbQS1GYS1mMC05XXszfSQvLnRlc3QoaGV4KSkgeyAvLyAjUkdCXHJcbiAgICAgICAgICAgIGFscGhhID0gXCIweEZGXCI7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMSwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICBncmVlbiA9IGhleC5zdWJzdHIoMiwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICBibHVlID0gaGV4LnN1YnN0cigzLCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKC9eI1tBLUZhLWYwLTldezR9JC8udGVzdChoZXgpKSB7IC8vICNBUkdCXHJcbiAgICAgICAgICAgIGFscGhhID0gaGV4LnN1YnN0cigxLCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgICAgIHJlZCA9IGhleC5zdWJzdHIoMiwgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICBncmVlbiA9IGhleC5zdWJzdHIoMywgMSkucmVwZWF0KDIpO1xyXG4gICAgICAgICAgICBibHVlID0gaGV4LnN1YnN0cig0LCAxKS5yZXBlYXQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKC9eI1tBLUZhLWYwLTldezZ9JC8udGVzdChoZXgpKSB7IC8vICNSUkdHQkJcclxuICAgICAgICAgICAgYWxwaGEgPSBcIjB4RkZcIjtcclxuICAgICAgICAgICAgcmVkID0gaGV4LnN1YnN0cigxLCAyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDMsIDIpO1xyXG4gICAgICAgICAgICBibHVlID0gaGV4LnN1YnN0cig1LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoL14jW0EtRmEtZjAtOV17OH0kLy50ZXN0KGhleCkpIHsgLy8gI0FBUlJHR0JCXHJcbiAgICAgICAgICAgIGFscGhhID0gaGV4LnN1YnN0cigxLCAyKTtcclxuICAgICAgICAgICAgcmVkID0gaGV4LnN1YnN0cigzLCAyKTtcclxuICAgICAgICAgICAgZ3JlZW4gPSBoZXguc3Vic3RyKDUsIDIpO1xyXG4gICAgICAgICAgICBibHVlID0gaGV4LnN1YnN0cig3LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBoZXggY29sb3IgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzICNSR0IsICNBUkdCLCAjUlJHR0JCLCAjQUFSUkdHQkJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IocGFyc2VJbnQoYWxwaGEsIDE2KSwgcGFyc2VJbnQocmVkLCAxNiksIHBhcnNlSW50KGdyZWVuLCAxNiksIHBhcnNlSW50KGJsdWUsIDE2KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgYWxwaGEgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBhbHBoYSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBhbHBoYSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWxwaGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcmVkIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcmVkIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIHJlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGdyZWVuIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZ3JlZW4gZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgZ3JlZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyZWVuO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGJsdWUgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBibHVlIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGJsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyBhcmdiLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbG9yIGFzIGFyZ2IuXHJcbiAgICAgKi9cclxuICAgIGFyZ2IoKSB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5fYWxwaGEgPDwgMjQpIHwgKHRoaXMuX3JlZCA8PCAxNikgfCAodGhpcy5fZ3JlZW4gPDwgOCkgfCB0aGlzLl9ibHVlKSA+Pj4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbG9yIGFzIHJnYmEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IgYXMgcmdiYS5cclxuICAgICAqL1xyXG4gICAgcmdiYSgpIHtcclxuICAgICAgICByZXR1cm4gKCh0aGlzLl9yZWQgPDwgMjQpIHwgKHRoaXMuX2dyZWVuIDw8IDE2KSB8ICh0aGlzLl9ibHVlIDw8IDgpIHwgdGhpcy5fYWxwaGEpID4+PiAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgcmdiIHRleHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IgYXMgcmdiLlxyXG4gICAgICovXHJcbiAgICByZ2JUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5fcmVkfSwke3RoaXMuX2dyZWVufSwke3RoaXMuX2JsdWV9KWA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyByZ2JhIHRleHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IgYXMgcmdiYS5cclxuICAgICAqL1xyXG4gICAgcmdiYVRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGByZ2JhKCR7dGhpcy5fcmVkfSwke3RoaXMuX2dyZWVufSwke3RoaXMuX2JsdWV9LCR7TWF0aC5yb3VuZCh0aGlzLl9hbHBoYSAvIDI1NSAqIDEwMCkgLyAxMDB9KWA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2xvciBhcyBoZXggbm8gYWxwaGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IgYXMgaGV4IHdpdGggbm8gYWxwaGEgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBoZXgoKSB7XHJcbiAgICAgICAgY29uc3QgcmVkID0gYDAwJHt0aGlzLl9yZWQudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IGdyZWVuID0gYDAwJHt0aGlzLl9ncmVlbi50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgY29uc3QgYmx1ZSA9IGAwMCR7dGhpcy5fYmx1ZS50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgcmV0dXJuIGAjJHtyZWR9JHtncmVlbn0ke2JsdWV9YC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29sb3IgYXMgaGV4IHdpdGggYWxwaGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sb3IgYXMgaGV4IHdpdGggd2l0aCBhbHBoYSBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIGhleFdpdGhBbHBoYSgpIHtcclxuICAgICAgICBjb25zdCBhbHBoYSA9IGAwMCR7dGhpcy5fYWxwaGEudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IHJlZCA9IGAwMCR7dGhpcy5fcmVkLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICBjb25zdCBncmVlbiA9IGAwMCR7dGhpcy5fZ3JlZW4udG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIGNvbnN0IGJsdWUgPSBgMDAke3RoaXMuX2JsdWUudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIHJldHVybiBgIyR7YWxwaGF9JHtyZWR9JHtncmVlbn0ke2JsdWV9YC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29sb3IgPSBDb2xvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzlqYjJ4dmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FUkJRWFZFTzBGQlEzWkVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxFMUJRV0VzUzBGQlN6dEpRVlZrT3pzN096czdUMEZOUnp0SlFVTklMRmxCUVZrc1MwRkJZU3hGUVVGRkxFZEJRVmNzUlVGQlJTeExRVUZoTEVWQlFVVXNTVUZCV1R0UlFVTXZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRelZFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2MwUkJRWE5FTEVOQlFVTXNRMEZCUXp0VFFVTXpSVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGRGRFUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh2UkVGQmIwUXNRMEZCUXl4RFFVRkRPMU5CUTNwRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFZEJRVWNzUlVGQlJUdFpRVU0xUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkVRVUZ6UkN4RFFVRkRMRU5CUVVNN1UwRkRNMFU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEzcEVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zY1VSQlFYRkVMRU5CUVVNc1EwRkJRenRUUVVNeFJUdFJRVVZFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRMmhDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGWE8xRkJRemRDTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03VTBGRGVrUTdVVUZGUkN4SlFVRkpMRXRCUVVzc1EwRkJRenRSUVVOV0xFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlExSXNTVUZCU1N4TFFVRkxMRU5CUVVNN1VVRkRWaXhKUVVGSkxFbEJRVWtzUTBGQlF6dFJRVU5VTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1QwRkJUenRaUVVONFF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUTJZc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRja003WVVGQlRTeEpRVUZKTEcxQ1FVRnRRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRkZCUVZFN1dVRkRhRVFzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU55UXp0aFFVRk5MRWxCUVVrc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzVlVGQlZUdFpRVU5zUkN4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRMllzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkNMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETTBJN1lVRkJUU3hKUVVGSkxHMUNRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEZsQlFWazdXVUZEY0VRc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BDTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpOQ08yRkJRVTA3V1VGRFNDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRzlHUVVGdlJpeERRVUZETEVOQlFVTTdVMEZEZWtjN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjBSeXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1IwRkJSenRSUVVOT0xFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1NVRkJTVHRSUVVOUUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1NVRkJTVHRSUVVOUUxFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpkR0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hKUVVGSk8xRkJRMUFzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROMFlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVTg3VVVGRFZpeFBRVUZQTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJRenRKUVVNMVJDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNVVUZCVVN4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRPMGxCUXpGSExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hIUVVGSE8xRkJRMDRzVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZEVRc1QwRkJUeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVkQlFVY3NTVUZCU1N4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZsQlFWazdVVUZEWml4TlFVRk5MRXRCUVVzc1IwRkJSeXhMUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRlRVFzVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzQkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZEVRc1QwRkJUeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEhRVUZITEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBsQlF6RkVMRU5CUVVNN1EwRkRTanRCUVc1TFJDeHpRa0Z0UzBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgbGluZWFyIGdyYWRpZW50LlxyXG4gKi9cclxuY2xhc3MgTGluZWFyR3JhZGllbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgbGluZWFyIGdyYWRpZW50LlxyXG4gICAgICogQHBhcmFtIHN0b3BzIFRoZSBzdG9wIGZvciB0aGUgZ3JhZGllbnQuXHJcbiAgICAgKiBAcGFyYW0gYW5nbGUgVGhlIGFuZ2xlIGZvciB0aGUgZ3JhZGllbnQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHN0b3BzLCBhbmdsZSkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0FycmF5KHN0b3BzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RvcHMgYXJyYXkgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoYW5nbGUpICYmICFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGFuZ2xlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYW5nbGUgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RvcHMgPSBzdG9wcztcclxuICAgICAgICB0aGlzLl9hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0b3BzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0b3BzLlxyXG4gICAgICovXHJcbiAgICBzdG9wcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgYW5nbGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYW5nbGUuXHJcbiAgICAgKi9cclxuICAgIGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmdsZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkxpbmVhckdyYWRpZW50ID0gTGluZWFyR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHbHVaV0Z5UjNKaFpHbGxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5c2FXNWxZWEpIY21Ga2FXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNkMFJCUVhGRU8wRkJRM0pFTERCRVFVRjFSRHRCUVVOMlJDd3dSRUZCZFVRN1FVRkhka1E3TzBkQlJVYzdRVUZEU0N4TlFVRmhMR05CUVdNN1NVRk5ka0k3T3pzN1QwRkpSenRKUVVOSUxGbEJRVmtzUzBGQkswTXNSVUZCUlN4TFFVRmpPMUZCUTNaRkxFbEJRVWtzUTBGQlF5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU0zUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1UwRkRlRVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTm9SU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSQ1FVRTBRaXhEUVVGRExFTkJRVU03VTBGRGFrUTdVVUZGUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUTBvN1FVRjBRMFFzZDBOQmMwTkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIHJhZGlhbCBncmFkaWVudC5cclxuICovXHJcbmNsYXNzIFJhZGlhbEdyYWRpZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHJhZGlhbCBncmFkaWVudC5cclxuICAgICAqIEBwYXJhbSBzdG9wcyBUaGUgc3RvcCBmb3IgdGhlIGdyYWRpZW50LlxyXG4gICAgICogQHBhcmFtIG9mZnNldFhQZXJjZW50IFRoZSBvZmZzZXRYUGVyY2VudCBmb3IgdGhlIGdyYWRpZW50LlxyXG4gICAgICogQHBhcmFtIG9mZnNldFlQZXJjZW50IFRoZSBvZmZzZXRZUGVyY2VudCBmb3IgdGhlIGdyYWRpZW50LlxyXG4gICAgICogQHBhcmFtIHJhZGl1c1BlcmNlbnQgVGhlIHJhZGl1c1BlcmNlbnQgZm9yIHRoZSBncmFkaWVudC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc3RvcHMsIG9mZnNldFhQZXJjZW50LCBvZmZzZXRZUGVyY2VudCwgcmFkaXVzUGVyY2VudCkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc0FycmF5KHN0b3BzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RvcHMgYXJyYXkgbXVzdCBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkob2Zmc2V0WFBlcmNlbnQpICYmICFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldFhQZXJjZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb2Zmc2V0WFBlcmNlbnQgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShvZmZzZXRZUGVyY2VudCkgJiYgIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0WVBlcmNlbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBvZmZzZXRZUGVyY2VudCBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHJhZGl1c1BlcmNlbnQpICYmICFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHJhZGl1c1BlcmNlbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSByYWRpdXNQZXJjZW50IG11c3QgYmUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0b3BzID0gc3RvcHM7XHJcbiAgICAgICAgdGhpcy5fb2Zmc2V0WFBlcmNlbnQgPSBvZmZzZXRYUGVyY2VudDtcclxuICAgICAgICB0aGlzLl9vZmZzZXRZUGVyY2VudCA9IG9mZnNldFlQZXJjZW50O1xyXG4gICAgICAgIHRoaXMuX3JhZGl1c1BlcmNlbnQgPSByYWRpdXNQZXJjZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0b3BzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0b3BzLlxyXG4gICAgICovXHJcbiAgICBzdG9wcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgb2Zmc2V0WFBlcmNlbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb2Zmc2V0WFBlcmNlbnQuXHJcbiAgICAgKi9cclxuICAgIG9mZnNldFhQZXJjZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXRYUGVyY2VudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBvZmZzZXRZUGVyY2VudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvZmZzZXRZUGVyY2VudC5cclxuICAgICAqL1xyXG4gICAgb2Zmc2V0WVBlcmNlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldFlQZXJjZW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJhZGl1c1BlcmNlbnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcmFkaXVzUGVyY2VudC5cclxuICAgICAqL1xyXG4gICAgcmFkaXVzUGVyY2VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmFkaXVzUGVyY2VudDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gUmFkaWFsR3JhZGllbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtRmthV0ZzUjNKaFpHbGxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5eVlXUnBZV3hIY21Ga2FXVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNkMFJCUVhGRU8wRkJRM0pFTERCRVFVRjFSRHRCUVVOMlJDd3dSRUZCZFVRN1FVRkhka1E3TzBkQlJVYzdRVUZEU0N4TlFVRmhMR05CUVdNN1NVRlZka0k3T3pzN096dFBRVTFITzBsQlEwZ3NXVUZCV1N4TFFVRXJReXhGUVVGRkxHTkJRWFZDTEVWQlFVVXNZMEZCZFVJc1JVRkJSU3hoUVVGelFqdFJRVU5xU1N4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkROMElzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4dFEwRkJiVU1zUTBGQlF5eERRVUZETzFOQlEzaEVPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3V1VGRGJFWXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMU5CUXpGRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdXVUZEYkVZc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRekZFTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1dVRkRhRVlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4dlEwRkJiME1zUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUlVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eGpRVUZqTEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eGpRVUZqTEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eGhRVUZoTEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRXRCUVVzN1VVRkRVaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEZGtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMR05CUVdNN1VVRkRha0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hqUVVGak8xRkJRMnBDTEU5QlFVOHNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzWVVGQllUdFJRVU5vUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03U1VGREwwSXNRMEZCUXp0RFFVTktPMEZCY0VWRUxIZERRVzlGUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCB0aGUgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICB0eXBlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRnpRaXhYUVVGWE8wbEJRV3BETzFGQlEwa3NaVUZCWlR0UlFVTkZMRmRCUVUwc1IwRkJPRU1zUlVGQlJTeERRVUZETzBsQmMwUTFSU3hEUVVGRE8wbEJjRVJIT3pzN08wOUJTVWM3U1VGRFNTeFJRVUZSTEVOQlFVTXNTVUZCV1N4RlFVRkZMR1ZCUVhORE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NaVUZCWlN4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU14UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTVUZCV1R0UlFVTjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEzcEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRkRU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlF6dGhRVUZOTzFsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3U1VGRFRDeERRVUZETzBOQlNVbzdRVUY0UkVRc2EwTkJkMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBcnJheSBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBlbXB0eSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG5vbiBlbXB0eSBhcnJheSBvZiBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBub24gZW1wdHkgYXJyYXkgb2YgYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlZCh2YWx1ZSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNFbXB0eSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKHVuZGVmaW5lZCkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKG51bGwpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmV2ZXJ5KChhKSA9PiBvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGEsIHR5cGUpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5SGVscGVyID0gQXJyYXlIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYSnlZWGxJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5aGNuSmhlVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2FVUkJRVGhETzBGQlJUbERPenRIUVVWSE8wRkJRMGdzVFVGQllTeFhRVUZYTzBsQlEzQkNPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlU3VVVGRE5VSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTzFsQlEzaERMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlU3VVVGRE5VSXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE4wUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTEVWQlFVVXNTVUZCWXp0UlFVTTFReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRPVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVNeFFpeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM0pDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpsRUxFTkJRVU03UTBGRlNqdEJRV3BEUkN4clEwRnBRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE51bWJlciBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE51bWJlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBpbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgaW50ZWdlcm5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBpbnRlZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVySGVscGVyID0gTnVtYmVySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeVNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiblZ0WW1WeVNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNXVUZCV1R0SlFVTnlRanM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZWTzFGQlF6bENMRTlCUVU4c1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1MwRkJTeXhEUVVGRE8wbEJRM1JJTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGVk8xRkJRemRDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTm9TU3hEUVVGRE8wTkJRMG83UVVGc1FrUXNiME5CYTBKREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBBIGNhbGxiYWNrIG1ldGhvZCB3aGljaCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEUxQlFXRXNXVUZCV1R0SlFVTnlRanM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjBSU3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVZVc1JVRkJSU3hsUVVGNVFqdFJRVU4wUkN4TlFVRk5MR05CUVdNc1IwRkJSeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNoRUxFOUJRVThzWTBGQll5eExRVUZMTEZOQlFWTXNTVUZCU1N4alFVRmpMRXRCUVVzc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0SlFVTjZSeXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVnp0UlFVTnNReXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVONlF5eFBRVUZQTEZOQlFWTXNRMEZCUXp0VFFVTndRanRoUVVGTk8xbEJRMGdzVFVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4TlFVRk5MRXRCUVVzc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkRja2NzVFVGQlRTeFBRVUZQTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU14UXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRMjVGTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjBORUxHOURRVFpEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXQgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHg3Rl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIHByaW50YWJsZSBjaGFyYWN0ZXJzLCBpbmNsdWRpbmcgdGFiLCBjYXJyaWFnZSByZXR1cm4gYW5kIGxpbmUgZmVlZC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpdCBpcyBwcmludGFibC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgcHJpbnRhYmxlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ByaW50YWJsZSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwOVxceDBBXFx4MERcXHgyMC1cXHhGRl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA4MC1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRTFCUVdFc1dVRkJXVHRKUVVOeVFqczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMMFFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVdFN1VVRkRMMElzVDBGQlR5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQllUdFJRVU51UXl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTTdXVUZEZUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpORUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRmhPMUZCUTNSRExFOUJRVThzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJReTlLTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGaE8xRkJRM1JETEU5QlFVOHNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRjZSRVFzYjBOQmVVUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIG1hbmlwdWxhdGUgVHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIHN0cmluZyB2YWx1ZSBpbnRvIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydCBpbnRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG8odmFsdWUpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHZhbHVlIGNhbiBub3QgYmUgZW1wdHlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhc2NpaVZhbHVlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGFzY2lpVmFsdWUgJSAyNztcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVmFsdWUgPSAoYXNjaWlWYWx1ZSAtIGZpcnN0VmFsdWUpIC8gMjc7XHJcbiAgICAgICAgICAgIHRyeXRlcyArPSBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbZmlyc3RWYWx1ZV0gKyBUcnl0ZXNIZWxwZXIuQUxQSEFCRVRbc2Vjb25kVmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyeXRlcyBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIGNvbnZlcnQgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgdmFsdWUgY29udmVydGVkIGZyb20gdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb20odHJ5dGVzKSB7XHJcbiAgICAgICAgbGV0IGFzY2lpID0gXCJcIjtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0cnl0ZXMgY2FuIG5vdCBiZSBlbXB0eWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVzLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdHJ5dGVzIGxlbmd0aCBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyLCBpdCBpcyAke3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzSGVscGVyLmlzVHJ5dGVzKHRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHRyeXRlcyBjb250YWlucyBub24tdHJ5dGUgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IFRyeXRlc0hlbHBlci5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFZhbHVlID0gVHJ5dGVzSGVscGVyLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxWYWx1ZSA9IGZpcnN0VmFsdWUgKyBzZWNvbmRWYWx1ZSAqIDI3O1xyXG4gICAgICAgICAgICBhc2NpaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY2ltYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhc2NpaTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdG8gbWFrZSBzdXJlIGFsbCB0aGUgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nIGFyZSB0cnl0ZSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUbyBjaGVjayBmb3IgdmFsaWRpdHkuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSB0cnl0ZXMgYXJlIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUcnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlcyAhPT0gbnVsbCAmJiB0cnl0ZXMgIT09IHVuZGVmaW5lZCAmJiAvXls5QS1aXSskLy50ZXN0KHRyeXRlcyk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEFsbCB0aGUgY2hhcmFjdGVycyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyeXRlcy5cclxuICovXHJcblRyeXRlc0hlbHBlci5BTFBIQUJFVCA9IFwiOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbmV4cG9ydHMuVHJ5dGVzSGVscGVyID0gVHJ5dGVzSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWelNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZkSEo1ZEdWelNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3hwUkVGQk9FTTdRVUZGT1VNN08wZEJSVWM3UVVGRFNDeE5RVUZoTEZsQlFWazdTVUZOY2tJN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQllUdFJRVU14UWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRmFFSXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERSQ1FVRTBRaXhEUVVGRExFTkJRVU03VTBGRGFrUTdVVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU51UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhaRExFMUJRVTBzVlVGQlZTeEhRVUZITEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRia01zVFVGQlRTeFhRVUZYTEVkQlFVY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlJXNUVMRTFCUVUwc1NVRkJTU3haUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEY0VZN1VVRkZSQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQll6dFJRVU0zUWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRlppeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlF6bENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRUUVVOc1JEdFJRVVZFTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzcENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYlVSQlFXMUVMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzWkdPMUZCUlVRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3d1EwRkJNRU1zUTBGQlF5eERRVUZETzFOQlF5OUVPMUZCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hOUVVGTkxGZEJRVmNzUjBGQlJ5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZha1VzVFVGQlRTeFpRVUZaTEVkQlFVY3NWVUZCVlN4SFFVRkhMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRmJrUXNTMEZCU3l4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVMEZET1VNN1VVRkZSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEpRVU5xUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQll6dFJRVU5xUXl4UFFVRlBMRTFCUVUwc1MwRkJTeXhKUVVGSkxFbEJRVWtzVFVGQlRTeExRVUZMTEZOQlFWTXNTVUZCU1N4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF5OUZMRU5CUVVNN08wRkJjRVZFT3p0SFFVVkhPMEZCUTFjc2NVSkJRVkVzUjBGQlZ5dzJRa0ZCTmtJc1EwRkJRenRCUVVwdVJTeHZRMEZ6UlVNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9jb2xvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvbGluZWFyR3JhZGllbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3JhZGlhbEdyYWRpZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9hcnJheUhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9vYmplY3RIZWxwZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvdHJ5dGVzSGVscGVyXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzYTBOQlFUWkNPMEZCUXpkQ0xESkRRVUZ6UXp0QlFVTjBReXd5UTBGQmMwTTdRVUZEZEVNc05rTkJRWGRETzBGQlEzaERMREpEUVVGelF6dEJRVU4wUXl3MFEwRkJkVU03UVVGRGRrTXNORU5CUVhWRE8wRkJRM1pETERSRFFVRjFRenRCUVVOMlF5dzBRMEZCZFVNaWZRPT0iXSwic291cmNlUm9vdCI6IiJ9