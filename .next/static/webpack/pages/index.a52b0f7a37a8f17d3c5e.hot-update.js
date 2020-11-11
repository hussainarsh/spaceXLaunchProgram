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
    setUrlQuery(queryString); // const currentQueries = getParam(this.state.queryString);
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
      lineNumber: 104,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsInF1ZXJ5U3RyaW5nMSIsInJlcXVpcmUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImRhdGEiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXJsUXVlcnkiLCJzZXRVcmxRdWVyeSIsImN1cnJlbnRRdWVyaWVzIiwiZ2V0UGFyYW0iLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0IiwiZmlsdGVyQWxsb3dlZFBhcmFtcyIsInF1ZXJpZXMiLCJhbGxvd2VkUGFyYW1zIiwicmVkdWNlIiwiYWNjIiwicGFyYW0iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsImNyZWF0ZUhhc2hIaXN0b3J5IiwiYWxsb3dlZFF1ZXJpZXNQYXJhbXMiLCJuZXdRdWVyeVN0cmluZyIsInFzIiwic3RyaW5naWZ5IiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInF1ZXJ5U3RyaW5nIiwic2V0UGFyYW0iLCJwdXNoIiwicGF0aG5hbWUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxR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YnBhY2svcGFnZXMvaW5kZXguYTUyYjBmN2EzN2E4ZjE3ZDNjNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY3JlYXRlSGFzaEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgWFNQRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL1hTUEZpbHRlcnMuanMnO1xyXG5pbXBvcnQgTGF1Y2hMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hMaXN0JztcclxuaW1wb3J0IHsgZ2V0UGFyYW0sIHNldFBhcmFtIH0gZnJvbSAnLi4vaGVscGVyL3VybE1hbmlwdWxhdGlvbi5qcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7cG9zdHN9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcxID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGxldCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3llYXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYXVuY2ggWWVhclwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSgobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjAwNSkpLmZpbGwoKS5tYXAoKGEsIGkpID0+IDIwMDYgKyBpKSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSAmJiBwYXJzZUludCh0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3llYXJcIl0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfc3VjY2Vzc1wiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhbmRfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYW5kX3N1Y2Nlc3NcIl1cclxuICAgIH1dXHJcblxyXG4gICAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW3NwYWNlWERhdGEsIHNldFNwYWNlWERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VybFF1ZXJ5LCBzZXRVcmxRdWVyeV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gZ2V0UGFyYW0oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKHBvc3RzKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhTGltaXQ9e3RoaXMuc3RhdGUuZGF0YUxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZldGNoTW9yZURhdGE9e3RoaXMuZmV0Y2hNb3JlRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyQWxsb3dlZFBhcmFtcyA9IChxdWVyaWVzLCBhbGxvd2VkUGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbGxvd2VkUGFyYW1zLnJlZHVjZSgoYWNjLCBwYXJhbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocXVlcmllcywgcGFyYW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NbcGFyYW1dID0gcXVlcmllc1twYXJhbV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25GaWx0ZXJBcHBseSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFF1ZXJpZXMgPSB7fTtcclxuICAgICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gdmFsdWU7XHJcbiAgICAgIC8vY29uc3QgcXVlcnlTdHJpbmcgPSBzZXRQYXJhbShjdXJyZW50UXVlcmllcyk7XHJcbiAgICAgIC8vcm91dGVyLnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZylcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSgpXHJcbiAgICAgIGNvbnN0IGFsbG93ZWRRdWVyaWVzUGFyYW1zID0gZmlsdGVyQWxsb3dlZFBhcmFtcyhjdXJyZW50UXVlcmllcywgWydsYXVuY2hfeWVhcicsICdsYXVuY2hfc3VjY2VzcycsICdsYW5kX3N1Y2Nlc3MnXSk7XHJcbiAgICAgIGNvbnN0IG5ld1F1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHsgLi4ucXMucGFyc2UobG9jYXRpb24uc2VhcmNoKSwgLi4uYWxsb3dlZFF1ZXJpZXNQYXJhbXMgfSk7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oYWxsb3dlZFF1ZXJpZXNQYXJhbXMpO1xyXG4gICAgICBoaXN0b3J5LnB1c2goYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyd9YCk7XHJcbiAgICAgIHNldFVybFF1ZXJ5KHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gY29uc3QgY3VycmVudFF1ZXJpZXMgPSBnZXRQYXJhbSh0aGlzLnN0YXRlLnF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gY29uc3QgY3VycmVudENhdGVnb3J5ID0geyAuLi50aGlzLnN0YXRlLmZpbHRlckRhdGEuZmluZChmaWx0ZXJDYXRlZ29yeSA9PiBmaWx0ZXJDYXRlZ29yeS50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgIC8vIGlmIChjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSAmJiBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9PT0gdmFsdWUpIHtcclxuICAgICAgLy8gICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IG51bGw7XHJcbiAgICAgIC8vICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IG51bGw7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IHZhbHVlO1xyXG4gICAgICAvLyAgICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gdmFsdWU7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gY29uc3QgcXVlcnlTdHJpbmcgPSBzZXRQYXJhbShjdXJyZW50UXVlcmllcyk7XHJcblxyXG4gICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIj9cIiArIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgICAgICBmaWx0ZXJEYXRhOiBwcmV2U3RhdGUuZmlsdGVyRGF0YS5tYXAoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkgPyBjdXJyZW50Q2F0ZWdvcnkgOiBmaWx0ZXJDYXRlZ29yeSksXHJcbiAgICAgIC8vICAgICAgICAgcXVlcnlTdHJpbmc6IHF1ZXJ5U3RyaW5nXHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7dXJsUXVlcnl9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBzZXRTcGFjZVhEYXRhKGRhdGEpKTtcclxuICAgIGNvbnNvbGUubG9nKCdxdWVyeScsIGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3VybFF1ZXJ5fWApXHJcbiAgfSwgW3VybFF1ZXJ5XSlcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJylcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==