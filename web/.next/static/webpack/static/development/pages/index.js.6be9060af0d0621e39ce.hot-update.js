webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Intro100.js":
/*!*****************************************!*\
  !*** ./components/sections/Intro100.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro100.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Intro100(props) {
  var _props$media = props.media,
      media = _props$media === void 0 ? "" : _props$media,
      _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference;

  var asset = media.condition ? media.video.mux.asset : media.image.asset,
      type = media.condition ? "video" : "image",
      _useGlobal = useGlobal("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerSize = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-4008603855" + " " + "intro__section intro__section--100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-4008603855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-4008603855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, reference && reference.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4008603855",
    __self: this
  }, ".intro__section.intro__section--100 figcaption{color:white;mix-blend-mode:difference;padding:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm8xMDAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJzQixBQUdrQixZQUNjLDBCQUNYLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm8xMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEludHJvMTAwKHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiIH0gPSBwcm9wcztcblxuXHRjb25zdCBhc3NldCA9IG1lZGlhLmNvbmRpdGlvbiA/IG1lZGlhLnZpZGVvLm11eC5hc3NldCA6IG1lZGlhLmltYWdlLmFzc2V0LFxuXHRcdHR5cGUgPSBtZWRpYS5jb25kaXRpb24gPyBcInZpZGVvXCIgOiBcImltYWdlXCIsXG5cdFx0W2hlYWRlclNpemUsIHNldEhlYWRlckhlaWdodF0gPSB1c2VHbG9iYWwoXCJoZWFkZXJTaXplXCIpO1xuXG5cdGxldCBvZmZzZXRIZWFkZXIgPSBoZWFkZXJTaXplICYmIGhlYWRlclNpemUuaGVpZ2h0ICogLTE7XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb19fc2VjdGlvbiBpbnRyb19fc2VjdGlvbi0tMTAwXCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPntyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnRpdGxlfTwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTEwMCBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0bWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG5cdFx0XHRcdFx0cGFkZGluZzogMC41cmVtO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybzEwMDtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro100.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro100);

/***/ })

})
//# sourceMappingURL=index.js.6be9060af0d0621e39ce.hot-update.js.map