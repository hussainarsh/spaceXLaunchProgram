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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      filteration = _useState4[0],
      setFilteration = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    launchData: spaceXData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 18
  }, this);

  var onFilterApply = function onFilterApply(category, value) {
    window.history.replaceState({
      category: category,
      value: value
    }, "", "/");
    console.log(window.location.pathname); //let categoryVal = {}
    //setFilteration({...filteration, category: category, value: value})
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('filteration', filteration);
  }, [filteration]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://api.spaceXdata.com/v3/launches?".concat(urlQuery)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    });
    console.log('query', "https://api.spaceXdata.com/v3/launches?".concat(urlQuery));
  }, [urlQuery]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "vB+u55Dxd0SXKXkd0y6C/zBEVBE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiZGF0YSIsIkFycmF5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZmlsbCIsIm1hcCIsImEiLCJpIiwidXNlU3RhdGUiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3BhY2VYRGF0YSIsInNldFNwYWNlWERhdGEiLCJ1cmxRdWVyeSIsInNldFVybFF1ZXJ5IiwiZmlsdGVyYXRpb24iLCJzZXRGaWx0ZXJhdGlvbiIsInVzZUVmZmVjdCIsImxhdW5jaExpc3QiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsIndpbmRvdyIsInJlcGxhY2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDekIsTUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJLEVBQUUsYUFEUTtBQUVkQyxlQUFXLEVBQUUsYUFGQztBQUdkQyxRQUFJLEVBQUUsSUFBSUMsS0FBSixDQUFXLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQixJQUF0QyxFQUE2Q0MsSUFBN0MsR0FBb0RDLEdBQXBELENBQXdELFVBQUNDLENBQUQsRUFB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bmRleC41ZWRiZjg1MmI2NmRlZDg5MWQwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJhbSwgc2V0UGFyYW0gfSBmcm9tICcuLi9oZWxwZXIvdXJsTWFuaXB1bGF0aW9uLmpzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtwb3N0c30pIHtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF95ZWFyXCJdICYmIHBhcnNlSW50KHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF9zdWNjZXNzXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhbmRfc3VjY2Vzc1wiXVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXJsUXVlcnksIHNldFVybFF1ZXJ5XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZmlsdGVyYXRpb24sIHNldEZpbHRlcmF0aW9uXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldFNwYWNlWERhdGEocG9zdHMpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVjaExpc3QgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX0gLz5cclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5ID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe2NhdGVnb3J5OiBjYXRlZ29yeSwgdmFsdWU6IHZhbHVlfSwgXCJcIiwgXCIvXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICAvL2xldCBjYXRlZ29yeVZhbCA9IHt9XHJcbiAgICAgIC8vc2V0RmlsdGVyYXRpb24oey4uLmZpbHRlcmF0aW9uLCBjYXRlZ29yeTogY2F0ZWdvcnksIHZhbHVlOiB2YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2ZpbHRlcmF0aW9uJywgZmlsdGVyYXRpb24pXHJcbiAgICB9LCBbZmlsdGVyYXRpb25dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7dXJsUXVlcnl9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBzZXRTcGFjZVhEYXRhKGRhdGEpKTtcclxuICAgIGNvbnNvbGUubG9nKCdxdWVyeScsIGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3VybFF1ZXJ5fWApXHJcbiAgfSwgW3VybFF1ZXJ5XSlcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJylcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==