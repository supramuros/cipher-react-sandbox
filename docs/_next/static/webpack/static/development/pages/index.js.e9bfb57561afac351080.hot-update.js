webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNav */ "./components/HeaderNav.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\mobiledan\\Code\\jssandbox\\react\\cypher-next\\components\\Layout.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var headerLinks = [{
  href: "simple",
  name: "Simple Substitution"
}, {
  href: "homophonic",
  name: "Homophonic Substitution"
}, {
  href: "vigenere",
  name: "Vigenère"
}, {
  href: "about",
  name: "About"
}];
var footerLinks = [{
  href: "index",
  name: "Home"
}, {
  href: "about",
  name: "About"
}];
var Layout = function Layout(props) {
  return __jsx("div", {
    className: "jsx-2022810620" + " " + "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, props.title), __jsx("link", {
    rel: "icon",
    href: "/eye-off.svg",
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), __jsx("header", {
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "hamburger",
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "\u2630"), __jsx("input", {
    type: "checkbox",
    id: "hamburger",
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "index",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 36
    }
  }, __jsx("h1", {
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 39
    }
  }, "Cypher"))), __jsx(_HeaderNav__WEBPACK_IMPORTED_MODULE_3__["HeaderNav"], {
    links: headerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), __jsx("main", {
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, props.children), __jsx("footer", {
    className: "jsx-2022810620",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_HeaderNav__WEBPACK_IMPORTED_MODULE_3__["HeaderNav"], {
    styleClass: "footer-nav-a",
    links: footerLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "939495871",
    __self: _this
  }, ".grid-container.jsx-2022810620{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;grid-template-areas: \"header header header\" \"left main right\" \"footer footer footer\";height:100vh;}.flex-container.jsx-2022810620{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.flex-center.jsx-2022810620{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-left.jsx-2022810620{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}header.jsx-2022810620{grid-area:header;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:gray;padding:0 1em;margin:0;}main.jsx-2022810620{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;padding:1em;grid-area:main;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-2022810620{text-align:center;margin:0.5em;color:white;-webkit-text-decoration:none;text-decoration:none;}a.jsx-2022810620{-webkit-text-decoration:none;text-decoration:none;}h2.jsx-2022810620{text-align:left;}p.jsx-2022810620{text-align:left;}label.jsx-2022810620{text-align:left;}footer.jsx-2022810620{width:100%;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;grid-area:footer;margin:0;padding:0 1em;background-color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxqc3NhbmRib3hcXHJlYWN0XFxjeXBoZXItbmV4dFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3dCLEFBRzhCLEFBVUksQUFNTCxBQU9BLEFBT0ssQUFVSixBQVVLLEFBTUcsQUFHTCxBQUdBLEFBR0EsQUFHTCxXQUNHLEVBcEVzQixHQTJEeEMsQUFHQSxBQUdBLENBdkRpQixBQW9CQSxDQW9CRCxhQUNBLFlBQ1EsTUFuRGEsQ0F1RHJDLGVBYWlCLFNBckRDLEFBT0EsQUFpQkEsUUFuQ1EsU0FNQSxBQW9CVCxFQXNCakIsbUNBcEN5QixBQU9BLEFBaUJULFdBNkJXLE1BdENKLHNCQTFCTixFQU1ELFdBTGhCLENBTUEsa0JBNkIwQixPQXhCQyxBQU9JLGdDQVFMLEFBc0NILHNCQXJDTCxjQUNOLEdBUUMsTUFQYixHQVFnQixZQUNHLE9BMUJJLE1BT0ksRUFvQkwsa0JBMEJFLG1FQXBEeEIsS0FxRHFCLEdBMUJyQixjQXBCQSxBQStDYSxTQUNLLGNBQ1Esc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxqc3NhbmRib3hcXHJlYWN0XFxjeXBoZXItbmV4dFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnVuY3Rpb25Db21wb25lbnQsIFJlYWN0Tm9kZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7SGVhZGVyTmF2fSBmcm9tIFwiLi9IZWFkZXJOYXZcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcclxufVxyXG5jb25zdCBoZWFkZXJMaW5rcyA9IFtcclxuICAgIHtocmVmOiBcInNpbXBsZVwiLCBuYW1lOlwiU2ltcGxlIFN1YnN0aXR1dGlvblwifSxcclxuICAgIHtocmVmOiBcImhvbW9waG9uaWNcIiwgbmFtZTpcIkhvbW9waG9uaWMgU3Vic3RpdHV0aW9uXCJ9LFxyXG4gICAge2hyZWY6IFwidmlnZW5lcmVcIiwgbmFtZTpcIlZpZ2Vuw6hyZVwifSxcclxuICAgIHtocmVmOiBcImFib3V0XCIsIG5hbWU6XCJBYm91dFwifVxyXG5dO1xyXG5jb25zdCBmb290ZXJMaW5rcyA9IFtcclxuICAgIHtocmVmOiBcImluZGV4XCIsIG5hbWU6XCJIb21lXCJ9LFxyXG4gICAge2hyZWY6IFwiYWJvdXRcIiwgbmFtZTpcIkFib3V0XCJ9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0OiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2V5ZS1vZmYuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoYW1idXJnZXJcIj4mIzk3NzY7PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImhhbWJ1cmdlclwiLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJpbmRleFwiPjxhPjxoMT5DeXBoZXI8L2gxPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTmF2IGxpbmtzPXtoZWFkZXJMaW5rc30gLz5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTmF2IHN0eWxlQ2xhc3M9XCJmb290ZXItbmF2LWFcIiBsaW5rcz17Zm9vdGVyTGlua3N9Lz5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIFwibGVmdCBtYWluIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY2VudGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWxlZnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleCAxIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowLjVlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGZvb3RlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICBodG1sLFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuICAgICAgICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdi1saSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdi1hIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEuN2VtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRlci1uYXYtYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRlci1uYXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbFtmb3I9aGFtYnVyZ2VyXSwgI2hhbWJ1cmdlciB7IFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1uYXYtYSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsW2Zvcj1oYW1idXJnZXJdeyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCNoYW1idXJnZXI6Y2hlY2tlZCB+IC5oZWFkZXItbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0I2hhbWJ1cmdlcjpjaGVja2VkIH4gLmhlYWRlci1uYXYgPiAuaGVhZGVyLW5hdi1hIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXItbmF2LWEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6LjI1ZW0gMWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1uYXYtYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIG5vcm1hbGl6ZSBkaXZzIHN1cnJvdW5kaW5nIHRoZSBjb250ZW50Ki9cclxuICAgICAgICAgICAgYm9keSA+IGRpdjpmaXJzdC1jaGlsZCxcclxuICAgICAgICAgICAgI19fbmV4dCxcclxuICAgICAgICAgICAgI19fbmV4dCA+IGRpdixcclxuICAgICAgICAgICAgI19fbmV4dCA+IGRpdiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\jssandbox\\\\react\\\\cypher-next\\\\components\\\\Layout.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2571649546",
    __self: _this
  }, "html,body{padding:0;margin:0;height:100%;width:100%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}.header-nav-li{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.header-nav-a{color:white;background-color:gray;-webkit-text-decoration:none;text-decoration:none;font-size:1em;height:100%;padding:1.7em;margin:0;}.header-nav-a:hover{color:gray;background-color:white;font-size:1em;}.header-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}label[for=hamburger],#hamburger{display:none;color:white;font-size:1.5em;padding:10px;}@media only screen and (max-width:800px){header{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.header-nav-a{display:none;}label[for=hamburger]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;font-size:1.5em;padding:10px;}input#hamburger:checked~.header-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input#hamburger:checked~.header-nav>.header-nav-a{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}}.footer-nav-a{color:white;background-color:gray;-webkit-text-decoration:none;text-decoration:none;font-size:1em;height:100%;padding:.25em 1em;margin:0;}.footer-nav-a:hover{color:gray;background-color:white;font-size:1em;}*{box-sizing:border-box;}body>div:first-child,#__next,#__next>div,#__next>div>div{height:100vh;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxqc3NhbmRib3hcXHJlYWN0XFxjeXBoZXItbmV4dFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySCtCLEFBSTJCLEFBU1UsQUFHUixBQVNELEFBS0MsQUFJQyxBQU9ZLEFBR1gsQUFHRyxBQU9ELEFBSU8sQUFLWCxBQVNELEFBS1csQUFPVCxVQS9FSixDQXFCYyxBQStDQSxDQXhERixBQStDQSxDQTdCTCxBQVVoQixBQXdDWSxNQS9FQSxHQXdFaEIsR0ExQ3dCLEFBa0R4QixNQS9FZSxHQVdVLEFBU1AsQUFzQ08sQUFTUCxPQXJDRyxDQTVCbUQsTUFtQnhFLEFBK0NBLE1BckNBLG9CQVB1QixBQWlCSCxBQU9VLElBYjFCLE1BdkJjLEFBK0NBLEVBakJNLFlBN0JULEFBK0NBLElBckRmLEFBb0NxQixBQVNmLFFBdENXLEFBK0NJLEtBaEJqQixTQTlCUSxJQStDQSxLQTlDWixJQStDQSxNQXRDQSxTQXdCSSx1QkE3Q0oiLCJmaWxlIjoiQzpcXFVzZXJzXFxtb2JpbGVkYW5cXENvZGVcXGpzc2FuZGJveFxccmVhY3RcXGN5cGhlci1uZXh0XFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGdW5jdGlvbkNvbXBvbmVudCwgUmVhY3ROb2RlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtIZWFkZXJOYXZ9IGZyb20gXCIuL0hlYWRlck5hdlwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xyXG59XHJcbmNvbnN0IGhlYWRlckxpbmtzID0gW1xyXG4gICAge2hyZWY6IFwic2ltcGxlXCIsIG5hbWU6XCJTaW1wbGUgU3Vic3RpdHV0aW9uXCJ9LFxyXG4gICAge2hyZWY6IFwiaG9tb3Bob25pY1wiLCBuYW1lOlwiSG9tb3Bob25pYyBTdWJzdGl0dXRpb25cIn0sXHJcbiAgICB7aHJlZjogXCJ2aWdlbmVyZVwiLCBuYW1lOlwiVmlnZW7DqHJlXCJ9LFxyXG4gICAge2hyZWY6IFwiYWJvdXRcIiwgbmFtZTpcIkFib3V0XCJ9XHJcbl07XHJcbmNvbnN0IGZvb3RlckxpbmtzID0gW1xyXG4gICAge2hyZWY6IFwiaW5kZXhcIiwgbmFtZTpcIkhvbWVcIn0sXHJcbiAgICB7aHJlZjogXCJhYm91dFwiLCBuYW1lOlwiQWJvdXRcIn1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZXllLW9mZi5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhhbWJ1cmdlclwiPiYjOTc3Njs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaGFtYnVyZ2VyXCIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImluZGV4XCI+PGE+PGgxPkN5cGhlcjwvaDE+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJOYXYgbGlua3M9e2hlYWRlckxpbmtzfSAvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJOYXYgc3R5bGVDbGFzcz1cImZvb3Rlci1uYXYtYVwiIGxpbmtzPXtmb290ZXJMaW5rc30vPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICAgICAgICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgXCJsZWZ0IG1haW4gcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4IDEgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAuNWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXItbmF2LWxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXItbmF2LWEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MS43ZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdi1hOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsW2Zvcj1oYW1idXJnZXJdLCAjaGFtYnVyZ2VyIHsgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLW5hdi1hIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxbZm9yPWhhbWJ1cmdlcl17IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0I2hhbWJ1cmdlcjpjaGVja2VkIH4gLmhlYWRlci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQjaGFtYnVyZ2VyOmNoZWNrZWQgfiAuaGVhZGVyLW5hdiA+IC5oZWFkZXItbmF2LWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1uYXYtYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzouMjVlbSAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyLW5hdi1hOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogbm9ybWFsaXplIGRpdnMgc3Vycm91bmRpbmcgdGhlIGNvbnRlbnQqL1xyXG4gICAgICAgICAgICBib2R5ID4gZGl2OmZpcnN0LWNoaWxkLFxyXG4gICAgICAgICAgICAjX19uZXh0LFxyXG4gICAgICAgICAgICAjX19uZXh0ID4gZGl2LFxyXG4gICAgICAgICAgICAjX19uZXh0ID4gZGl2ID4gZGl2IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\jssandbox\\\\react\\\\cypher-next\\\\components\\\\Layout.tsx */"));
};
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOlsiaGVhZGVyTGlua3MiLCJocmVmIiwibmFtZSIsImZvb3RlckxpbmtzIiwiTGF5b3V0IiwicHJvcHMiLCJ0aXRsZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxXQUFXLEdBQUcsQ0FDaEI7QUFBQ0MsTUFBSSxFQUFFLFFBQVA7QUFBaUJDLE1BQUksRUFBQztBQUF0QixDQURnQixFQUVoQjtBQUFDRCxNQUFJLEVBQUUsWUFBUDtBQUFxQkMsTUFBSSxFQUFDO0FBQTFCLENBRmdCLEVBR2hCO0FBQUNELE1BQUksRUFBRSxVQUFQO0FBQW1CQyxNQUFJLEVBQUM7QUFBeEIsQ0FIZ0IsRUFJaEI7QUFBQ0QsTUFBSSxFQUFFLE9BQVA7QUFBZ0JDLE1BQUksRUFBQztBQUFyQixDQUpnQixDQUFwQjtBQU1BLElBQU1DLFdBQVcsR0FBRyxDQUNoQjtBQUFDRixNQUFJLEVBQUUsT0FBUDtBQUFnQkMsTUFBSSxFQUFDO0FBQXJCLENBRGdCLEVBRWhCO0FBQUNELE1BQUksRUFBRSxPQUFQO0FBQWdCQyxNQUFJLEVBQUM7QUFBckIsQ0FGZ0IsQ0FBcEI7QUFLTyxJQUFNRSxNQUFnQyxHQUFHLFNBQW5DQSxNQUFtQyxDQUFDQyxLQUFELEVBQVc7QUFDdkQsU0FDSTtBQUFBLHdDQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBSyxDQUFDQyxLQUFkLENBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFDLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsQ0FBbkIsQ0FISixFQUlJLE1BQUMsb0RBQUQ7QUFBVyxTQUFLLEVBQUVOLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQUxKLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tLLEtBQUssQ0FBQ0UsUUFEWCxDQVhKLEVBY0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFXLGNBQVUsRUFBQyxjQUF0QjtBQUFxQyxTQUFLLEVBQUVKLFdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGszWEFESjtBQWdNSCxDQWpNTTtLQUFNQyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lOWJmYjU3NTYxYWZhYzM1MTA4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGdW5jdGlvbkNvbXBvbmVudCwgUmVhY3ROb2RlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtIZWFkZXJOYXZ9IGZyb20gXCIuL0hlYWRlck5hdlwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xyXG59XHJcbmNvbnN0IGhlYWRlckxpbmtzID0gW1xyXG4gICAge2hyZWY6IFwic2ltcGxlXCIsIG5hbWU6XCJTaW1wbGUgU3Vic3RpdHV0aW9uXCJ9LFxyXG4gICAge2hyZWY6IFwiaG9tb3Bob25pY1wiLCBuYW1lOlwiSG9tb3Bob25pYyBTdWJzdGl0dXRpb25cIn0sXHJcbiAgICB7aHJlZjogXCJ2aWdlbmVyZVwiLCBuYW1lOlwiVmlnZW7DqHJlXCJ9LFxyXG4gICAge2hyZWY6IFwiYWJvdXRcIiwgbmFtZTpcIkFib3V0XCJ9XHJcbl07XHJcbmNvbnN0IGZvb3RlckxpbmtzID0gW1xyXG4gICAge2hyZWY6IFwiaW5kZXhcIiwgbmFtZTpcIkhvbWVcIn0sXHJcbiAgICB7aHJlZjogXCJhYm91dFwiLCBuYW1lOlwiQWJvdXRcIn1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZXllLW9mZi5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhhbWJ1cmdlclwiPiYjOTc3Njs8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaGFtYnVyZ2VyXCIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImluZGV4XCI+PGE+PGgxPkN5cGhlcjwvaDE+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJOYXYgbGlua3M9e2hlYWRlckxpbmtzfSAvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJOYXYgc3R5bGVDbGFzcz1cImZvb3Rlci1uYXYtYVwiIGxpbmtzPXtmb290ZXJMaW5rc30vPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICAgICAgICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgXCJsZWZ0IG1haW4gcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4IDEgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAuNWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGh0bWwsXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxyXG4gICAgICAgICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXItbmF2LWxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXItbmF2LWEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MS43ZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdi1hOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsW2Zvcj1oYW1idXJnZXJdLCAjaGFtYnVyZ2VyIHsgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLW5hdi1hIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxbZm9yPWhhbWJ1cmdlcl17IFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0I2hhbWJ1cmdlcjpjaGVja2VkIH4gLmhlYWRlci1uYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXQjaGFtYnVyZ2VyOmNoZWNrZWQgfiAuaGVhZGVyLW5hdiA+IC5oZWFkZXItbmF2LWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1uYXYtYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzouMjVlbSAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyLW5hdi1hOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogbm9ybWFsaXplIGRpdnMgc3Vycm91bmRpbmcgdGhlIGNvbnRlbnQqL1xyXG4gICAgICAgICAgICBib2R5ID4gZGl2OmZpcnN0LWNoaWxkLFxyXG4gICAgICAgICAgICAjX19uZXh0LFxyXG4gICAgICAgICAgICAjX19uZXh0ID4gZGl2LFxyXG4gICAgICAgICAgICAjX19uZXh0ID4gZGl2ID4gZGl2IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9