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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer.js */ "./components/Footer.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/XSPFilters.js */ "./components/XSPFilters.js");
/* harmony import */ var _components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LaunchList/LaunchList */ "./components/LaunchList/LaunchList.js");
/* harmony import */ var _helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helper/urlManipulation.js */ "./helper/urlManipulation.js");




var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function HomePage(_ref) {
  _s();

  var posts = _ref.posts;

  var queryString1 = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      filterState = _useState[0],
      setFilterState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      spaceXData = _useState2[0],
      setSpaceXData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_12__["getParam"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    launchData: spaceXData // dataLimit={this.state.dataLimit}
    // fetchMoreData={this.fetchMoreData}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 18
  }, this);

  var filterAllowedParams = function filterAllowedParams(queries, allowedParams) {
    return allowedParams.reduce(function (acc, param) {
      if (Object.prototype.hasOwnProperty.call(queries, param)) {
        acc[param] = queries[param];
      }

      return acc;
    }, {});
  };

  var history = Object(history__WEBPACK_IMPORTED_MODULE_4__["createHashHistory"])();

  var onFilterApply = function onFilterApply(key, value) {
    var pathname = location.pathname; // returns path: '/app/books'

    var searchParams = new URLSearchParams(location.search);
    console.log('searchParams', searchParams); // returns the existing query string: '?type=fiction&author=fahid'

    searchParams.set(key, value);
    history.push({
      pathname: pathname,
      search: searchParams.toString()
    });
  };

  var onFilterApply1 = function onFilterApply1(category, value) {
    var queryParam = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.parse(location.search);

    var newQueryParam = _objectSpread(_objectSpread({}, queryParam), {}, {
      launch_year: category === 'launch_year' ? value : ''
    }); // const currentQueries = {};
    // currentQueries[category] = value;
    // //const queryString = setParam(currentQueries);
    // //router.push("?" + queryString)
    // const history = createHashHistory()
    // const allowedQueriesParams = filterAllowedParams(currentQueries, ['launch_year', 'launch_success', 'land_success']);
    // const newQueryString = qs.stringify({ ...qs.parse(location.search), ...allowedQueriesParams });
    // const queryString = setParam(allowedQueriesParams);
    // //history.push(`${location.pathname}${queryString ? `?${queryString}` : ''}`);
    // history.push(queryString);
    // setUrlQuery(queryString);


    console.log('newQueryParam', newQueryParam); // const currentQueries = getParam(this.state.queryString);
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch("https://api.spaceXdata.com/v3/launches?".concat(urlQuery)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    });
    console.log('query', "https://api.spaceXdata.com/v3/launches?".concat(urlQuery));
  }, [urlQuery]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "abcu1199+mXZF0J+gnskta7qfPQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsInF1ZXJ5U3RyaW5nMSIsInJlcXVpcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbml0aWFsU3RhdGUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJkYXRhIiwiQXJyYXkiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmaWxsIiwibWFwIiwiYSIsImkiLCJ1c2VTdGF0ZSIsImZpbHRlclN0YXRlIiwic2V0RmlsdGVyU3RhdGUiLCJzcGFjZVhEYXRhIiwic2V0U3BhY2VYRGF0YSIsInVybFF1ZXJ5Iiwic2V0VXJsUXVlcnkiLCJjdXJyZW50UXVlcmllcyIsImdldFBhcmFtIiwidXNlRWZmZWN0IiwibGF1bmNoTGlzdCIsImZpbHRlckFsbG93ZWRQYXJhbXMiLCJxdWVyaWVzIiwiYWxsb3dlZFBhcmFtcyIsInJlZHVjZSIsImFjYyIsInBhcmFtIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaGlzdG9yeSIsImNyZWF0ZUhhc2hIaXN0b3J5Iiwib25GaWx0ZXJBcHBseSIsImtleSIsInZhbHVlIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJwdXNoIiwidG9TdHJpbmciLCJvbkZpbHRlckFwcGx5MSIsImNhdGVnb3J5IiwicXVlcnlQYXJhbSIsInFzIiwicGFyc2UiLCJuZXdRdWVyeVBhcmFtIiwibGF1bmNoX3llYXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7O0FBQ3pCLE1BQU1DLFlBQVksR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUE1Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLENBQUM7QUFDZEMsUUFBSSxFQUFFLGFBRFE7QUFFZEMsZUFBVyxFQUFFLGFBRkM7QUFHZEMsUUFBSSxFQUFFLElBQUlDLEtBQUosQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsS0FBMkIsSUFBdEMsRUFBNkNDLElBQTdDLEdBQW9EQyxHQUFwRCxDQUF3RCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVLE9BQU9BLENBQWpCO0FBQUEsS0FBeEQsQ0FIUSxDQUlkOztBQUpjLEdBQUQsRUFNakI7QUFDSVQsUUFBSSxFQUFFLGdCQURWO0FBRUlDLGVBQVcsRUFBRSxtQkFGakI7QUFHSUMsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FIVixDQUlJOztBQUpKLEdBTmlCLEVBWWpCO0FBQ0lGLFFBQUksRUFBRSxjQURWO0FBRUlDLGVBQVcsRUFBRSxvQkFGakI7QUFHSUMsUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FIVixDQUlJOztBQUpKLEdBWmlCLENBQW5COztBQUh5QixrQkFzQmVRLHNEQUFRLENBQUNYLFlBQUQsQ0F0QnZCO0FBQUEsTUFzQmhCWSxXQXRCZ0I7QUFBQSxNQXNCSEMsY0F0Qkc7O0FBQUEsbUJBdUJhRixzREFBUSxDQUFDLEVBQUQsQ0F2QnJCO0FBQUEsTUF1QmhCRyxVQXZCZ0I7QUFBQSxNQXVCSkMsYUF2Qkk7O0FBQUEsbUJBd0JTSixzREFBUSxFQXhCakI7QUFBQSxNQXdCaEJLLFFBeEJnQjtBQUFBLE1Bd0JOQyxXQXhCTTs7QUEwQnZCLE1BQU1DLGNBQWMsR0FBR0MsNEVBQVEsRUFBL0I7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLGlCQUFhLENBQUNwQixLQUFELENBQWI7QUFDRCxHQUZRLEVBRU4sQ0FBQyxDQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFJMEIsVUFBVSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWpCOztBQUVBQSxZQUFVLGdCQUFHLHFFQUFDLDBFQUFEO0FBQ0csY0FBVSxFQUFFUCxVQURmLENBRUc7QUFDQTs7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWI7O0FBTVksTUFBTVEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxPQUFELEVBQVVDLGFBQVYsRUFBNEI7QUFDdEQsV0FBT0EsYUFBYSxDQUFDQyxNQUFkLENBQXFCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMxQyxVQUFJQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsT0FBckMsRUFBOENJLEtBQTlDLENBQUosRUFBMEQ7QUFDeERELFdBQUcsQ0FBQ0MsS0FBRCxDQUFILEdBQWFKLE9BQU8sQ0FBQ0ksS0FBRCxDQUFwQjtBQUNEOztBQUNELGFBQU9ELEdBQVA7QUFDRCxLQUxNLEVBS0osRUFMSSxDQUFQO0FBTUQsR0FQRDs7QUFTQSxNQUFNTSxPQUFPLEdBQUdDLGlFQUFpQixFQUFqQzs7QUFDQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUVwQyxRQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0QsUUFBeEIsQ0FGb0MsQ0FHcEM7O0FBQ0EsUUFBSUUsWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JGLFFBQVEsQ0FBQ0csTUFBN0IsQ0FBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkosWUFBNUIsRUFMb0MsQ0FNcEM7O0FBQ0FBLGdCQUFZLENBQUNLLEdBQWIsQ0FBaUJULEdBQWpCLEVBQXNCQyxLQUF0QjtBQUNBSixXQUFPLENBQUNhLElBQVIsQ0FBYTtBQUNYUixjQUFRLEVBQUVBLFFBREM7QUFFWEksWUFBTSxFQUFFRixZQUFZLENBQUNPLFFBQWI7QUFGRyxLQUFiO0FBSUQsR0FaRDs7QUFjWixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBV1osS0FBWCxFQUFxQjtBQUUxQyxRQUFNYSxVQUFVLEdBQUdDLG1EQUFFLENBQUNDLEtBQUgsQ0FBU2IsUUFBUSxDQUFDRyxNQUFsQixDQUFuQjs7QUFDQSxRQUFNVyxhQUFhLG1DQUNkSCxVQURjO0FBRWpCSSxpQkFBVyxFQUFFTCxRQUFRLEtBQUssYUFBYixHQUE2QlosS0FBN0IsR0FBcUM7QUFGakMsTUFBbkIsQ0FIMEMsQ0FRMUM7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJTLGFBQTdCLEVBcEIwQyxDQXFCMUM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0F6Q0M7O0FBMkNGaEMseURBQVMsQ0FBQyxZQUFNO0FBQ2RrQyxTQUFLLGtEQUEyQ3RDLFFBQTNDLEVBQUwsQ0FBNER1QyxJQUE1RCxDQUFpRSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUF6RSxFQUE4RkYsSUFBOUYsQ0FBbUcsVUFBQXBELElBQUk7QUFBQSxhQUFJWSxhQUFhLENBQUNaLElBQUQsQ0FBakI7QUFBQSxLQUF2RztBQUNBdUMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixtREFBK0QzQixRQUEvRDtBQUNELEdBSFEsRUFHTixDQUFDQSxRQUFELENBSE0sQ0FBVDtBQUtBLHNCQUFPO0FBQUEsNEJBQ1AscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGVBRUwscUVBQUMsNkRBQUQ7QUFBQSw4QkFDRSxxRUFBQyxrRUFBRDtBQUFZLGtCQUFVLEVBQUVKLFdBQXhCO0FBQXFDLHFCQUFhLEVBQUVzQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR2IsVUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQU1QLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTztBQUFBLGtCQUFQO0FBUUQ7O0dBeEhRM0IsUTtVQUVRSyxxRDs7O0tBRlJMLFE7O0FBeUlNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTU4NDI5OTc3OTE1YzczMTJiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVIYXNoSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJhbSwgc2V0UGFyYW0gfSBmcm9tICcuLi9oZWxwZXIvdXJsTWFuaXB1bGF0aW9uLmpzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtwb3N0c30pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZzEgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGxldCBpbml0aWFsU3RhdGUgPSBbe1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3llYXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYXVuY2ggWWVhclwiLFxyXG4gICAgICAgIGRhdGE6IG5ldyBBcnJheSgobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMjAwNSkpLmZpbGwoKS5tYXAoKGEsIGkpID0+IDIwMDYgKyBpKSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSAmJiBwYXJzZUludCh0aGlzLnByb3BzLnF1ZXJ5W1wibGF1bmNoX3llYXJcIl0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGF1bmNoX3N1Y2Nlc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTdWNjZXNzZnVsIExhdW5jaFwiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfc3VjY2Vzc1wiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImxhbmRfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGFuZGluZ1wiLFxyXG4gICAgICAgIGRhdGE6IFtcInRydWVcIiwgXCJmYWxzZVwiXSxcclxuICAgICAgICAvL2FjdGl2ZUl0ZW06IHRoaXMucHJvcHMucXVlcnlbXCJsYW5kX3N1Y2Nlc3NcIl1cclxuICAgIH1dXHJcblxyXG4gICAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgW3NwYWNlWERhdGEsIHNldFNwYWNlWERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VybFF1ZXJ5LCBzZXRVcmxRdWVyeV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gZ2V0UGFyYW0oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTcGFjZVhEYXRhKHBvc3RzKTtcclxuICAgIH0sIFswXSlcclxuXHJcbiAgICBsZXQgbGF1bmNoTGlzdCA9IDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIGxhdW5jaExpc3QgPSA8TGF1Y2hMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoRGF0YT17c3BhY2VYRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhTGltaXQ9e3RoaXMuc3RhdGUuZGF0YUxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZldGNoTW9yZURhdGE9e3RoaXMuZmV0Y2hNb3JlRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyQWxsb3dlZFBhcmFtcyA9IChxdWVyaWVzLCBhbGxvd2VkUGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbGxvd2VkUGFyYW1zLnJlZHVjZSgoYWNjLCBwYXJhbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocXVlcmllcywgcGFyYW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NbcGFyYW1dID0gcXVlcmllc1twYXJhbV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyQXBwbHkgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHJldHVybnMgcGF0aDogJy9hcHAvYm9va3MnXHJcbiAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2hQYXJhbXMnLCBzZWFyY2hQYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIGV4aXN0aW5nIHF1ZXJ5IHN0cmluZzogJz90eXBlPWZpY3Rpb24mYXV0aG9yPWZhaGlkJ1xyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHNlYXJjaFBhcmFtcy50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5MSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW0gPSBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICBjb25zdCBuZXdRdWVyeVBhcmFtID0ge1xyXG4gICAgICAgIC4uLnF1ZXJ5UGFyYW0sXHJcbiAgICAgICAgbGF1bmNoX3llYXI6IGNhdGVnb3J5ID09PSAnbGF1bmNoX3llYXInID8gdmFsdWUgOiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25zdCBjdXJyZW50UXVlcmllcyA9IHt9O1xyXG4gICAgICAvLyBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSB2YWx1ZTtcclxuICAgICAgLy8gLy9jb25zdCBxdWVyeVN0cmluZyA9IHNldFBhcmFtKGN1cnJlbnRRdWVyaWVzKTtcclxuICAgICAgLy8gLy9yb3V0ZXIucHVzaChcIj9cIiArIHF1ZXJ5U3RyaW5nKVxyXG4gICAgICBcclxuICAgICAgLy8gY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KClcclxuICAgICAgLy8gY29uc3QgYWxsb3dlZFF1ZXJpZXNQYXJhbXMgPSBmaWx0ZXJBbGxvd2VkUGFyYW1zKGN1cnJlbnRRdWVyaWVzLCBbJ2xhdW5jaF95ZWFyJywgJ2xhdW5jaF9zdWNjZXNzJywgJ2xhbmRfc3VjY2VzcyddKTtcclxuICAgICAgLy8gY29uc3QgbmV3UXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkoeyAuLi5xcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gpLCAuLi5hbGxvd2VkUXVlcmllc1BhcmFtcyB9KTtcclxuICAgICAgLy8gY29uc3QgcXVlcnlTdHJpbmcgPSBzZXRQYXJhbShhbGxvd2VkUXVlcmllc1BhcmFtcyk7XHJcbiAgICAgIC8vIC8vaGlzdG9yeS5wdXNoKGAke2xvY2F0aW9uLnBhdGhuYW1lfSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6ICcnfWApO1xyXG4gICAgICAvLyBoaXN0b3J5LnB1c2gocXVlcnlTdHJpbmcpO1xyXG4gICAgICAvLyBzZXRVcmxRdWVyeShxdWVyeVN0cmluZyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCduZXdRdWVyeVBhcmFtJywgbmV3UXVlcnlQYXJhbSlcclxuICAgICAgLy8gY29uc3QgY3VycmVudFF1ZXJpZXMgPSBnZXRQYXJhbSh0aGlzLnN0YXRlLnF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gY29uc3QgY3VycmVudENhdGVnb3J5ID0geyAuLi50aGlzLnN0YXRlLmZpbHRlckRhdGEuZmluZChmaWx0ZXJDYXRlZ29yeSA9PiBmaWx0ZXJDYXRlZ29yeS50eXBlID09PSBjYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgIC8vIGlmIChjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSAmJiBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9PT0gdmFsdWUpIHtcclxuICAgICAgLy8gICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IG51bGw7XHJcbiAgICAgIC8vICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IG51bGw7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgICBjdXJyZW50Q2F0ZWdvcnkuYWN0aXZlSXRlbSA9IHZhbHVlO1xyXG4gICAgICAvLyAgICAgY3VycmVudFF1ZXJpZXNbY2F0ZWdvcnldID0gdmFsdWU7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gY29uc3QgcXVlcnlTdHJpbmcgPSBzZXRQYXJhbShjdXJyZW50UXVlcmllcyk7XHJcblxyXG4gICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIj9cIiArIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgICAgICBmaWx0ZXJEYXRhOiBwcmV2U3RhdGUuZmlsdGVyRGF0YS5tYXAoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkgPyBjdXJyZW50Q2F0ZWdvcnkgOiBmaWx0ZXJDYXRlZ29yeSksXHJcbiAgICAgIC8vICAgICAgICAgcXVlcnlTdHJpbmc6IHF1ZXJ5U3RyaW5nXHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzPyR7dXJsUXVlcnl9YCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBzZXRTcGFjZVhEYXRhKGRhdGEpKTtcclxuICAgIGNvbnNvbGUubG9nKCdxdWVyeScsIGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3VybFF1ZXJ5fWApXHJcbiAgfSwgW3VybFF1ZXJ5XSlcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWRlciAvPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFhTUEZpbHRlcnMgZmlsdGVyRGF0YT17ZmlsdGVyU3RhdGV9IG9uRmlsdGVyQXBwbHk9e29uRmlsdGVyQXBwbHl9IC8+XHJcbiAgICAgIHtsYXVuY2hMaXN0fVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPEZvb3RlciAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/bGltaXQ9MTAwJylcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==