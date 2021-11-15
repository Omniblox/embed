(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Embed"] = factory();
	else
		root["Embed"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(n);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://Embed/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./src/index.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".embed-tool--loading .embed-tool__caption {\\n      display: none;\\n    }\\n\\n    .embed-tool--loading .embed-tool__preloader {\\n      display: block;\\n    }\\n\\n    .embed-tool--loading .embed-tool__content {\\n      display: none;\\n    }\\n  .embed-tool__preloader {\\n    display: none;\\n    position: relative;\\n    height: 200px;\\n    box-sizing: border-box;\\n    border-radius: 5px;\\n    border: 1px solid #e6e9eb;\\n  }\\n  .embed-tool__preloader::before {\\n      content: '';\\n      position: absolute;\\n      z-index: 3;\\n      left: 50%;\\n      top: 50%;\\n      width: 30px;\\n      height: 30px;\\n      margin-top: -25px;\\n      margin-left: -15px;\\n      border-radius: 50%;\\n      border: 2px solid #cdd1e0;\\n      border-top-color: #388ae5;\\n      box-sizing: border-box;\\n      animation: embed-preloader-spin 2s infinite linear;\\n    }\\n  .embed-tool__url {\\n    position: absolute;\\n    bottom: 20px;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    max-width: 250px;\\n    color: #7b7e89;\\n    font-size: 11px;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n  }\\n  .embed-tool__content {\\n    width: 100%;\\n  }\\n  .embed-tool__caption {\\n    margin-top: 7px;\\n  }\\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\\n      position: absolute;\\n      content: attr(data-placeholder);\\n      color: #707684;\\n      font-weight: normal;\\n      opacity: 0;\\n    }\\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\\n         opacity: 1;\\n      }\\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\\n        opacity: 0;\\n      }\\n\\n@keyframes embed-preloader-spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://Embed/./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://Embed/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Returns a function, that, as long as it continues to be invoked, will not\n * be triggered. The function will be called after it stops being called for\n * N milliseconds. If `immediate` is passed, trigger the function on the\n * leading edge, instead of the trailing. The function also has a property 'clear' \n * that is a function which will clear the timer to prevent previously scheduled executions. \n *\n * @source underscore.js\n * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/\n * @param {Function} function to wrap\n * @param {Number} timeout in ms (`100`)\n * @param {Boolean} whether to execute at the beginning (`false`)\n * @api public\n */\nfunction debounce(func, wait, immediate){\n  var timeout, args, context, timestamp, result;\n  if (null == wait) wait = 100;\n\n  function later() {\n    var last = Date.now() - timestamp;\n\n    if (last < wait && last >= 0) {\n      timeout = setTimeout(later, wait - last);\n    } else {\n      timeout = null;\n      if (!immediate) {\n        result = func.apply(context, args);\n        context = args = null;\n      }\n    }\n  };\n\n  var debounced = function(){\n    context = this;\n    args = arguments;\n    timestamp = Date.now();\n    var callNow = immediate && !timeout;\n    if (!timeout) timeout = setTimeout(later, wait);\n    if (callNow) {\n      result = func.apply(context, args);\n      context = args = null;\n    }\n\n    return result;\n  };\n\n  debounced.clear = function() {\n    if (timeout) {\n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n  \n  debounced.flush = function() {\n    if (timeout) {\n      result = func.apply(context, args);\n      context = args = null;\n      \n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n\n  return debounced;\n};\n\n// Adds compatibility for ES modules\ndebounce.debounce = debounce;\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://Embed/./node_modules/debounce/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Embed/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--5-2!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://Embed/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Embed; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/**\n * @typedef {object} EmbedData\n * @description Embed Tool data\n * @property {string} service - service name\n * @property {string} url - source URL of embedded content\n * @property {string} embed - URL to source embed page\n * @property {number} [width] - embedded content width\n * @property {number} [height] - embedded content height\n * @property {string} [caption] - content caption\n */\n\n/**\n * @typedef {object} PasteEvent\n * @typedef {object} HTMLElement\n * @typedef {object} Service\n * @description Service configuration object\n * @property {RegExp} regex - pattern of source URLs\n * @property {string} embedUrl - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource serviceId\n * @property {string} html - iframe which contains embedded content\n * @property {Function} [serviceId] - function to get resource serviceId from RegExp groups\n */\n\n/**\n * @typedef {object} EmbedConfig\n * @description Embed tool configuration object\n * @property {object} [services] - additional services provided by user. Each property should contain Service object\n */\n\n/**\n * @class Embed\n * @classdesc Embed Tool for Editor.js 2.0\n *\n * @property {object} api - Editor.js API\n * @property {EmbedData} _data - private property with Embed data\n * @property {HTMLElement} element - embedded content container\n *\n * @property {object} services - static property with available services\n * @property {object} patterns - static property with patterns for paste handling configuration\n */\n\nvar Embed = /*#__PURE__*/function () {\n  /**\n   * @param {{data: EmbedData, config: EmbedConfig, api: object}}\n   *   data — previously saved data\n   *   config - user config for Tool\n   *   api - Editor.js API\n   *   readOnly - read-only mode flag\n   */\n  function Embed(_ref) {\n    var data = _ref.data,\n        api = _ref.api,\n        readOnly = _ref.readOnly;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Embed);\n\n    this.api = api;\n    this._data = {};\n    this.element = null;\n    this.readOnly = readOnly;\n    this.data = data;\n  }\n  /**\n   * @param {EmbedData} data - embed data\n   * @param {RegExp} [data.regex] - pattern of source URLs\n   * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource serviceId\n   * @param {string} [data.html] - iframe which contains embedded content\n   * @param {number} [data.height] - iframe height\n   * @param {number} [data.width] - iframe width\n   * @param {string} [data.caption] - caption\n   * @param {string} [data.id] - Omniblox block id\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Embed, [{\n    key: \"render\",\n\n    /**\n     * Render Embed tool content\n     *\n     * @returns {HTMLElement}\n     */\n    value: function render() {\n      var _this = this;\n\n      if (!this.data.service) {\n        var _container = document.createElement(\"div\");\n\n        this.element = _container;\n        return _container;\n      }\n\n      var html = Embed.services[this.data.service].html;\n      var container = document.createElement(\"div\");\n      var caption = document.createElement(\"div\");\n      var template = document.createElement(\"template\");\n      var preloader = this.createPreloader();\n      container.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading);\n      caption.classList.add(this.CSS.input, this.CSS.caption);\n      container.appendChild(preloader);\n      caption.contentEditable = !this.readOnly;\n      caption.dataset.placeholder = \"Enter a caption\";\n      caption.innerHTML = this.data.caption || \"\";\n      template.innerHTML = html;\n      template.content.firstChild.setAttribute(\"src\", this.data.embed);\n      template.content.firstChild.classList.add(this.CSS.content);\n      var embedIsReady = this.embedIsReady(container);\n      container.appendChild(template.content.firstChild);\n      container.appendChild(caption);\n      embedIsReady.then(function () {\n        container.classList.remove(_this.CSS.containerLoading);\n      });\n      this.element = container;\n      return container;\n    }\n    /**\n     * Creates preloader to append to container while data is loading\n     *\n     * @returns {HTMLElement}\n     */\n\n  }, {\n    key: \"createPreloader\",\n    value: function createPreloader() {\n      var preloader = document.createElement(\"preloader\");\n      var url = document.createElement(\"div\");\n      url.textContent = this.data.source;\n      preloader.classList.add(this.CSS.preloader);\n      url.classList.add(this.CSS.url);\n      preloader.appendChild(url);\n      return preloader;\n    }\n    /**\n     * Save current content and return EmbedData object\n     *\n     * @returns {EmbedData}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save() {\n      return this.data;\n    }\n    /**\n     * Handle pasted url and return Service object\n     *\n     * @param {PasteEvent} event - event with pasted data\n     */\n\n  }, {\n    key: \"onPaste\",\n    value: function onPaste(event) {\n      var _event$detail = event.detail,\n          service = _event$detail.key,\n          url = _event$detail.data;\n      var _Embed$services$servi = Embed.services[service],\n          regex = _Embed$services$servi.regex,\n          embedUrl = _Embed$services$servi.embedUrl,\n          width = _Embed$services$servi.width,\n          height = _Embed$services$servi.height,\n          _Embed$services$servi2 = _Embed$services$servi.serviceId,\n          serviceId = _Embed$services$servi2 === void 0 ? function (serviceIds) {\n        return serviceIds.shift();\n      } : _Embed$services$servi2;\n      var result = regex.exec(url).slice(1);\n      var embed = embedUrl.replace(/<%= remote_id %>/g, serviceId(result));\n      this.data = {\n        service: service,\n        source: url,\n        embed: embed,\n        width: width,\n        height: height\n      };\n    }\n    /**\n     * Analyze provided config and make object with services to use\n     *\n     * @param {EmbedConfig} config - configuration of embed block element\n     */\n\n  }, {\n    key: \"embedIsReady\",\n\n    /**\n     * Checks that mutations in DOM have finished after appending iframe content\n     *\n     * @param {HTMLElement} targetNode - HTML-element mutations of which to listen\n     * @returns {Promise<any>} - result that all mutations have finished\n     */\n    value: function embedIsReady(targetNode) {\n      var PRELOADER_DELAY = 450;\n      var observer = null;\n      return new Promise(function (resolve, reject) {\n        observer = new MutationObserver(Object(debounce__WEBPACK_IMPORTED_MODULE_6__[\"debounce\"])(resolve, PRELOADER_DELAY));\n        observer.observe(targetNode, {\n          childList: true,\n          subtree: true\n        });\n      }).then(function () {\n        observer.disconnect();\n      });\n    }\n  }, {\n    key: \"data\",\n    set: function set(data) {\n      if (!(data instanceof Object)) {\n        throw Error(\"Embed Tool data should be object\");\n      }\n\n      var service = data.service,\n          source = data.source,\n          embed = data.embed,\n          width = data.width,\n          height = data.height,\n          _data$caption = data.caption,\n          caption = _data$caption === void 0 ? \"\" : _data$caption,\n          id = data.id;\n      this._data = {\n        service: service || this.data.service,\n        source: source || this.data.source,\n        embed: embed || this.data.embed,\n        width: width || this.data.width,\n        height: height || this.data.height,\n        caption: caption || this.data.caption || \"\",\n        id: id || this.data.id\n      };\n      var oldView = this.element;\n\n      if (oldView) {\n        oldView.parentNode.replaceChild(this.render(), oldView);\n      }\n    }\n    /**\n     * @returns {EmbedData}\n     */\n    ,\n    get: function get() {\n      if (this.element) {\n        var caption = this.element.querySelector(\".\".concat(this.api.styles.input));\n        this._data.caption = caption ? caption.innerHTML : \"\";\n      }\n\n      return this._data;\n    }\n    /**\n     * Get plugin styles\n     *\n     * @returns {object}\n     */\n\n  }, {\n    key: \"CSS\",\n    get: function get() {\n      return {\n        baseClass: this.api.styles.block,\n        input: this.api.styles.input,\n        container: \"embed-tool\",\n        containerLoading: \"embed-tool--loading\",\n        preloader: \"embed-tool__preloader\",\n        caption: \"embed-tool__caption\",\n        url: \"embed-tool__url\",\n        content: \"embed-tool__content\"\n      };\n    }\n  }], [{\n    key: \"prepare\",\n    value: function prepare(_ref2) {\n      var _ref2$config = _ref2.config,\n          config = _ref2$config === void 0 ? {} : _ref2$config;\n      var _config$services = config.services,\n          services = _config$services === void 0 ? {} : _config$services;\n      var entries = Object.entries(_services__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n      var enabledServices = Object.entries(services).filter(function (_ref3) {\n        var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),\n            key = _ref4[0],\n            value = _ref4[1];\n\n        return typeof value === \"boolean\" && value === true;\n      }).map(function (_ref5) {\n        var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 1),\n            key = _ref6[0];\n\n        return key;\n      });\n      var userServices = Object.entries(services).filter(function (_ref7) {\n        var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 2),\n            key = _ref8[0],\n            value = _ref8[1];\n\n        return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === \"object\";\n      }).filter(function (_ref9) {\n        var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref9, 2),\n            key = _ref10[0],\n            service = _ref10[1];\n\n        return Embed.checkServiceConfig(service);\n      }).map(function (_ref11) {\n        var _ref12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref11, 2),\n            key = _ref12[0],\n            service = _ref12[1];\n\n        var regex = service.regex,\n            embedUrl = service.embedUrl,\n            html = service.html,\n            height = service.height,\n            width = service.width,\n            serviceId = service.serviceId;\n        return [key, {\n          regex: regex,\n          embedUrl: embedUrl,\n          html: html,\n          height: height,\n          width: width,\n          serviceId: serviceId\n        }];\n      });\n\n      if (enabledServices.length) {\n        entries = entries.filter(function (_ref13) {\n          var _ref14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref13, 1),\n              key = _ref14[0];\n\n          return enabledServices.includes(key);\n        });\n      }\n\n      entries = entries.concat(userServices);\n      Embed.services = entries.reduce(function (result, _ref15) {\n        var _ref16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref15, 2),\n            key = _ref16[0],\n            service = _ref16[1];\n\n        if (!(key in result)) {\n          result[key] = service;\n          return result;\n        }\n\n        result[key] = Object.assign({}, result[key], service);\n        return result;\n      }, {});\n      Embed.patterns = entries.reduce(function (result, _ref17) {\n        var _ref18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref17, 2),\n            key = _ref18[0],\n            item = _ref18[1];\n\n        result[key] = item.regex;\n        return result;\n      }, {});\n    }\n    /**\n     * Check if Service config is valid\n     *\n     * @param {Service} config - configuration of embed block element\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"checkServiceConfig\",\n    value: function checkServiceConfig(config) {\n      var regex = config.regex,\n          embedUrl = config.embedUrl,\n          html = config.html,\n          height = config.height,\n          width = config.width,\n          serviceId = config.serviceId;\n      var isValid = regex && regex instanceof RegExp && embedUrl && typeof embedUrl === \"string\" && html && typeof html === \"string\";\n      isValid = isValid && (serviceId !== undefined ? serviceId instanceof Function : true);\n      isValid = isValid && (height !== undefined ? Number.isFinite(height) : true);\n      isValid = isValid && (width !== undefined ? Number.isFinite(width) : true);\n      return isValid;\n    }\n    /**\n     * Paste configuration to enable pasted URLs processing by Editor\n     *\n     * @returns {object} - object of patterns which contain regx for pasteConfig\n     */\n\n  }, {\n    key: \"pasteConfig\",\n    get: function get() {\n      return {\n        patterns: Embed.patterns\n      };\n    }\n    /**\n     * Notify core that read-only mode is supported\n     *\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"isReadOnlySupported\",\n    get: function get() {\n      return true;\n    }\n  }]);\n\n  return Embed;\n}();\n\n\n\n//# sourceURL=webpack://Embed/./src/index.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* eslint-disable no-useless-escape */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  vimeo: {\n    regex: /(?:http[s]?:\\/\\/)?(?:www.)?(?:player.)?vimeo\\.co(?:.+\\/([^\\/]\\d+)(?:#t=[\\d]+)?s?$)/,\n    embedUrl: \"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0\",\n    html: '<iframe style=\"width:100%;\" height=\"320\" frameborder=\"0\"></iframe>',\n    height: 320,\n    width: 580\n  },\n  youtube: {\n    regex: /(?:https?:\\/\\/)?(?:www\\.)?(?:(?:youtu\\.be\\/)|(?:youtube\\.com)\\/(?:v\\/|u\\/\\w\\/|embed\\/|watch))(?:(?:\\?v=)?([^#&?=]*))?((?:[?&]\\w*=\\w*)*)/,\n    embedUrl: \"https://www.youtube.com/embed/<%= remote_id %>\",\n    html: '<iframe style=\"width:100%;\" height=\"320\" frameborder=\"0\" allowfullscreen></iframe>',\n    height: 320,\n    width: 580,\n    serviceId: function serviceId(_ref) {\n      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n          _serviceId = _ref2[0],\n          params = _ref2[1];\n\n      if (!params && _serviceId) {\n        return _serviceId;\n      }\n\n      var paramsMap = {\n        start: \"start\",\n        end: \"end\",\n        t: \"start\",\n        // eslint-disable-next-line camelcase\n        time_continue: \"start\",\n        list: \"list\"\n      };\n      params = params.slice(1).split(\"&\").map(function (param) {\n        var _param$split = param.split(\"=\"),\n            _param$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_param$split, 2),\n            name = _param$split2[0],\n            value = _param$split2[1];\n\n        if (!_serviceId && name === \"v\") {\n          _serviceId = value;\n          return null;\n        }\n\n        if (!paramsMap[name]) {\n          return null;\n        }\n\n        return \"\".concat(paramsMap[name], \"=\").concat(value);\n      }).filter(function (param) {\n        return !!param;\n      });\n      return _serviceId + \"?\" + params.join(\"&\");\n    }\n  },\n  coub: {\n    regex: /https?:\\/\\/coub\\.com\\/view\\/([^\\/\\?\\&]+)/,\n    embedUrl: \"https://coub.com/embed/<%= remote_id %>\",\n    html: '<iframe style=\"width:100%;\" height=\"320\" frameborder=\"0\" allowfullscreen></iframe>',\n    height: 320,\n    width: 580\n  },\n  vine: {\n    regex: /https?:\\/\\/vine\\.co\\/v\\/([^\\/\\?\\&]+)/,\n    embedUrl: \"https://vine.co/v/<%= remote_id %>/embed/simple/\",\n    html: '<iframe style=\"width:100%;\" height=\"320\" frameborder=\"0\" allowfullscreen></iframe>',\n    height: 320,\n    width: 580\n  },\n  imgur: {\n    regex: /https?:\\/\\/(?:i\\.)?imgur\\.com.*\\/([a-zA-Z0-9]+)(?:\\.gifv)?/,\n    embedUrl: \"http://imgur.com/<%= remote_id %>/embed\",\n    html: '<iframe allowfullscreen=\"true\" scrolling=\"no\" id=\"imgur-embed-iframe-pub-<%= remote_id %>\" class=\"imgur-embed-iframe-pub\" style=\"height: 500px; width: 100%; border: 1px solid #000\"></iframe>',\n    height: 500,\n    width: 540\n  },\n  gfycat: {\n    regex: /https?:\\/\\/gfycat\\.com(?:\\/detail)?\\/([a-zA-Z]+)/,\n    embedUrl: \"https://gfycat.com/ifr/<%= remote_id %>\",\n    html: \"<iframe frameborder='0' scrolling='no' style=\\\"width:100%;\\\" height='436' allowfullscreen ></iframe>\",\n    height: 436,\n    width: 580\n  },\n  \"twitch-channel\": {\n    regex: /https?:\\/\\/www\\.twitch\\.tv\\/([^\\/\\?\\&]*)\\/?$/,\n    embedUrl: \"https://player.twitch.tv/?channel=<%= remote_id %>\",\n    html: '<iframe frameborder=\"0\" allowfullscreen=\"true\" scrolling=\"no\" height=\"366\" style=\"width:100%;\"></iframe>',\n    height: 366,\n    width: 600\n  },\n  \"twitch-video\": {\n    regex: /https?:\\/\\/www\\.twitch\\.tv\\/(?:[^\\/\\?\\&]*\\/v|videos)\\/([0-9]*)/,\n    embedUrl: \"https://player.twitch.tv/?video=v<%= remote_id %>\",\n    html: '<iframe frameborder=\"0\" allowfullscreen=\"true\" scrolling=\"no\" height=\"366\" style=\"width:100%;\"></iframe>',\n    height: 366,\n    width: 600\n  },\n  \"yandex-music-album\": {\n    regex: /https?:\\/\\/music\\.yandex\\.ru\\/album\\/([0-9]*)\\/?$/,\n    embedUrl: \"https://music.yandex.ru/iframe/#album/<%= remote_id %>/\",\n    html: '<iframe frameborder=\"0\" style=\"border:none;width:540px;height:400px;\" style=\"width:100%;\" height=\"400\"></iframe>',\n    height: 400,\n    width: 540\n  },\n  \"yandex-music-track\": {\n    regex: /https?:\\/\\/music\\.yandex\\.ru\\/album\\/([0-9]*)\\/track\\/([0-9]*)/,\n    embedUrl: \"https://music.yandex.ru/iframe/#track/<%= remote_id %>/\",\n    html: '<iframe frameborder=\"0\" style=\"border:none;width:540px;height:100px;\" style=\"width:100%;\" height=\"100\"></iframe>',\n    height: 100,\n    width: 540,\n    serviceId: function serviceId(serviceIds) {\n      return serviceIds.join(\"/\");\n    }\n  },\n  \"yandex-music-playlist\": {\n    regex: /https?:\\/\\/music\\.yandex\\.ru\\/users\\/([^\\/\\?\\&]*)\\/playlists\\/([0-9]*)/,\n    embedUrl: \"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/\",\n    html: '<iframe frameborder=\"0\" style=\"border:none;width:540px;height:400px;\" width=\"540\" height=\"400\"></iframe>',\n    height: 400,\n    width: 540,\n    serviceId: function serviceId(serviceIds) {\n      return serviceIds.join(\"/\");\n    }\n  },\n  codepen: {\n    regex: /https?:\\/\\/codepen\\.io\\/([^\\/\\?\\&]*)\\/pen\\/([^\\/\\?\\&]*)/,\n    embedUrl: \"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2\",\n    html: \"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>\",\n    height: 300,\n    width: 600,\n    serviceId: function serviceId(serviceIds) {\n      return serviceIds.join(\"/embed/\");\n    }\n  },\n  instagram: {\n    regex: /https?:\\/\\/www\\.instagram\\.com\\/p\\/([^\\/\\?\\&]+)\\/?/,\n    embedUrl: \"https://www.instagram.com/p/<%= remote_id %>/embed\",\n    html: '<iframe width=\"400\" height=\"505\" style=\"margin: 0 auto;\" frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>',\n    height: 505,\n    width: 400\n  },\n  twitter: {\n    regex: /^https?:\\/\\/twitter\\.com\\/(?:#!\\/)?(\\w+)\\/status(?:es)?\\/(\\d+)(?:\\/.*)?$/,\n    embedUrl: \"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>\",\n    html: '<iframe width=\"600\" height=\"600\" style=\"margin: 0 auto;\" frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>',\n    height: 300,\n    width: 600,\n    serviceId: function serviceId(serviceIds) {\n      return serviceIds.join(\"/status/\");\n    }\n  },\n  pinterest: {\n    regex: /https?:\\/\\/([^\\/\\?\\&]*).pinterest.com\\/pin\\/([^\\/\\?\\&]*)\\/?$/,\n    embedUrl: \"https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>\",\n    html: \"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>\",\n    serviceId: function serviceId(serviceIds) {\n      return serviceIds[1];\n    }\n  },\n  facebook: {\n    regex: /https?:\\/\\/www.facebook.com\\/([^\\/\\?\\&]*)\\/(.*)/,\n    embedUrl: \"https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500\",\n    html: \"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>\",\n    serviceId: function serviceId(serviceIds) {\n      return serviceIds.join(\"/\");\n    }\n  },\n  aparat: {\n    regex: /(?:http[s]?:\\/\\/)?(?:www.)?aparat\\.com\\/v\\/([^\\/\\?\\&]+)\\/?/,\n    embedUrl: \"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame\",\n    html: '<iframe width=\"600\" height=\"300\" style=\"margin: 0 auto;\" frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>',\n    height: 300,\n    width: 600\n  },\n  loom: {\n    regex: /https?:\\/\\/(?:www.)?loom\\.com\\/share\\/([^\\/\\?\\&]+)(?:\\?t=\\d+)?/,\n    embedUrl: \"https://www.loom.com/embed/<%= remote_id %>\",\n    html: \"<iframe width='600' height='300' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\",\n    height: 300,\n    width: 600\n  }\n});\n\n//# sourceURL=webpack://Embed/./src/services.js?");

/***/ })

/******/ })["default"];
});