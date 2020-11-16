webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");





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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      filterState = _useState[0],
      setFilterState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      spaceXData = _useState2[0],
      setSpaceXData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setSpaceXData(data);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

      var idx = filterState.findIndex(function (item) {
        return item.id === currentCategory.id;
      });
      filterState = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("filterState"), [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterState.slice(0, idx)), [currentCategory], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterState.slice(idx + 1))));
      console.log(filterState);
      setFilterState(filterState);
      console.log('filterState2', filterState);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZGF0YSIsInF1ZXJ5IiwiaW5pdGlhbFN0YXRlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwiQXJyYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmaWxsIiwibWFwIiwiYSIsImkiLCJhY3RpdmVJdGVtIiwicGFyc2VJbnQiLCJ1c2VTdGF0ZSIsImZpbHRlclN0YXRlIiwic2V0RmlsdGVyU3RhdGUiLCJzcGFjZVhEYXRhIiwic2V0U3BhY2VYRGF0YSIsInVzZUVmZmVjdCIsImxhdW5jaExpc3QiLCJ1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlciIsInVyaSIsImtleSIsInZhbHVlIiwicmUiLCJSZWdFeHAiLCJzZXBhcmF0b3IiLCJpbmRleE9mIiwibWF0Y2giLCJyZXBsYWNlIiwib25GaWx0ZXJBcHBseSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRDYXRlZ29yeSIsImZpbmQiLCJjdXJDYXQiLCJxdWVyeVN0cmluZyIsImxvY2F0aW9uIiwic2VhcmNoIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImlkeCIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUMvQixNQUFJQyxZ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QUFBLFlBRkssZUFNUCxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTk87QUFBQSxrQkFBUDtBQVFEOztHQXpGUXJCLFE7O0tBQUFBLFE7O0FBdUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OWEyYTg5YmYzOWYwMmE2NmI5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2Uoe2RhdGEsIHF1ZXJ5fSkge1xyXG4gIGxldCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3llYXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYXVuY2ggWWVhclwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSgobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjAwNSkpLmZpbGwoKS5tYXAoKGEsIGkpID0+IDIwMDYgKyBpKSxcclxuICAgICAgICBhY3RpdmVJdGVtOiBxdWVyeVsnbGF1bmNoX3llYXInXSAmJiBwYXJzZUludChxdWVyeVsnbGF1bmNoX3llYXInXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYXVuY2hfc3VjY2VzcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIGFjdGl2ZUl0ZW06IHF1ZXJ5WydsYW5kX3N1Y2Nlc3MnXVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3BhY2VYRGF0YShkYXRhKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0IGxhdW5jaERhdGE9e3NwYWNlWERhdGF9IC8+XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJpLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCQpXCIsIFwiaVwiKTtcclxuICAgICAgdmFyIHNlcGFyYXRvciA9IHVyaS5pbmRleE9mKCc/JykgIT09IC0xID8gXCImXCIgOiBcIj9cIjtcclxuICAgICAgaWYgKHVyaS5tYXRjaChyZSkpIHtcclxuICAgICAgICByZXR1cm4gdXJpLnJlcGxhY2UocmUsICckMScgKyBrZXkgKyBcIj1cIiArIHZhbHVlICsgJyQyJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVyaSArIHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5ID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmlsdGVyU3RhdGUxJywgZmlsdGVyU3RhdGUpXHJcbiAgICAgIC8vY29uc3QgY3VycmVudENhdGVnb3J5ID0geyAuLi5maWx0ZXJTdGF0ZS5maW5kKGN1ckNhdCA9PiBjdXJDYXQudHlwZSA9PT0gY2F0ZWdvcnkpIH07XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBmaWx0ZXJTdGF0ZS5maW5kKGN1ckNhdCA9PiBjdXJDYXQudHlwZSA9PT0gY2F0ZWdvcnkpO1xyXG4gICAgICBjb25zb2xlLmxvZygnY3VycmVudENhdGVnb3J5JywgY3VycmVudENhdGVnb3J5KVxyXG5cclxuICAgICAgLy8gaWYgKGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtICYmIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID09PSB2YWx1ZSkge1xyXG4gICAgICAvLyAgIGN1cnJlbnRDYXRlZ29yeS5hY3RpdmVJdGVtID0gbnVsbDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IHZhbHVlO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICB2YXIgcXVlcnlTdHJpbmcgPSB1cGRhdGVRdWVyeVN0cmluZ1BhcmFtZXRlcihsb2NhdGlvbi5zZWFyY2gsIGNhdGVnb3J5LCB2YWx1ZSk7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBcIlwiLCBxdWVyeVN0cmluZyk7XHJcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcyR7cXVlcnlTdHJpbmd9JmxpbWl0PTEwMGApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKFxyXG4gICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRTcGFjZVhEYXRhKGRhdGEpXHJcblxyXG4gICAgICAgIC8vICAgY29uc3QgdXBkYXRlZEFycmF5ID0gZmlsdGVyU3RhdGUubWFwKGEgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoYS50eXBlID09ICdsYXVuY2hfeWVhcicgfHwgYS50eXBlID09PSAnbGF1bmNoX3N1Y2Nlc3MnIHx8IGEudHlwZSA9PT0gJ2xhbmRfc3VjY2VzcycpIHtcclxuICAgICAgICAvLyAgICAgICAgYS5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgLy8gIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpZHggPSBmaWx0ZXJTdGF0ZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBjdXJyZW50Q2F0ZWdvcnkuaWQpO1xyXG5cclxuICAgICAgICBmaWx0ZXJTdGF0ZSA9IFsuLi5maWx0ZXJTdGF0ZS5zbGljZSgwLCBpZHgpLCBjdXJyZW50Q2F0ZWdvcnksIC4uLmZpbHRlclN0YXRlLnNsaWNlKGlkeCArIDEpXTtcclxuXHJcbmNvbnNvbGUubG9nKGZpbHRlclN0YXRlKTtcclxuXHJcbiAgICAgICAgICBzZXRGaWx0ZXJTdGF0ZShmaWx0ZXJTdGF0ZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmlsdGVyU3RhdGUyJywgZmlsdGVyU3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gPD5cclxuICA8SGVhZGVyIC8+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8WFNQRmlsdGVycyBmaWx0ZXJEYXRhPXtmaWx0ZXJTdGF0ZX0gb25GaWx0ZXJBcHBseT17b25GaWx0ZXJBcHBseX0gLz5cclxuICAgICAge2xhdW5jaExpc3R9XHJcbiAgICA8L0xheW91dD5cclxuICA8Rm9vdGVyIC8+XHJcbiAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5fSkge1xyXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KHF1ZXJ5KX0mbGltaXQ9MTAwYClcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBxdWVyeVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==