module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FilterCategory/FilterCategory.js":
/*!*****************************************************!*\
  !*** ./components/FilterCategory/FilterCategory.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterItem_FilterItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterItem/FilterItem */ "./components/FilterItem/FilterItem.js");
/* harmony import */ var _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterCategory.module.css */ "./components/FilterCategory/FilterCategory.module.css");
/* harmony import */ var _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\FilterCategory\\FilterCategory.js";




const FilterCategory = props => {
  const onFilterClick = value => {
    props.onFilterApply(props.filerType, value);
  };

  const filterItems = props.filterValues.map(filter => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FilterItem_FilterItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: filter,
    isActive: filter === props.activeItem,
    onClick: onFilterClick
  }, filter, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterCategory,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterType,
      children: props.filterDisplayName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterValues,
      children: filterItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FilterCategory);

/***/ }),

/***/ "./components/FilterCategory/FilterCategory.module.css":
/*!*************************************************************!*\
  !*** ./components/FilterCategory/FilterCategory.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filterCategory": "FilterCategory_filterCategory__ZAHJ-",
	"filterType": "FilterCategory_filterType__3m13N",
	"filterValues": "FilterCategory_filterValues__12_xn"
};


/***/ }),

/***/ "./components/FilterItem/FilterItem.js":
/*!*********************************************!*\
  !*** ./components/FilterItem/FilterItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterItem.module.css */ "./components/FilterItem/FilterItem.module.css");
/* harmony import */ var _FilterItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FilterItem_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\FilterItem\\FilterItem.js";


const FilterItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: _FilterItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.filterItem + (props.isActive ? ` ${_FilterItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.active}` : ""),
    onClick: () => {
      props.onClick(props.value);
    },
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (FilterItem);

/***/ }),

/***/ "./components/FilterItem/FilterItem.module.css":
/*!*****************************************************!*\
  !*** ./components/FilterItem/FilterItem.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filterItem": "FilterItem_filterItem__WMVT_",
	"active": "FilterItem_active__38zK4"
};


/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.css */ "./components/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.xspHeader,
    children: "Arshad Hussain"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer.module.css":
/*!**************************************!*\
  !*** ./components/Footer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"xspFooter": "Footer_xspFooter__2HXZO"
};


/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\Header.js";



const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.xspHeader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Xspace Program"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header.module.css":
/*!**************************************!*\
  !*** ./components/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"xspHeader": "Header_xspHeader__2CEYL"
};


/***/ }),

/***/ "./components/LaunchList/LaunchItem/DetailItem/DetailItem.js":
/*!*******************************************************************!*\
  !*** ./components/LaunchList/LaunchItem/DetailItem/DetailItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailItem.module.css */ "./components/LaunchList/LaunchItem/DetailItem/DetailItem.module.css");
/* harmony import */ var _DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\LaunchList\\LaunchItem\\DetailItem\\DetailItem.js";


const DetailItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const isValueArray = Array.isArray(props.value);
  const detailValue = isValueArray ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: _DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailValue,
    children: props.value.length ? props.value[0] : 'NA'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: _DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailValue,
    children: props.value ? props.value + "" : "NA"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.launchDetails + (isValueArray ? " type-list" : ""),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _DetailItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailLabel,
      children: [props.label, ":"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), detailValue]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (DetailItem);

/***/ }),

/***/ "./components/LaunchList/LaunchItem/DetailItem/DetailItem.module.css":
/*!***************************************************************************!*\
  !*** ./components/LaunchList/LaunchItem/DetailItem/DetailItem.module.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"launchDetails": "DetailItem_launchDetails__1peU-",
	"typeList": "DetailItem_typeList__3S1v0",
	"detailLabel": "DetailItem_detailLabel__1xd25",
	"detailValue": "DetailItem_detailValue__1rJV3"
};


/***/ }),

/***/ "./components/LaunchList/LaunchItem/FigureItem/FigureItem.js":
/*!*******************************************************************!*\
  !*** ./components/LaunchList/LaunchItem/FigureItem/FigureItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FigureItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FigureItem.module.css */ "./components/LaunchList/LaunchItem/FigureItem/FigureItem.module.css");
/* harmony import */ var _FigureItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FigureItem_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\LaunchList\\LaunchItem\\FigureItem\\FigureItem.js";


const FigureItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
    className: _FigureItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.figureItem,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.source,
      alt: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (FigureItem);

/***/ }),

/***/ "./components/LaunchList/LaunchItem/FigureItem/FigureItem.module.css":
/*!***************************************************************************!*\
  !*** ./components/LaunchList/LaunchItem/FigureItem/FigureItem.module.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"figureItem": "FigureItem_figureItem__1oygt"
};


/***/ }),

/***/ "./components/LaunchList/LaunchItem/LaunchItem.js":
/*!********************************************************!*\
  !*** ./components/LaunchList/LaunchItem/LaunchItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FigureItem_FigureItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FigureItem/FigureItem */ "./components/LaunchList/LaunchItem/FigureItem/FigureItem.js");
/* harmony import */ var _DetailItem_DetailItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailItem/DetailItem */ "./components/LaunchList/LaunchItem/DetailItem/DetailItem.js");
/* harmony import */ var _LaunchItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LaunchItem.module.css */ "./components/LaunchList/LaunchItem/LaunchItem.module.css");
/* harmony import */ var _LaunchItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LaunchItem_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\LaunchList\\LaunchItem\\LaunchItem.js";




const LaunchItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _LaunchItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.launchItem,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FigureItem_FigureItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      source: props.mission_patch_small,
      name: props.mission_name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      ref: ref,
      className: _LaunchItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.launchName,
      children: [props.mission_name, "  #", props.flight_number]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailItem_DetailItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: props.mission_id,
      label: "Mission Ids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailItem_DetailItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: props.launch_year,
      label: "Launch Year"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailItem_DetailItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: props.launch_success,
      label: "Successful Launch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailItem_DetailItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: props.landing_success,
      label: "Successful Landing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (LaunchItem);

/***/ }),

/***/ "./components/LaunchList/LaunchItem/LaunchItem.module.css":
/*!****************************************************************!*\
  !*** ./components/LaunchList/LaunchItem/LaunchItem.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"launchItem": "LaunchItem_launchItem__1IU3G",
	"launchName": "LaunchItem_launchName__1Ytdq"
};


/***/ }),

/***/ "./components/LaunchList/LaunchList.js":
/*!*********************************************!*\
  !*** ./components/LaunchList/LaunchList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LaunchItem_LaunchItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaunchItem/LaunchItem */ "./components/LaunchList/LaunchItem/LaunchItem.js");
/* harmony import */ var _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LaunchList.module.css */ "./components/LaunchList/LaunchList.module.css");
/* harmony import */ var _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LaunchList_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\LaunchList\\LaunchList.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LauchList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      slicedIndex: 100
    });
  }

  render() {
    let launchItems;

    if (this.props.launchData && this.props.launchData.length) {
      launchItems = this.props.launchData.slice(0, this.state.slicedIndex).map((data, i) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LaunchItem_LaunchItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mission_patch_small: data.links.mission_patch_small,
          mission_name: data.mission_name,
          mission_id: data.mission_id,
          launch_year: data.launch_year,
          launch_success: data.launch_success,
          landing_success: data.landing_success,
          flight_number: data.flight_number
        }, data.flight_number, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 24
        }, this);
      });
    } else {
      launchItems = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.noData,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "No data found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 58
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 27
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.launchList,
      children: launchItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LauchList);

/***/ }),

/***/ "./components/LaunchList/LaunchList.module.css":
/*!*****************************************************!*\
  !*** ./components/LaunchList/LaunchList.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"launchList": "LaunchList_launchList__2z3Vg"
};


/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.module.css */ "./components/Layout.module.css");
/* harmony import */ var _components_Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\Layout.js";


function Layout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _components_Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout.module.css":
/*!**************************************!*\
  !*** ./components/Layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__oiF2U"
};


/***/ }),

/***/ "./components/XSPFilters.js":
/*!**********************************!*\
  !*** ./components/XSPFilters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterCategory_FilterCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterCategory/FilterCategory */ "./components/FilterCategory/FilterCategory.js");
/* harmony import */ var _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XSPFilters.module.css */ "./components/XSPFilters.module.css");
/* harmony import */ var _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\XSPFilters.js";




const XSPFilters = props => {
  const filterCategories = props.filterData.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FilterCategory_FilterCategory__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filterValues: category.data,
    filerType: category.type,
    filterDisplayName: category.displayName,
    activeItem: category.activeItem,
    onFilterApply: props.onFilterApply
  }, category.type, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.xspfilters,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Filters"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), filterCategories]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (XSPFilters);

/***/ }),

/***/ "./components/XSPFilters.module.css":
/*!******************************************!*\
  !*** ./components/XSPFilters.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"xspfilters": "XSPFilters_xspfilters__3lDkB"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");


var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function HomePage({
  data,
  query
}) {
  let initialState = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array(new Date().getFullYear() - 2005).fill().map((a, i) => 2006 + i),
    activeItem: query['launch_year'] && parseInt(query['launch_year'])
  }, {
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"],
    activeItem: query['launch_success']
  }, {
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"],
    activeItem: query['land_success']
  }];
  const {
    0: filterState,
    1: setFilterState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    0: spaceXData,
    1: setSpaceXData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSpaceXData(data);
  }, [0]);

  let launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    launchData: spaceXData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 18
  }, this);

  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";

    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
      return uri + separator + key + "=" + value;
    }
  }

  function showSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.className = "show";
    setTimeout(() => {
      spinner.className = spinner.className.replace("show", "");
    }, 5000);
  }

  function hideSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.className = spinner.className.replace("show", "");
  }

  const onFilterApply = (category, value) => {
    showSpinner();
    const currentCategory = filterState.find(curCat => curCat.type === category);
    currentCategory.activeItem = value;
    let queryString = updateQueryStringParameter(location.search, category, value);
    window.history.pushState("", "", queryString);
    fetch(`https://api.spaceXdata.com/v3/launches${queryString}&limit=100`).then(response => response.json()).then(data => {
      setSpaceXData(data);
      let result = filterState.map(item => {
        if (item.type === currentCategory.type) {
          return _objectSpread(_objectSpread({}, item), currentCategory);
        }

        return item;
      });
      setFilterState(result);
      hideSpinner();
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "spinner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

async function getServerSideProps({
  query
}) {
  const queryString = __webpack_require__(/*! query-string */ "query-string");

  const res = await fetch(`https://api.spaceXdata.com/v3/launches?${queryString.stringify(query)}&limit=100`);
  const data = await res.json();
  return {
    props: {
      data,
      query
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJJdGVtL0ZpbHRlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJJdGVtL0ZpbHRlckl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaEl0ZW0vRGV0YWlsSXRlbS9EZXRhaWxJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hJdGVtL0RldGFpbEl0ZW0vRGV0YWlsSXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hJdGVtL0ZpZ3VyZUl0ZW0vRmlndXJlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoSXRlbS9GaWd1cmVJdGVtL0ZpZ3VyZUl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoSXRlbS9MYXVuY2hJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hJdGVtL0xhdW5jaEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRmlsdGVyQ2F0ZWdvcnkiLCJwcm9wcyIsIm9uRmlsdGVyQ2xpY2siLCJ2YWx1ZSIsIm9uRmlsdGVyQXBwbHkiLCJmaWxlclR5cGUiLCJmaWx0ZXJJdGVtcyIsImZpbHRlclZhbHVlcyIsIm1hcCIsImZpbHRlciIsImFjdGl2ZUl0ZW0iLCJzdHlsZXMiLCJmaWx0ZXJDYXRlZ29yeSIsImZpbHRlclR5cGUiLCJmaWx0ZXJEaXNwbGF5TmFtZSIsIkZpbHRlckl0ZW0iLCJSZWFjdCIsIm1lbW8iLCJmaWx0ZXJJdGVtIiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJvbkNsaWNrIiwiRm9vdGVyIiwieHNwSGVhZGVyIiwiSGVhZGVyIiwiRGV0YWlsSXRlbSIsImlzVmFsdWVBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImRldGFpbFZhbHVlIiwibGVuZ3RoIiwibGF1bmNoRGV0YWlscyIsImRldGFpbExhYmVsIiwibGFiZWwiLCJGaWd1cmVJdGVtIiwiZmlndXJlSXRlbSIsInNvdXJjZSIsIm5hbWUiLCJMYXVuY2hJdGVtIiwiZm9yd2FyZFJlZiIsInJlZiIsImxhdW5jaEl0ZW0iLCJtaXNzaW9uX3BhdGNoX3NtYWxsIiwibWlzc2lvbl9uYW1lIiwibGF1bmNoTmFtZSIsImZsaWdodF9udW1iZXIiLCJtaXNzaW9uX2lkIiwibGF1bmNoX3llYXIiLCJsYXVuY2hfc3VjY2VzcyIsImxhbmRpbmdfc3VjY2VzcyIsIkxhdWNoTGlzdCIsIkNvbXBvbmVudCIsInNsaWNlZEluZGV4IiwicmVuZGVyIiwibGF1bmNoSXRlbXMiLCJsYXVuY2hEYXRhIiwic2xpY2UiLCJzdGF0ZSIsImRhdGEiLCJpIiwibGlua3MiLCJub0RhdGEiLCJsYXVuY2hMaXN0IiwiTGF5b3V0IiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJYU1BGaWx0ZXJzIiwiZmlsdGVyQ2F0ZWdvcmllcyIsImZpbHRlckRhdGEiLCJjYXRlZ29yeSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsInhzcGZpbHRlcnMiLCJIb21lUGFnZSIsInF1ZXJ5IiwiaW5pdGlhbFN0YXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsbCIsImEiLCJwYXJzZUludCIsImZpbHRlclN0YXRlIiwic2V0RmlsdGVyU3RhdGUiLCJ1c2VTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXNlRWZmZWN0IiwidXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIiLCJ1cmkiLCJrZXkiLCJyZSIsIlJlZ0V4cCIsInNlcGFyYXRvciIsImluZGV4T2YiLCJtYXRjaCIsInJlcGxhY2UiLCJzaG93U3Bpbm5lciIsInNwaW5uZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NOYW1lIiwic2V0VGltZW91dCIsImhpZGVTcGlubmVyIiwiY3VycmVudENhdGVnb3J5IiwiZmluZCIsImN1ckNhdCIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiaXRlbSIsImdldFNlcnZl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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkssZUFPUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUE87QUFBQSxrQkFBUDtBQVNEOztBQUVNLGVBQWV3RCxrQkFBZixDQUFrQztBQUFDNUM7QUFBRCxDQUFsQyxFQUEyQztBQUNoRCxRQUFNZ0MsV0FBVyxHQUFHYSxtQkFBTyxDQUFDLGtDQUFELENBQTNCOztBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNUixLQUFLLENBQUUsMENBQXlDTixXQUFXLENBQUNlLFNBQVosQ0FBc0IvQyxLQUF0QixDQUE2QixZQUF4RSxDQUF2QjtBQUNBLFFBQU1oQixJQUFJLEdBQUcsTUFBTThELEdBQUcsQ0FBQ0wsSUFBSixFQUFuQjtBQUNBLFNBQU87QUFDTGxILFNBQUssRUFBRTtBQUNMeUQsVUFESztBQUVMZ0I7QUFGSztBQURGLEdBQVA7QUFNRDtBQUVjRCx1RUFBZixFOzs7Ozs7Ozs7OztBQy9HQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckl0ZW0gZnJvbSAnLi4vRmlsdGVySXRlbS9GaWx0ZXJJdGVtJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GaWx0ZXJDYXRlZ29yeS5tb2R1bGUuY3NzJztcblxuY29uc3QgRmlsdGVyQ2F0ZWdvcnkgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBvbkZpbHRlckNsaWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHByb3BzLm9uRmlsdGVyQXBwbHkocHJvcHMuZmlsZXJUeXBlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVySXRlbXMgPSBwcm9wcy5maWx0ZXJWYWx1ZXMubWFwKChmaWx0ZXIpID0+XG4gICAgICAgIDxGaWx0ZXJJdGVtXG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVyfVxuICAgICAgICAgICAga2V5PXtmaWx0ZXJ9XG4gICAgICAgICAgICBpc0FjdGl2ZT17ZmlsdGVyID09PSBwcm9wcy5hY3RpdmVJdGVtfVxuICAgICAgICAgICAgb25DbGljaz17b25GaWx0ZXJDbGlja30gLz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJDYXRlZ29yeX0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVHlwZX0+e3Byb3BzLmZpbHRlckRpc3BsYXlOYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclZhbHVlc30+XG4gICAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDYXRlZ29yeTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaWx0ZXJDYXRlZ29yeVwiOiBcIkZpbHRlckNhdGVnb3J5X2ZpbHRlckNhdGVnb3J5X19aQUhKLVwiLFxuXHRcImZpbHRlclR5cGVcIjogXCJGaWx0ZXJDYXRlZ29yeV9maWx0ZXJUeXBlX18zbTEzTlwiLFxuXHRcImZpbHRlclZhbHVlc1wiOiBcIkZpbHRlckNhdGVnb3J5X2ZpbHRlclZhbHVlc19fMTJfeG5cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRmlsdGVySXRlbS5tb2R1bGUuY3NzJztcblxuY29uc3QgRmlsdGVySXRlbSA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJdGVtICsgKHByb3BzLmlzQWN0aXZlID8gYCAke3N0eWxlcy5hY3RpdmV9YCA6IFwiXCIpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBwcm9wcy5vbkNsaWNrKHByb3BzLnZhbHVlKSB9fT5cbiAgICAgICAgICAgIHtwcm9wcy52YWx1ZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJJdGVtOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpbHRlckl0ZW1cIjogXCJGaWx0ZXJJdGVtX2ZpbHRlckl0ZW1fX1dNVlRfXCIsXG5cdFwiYWN0aXZlXCI6IFwiRmlsdGVySXRlbV9hY3RpdmVfXzM4eks0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy54c3BIZWFkZXJ9PlxyXG4gICAgICAgICAgICBBcnNoYWQgSHVzc2FpblxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInhzcEZvb3RlclwiOiBcIkZvb3Rlcl94c3BGb290ZXJfXzJIWFpPXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy54c3BIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8aDE+WHNwYWNlIFByb2dyYW08L2gxPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInhzcEhlYWRlclwiOiBcIkhlYWRlcl94c3BIZWFkZXJfXzJDRVlMXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RldGFpbEl0ZW0ubW9kdWxlLmNzcyc7XG5cblxuY29uc3QgRGV0YWlsSXRlbSA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBpc1ZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BzLnZhbHVlKTtcbiAgICBjb25zdCBkZXRhaWxWYWx1ZSA9IGlzVmFsdWVBcnJheSA/XG4gICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxWYWx1ZX0+XG4gICAgICAgICAgICB7cHJvcHMudmFsdWUubGVuZ3RoID8gcHJvcHMudmFsdWVbMF0gOiAnTkEnfVxuICAgICAgICA8L3A+XG4gICAgICAgIDogPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsVmFsdWV9Pntwcm9wcy52YWx1ZSA/IHByb3BzLnZhbHVlICsgXCJcIiA6IFwiTkFcIn08L3A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhdW5jaERldGFpbHMgKyAoaXNWYWx1ZUFycmF5ID8gXCIgdHlwZS1saXN0XCIgOiBcIlwiKX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxMYWJlbH0+e3Byb3BzLmxhYmVsfTo8L3A+XG4gICAgICAgICAgICB7ZGV0YWlsVmFsdWV9IFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbEl0ZW07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF1bmNoRGV0YWlsc1wiOiBcIkRldGFpbEl0ZW1fbGF1bmNoRGV0YWlsc19fMXBlVS1cIixcblx0XCJ0eXBlTGlzdFwiOiBcIkRldGFpbEl0ZW1fdHlwZUxpc3RfXzNTMXYwXCIsXG5cdFwiZGV0YWlsTGFiZWxcIjogXCJEZXRhaWxJdGVtX2RldGFpbExhYmVsX18xeGQyNVwiLFxuXHRcImRldGFpbFZhbHVlXCI6IFwiRGV0YWlsSXRlbV9kZXRhaWxWYWx1ZV9fMXJKVjNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRmlndXJlSXRlbS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBGaWd1cmVJdGVtID0gUmVhY3QubWVtbygocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17c3R5bGVzLmZpZ3VyZUl0ZW19PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnNvdXJjZX0gYWx0PXtwcm9wcy5uYW1lfSAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ3VyZUl0ZW07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlndXJlSXRlbVwiOiBcIkZpZ3VyZUl0ZW1fZmlndXJlSXRlbV9fMW95Z3RcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlndXJlSXRlbSBmcm9tICcuL0ZpZ3VyZUl0ZW0vRmlndXJlSXRlbSc7XG5pbXBvcnQgRGV0YWlsSXRlbSBmcm9tICcuL0RldGFpbEl0ZW0vRGV0YWlsSXRlbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF1bmNoSXRlbS5tb2R1bGUuY3NzJztcblxuY29uc3QgTGF1bmNoSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF1bmNoSXRlbX0+XG4gICAgICAgICAgICA8RmlndXJlSXRlbSBzb3VyY2U9e3Byb3BzLm1pc3Npb25fcGF0Y2hfc21hbGx9IG5hbWU9e3Byb3BzLm1pc3Npb25fbmFtZX0gLz5cbiAgICAgICAgICAgIDxwIHJlZj17cmVmfSBjbGFzc05hbWU9e3N0eWxlcy5sYXVuY2hOYW1lfT57cHJvcHMubWlzc2lvbl9uYW1lfSAgI3twcm9wcy5mbGlnaHRfbnVtYmVyfTwvcD5cbiAgICAgICAgICAgIDxEZXRhaWxJdGVtIHZhbHVlPXtwcm9wcy5taXNzaW9uX2lkfSBsYWJlbD1cIk1pc3Npb24gSWRzXCIgLz5cbiAgICAgICAgICAgIDxEZXRhaWxJdGVtIHZhbHVlPXtwcm9wcy5sYXVuY2hfeWVhcn0gbGFiZWw9XCJMYXVuY2ggWWVhclwiIC8+XG4gICAgICAgICAgICA8RGV0YWlsSXRlbSB2YWx1ZT17cHJvcHMubGF1bmNoX3N1Y2Nlc3N9IGxhYmVsPVwiU3VjY2Vzc2Z1bCBMYXVuY2hcIiAvPlxuICAgICAgICAgICAgPERldGFpbEl0ZW0gdmFsdWU9e3Byb3BzLmxhbmRpbmdfc3VjY2Vzc30gbGFiZWw9XCJTdWNjZXNzZnVsIExhbmRpbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSlcblxuZXhwb3J0IGRlZmF1bHQgTGF1bmNoSXRlbTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXVuY2hJdGVtXCI6IFwiTGF1bmNoSXRlbV9sYXVuY2hJdGVtX18xSVUzR1wiLFxuXHRcImxhdW5jaE5hbWVcIjogXCJMYXVuY2hJdGVtX2xhdW5jaE5hbWVfXzFZdGRxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhdW5jaEl0ZW0gZnJvbSAnLi9MYXVuY2hJdGVtL0xhdW5jaEl0ZW0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF1bmNoTGlzdC5tb2R1bGUuY3NzJztcblxuY2xhc3MgTGF1Y2hMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzbGljZWRJbmRleDogMTAwLFxuICAgIH1cbiAgICBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhdW5jaEl0ZW1zO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXVuY2hEYXRhICYmIHRoaXMucHJvcHMubGF1bmNoRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxhdW5jaEl0ZW1zID0gdGhpcy5wcm9wcy5sYXVuY2hEYXRhLnNsaWNlKDAsIHRoaXMuc3RhdGUuc2xpY2VkSW5kZXgpLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TGF1bmNoSXRlbVxuICAgICAgICAgICAgICAgICAgICBtaXNzaW9uX3BhdGNoX3NtYWxsPXtkYXRhLmxpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npb25fbmFtZT17ZGF0YS5taXNzaW9uX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npb25faWQ9e2RhdGEubWlzc2lvbl9pZH1cbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoX3llYXI9e2RhdGEubGF1bmNoX3llYXJ9XG4gICAgICAgICAgICAgICAgICAgIGxhdW5jaF9zdWNjZXNzPXtkYXRhLmxhdW5jaF9zdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICBsYW5kaW5nX3N1Y2Nlc3M9e2RhdGEubGFuZGluZ19zdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICBmbGlnaHRfbnVtYmVyPXtkYXRhLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXVuY2hJdGVtcyA9IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9EYXRhfT48aDI+Tm8gZGF0YSBmb3VuZDwvaDI+PC9kaXY+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXVuY2hMaXN0fT5cbiAgICAgICAgICAgICAgICB7IGxhdW5jaEl0ZW1zfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXVjaExpc3Q7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF1bmNoTGlzdFwiOiBcIkxhdW5jaExpc3RfbGF1bmNoTGlzdF9fMnozVmdcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQubW9kdWxlLmNzcydcclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG4gICAgPC8+XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfY29udGFpbmVyX19vaUYyVVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRlckNhdGVnb3J5IGZyb20gJy4vRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vWFNQRmlsdGVycy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgWFNQRmlsdGVycyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyQ2F0ZWdvcmllcyA9IHByb3BzLmZpbHRlckRhdGEubWFwKGNhdGVnb3J5ID0+XHJcbiAgICAgICAgPEZpbHRlckNhdGVnb3J5XHJcbiAgICAgICAgICAgIGZpbHRlclZhbHVlcz17Y2F0ZWdvcnkuZGF0YX1cclxuICAgICAgICAgICAgZmlsZXJUeXBlPXtjYXRlZ29yeS50eXBlfVxyXG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5LnR5cGV9XHJcbiAgICAgICAgICAgIGZpbHRlckRpc3BsYXlOYW1lPXtjYXRlZ29yeS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgYWN0aXZlSXRlbT17Y2F0ZWdvcnkuYWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgb25GaWx0ZXJBcHBseT17cHJvcHMub25GaWx0ZXJBcHBseX0gLz5cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMueHNwZmlsdGVyc30+XHJcbiAgICAgICAgICAgIDxoMj5GaWx0ZXJzPC9oMj5cclxuICAgICAgICAgICAge2ZpbHRlckNhdGVnb3JpZXN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYU1BGaWx0ZXJzOyAiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ4c3BmaWx0ZXJzXCI6IFwiWFNQRmlsdGVyc194c3BmaWx0ZXJzX18zbERrQlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgWFNQRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL1hTUEZpbHRlcnMuanMnO1xyXG5pbXBvcnQgTGF1bmNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7ZGF0YSwgcXVlcnl9KSB7XHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYXVuY2hfeWVhciddICYmIHBhcnNlSW50KHF1ZXJ5WydsYXVuY2hfeWVhciddKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYXVuY2hcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhdW5jaF9zdWNjZXNzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYW5kX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhbmRpbmdcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhbmRfc3VjY2VzcyddXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKGRhdGEpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVuY2hMaXN0IGxhdW5jaERhdGE9e3NwYWNlWERhdGF9IC8+XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJpLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCQpXCIsIFwiaVwiKTtcclxuICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gXCImXCIgOiBcIj9cIjtcclxuICAgICAgaWYgKHVyaS5tYXRjaChyZSkpIHtcclxuICAgICAgICByZXR1cm4gdXJpLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVyaSArIHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93U3Bpbm5lcigpIHtcclxuICAgICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpbm5lclwiKTtcclxuICAgICAgc3Bpbm5lci5jbGFzc05hbWUgPSBcInNob3dcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc3Bpbm5lci5jbGFzc05hbWUgPSBzcGlubmVyLmNsYXNzTmFtZS5yZXBsYWNlKFwic2hvd1wiLCBcIlwiKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVNwaW5uZXIoKSB7XHJcbiAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwaW5uZXJcIik7XHJcbiAgICAgIHNwaW5uZXIuY2xhc3NOYW1lID0gc3Bpbm5lci5jbGFzc05hbWUucmVwbGFjZShcInNob3dcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25GaWx0ZXJBcHBseSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuXHJcbiAgICAgIHNob3dTcGlubmVyKClcclxuICAgICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gZmlsdGVyU3RhdGUuZmluZChjdXJDYXQgPT4gY3VyQ2F0LnR5cGUgPT09IGNhdGVnb3J5KTtcclxuICAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIGxldCBxdWVyeVN0cmluZyA9IHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKGxvY2F0aW9uLnNlYXJjaCwgY2F0ZWdvcnksIHZhbHVlKTtcclxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiXCIsIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzJHtxdWVyeVN0cmluZ30mbGltaXQ9MTAwYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXHJcbiAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFNwYWNlWERhdGEoZGF0YSlcclxuXHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gZmlsdGVyU3RhdGUubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSBjdXJyZW50Q2F0ZWdvcnkudHlwZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgLi4uY3VycmVudENhdGVnb3J5fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRGaWx0ZXJTdGF0ZShyZXN1bHQpO1xyXG4gICAgICAgICAgaGlkZVNwaW5uZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIDxkaXYgaWQ9XCJzcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeX0pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeSl9JmxpbWl0PTEwMGApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgICAgcXVlcnlcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==