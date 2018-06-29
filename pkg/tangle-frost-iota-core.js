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
 * Class to maniuplate Strings.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "encodeNonASCII",

    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    value: function encodeNonASCII(value) {
      return value !== null && value !== undefined ? value.replace(/[\u0100-\uFFFF]/g, function (chr) {
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
      return value !== null && value !== undefined ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
    /**
     * Check to see if the whole string is ASCII.
     * @param value The value to check.
     * @returns True if all the characters are ascii.
     */

  }, {
    key: "isASCII",
    value: function isASCII(value) {
      return value !== null && value !== undefined && /^[\u0000-\u00FF]*$/.test(value);
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
     * @param ascii The value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    value: function to(ascii) {
      var trytes = "";

      if (ascii) {
        for (var i = 0; i < ascii.length; i++) {
          var charCode = ascii.charCodeAt(i);

          if (charCode > 255) {
            throw new Error("Can not convert non ASCII characters to trytes, charCode ".concat(charCode));
          }

          var firstValue = charCode % 27;
          var secondValue = (charCode - firstValue) / 27;
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

__export(__webpack_require__(/*! ./factories/factoryBase */ "./dist/factories/factoryBase.js"));

__export(__webpack_require__(/*! ./helpers/stringHelper */ "./dist/helpers/stringHelper.js"));

__export(__webpack_require__(/*! ./helpers/trytesHelper */ "./dist/helpers/trytesHelper.js"));

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YUNvcmUvLi4vLi4vc3JjL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3RyeXRlc0hlbHBlci50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFDb3JlLy4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNB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LE0sRUFBYztBQUM3QixVQUFJLFFBQVEsRUFBWjs7QUFFQSxVQUFJLE1BQUosRUFBWTtBQUNSLFlBQUksT0FBTyxNQUFQLEdBQWdCLENBQWhCLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGdCQUFNLElBQUksS0FBSiwyREFBNkQsT0FBTyxNQUFwRSxFQUFOO0FBQ0g7O0FBRUQsWUFBSSxDQUFDLGFBQWEsUUFBYixDQUFzQixNQUF0QixDQUFMLEVBQW9DO0FBQ2hDLGdCQUFNLElBQUksS0FBSixDQUFVLDBDQUFWLENBQU47QUFDSDs7QUFFRCxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksT0FBTyxNQUEzQixFQUFtQyxLQUFLLENBQXhDLEVBQTJDO0FBQ3ZDLGNBQU0sYUFBYSxhQUFhLFFBQWIsQ0FBc0IsT0FBdEIsQ0FBOEIsT0FBTyxDQUFQLENBQTlCLENBQW5CO0FBQ0EsY0FBTSxjQUFjLGFBQWEsUUFBYixDQUFzQixPQUF0QixDQUE4QixPQUFPLElBQUksQ0FBWCxDQUE5QixDQUFwQjtBQUVBLGNBQU0sZUFBZSxhQUFhLGNBQWMsRUFBaEQ7QUFFQSxtQkFBUyxPQUFPLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBVDtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7NkJBS3VCLE0sRUFBYztBQUNqQyxhQUFPLFdBQVcsSUFBWCxJQUFtQixXQUFXLFNBQTlCLElBQTJDLFlBQVksSUFBWixDQUFpQixNQUFqQixDQUFsRDtBQUNIOzs7OztBQXBFRDs7Ozs7QUFHYyx3QkFBbUIsNkJBQW5CO0FBSmxCLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBR0E7O0FBQ0E7O0FBQ0EsOEYiLCJmaWxlIjoidGFuZ2xlLWZyb3N0LWlvdGEtY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFuZ2xlRnJvc3RJb3RhQ29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHR5cGVzLlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICovXHJcbmNsYXNzIEZhY3RvcnlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX3R5cGVzID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHR5cGUgd2l0aCB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHJlZ2lzdGVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLlxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihuYW1lLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdID0gdHlwZUNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGEgdHlwZSBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gdW5yZWdpc3Rlci5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIGZhY3RvcnkgY29udGFpbiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBleGlzdHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIExpc3QgdGhlIHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgdHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBjcmVhdGUuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGluc3RhbmNlIG9mIHRoZSB0eXBlIGlmIGl0IGV4aXN0cywgb3IgdW5kZWZpbmVkIGlmIGl0IGRvZXMgbm90LlxyXG4gICAgICovXHJcbiAgICBjcmVhdGUobmFtZSwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5fdHlwZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl90eXBlc1tuYW1lXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRmFjdG9yeUJhc2UgPSBGYWN0b3J5QmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllVUpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Wm1GamRHOXlhV1Z6TDJaaFkzUnZjbmxDWVhObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNEdEpRVUZCTzFGQlEwa3NaVUZCWlR0UlFVTkZMRmRCUVUwc1IwRkJPRU1zUlVGQlJTeERRVUZETzBsQmMwUTFSU3hEUVVGRE8wbEJjRVJIT3pzN08wOUJTVWM3U1VGRFNTeFJRVUZSTEVOQlFVTXNTVUZCV1N4RlFVRkZMR1ZCUVhORE8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NaVUZCWlN4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU14UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTVUZCV1R0UlFVTjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEzcEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTenRSUVVOU0xFOUJRVThzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFWa3NSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRkRU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJRM0JETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4yUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVONlF6dGhRVUZOTzFsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3U1VGRFRDeERRVUZETzBOQlNVbzdRVUY0UkVRc2EwTkJkMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIG1hbml1cGxhdGUgU3RyaW5ncy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICB2YWx1ZS5yZXBsYWNlKC9bXFx1MDEwMC1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGUgd2hvbGUgc3RyaW5nIGlzIEFTQ0lJLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYWxsIHRoZSBjaGFyYWN0ZXJzIGFyZSBhc2NpaS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAvXltcXHUwMDAwLVxcdTAwRkZdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nSGVscGVyID0gU3RyaW5nSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1J5YVc1blNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZjM1J5YVc1blNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJZVHRSUVVOMFF5eFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzFsQlF6RkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTTNTQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCWVR0UlFVTjBReXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRE8xbEJRekZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRE9VY3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRV0U3VVVGREwwSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTzJWQlEzQkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETzBOQlEwbzdRVUU1UWtRc2IwTkJPRUpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIG1hbmlwdWxhdGUgVHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIHN0cmluZyB2YWx1ZSBpbnRvIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBhc2NpaSBUaGUgdmFsdWUgdG8gY29udmVydCBpbnRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG8oYXNjaWkpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBpZiAoYXNjaWkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc2NpaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhckNvZGUgPSBhc2NpaS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID4gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4gbm90IGNvbnZlcnQgbm9uIEFTQ0lJIGNoYXJhY3RlcnMgdG8gdHJ5dGVzLCBjaGFyQ29kZSAke2NoYXJDb2RlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGNoYXJDb2RlICUgMjc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRWYWx1ZSA9IChjaGFyQ29kZSAtIGZpcnN0VmFsdWUpIC8gMjc7XHJcbiAgICAgICAgICAgICAgICB0cnl0ZXMgKz0gVHJ5dGVzSGVscGVyLkFMUEhBQkVUW2ZpcnN0VmFsdWVdICsgVHJ5dGVzSGVscGVyLkFMUEhBQkVUW3NlY29uZFZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyeXRlcyBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIGNvbnZlcnQgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgdmFsdWUgY29udmVydGVkIGZyb20gdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb20odHJ5dGVzKSB7XHJcbiAgICAgICAgbGV0IGFzY2lpID0gXCJcIjtcclxuICAgICAgICBpZiAodHJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0cnl0ZXMubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdHJ5dGVzIGxlbmd0aCBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyLCBpdCBpcyAke3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFUcnl0ZXNIZWxwZXIuaXNUcnl0ZXModHJ5dGVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHRyeXRlcyBjb250YWlucyBub24tdHJ5dGUgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IFRyeXRlc0hlbHBlci5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRWYWx1ZSA9IFRyeXRlc0hlbHBlci5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1tpICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjaW1hbFZhbHVlID0gZmlyc3RWYWx1ZSArIHNlY29uZFZhbHVlICogMjc7XHJcbiAgICAgICAgICAgICAgICBhc2NpaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY2ltYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzY2lpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB0byBtYWtlIHN1cmUgYWxsIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBzdHJpbiBhcmUgdHJ5dGUgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVG8gY2hlY2sgZm9yIHZhbGlkaXR5LlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgdHJ5dGVzIGFyZSB2YWxpZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHJ5dGVzKHRyeXRlcykge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXMgIT09IG51bGwgJiYgdHJ5dGVzICE9PSB1bmRlZmluZWQgJiYgL15bOUEtWl0rJC8udGVzdCh0cnl0ZXMpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBBbGwgdGhlIGNoYXJhY3RlcnMgdGhhdCBjYW4gYmUgdXNlZCBpbiB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZXNIZWxwZXIuQUxQSEFCRVQgPSBcIjlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG5leHBvcnRzLlRyeXRlc0hlbHBlciA9IFRyeXRlc0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVnpTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12ZEhKNWRHVnpTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJUVWs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCWVR0UlFVTXhRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGYUVJc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFVDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGJrTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZja01zU1VGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZPMjlDUVVOb1FpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRFJFUVVFMFJDeFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmxDUVVNelJqdG5Ra0ZGUkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTnFReXhOUVVGTkxGZEJRVmNzUjBGQlJ5eERRVUZETEZGQlFWRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlJXcEVMRTFCUVUwc1NVRkJTU3haUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdZVUZEY0VZN1UwRkRTanRSUVVWRUxFOUJRVThzVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZqTzFGQlF6ZENMRWxCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZtTEVsQlFVa3NUVUZCVFN4RlFVRkZPMWxCUTFJc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM3BDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2JVUkJRVzFFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM1pHTzFsQlJVUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdaMEpCUTJoRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dGhRVU12UkR0WlFVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdaMEpCUTNaRExFMUJRVTBzVlVGQlZTeEhRVUZITEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJXcEZMRTFCUVUwc1dVRkJXU3hIUVVGSExGVkJRVlVzUjBGQlJ5eFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVWdVJDeExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dGhRVU01UXp0VFFVTktPMUZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRV003VVVGRGFrTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1NVRkJTU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU12UlN4RFFVRkRPenRCUVhCRlJEczdSMEZGUnp0QlFVTlhMSEZDUVVGUkxFZEJRVmNzTmtKQlFUWkNMRU5CUVVNN1FVRktia1VzYjBOQmMwVkRJbjA9IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy90cnl0ZXNIZWxwZXJcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NOa05CUVhkRE8wRkJRM2hETERSRFFVRjFRenRCUVVOMlF5dzBRMEZCZFVNaWZRPT0iXSwic291cmNlUm9vdCI6IiJ9