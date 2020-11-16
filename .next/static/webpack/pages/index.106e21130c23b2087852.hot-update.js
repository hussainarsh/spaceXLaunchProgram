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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");




var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js",
    _s = $RefreshSig$();








function HomePage(_ref) {
  _s();

  var data = _ref.data,
      query = _ref.query;
  var initialState = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array(new Date().getFullYear() - 2005).fill().map(function (a, i) {
      return 2006 + i;
    }),
    activeItem: query['launch_year'] && parseInt(query['launch_year'])
  }, {
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"],
    activeItem: query['launch_success']
  }, {
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"],
    activeItem: query['land_success']
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      filterState = _useState[0],
      setFilterState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      spaceXData = _useState2[0],
      setSpaceXData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSpaceXData(data);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    console.log('filterState1', filterState); //const currentCategory = { ...filterState.find(curCat => curCat.type === category) };

    var currentCategory = filterState.find(function (curCat) {
      return curCat.type === category;
    });
    console.log('currentCategory', currentCategory); // if (currentCategory.activeItem && currentCategory.activeItem === value) {
    //   currentCategory.activeItem = null;
    // }
    // else {
    //   currentCategory.activeItem = value;
    // }

    var queryString = updateQueryStringParameter(location.search, category, value);
    window.history.pushState("", "", queryString);
    fetch("https://api.spaceXdata.com/v3/launches".concat(queryString, "&limit=100")).then(function (response) {
      return response.json();
    }).then(function (data) {
      setSpaceXData(data); //   const updatedArray = filterState.map(a => {
      //     if (a.type == 'launch_year' || a.type === 'launch_success' || a.type === 'land_success') {
      //        a.activeItem = value;
      //     }
      //     return a;
      //  });

      setFilterState([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterState), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentCategory)));
      console.log('filterState2', filterState);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsImFjdGl2ZUl0ZW0iLCJwYXJzZUludCIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXNlRWZmZWN0IiwibGF1bmNoTGlzdCIsInVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyIiwidXJpIiwia2V5IiwidmFsdWUiLCJyZSIsIlJlZ0V4cCIsInNlcGFyYXRvciIsImluZGV4T2YiLCJtYXRjaCIsInJlcGxhY2UiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudENhdGVnb3J5IiwiZmluZCIsImN1ckNhdCIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQy9CLE1BQUlDLFlBQVksR0FBRyxDQUFDO0FBQ2RDLFFBQUksRUFBRSxhQURRO0FBRWRDLGVBQVcsRUFBRSxhQUZDO0FBR2RKLFFBQUksRUFBRSxJQUFJSyxLQUFKLENBQVcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEtBQTJCLElBQXRDLEVBQTZDQyxJQUE3QyxHQUFvREMsR0FBcEQsQ0FBd0Qs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QUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUFyRixFQUEwR0YsSUFBMUcsQ0FDRSxVQUFDN0MsSUFBRCxFQUFVO0FBQ1JrQixtQkFBYSxDQUFDbEIsSUFBRCxDQUFiLENBRFEsQ0FHVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUVnQixvQkFBYyx3R0FBS0QsV0FBTCxnR0FBcUJvQixlQUFyQixHQUFkO0FBQ0FGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJuQixXQUE1QjtBQUNELEtBYkg7QUFlRCxHQS9CRDs7QUFpQ0Ysc0JBQU87QUFBQSw0QkFDUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFTCxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVksa0JBQVUsRUFBRUEsV0FBeEI7QUFBcUMscUJBQWEsRUFBRWdCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHWCxVQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBTVAscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5PO0FBQUEsa0JBQVA7QUFRRDs7R0FuRlFyQixROztLQUFBQSxROztBQWlHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTA2ZTIxMTMwYzIzYjIwODc4NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5qcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IFhTUEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzJztcclxuaW1wb3J0IExhdWNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7ZGF0YSwgcXVlcnl9KSB7XHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYXVuY2hfeWVhciddICYmIHBhcnNlSW50KHF1ZXJ5WydsYXVuY2hfeWVhciddKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYXVuY2hcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhdW5jaF9zdWNjZXNzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYW5kX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhbmRpbmdcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhbmRfc3VjY2VzcyddXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKGRhdGEpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVjaExpc3QgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX0gLz5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmksIGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIihbPyZdKVwiICsga2V5ICsgXCI9Lio/KCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICB2YXIgc2VwYXJhdG9yID0gdXJpLmluZGV4T2YoJz8nKSAhPT0gLTEgPyBcIiZcIiA6IFwiP1wiO1xyXG4gICAgICBpZiAodXJpLm1hdGNoKHJlKSkge1xyXG4gICAgICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgJyQxJyArIGtleSArIFwiPVwiICsgdmFsdWUgKyAnJDInKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoY2F0ZWdvcnksIHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJTdGF0ZTEnLCBmaWx0ZXJTdGF0ZSlcclxuICAgICAgLy9jb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSB7IC4uLmZpbHRlclN0YXRlLmZpbmQoY3VyQ2F0ID0+IGN1ckNhdC50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IGZpbHRlclN0YXRlLmZpbmQoY3VyQ2F0ID0+IGN1ckNhdC50eXBlID09PSBjYXRlZ29yeSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50Q2F0ZWdvcnknLCBjdXJyZW50Q2F0ZWdvcnkpXHJcblxyXG4gICAgICAvLyBpZiAoY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gJiYgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPT09IHZhbHVlKSB7XHJcbiAgICAgIC8vICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAvLyAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKGxvY2F0aW9uLnNlYXJjaCwgY2F0ZWdvcnksIHZhbHVlKTtcclxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiXCIsIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzJHtxdWVyeVN0cmluZ30mbGltaXQ9MTAwYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXHJcbiAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFNwYWNlWERhdGEoZGF0YSlcclxuXHJcbiAgICAgICAgLy8gICBjb25zdCB1cGRhdGVkQXJyYXkgPSBmaWx0ZXJTdGF0ZS5tYXAoYSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChhLnR5cGUgPT0gJ2xhdW5jaF95ZWFyJyB8fCBhLnR5cGUgPT09ICdsYXVuY2hfc3VjY2VzcycgfHwgYS50eXBlID09PSAnbGFuZF9zdWNjZXNzJykge1xyXG4gICAgICAgIC8vICAgICAgICBhLmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gYTtcclxuICAgICAgICAvLyAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0RmlsdGVyU3RhdGUoWy4uLmZpbHRlclN0YXRlLCAuLi5jdXJyZW50Q2F0ZWdvcnldKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJTdGF0ZTInLCBmaWx0ZXJTdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiA8PlxyXG4gIDxIZWFkZXIgLz5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxYU1BGaWx0ZXJzIGZpbHRlckRhdGE9e2ZpbHRlclN0YXRlfSBvbkZpbHRlckFwcGx5PXtvbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgICB7bGF1bmNoTGlzdH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDxGb290ZXIgLz5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cXVlcnl9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnkpfSZsaW1pdD0xMDBgKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHF1ZXJ5XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9