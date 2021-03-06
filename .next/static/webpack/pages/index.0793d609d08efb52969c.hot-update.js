webpackHotUpdate_N_E("pages/index",{

/***/ "./components/XSPFilters.js":
/*!**********************************!*\
  !*** ./components/XSPFilters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterCategory_FilterCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterCategory/FilterCategory */ "./components/FilterCategory/FilterCategory.js");
/* harmony import */ var _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XSPFilters.module.css */ "./components/XSPFilters.module.css");
/* harmony import */ var _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\XSPFilters.js",
    _this = undefined;





var XSPFilters = function XSPFilters(props) {
  console.log('props', props.filterData);
  var filterCategories = props.filterData.map(function (category) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FilterCategory_FilterCategory__WEBPACK_IMPORTED_MODULE_2__["default"], {
      filterValues: category.data,
      filerType: category.type,
      filterDisplayName: category.displayName,
      activeItem: category.activeItem,
      onFilterApply: props.onFilterApply
    }, category.type, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _XSPFilters_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.xspfilters,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Filters"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), filterCategories]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_c = XSPFilters;
/* harmony default export */ __webpack_exports__["default"] = (XSPFilters);

var _c;

$RefreshReg$(_c, "XSPFilters");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzIl0sIm5hbWVzIjpbIlhTUEZpbHRlcnMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJEYXRhIiwiZmlsdGVyQ2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiZGF0YSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImFjdGl2ZUl0ZW0iLCJvbkZpbHRlckFwcGx5Iiwic3R5bGVzIiwieHNwZmlsdGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixLQUFLLENBQUNHLFVBQTNCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdKLEtBQUssQ0FBQ0csVUFBTixDQUFpQkUsR0FBakIsQ0FBcUIsVUFBQUMsUUFBUTtBQUFBLHdCQUNsRCxxRUFBQyxzRUFBRDtBQUNJLGtCQUFZLEVBQUVBLFFBQVEsQ0FBQ0MsSUFEM0I7QUFFSSxlQUFTLEVBQUVELFFBQVEsQ0FBQ0UsSUFGeEI7QUFJSSx1QkFBaUIsRUFBRUYsUUFBUSxDQUFDRyxXQUpoQztBQUtJLGdCQUFVLEVBQUVILFFBQVEsQ0FBQ0ksVUFMekI7QUFNSSxtQkFBYSxFQUFFVixLQUFLLENBQUNXO0FBTnpCLE9BR1NMLFFBQVEsQ0FBQ0UsSUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURrRDtBQUFBLEdBQTdCLENBQXpCO0FBVUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVJLDZEQUFNLENBQUNDLFVBQXZCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVLVCxnQkFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBbEJEOztLQUFNTCxVO0FBb0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNzkzZDYwOWQwOGVmYjUyOTY5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRlckNhdGVnb3J5IGZyb20gJy4vRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vWFNQRmlsdGVycy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgWFNQRmlsdGVycyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Byb3BzJywgcHJvcHMuZmlsdGVyRGF0YSlcclxuICAgIGNvbnN0IGZpbHRlckNhdGVnb3JpZXMgPSBwcm9wcy5maWx0ZXJEYXRhLm1hcChjYXRlZ29yeSA9PlxyXG4gICAgICAgIDxGaWx0ZXJDYXRlZ29yeVxyXG4gICAgICAgICAgICBmaWx0ZXJWYWx1ZXM9e2NhdGVnb3J5LmRhdGF9XHJcbiAgICAgICAgICAgIGZpbGVyVHlwZT17Y2F0ZWdvcnkudHlwZX1cclxuICAgICAgICAgICAga2V5PXtjYXRlZ29yeS50eXBlfVxyXG4gICAgICAgICAgICBmaWx0ZXJEaXNwbGF5TmFtZT17Y2F0ZWdvcnkuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2NhdGVnb3J5LmFjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgIG9uRmlsdGVyQXBwbHk9e3Byb3BzLm9uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnhzcGZpbHRlcnN9PlxyXG4gICAgICAgICAgICA8aDI+RmlsdGVyczwvaDI+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJDYXRlZ29yaWVzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgWFNQRmlsdGVyczsgIl0sInNvdXJjZVJvb3QiOiIifQ==