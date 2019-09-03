webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/IntroText.js":
/*!******************************************!*\
  !*** ./components/sections/IntroText.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function IntroText(props) {
  console.log(props);
  var _props$media = props.media,
      media = _props$media === void 0 ? "" : _props$media,
      _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? "" : _props$layout,
      text = props.text;
  var asset = media.condition ? media.video.mux.asset : media.image.asset,
      type = media.condition ? "video" : "image";
  return __jsx("section", {
    className: "jsx-2192861612" + " " + "intro__section intro__section--50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-2192861612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2192861612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2192861612",
    __self: this
  }, "@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCc0IiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRyb1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEludHJvVGV4dChwcm9wcykge1xuXHRjb25zb2xlLmxvZyhwcm9wcyk7XG5cblx0Y29uc3QgeyBtZWRpYSA9IFwiXCIsIHJlZmVyZW5jZSA9IFwiXCIsIGxheW91dCA9IFwiXCIsIHRleHQgfSA9IHByb3BzO1xuXHRjb25zdCBhc3NldCA9IG1lZGlhLmNvbmRpdGlvbiA/IG1lZGlhLnZpZGVvLm11eC5hc3NldCA6IG1lZGlhLmltYWdlLmFzc2V0LFxuXHRcdHR5cGUgPSBtZWRpYS5jb25kaXRpb24gPyBcInZpZGVvXCIgOiBcImltYWdlXCI7XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb19fc2VjdGlvbiBpbnRyb19fc2VjdGlvbi0tNTBcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rIHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH0gc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXR9IHR5cGU9e3R5cGV9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0PExpbmsgdG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdFx0XHR7cmVmZXJlbmNlICYmIHJlZmVyZW5jZS50aXRsZX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9UZXh0O1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.8032c43f63d1d1820caa.hot-update.js.map