/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/create.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./server/create.js":
/*!**************************!*\
  !*** ./server/create.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prerender_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prerender-node */ \"prerender-node\");\n/* harmony import */ var prerender_node__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prerender_node__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/App */ \"./src/App.tsx\");\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/server/create.js\";\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar PORT = process.env.PORT || 1111;\nvar appBuildPath =  true ? path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(fs__WEBPACK_IMPORTED_MODULE_1___default.a.realpathSync(process.cwd()), './build') : undefined; // point to the html file created by CRA's build tool\n\nvar appBuildIndex = \"\".concat(appBuildPath, \"/index.html\");\n\nvar renderer = function renderer(req, res, next) {\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(appBuildIndex, 'utf8', function (err, htmlData) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_7__[\"ServerStyleSheet\"](); // Get plain html\n\n    var context = {};\n    var html = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString(sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: context,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44\n      },\n      __self: this\n    })))); // If SSR finds a React Router Redirect component\n    // the context.url is set\n\n    if (context.url) {\n      return res.redirect(308, context.url);\n    } // Get styles from styled-componets\n\n\n    var styles = sheet.getStyleTags(); // Get metatags & title\n\n    var _Helmet$renderStatic = react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"].renderStatic(),\n        meta = _Helmet$renderStatic.meta,\n        title = _Helmet$renderStatic.title;\n\n    var normalizedHtml = htmlData.replace('</head>', \"\".concat(title).concat(meta).concat(styles, \"</head>\"));\n    normalizedHtml = normalizedHtml.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(html, \"</div>\")); // context is passed as staticContext prop\n    // to a react component to properly give\n    // the SSR a way to redirect.\n\n    if (context.status === 404) {\n      return res.status(404).send(normalizedHtml);\n    }\n\n    return res.send(normalizedHtml);\n  });\n}; // Server static assets\n\n\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(\"\".concat(appBuildPath))); // Deliberately add a delay for /content call\n\napp.use('/content', function (req, res, next) {\n  return setTimeout(next, 21000);\n}); // Use prerender.io for Dynamic Rendering\n\nif (true) {\n  prerender_node__WEBPACK_IMPORTED_MODULE_3___default.a.set('prerenderServiceUrl', 'http://localhost:3000/');\n}\n\napp.use(prerender_node__WEBPACK_IMPORTED_MODULE_3___default.a.set('prerenderToken', 'hJeivm0YSAgXlycRNH8L'));\napp.get('*', function (req, res) {\n  if (req.url === '/content') {\n    return res.json({\n      title: 'Hola dude!',\n      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'\n    });\n  }\n\n  return res.sendFile(appBuildIndex);\n});\napp.listen(PORT, function (error) {\n  if (error) {\n    return console.log(\"Something went wrong: \".concat(error));\n  }\n\n  console.log(\"Listening on port \".concat(PORT, \" ...\"));\n});\n\n//# sourceURL=webpack:///./server/create.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Link */ \"./src/components/Link.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ \"./src/context/index.ts\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\n\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/App.tsx\";\n\n\n\n\n\n\n\n\nvar PageNav = function PageNav() {\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: this\n  }, \" SEO for Single Page App - Version: \", process.env.REACT_APP_VERSION), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"Navigation\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18\n    },\n    __self: this\n  }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case1\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19\n    },\n    __self: this\n  }, \"Case 1\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case2\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20\n    },\n    __self: this\n  }, \"Case 2\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case3\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21\n    },\n    __self: this\n  }, \"Case 3\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case4\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22\n    },\n    __self: this\n  }, \"Case 4\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case5\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23\n    },\n    __self: this\n  }, \"Case 5\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case6\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24\n    },\n    __self: this\n  }, \"Case 6\"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Link__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"/case7\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25\n    },\n    __self: this\n  }, \"Case 7\")));\n};\n\nvar App = function App() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"]([]),\n      _React$useState2 = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      history = _React$useState2[0],\n      setHistory = _React$useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](PageNav, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_context__WEBPACK_IMPORTED_MODULE_6__[\"HistoryContext\"].Provider, {\n    value: [history, setHistory],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Home\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case1\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case1\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case2\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case2\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case3\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case3\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case4\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case4\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case5\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case5\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case6\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case6\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/case7\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"Case7\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    path: \"/not-found\",\n    component: _routes__WEBPACK_IMPORTED_MODULE_7__[\"NotFound\"],\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n        to: \"/not-found\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48\n        },\n        __self: this\n      });\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48\n    },\n    __self: this\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/assets/photo-hd-1mb.jpg":
/*!*************************************!*\
  !*** ./src/assets/photo-hd-1mb.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/media/photo-hd-1mb.2c658980.jpg\";\n\n//# sourceURL=webpack:///./src/assets/photo-hd-1mb.jpg?");

/***/ }),

/***/ "./src/assets/photo-hd-2mb-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/photo-hd-2mb-2.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/media/photo-hd-2mb-2.3a86f994.jpg\";\n\n//# sourceURL=webpack:///./src/assets/photo-hd-2mb-2.jpg?");

/***/ }),

/***/ "./src/assets/photo-hd-2mb.jpg":
/*!*************************************!*\
  !*** ./src/assets/photo-hd-2mb.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/media/photo-hd-2mb.ba9bb1f0.jpg\";\n\n//# sourceURL=webpack:///./src/assets/photo-hd-2mb.jpg?");

/***/ }),

/***/ "./src/assets/photo-hd-3mb.jpg":
/*!*************************************!*\
  !*** ./src/assets/photo-hd-3mb.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/media/photo-hd-3mb.b50d1c94.jpg\";\n\n//# sourceURL=webpack:///./src/assets/photo-hd-3mb.jpg?");

/***/ }),

/***/ "./src/components/Content.tsx":
/*!************************************!*\
  !*** ./src/components/Content.tsx ***!
  \************************************/
/*! exports provided: StyledContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledContent\", function() { return StyledContent; });\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Metatags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Metatags */ \"./src/components/Metatags.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ \"./src/context/index.ts\");\n\n\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/components/Content.tsx\";\n\n\n\n\n\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section.withConfig({\n  displayName: \"Content__Section\",\n  componentId: \"cvzpww-0\"\n})([\"&&{background:\", \";font-size:\", \";padding:15px 10px;}\"], _theme__WEBPACK_IMPORTED_MODULE_5__[\"Colors\"].grey, _theme__WEBPACK_IMPORTED_MODULE_5__[\"Fonts\"].medium);\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({\n  displayName: \"Content__List\",\n  componentId: \"cvzpww-1\"\n})([\"&&{margin:0;padding:0 0 0 20px;list-style-type:square;}\"]);\n\nvar Content = function Content(_ref) {\n  var title = _ref.title,\n      pathname = _ref.pathname,\n      children = _ref.children,\n      className = _ref.className;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"](_context__WEBPACK_IMPORTED_MODULE_6__[\"HistoryContext\"]),\n      _React$useContext2 = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useContext, 2),\n      history = _React$useContext2[0],\n      setHistory = _React$useContext2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    setHistory(function (history) {\n      return [].concat(Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(history), [pathname]);\n    });\n  }, [pathname]);\n  var now = new Date().toUTCString();\n  return react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"main\", {\n    className: className,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_Metatags__WEBPACK_IMPORTED_MODULE_4__[\"Metatags\"], {\n    title: title,\n    description: \"T:\".concat(now, \" || R:\").concat(pathname, \" || H:\").concat(history.join(',')),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](Section, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](List, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36\n    },\n    __self: this\n  }, \"Title: \".concat(title)), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37\n    },\n    __self: this\n  }, \"Time: \".concat(now)), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38\n    },\n    __self: this\n  }, \"Route: \".concat(pathname)), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39\n    },\n    __self: this\n  }, \"History: \".concat(history.join(','))))), children);\n};\n\nvar StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Content).withConfig({\n  displayName: \"Content__StyledContent\",\n  componentId: \"cvzpww-2\"\n})([\"&&{padding:0 10px;margin:25px 0;text-align:left;}\"]);\n\n\n//# sourceURL=webpack:///./src/components/Content.tsx?");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n\n\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({\n  displayName: \"Header\",\n  componentId: \"sc-1s24obn-0\"\n})([\"&&{font-weight:700;font-size:\", \";color:\", \";background-color:\", \";padding:15px 10px;display:flex;justify-content:flex-start;}\"], _theme__WEBPACK_IMPORTED_MODULE_1__[\"Fonts\"].medium, _theme__WEBPACK_IMPORTED_MODULE_1__[\"Colors\"].white, _theme__WEBPACK_IMPORTED_MODULE_1__[\"Colors\"].blue);\n\n\n//# sourceURL=webpack:///./src/components/Header.tsx?");

/***/ }),

/***/ "./src/components/Link.tsx":
/*!*********************************!*\
  !*** ./src/components/Link.tsx ***!
  \*********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n\n\n\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"]).withConfig({\n  displayName: \"Link\",\n  componentId: \"sc-10jw3hz-0\"\n})([\"&&{text-decoration:none;cursor:pointer;color:\", \";padding:15px 20px;font-weight:400;:hover{color:\", \";background-color:\", \";}}\"], _theme__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].black, _theme__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].white, _theme__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].blue);\n\n\n//# sourceURL=webpack:///./src/components/Link.tsx?");

/***/ }),

/***/ "./src/components/Loader.tsx":
/*!***********************************!*\
  !*** ./src/components/Loader.tsx ***!
  \***********************************/
/*! exports provided: StyledLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledLoader\", function() { return StyledLoader; });\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/components/Loader.tsx\";\n\n\n\n\nvar Loader = function Loader(_ref) {\n  var className = _ref.className;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](1),\n      _React$useState2 = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      time = _React$useState2[0],\n      setTime = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    var timer = setInterval(function () {\n      setTime(function (time) {\n        return time + 1;\n      });\n    }, 1000);\n    return function () {\n      return clearInterval(timer);\n    };\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: className,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"span\", {\n    className: \"timer\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19\n    },\n    __self: this\n  }, \" Loading \", time, \"s \"));\n};\n\nvar StyledLoader = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Loader).withConfig({\n  displayName: \"Loader__StyledLoader\",\n  componentId: \"uq8dhn-0\"\n})([\"&&{display:flex;justify-content:center;align-items:center;position:fixed;height:100%;width:100%;top:0;left:0;background:\", \";.timer{font-size:\", \";color:\", \";}}\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"Colors\"].blue, _theme__WEBPACK_IMPORTED_MODULE_3__[\"Fonts\"].xxlarge, _theme__WEBPACK_IMPORTED_MODULE_3__[\"Colors\"].white);\n\n\n//# sourceURL=webpack:///./src/components/Loader.tsx?");

/***/ }),

/***/ "./src/components/Metatags.tsx":
/*!*************************************!*\
  !*** ./src/components/Metatags.tsx ***!
  \*************************************/
/*! exports provided: Metatags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Metatags\", function() { return Metatags; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/components/Metatags.tsx\";\n\n\nvar Metatags = react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"](function (_ref) {\n  var title = _ref.title,\n      description = _ref.description;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"title\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }, \" \", title, \" - v\", process.env.REACT_APP_VERSION, \" \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    name: \"description\",\n    content: description,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: this\n  }));\n});\n\n\n//# sourceURL=webpack:///./src/components/Metatags.tsx?");

/***/ }),

/***/ "./src/components/Navigation.tsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.tsx ***!
  \***************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n\n\nvar Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"Navigation\",\n  componentId: \"xhq6fb-0\"\n})([\"&&{padding:0;margin:0;display:flex;justify-content:flex-start;font-size:\", \";border-bottom:3px solid \", \";}\"], _theme__WEBPACK_IMPORTED_MODULE_1__[\"Fonts\"].medium, _theme__WEBPACK_IMPORTED_MODULE_1__[\"Colors\"].blue);\n\n\n//# sourceURL=webpack:///./src/components/Navigation.tsx?");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\nvar API_URL = '/content';\n\n//# sourceURL=webpack:///./src/constants/index.ts?");

/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/*! exports provided: HistoryContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HistoryContext\", function() { return HistoryContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar HistoryContext = react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"](null);\n\n\n//# sourceURL=webpack:///./src/context/index.ts?");

/***/ }),

/***/ "./src/routes/Case1.tsx":
/*!******************************!*\
  !*** ./src/routes/Case1.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n\n\n\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case1.tsx\";\n\n\n\n\n\nvar getContent =\n/*#__PURE__*/\nfunction () {\n  var _ref = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  /*#__PURE__*/\n  _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var response, data;\n    return _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(_constants__WEBPACK_IMPORTED_MODULE_6__[\"API_URL\"], {\n              method: 'GET'\n            });\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getContent() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar Case1 = function Case1(_ref2) {\n  var location = _ref2.location;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"](null),\n      _React$useState2 = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      content = _React$useState2[0],\n      setContent = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"](function () {\n    getContent().then(function (data) {\n      return setContent(data);\n    });\n  }, []);\n\n  if (!content) {\n    return react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"StyledLoader\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23\n      },\n      __self: this\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_4__[\"StyledContent\"], {\n    title: 'Case 1 - Ajax Call - Prerender.io',\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31\n    },\n    __self: this\n  }, \"Perform a delayed Ajax call with a loader\"), react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](\"h4\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32\n    },\n    __self: this\n  }, \" \", content.title, \" \"), react__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"](\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33\n    },\n    __self: this\n  }, \" \", content.body, \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Case1);\n\n//# sourceURL=webpack:///./src/routes/Case1.tsx?");

/***/ }),

/***/ "./src/routes/Case2.tsx":
/*!******************************!*\
  !*** ./src/routes/Case2.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader */ \"./src/components/Loader.tsx\");\n\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case2.tsx\";\n\n\n\nvar TIMEOYT_DELAY = 10000; // function HOLA() {\n//   for (let index = 0; index < 12000; index++) {\n//     console.log(' index -> ', index)\n//   }\n// }\n\nvar Case2 = function Case2(_ref) {\n  var location = _ref.location;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"]({\n    heading: '',\n    content: ''\n  }),\n      _React$useState2 = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      data = _React$useState2[0],\n      setData = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](function () {\n    setTimeout(function () {\n      return setData({\n        heading: \"Perform a setTimeout delay after \".concat(TIMEOYT_DELAY / 1000, \"s\"),\n        content: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book\"\n      });\n    }, TIMEOYT_DELAY);\n  }, []);\n\n  function HOLA() {\n    for (var index = 0; index < 20000; index++) {\n      console.log(' index -> ', index);\n    }\n  }\n\n  HOLA();\n\n  if (!data.heading || !data.content) {\n    return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Loader__WEBPACK_IMPORTED_MODULE_3__[\"StyledLoader\"], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35\n      },\n      __self: this\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_2__[\"StyledContent\"], {\n    title: \"Case 2 - setTimeout delay at \".concat(TIMEOYT_DELAY / 1000, \"s - Prerender.io\"),\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43\n    },\n    __self: this\n  }, \" \", data.heading, \" \"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44\n    },\n    __self: this\n  }, \" \", data.content, \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Case2);\n\n//# sourceURL=webpack:///./src/routes/Case2.tsx?");

/***/ }),

/***/ "./src/routes/Case3.tsx":
/*!******************************!*\
  !*** ./src/routes/Case3.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case3.tsx\";\n\n\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({\n  displayName: \"Case3__Button\",\n  componentId: \"sc-1049not-0\"\n})([\"&&{background-color:\", \";color:\", \";font-size:\", \";max-width:250px;padding:20px;border:none;cursor:pointer;transition:all .2s linear;border:2px solid \", \";:hover{background-color:\", \";border-color:\", \";color:\", \";}}\"], _theme__WEBPACK_IMPORTED_MODULE_4__[\"Colors\"].blue, _theme__WEBPACK_IMPORTED_MODULE_4__[\"Colors\"].white, _theme__WEBPACK_IMPORTED_MODULE_4__[\"Fonts\"].large, _theme__WEBPACK_IMPORTED_MODULE_4__[\"Colors\"].white, _theme__WEBPACK_IMPORTED_MODULE_4__[\"Colors\"].white, _theme__WEBPACK_IMPORTED_MODULE_4__[\"Colors\"].blue, _theme__WEBPACK_IMPORTED_MODULE_4__[\"Colors\"].blue);\n\nvar Home = function Home(_ref) {\n  var location = _ref.location;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](0),\n      _React$useState2 = Object(_Users_vchouliaras_Desktop_my_stuff_seo_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      counter = _React$useState2[0],\n      setCounter = _React$useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_3__[\"StyledContent\"], {\n    title: \"Case3 - Adding a CTA - Clicked \".concat(counter, \" times - Prerender.io\"),\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34\n    },\n    __self: this\n  }, \" \", \"Adds a CTA to check for Bot's interactions - Clicked \".concat(counter, \" times\"), \" \"), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n    onClick: function onClick() {\n      return setCounter(counter + 1);\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35\n    },\n    __self: this\n  }, \" Press me Bot! \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/routes/Case3.tsx?");

/***/ }),

/***/ "./src/routes/Case4.tsx":
/*!******************************!*\
  !*** ./src/routes/Case4.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case4.tsx\";\n\n\n\n\nvar Case4 = function Case4() {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    name: \"prerender-status-code\",\n    content: \"301\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    name: \"prerender-header\",\n    content: \"Location: /\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: this\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_1__[\"StyledContent\"], {\n    title: \"Case4 - Prerender.io - This page will be redirected to Home\",\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20\n    },\n    __self: this\n  }, \" \", 'This page will be redirected to Home page with a proper 301 code', \" \")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Case4);\n\n//# sourceURL=webpack:///./src/routes/Case4.tsx?");

/***/ }),

/***/ "./src/routes/Case5.tsx":
/*!******************************!*\
  !*** ./src/routes/Case5.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n/* harmony import */ var _assets_photo_hd_1mb_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/photo-hd-1mb.jpg */ \"./src/assets/photo-hd-1mb.jpg\");\n/* harmony import */ var _assets_photo_hd_1mb_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_photo_hd_1mb_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_photo_hd_2mb_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/photo-hd-2mb.jpg */ \"./src/assets/photo-hd-2mb.jpg\");\n/* harmony import */ var _assets_photo_hd_2mb_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_photo_hd_2mb_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_photo_hd_3mb_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/photo-hd-3mb.jpg */ \"./src/assets/photo-hd-3mb.jpg\");\n/* harmony import */ var _assets_photo_hd_3mb_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_photo_hd_3mb_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_photo_hd_2mb_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/photo-hd-2mb-2.jpg */ \"./src/assets/photo-hd-2mb-2.jpg\");\n/* harmony import */ var _assets_photo_hd_2mb_2_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_photo_hd_2mb_2_jpg__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case5.tsx\";\n\n\n\n // @ts-ignore\n\n // @ts-ignore\n\n // @ts-ignore\n\n // @ts-ignore\n\n\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({\n  displayName: \"Case5__Image\",\n  componentId: \"uafr0c-0\"\n})([\"&&{max-width:100%;padding:10px 0;border:1px solod \", \";}\"], _theme__WEBPACK_IMPORTED_MODULE_3__[\"Colors\"].grey);\n\nvar Case5 = function Case5(_ref) {\n  var location = _ref.location;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_2__[\"StyledContent\"], {\n    title: \"Case5 - Heavy HTML images - Prerender.io\",\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30\n    },\n    __self: this\n  }, \" \", 'Contains heavy images ~6MB in total', \" \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31\n    },\n    __self: this\n  }, \" \", 'This html page contains heavy images to check for bot timeouts', \" \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Image, {\n    src: _assets_photo_hd_1mb_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"Heavy photo\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Image, {\n    src: _assets_photo_hd_2mb_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"Heavy photo\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Image, {\n    src: _assets_photo_hd_3mb_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,\n    alt: \"Heavy photo\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34\n    },\n    __self: this\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Image, {\n    src: _assets_photo_hd_2mb_2_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,\n    alt: \"Heavy photo\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35\n    },\n    __self: this\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Case5);\n\n//# sourceURL=webpack:///./src/routes/Case5.tsx?");

/***/ }),

/***/ "./src/routes/Case6.tsx":
/*!******************************!*\
  !*** ./src/routes/Case6.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case6.tsx\";\n\n\n\nvar Case6 = function Case6(_ref) {\n  var location = _ref.location;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_1__[\"StyledContent\"], {\n    title: \"Case6 - Dummy page not in sitemap.xml - Prerender.io\",\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13\n    },\n    __self: this\n  }, \" \", 'Dummy page not in sitemap.xml', \" \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14\n    },\n    __self: this\n  }, \" \", 'This is a dummy page not in the sitemap.xml, checking whether will be indexed like the others', \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Case6);\n\n//# sourceURL=webpack:///./src/routes/Case6.tsx?");

/***/ }),

/***/ "./src/routes/Case7.tsx":
/*!******************************!*\
  !*** ./src/routes/Case7.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Case7.tsx\";\n\n\n\nvar Case7 = function Case7(_ref) {\n  var location = _ref.location;\n  var i = 0;\n\n  while (i < 14000) {\n    console.log(' i -> ', i);\n    i++;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_1__[\"StyledContent\"], {\n    title: \"Case7 - Blocking main JS thread - Prerender.io\",\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19\n    },\n    __self: this\n  }, \" \", 'Blocking main JS thread', \" \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20\n    },\n    __self: this\n  }, \" \", 'This page contains code to block the main thread for an amount of time. Our ultimate goal is the measure user centric metrics like FMP, FCP, TTI', \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Case7);\n\n//# sourceURL=webpack:///./src/routes/Case7.tsx?");

/***/ }),

/***/ "./src/routes/Home.tsx":
/*!*****************************!*\
  !*** ./src/routes/Home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/Home.tsx\";\n\n\n\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({\n  displayName: \"Home__List\",\n  componentId: \"sc-2ddsf2-0\"\n})([\"&&{margin:0;padding:0 0 0 20px;list-style-type:square;}\"]);\n\nvar Home = function Home(_ref) {\n  var location = _ref.location;\n  var referrer = ''; // if (location.state && location.state.referrer) {\n  //   referrer = `- Referrer: ${location.state.referrer}`\n  // }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_2__[\"StyledContent\"], {\n    title: \"Home - Demonstrating cases for SEO on SPA \".concat(referrer, \" - Prerender.io\"),\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25\n    },\n    __self: this\n  }, \" \", 'Demonstrating cases for SEO on SPA', \" \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](List, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27\n    },\n    __self: this\n  }, \" Case1 - Delayed Ajax Call with loader - Prerender.io \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28\n    },\n    __self: this\n  }, \" Case2 - setTimeout with loader - Prerender.io \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29\n    },\n    __self: this\n  }, \" Case3 - CTA link - Prerender.io \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30\n    },\n    __self: this\n  }, \" Case4 - 301 Redirect to Home page - Prerender.io \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31\n    },\n    __self: this\n  }, \" Case5 - Heavy HTML with images - Prerender.io \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32\n    },\n    __self: this\n  }, \" Case6 - Dummy page not in sitemap.xml - Prerender.io \"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33\n    },\n    __self: this\n  }, \" Case7 - Blocking main JS thread - Prerender.io \")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/routes/Home.tsx?");

/***/ }),

/***/ "./src/routes/NotFound.tsx":
/*!*********************************!*\
  !*** ./src/routes/NotFound.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ \"./src/components/Content.tsx\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/vchouliaras/Desktop/my_stuff/seo-app/src/routes/NotFound.tsx\";\n\n\n\n\nvar NotFound = function NotFound(_ref) {\n  var location = _ref.location;\n  // Use bellow for SSR with React Router\n  // if (staticContext) {\n  //   staticContext.status = 404\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    name: \"prerender-status-code\",\n    content: \"404\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17\n    },\n    __self: this\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Content__WEBPACK_IMPORTED_MODULE_1__[\"StyledContent\"], {\n    title: \"Not Found\",\n    pathname: location.pathname,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23\n    },\n    __self: this\n  }, \" \", 'NOT FOUND 404 PAGE', \" \")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/routes/NotFound.tsx?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! exports provided: Home, Case1, Case2, Case3, Case4, Case5, Case6, Case7, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/routes/Home.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Case1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Case1 */ \"./src/routes/Case1.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case1\", function() { return _Case1__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Case2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Case2 */ \"./src/routes/Case2.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case2\", function() { return _Case2__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Case3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Case3 */ \"./src/routes/Case3.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case3\", function() { return _Case3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Case4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Case4 */ \"./src/routes/Case4.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case4\", function() { return _Case4__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _Case5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Case5 */ \"./src/routes/Case5.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case5\", function() { return _Case5__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _Case6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Case6 */ \"./src/routes/Case6.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case6\", function() { return _Case6__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _Case7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Case7 */ \"./src/routes/Case7.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Case7\", function() { return _Case7__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NotFound */ \"./src/routes/NotFound.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NotFound\", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/*! exports provided: Colors, Fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return Colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fonts\", function() { return Fonts; });\nvar Colors = {\n  'blue': '#3e82f7',\n  'white': '#ffffff',\n  'black': '#000000',\n  'grey': '#eeeeee'\n};\nvar Fonts = {\n  'normal': '16px',\n  'medium': '17px',\n  'large': '20px',\n  'xlarge': '25px',\n  'xxlarge': '35px'\n};\n\n\n//# sourceURL=webpack:///./src/theme/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prerender-node":
/*!*********************************!*\
  !*** external "prerender-node" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prerender-node\");\n\n//# sourceURL=webpack:///external_%22prerender-node%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });