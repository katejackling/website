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
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
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
      lineNumber: 13
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-2192861612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2192861612",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2192861612",
    __self: this
  }, "@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCc0IiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRyb1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCBCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9ja1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm9UZXh0KHByb3BzKSB7XG5cdGNvbnNvbGUubG9nKHByb3BzKTtcblxuXHRjb25zdCB7IG1lZGlhID0gXCJcIiwgcmVmZXJlbmNlID0gXCJcIiwgbGF5b3V0ID0gXCJcIiwgdGV4dCB9ID0gcHJvcHM7XG5cdGNvbnN0IGFzc2V0ID0gbWVkaWEuY29uZGl0aW9uID8gbWVkaWEudmlkZW8ubXV4LmFzc2V0IDogbWVkaWEuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZSA9IG1lZGlhLmNvbmRpdGlvbiA/IFwidmlkZW9cIiA6IFwiaW1hZ2VcIjtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS01MFwiPlxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmsgdG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldH0gdHlwZT17dHlwZX0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGluayB0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1RleHQ7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.32db8a64c39b8f7dc7a3.hot-update.js.map