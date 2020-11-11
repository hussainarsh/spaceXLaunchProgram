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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");
/* harmony import */ var _helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helper/urlManipulation.js */ "./helper/urlManipulation.js");




var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function HomePage(_ref) {
  _s();

  var posts = _ref.posts;

  var queryString1 = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      filterState = _useState[0],
      setFilterState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      spaceXData = _useState2[0],
      setSpaceXData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_12__["getParam"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    launchData: spaceXData // dataLimit={this.state.dataLimit}
    // fetchMoreData={this.fetchMoreData}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 18
  }, this);

  var filterAllowedParams = function filterAllowedParams(queries, allowedParams) {
    return allowedParams.reduce(function (acc, param) {
      if (Object.prototype.hasOwnProperty.call(queries, param)) {
        acc[param] = queries[param];
      }

      return acc;
    }, {});
  };

  var onFilterApply = function onFilterApply(category, value) {
    var currentQueries = {};
    currentQueries[category] = value; //const queryString = setParam(currentQueries);
    //router.push("?" + queryString)

    var history = Object(history__WEBPACK_IMPORTED_MODULE_4__["createHashHistory"])();
    var allowedQueriesParams = filterAllowedParams(currentQueries, ['launch_year', 'launch_success', 'land_success']);
    var newQueryString = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(_objectSpread(_objectSpread({}, query_string__WEBPACK_IMPORTED_MODULE_6___default.a.parse(location.search)), allowedQueriesParams));
    var queryString = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_12__["setParam"])(allowedQueriesParams);
    history.push("".concat(location.pathname).concat(queryString ? "?".concat(queryString) : ''));
    setUrlQuery(queryString);
    console.log('location.pathname', location.href); // const currentQueries = getParam(this.state.queryString);
    // const currentCategory = { ...this.state.filterData.find(filterCategory => filterCategory.type === category) };
    // if (currentCategory.activeItem && currentCategory.activeItem === value) {
    //     currentQueries[category] = null;
    //     currentCategory.activeItem = null;
    // }
    // else {
    //     currentCategory.activeItem = value;
    //     currentQueries[category] = value;
    // }
    // const queryString = setParam(currentQueries);
    // this.props.history.push("?" + queryString);
    // this.setState(prevState => {
    //     return {
    //         filterData: prevState.filterData.map(filterCategory => filterCategory.type === category ? currentCategory : filterCategory),
    //         queryString: queryString
    //     }
    // })
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch("https://api.spaceXdata.com/v3/launches?".concat(urlQuery)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    });
    console.log('query', "https://api.spaceXdata.com/v3/launches?".concat(urlQuery));
  }, [urlQuery]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "3tzuCSFUvY6+uBpNoNX2Wfxs99Y=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsInF1ZXJ5U3RyaW5nMSIsInJlcXVpcmUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImRhdGEiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXJsUXVlcnkiLCJzZXRVcmxRdWVyeSIsImN1cnJlbnRRdWVyaWVzIiwiZ2V0UGFyYW0iLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0IiwiZmlsdGVyQWxsb3dlZFBhcmFtcyIsInF1ZXJpZXMiLCJhbGxvd2VkUGFyYW1zIiwicmVkdWNlIiwiYWNjIiwicGFyYW0iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsImNyZWF0ZUhhc2hIaXN0b3J5IiwiYWxsb3dlZFF1ZXJpZXNQYXJhbXMiLCJuZXdRdWVyeVN0cmluZyIsInFzIiwic3RyaW5naWZ5IiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInF1ZXJ5U3RyaW5nIiwic2V0UGFyYW0iLCJwdXNoIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVJD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QixRO1VBRVNLLDJELEVBQ0RFLHFEOzs7S0FIUlAsUTs7QUFtSE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2YTJlYTk5ZDYzMDhhNDE4M2IxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUhhc2hIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5qcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IFhTUEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzJztcclxuaW1wb3J0IExhdWNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdCc7XHJcbmltcG9ydCB7IGdldFBhcmFtLCBzZXRQYXJhbSB9IGZyb20gJy4uL2hlbHBlci91cmxNYW5pcHVsYXRpb24uanMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe3Bvc3RzfSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nMSA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBsZXQgaW5pdGlhbFN0YXRlID0gW3tcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF95ZWFyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGF1bmNoIFllYXJcIixcclxuICAgICAgICBkYXRhOiBuZXcgQXJyYXkoKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDUpKS5maWxsKCkubWFwKChhLCBpKSA9PiAyMDA2ICsgaSksXHJcbiAgICAgICAgLy9hY3RpdmVJdGVtOiB0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3llYXJcIl0gJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF95ZWFyXCJdKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYXVuY2hcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgLy9hY3RpdmVJdGVtOiB0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3N1Y2Nlc3NcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYW5kX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhbmRpbmdcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgLy9hY3RpdmVJdGVtOiB0aGlzLnByb3BzLnF1ZXJ5W1wibGFuZF9zdWNjZXNzXCJdXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1cmxRdWVyeSwgc2V0VXJsUXVlcnldID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UXVlcmllcyA9IGdldFBhcmFtKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3BhY2VYRGF0YShwb3N0cyk7XHJcbiAgICB9LCBbMF0pXHJcblxyXG4gICAgbGV0IGxhdW5jaExpc3QgPSA8ZGl2PjwvZGl2PjtcclxuXHJcbiAgICBsYXVuY2hMaXN0ID0gPExhdWNoTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdW5jaERhdGE9e3NwYWNlWERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGF0YUxpbWl0PXt0aGlzLnN0YXRlLmRhdGFMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaE1vcmVEYXRhPXt0aGlzLmZldGNoTW9yZURhdGF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckFsbG93ZWRQYXJhbXMgPSAocXVlcmllcywgYWxsb3dlZFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYWxsb3dlZFBhcmFtcy5yZWR1Y2UoKGFjYywgcGFyYW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHF1ZXJpZXMsIHBhcmFtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjW3BhcmFtXSA9IHF1ZXJpZXNbcGFyYW1dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoY2F0ZWdvcnksIHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0ge307XHJcbiAgICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgICAvL2NvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG4gICAgICAvL3JvdXRlci5wdXNoKFwiP1wiICsgcXVlcnlTdHJpbmcpXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoKVxyXG4gICAgICBjb25zdCBhbGxvd2VkUXVlcmllc1BhcmFtcyA9IGZpbHRlckFsbG93ZWRQYXJhbXMoY3VycmVudFF1ZXJpZXMsIFsnbGF1bmNoX3llYXInLCAnbGF1bmNoX3N1Y2Nlc3MnLCAnbGFuZF9zdWNjZXNzJ10pO1xyXG4gICAgICBjb25zdCBuZXdRdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh7IC4uLnFzLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCksIC4uLmFsbG93ZWRRdWVyaWVzUGFyYW1zIH0pO1xyXG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHNldFBhcmFtKGFsbG93ZWRRdWVyaWVzUGFyYW1zKTtcclxuICAgICAgaGlzdG9yeS5wdXNoKGAke2xvY2F0aW9uLnBhdGhuYW1lfSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6ICcnfWApO1xyXG4gICAgICBzZXRVcmxRdWVyeShxdWVyeVN0cmluZyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGlvbi5wYXRobmFtZScsIGxvY2F0aW9uLmhyZWYpXHJcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gZ2V0UGFyYW0odGhpcy5zdGF0ZS5xdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHsgLi4udGhpcy5zdGF0ZS5maWx0ZXJEYXRhLmZpbmQoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkpIH07XHJcblxyXG4gICAgICAvLyBpZiAoY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gJiYgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPT09IHZhbHVlKSB7XHJcbiAgICAgIC8vICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAvLyAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAvLyAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgLy8gICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG5cclxuICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICAgICAgZmlsdGVyRGF0YTogcHJldlN0YXRlLmZpbHRlckRhdGEubWFwKGZpbHRlckNhdGVnb3J5ID0+IGZpbHRlckNhdGVnb3J5LnR5cGUgPT09IGNhdGVnb3J5ID8gY3VycmVudENhdGVnb3J5IDogZmlsdGVyQ2F0ZWdvcnkpLFxyXG4gICAgICAvLyAgICAgICAgIHF1ZXJ5U3RyaW5nOiBxdWVyeVN0cmluZ1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3VybFF1ZXJ5fWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0U3BhY2VYRGF0YShkYXRhKSk7XHJcbiAgICBjb25zb2xlLmxvZygncXVlcnknLCBgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/JHt1cmxRdWVyeX1gKVxyXG4gIH0sIFt1cmxRdWVyeV0pXHJcblxyXG4gIHJldHVybiA8PlxyXG4gIDxIZWFkZXIgLz5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxYU1BGaWx0ZXJzIGZpbHRlckRhdGE9e2ZpbHRlclN0YXRlfSBvbkZpbHRlckFwcGx5PXtvbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgICB7bGF1bmNoTGlzdH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDxGb290ZXIgLz5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5cclxuICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMCcpXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcclxuICAvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=