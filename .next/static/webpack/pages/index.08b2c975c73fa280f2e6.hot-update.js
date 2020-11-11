webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");
/* harmony import */ var _helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper/urlManipulation.js */ "./helper/urlManipulation.js");



var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js",
    _s = $RefreshSig$();












function HomePage(_ref) {
  _s();

  var posts = _ref.posts;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var initialState = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array(new Date().getFullYear() - 2005).fill().map(function (a, i) {
      return 2006 + i;
    }) //activeItem: this.props.query["launch_year"] && parseInt(this.props.query["launch_year"])

  }, {
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"] //activeItem: this.props.query["launch_success"]

  }, {
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"] //activeItem: this.props.query["land_success"]

  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState),
      filterState = _useState[0],
      setFilterState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      spaceXData = _useState2[0],
      setSpaceXData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      initialUrl = _useState4[0],
      setInitialUrl = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    launchData: spaceXData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 18
  }, this);

  var onFilterApply = function onFilterApply(category, value) {
    var initialQueryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

    var currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_10__["getParam"])(initialQueryString); //const currentCategory = { ...this.state.filterData.find(filterCategory => filterCategory.type === category) };

    var currentCategory = {};

    if (currentCategory.activeItem && currentCategory.activeItem === value) {
      currentQueries[category] = null;
      currentCategory.activeItem = null;
    } else {
      currentCategory.activeItem = value;
      currentQueries[category] = value;
    }

    var queryString = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_10__["setParam"])(currentQueries);
    var history = Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])();
    history.push("?" + queryString);
    console.log('queryString', queryString);
    setUrlQuery(queryString);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('filteration', filteration);
  }, [filteration]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100&".concat(urlQuery)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    });
    console.log('query', "https://api.spaceXdata.com/v3/launches?".concat(urlQuery));
  }, [urlQuery]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInitialUrl(window.location.href);
  }, [0]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "XhSjMEXv3OX2FCcvi+lRSiheQYM=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiZGF0YSIsIkFycmF5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsbCIsIm1hcCIsImEiLCJpIiwidXNlU3RhdGUiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3BhY2VYRGF0YSIsInNldFNwYWNlWERhdGEiLCJ1cmxRdWVyeSIsInNldFVybFF1ZXJ5IiwiaW5pdGlhbFVybCIsInNldEluaXRpYWxVcmwiLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0Iiwib25GaWx0ZXJBcHBseSIsImNhdGVnb3J5IiwidmFsdWUiLCJpbml0aWFsUXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiY3VycmVudFF1ZXJpZXMiLCJnZXRQYXJhbSIsImN1cnJlbnRDYXRlZ29yeSIsImFjdGl2ZUl0ZW0iLCJxdWVyeVN0cmluZyIsInNldFBhcmFtIiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmF0aW9uIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDekIsTUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJ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SjtBQUFBLEtBQW5GLEVBQXdHRixJQUF4RyxDQUE2RyxVQUFBcEMsSUFBSTtBQUFBLGFBQUlZLGFBQWEsQ0FBQ1osSUFBRCxDQUFqQjtBQUFBLEtBQWpIO0FBQ0FnQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLG1EQUErRHBCLFFBQS9EO0FBQ0QsR0FIUSxFQUdOLENBQUNBLFFBQUQsQ0FITSxDQUFUO0FBS0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDdUIsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFqQixDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUMsQ0FBRCxDQUZNLENBQVQ7QUFJRixzQkFBTztBQUFBLDRCQUNQLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETyxlQUVMLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0UscUVBQUMsaUVBQUQ7QUFBWSxrQkFBVSxFQUFFaEMsV0FBeEI7QUFBcUMscUJBQWEsRUFBRVU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdELFVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkssZUFNUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTk87QUFBQSxrQkFBUDtBQVFEOztHQWxGUTNCLFE7VUFDU0csMkQsRUFDREUscUQ7OztLQUZSTCxROztBQThGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDhiMmM5NzVjNzNmYTI4MGYyZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJhbSwgc2V0UGFyYW0gfSBmcm9tICcuLi9oZWxwZXIvdXJsTWFuaXB1bGF0aW9uLmpzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtwb3N0c30pIHtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF95ZWFyXCJdICYmIHBhcnNlSW50KHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF9zdWNjZXNzXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhbmRfc3VjY2Vzc1wiXVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXJsUXVlcnksIHNldFVybFF1ZXJ5XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbaW5pdGlhbFVybCwgc2V0SW5pdGlhbFVybF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3BhY2VYRGF0YShwb3N0cyk7XHJcbiAgICB9LCBbMF0pXHJcblxyXG4gICAgbGV0IGxhdW5jaExpc3QgPSA8ZGl2PjwvZGl2PjtcclxuXHJcbiAgICBsYXVuY2hMaXN0ID0gPExhdWNoTGlzdCBsYXVuY2hEYXRhPXtzcGFjZVhEYXRhfSAvPlxyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoY2F0ZWdvcnksIHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluaXRpYWxRdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG4gICAgICBjb25zdCBjdXJyZW50UXVlcmllcyA9IGdldFBhcmFtKGluaXRpYWxRdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vY29uc3QgY3VycmVudENhdGVnb3J5ID0geyAuLi50aGlzLnN0YXRlLmZpbHRlckRhdGEuZmluZChmaWx0ZXJDYXRlZ29yeSA9PiBmaWx0ZXJDYXRlZ29yeS50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHt9XHJcblxyXG4gICAgICBpZiAoY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gJiYgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG5cclxuICAgICAgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcblxyXG4gICAgICBoaXN0b3J5LnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygncXVlcnlTdHJpbmcnLCBxdWVyeVN0cmluZylcclxuXHJcbiAgICAgIHNldFVybFF1ZXJ5KHF1ZXJ5U3RyaW5nKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJhdGlvbicsIGZpbHRlcmF0aW9uKVxyXG4gICAgfSwgW2ZpbHRlcmF0aW9uXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJiR7dXJsUXVlcnl9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBzZXRTcGFjZVhEYXRhKGRhdGEpKTtcclxuICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5JywgYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7dXJsUXVlcnl9YClcclxuICAgIH0sIFt1cmxRdWVyeV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0SW5pdGlhbFVybCh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgIH0sIFswXSlcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goaW5pdGlhbFVybClcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9