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
  var location = useLocation();
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(location.pathname),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_9__["getParam"])();
  console.log('currentQueries', location.pathname);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    launchData: spaceXData // dataLimit={this.state.dataLimit}
    // fetchMoreData={this.fetchMoreData}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
      lineNumber: 94,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "k5N0PUZ85lJzuxu0n2ax29Zcpxs=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImRhdGEiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwicGF0aG5hbWUiLCJ1cmxRdWVyeSIsInNldFVybFF1ZXJ5IiwiY3VycmVudFF1ZXJpZXMiLCJnZXRQYXJhbSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0Iiwib25GaWx0ZXJBcHBseSIsImNhdGVnb3J5IiwidmFsdWUiLCJwdXNoIiwicXVlcnlTdHJpbmciLCJzZXRQYXJhbSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ3pCLE1BQU1DLE9BQU8sR0FBR0MsbUVBQVUsRUFBMUI7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLFdBQVcsRUFBMUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLENBQUM7QUFDZEMsUUFBSSxFQUFFLGFBRFE7QUFFZEMsZUFBVyxFQUFFLGFBRkM7QUFHZEMsUUFBSSxFQUFFLElBQUlDLEtBQUosQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsS0FBMkIs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LFlBRkssZUFNUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTk87QUFBQSxrQkFBUDtBQVFEOztHQXpGUWhDLFE7VUFDU0csMkQsRUFFREkscUQ7OztLQUhSUCxROztBQTBHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTUyNTQxMzk1ZWUyNjlkYWQ3NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xyXG5pbXBvcnQgWFNQRmlsdGVycyBmcm9tICcuLi9jb21wb25lbnRzL1hTUEZpbHRlcnMuanMnO1xyXG5pbXBvcnQgTGF1Y2hMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF1bmNoTGlzdC9MYXVuY2hMaXN0JztcclxuaW1wb3J0IHsgZ2V0UGFyYW0sIHNldFBhcmFtIH0gZnJvbSAnLi4vaGVscGVyL3VybE1hbmlwdWxhdGlvbi5qcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7cG9zdHN9KSB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF95ZWFyXCJdICYmIHBhcnNlSW50KHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF9zdWNjZXNzXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhbmRfc3VjY2Vzc1wiXVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXJsUXVlcnksIHNldFVybFF1ZXJ5XSA9IHVzZVN0YXRlKGxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UXVlcmllcyA9IGdldFBhcmFtKCk7XHJcbiAgICBjb25zb2xlLmxvZygnY3VycmVudFF1ZXJpZXMnLCBsb2NhdGlvbi5wYXRobmFtZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKHBvc3RzKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhTGltaXQ9e3RoaXMuc3RhdGUuZGF0YUxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZldGNoTW9yZURhdGE9e3RoaXMuZmV0Y2hNb3JlRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgY29uc3Qgb25GaWx0ZXJBcHBseSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UXVlcmllcyA9IFtdO1xyXG4gICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gdmFsdWU7XHJcbiAgICByb3V0ZXIucHVzaChcIj9cIiArIGBsYXVuY2hfeWVhcj0ke3ZhbHVlfWApXHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IHNldFBhcmFtKGN1cnJlbnRRdWVyaWVzKTtcclxuICAgIHNldFVybFF1ZXJ5KHF1ZXJ5U3RyaW5nKTtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5U3RyaW5nKTtcclxuXHJcbiAgICAgIC8vIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cclxuICAgICAgLy8gaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgIC8vIHJldHVybiA8ZGl2PmhlbGxvIHtkYXRhLm5hbWV9ITwvZGl2PlxyXG4gICAgICAvLyBjb25zdCBjdXJyZW50UXVlcmllcyA9IGdldFBhcmFtKHRoaXMuc3RhdGUucXVlcnlTdHJpbmcpO1xyXG4gICAgICAvLyBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSB7IC4uLnRoaXMuc3RhdGUuZmlsdGVyRGF0YS5maW5kKGZpbHRlckNhdGVnb3J5ID0+IGZpbHRlckNhdGVnb3J5LnR5cGUgPT09IGNhdGVnb3J5KSB9O1xyXG5cclxuICAgICAgLy8gaWYgKGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtICYmIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID09PSB2YWx1ZSkge1xyXG4gICAgICAvLyAgICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gbnVsbDtcclxuICAgICAgLy8gICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gbnVsbDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgIC8vICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSB2YWx1ZTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBjb25zdCBxdWVyeVN0cmluZyA9IHNldFBhcmFtKGN1cnJlbnRRdWVyaWVzKTtcclxuXHJcbiAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiP1wiICsgcXVlcnlTdHJpbmcpO1xyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgICAgIGZpbHRlckRhdGE6IHByZXZTdGF0ZS5maWx0ZXJEYXRhLm1hcChmaWx0ZXJDYXRlZ29yeSA9PiBmaWx0ZXJDYXRlZ29yeS50eXBlID09PSBjYXRlZ29yeSA/IGN1cnJlbnRDYXRlZ29yeSA6IGZpbHRlckNhdGVnb3J5KSxcclxuICAgICAgLy8gICAgICAgICBxdWVyeVN0cmluZzogcXVlcnlTdHJpbmdcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXMke3VybFF1ZXJ5fWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0U3BhY2VYRGF0YShkYXRhKSk7XHJcbiAgICBjb25zb2xlLmxvZygncXVlcnknLCBgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/JHt1cmxRdWVyeX1gKVxyXG4gIH0sIFt1cmxRdWVyeV0pXHJcblxyXG4gIHJldHVybiA8PlxyXG4gIDxIZWFkZXIgLz5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxYU1BGaWx0ZXJzIGZpbHRlckRhdGE9e2ZpbHRlclN0YXRlfSBvbkZpbHRlckFwcGx5PXtvbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgICB7bGF1bmNoTGlzdH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDxGb290ZXIgLz5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5cclxuICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMCcpXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcclxuICAvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=