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
    var currentCategory = filterState.find(function (curCat) {
      return curCat.type === category;
    });

    if (currentCategory.activeItem && currentCategory.activeItem === value) {
      currentCategory.activeItem = null;
      currentCategory.type = null;
    } else {
      currentCategory.activeItem = value;
    }

    var queryString = updateQueryStringParameter(location.search, category, value);
    window.history.pushState("", "", queryString);
    fetch("https://api.spaceXdata.com/v3/launches".concat(queryString, "&limit=100")).then(function (response) {
      return response.json();
    }).then(function (data) {
      setSpaceXData(data);
      var result = filterState.map(function (item) {
        if (item.type === currentCategory.type) {
          return _objectSpread(_objectSpread({}, item), currentCategory);
        }

        return item;
      });
      setFilterState(result);
      console.log('filterState2', result);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsImFjdGl2ZUl0ZW0iLCJwYXJzZUludCIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXNlRWZmZWN0IiwibGF1bmNoTGlzdCIsInVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyIiwidXJpIiwia2V5IiwidmFsdWUiLCJyZSIsIlJlZ0V4cCIsInNlcGFyYXRvciIsImluZGV4T2YiLCJtYXRjaCIsInJlcGxhY2UiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJjdXJyZW50Q2F0ZWdvcnkiLCJmaW5kIiwiY3VyQ2F0IiwicXVlcnlTdHJpbmciLCJsb2NhdGlvbiIsInNlYXJjaCIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJpdGVtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFkQyxJQUFjLFFBQWRBLElBQWM7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDL0IsTUFBSUMsWUFBWSxHQUFHLENBQUM7QUFDZEMsUUFBSSxFQUFFLGFBRFE7QUFFZEMsZUFBVyxFQUFFLGFBRkM7QUFHZEosUUFBSSxFQUFFLElBQUlLLEtBQUosQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsS0FBMkIsSUFBdEMsRUFBNkNDLElBQTdD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NkIsRUFBN0IsRUFBaUNMLFdBQWpDO0FBQ0FNLFNBQUssaURBQTBDTixXQUExQyxnQkFBTCxDQUF3RU8sSUFBeEUsQ0FBNkUsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsS0FBckYsRUFBMEdGLElBQTFHLENBQ0UsVUFBQzNDLElBQUQsRUFBVTtBQUNSa0IsbUJBQWEsQ0FBQ2xCLElBQUQsQ0FBYjtBQUVGLFVBQUk4QyxNQUFNLEdBQUcvQixXQUFXLENBQUNOLEdBQVosQ0FBZ0IsVUFBQXNDLElBQUksRUFBSTtBQUNuQyxZQUFJQSxJQUFJLENBQUM1QyxJQUFMLEtBQWM4QixlQUFlLENBQUM5QixJQUFsQyxFQUF3QztBQUN0QyxpREFBVzRDLElBQVgsR0FBb0JkLGVBQXBCO0FBQ0Q7O0FBQ0QsZUFBT2MsSUFBUDtBQUNELE9BTFksQ0FBYjtBQU9FL0Isb0JBQWMsQ0FBQzhCLE1BQUQsQ0FBZDtBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCSCxNQUE1QjtBQUNELEtBYkg7QUFlRCxHQTdCRDs7QUErQkYsc0JBQU87QUFBQSw0QkFDUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFTCxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVksa0JBQVUsRUFBRS9CLFdBQXhCO0FBQXFDLHFCQUFhLEVBQUVnQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR1gsVUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQU1QLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTztBQUFBLGtCQUFQO0FBUUQ7O0dBakZRckIsUTs7S0FBQUEsUTs7QUErRk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFhYjliZmY3ZjBkZDA1NmNiNDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe2RhdGEsIHF1ZXJ5fSkge1xyXG4gIGxldCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3llYXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYXVuY2ggWWVhclwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSgobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjAwNSkpLmZpbGwoKS5tYXAoKGEsIGkpID0+IDIwMDYgKyBpKSxcclxuICAgICAgICBhY3RpdmVJdGVtOiBxdWVyeVsnbGF1bmNoX3llYXInXSAmJiBwYXJzZUludChxdWVyeVsnbGF1bmNoX3llYXInXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYXVuY2hfc3VjY2VzcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYW5kX3N1Y2Nlc3MnXVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3BhY2VYRGF0YShkYXRhKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0IGxhdW5jaERhdGE9e3NwYWNlWERhdGF9IC8+XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJpLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCQpXCIsIFwiaVwiKTtcclxuICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gXCImXCIgOiBcIj9cIjtcclxuICAgICAgaWYgKHVyaS5tYXRjaChyZSkpIHtcclxuICAgICAgICByZXR1cm4gdXJpLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVyaSArIHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5ID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gZmlsdGVyU3RhdGUuZmluZChjdXJDYXQgPT4gY3VyQ2F0LnR5cGUgPT09IGNhdGVnb3J5KTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSAmJiBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IG51bGw7XHJcbiAgICAgICAgY3VycmVudENhdGVnb3J5LnR5cGUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKGxvY2F0aW9uLnNlYXJjaCwgY2F0ZWdvcnksIHZhbHVlKTtcclxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIFwiXCIsIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzJHtxdWVyeVN0cmluZ30mbGltaXQ9MTAwYCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oXHJcbiAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFNwYWNlWERhdGEoZGF0YSlcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZpbHRlclN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IGN1cnJlbnRDYXRlZ29yeS50eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgLi4uY3VycmVudENhdGVnb3J5fTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldEZpbHRlclN0YXRlKHJlc3VsdCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyU3RhdGUyJywgcmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtxdWVyeX0pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeSl9JmxpbWl0PTEwMGApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgICAgcXVlcnlcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=