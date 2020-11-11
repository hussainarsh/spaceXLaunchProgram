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

  var queryString1 = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      urlQuery = _useState3[0],
      setUrlQuery = _useState3[1];

  var currentQueries = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_9__["getParam"])();

  function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
      if (typeof value !== 'undefined' && value !== null) {
        return url.replace(re, '$1' + key + "=" + value + '$2$3');
      } else {
        hash = url.split('#');
        url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');

        if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
          url += '#' + hash[1];
        }

        return url;
      }
    } else {
      if (typeof value !== 'undefined' && value !== null) {
        var separator = url.indexOf('?') !== -1 ? '&' : '?';
        hash = url.split('#');
        url = hash[0] + separator + key + '=' + value;

        if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
          url += '#' + hash[1];
        }

        return url;
      } else {
        return url;
      }
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSpaceXData(posts);
  }, [0]);

  var launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 22
  }, this);

  launchList = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchList_LaunchList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    launchData: spaceXData // dataLimit={this.state.dataLimit}
    // fetchMoreData={this.fetchMoreData}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 18
  }, this);

  var onFilterApply = function onFilterApply(category, value) {
    var currentQueries = [];
    currentQueries[category] = value;
    var queryString = Object(_helper_urlManipulation_js__WEBPACK_IMPORTED_MODULE_9__["setParam"])(currentQueries);
    router.push("?" + queryString);
    setUrlQuery(queryString);
    var heelo = updateQueryStringParameter(category, value, window.location.href);
    console.log('heelo', heelo);
    setUrlQuery(queryString);
    console.log("searchwa", location.search); // if (error) return <div>failed to load</div>
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
    fetch("https://api.spaceXdata.com/v3/launches?".concat(urlQuery)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setSpaceXData(data);
    });
    console.log('query', "https://api.spaceXdata.com/v3/launches?".concat(urlQuery));
  }, [urlQuery]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_XSPFilters_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        filterData: filterState,
        onFilterApply: onFilterApply
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }, this), launchList]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 3
    }, this)]
  }, void 0, true);
}

_s(HomePage, "3tzuCSFUvY6+uBpNoNX2Wfxs99Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwb3N0cyIsInF1ZXJ5U3RyaW5nMSIsInJlcXVpcmUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImRhdGEiLCJBcnJheSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZpbGwiLCJtYXAiLCJhIiwiaSIsInVzZVN0YXRlIiwiZmlsdGVyU3RhdGUiLCJzZXRGaWx0ZXJTdGF0ZSIsInNwYWNlWERhdGEiLCJzZXRTcGFjZVhEYXRhIiwidXJsUXVlcnkiLCJzZXRVcmxRdWVyeSIsImN1cnJlbnRRdWVyaWVzIiwiZ2V0UGFyYW0iLCJVcGRhdGVRdWVyeVN0cmluZyIsImtleSIsInZhbHVlIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmUiLCJSZWdFeHAiLCJoYXNoIiwidGVzdCIsInJlcGxhY2UiLCJzcGxpdCIsInNlcGFyYXRvciIsImluZGV4T2YiLCJ1c2VFZmZlY3QiLCJsYXVuY2hMaXN0Iiwib25GaWx0ZXJBcHBseSIsImNhdGVnb3J5IiwicXVlcnlTdHJpbmciLCJzZXRQYXJhbSIsInB1c2giLCJoZWVsbyIsInVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyIiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUN6QixNQUFNQyxZQUFZLEdBQUdDLG1CQUFPLENBQUMsMERBQUQsQ0FBNUI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxZQUFZLEdBQUcsQ0FBQztBQUNkQyxRQUFJLEVBQUUsYUFEUTtBQUVkQyxlQUFXLEVBQUUsYUFGQztBQUdkQyxRQUFJLEVBQUUsSUFBSUMsS0FBSixDQUFXLElBQUlDLElBQUosR0FBV0MsV0FBWCxLQUEyQixJQUF0QyxFQUE2Q0MsSUFBN0MsR0FBb0RDLEdBQXBELENBQXdELFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVUsT0FBT0EsQ0FBakI7QUFBQSxLQUF4RCxDQUhRLENBSWQ7O0FBSmMsR0FBRCxFQU1qQjtBQUNJVCxRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsZUFBVyxFQUFFLG1CQUZqQjtBQUdJQyxRQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUhWLENBSUk7O0FBSkosR0FOaUIsRUFZakI7QUFDSUYsUUFBSSxFQUFFLGNBRFY7QUFFSUMsZUFBVyxFQUFFLG9CQUZqQjtBQUdJQyxRQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUhWLENBSUk7O0FBSkosR0FaaUIsQ0FBbkI7O0FBSnlCLGtCQXVCZVEsc0RBQVEsQ0FBQ1gsWUFBRCxDQXZCdkI7QUFBQSxNQXVCaEJZLFdBdkJnQjtBQUFBLE1BdUJIQyxjQXZCRzs7QUFBQSxtQkF3QmFGLHNEQUFRLENBQUMsRUFBRCxDQXhCckI7QUFBQSxNQXdCaEJHLFVBeEJnQjtBQUFBLE1Bd0JKQyxhQXhCSTs7QUFBQSxtQkF5QlNKLHNEQUFRLEVBekJqQjtBQUFBLE1BeUJoQkssUUF6QmdCO0FBQUEsTUF5Qk5DLFdBekJNOztBQTJCdkIsTUFBTUMsY0FBYyxHQUFHQywyRUFBUSxFQUEvQjs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQkMsR0FBM0IsRUFBZ0NDLEtBQWhDLEVBQXVDQyxHQUF2QyxFQUE0QztBQUMxQyxRQUFJLENBQUNBLEdBQUwsRUFBVUEsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQXRCO0FBQ1YsUUFBSUMsRUFBRSxHQUFHLElBQUlDLE1BQUosQ0FBVyxXQUFXUCxHQUFYLEdBQWlCLGlCQUE1QixFQUErQyxJQUEvQyxDQUFUO0FBQUEsUUFDSVEsSUFESjs7QUFHQSxRQUFJRixFQUFFLENBQUNHLElBQUgsQ0FBUVAsR0FBUixDQUFKLEVBQWtCO0FBQ2QsVUFBSSxPQUFPRCxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQSxLQUFLLEtBQUssSUFBOUMsRUFBb0Q7QUFDaEQsZUFBT0MsR0FBRyxDQUFDUSxPQUFKLENBQVlKLEVBQVosRUFBZ0IsT0FBT04sR0FBUCxHQUFhLEdBQWIsR0FBbUJDLEtBQW5CLEdBQTJCLE1BQTNDLENBQVA7QUFDSCxPQUZELE1BR0s7QUFDRE8sWUFBSSxHQUFHTixHQUFHLENBQUNTLEtBQUosQ0FBVSxHQUFWLENBQVA7QUFDQVQsV0FBRyxHQUFHTSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLE9BQVIsQ0FBZ0JKLEVBQWhCLEVBQW9CLE1BQXBCLEVBQTRCSSxPQUE1QixDQUFvQyxTQUFwQyxFQUErQyxFQUEvQyxDQUFOOztBQUNBLFlBQUksT0FBT0YsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUFuQixJQUFrQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLElBQWxELEVBQXdEO0FBQ3BETixhQUFHLElBQUksTUFBTU0sSUFBSSxDQUFDLENBQUQsQ0FBakI7QUFDSDs7QUFDRCxlQUFPTixHQUFQO0FBQ0g7QUFDSixLQVpELE1BYUs7QUFDRCxVQUFJLE9BQU9ELEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NBLEtBQUssS0FBSyxJQUE5QyxFQUFvRDtBQUNoRCxZQUFJVyxTQUFTLEdBQUdWLEdBQUcsQ0FBQ1csT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUF0QixHQUEwQixHQUExQixHQUFnQyxHQUFoRDtBQUNBTCxZQUFJLEdBQUdOLEdBQUcsQ0FBQ1MsS0FBSixDQUFVLEdBQVYsQ0FBUDtBQUNBVCxXQUFHLEdBQUdNLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUksU0FBVixHQUFzQlosR0FBdEIsR0FBNEIsR0FBNUIsR0FBa0NDLEtBQXhDOztBQUNBLFlBQUksT0FBT08sSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUFuQixJQUFrQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLElBQWxELEVBQXdEO0FBQ3BETixhQUFHLElBQUksTUFBTU0sSUFBSSxDQUFDLENBQUQsQ0FBakI7QUFDSDs7QUFDRCxlQUFPTixHQUFQO0FBQ0gsT0FSRCxNQVNLO0FBQ0QsZUFBT0EsR0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFQ1kseURBQVMsQ0FBQyxZQUFNO0FBQ2RwQixpQkFBYSxDQUFDdEIsS0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUMsQ0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBSTJDLFVBQVUsZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFqQjs7QUFFQUEsWUFBVSxnQkFBRyxxRUFBQyx5RUFBRDtBQUNHLGNBQVUsRUFBRXRCLFVBRGYsQ0FFRztBQUNBOztBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBYjs7QUFNQSxNQUFNdUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFELEVBQVdoQixLQUFYLEVBQXFCO0FBRTNDLFFBQU1KLGNBQWMsR0FBRyxFQUF2QjtBQUNBQSxrQkFBYyxDQUFDb0IsUUFBRCxDQUFkLEdBQTJCaEIsS0FBM0I7QUFDQSxRQUFNaUIsV0FBVyxHQUFHQywyRUFBUSxDQUFDdEIsY0FBRCxDQUE1QjtBQUNBcEIsVUFBTSxDQUFDMkMsSUFBUCxDQUFZLE1BQU1GLFdBQWxCO0FBQ0F0QixlQUFXLENBQUNzQixXQUFELENBQVg7QUFDQSxRQUFJRyxLQUFLLEdBQUdDLDBCQUEwQixDQUFDTCxRQUFELEVBQVdoQixLQUFYLEVBQWtCRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWxDLENBQXRDO0FBQ0FrQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSCxLQUFyQjtBQUNBekIsZUFBVyxDQUFDc0IsV0FBRCxDQUFYO0FBRUFLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JwQixRQUFRLENBQUNxQixNQUFqQyxFQVgyQyxDQWF6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQXBDQzs7QUFzQ0ZYLHlEQUFTLENBQUMsWUFBTTtBQUNkWSxTQUFLLGtEQUEyQy9CLFFBQTNDLEVBQUwsQ0FBNERnQyxJQUE1RCxDQUFpRSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUF6RSxFQUE4RkYsSUFBOUYsQ0FBbUcsVUFBQTdDLElBQUk7QUFBQSxhQUFJWSxhQUFhLENBQUNaLElBQUQsQ0FBakI7QUFBQSxLQUF2RztBQUNBeUMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixtREFBK0Q3QixRQUEvRDtBQUNELEdBSFEsRUFHTixDQUFDQSxRQUFELENBSE0sQ0FBVDtBQUtBLHNCQUFPO0FBQUEsNEJBQ1AscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGVBRUwscUVBQUMsNkRBQUQ7QUFBQSw4QkFDRSxxRUFBQyxpRUFBRDtBQUFZLGtCQUFVLEVBQUVKLFdBQXhCO0FBQXFDLHFCQUFhLEVBQUV5QjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0QsVUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSyxlQU1QLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTztBQUFBLGtCQUFQO0FBUUQ7O0dBOUhRNUMsUTtVQUVTSywyRCxFQUNERSxxRDs7O0tBSFJQLFE7O0FBK0lNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NGQ3ZjcxMDNiMWUyYmJiMDAwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBYU1BGaWx0ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvWFNQRmlsdGVycy5qcyc7XHJcbmltcG9ydCBMYXVjaExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJhbSwgc2V0UGFyYW0gfSBmcm9tICcuLi9oZWxwZXIvdXJsTWFuaXB1bGF0aW9uLmpzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHtwb3N0c30pIHtcclxuICBjb25zdCBxdWVyeVN0cmluZzEgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IFt7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfeWVhclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhdW5jaCBZZWFyXCIsXHJcbiAgICAgICAgZGF0YTogbmV3IEFycmF5KChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDA1KSkuZmlsbCgpLm1hcCgoYSwgaSkgPT4gMjAwNiArIGkpLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF95ZWFyXCJdICYmIHBhcnNlSW50KHRoaXMucHJvcHMucXVlcnlbXCJsYXVuY2hfeWVhclwiXSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJsYXVuY2hfc3VjY2Vzc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN1Y2Nlc3NmdWwgTGF1bmNoXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhdW5jaF9zdWNjZXNzXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwibGFuZF9zdWNjZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3VjY2Vzc2Z1bCBMYW5kaW5nXCIsXHJcbiAgICAgICAgZGF0YTogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxyXG4gICAgICAgIC8vYWN0aXZlSXRlbTogdGhpcy5wcm9wcy5xdWVyeVtcImxhbmRfc3VjY2Vzc1wiXVxyXG4gICAgfV1cclxuXHJcbiAgICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbc3BhY2VYRGF0YSwgc2V0U3BhY2VYRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXJsUXVlcnksIHNldFVybFF1ZXJ5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFF1ZXJpZXMgPSBnZXRQYXJhbSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFVwZGF0ZVF1ZXJ5U3RyaW5nKGtleSwgdmFsdWUsIHVybCkge1xyXG4gICAgICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCN8JCkoLiopXCIsIFwiZ2lcIiksXHJcbiAgICAgICAgICBoYXNoO1xyXG4gIFxyXG4gICAgICBpZiAocmUudGVzdCh1cmwpKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB1cmwucmVwbGFjZShyZSwgJyQxJyArIGtleSArIFwiPVwiICsgdmFsdWUgKyAnJDIkMycpO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhhc2ggPSB1cmwuc3BsaXQoJyMnKTtcclxuICAgICAgICAgICAgICB1cmwgPSBoYXNoWzBdLnJlcGxhY2UocmUsICckMSQzJykucmVwbGFjZSgvKCZ8XFw/KSQvLCAnJyk7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoWzFdICE9PSAndW5kZWZpbmVkJyAmJiBoYXNoWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gdXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XHJcbiAgICAgICAgICAgICAgaGFzaCA9IHVybC5zcGxpdCgnIycpO1xyXG4gICAgICAgICAgICAgIHVybCA9IGhhc2hbMF0gKyBzZXBhcmF0b3IgKyBrZXkgKyAnPScgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldFNwYWNlWERhdGEocG9zdHMpO1xyXG4gICAgfSwgWzBdKVxyXG5cclxuICAgIGxldCBsYXVuY2hMaXN0ID0gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgbGF1bmNoTGlzdCA9IDxMYXVjaExpc3RcclxuICAgICAgICAgICAgICAgICAgICBsYXVuY2hEYXRhPXtzcGFjZVhEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGFMaW1pdD17dGhpcy5zdGF0ZS5kYXRhTGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2hNb3JlRGF0YT17dGhpcy5mZXRjaE1vcmVEYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICBjb25zdCBvbkZpbHRlckFwcGx5ID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gW107XHJcbiAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSB2YWx1ZTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG4gICAgcm91dGVyLnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZylcclxuICAgIHNldFVybFF1ZXJ5KHF1ZXJ5U3RyaW5nKTtcclxuICAgIGxldCBoZWVsbyA9IHVwZGF0ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKGNhdGVnb3J5LCB2YWx1ZSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgY29uc29sZS5sb2coJ2hlZWxvJywgaGVlbG8pXHJcbiAgICBzZXRVcmxRdWVyeShxdWVyeVN0cmluZyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzZWFyY2h3YVwiLCBsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgLy8gaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PlxyXG4gICAgICAvLyBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgLy8gcmV0dXJuIDxkaXY+aGVsbG8ge2RhdGEubmFtZX0hPC9kaXY+XHJcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRRdWVyaWVzID0gZ2V0UGFyYW0odGhpcy5zdGF0ZS5xdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IHsgLi4udGhpcy5zdGF0ZS5maWx0ZXJEYXRhLmZpbmQoZmlsdGVyQ2F0ZWdvcnkgPT4gZmlsdGVyQ2F0ZWdvcnkudHlwZSA9PT0gY2F0ZWdvcnkpIH07XHJcblxyXG4gICAgICAvLyBpZiAoY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gJiYgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPT09IHZhbHVlKSB7XHJcbiAgICAgIC8vICAgICBjdXJyZW50UXVlcmllc1tjYXRlZ29yeV0gPSBudWxsO1xyXG4gICAgICAvLyAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAvLyAgICAgY3VycmVudENhdGVnb3J5LmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgLy8gICAgIGN1cnJlbnRRdWVyaWVzW2NhdGVnb3J5XSA9IHZhbHVlO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGNvbnN0IHF1ZXJ5U3RyaW5nID0gc2V0UGFyYW0oY3VycmVudFF1ZXJpZXMpO1xyXG5cclxuICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCI/XCIgKyBxdWVyeVN0cmluZyk7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICAgICAgZmlsdGVyRGF0YTogcHJldlN0YXRlLmZpbHRlckRhdGEubWFwKGZpbHRlckNhdGVnb3J5ID0+IGZpbHRlckNhdGVnb3J5LnR5cGUgPT09IGNhdGVnb3J5ID8gY3VycmVudENhdGVnb3J5IDogZmlsdGVyQ2F0ZWdvcnkpLFxyXG4gICAgICAvLyAgICAgICAgIHF1ZXJ5U3RyaW5nOiBxdWVyeVN0cmluZ1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKGBodHRwczovL2FwaS5zcGFjZVhkYXRhLmNvbS92My9sYXVuY2hlcz8ke3VybFF1ZXJ5fWApLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gc2V0U3BhY2VYRGF0YShkYXRhKSk7XHJcbiAgICBjb25zb2xlLmxvZygncXVlcnknLCBgaHR0cHM6Ly9hcGkuc3BhY2VYZGF0YS5jb20vdjMvbGF1bmNoZXM/JHt1cmxRdWVyeX1gKVxyXG4gIH0sIFt1cmxRdWVyeV0pXHJcblxyXG4gIHJldHVybiA8PlxyXG4gIDxIZWFkZXIgLz5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxYU1BGaWx0ZXJzIGZpbHRlckRhdGE9e2ZpbHRlclN0YXRlfSBvbkZpbHRlckFwcGx5PXtvbkZpbHRlckFwcGx5fSAvPlxyXG4gICAgICB7bGF1bmNoTGlzdH1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDxGb290ZXIgLz5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5cclxuICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwYWNlWGRhdGEuY29tL3YzL2xhdW5jaGVzP2xpbWl0PTEwMCcpXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcclxuICAvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=