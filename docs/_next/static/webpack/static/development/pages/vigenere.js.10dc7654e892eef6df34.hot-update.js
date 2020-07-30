webpackHotUpdate("static\\development\\pages\\vigenere.js",{

/***/ "./pages/vigenere.tsx":
/*!****************************!*\
  !*** ./pages/vigenere.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vigenere; });
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_SubstitutionContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SubstitutionContainer */ "./components/SubstitutionContainer.tsx");
/* harmony import */ var _services_VigenereCypher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/VigenereCypher */ "./services/VigenereCypher.ts");
/* harmony import */ var _components_KeyDisplayTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/KeyDisplayTable */ "./components/KeyDisplayTable.tsx");







var _jsxFileName = "C:\\Users\\mobiledan\\Code\\jssandbox\\react\\cypher-next\\pages\\vigenere.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Vigenere = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Vigenere, _React$Component);

  var _super = _createSuper(Vigenere);

  function Vigenere(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vigenere);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "header", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "body", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "cypher", new _services_VigenereCypher__WEBPACK_IMPORTED_MODULE_11__["default"]());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "generateEncoding", function (seed) {
      _this.setState({
        seed: seed.toUpperCase()
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "encrypt", function (input, seed) {
      input = input.replace(/\s/g, '');
      seed = seed.replace(/[^a-zA-Z]/g, '').toUpperCase();

      if (seed) {
        var rows = _this.state.cypher.keyDisplayTable.rows;
        var newChar = input.charAt(input.length - 1);
        var seedChar = seed.charAt((input.length - 1) % seed.length);
        var row = rows[newChar.charCodeAt(0) - 65];

        for (var i = 0; i < row.length; i++) {
          if (row[i].key.charAt(0) === seedChar) {
            row[i] = {
              key: row[i].key,
              value: row[i].value,
              classNames: row[i].classNames ? row[i].classNames + " animate" : ''
            };
          }
        }

        _this.setState({
          cypher: _this.cypher
        });

        return _this.cypher.encrypt(input, seed);
      } else {
        return _this.cypher.encrypt(input, _this.state.seed);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "decrypt", function (input, seed) {
      if (seed) {
        return _this.cypher.decrypt(input, seed);
      } else {
        return _this.cypher.decrypt(input, _this.state.seed);
      }
    });

    _this.state = {
      seed: '',
      cypher: _this.cypher,
      label: 'Vigenère Table'
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vigenere, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
        title: "Cypher|Vigen\xE8re",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, __jsx(_components_SubstitutionContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "vegenere",
        heading: "Vigen\xE8re",
        upperCaseSeedOnly: true,
        encodeFn: this.generateEncoding,
        encryptFn: this.encrypt,
        decryptFn: this.decrypt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-2507999977" + " " + "flex-container-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-2507999977" + " " + "flex-container-col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }, __jsx("p", {
        className: "jsx-2507999977",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }, "The Vigen\xE8re cipher uses a table where the available characters are shifted. A key seed is used in combination with the plaintext to determine the cipher. More details can be found on \xA0", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher",
        target: "_blank",
        className: "jsx-2507999977",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "jsx-2507999977",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 106
        }
      }, "Wikipedia")), "."), __jsx("p", {
        className: "jsx-2507999977",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }
      }, "Input a seed key below using characters A-Z. The fields are case insensitive and all input and output is in all caps. To decrypt a previously entered value, input the Key Seed and paste/enter the encrypted value in the output textbox."), __jsx("p", {
        className: "jsx-2507999977",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, "The plaintext is encoded by using the key seed letter to determine the row on the table and the plaintext letter for the column. The resulting junction is the cipher character. If the key seed is shorter than the plaintext, then it is repeated to construct a key the same length as the plaintext input.")), __jsx(_components_KeyDisplayTable__WEBPACK_IMPORTED_MODULE_12__["KeyDisplayTable"], {
        label: this.state.label,
        keyTable: this.state.cypher.keyDisplayTable,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2507999977",
        __self: this
      }, ".flex-container-row.jsx-2507999977{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;}.flex-container-col.jsx-2507999977{padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}a.jsx-2507999977{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;color:gray;}h1.jsx-2507999977{text-align:center;}p.jsx-2507999977{text-align:left;}@media only screen and (max-width:800px){.flex-container-row.jsx-2507999977{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaWxlZGFuXFxDb2RlXFxqc3NhbmRib3hcXHJlYWN0XFxjeXBoZXItbmV4dFxccGFnZXNcXHZpZ2VuZXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRzRCLEFBR2tDLEFBTUEsQUFNZ0IsQUFJZixBQUdGLEFBSVMsZ0JBSDdCLENBbkJpQixBQU1BLENBVWpCLHdEQUpjLElBV1YsT0FWSixNQVp1QixBQU1HLHFFQUxWLFNBTUEsR0FMaEIsU0FNQSIsImZpbGUiOiJDOlxcVXNlcnNcXG1vYmlsZWRhblxcQ29kZVxcanNzYW5kYm94XFxyZWFjdFxcY3lwaGVyLW5leHRcXHBhZ2VzXFx2aWdlbmVyZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IFN1YnN0aXR1dGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJzdGl0dXRpb25Db250YWluZXJcIjtcclxuaW1wb3J0IFZpZ2VuZXJlQ3lwaGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9WaWdlbmVyZUN5cGhlclwiO1xyXG5pbXBvcnQge0tleURpc3BsYXlUYWJsZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvS2V5RGlzcGxheVRhYmxlXCJcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBzZWVkOnN0cmluZztcclxuICAgIGN5cGhlcjogVmlnZW5lcmVDeXBoZXI7XHJcbiAgICBsYWJlbDpzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWdlbmVyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSxTdGF0ZT4ge1xyXG4gICAgaGVhZGVyID0gW107XHJcbiAgICBib2R5ID0gW107XHJcbiAgICBjeXBoZXIgPSBuZXcgVmlnZW5lcmVDeXBoZXIoKTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlZWQ6ICcnLFxyXG4gICAgICAgICAgICBjeXBoZXI6IHRoaXMuY3lwaGVyLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1ZpZ2Vuw6hyZSBUYWJsZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgZ2VuZXJhdGVFbmNvZGluZyA9IChzZWVkOnN0cmluZyk6dm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VlZDogc2VlZC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmNyeXB0ID0gKGlucHV0OnN0cmluZywgc2VlZD86c3RyaW5nKTpzdHJpbmcgPT4ge1xyXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgICAgICBzZWVkID0gc2VlZC5yZXBsYWNlKC9bXmEtekEtWl0vZywgJycpLnRvVXBwZXJDYXNlKCk7IFxyXG4gICAgICAgIGlmKHNlZWQpIHtcclxuICAgICAgICAgICAgbGV0IHJvd3MgPSB0aGlzLnN0YXRlLmN5cGhlci5rZXlEaXNwbGF5VGFibGUucm93cztcclxuICAgICAgICAgICAgbGV0IG5ld0NoYXIgPSBpbnB1dC5jaGFyQXQoaW5wdXQubGVuZ3RoLTEpO1xyXG4gICAgICAgICAgICBsZXQgc2VlZENoYXIgPSBzZWVkLmNoYXJBdCgoaW5wdXQubGVuZ3RoLTEpICUgc2VlZC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gcm93c1tuZXdDaGFyLmNoYXJDb2RlQXQoMCktNjVdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7IGk8cm93Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHJvd1tpXS5rZXkuY2hhckF0KDApID09PSBzZWVkQ2hhcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93W2ldID0ge2tleTpyb3dbaV0ua2V5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6cm93W2ldLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzOiAocm93W2ldLmNsYXNzTmFtZXMpID8gcm93W2ldLmNsYXNzTmFtZXMgKyBcIiBhbmltYXRlXCIgOiAnJyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N5cGhlcjogdGhpcy5jeXBoZXJ9KVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jeXBoZXIuZW5jcnlwdChpbnB1dCxzZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN5cGhlci5lbmNyeXB0KGlucHV0LHRoaXMuc3RhdGUuc2VlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlY3J5cHQgPSAoaW5wdXQ6c3RyaW5nLCBzZWVkPzpzdHJpbmcpOnN0cmluZyA9PntcclxuICAgICAgICBpZihzZWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN5cGhlci5kZWNyeXB0KGlucHV0LHNlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3lwaGVyLmRlY3J5cHQoaW5wdXQsdGhpcy5zdGF0ZS5zZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT0nQ3lwaGVyfFZpZ2Vuw6hyZSc+XHJcbiAgICAgICAgICAgICAgICA8U3Vic3RpdHV0aW9uQ29udGFpbmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ2ZWdlbmVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIlZpZ2Vuw6hyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXJDYXNlU2VlZE9ubHkgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVGbiA9IHt0aGlzLmdlbmVyYXRlRW5jb2Rpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdEZuID0ge3RoaXMuZW5jcnlwdH1cclxuICAgICAgICAgICAgICAgICAgICBkZWNyeXB0Rm4gPSB7dGhpcy5kZWNyeXB0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lci1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgVmlnZW7DqHJlIGNpcGhlciB1c2VzIGEgdGFibGUgd2hlcmUgdGhlIGF2YWlsYWJsZSBjaGFyYWN0ZXJzIGFyZSBzaGlmdGVkLiBBIGtleSBzZWVkIGlzIHVzZWQgaW4gY29tYmluYXRpb24gd2l0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHBsYWludGV4dCB0byBkZXRlcm1pbmUgdGhlIGNpcGhlci4gTW9yZSBkZXRhaWxzIGNhbiBiZSBmb3VuZCBvbiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9WaWdlbiVDMyVBOHJlX2NpcGhlclwiIHRhcmdldD1cIl9ibGFua1wiPjxpPldpa2lwZWRpYTwvaT48L2E+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXQgYSBzZWVkIGtleSBiZWxvdyB1c2luZyBjaGFyYWN0ZXJzIEEtWi4gVGhlIGZpZWxkcyBhcmUgY2FzZSBpbnNlbnNpdGl2ZSBhbmQgYWxsIGlucHV0IGFuZCBvdXRwdXQgaXMgaW4gYWxsIGNhcHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBkZWNyeXB0IGEgcHJldmlvdXNseSBlbnRlcmVkIHZhbHVlLCBpbnB1dCB0aGUgS2V5IFNlZWQgYW5kIHBhc3RlL2VudGVyIHRoZSBlbmNyeXB0ZWQgdmFsdWUgaW4gdGhlIG91dHB1dCB0ZXh0Ym94LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHBsYWludGV4dCBpcyBlbmNvZGVkIGJ5IHVzaW5nIHRoZSBrZXkgc2VlZCBsZXR0ZXIgdG8gZGV0ZXJtaW5lIHRoZSByb3cgb24gdGhlIHRhYmxlIGFuZCB0aGUgcGxhaW50ZXh0IGxldHRlciBmb3IgdGhlIGNvbHVtbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSByZXN1bHRpbmcganVuY3Rpb24gaXMgdGhlIGNpcGhlciBjaGFyYWN0ZXIuIElmIHRoZSBrZXkgc2VlZCBpcyBzaG9ydGVyIHRoYW4gdGhlIHBsYWludGV4dCwgdGhlbiBpdCBpcyByZXBlYXRlZCB0byBjb25zdHJ1Y3QgYSBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzYW1lIGxlbmd0aCBhcyB0aGUgcGxhaW50ZXh0IGlucHV0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEtleURpc3BsYXlUYWJsZSBsYWJlbD17dGhpcy5zdGF0ZS5sYWJlbH0ga2V5VGFibGU9e3RoaXMuc3RhdGUuY3lwaGVyLmtleURpc3BsYXlUYWJsZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N1YnN0aXR1dGlvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2wge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOmdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAuZmxleC1jb250YWluZXItcm93IHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\mobiledan\\\\Code\\\\jssandbox\\\\react\\\\cypher-next\\\\pages\\\\vigenere.tsx */"));
    }
  }]);

  return Vigenere;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy92aWdlbmVyZS50c3giXSwibmFtZXMiOlsiVmlnZW5lcmUiLCJwcm9wcyIsIlZpZ2VuZXJlQ3lwaGVyIiwic2VlZCIsInNldFN0YXRlIiwidG9VcHBlckNhc2UiLCJpbnB1dCIsInJlcGxhY2UiLCJyb3dzIiwic3RhdGUiLCJjeXBoZXIiLCJrZXlEaXNwbGF5VGFibGUiLCJuZXdDaGFyIiwiY2hhckF0IiwibGVuZ3RoIiwic2VlZENoYXIiLCJyb3ciLCJjaGFyQ29kZUF0IiwiaSIsImtleSIsInZhbHVlIiwiY2xhc3NOYW1lcyIsImVuY3J5cHQiLCJkZWNyeXB0IiwibGFiZWwiLCJnZW5lcmF0ZUVuY29kaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBU3FCQSxROzs7OztBQUlqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGlOQUhWLEVBR1U7O0FBQUEsK01BRlosRUFFWTs7QUFBQSxpTkFEVixJQUFJQyxpRUFBSixFQUNVOztBQUFBLDJOQVVBLFVBQUNDLElBQUQsRUFBc0I7QUFDckMsWUFBS0MsUUFBTCxDQUNJO0FBQ0lELFlBQUksRUFBRUEsSUFBSSxDQUFDRSxXQUFMO0FBRFYsT0FESjtBQUtILEtBaEJrQjs7QUFBQSxrTkFrQlQsVUFBQ0MsS0FBRCxFQUFlSCxJQUFmLEVBQXVDO0FBQzdDRyxXQUFLLEdBQUdBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEtBQWQsRUFBcUIsRUFBckIsQ0FBUjtBQUNBSixVQUFJLEdBQUdBLElBQUksQ0FBQ0ksT0FBTCxDQUFhLFlBQWIsRUFBMkIsRUFBM0IsRUFBK0JGLFdBQS9CLEVBQVA7O0FBQ0EsVUFBR0YsSUFBSCxFQUFTO0FBQ0wsWUFBSUssSUFBSSxHQUFHLE1BQUtDLEtBQUwsQ0FB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cEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0UsQ0FISixNQURKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNQQU5KLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBUQVZKLENBREosRUFpQkksTUFBQyw0RUFBRDtBQUFpQixhQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXZSxLQUFuQztBQUEwQyxnQkFBUSxFQUFFLEtBQUtmLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsZUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWpCSixDQVBBLENBREo7QUFBQTtBQUFBO0FBQUEsa3dRQURKO0FBNERIOzs7O0VBcEhpQ2UsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdmlnZW5lcmUuanMuMTBkYzc2NTRlODkyZWVmNmRmMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgU3Vic3RpdHV0aW9uQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1N1YnN0aXR1dGlvbkNvbnRhaW5lclwiO1xyXG5pbXBvcnQgVmlnZW5lcmVDeXBoZXIgZnJvbSBcIi4uL3NlcnZpY2VzL1ZpZ2VuZXJlQ3lwaGVyXCI7XHJcbmltcG9ydCB7S2V5RGlzcGxheVRhYmxlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9LZXlEaXNwbGF5VGFibGVcIlxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIHNlZWQ6c3RyaW5nO1xyXG4gICAgY3lwaGVyOiBWaWdlbmVyZUN5cGhlcjtcclxuICAgIGxhYmVsOnN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZ2VuZXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LFN0YXRlPiB7XHJcbiAgICBoZWFkZXIgPSBbXTtcclxuICAgIGJvZHkgPSBbXTtcclxuICAgIGN5cGhlciA9IG5ldyBWaWdlbmVyZUN5cGhlcigpO1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VlZDogJycsXHJcbiAgICAgICAgICAgIGN5cGhlcjogdGhpcy5jeXBoZXIsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnVmlnZW7DqHJlIFRhYmxlJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICBnZW5lcmF0ZUVuY29kaW5nID0gKHNlZWQ6c3RyaW5nKTp2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWVkOiBzZWVkLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGVuY3J5cHQgPSAoaW5wdXQ6c3RyaW5nLCBzZWVkPzpzdHJpbmcpOnN0cmluZyA9PiB7XHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgICAgIHNlZWQgPSBzZWVkLnJlcGxhY2UoL1teYS16QS1aXS9nLCAnJykudG9VcHBlckNhc2UoKTsgXHJcbiAgICAgICAgaWYoc2VlZCkge1xyXG4gICAgICAgICAgICBsZXQgcm93cyA9IHRoaXMuc3RhdGUuY3lwaGVyLmtleURpc3BsYXlUYWJsZS5yb3dzO1xyXG4gICAgICAgICAgICBsZXQgbmV3Q2hhciA9IGlucHV0LmNoYXJBdChpbnB1dC5sZW5ndGgtMSk7XHJcbiAgICAgICAgICAgIGxldCBzZWVkQ2hhciA9IHNlZWQuY2hhckF0KChpbnB1dC5sZW5ndGgtMSkgJSBzZWVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSByb3dzW25ld0NoYXIuY2hhckNvZGVBdCgwKS02NV07XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDsgaTxyb3cubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYocm93W2ldLmtleS5jaGFyQXQoMCkgPT09IHNlZWRDaGFyKXtcclxuICAgICAgICAgICAgICAgICAgICByb3dbaV0gPSB7a2V5OnJvd1tpXS5rZXksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpyb3dbaV0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM6IChyb3dbaV0uY2xhc3NOYW1lcykgPyByb3dbaV0uY2xhc3NOYW1lcyArIFwiIGFuaW1hdGVcIiA6ICcnICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3lwaGVyOiB0aGlzLmN5cGhlcn0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN5cGhlci5lbmNyeXB0KGlucHV0LHNlZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3lwaGVyLmVuY3J5cHQoaW5wdXQsdGhpcy5zdGF0ZS5zZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGVjcnlwdCA9IChpbnB1dDpzdHJpbmcsIHNlZWQ/OnN0cmluZyk6c3RyaW5nID0+e1xyXG4gICAgICAgIGlmKHNlZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3lwaGVyLmRlY3J5cHQoaW5wdXQsc2VlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jeXBoZXIuZGVjcnlwdChpbnB1dCx0aGlzLnN0YXRlLnNlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPSdDeXBoZXJ8VmlnZW7DqHJlJz5cclxuICAgICAgICAgICAgICAgIDxTdWJzdGl0dXRpb25Db250YWluZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInZlZ2VuZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiVmlnZW7DqHJlXCJcclxuICAgICAgICAgICAgICAgICAgICB1cHBlckNhc2VTZWVkT25seSA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZUZuID0ge3RoaXMuZ2VuZXJhdGVFbmNvZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBlbmNyeXB0Rm4gPSB7dGhpcy5lbmNyeXB0fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY3J5cHRGbiA9IHt0aGlzLmRlY3J5cHR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lci1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyLWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBWaWdlbsOocmUgY2lwaGVyIHVzZXMgYSB0YWJsZSB3aGVyZSB0aGUgYXZhaWxhYmxlIGNoYXJhY3RlcnMgYXJlIHNoaWZ0ZWQuIEEga2V5IHNlZWQgaXMgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcGxhaW50ZXh0IHRvIGRldGVybWluZSB0aGUgY2lwaGVyLiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIG9uICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1ZpZ2VuJUMzJUE4cmVfY2lwaGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGk+V2lraXBlZGlhPC9pPjwvYT4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dCBhIHNlZWQga2V5IGJlbG93IHVzaW5nIGNoYXJhY3RlcnMgQS1aLiBUaGUgZmllbGRzIGFyZSBjYXNlIGluc2Vuc2l0aXZlIGFuZCBhbGwgaW5wdXQgYW5kIG91dHB1dCBpcyBpbiBhbGwgY2Fwcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGRlY3J5cHQgYSBwcmV2aW91c2x5IGVudGVyZWQgdmFsdWUsIGlucHV0IHRoZSBLZXkgU2VlZCBhbmQgcGFzdGUvZW50ZXIgdGhlIGVuY3J5cHRlZCB2YWx1ZSBpbiB0aGUgb3V0cHV0IHRleHRib3guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcGxhaW50ZXh0IGlzIGVuY29kZWQgYnkgdXNpbmcgdGhlIGtleSBzZWVkIGxldHRlciB0byBkZXRlcm1pbmUgdGhlIHJvdyBvbiB0aGUgdGFibGUgYW5kIHRoZSBwbGFpbnRleHQgbGV0dGVyIGZvciB0aGUgY29sdW1uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHJlc3VsdGluZyBqdW5jdGlvbiBpcyB0aGUgY2lwaGVyIGNoYXJhY3Rlci4gSWYgdGhlIGtleSBzZWVkIGlzIHNob3J0ZXIgdGhhbiB0aGUgcGxhaW50ZXh0LCB0aGVuIGl0IGlzIHJlcGVhdGVkIHRvIGNvbnN0cnVjdCBhIGtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNhbWUgbGVuZ3RoIGFzIHRoZSBwbGFpbnRleHQgaW5wdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8S2V5RGlzcGxheVRhYmxlIGxhYmVsPXt0aGlzLnN0YXRlLmxhYmVsfSBrZXlUYWJsZT17dGhpcy5zdGF0ZS5jeXBoZXIua2V5RGlzcGxheVRhYmxlfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU3Vic3RpdHV0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItcm93IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6Z3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==