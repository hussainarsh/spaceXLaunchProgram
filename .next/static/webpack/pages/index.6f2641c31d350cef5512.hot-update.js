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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function HomePage(_ref) {
  _s();

  var data = _ref.data,
      query = _ref.query;
  //console.log(query)
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
    lineNumber: 37,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    launchData: spaceXData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
    console.log('filterState', filterState);

    var currentCategory = _objectSpread({}, filterState.find(function (category) {
      return category.type === category;
    }));

    console.log('currentCategory', currentCategory); // if (currentCategory.activeItem && currentCategory.activeItem === value) {
    //   currentQueries[category] = null;
    //   currentCategory.activeItem = null;
    // }
    // else {
    //     currentCategory.activeItem = value;
    //     currentQueries[category] = value;
    // }

    var queryString = updateQueryStringParameter(location.search, category, value);
    window.history.pushState("", "", queryString);
    fetch("https://api.spaceXdata.com/v3/launches".concat(queryString, "&limit=100")).then(function (response) {
      return response.json();
    }).then(function (data) {
      setSpaceXData(data);
      var updatedArray = filterState.map(function (a) {
        if (a.type == 'launch_year' || a.type === 'launch_success' || a.type === 'land_success') {
          a.activeItem = value;
        }

        return a;
      });
      setFilterState(updatedArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsImFjdGl2ZUl0ZW0iLCJwYXJzZUludCIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXNlRWZmZWN0IiwibGF1bmNoTGlzdCIsInVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyIiwidXJpIiwia2V5IiwidmFsdWUiLCJyZSIsIlJlZ0V4cCIsInNlcGFyYXRvciIsImluZGV4T2YiLCJtYXRjaCIsInJlcGxhY2UiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudENhdGVnb3J5IiwiZmluZCIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidXBkYXRlZEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUMvQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFDO0FBQ2RDLFFBQUksRUFBRSxhQURRO0FBRWRDLGVBQVcsRUFBRSxhQUZDO0FBR2RKLFFBQUksRUFBRSxJQUFJSyxLQUFKLENBQVcsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEtBQTJCLElBQXRDLEVBQTZDQyxJQUE3QyxHQUFv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LENBQTZFLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBQXJGLEVBQTBHRixJQUExRyxDQUNFLFVBQUM1QyxJQUFELEVBQVU7QUFDUmtCLG1CQUFhLENBQUNsQixJQUFELENBQWI7QUFFQSxVQUFNK0MsWUFBWSxHQUFHaEMsV0FBVyxDQUFDTixHQUFaLENBQWdCLFVBQUFDLENBQUMsRUFBSTtBQUN4QyxZQUFJQSxDQUFDLENBQUNQLElBQUYsSUFBVSxhQUFWLElBQTJCTyxDQUFDLENBQUNQLElBQUYsS0FBVyxnQkFBdEMsSUFBMERPLENBQUMsQ0FBQ1AsSUFBRixLQUFXLGNBQXpFLEVBQXlGO0FBQ3RGTyxXQUFDLENBQUNFLFVBQUYsR0FBZVksS0FBZjtBQUNGOztBQUNELGVBQU9kLENBQVA7QUFDRixPQUxxQixDQUFyQjtBQU9BTSxvQkFBYyxDQUFDK0IsWUFBRCxDQUFkO0FBQ0QsS0FaSDtBQWNELEdBOUJEOztBQWdDRixzQkFBTztBQUFBLDRCQUNQLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETyxlQUVMLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0UscUVBQUMsaUVBQUQ7QUFBWSxrQkFBVSxFQUFFaEMsV0FBeEI7QUFBcUMscUJBQWEsRUFBRWdCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHWCxVQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBTVAscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5PO0FBQUEsa0JBQVA7QUFRRDs7R0FuRlFyQixROztLQUFBQSxROztBQWlHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmYyNjQxYzMxZDM1MGNlZjU1MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5qcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IFhTUEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzJztcclxuaW1wb3J0IExhdWNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7ZGF0YSwgcXVlcnl9KSB7XHJcbiAgLy9jb25zb2xlLmxvZyhxdWVyeSlcclxuICBsZXQgaW5pdGlhbFN0YXRlID0gW3tcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF95ZWFyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGF1bmNoIFllYXJcIixcclxuICAgICAgICBkYXRhOiBuZXcgQXJyYXkoKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDUpKS5maWxsKCkubWFwKChhLCBpKSA9PiAyMDA2ICsgaSksXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhdW5jaF95ZWFyJ10gJiYgcGFyc2VJbnQocXVlcnlbJ2xhdW5jaF95ZWFyJ10pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICBhY3RpdmVJdGVtOiBxdWVyeVsnbGF1bmNoX3N1Y2Nlc3MnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhbmRfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICBhY3RpdmVJdGVtOiBxdWVyeVsnbGFuZF9zdWNjZXNzJ11cclxuICAgIH1dXHJcblxyXG4gICAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW3NwYWNlWERhdGEsIHNldFNwYWNlWERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldFNwYWNlWERhdGEoZGF0YSk7XHJcbiAgICB9LCBbMF0pXHJcblxyXG4gICAgbGV0IGxhdW5jaExpc3QgPSA8ZGl2PjwvZGl2PjtcclxuXHJcbiAgICBsYXVuY2hMaXN0ID0gPExhdWNoTGlzdCBsYXVuY2hEYXRhPXtzcGFjZVhEYXRhfSAvPlxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVyaSwga2V5LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiKFs/Jl0pXCIgKyBrZXkgKyBcIj0uKj8oJnwkKVwiLCBcImlcIik7XHJcbiAgICAgIHZhciBzZXBhcmF0b3IgPSB1cmkuaW5kZXhPZignPycpICE9PSAtMSA/IFwiJlwiIDogXCI/XCI7XHJcbiAgICAgIGlmICh1cmkubWF0Y2gocmUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVyaS5yZXBsYWNlKHJlLCAnJDEnICsga2V5ICsgXCI9XCIgKyB2YWx1ZSArICckMicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1cmkgKyBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25GaWx0ZXJBcHBseSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2ZpbHRlclN0YXRlJywgZmlsdGVyU3RhdGUpXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHsgLi4uZmlsdGVyU3RhdGUuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRDYXRlZ29yeScsIGN1cnJlbnRDYXRlZ29yeSlcclxuXHJcbiAgICAgIC8vIGlmIChjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSAmJiBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9PT0gdmFsdWUpIHtcclxuICAgICAgLy8gICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAvLyAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gbnVsbDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgIC8vICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSB2YWx1ZTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIobG9jYXRpb24uc2VhcmNoLCBjYXRlZ29yeSwgdmFsdWUpO1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgXCJcIiwgcXVlcnlTdHJpbmcpO1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXMke3F1ZXJ5U3RyaW5nfSZsaW1pdD0xMDBgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihcclxuICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0U3BhY2VYRGF0YShkYXRhKVxyXG5cclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRBcnJheSA9IGZpbHRlclN0YXRlLm1hcChhID0+IHtcclxuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSAnbGF1bmNoX3llYXInIHx8IGEudHlwZSA9PT0gJ2xhdW5jaF9zdWNjZXNzJyB8fCBhLnR5cGUgPT09ICdsYW5kX3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgIGEuYWN0aXZlSXRlbSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRGaWx0ZXJTdGF0ZSh1cGRhdGVkQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeX0pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeSl9JmxpbWl0PTEwMGApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgICAgcXVlcnlcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=