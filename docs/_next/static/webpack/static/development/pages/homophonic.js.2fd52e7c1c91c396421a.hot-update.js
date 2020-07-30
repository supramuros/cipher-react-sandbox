webpackHotUpdate("static\\development\\pages\\homophonic.js",{

/***/ "./components/HeaderNav.tsx":
/*!**********************************!*\
  !*** ./components/HeaderNav.tsx ***!
  \**********************************/
/*! exports provided: HeaderNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNav", function() { return HeaderNav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\mobiledan\\Code\\jssandbox\\react\\cypher-next\\components\\HeaderNav.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var HeaderNav = function HeaderNav(props) {
  var linkDisplay = [];
  var styleClassName = props.styleClass ? props.styleClass : 'header-nav-a';

  if (props.links) {
    var _iterator = _createForOfIteratorHelper(props.links),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var l = _step.value;
        linkDisplay.push(__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          key: l.href,
          href: l.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 26
          }
        }, __jsx("a", {
          className: styleClassName,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 60
          }
        }, l.name)));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return __jsx("div", {
    className: "jsx-927532377" + " " + "header-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, linkDisplay, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "927532377",
    __self: _this
  }, ".header-nav.jsx-927532377{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.header-nav-a.jsx-927532377{color:white;background-color:gray;-webkit-text-decoration:none;text-decoration:none;font-size:1em;height:100%;padding:1.7em;margin:0;}.footer-nav-a.jsx-927532377{color:white;background-color:gray;-webkit-text-decoration:none;text-decoration:none;font-size:1em;height:100%;padding:.5em;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxqc3NhbmRib3hcXHJlYWN0XFxjeXBoZXItbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyTmF2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQndCLEFBRzZCLEFBSUEsQUFTQSxZQVJTLEFBU0Esc0JBUkEsQUFTQSx3Q0FkRixVQU1MLEFBU0EsY0FSSCxBQVNBLFlBUkUsQUFTRCxhQUNKLENBVEEsUUFVWixDQVRBLFVBVEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxtb2JpbGVkYW5cXENvZGVcXGpzc2FuZGJveFxccmVhY3RcXGN5cGhlci1uZXh0XFxjb21wb25lbnRzXFxIZWFkZXJOYXYudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGdW5jdGlvbkNvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGxpbmtzPzoge2hyZWY6c3RyaW5nLCBuYW1lOnN0cmluZ31bXSxcclxuICAgIHN0eWxlQ2xhc3M/OiBcImhlYWRlci1uYXYtYVwifFwiZm9vdGVyLW5hdi1hXCIsXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJOYXY6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICBjb25zdCBsaW5rRGlzcGxheSA9IFtdO1xyXG4gICBjb25zdCBzdHlsZUNsYXNzTmFtZSA9IHByb3BzLnN0eWxlQ2xhc3MgPyBwcm9wcy5zdHlsZUNsYXNzIDogJ2hlYWRlci1uYXYtYSc7XHJcbiAgICBpZihwcm9wcy5saW5rcyl7XHJcbiAgICBmb3IobGV0IGwgb2YgcHJvcHMubGlua3Mpe1xyXG4gICAgICAgIGxpbmtEaXNwbGF5LnB1c2goPExpbmsga2V5ID17bC5ocmVmfSBocmVmPXtsLmhyZWZ9PjxhIGNsYXNzTmFtZT17c3R5bGVDbGFzc05hbWV9PntsLm5hbWV9PC9hPjwvTGluaz4pXHJcbiAgICB9XHJcbiAgIH0gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdlwiPlxyXG4gICAgICAgICAgICB7bGlua0Rpc3BsYXl9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRlci1uYXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdi1hIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEuN2VtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1uYXYtYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzouNWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\jssandbox\\\\react\\\\cypher-next\\\\components\\\\HeaderNav.tsx */"));
};
_c = HeaderNav;

var _c;

$RefreshReg$(_c, "HeaderNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlck5hdi50c3giXSwibmFtZXMiOlsiSGVhZGVyTmF2IiwicHJvcHMiLCJsaW5rRGlzcGxheSIsInN0eWxlQ2xhc3NOYW1lIiwic3R5bGVDbGFzcyIsImxpbmtzIiwibCIsInB1c2giLCJocmVmIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBU08sSUFBTUEsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNELE1BQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUNBLE1BQU1DLGNBQWMsR0FBR0YsS0FBSyxDQUFDRyxVQUFOLEdBQW1CSCxLQUFLLENBQUNHLFVBQXpCLEdBQXNDLGNBQTdEOztBQUNDLE1BQUdILEtBQUssQ0FBQ0ksS0FBVCxFQUFlO0FBQUEsK0NBQ0ZKLEtBQUssQ0FBQ0ksS0FESjtBQUFBOztBQUFBO0FBQ2YsMERBQXlCO0FBQUEsWUFBakJDLENBQWlCO0FBQ3JCSixtQkFBVyxDQUFDSyxJQUFaLENBQWlCLE1BQUMsZ0RBQUQ7QUFBTSxhQUFHLEVBQUdELENBQUMsQ0FBQ0UsSUFBZDtBQUFvQixjQUFJLEVBQUVGLENBQUMsQ0FBQ0UsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrQztBQUFHLG1CQUFTLEVBQUVMLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUErQkcsQ0FBQyxDQUFDRyxJQUFqQyxDQUFsQyxDQUFqQjtBQUNIO0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlmOztBQUNBLFNBQ0k7QUFBQSx1Q0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsV0FETDtBQUFBO0FBQUE7QUFBQSw4akdBREo7QUE2QkgsQ0FyQ007S0FBTUYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG9tb3Bob25pYy5qcy4yZmQ1MmU3YzFjOTFjMzk2NDIxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGdW5jdGlvbkNvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGxpbmtzPzoge2hyZWY6c3RyaW5nLCBuYW1lOnN0cmluZ31bXSxcclxuICAgIHN0eWxlQ2xhc3M/OiBcImhlYWRlci1uYXYtYVwifFwiZm9vdGVyLW5hdi1hXCIsXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJOYXY6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICBjb25zdCBsaW5rRGlzcGxheSA9IFtdO1xyXG4gICBjb25zdCBzdHlsZUNsYXNzTmFtZSA9IHByb3BzLnN0eWxlQ2xhc3MgPyBwcm9wcy5zdHlsZUNsYXNzIDogJ2hlYWRlci1uYXYtYSc7XHJcbiAgICBpZihwcm9wcy5saW5rcyl7XHJcbiAgICBmb3IobGV0IGwgb2YgcHJvcHMubGlua3Mpe1xyXG4gICAgICAgIGxpbmtEaXNwbGF5LnB1c2goPExpbmsga2V5ID17bC5ocmVmfSBocmVmPXtsLmhyZWZ9PjxhIGNsYXNzTmFtZT17c3R5bGVDbGFzc05hbWV9PntsLm5hbWV9PC9hPjwvTGluaz4pXHJcbiAgICB9XHJcbiAgIH0gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdlwiPlxyXG4gICAgICAgICAgICB7bGlua0Rpc3BsYXl9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRlci1uYXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdi1hIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEuN2VtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1uYXYtYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzouNWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==