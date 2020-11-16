webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LaunchList/LaunchList.js":
/*!*********************************************!*\
  !*** ./components/LaunchList/LaunchList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LaunchItem_LaunchItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LaunchItem/LaunchItem */ "./components/LaunchList/LaunchItem/LaunchItem.js");
/* harmony import */ var _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LaunchList.module.css */ "./components/LaunchList/LaunchList.module.css");
/* harmony import */ var _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_LaunchList_module_css__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\Ayan Hussian\\space\\components\\LaunchList\\LaunchList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var LauchList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LauchList, _React$Component);

  var _super = _createSuper(LauchList);

  function LauchList() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LauchList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      slicedIndex: 12
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "lastElement", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef(null));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "observer", null);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LauchList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.slicedIndex < this.props.launchData.length) {
        this.createIntersectionObserver();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.slicedIndex < this.props.launchData.length && !this.observer) {
        this.createIntersectionObserver();
      } else if (this.state.slicedIndex >= this.props.dataLimit && this.props.launchData.length === this.props.dataLimit) {
        this.props.fetchMoreData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer && this.observer.disconnect();
    }
  }, {
    key: "createIntersectionObserver",
    value: function createIntersectionObserver() {
      var _this2 = this;

      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var isIntersecting = entry.isIntersecting;

          if (isIntersecting) {
            if (_this2.state.slicedIndex < _this2.props.launchData.length) {
              _this2.lastElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef(null);
              _this2.observer = _this2.observer.disconnect();

              _this2.setState(function (prevState) {
                return {
                  slicedIndex: prevState.slicedIndex + 12
                };
              });
            }
          }
        });
      }, {
        rootMargin: '0px 0px 1000px 0px'
      });
      this.observer.observe(this.lastElement.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var launchItems;

      if (this.props.launchData && this.props.launchData.length) {
        launchItems = this.props.launchData.slice(0, this.state.slicedIndex).map(function (data, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_LaunchItem_LaunchItem__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
            mission_patch_small: data.links.mission_patch_small,
            mission_name: data.mission_name,
            mission_id: data.mission_id,
            launch_year: data.launch_year,
            launch_success: data.launch_success,
            landing_success: data.landing_success,
            flight_number: data.flight_number
          }, i === _this3.state.slicedIndex - 1 && {
            ref: _this3.lastElement
          }), data.flight_number, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 24
          }, _this3);
        });
      } else {
        launchItems = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.noData,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
            children: "No records found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 58
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 27
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: _LaunchList_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.launchList,
        children: launchItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this);
    }
  }]);

  return LauchList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LauchList);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hMaXN0L0xhdW5jaExpc3QuanMiXSwibmFtZXMiOlsiTGF1Y2hMaXN0Iiwic2xpY2VkSW5kZXgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN0YXRlIiwicHJvcHMiLCJsYXVuY2hEYXRhIiwibGVuZ3RoIiwiY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImRhdGFMaW1pdCIsImZldGNoTW9yZURhdGEiLCJkaXNjb25uZWN0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJsYXN0RWxlbWVudCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwicm9vdE1hcmdpbiIsIm9ic2VydmUiLCJjdXJyZW50IiwibGF1bmNoSXRlbXMiLCJzbGljZSIsIm1hcCIsImRhdGEiLCJpIiwibGlua3MiLCJtaXNzaW9uX3BhdGNoX3NtYWxsIiwibWlzc2lvbl9uYW1lIiwibWlzc2lvbl9pZCIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJsYW5kaW5nX3N1Y2Nlc3MiLCJmbGlnaHRfbnVtYmVyIiwicmVmIiwic3R5bGVzIiwibm9EYXRhIiwibGF1bmNoTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxpQkFBVyxFQUFFO0FBRFQsSzs7bU9BR01DLDRDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsSUFBaEIsQzs7bU5BQ0gsSTs7Ozs7Ozt3Q0FFUztBQUNoQixVQUFJLEtBQUtDLEtBQUwsQ0FBV0gsV0FBWCxHQUF5QixLQUFLSSxLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLE1BQW5ELEVBQTJEO0FBQ3ZELGFBQUtDLDBCQUFMO0FBQ0g7QUFDSjs7O3lD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QStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWQ7QUFDSDs7QUFFRCwwQkFDSTtBQUFLLGlCQUFTLEVBQUVELDhEQUFNLENBQUNFLFVBQXZCO0FBQUEsa0JBQ01oQjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUtIOzs7O0VBMUVtQnRCLDRDQUFLLENBQUN1QyxTOztBQTZFZnpDLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljNjQ1YmMyYWJkN2ZiZjBmMTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhdW5jaEl0ZW0gZnJvbSAnLi9MYXVuY2hJdGVtL0xhdW5jaEl0ZW0nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF1bmNoTGlzdC5tb2R1bGUuY3NzJztcblxuY2xhc3MgTGF1Y2hMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzbGljZWRJbmRleDogMTIsXG4gICAgfVxuICAgIGxhc3RFbGVtZW50ID0gUmVhY3QuY3JlYXRlUmVmKG51bGwpO1xuICAgIG9ic2VydmVyID0gbnVsbDtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGljZWRJbmRleCA8IHRoaXMucHJvcHMubGF1bmNoRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWNlZEluZGV4IDwgdGhpcy5wcm9wcy5sYXVuY2hEYXRhLmxlbmd0aCAmJiAhdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpY2VkSW5kZXggPj0gdGhpcy5wcm9wcy5kYXRhTGltaXQgJiYgdGhpcy5wcm9wcy5sYXVuY2hEYXRhLmxlbmd0aCA9PT0gdGhpcy5wcm9wcy5kYXRhTGltaXQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hNb3JlRGF0YSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc0ludGVyc2VjdGluZyB9ID0gZW50cnk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWNlZEluZGV4IDwgdGhpcy5wcm9wcy5sYXVuY2hEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RWxlbWVudCA9IFJlYWN0LmNyZWF0ZVJlZihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlZEluZGV4OiBwcmV2U3RhdGUuc2xpY2VkSW5kZXggKyAxMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IDEwMDBweCAwcHgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmxhc3RFbGVtZW50LmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhdW5jaEl0ZW1zO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXVuY2hEYXRhICYmIHRoaXMucHJvcHMubGF1bmNoRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxhdW5jaEl0ZW1zID0gdGhpcy5wcm9wcy5sYXVuY2hEYXRhLnNsaWNlKDAsIHRoaXMuc3RhdGUuc2xpY2VkSW5kZXgpLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TGF1bmNoSXRlbVxuICAgICAgICAgICAgICAgICAgICBtaXNzaW9uX3BhdGNoX3NtYWxsPXtkYXRhLmxpbmtzLm1pc3Npb25fcGF0Y2hfc21hbGx9XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npb25fbmFtZT17ZGF0YS5taXNzaW9uX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npb25faWQ9e2RhdGEubWlzc2lvbl9pZH1cbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoX3llYXI9e2RhdGEubGF1bmNoX3llYXJ9XG4gICAgICAgICAgICAgICAgICAgIGxhdW5jaF9zdWNjZXNzPXtkYXRhLmxhdW5jaF9zdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICBsYW5kaW5nX3N1Y2Nlc3M9e2RhdGEubGFuZGluZ19zdWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICBmbGlnaHRfbnVtYmVyPXtkYXRhLmZsaWdodF9udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5mbGlnaHRfbnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICB7Li4uKGkgPT09ICh0aGlzLnN0YXRlLnNsaWNlZEluZGV4IC0gMSkgJiYgeyByZWY6IHRoaXMubGFzdEVsZW1lbnQgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhdW5jaEl0ZW1zID0gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub0RhdGF9PjxoMj5ObyByZWNvcmRzIGZvdW5kPC9oMj48L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhdW5jaExpc3R9PlxuICAgICAgICAgICAgICAgIHsgbGF1bmNoSXRlbXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhdWNoTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9