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
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");



var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js",
    _s = $RefreshSig$();








function HomePage(_ref) {
  _s();

  var posts = _ref.posts;
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(window.location),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    launchData: spaceXData // dataLimit={this.state.dataLimit}
    // fetchMoreData={this.fetchMoreData}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 18
  }, this);

  var onFilterApply = function onFilterApply(category, value) {
    var urlParams = new URLSearchParams(window.location.search); //const myParam = urlParams.get('myParam');

    console.log(window.location); // const { data, error } = useSWR('https://api.spaceXdata.com/v3/launches?limit=2', fetch)

    fetch("https://api.spaceXdata.com/v3/launches?launch_year=".concat(value)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    }); //setSpaceXData
    // if (error) return <div>failed to load</div>
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "VOMudF19jVYu63Lj1ghVdNdgC50=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImRhdGEiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJ1cmxRdWVyeSIsInNldFVybFF1ZXJ5IiwidXNlRWZmZWN0IiwibGF1bmNoTGlzdCIsIm9uRmlsdGVyQXBwbHkiLCJjYXRlZ29yeSIsInZhbHVlIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFFekIsTUFBSUMsWUFBWSxHQUFHLENBQUM7QUFDZEMsUUFBSSxFQUFFLGFBRFE7QUFFZEMsZUFBVyxFQUFFLGFBRkM7QUFHZEMsUUFBSSxFQUFFLElBQUlDLEtBQUosQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsS0FBMkIsSUFBdEMsRUFBNkNDLElBQTdDLEdBQW9EQyxHQUFwRCxDQUF3RCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVLE9BQU9BLENBQWpCO0FBQUEsS0FBeEQsQ0FIUSxDQUlkOztBQUpjLEdBQUQsRUFNakI7QUFDSVQsUUFBSSxFQUFFLGdCQURWO0FBRUlDLGVBQVcsRUFBRSxtQkFGakI7QUFHSUMsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FIVixDQUlJOztBQUpKLEdBTmlCLEVBWWpCO0FBQ0lGLFFBQUksRUFBRSxjQURWO0FBRUlDLGVBQVcsRUFBRSxvQkFGakI7QUFHSUMsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FIVixDQUlJOztBQUpKLEdBWmlCLENBQW5COztBQUZ5QixrQkFxQmVRLHNEQUFRLENBQUNYLFlBQUQsQ0FyQnZCO0FBQUEsTUFxQmhCWSxXQXJCZ0I7QUFBQSxNQXFCSEMsY0FyQkc7O0FBQUEsbUJBc0JhRixzREFBUSxDQUFDLEVBQUQsQ0F0QnJCO0FBQUEsTUFzQmhCRyxVQXRCZ0I7QUFBQSxNQXNCSkMsYUF0Qkk7O0FBQUEsbUJBdUJTSixzREFBUSxDQUFDSyxNQUFNLENBQUNDLFFBQVIsQ0F2QmpCO0FBQUEsTUF1QmhCQyxRQXZCZ0I7QUFBQSxNQXVCTkMsV0F2Qk07O0FBeUJ2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLGlCQUFhLENBQUNoQixLQUFELENBQWI7QUFDRCxHQUZRLEVBRU4sQ0FBQyxDQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFJc0IsVUFBVSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWpCOztBQUVBQSxZQUFVLGdCQUFHLHFFQUFDLHlFQUFEO0FBQ0csY0FBVSxFQUFFUCxVQURmLENBRUc7QUFDQTs7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWI7O0FBTUEsTUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDekMsUUFBTUMsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0JWLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlUsTUFBcEMsQ0FBbEIsQ0FEeUMsQ0FFekM7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFNLENBQUNDLFFBQW5CLEVBSHlDLENBSTFDOztBQUVBYSxTQUFLLDhEQUF1RE4sS0FBdkQsRUFBTCxDQUFxRU8sSUFBckUsQ0FBMEUsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FBbEYsRUFBdUdGLElBQXZHLENBQTRHLFVBQUE1QixJQUFJO0FBQUEsYUFBSVksYUFBYSxDQUFDWixJQUFELENBQWpCO0FBQUEsS0FBaEgsRUFOMEMsQ0FPMUM7QUFHQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQWpDQzs7QUFtQ0Ysc0JBQU87QUFBQSw0QkFDUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFTCxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVksa0JBQVUsRUFBRVMsV0FBeEI7QUFBcUMscUJBQWEsRUFBRVU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdELFVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkssZUFNUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTk87QUFBQSxrQkFBUDtBQVFEOztHQWhGUXZCLFE7O0tBQUFBLFE7O0FBaUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOWMyNTM2MjY0MmFiMGY2NjY0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe3Bvc3RzfSkge1xyXG5cclxuICBsZXQgaW5pdGlhbFN0YXRlID0gW3tcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF95ZWFyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGF1bmNoIFllYXJcIixcclxuICAgICAgICBkYXRhOiBuZXcgQXJyYXkoKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDUpKS5maWxsKCkubWFwKChhLCBpKSA9PiAyMDA2ICsgaSksXHJcbiAgICAgICAgLy9hY3RpdmVJdGVtOiB0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3llYXJcIl0gJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF95ZWFyXCJdKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYXVuY2hcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgLy9hY3RpdmVJdGVtOiB0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3N1Y2Nlc3NcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYW5kX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhbmRpbmdcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgLy9hY3RpdmVJdGVtOiB0aGlzLnByb3BzLnF1ZXJ5W1wibGFuZF9zdWNjZXNzXCJdXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1cmxRdWVyeSwgc2V0VXJsUXVlcnldID0gdXNlU3RhdGUod2luZG93LmxvY2F0aW9uKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKHBvc3RzKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhTGltaXQ9e3RoaXMuc3RhdGUuZGF0YUxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZldGNoTW9yZURhdGE9e3RoaXMuZmV0Y2hNb3JlRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgY29uc3Qgb25GaWx0ZXJBcHBseSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgLy9jb25zdCBteVBhcmFtID0gdXJsUGFyYW1zLmdldCgnbXlQYXJhbScpO1xyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24pXHJcbiAgICAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCdodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0yJywgZmV0Y2gpXHJcbiAgICAgIFxyXG4gICAgIGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz9sYXVuY2hfeWVhcj0ke3ZhbHVlfWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0U3BhY2VYRGF0YShkYXRhKSk7XHJcbiAgICAgLy9zZXRTcGFjZVhEYXRhXHJcblxyXG5cclxuICAgICAgLy8gaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PlxyXG4gICAgICAvLyBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgLy8gcmV0dXJuIDxkaXY+aGVsbG8ge2RhdGEubmFtZX0hPC9kaXY+XHJcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gZ2V0UGFyYW0odGhpcy5zdGF0ZS5xdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHsgLi4udGhpcy5zdGF0ZS5maWx0ZXJEYXRhLmZpbmQoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkpIH07XHJcblxyXG4gICAgICAvLyBpZiAoY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gJiYgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPT09IHZhbHVlKSB7XHJcbiAgICAgIC8vICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAvLyAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAvLyAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgLy8gICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG5cclxuICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICAgICAgZmlsdGVyRGF0YTogcHJldlN0YXRlLmZpbHRlckRhdGEubWFwKGZpbHRlckNhdGVnb3J5ID0+IGZpbHRlckNhdGVnb3J5LnR5cGUgPT09IGNhdGVnb3J5ID8gY3VycmVudENhdGVnb3J5IDogZmlsdGVyQ2F0ZWdvcnkpLFxyXG4gICAgICAvLyAgICAgICAgIHF1ZXJ5U3RyaW5nOiBxdWVyeVN0cmluZ1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJylcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==