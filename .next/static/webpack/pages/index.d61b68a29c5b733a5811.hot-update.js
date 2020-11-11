webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

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
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");
/* harmony import */ var _helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper/urlManipulation.js */ "./helper/urlManipulation.js");



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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(window.location.search),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_9__["getParam"])();
  console.log('currentQueries', location.search);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    launchData: spaceXData // dataLimit={this.state.dataLimit}
    // fetchMoreData={this.fetchMoreData}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 18
  }, this);

  var onFilterApply = function onFilterApply(category, value) {
    var currentQueries = [];
    currentQueries[category] = value;
    router.push("?" + "launch_year=".concat(value));
    var queryString = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_9__["setParam"])(currentQueries);
    setUrlQuery(queryString);
    console.log(queryString); // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>
    // return <div>hello {data.name}!</div>
    // const currentQueries = getParam(this.state.queryString);
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://api.spaceXdata.com/v3/launches".concat(urlQuery)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    });
    console.log('query', "https://api.spaceXdata.com/v3/launches?".concat(urlQuery));
  }, [urlQuery]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "AV64S/ZNlBpulha+X9UthwYDmiY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiZGF0YSIsIkFycmF5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsbCIsIm1hcCIsImEiLCJpIiwidXNlU3RhdGUiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3BhY2VYRGF0YSIsInNldFNwYWNlWERhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFF1ZXJ5Iiwic2V0VXJsUXVlcnkiLCJjdXJyZW50UXVlcmllcyIsImdldFBhcmFtIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImxhdW5jaExpc3QiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsInB1c2giLCJxdWVyeVN0cmluZyIsInNldFBhcmFtIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDekIsTUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJLEVBQUUsYUFEUTtBQUVkQyxlQUFXLEVBQUUsYUFGQztBQUdkQyxRQUFJLEVBQUUsSUFBSUMsS0FBSixDQUFXLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQixJQUF0QyxFQUE2Q0MsSUFBN0MsR0FB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RUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTk87QUFBQSxrQkFBUDtBQVFEOztHQXhGUWhDLFE7VUFDU0csMkQsRUFDREUscUQ7OztLQUZSTCxROztBQXlHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDYxYjY4YTI5YzViNzMzYTU4MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgWFNQRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL1hTUEZpbHRlcnMuanMnO1xyXG5pbXBvcnQgTGF1Y2hMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hMaXN0JztcclxuaW1wb3J0IHsgZ2V0UGFyYW0sIHNldFBhcmFtIH0gZnJvbSAnLi4vaGVscGVyL3VybE1hbmlwdWxhdGlvbi5qcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7cG9zdHN9KSB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGxldCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3llYXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYXVuY2ggWWVhclwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSgobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjAwNSkpLmZpbGwoKS5tYXAoKGEsIGkpID0+IDIwMDYgKyBpKSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSAmJiBwYXJzZUludCh0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3llYXJcIl0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfc3VjY2Vzc1wiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhbmRfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYW5kX3N1Y2Nlc3NcIl1cclxuICAgIH1dXHJcblxyXG4gICAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW3NwYWNlWERhdGEsIHNldFNwYWNlWERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VybFF1ZXJ5LCBzZXRVcmxRdWVyeV0gPSB1c2VTdGF0ZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UXVlcmllcyA9IGdldFBhcmFtKCk7XHJcbiAgICBjb25zb2xlLmxvZygnY3VycmVudFF1ZXJpZXMnLCBsb2NhdGlvbi5zZWFyY2gpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3BhY2VYRGF0YShwb3N0cyk7XHJcbiAgICB9LCBbMF0pXHJcblxyXG4gICAgbGV0IGxhdW5jaExpc3QgPSA8ZGl2PjwvZGl2PjtcclxuXHJcbiAgICBsYXVuY2hMaXN0ID0gPExhdWNoTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdW5jaERhdGE9e3NwYWNlWERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGF0YUxpbWl0PXt0aGlzLnN0YXRlLmRhdGFMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaE1vcmVEYXRhPXt0aGlzLmZldGNoTW9yZURhdGF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoY2F0ZWdvcnksIHZhbHVlKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFF1ZXJpZXMgPSBbXTtcclxuICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgcm91dGVyLnB1c2goXCI/XCIgKyBgbGF1bmNoX3llYXI9JHt2YWx1ZX1gKVxyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBzZXRQYXJhbShjdXJyZW50UXVlcmllcyk7XHJcbiAgICBzZXRVcmxRdWVyeShxdWVyeVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgICAvLyBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgICAgIC8vIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAvLyByZXR1cm4gPGRpdj5oZWxsbyB7ZGF0YS5uYW1lfSE8L2Rpdj5cclxuICAgICAgLy8gY29uc3QgY3VycmVudFF1ZXJpZXMgPSBnZXRQYXJhbSh0aGlzLnN0YXRlLnF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gY29uc3QgY3VycmVudENhdGVnb3J5ID0geyAuLi50aGlzLnN0YXRlLmZpbHRlckRhdGEuZmluZChmaWx0ZXJDYXRlZ29yeSA9PiBmaWx0ZXJDYXRlZ29yeS50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgIC8vIGlmIChjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSAmJiBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9PT0gdmFsdWUpIHtcclxuICAgICAgLy8gICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IG51bGw7XHJcbiAgICAgIC8vICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IG51bGw7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IHZhbHVlO1xyXG4gICAgICAvLyAgICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gdmFsdWU7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gY29uc3QgcXVlcnlTdHJpbmcgPSBzZXRQYXJhbShjdXJyZW50UXVlcmllcyk7XHJcblxyXG4gICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIj9cIiArIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgICAgICBmaWx0ZXJEYXRhOiBwcmV2U3RhdGUuZmlsdGVyRGF0YS5tYXAoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkgPyBjdXJyZW50Q2F0ZWdvcnkgOiBmaWx0ZXJDYXRlZ29yeSksXHJcbiAgICAgIC8vICAgICAgICAgcXVlcnlTdHJpbmc6IHF1ZXJ5U3RyaW5nXHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzJHt1cmxRdWVyeX1gKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHNldFNwYWNlWERhdGEoZGF0YSkpO1xyXG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5JywgYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7dXJsUXVlcnl9YClcclxuICB9LCBbdXJsUXVlcnldKVxyXG5cclxuICByZXR1cm4gPD5cclxuICA8SGVhZGVyIC8+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8WFNQRmlsdGVycyBmaWx0ZXJEYXRhPXtmaWx0ZXJTdGF0ZX0gb25GaWx0ZXJBcHBseT17b25GaWx0ZXJBcHBseX0gLz5cclxuICAgICAge2xhdW5jaExpc3R9XHJcbiAgICA8L0xheW91dD5cclxuICA8Rm9vdGVyIC8+XHJcbiAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcbiAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDAnKVxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogcG9zdHMgfSwgdGhlIEJsb2cgY29tcG9uZW50XHJcbiAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9