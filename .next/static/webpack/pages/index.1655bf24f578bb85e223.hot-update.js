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
          a.activeItem = value;
        }

        if (a.type == 'launch_year') {
          a.activeItem = value;
        }

        if (a.type == 'launch_year') {
          a.activeItem = value;
        }

        return a;
      });
      setFilterState(updatedArray);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiQXJyYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmaWxsIiwibWFwIiwiYSIsImkiLCJhY3RpdmVJdGVtIiwidXNlU3RhdGUiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3BhY2VYRGF0YSIsInNldFNwYWNlWERhdGEiLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0IiwidXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIiLCJ1cmkiLCJrZXkiLCJ2YWx1ZSIsInJlIiwiUmVnRXhwIiwic2VwYXJhdG9yIiwiaW5kZXhPZiIsIm1hdGNoIiwicmVwbGFjZSIsIm9uRmlsdGVyQXBwbHkiLCJjYXRlZ29yeSIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidXBkYXRlZEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUEwQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN4QixNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJLEVBQUUsYUFEUTtBQUVkQyxlQUFXLEVBQUUsYUFGQztBQUdkSCxRQUFJLEVBQUUsSUFBSUksS0FBSixDQUFXLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQixJQUF0QyxFQUE2Q0MsSUFBN0MsR0FBb0RDLEdBQXBELENBQXdELFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVUsT0FBT0EsQ0FBakI7QUFBQSxLQUF4RCxDQUhRO0FBSWRDLGNBQVUsRUFBRTtBQUpFLEdB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WHFCLENBQXJCO0FBYUFLLG9CQUFjLENBQUMyQixZQUFELENBQWQ7QUFDRCxLQWxCSDtBQW9CRCxHQXZCRDs7QUF5QkYsc0JBQU87QUFBQSw0QkFDUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFTCxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVksa0JBQVUsRUFBRTVCLFdBQXhCO0FBQXFDLHFCQUFhLEVBQUVnQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR1gsVUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQU1QLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTztBQUFBLGtCQUFQO0FBUUQ7O0dBM0VRbkIsUTs7S0FBQUEsUTs7QUF3Rk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2NTViZjI0ZjU3OGJiODVlMjIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe2RhdGF9KSB7XHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICBhY3RpdmVJdGVtOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhbmRfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICBhY3RpdmVJdGVtOiBmYWxzZVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3BhY2VYRGF0YShkYXRhKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0IGxhdW5jaERhdGE9e3NwYWNlWERhdGF9IC8+XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJpLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCQpXCIsIFwiaVwiKTtcclxuICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gXCImXCIgOiBcIj9cIjtcclxuICAgICAgaWYgKHVyaS5tYXRjaChyZSkpIHtcclxuICAgICAgICByZXR1cm4gdXJpLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVyaSArIHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5ID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcihsb2NhdGlvbi5zZWFyY2gsIGNhdGVnb3J5LCB2YWx1ZSk7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIlwiLCBxdWVyeVN0cmluZyk7XHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcyR7cXVlcnlTdHJpbmd9JmxpbWl0PTEwMGApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKFxyXG4gICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRTcGFjZVhEYXRhKGRhdGEpXHJcblxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZEFycmF5ID0gZmlsdGVyU3RhdGUubWFwKGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS50eXBlID09ICdsYXVuY2hfeWVhcicpIHtcclxuICAgICAgICAgICAgICAgYS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEudHlwZSA9PSAnbGF1bmNoX3llYXInKSB7XHJcbiAgICAgICAgICAgICAgYS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmIChhLnR5cGUgPT0gJ2xhdW5jaF95ZWFyJykge1xyXG4gICAgICAgICAgICBhLmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0RmlsdGVyU3RhdGUodXBkYXRlZEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiA8PlxyXG4gIDxIZWFkZXIgLz5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxYU1BGaWx0ZXJzIGZpbHRlckRhdGE9e2ZpbHRlclN0YXRlfSBvbkZpbHRlckFwcGx5PXtvbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgICB7bGF1bmNoTGlzdH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDxGb290ZXIgLz5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cXVlcnl9KSB7XHJcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnkpfSZsaW1pdD0xMDBgKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGFcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=