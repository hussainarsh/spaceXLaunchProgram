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
    console.log('filterState', filterState);

    var currentCategory = _objectSpread({}, filterState.find(function (curCat) {
      return curCat.type === category;
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
      setSpaceXData(data); //   const updatedArray = filterState.map(a => {
      //     if (a.type == 'launch_year' || a.type === 'launch_success' || a.type === 'land_success') {
      //        a.activeItem = value;
      //     }
      //     return a;
      //  });
      //setFilterState(updatedArray);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJkYXRhIiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsImFjdGl2ZUl0ZW0iLCJwYXJzZUludCIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXNlRWZmZWN0IiwibGF1bmNoTGlzdCIsInVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyIiwidXJpIiwia2V5IiwidmFsdWUiLCJyZSIsIlJlZ0V4cCIsInNlcGFyYXRvciIsImluZGV4T2YiLCJtYXRjaCIsInJlcGxhY2UiLCJvbkZpbHRlckFwcGx5IiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudENhdGVnb3J5IiwiZmluZCIsImN1ckNhdCIsInF1ZXJ5U3RyaW5nIiwibG9jYXRpb24iLCJzZWFyY2giLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUMvQixNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJLEVBQUUsYUFEUTtBQUVkQyxlQUFXLEVBQUUsYUFGQztBQUdkSixRQUFJLEVBQUUsSUFBSUssS0FBSixDQUFXLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQixJQUF0QyxFQUE2Q0MsSUFBN0MsR0FBb0RDLEdBQXBELENBQXdELFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVUsT0FBT0EsQ0FBakI7QUFBQSxLQUF4RCxDQUhRO0FBSWRDLGNBQVUsRUFBRVgsS0FBSyxDQUFDLGFBQUQsQ0FBTCxJQUF3QlksUUFBUSxDQUFDWixLQUFLLENBQUMsYUFBRCxDQUFOO0FBSjlCLEdBQUQsRUFNakI7QUFDSUUsUUFBSSxFQUFFLGdCQURWO0FBRUlDLGVBQVcsRUFBRSxtQkFGakI7QUFHSUosUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FIVjtBQUlJWSxjQUFVLEVBQUVYLEtBQUssQ0FBQyxnQkFBRDtBQUpyQixHQU5pQixFQVlqQjtBQUNJRSxRQUFJLEVBQUUsY0FEVjtBQUVJQyxlQUFXLEVBQUUsb0JBRmpCO0FBR0lKLFFBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULENBSFY7QUFJSVksY0FBVSxFQUFFWCxLQUFLLENBQUMsY0FBRDtBQUpyQixHQVppQixDQUFuQjs7QUFEK0Isa0JBb0JTYSxzREFBUSxDQUFDWixZQUFELENBcEJqQjtBQUFBLE1Bb0J0QmEsV0FwQnNCO0FBQUEsTUFvQlRDLGNBcEJTOztBQUFBLG1CQXFCT0Ysc0RBQVEsQ0FBQyxFQUFELENBckJmO0FBQUEsTUFxQnRCRyxVQXJCc0I7QUFBQSxNQXFCVkMsYUFyQlU7O0FBdUI3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGlCQUFhLENBQUNsQixJQUFELENBQWI7QUFDRCxHQUZRLEVBRU4sQ0FBQyxDQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFJb0IsVUFBVSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWpCOztBQUVBQSxZQUFVLGdCQUFHLHFFQUFDLHlFQUFEO0FBQVcsY0FBVSxFQUFFSDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWI7O0FBRUEsV0FBU0ksMEJBQVQsQ0FBb0NDLEdBQXBDLEVBQXlDQyxHQUF6QyxFQUE4Q0MsS0FBOUMsRUFBcUQ7QUFDbkQsUUFBSUMsRUFBRSxHQUFHLElBQUlDLE1BQUosQ0FBVyxXQUFXSCxHQUFYLEdBQWlCLFdBQTVCLEVBQXlDLEdBQXpDLENBQVQ7QUFDQSxRQUFJSSxTQUFTLEdBQUdMLEdBQUcsQ0FBQ00sT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUF0QixHQUEwQixHQUExQixHQUFnQyxHQUFoRDs7QUFDQSxRQUFJTixHQUFHLENBQUNPLEtBQUosQ0FBVUosRUFBVixDQUFKLEVBQW1CO0FBQ2pCLGFBQU9ILEdBQUcsQ0FBQ1EsT0FBSixDQUFZTCxFQUFaLEVBQWdCLE9BQU9GLEdBQVAsR0FBYSxHQUFiLEdBQW1CQyxLQUFuQixHQUEyQixJQUEzQyxDQUFQO0FBQ0QsS0FGRCxNQUdLO0FBQ0gsYUFBT0YsR0FBRyxHQUFHSyxTQUFOLEdBQWtCSixHQUFsQixHQUF3QixHQUF4QixHQUE4QkMsS0FBckM7QUFDRDtBQUNGOztBQUVELE1BQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXUixLQUFYLEVBQXFCO0FBQ3pDUyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCbkIsV0FBM0I7O0FBQ0EsUUFBTW9CLGVBQWUscUJBQVFwQixXQUFXLENBQUNxQixJQUFaLENBQWlCLFVBQUFDLE1BQU07QUFBQSxhQUFJQSxNQUFNLENBQUNsQyxJQUFQLEtBQWdCNkIsUUFBcEI7QUFBQSxLQUF2QixDQUFSLENBQXJCOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkMsZUFBL0IsRUFIeUMsQ0FLekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFJRyxXQUFXLEdBQUdqQiwwQkFBMEIsQ0FBQ2tCLFFBQVEsQ0FBQ0MsTUFBVixFQUFrQlIsUUFBbEIsRUFBNEJSLEtBQTVCLENBQTVDO0FBQ0FpQixVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQ0wsV0FBakM7QUFDQU0sU0FBSyxpREFBMENOLFdBQTFDLGdCQUFMLENBQXdFTyxJQUF4RSxDQUE2RSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUFyRixFQUEwR0YsSUFBMUcsQ0FDRSxVQUFDN0MsSUFBRCxFQUFVO0FBQ1JrQixtQkFBYSxDQUFDbEIsSUFBRCxDQUFiLENBRFEsQ0FHVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRTtBQUNELEtBWkg7QUFjRCxHQTlCRDs7QUFnQ0Ysc0JBQU87QUFBQSw0QkFDUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE8sZUFFTCxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQVksa0JBQVUsRUFBRWUsV0FBeEI7QUFBcUMscUJBQWEsRUFBRWdCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHWCxVQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBTVAscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5PO0FBQUEsa0JBQVA7QUFRRDs7R0FsRlFyQixROztLQUFBQSxROztBQWdHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjk1ZjFlODRmMGY2YzRlMDAyNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci5qcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IFhTUEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9YU1BGaWx0ZXJzLmpzJztcclxuaW1wb3J0IExhdWNoTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xhdW5jaExpc3QvTGF1bmNoTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7ZGF0YSwgcXVlcnl9KSB7XHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYXVuY2hfeWVhciddICYmIHBhcnNlSW50KHF1ZXJ5WydsYXVuY2hfeWVhciddKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhdW5jaF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYXVuY2hcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhdW5jaF9zdWNjZXNzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYW5kX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhbmRpbmdcIixcclxuICAgICAgICBkYXRhOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl0sXHJcbiAgICAgICAgYWN0aXZlSXRlbTogcXVlcnlbJ2xhbmRfc3VjY2VzcyddXHJcbiAgICB9XVxyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJTdGF0ZSwgc2V0RmlsdGVyU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFtzcGFjZVhEYXRhLCBzZXRTcGFjZVhEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKGRhdGEpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVjaExpc3QgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX0gLz5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmksIGtleSwgdmFsdWUpIHtcclxuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIihbPyZdKVwiICsga2V5ICsgXCI9Lio/KCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICB2YXIgc2VwYXJhdG9yID0gdXJpLmluZGV4T2YoJz8nKSAhPT0gLTEgPyBcIiZcIiA6IFwiP1wiO1xyXG4gICAgICBpZiAodXJpLm1hdGNoKHJlKSkge1xyXG4gICAgICAgIHJldHVybiB1cmkucmVwbGFjZShyZSwgJyQxJyArIGtleSArIFwiPVwiICsgdmFsdWUgKyAnJDInKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXJpICsgc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoY2F0ZWdvcnksIHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJTdGF0ZScsIGZpbHRlclN0YXRlKVxyXG4gICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSB7IC4uLmZpbHRlclN0YXRlLmZpbmQoY3VyQ2F0ID0+IGN1ckNhdC50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRDYXRlZ29yeScsIGN1cnJlbnRDYXRlZ29yeSlcclxuXHJcbiAgICAgIC8vIGlmIChjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSAmJiBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9PT0gdmFsdWUpIHtcclxuICAgICAgLy8gICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAvLyAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gbnVsbDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgIC8vICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSB2YWx1ZTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIobG9jYXRpb24uc2VhcmNoLCBjYXRlZ29yeSwgdmFsdWUpO1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgXCJcIiwgcXVlcnlTdHJpbmcpO1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXMke3F1ZXJ5U3RyaW5nfSZsaW1pdD0xMDBgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihcclxuICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0U3BhY2VYRGF0YShkYXRhKVxyXG5cclxuICAgICAgICAvLyAgIGNvbnN0IHVwZGF0ZWRBcnJheSA9IGZpbHRlclN0YXRlLm1hcChhID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGEudHlwZSA9PSAnbGF1bmNoX3llYXInIHx8IGEudHlwZSA9PT0gJ2xhdW5jaF9zdWNjZXNzJyB8fCBhLnR5cGUgPT09ICdsYW5kX3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgLy8gICAgICAgIGEuYWN0aXZlSXRlbSA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBhO1xyXG4gICAgICAgIC8vICB9KTtcclxuXHJcbiAgICAgICAgICAvL3NldEZpbHRlclN0YXRlKHVwZGF0ZWRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gPD5cclxuICA8SGVhZGVyIC8+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8WFNQRmlsdGVycyBmaWx0ZXJEYXRhPXtmaWx0ZXJTdGF0ZX0gb25GaWx0ZXJBcHBseT17b25GaWx0ZXJBcHBseX0gLz5cclxuICAgICAge2xhdW5jaExpc3R9XHJcbiAgICA8L0xheW91dD5cclxuICA8Rm9vdGVyIC8+XHJcbiAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KHF1ZXJ5KX0mbGltaXQ9MTAwYClcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBxdWVyeVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==