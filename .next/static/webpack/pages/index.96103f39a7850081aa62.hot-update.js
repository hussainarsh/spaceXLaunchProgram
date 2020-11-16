webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
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

  var data = _ref.data;
  var initialState = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array(new Date().getFullYear() - 2005).fill().map(function (a, i) {
      return 2006 + i;
    }),
    activeItem: false
  }, {
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"],
    activeItem: false
  }, {
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"],
    activeItem: false
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState),
      filterState = _useState[0],
      setFilterState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      spaceXData = _useState2[0],
      setSpaceXData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(data);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    launchData: spaceXData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 18
  }, this);

  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";

    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
      return uri + separator + key + "=" + value;
    }
  }

  var onFilterApply = function onFilterApply(category, value) {
    var queryString = updateQueryStringParameter(location.search, category, value);
    window.history.pushState("", "", queryString);
    fetch("https://api.spaceXdata.com/v3/launches".concat(queryString, "&limit=100")).then(function (response) {
      return response.json();
    }).then(function (data) {
      setSpaceXData(data);
      var updatedArray = filterState.map(function (a) {
        if (a.type == 'launch_year') {
          a.activeItem = true;
        }

        return a;
      });
      setFilterState(updatedArray);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "SGM4v1Z7KmPzwo5+rlZpngPjWdE=");

_c = HomePage;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiQXJyYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmaWxsIiwibWFwIiwiYSIsImkiLCJhY3RpdmVJdGVtIiwidXNlU3RhdGUiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3BhY2VYRGF0YSIsInNldFNwYWNlWERhdGEiLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0IiwidXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIiLCJ1cmkiLCJrZXkiLCJ2YWx1ZSIsInJlIiwiUmVnRXhwIiwic2VwYXJhdG9yIiwiaW5kZXhPZiIsIm1hdGNoIiwicmVwbGFjZSIsIm9uRmlsdGVyQXBwbHkiLCJjYXRlZ29yeSIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidXBkYXRlZEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUEwQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN4QixNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJLEVBQUUsYUFEUTtBQUVkQyxlQUFXLEVBQUUsYUFGQztBQUdkSCxRQUFJLEVBQUUsSUFBSUksS0FBSixDQUFXLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQixJQUF0QyxFQUE2Q0MsSUFBN0MsR0FBb0RDLEdBQXBELENBQXdELFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVUsT0FBT0EsQ0FBakI7QUFBQSxLQUF4RCxDQUhRO0FBSWRDLGNBQVUsRUFBRTtBQUpFLEdB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QkFBVSxFQUFFNUIsV0FBeEI7QUFBcUMscUJBQWEsRUFBRWdCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHWCxVQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBTVAscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5PO0FBQUEsa0JBQVA7QUFRRDs7R0FyRVFuQixROztLQUFBQSxROztBQWtGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTYxMDNmMzlhNzg1MDA4MWFhNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5qcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IFhTUEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzJztcclxuaW1wb3J0IExhdWNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7ZGF0YX0pIHtcclxuICBsZXQgaW5pdGlhbFN0YXRlID0gW3tcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF95ZWFyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGF1bmNoIFllYXJcIixcclxuICAgICAgICBkYXRhOiBuZXcgQXJyYXkoKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDUpKS5maWxsKCkubWFwKChhLCBpKSA9PiAyMDA2ICsgaSksXHJcbiAgICAgICAgYWN0aXZlSXRlbTogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IGZhbHNlXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKGRhdGEpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVjaExpc3QgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX0gLz5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmksIGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIihbPyZdKVwiICsga2V5ICsgXCI9Lio/KCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICB2YXIgc2VwYXJhdG9yID0gdXJpLmluZGV4T2YoJz8nKSAhPT0gLTEgPyBcIiZcIiA6IFwiP1wiO1xyXG4gICAgICBpZiAodXJpLm1hdGNoKHJlKSkge1xyXG4gICAgICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgJyQxJyArIGtleSArIFwiPVwiICsgdmFsdWUgKyAnJDInKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoY2F0ZWdvcnksIHZhbHVlKSA9PiB7XHJcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKGxvY2F0aW9uLnNlYXJjaCwgY2F0ZWdvcnksIHZhbHVlKTtcclxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiXCIsIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzJHtxdWVyeVN0cmluZ30mbGltaXQ9MTAwYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXHJcbiAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFNwYWNlWERhdGEoZGF0YSlcclxuXHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQXJyYXkgPSBmaWx0ZXJTdGF0ZS5tYXAoYSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT0gJ2xhdW5jaF95ZWFyJykge1xyXG4gICAgICAgICAgICAgICBhLmFjdGl2ZUl0ZW0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRGaWx0ZXJTdGF0ZSh1cGRhdGVkQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeX0pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeSl9JmxpbWl0PTEwMGApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==