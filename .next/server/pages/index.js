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
    lineNumber: 12,
    columnNumber: 9
  }, undefined));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterCategory,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterType,
      children: props.filterDisplayName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _FilterCategory_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.filterValues,
      children: filterItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
    className: _FilterItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.filterItem + (props.isActive ? " active" : ""),
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LauchList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      slicedIndex: 12
    });

    _defineProperty(this, "lastElement", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(null));

    _defineProperty(this, "observer", null);
  }

  componentDidMount() {
    if (this.state.slicedIndex < this.props.launchData.length) {
      this.createIntersectionObserver();
    }
  }

  componentDidUpdate() {
    if (this.state.slicedIndex < this.props.launchData.length && !this.observer) {
      this.createIntersectionObserver();
    } else if (this.state.slicedIndex >= this.props.dataLimit && this.props.launchData.length === this.props.dataLimit) {
      this.props.fetchMoreData();
    }
  }

  componentWillUnmount() {
    this.observer && this.observer.disconnect();
  }

  createIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const {
          isIntersecting
        } = entry;

        if (isIntersecting) {
          if (this.state.slicedIndex < this.props.launchData.length) {
            this.lastElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(null);
            this.observer = this.observer.disconnect();
            this.setState(prevState => {
              return {
                slicedIndex: prevState.slicedIndex + 12
              };
            });
          }
        }
      });
    }, {
      rootMargin: '0px 0px 1000px 0px'
    });
    this.observer.observe(this.lastElement.current);
  }

  render() {
    let launchItems;

    if (this.props.launchData && this.props.launchData.length) {
      launchItems = this.props.launchData.slice(0, this.state.slicedIndex).map((data, i) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LaunchItem_LaunchItem__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
          mission_patch_small: data.links.mission_patch_small,
          mission_name: data.mission_name,
          mission_id: data.mission_id,
          launch_year: data.launch_year,
          launch_success: data.launch_success,
          landing_success: data.landing_success,
          flight_number: data.flight_number
        }, i === this.state.slicedIndex - 1 && {
          ref: this.lastElement
        }), data.flight_number, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
          lineNumber: 71,
          columnNumber: 58
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.launchList,
      children: launchItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
    lineNumber: 8,
    columnNumber: 9
  }, undefined));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.xspfilters,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Filters"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), filterCategories]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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

/***/ "./helper/urlManipulation.js":
/*!***********************************!*\
  !*** ./helper/urlManipulation.js ***!
  \***********************************/
/*! exports provided: getParam, setParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParam", function() { return getParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParam", function() { return setParam; });
function getParam(location) {
  const searchParams = new URLSearchParams(location);
  return {
    launch_year: searchParams.get('launch_year') || "",
    launch_success: searchParams.get('launch_success') || "",
    land_success: searchParams.get('land_success') || ""
  };
}
function setParam({
  launch_year,
  launch_success,
  land_success
}) {
  const searchParams = new URLSearchParams();
  launch_year && searchParams.set("launch_year", launch_year);
  launch_success && searchParams.set("launch_success", launch_success);
  land_success && searchParams.set("land_success", land_success);
  return searchParams.toString();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");
/* harmony import */ var _helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/urlManipulation.js */ "./helper/urlManipulation.js");


var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js";









function HomePage({
  posts
}) {
  let initialState = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array(new Date().getFullYear() - 2005).fill().map((a, i) => 2006 + i)
  }, {
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"]
  }, {
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"]
  }];
  const {
    0: filterState,
    1: setFilterState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    0: spaceXData,
    1: setSpaceXData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: urlQuery,
    1: setUrlQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: initialUrl,
    1: setInitialUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSpaceXData(posts);
  }, [0]);

  let launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    launchData: spaceXData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 18
  }, this);

  const onFilterApply = (category, value) => {
    const initialQueryString = __webpack_require__(/*! query-string */ "query-string");

    const currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_8__["getParam"])(initialQueryString);
    const currentCategory = {};

    if (currentCategory.activeItem && currentCategory.activeItem === value) {
      currentQueries[category] = null;
      currentCategory.activeItem = null;
    } else {
      currentCategory.activeItem = value;
      currentQueries[category] = value;
    }

    const queryString = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_8__["setParam"])(currentQueries);
    const history = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();
    history.push("?" + queryString);
    setUrlQuery(queryString);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100&${urlQuery}`).then(response => response.json()).then(data => setSpaceXData(data));
  }, [urlQuery]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setInitialUrl(window.location.href);
  }, [0]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

async function getStaticProps() {
  const res = await fetch('https://api.spaceXdata.com/v3/launches?limit=100');
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJJdGVtL0ZpbHRlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXJJdGVtL0ZpbHRlckl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaEl0ZW0vRGV0YWlsSXRlbS9EZXRhaWxJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hJdGVtL0RldGFpbEl0ZW0vRGV0YWlsSXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hJdGVtL0ZpZ3VyZUl0ZW0vRmlndXJlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoSXRlbS9GaWd1cmVJdGVtL0ZpZ3VyZUl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoSXRlbS9MYXVuY2hJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hJdGVtL0xhdW5jaEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2hlbHBlci91cmxNYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRmlsdGVyQ2F0ZWdvcnkiLCJwcm9wcyIsIm9uRmlsdGVyQ2xpY2siLCJ2YWx1ZSIsIm9uRmlsdGVyQXBwbHkiLCJmaWxlclR5cGUiLCJmaWx0ZXJJdGVtcyIsImZpbHRlclZhbHVlcyIsIm1hcCIsImZpbHRlciIsImFjdGl2ZUl0ZW0iLCJzdHlsZXMiLCJmaWx0ZXJDYXRlZ29yeSIsImZpbHRlclR5cGUiLCJmaWx0ZXJEaXNwbGF5TmFtZSIsIkZpbHRlckl0ZW0iLCJSZWFjdCIsIm1lbW8iLCJmaWx0ZXJJdGVtIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwiRm9vdGVyIiwieHNwSGVhZGVyIiwiSGVhZGVyIiwiRGV0YWlsSXRlbSIsImlzVmFsdWVBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImRldGFpbFZhbHVlIiwibGVuZ3RoIiwibGF1bmNoRGV0YWlscyIsImRldGFpbExhYmVsIiwibGFiZWwiLCJGaWd1cmVJdGVtIiwiZmlndXJlSXRlbSIsInNvdXJjZSIsIm5hbWUiLCJMYXVuY2hJdGVtIiwiZm9yd2FyZFJlZiIsInJlZiIsImxhdW5jaEl0ZW0iLCJtaXNzaW9uX3BhdGNoX3NtYWxsIiwibWlzc2lvbl9uYW1lIiwibGF1bmNoTmFtZSIsImZsaWdodF9udW1iZXIiLCJtaXNzaW9uX2lkIiwibGF1bmNoX3llYXIiLCJsYXVuY2hfc3VjY2VzcyIsImxhbmRpbmdfc3VjY2VzcyIsIkxhdWNoTGlzdCIsIkNvbXBvbmVudCIsInNsaWNlZEluZGV4IiwiY3JlYXRlUmVmIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdGF0ZSIsImxhdW5jaERhdGEiLCJjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIm9ic2VydmVyIiwiZGF0YUxpbWl0IiwiZmV0Y2hNb3JlRGF0YSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGlzY29ubmVjdCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibGFzdEVsZW1lbnQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJvb3RNYXJnaW4iLCJvYnNlcnZlIiwiY3VycmVudCIsInJlbmRlciIsImxhdW5jaEl0ZW1zIiwic2xpY2UiLCJkYXRhIiwiaSIsImxpbmtzIiwibm9EYXRhIiwibGF1bmNoTGlzdCIsIkxheW91dCIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwiWFNQRmlsdGVycyIsImZpbHRlckNhdGVnb3JpZXMiLCJmaWx0ZXJEYXRhIiwiY2F0ZWdvcnkiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJ4c3BmaWx0ZXJzIiwiZ2V0UGFyYW0iLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImxhbmRfc3VjY2VzcyIsInNldFBhcmFtIiwic2V0IiwidG9TdHJpbmciLCJIb21lUGFnZSIsInBvc3RzIiwiaW5pdGlhbFN0YXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsbCIsImEiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwidXNlU3RhdGUiLCJzcGFjZVhEYXRhIiwic2V0U3BhY2VYRGF0YSIsInVybFF1ZXJ5Iiwic2V0VXJsUXVlcnkiLCJpbml0aWFsVXJsIiwic2V0SW5pdGlhbFVybCIsInVzZUVmZmVjdCIsImluaXRpYWxRdWVyeVN0cmluZyIsInJlcXVpcmUiLCJjdXJyZW50UXVlcmllcyIsImN1cnJlbnRDYXRlZ29yeSIsInF1ZXJ5U3RyaW5nIiwiaGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwicHVzaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIndpbmRvdyIsImhyZWYiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVySXRlbSBmcm9tICcuLi9GaWx0ZXJJdGVtL0ZpbHRlckl0ZW0nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZpbHRlckNhdGVnb3J5Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBGaWx0ZXJDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qgb25GaWx0ZXJDbGljayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBwcm9wcy5vbkZpbHRlckFwcGx5KHByb3BzLmZpbGVyVHlwZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckl0ZW1zID0gcHJvcHMuZmlsdGVyVmFsdWVzLm1hcCgoZmlsdGVyKSA9PlxuICAgICAgICA8RmlsdGVySXRlbVxuICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcn1cbiAgICAgICAgICAgIGtleT17ZmlsdGVyfVxuICAgICAgICAgICAgaXNBY3RpdmU9e2ZpbHRlciA9PT0gcHJvcHMuYWN0aXZlSXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRmlsdGVyQ2xpY2t9IC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQ2F0ZWdvcnl9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclR5cGV9Pntwcm9wcy5maWx0ZXJEaXNwbGF5TmFtZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJWYWx1ZXN9PlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ2F0ZWdvcnk7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsdGVyQ2F0ZWdvcnlcIjogXCJGaWx0ZXJDYXRlZ29yeV9maWx0ZXJDYXRlZ29yeV9fWkFISi1cIixcblx0XCJmaWx0ZXJUeXBlXCI6IFwiRmlsdGVyQ2F0ZWdvcnlfZmlsdGVyVHlwZV9fM20xM05cIixcblx0XCJmaWx0ZXJWYWx1ZXNcIjogXCJGaWx0ZXJDYXRlZ29yeV9maWx0ZXJWYWx1ZXNfXzEyX3huXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZpbHRlckl0ZW0ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEZpbHRlckl0ZW0gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVySXRlbSArIChwcm9wcy5pc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIil9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9uQ2xpY2socHJvcHMudmFsdWUpIH19PlxuICAgICAgICAgICAge3Byb3BzLnZhbHVlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckl0ZW07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsdGVySXRlbVwiOiBcIkZpbHRlckl0ZW1fZmlsdGVySXRlbV9fV01WVF9cIixcblx0XCJhY3RpdmVcIjogXCJGaWx0ZXJJdGVtX2FjdGl2ZV9fMzh6SzRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLnhzcEhlYWRlcn0+XHJcbiAgICAgICAgICAgIEFyc2hhZCBIdXNzYWluXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwieHNwRm9vdGVyXCI6IFwiRm9vdGVyX3hzcEZvb3Rlcl9fMkhYWk9cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLnhzcEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxoMT5Yc3BhY2UgUHJvZ3JhbTwvaDE+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwieHNwSGVhZGVyXCI6IFwiSGVhZGVyX3hzcEhlYWRlcl9fMkNFWUxcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlsSXRlbS5tb2R1bGUuY3NzJztcblxuXG5jb25zdCBEZXRhaWxJdGVtID0gUmVhY3QubWVtbygocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IGlzVmFsdWVBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcHMudmFsdWUpO1xuICAgIGNvbnN0IGRldGFpbFZhbHVlID0gaXNWYWx1ZUFycmF5ID9cbiAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbFZhbHVlfT5cbiAgICAgICAgICAgIHtwcm9wcy52YWx1ZS5sZW5ndGggPyBwcm9wcy52YWx1ZVswXSA6ICdOQSd9XG4gICAgICAgIDwvcD5cbiAgICAgICAgOiA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxWYWx1ZX0+e3Byb3BzLnZhbHVlID8gcHJvcHMudmFsdWUgKyBcIlwiIDogXCJOQVwifTwvcD5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF1bmNoRGV0YWlscyArIChpc1ZhbHVlQXJyYXkgPyBcIiB0eXBlLWxpc3RcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbExhYmVsfT57cHJvcHMubGFiZWx9OjwvcD5cbiAgICAgICAgICAgIHtkZXRhaWxWYWx1ZX0gXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSXRlbTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXVuY2hEZXRhaWxzXCI6IFwiRGV0YWlsSXRlbV9sYXVuY2hEZXRhaWxzX18xcGVVLVwiLFxuXHRcInR5cGVMaXN0XCI6IFwiRGV0YWlsSXRlbV90eXBlTGlzdF9fM1MxdjBcIixcblx0XCJkZXRhaWxMYWJlbFwiOiBcIkRldGFpbEl0ZW1fZGV0YWlsTGFiZWxfXzF4ZDI1XCIsXG5cdFwiZGV0YWlsVmFsdWVcIjogXCJEZXRhaWxJdGVtX2RldGFpbFZhbHVlX18xckpWM1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GaWd1cmVJdGVtLm1vZHVsZS5jc3MnXG5cbmNvbnN0IEZpZ3VyZUl0ZW0gPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMuZmlndXJlSXRlbX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuc291cmNlfSBhbHQ9e3Byb3BzLm5hbWV9IC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRmlndXJlSXRlbTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaWd1cmVJdGVtXCI6IFwiRmlndXJlSXRlbV9maWd1cmVJdGVtX18xb3lndFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWd1cmVJdGVtIGZyb20gJy4vRmlndXJlSXRlbS9GaWd1cmVJdGVtJztcbmltcG9ydCBEZXRhaWxJdGVtIGZyb20gJy4vRGV0YWlsSXRlbS9EZXRhaWxJdGVtJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXVuY2hJdGVtLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBMYXVuY2hJdGVtID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMscmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXVuY2hJdGVtfT5cbiAgICAgICAgICAgIDxGaWd1cmVJdGVtIHNvdXJjZT17cHJvcHMubWlzc2lvbl9wYXRjaF9zbWFsbH0gbmFtZT17cHJvcHMubWlzc2lvbl9uYW1lfSAvPlxuICAgICAgICAgICAgPHAgcmVmPXtyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxhdW5jaE5hbWV9Pntwcm9wcy5taXNzaW9uX25hbWV9ICAje3Byb3BzLmZsaWdodF9udW1iZXJ9PC9wPlxuICAgICAgICAgICAgPERldGFpbEl0ZW0gdmFsdWU9e3Byb3BzLm1pc3Npb25faWR9IGxhYmVsPVwiTWlzc2lvbiBJZHNcIiAvPlxuICAgICAgICAgICAgPERldGFpbEl0ZW0gdmFsdWU9e3Byb3BzLmxhdW5jaF95ZWFyfSBsYWJlbD1cIkxhdW5jaCBZZWFyXCIgLz5cbiAgICAgICAgICAgIDxEZXRhaWxJdGVtIHZhbHVlPXtwcm9wcy5sYXVuY2hfc3VjY2Vzc30gbGFiZWw9XCJTdWNjZXNzZnVsIExhdW5jaFwiIC8+XG4gICAgICAgICAgICA8RGV0YWlsSXRlbSB2YWx1ZT17cHJvcHMubGFuZGluZ19zdWNjZXNzfSBsYWJlbD1cIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59KVxuXG5leHBvcnQgZGVmYXVsdCBMYXVuY2hJdGVtOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxhdW5jaEl0ZW1cIjogXCJMYXVuY2hJdGVtX2xhdW5jaEl0ZW1fXzFJVTNHXCIsXG5cdFwibGF1bmNoTmFtZVwiOiBcIkxhdW5jaEl0ZW1fbGF1bmNoTmFtZV9fMVl0ZHFcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF1bmNoSXRlbSBmcm9tICcuL0xhdW5jaEl0ZW0vTGF1bmNoSXRlbSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXVuY2hMaXN0Lm1vZHVsZS5jc3MnO1xuXG5jbGFzcyBMYXVjaExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNsaWNlZEluZGV4OiAxMixcbiAgICB9XG4gICAgbGFzdEVsZW1lbnQgPSBSZWFjdC5jcmVhdGVSZWYobnVsbCk7XG4gICAgb2JzZXJ2ZXIgPSBudWxsO1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWNlZEluZGV4IDwgdGhpcy5wcm9wcy5sYXVuY2hEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpY2VkSW5kZXggPCB0aGlzLnByb3BzLmxhdW5jaERhdGEubGVuZ3RoICYmICF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGljZWRJbmRleCA+PSB0aGlzLnByb3BzLmRhdGFMaW1pdCAmJiB0aGlzLnByb3BzLmxhdW5jaERhdGEubGVuZ3RoID09PSB0aGlzLnByb3BzLmRhdGFMaW1pdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE1vcmVEYXRhKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzSW50ZXJzZWN0aW5nIH0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpY2VkSW5kZXggPCB0aGlzLnByb3BzLmxhdW5jaERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RFbGVtZW50ID0gUmVhY3QuY3JlYXRlUmVmKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VkSW5kZXg6IHByZXZTdGF0ZS5zbGljZWRJbmRleCArIDEyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggMTAwMHB4IDBweCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMubGFzdEVsZW1lbnQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGF1bmNoSXRlbXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhdW5jaERhdGEgJiYgdGhpcy5wcm9wcy5sYXVuY2hEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgbGF1bmNoSXRlbXMgPSB0aGlzLnByb3BzLmxhdW5jaERhdGEuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zbGljZWRJbmRleCkubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMYXVuY2hJdGVtXG4gICAgICAgICAgICAgICAgICAgIG1pc3Npb25fcGF0Y2hfc21hbGw9e2RhdGEubGlua3MubWlzc2lvbl9wYXRjaF9zbWFsbH1cbiAgICAgICAgICAgICAgICAgICAgbWlzc2lvbl9uYW1lPXtkYXRhLm1pc3Npb25fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbWlzc2lvbl9pZD17ZGF0YS5taXNzaW9uX2lkfVxuICAgICAgICAgICAgICAgICAgICBsYXVuY2hfeWVhcj17ZGF0YS5sYXVuY2hfeWVhcn1cbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoX3N1Y2Nlc3M9e2RhdGEubGF1bmNoX3N1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgIGxhbmRpbmdfc3VjY2Vzcz17ZGF0YS5sYW5kaW5nX3N1Y2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgIGZsaWdodF9udW1iZXI9e2RhdGEuZmxpZ2h0X251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIHsuLi4oaSA9PT0gKHRoaXMuc3RhdGUuc2xpY2VkSW5kZXggLSAxKSAmJiB7IHJlZjogdGhpcy5sYXN0RWxlbWVudCB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF1bmNoSXRlbXMgPSA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vRGF0YX0+PGgyPk5vIGRhdGEgZm91bmQ8L2gyPjwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF1bmNoTGlzdH0+XG4gICAgICAgICAgICAgICAgeyBsYXVuY2hJdGVtc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF1Y2hMaXN0OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxhdW5jaExpc3RcIjogXCJMYXVuY2hMaXN0X2xhdW5jaExpc3RfXzJ6M1ZnXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvPlxyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGF5b3V0X2NvbnRhaW5lcl9fb2lGMlVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWx0ZXJDYXRlZ29yeSBmcm9tICcuL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1hTUEZpbHRlcnMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFhTUEZpbHRlcnMgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJDYXRlZ29yaWVzID0gcHJvcHMuZmlsdGVyRGF0YS5tYXAoY2F0ZWdvcnkgPT5cclxuICAgICAgICA8RmlsdGVyQ2F0ZWdvcnlcclxuICAgICAgICAgICAgZmlsdGVyVmFsdWVzPXtjYXRlZ29yeS5kYXRhfVxyXG4gICAgICAgICAgICBmaWxlclR5cGU9e2NhdGVnb3J5LnR5cGV9XHJcbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkudHlwZX1cclxuICAgICAgICAgICAgZmlsdGVyRGlzcGxheU5hbWU9e2NhdGVnb3J5LmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICBhY3RpdmVJdGVtPXtjYXRlZ29yeS5hY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICBvbkZpbHRlckFwcGx5PXtwcm9wcy5vbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy54c3BmaWx0ZXJzfT5cclxuICAgICAgICAgICAgPGgyPkZpbHRlcnM8L2gyPlxyXG4gICAgICAgICAgICB7ZmlsdGVyQ2F0ZWdvcmllc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFhTUEZpbHRlcnM7ICIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInhzcGZpbHRlcnNcIjogXCJYU1BGaWx0ZXJzX3hzcGZpbHRlcnNfXzNsRGtCXCJcbn07XG4iLCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbShsb2NhdGlvbikge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdW5jaF95ZWFyOiBzZWFyY2hQYXJhbXMuZ2V0KCdsYXVuY2hfeWVhcicpIHx8IFwiXCIsXHJcbiAgICAgICAgbGF1bmNoX3N1Y2Nlc3M6IHNlYXJjaFBhcmFtcy5nZXQoJ2xhdW5jaF9zdWNjZXNzJykgfHwgXCJcIixcclxuICAgICAgICBsYW5kX3N1Y2Nlc3M6IHNlYXJjaFBhcmFtcy5nZXQoJ2xhbmRfc3VjY2VzcycpIHx8IFwiXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhcmFtKHsgbGF1bmNoX3llYXIsIGxhdW5jaF9zdWNjZXNzLCBsYW5kX3N1Y2Nlc3MgfSkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgbGF1bmNoX3llYXIgJiYgc2VhcmNoUGFyYW1zLnNldChcImxhdW5jaF95ZWFyXCIsIGxhdW5jaF95ZWFyKTtcclxuICAgIGxhdW5jaF9zdWNjZXNzICYmIHNlYXJjaFBhcmFtcy5zZXQoXCJsYXVuY2hfc3VjY2Vzc1wiLCBsYXVuY2hfc3VjY2Vzcyk7XHJcbiAgICBsYW5kX3N1Y2Nlc3MgJiYgc2VhcmNoUGFyYW1zLnNldChcImxhbmRfc3VjY2Vzc1wiLCBsYW5kX3N1Y2Nlc3MpO1xyXG4gICAgcmV0dXJuIHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJhbSwgc2V0UGFyYW0gfSBmcm9tICcuLi9oZWxwZXIvdXJsTWFuaXB1bGF0aW9uLmpzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtwb3N0c30pIHtcclxuICBsZXQgaW5pdGlhbFN0YXRlID0gW3tcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF95ZWFyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGF1bmNoIFllYXJcIixcclxuICAgICAgICBkYXRhOiBuZXcgQXJyYXkoKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDUpKS5maWxsKCkubWFwKChhLCBpKSA9PiAyMDA2ICsgaSksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYW5kX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhbmRpbmdcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1cmxRdWVyeSwgc2V0VXJsUXVlcnldID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtpbml0aWFsVXJsLCBzZXRJbml0aWFsVXJsXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKHBvc3RzKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0IGxhdW5jaERhdGE9e3NwYWNlWERhdGF9IC8+XHJcblxyXG4gICAgY29uc3Qgb25GaWx0ZXJBcHBseSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuICAgICAgY29uc3QgaW5pdGlhbFF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gZ2V0UGFyYW0oaW5pdGlhbFF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHt9XHJcblxyXG4gICAgICBpZiAoY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gJiYgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG5cclxuICAgICAgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcblxyXG4gICAgICBoaXN0b3J5LnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgICBzZXRVcmxRdWVyeShxdWVyeVN0cmluZylcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJiR7dXJsUXVlcnl9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBzZXRTcGFjZVhEYXRhKGRhdGEpKTtcclxuICAgIH0sIFt1cmxRdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0SW5pdGlhbFVybCh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgIH0sIFswXSlcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMCcpXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=