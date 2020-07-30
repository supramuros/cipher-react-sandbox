webpackHotUpdate("static\\development\\pages\\homophonic.js",{

/***/ "./pages/homophonic.tsx":
/*!******************************!*\
  !*** ./pages/homophonic.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homophonic; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_HomophonicSubstitutionCypher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/HomophonicSubstitutionCypher */ "./services/HomophonicSubstitutionCypher.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_KeyDisplayTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/KeyDisplayTable */ "./components/KeyDisplayTable.tsx");
/* harmony import */ var _components_SubstitutionContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SubstitutionContainer */ "./components/SubstitutionContainer.tsx");







var _jsxFileName = "C:\\Users\\mobiledan\\Code\\jssandbox\\react\\cypher-next\\pages\\homophonic.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Homophonic = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Homophonic, _React$Component);

  var _super = _createSuper(Homophonic);

  function Homophonic(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Homophonic);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "generateEncoding", function (seed) {
      _this.state.key.generateEncoding(seed);

      _this.setState({
        key: _this.state.key
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "encrypt", function (input) {
      return _this.state.key.encrypt(input);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "decrypt", function (input) {
      return _this.state.key.decrypt(input);
    });

    _this.state = {
      key: new _services_HomophonicSubstitutionCypher__WEBPACK_IMPORTED_MODULE_9__["default"]()
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Homophonic, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["Layout"], {
        title: "Cypher|Homophonic Substitution",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, __jsx(_components_SubstitutionContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: "homophonic",
        heading: "Homophonic Substitution",
        upperCaseSeedOnly: false,
        encodeFn: this.generateEncoding,
        encryptFn: this.encrypt,
        decryptFn: this.decrypt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, "A homophonic substitution cypher expands on a simple substitution and includes multiple mappings for characters (E encoded to F,O,5 for example). The goal is to hide higher frequency characters (e.g. E) from easily being seen in messages. The Homophonic Substitution below encodes multiple characters for A, E, H, I, N, O, R, S, and T. Encoded characters expand to include numbers and lower case letters."), __jsx("p", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, "Further details on the functionality can be found on \xA0", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Substitution_cipher#Homophonic_substitution",
        target: "_blank",
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 129
        }
      }, "Wikipedia")), "."), __jsx("div", {
        className: "jsx-2961708500" + " " + "flex-container-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-2961708500" + " " + "flex-container-col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }
      }, "Enter a seed below. Be sure to use a mixture of A-Z, a-z, 0-9 and a relatively long phrase. The seed is constructed using a simple substitution:"), __jsx("ul", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }, __jsx("li", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }
      }, "A,E,H,I,N,O,R,S,T are encoded first."), __jsx("li", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }
      }, "A,E,H,I,N,O,R,S,T are encoded a second time."), __jsx("li", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }
      }, "A,E,H,I,N,O,R,S,T are encoded a final time."), __jsx("li", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 29
        }
      }, "Remaining characters A-Z are encoded to the remaining values in the A-Z, a-z, 0-9 range.")), __jsx("p", {
        className: "jsx-2961708500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }
      }, "To decrypt a previously entered value, input the Key Seed value and paste/enter the encrypted value in the output textbox.")), __jsx(_components_KeyDisplayTable__WEBPACK_IMPORTED_MODULE_11__["KeyDisplayTable"], {
        label: "Key Mapping",
        keyTable: this.state.key.keyDisplayTable,
        header1: "Plaintext",
        header2: "Ciphertext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2961708500",
        __self: this
      }, "h1.jsx-2961708500{text-align:center;}p.jsx-2961708500{margin:0.5em;}li.jsx-2961708500{margin:0;}ul.jsx-2961708500{margin:0;}.flex-container-row.jsx-2961708500{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}.flex-container-col.jsx-2961708500{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}a.jsx-2961708500{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxqc3NhbmRib3hcXHJlYWN0XFxjeXBoZXItbmV4dFxccGFnZXNcXGhvbW9waG9uaWMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFd0IsQUFHbUMsQUFHTixBQUdKLEFBR0EsQUFHUyxBQU1BLEFBTWdCLFNBakJyQyxBQUdBLElBTkEsSUFTaUIsQUFNQSxDQWxCakIsd0RBd0JjLFdBQ2QsTUFadUIsQUFNRyxxRUFMVixTQU1BLEdBTGhCLFNBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxtb2JpbGVkYW5cXENvZGVcXGpzc2FuZGJveFxccmVhY3RcXGN5cGhlci1uZXh0XFxwYWdlc1xcaG9tb3Bob25pYy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIb21vcGhvbmljU3Vic3RpdHV0aW9uQ3lwaGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9Ib21vcGhvbmljU3Vic3RpdHV0aW9uQ3lwaGVyXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQge0tleURpc3BsYXlUYWJsZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS2V5RGlzcGxheVRhYmxlXCI7XHJcbmltcG9ydCBTdWJzdGl0dXRpb25Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic3RpdHV0aW9uQ29udGFpbmVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tb3Bob25pYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSx7a2V5OkhvbW9waG9uaWNTdWJzdGl0dXRpb25DeXBoZXJ9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG5ldyBIb21vcGhvbmljU3Vic3RpdHV0aW9uQ3lwaGVyKClcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRW5jb2RpbmcgPSAoc2VlZDpzdHJpbmcpOnZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdGUua2V5LmdlbmVyYXRlRW5jb2Rpbmcoc2VlZCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge2tleTogdGhpcy5zdGF0ZS5rZXl9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmNyeXB0ID0gKGlucHV0OnN0cmluZyk6c3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5rZXkuZW5jcnlwdChpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcnlwdCA9IChpbnB1dDpzdHJpbmcpOnN0cmluZyA9PntcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5rZXkuZGVjcnlwdChpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT0nQ3lwaGVyfEhvbW9waG9uaWMgU3Vic3RpdHV0aW9uJz5cclxuICAgICAgICAgICAgPFN1YnN0aXR1dGlvbkNvbnRhaW5lciBcclxuICAgICAgICAgICAgdHlwZT1cImhvbW9waG9uaWNcIlxyXG4gICAgICAgICAgICBoZWFkaW5nPVwiSG9tb3Bob25pYyBTdWJzdGl0dXRpb25cIlxyXG4gICAgICAgICAgICB1cHBlckNhc2VTZWVkT25seSA9IHtmYWxzZX1cclxuICAgICAgICAgICAgZW5jb2RlRm4gPSB7dGhpcy5nZW5lcmF0ZUVuY29kaW5nfVxyXG4gICAgICAgICAgICBlbmNyeXB0Rm4gPSB7dGhpcy5lbmNyeXB0fVxyXG4gICAgICAgICAgICBkZWNyeXB0Rm4gPSB7dGhpcy5kZWNyeXB0fT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBob21vcGhvbmljIHN1YnN0aXR1dGlvbiBjeXBoZXIgZXhwYW5kcyBvbiBhIHNpbXBsZSBzdWJzdGl0dXRpb24gYW5kIGluY2x1ZGVzIG11bHRpcGxlIG1hcHBpbmdzIGZvciBjaGFyYWN0ZXJzIChFIGVuY29kZWQgdG8gRixPLDUgZm9yIGV4YW1wbGUpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGdvYWwgaXMgdG8gaGlkZSBoaWdoZXIgZnJlcXVlbmN5IGNoYXJhY3RlcnMgKGUuZy4gRSkgZnJvbSBlYXNpbHkgYmVpbmcgc2VlbiBpbiBtZXNzYWdlcy4gVGhlIEhvbW9waG9uaWMgU3Vic3RpdHV0aW9uIGJlbG93IGVuY29kZXMgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMgZm9yIEEsIEUsIEgsIEksIE4sIE8sIFIsIFMsIGFuZCBULiBFbmNvZGVkIGNoYXJhY3RlcnMgZXhwYW5kIHRvIGluY2x1ZGUgbnVtYmVycyBhbmQgbG93ZXIgY2FzZSBsZXR0ZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVydGhlciBkZXRhaWxzIG9uIHRoZSBmdW5jdGlvbmFsaXR5IGNhbiBiZSBmb3VuZCBvbiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdWJzdGl0dXRpb25fY2lwaGVyI0hvbW9waG9uaWNfc3Vic3RpdHV0aW9uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGk+V2lraXBlZGlhPC9pPjwvYT4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lci1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXIgYSBzZWVkIGJlbG93LiBCZSBzdXJlIHRvIHVzZSBhIG1peHR1cmUgb2YgQS1aLCBhLXosIDAtOSBhbmQgYSByZWxhdGl2ZWx5IGxvbmcgcGhyYXNlLiBUaGUgc2VlZCBpcyBjb25zdHJ1Y3RlZCB1c2luZyBhIHNpbXBsZSBzdWJzdGl0dXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkEsRSxILEksTixPLFIsUyxUIGFyZSBlbmNvZGVkIGZpcnN0LjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSxFLEgsSSxOLE8sUixTLFQgYXJlIGVuY29kZWQgYSBzZWNvbmQgdGltZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkEsRSxILEksTixPLFIsUyxUIGFyZSBlbmNvZGVkIGEgZmluYWwgdGltZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlbWFpbmluZyBjaGFyYWN0ZXJzIEEtWiBhcmUgZW5jb2RlZCB0byB0aGUgcmVtYWluaW5nIHZhbHVlcyBpbiB0aGUgQS1aLCBhLXosIDAtOSByYW5nZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGRlY3J5cHQgYSBwcmV2aW91c2x5IGVudGVyZWQgdmFsdWUsIGlucHV0IHRoZSBLZXkgU2VlZCB2YWx1ZSBhbmQgcGFzdGUvZW50ZXIgdGhlIGVuY3J5cHRlZCB2YWx1ZSBpbiB0aGUgb3V0cHV0IHRleHRib3guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8S2V5RGlzcGxheVRhYmxlIGxhYmVsPVwiS2V5IE1hcHBpbmdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlUYWJsZT17dGhpcy5zdGF0ZS5rZXkua2V5RGlzcGxheVRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjE9XCJQbGFpbnRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjI9XCJDaXBoZXJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3Vic3RpdHV0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowLjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItcm93IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6Z3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+ICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\jssandbox\\\\react\\\\cypher-next\\\\pages\\\\homophonic.tsx */"));
    }
  }]);

  return Homophonic;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21vcGhvbmljLnRzeCJdLCJuYW1lcyI6WyJIb21vcGhvbmljIiwicHJvcHMiLCJzZWVkIiwic3RhdGUiLCJrZXkiLCJnZW5lcmF0ZUVuY29kaW5nIiwic2V0U3RhdGUiLCJpbnB1dCIsImVuY3J5cHQiLCJkZWNyeXB0IiwiSG9tb3Bob25pY1N1YnN0aXR1dGlvbkN5cGhlciIsImtleURpc3BsYXlUYWJsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSwyTkFPQSxVQUFDQyxJQUFELEVBQXNCO0FBQ3JDLFlBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxnQkFBZixDQUFnQ0gsSUFBaEM7O0FBQ0EsWUFBS0ksUUFBTCxDQUNJO0FBQUNGLFdBQUcsRUFBRSxNQUFLRCxLQUFMLENBQVdDO0FBQWpCLE9BREo7QUFHSCxLQVprQjs7QUFBQSxrTkFjVCxVQUFDRyxLQUFELEVBQXlCO0FBQy9CLGFBQU8sTUFBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVJLE9BQWYsQ0FBdUJELEtBQXZCLENBQVA7QUFDSCxLQWhCa0I7O0FBQUEsa05Ba0JULFVBQUNBLEtBQUQsRUFBd0I7QUFDOUIsYUFBTyxNQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUssT0FBZixDQUF1QkYsS0FBdkIsQ0FBUDtBQUNILEtBcEJrQjs7QUFFZixVQUFLSixLQUFMLEdBQWE7QUFDR0MsU0FBRyxFQUFFLElBQUlNLDhFQUFKO0FBRFIsS0FBYjtBQUZlO0FBS2xCOzs7OzZCQWlCUTtBQUNMLGFBQ0EsTUFBQywwREFBRDtBQUFRLGFBQUssRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQywwRUFBRDtBQUNBLFlBQUksRUFBQyxZQURMO0FBRUEsZUFBTyxFQUFDLHlCQUZSO0FBR0EseUJBQWlCLEVBQUksS0FIckI7QUFJQSxnQkFBUSxFQUFJLEtBQUtMLGdCQUpqQjtBQUtBLGlCQUFTLEVBQUksS0FBS0csT0FMbEI7QUFNQSxpQkFBUyxFQUFJLEtBQUtDLE9BTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ2FBUEosRUFZWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBRUk7QUFBRyxZQUFJLEVBQUMsMkVBQVI7QUFBb0YsY0FBTSxFQUFDLFFBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXBHLENBRkosTUFaWixFQWdCSTtBQUFBLDRDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFlLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEpBRkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBSkosQ0FMSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSUFYSixDQURKLEVBZ0JJLE1BQUMsNEVBQUQ7QUFBaUIsYUFBSyxFQUFDLGFBQXZCO0FBQ1ksZ0JBQVEsRUFBRSxLQUFLTixLQUFMLENBQVdDLEdBQVgsQ0FBZU8sZUFEckM7QUFFWSxlQUFPLEVBQUMsV0FGcEI7QUFHWSxlQUFPLEVBQUMsWUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixDQWhCSixDQURKO0FBQUE7QUFBQTtBQUFBLGl4T0FEQTtBQXdFSDs7OztFQWhHbUNDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhvbW9waG9uaWMuanMuYmEzZDQ1OGFhYTUxYzgyOGZjMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhvbW9waG9uaWNTdWJzdGl0dXRpb25DeXBoZXIgZnJvbSBcIi4uL3NlcnZpY2VzL0hvbW9waG9uaWNTdWJzdGl0dXRpb25DeXBoZXJcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXHJcbmltcG9ydCB7S2V5RGlzcGxheVRhYmxlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9LZXlEaXNwbGF5VGFibGVcIjtcclxuaW1wb3J0IFN1YnN0aXR1dGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJzdGl0dXRpb25Db250YWluZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21vcGhvbmljIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LHtrZXk6SG9tb3Bob25pY1N1YnN0aXR1dGlvbkN5cGhlcn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbmV3IEhvbW9waG9uaWNTdWJzdGl0dXRpb25DeXBoZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVFbmNvZGluZyA9IChzZWVkOnN0cmluZyk6dm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5rZXkuZ2VuZXJhdGVFbmNvZGluZyhzZWVkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7a2V5OiB0aGlzLnN0YXRlLmtleX1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGVuY3J5cHQgPSAoaW5wdXQ6c3RyaW5nKTpzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmtleS5lbmNyeXB0KGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyeXB0ID0gKGlucHV0OnN0cmluZyk6c3RyaW5nID0+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmtleS5kZWNyeXB0KGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPSdDeXBoZXJ8SG9tb3Bob25pYyBTdWJzdGl0dXRpb24nPlxyXG4gICAgICAgICAgICA8U3Vic3RpdHV0aW9uQ29udGFpbmVyIFxyXG4gICAgICAgICAgICB0eXBlPVwiaG9tb3Bob25pY1wiXHJcbiAgICAgICAgICAgIGhlYWRpbmc9XCJIb21vcGhvbmljIFN1YnN0aXR1dGlvblwiXHJcbiAgICAgICAgICAgIHVwcGVyQ2FzZVNlZWRPbmx5ID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICBlbmNvZGVGbiA9IHt0aGlzLmdlbmVyYXRlRW5jb2Rpbmd9XHJcbiAgICAgICAgICAgIGVuY3J5cHRGbiA9IHt0aGlzLmVuY3J5cHR9XHJcbiAgICAgICAgICAgIGRlY3J5cHRGbiA9IHt0aGlzLmRlY3J5cHR9PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIGhvbW9waG9uaWMgc3Vic3RpdHV0aW9uIGN5cGhlciBleHBhbmRzIG9uIGEgc2ltcGxlIHN1YnN0aXR1dGlvbiBhbmQgaW5jbHVkZXMgbXVsdGlwbGUgbWFwcGluZ3MgZm9yIGNoYXJhY3RlcnMgKEUgZW5jb2RlZCB0byBGLE8sNSBmb3IgZXhhbXBsZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZ29hbCBpcyB0byBoaWRlIGhpZ2hlciBmcmVxdWVuY3kgY2hhcmFjdGVycyAoZS5nLiBFKSBmcm9tIGVhc2lseSBiZWluZyBzZWVuIGluIG1lc3NhZ2VzLiBUaGUgSG9tb3Bob25pYyBTdWJzdGl0dXRpb24gYmVsb3cgZW5jb2RlcyBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycyBmb3IgQSwgRSwgSCwgSSwgTiwgTywgUiwgUywgYW5kIFQuIEVuY29kZWQgY2hhcmFjdGVycyBleHBhbmQgdG8gaW5jbHVkZSBudW1iZXJzIGFuZCBsb3dlciBjYXNlIGxldHRlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdXJ0aGVyIGRldGFpbHMgb24gdGhlIGZ1bmN0aW9uYWxpdHkgY2FuIGJlIGZvdW5kIG9uICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N1YnN0aXR1dGlvbl9jaXBoZXIjSG9tb3Bob25pY19zdWJzdGl0dXRpb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aT5XaWtpcGVkaWE8L2k+PC9hPi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRlciBhIHNlZWQgYmVsb3cuIEJlIHN1cmUgdG8gdXNlIGEgbWl4dHVyZSBvZiBBLVosIGEteiwgMC05IGFuZCBhIHJlbGF0aXZlbHkgbG9uZyBwaHJhc2UuIFRoZSBzZWVkIGlzIGNvbnN0cnVjdGVkIHVzaW5nIGEgc2ltcGxlIHN1YnN0aXR1dGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSxFLEgsSSxOLE8sUixTLFQgYXJlIGVuY29kZWQgZmlyc3QuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BLEUsSCxJLE4sTyxSLFMsVCBhcmUgZW5jb2RlZCBhIHNlY29uZCB0aW1lLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QSxFLEgsSSxOLE8sUixTLFQgYXJlIGVuY29kZWQgYSBmaW5hbCB0aW1lLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVtYWluaW5nIGNoYXJhY3RlcnMgQS1aIGFyZSBlbmNvZGVkIHRvIHRoZSByZW1haW5pbmcgdmFsdWVzIGluIHRoZSBBLVosIGEteiwgMC05IHJhbmdlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gZGVjcnlwdCBhIHByZXZpb3VzbHkgZW50ZXJlZCB2YWx1ZSwgaW5wdXQgdGhlIEtleSBTZWVkIHZhbHVlIGFuZCBwYXN0ZS9lbnRlciB0aGUgZW5jcnlwdGVkIHZhbHVlIGluIHRoZSBvdXRwdXQgdGV4dGJveC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxLZXlEaXNwbGF5VGFibGUgbGFiZWw9XCJLZXkgTWFwcGluZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVRhYmxlPXt0aGlzLnN0YXRlLmtleS5rZXlEaXNwbGF5VGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyMT1cIlBsYWludGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyMj1cIkNpcGhlcnRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdWJzdGl0dXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1yb3cge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD4gICAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=