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
    console.log('URL', window.location.href);

    if (window.location.href.indexOf("?") > -1) {
      alert('comes');
    }

    setUrlQuery(queryString);
  };

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

_s(HomePage, "pZl4DT/zZMLesKu7L7hiNfLQ/Tw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiZGF0YSIsIkFycmF5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsbCIsIm1hcCIsImEiLCJpIiwidXNlU3RhdGUiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3BhY2VYRGF0YSIsInNldFNwYWNlWERhdGEiLCJ1cmxRdWVyeSIsInNldFVybFF1ZXJ5IiwiaW5pdGlhbFVybCIsInNldEluaXRpYWxVcmwiLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0Iiwib25GaWx0ZXJBcHBseSIsImNhdGVnb3J5IiwidmFsdWUiLCJpbml0aWFsUXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiY3VycmVudFF1ZXJpZXMiLCJnZXRQYXJhbSIsImN1cnJlbnRDYXRlZ29yeSIsImFjdGl2ZUl0ZW0iLCJxdWVyeVN0cmluZyIsInNldFBhcmFtIiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJhbGVydCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ3pCLE1BQU1DLE9BQU8sR0FBR0MsbUVBQVUsRUFBMUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLENBQUM7QUFDZEMs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Q2RzQixTQUFLLDREQUFxRDFCLFFBQXJELEVBQUwsQ0FBc0UyQixJQUF0RSxDQUEyRSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUFuRixFQUF3R0YsSUFBeEcsQ0FBNkcsVUFBQXhDLElBQUk7QUFBQSxhQUFJWSxhQUFhLENBQUNaLElBQUQsQ0FBakI7QUFBQSxLQUFqSDtBQUNBZ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixtREFBK0RwQixRQUEvRDtBQUNELEdBSFEsRUFHTixDQUFDQSxRQUFELENBSE0sQ0FBVDtBQUtBSSx5REFBUyxDQUFDLFlBQU07QUFDZEQsaUJBQWEsQ0FBQ2tCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBakIsQ0FBYjtBQUNELEdBRlEsRUFFTixDQUFDLENBQUQsQ0FGTSxDQUFUO0FBSUYsc0JBQU87QUFBQSw0QkFDUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFTCxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVksa0JBQVUsRUFBRTNCLFdBQXhCO0FBQXFDLHFCQUFhLEVBQUVVO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHRCxVQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBTVAscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5PO0FBQUEsa0JBQVA7QUFRRDs7R0FsRlEzQixRO1VBQ1NHLDJELEVBQ0RFLHFEOzs7S0FGUkwsUTs7QUE4Rk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmViZDkwN2NjOGIxZWE2NTFiNTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgWFNQRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL1hTUEZpbHRlcnMuanMnO1xyXG5pbXBvcnQgTGF1Y2hMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hMaXN0JztcclxuaW1wb3J0IHsgZ2V0UGFyYW0sIHNldFBhcmFtIH0gZnJvbSAnLi4vaGVscGVyL3VybE1hbmlwdWxhdGlvbi5qcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7cG9zdHN9KSB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGxldCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3llYXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYXVuY2ggWWVhclwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSgobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjAwNSkpLmZpbGwoKS5tYXAoKGEsIGkpID0+IDIwMDYgKyBpKSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSAmJiBwYXJzZUludCh0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3llYXJcIl0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfc3VjY2Vzc1wiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhbmRfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYW5kX3N1Y2Nlc3NcIl1cclxuICAgIH1dXHJcblxyXG4gICAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW3NwYWNlWERhdGEsIHNldFNwYWNlWERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VybFF1ZXJ5LCBzZXRVcmxRdWVyeV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2luaXRpYWxVcmwsIHNldEluaXRpYWxVcmxdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldFNwYWNlWERhdGEocG9zdHMpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVjaExpc3QgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX0gLz5cclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5ID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbml0aWFsUXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuICAgICAgY29uc3QgY3VycmVudFF1ZXJpZXMgPSBnZXRQYXJhbShpbml0aWFsUXVlcnlTdHJpbmcpO1xyXG4gICAgICAvL2NvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHsgLi4udGhpcy5zdGF0ZS5maWx0ZXJEYXRhLmZpbmQoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkpIH07XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSB7fVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtICYmIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gbnVsbDtcclxuICAgICAgICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHNldFBhcmFtKGN1cnJlbnRRdWVyaWVzKTtcclxuXHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgICAgaGlzdG9yeS5wdXNoKFwiP1wiICsgcXVlcnlTdHJpbmcpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ3F1ZXJ5U3RyaW5nJywgcXVlcnlTdHJpbmcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkwnLCB3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIj9cIikgPiAtMSl7XHJcbiAgICAgICAgYWxlcnQoJ2NvbWVzJylcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VXJsUXVlcnkocXVlcnlTdHJpbmcpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMCYke3VybFF1ZXJ5fWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0U3BhY2VYRGF0YShkYXRhKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdxdWVyeScsIGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3VybFF1ZXJ5fWApXHJcbiAgICB9LCBbdXJsUXVlcnldKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldEluaXRpYWxVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpXHJcbiAgICB9LCBbMF0pXHJcblxyXG4gIHJldHVybiA8PlxyXG4gIDxIZWFkZXIgLz5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxYU1BGaWx0ZXJzIGZpbHRlckRhdGE9e2ZpbHRlclN0YXRlfSBvbkZpbHRlckFwcGx5PXtvbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgICB7bGF1bmNoTGlzdH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDxGb290ZXIgLz5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDAnKVxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=