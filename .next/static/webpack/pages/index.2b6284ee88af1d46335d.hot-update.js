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
  //console.log('props', props)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzIl0sIm5hbWVzIjpbIlhTUEZpbHRlcnMiLCJwcm9wcyIsImZpbHRlckNhdGVnb3JpZXMiLCJmaWx0ZXJEYXRhIiwibWFwIiwiY2F0ZWdvcnkiLCJkYXRhIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiYWN0aXZlSXRlbSIsIm9uRmlsdGVyQXBwbHkiLCJzdHlsZXMiLCJ4c3BmaWx0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDMUI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxHQUFqQixDQUFxQixVQUFBQyxRQUFRO0FBQUEsd0JBQ2xELHFFQUFDLHNFQUFEO0FBQ0ksa0JBQVksRUFBRUEsUUFBUSxDQUFDQyxJQUQzQjtBQUVJLGVBQVMsRUFBRUQsUUFBUSxDQUFDRSxJQUZ4QjtBQUlJLHVCQUFpQixFQUFFRixRQUFRLENBQUNHLFdBSmhDO0FBS0ksZ0JBQVUsRUFBRUgsUUFBUSxDQUFDSSxVQUx6QjtBQU1JLG1CQUFhLEVBQUVSLEtBQUssQ0FBQ1M7QUFOekIsT0FHU0wsUUFBUSxDQUFDRSxJQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGtEO0FBQUEsR0FBN0IsQ0FBekI7QUFVQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUksNkRBQU0sQ0FBQ0MsVUFBdkI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtWLGdCQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FsQkQ7O0tBQU1GLFU7QUFvQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiNjI4NGVlODhhZjFkNDYzMzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlsdGVyQ2F0ZWdvcnkgZnJvbSAnLi9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9YU1BGaWx0ZXJzLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBYU1BGaWx0ZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdwcm9wcycsIHByb3BzKVxyXG4gICAgY29uc3QgZmlsdGVyQ2F0ZWdvcmllcyA9IHByb3BzLmZpbHRlckRhdGEubWFwKGNhdGVnb3J5ID0+XHJcbiAgICAgICAgPEZpbHRlckNhdGVnb3J5XHJcbiAgICAgICAgICAgIGZpbHRlclZhbHVlcz17Y2F0ZWdvcnkuZGF0YX1cclxuICAgICAgICAgICAgZmlsZXJUeXBlPXtjYXRlZ29yeS50eXBlfVxyXG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5LnR5cGV9XHJcbiAgICAgICAgICAgIGZpbHRlckRpc3BsYXlOYW1lPXtjYXRlZ29yeS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgYWN0aXZlSXRlbT17Y2F0ZWdvcnkuYWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgb25GaWx0ZXJBcHBseT17cHJvcHMub25GaWx0ZXJBcHBseX0gLz5cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMueHNwZmlsdGVyc30+XHJcbiAgICAgICAgICAgIDxoMj5GaWx0ZXJzPC9oMj5cclxuICAgICAgICAgICAge2ZpbHRlckNhdGVnb3JpZXN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYU1BGaWx0ZXJzOyAiXSwic291cmNlUm9vdCI6IiJ9