webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/IntroPair.js":
/*!******************************************!*\
  !*** ./components/sections/IntroPair.js ***!
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
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function IntroPair(props) {
  var layout = props.layout,
      reference = props.reference,
      media_left = props.media_left,
      media_right = props.media_right,
      prio = layout === "Large & Small" ? 2 : 1,
      asset_left = media_left.type === "video" ? media_left.video.mux.asset : media_left.image.asset,
      type_left = media_left.type,
      asset_right = media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      type_right = media_right.type;
  return __jsx("section", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]) + " " + "intro__section intro__section--pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference[0] && reference[0]._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    asset: asset_left,
    type: type_left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference[0] && reference[0]._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, reference[0] && reference[0].title))), __jsx("figure", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference[1] && reference[1]._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    asset: asset_right,
    type: type_right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference[1] && reference[1]._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, reference[1] && reference[1].title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2124198383",
    __self: this
  }, "@media screen and (min-width:640px){.intro__section.intro__section--pair{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--pair figure{width:50%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDc0IsQUFJb0IsQUFPSCxVQUVtQixnRUFSQyxvQkFTUiw4RUFDdkIsaUJBVGtCLCtEQUNzQix1Q0FDeEMiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRyb1BhaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEludHJvUGFpcihwcm9wcykge1xuXHRjb25zdCB7IGxheW91dCwgcmVmZXJlbmNlLCBtZWRpYV9sZWZ0LCBtZWRpYV9yaWdodCB9ID0gcHJvcHMsXG5cdFx0cHJpbyA9IGxheW91dCA9PT0gXCJMYXJnZSAmIFNtYWxsXCIgPyAyIDogMSxcblx0XHRhc3NldF9sZWZ0ID1cblx0XHRcdG1lZGlhX2xlZnQudHlwZSA9PT0gXCJ2aWRlb1wiID8gbWVkaWFfbGVmdC52aWRlby5tdXguYXNzZXQgOiBtZWRpYV9sZWZ0LmltYWdlLmFzc2V0LFxuXHRcdHR5cGVfbGVmdCA9IG1lZGlhX2xlZnQudHlwZSxcblx0XHRhc3NldF9yaWdodCA9XG5cdFx0XHRtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCIgPyBtZWRpYV9yaWdodC52aWRlby5tdXguYXNzZXQgOiBtZWRpYV9yaWdodC5pbWFnZS5hc3NldCxcblx0XHR0eXBlX3JpZ2h0ID0gbWVkaWFfcmlnaHQudHlwZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS1wYWlyXCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGluayB0bz17cmVmZXJlbmNlWzBdICYmIHJlZmVyZW5jZVswXS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0X2xlZnR9IHR5cGU9e3R5cGVfbGVmdH0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0uX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cmVmZXJlbmNlWzBdICYmIHJlZmVyZW5jZVswXS50aXRsZX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGluayB0bz17cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0X3JpZ2h0fSB0eXBlPXt0eXBlX3JpZ2h0fSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2VbMV0gJiYgcmVmZXJlbmNlWzFdLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS1wYWlyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAwXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciBmaWd1cmU6bnRoLWNoaWxkKCR7cHJpb30pIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciBmaWd1cmU6bnRoLWNoaWxkKCR7cHJpb30pIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1BhaXI7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3903898118",
    dynamic: [prio, prio],
    __self: this
  }, "@media screen and (max-width:639px){.intro__section.intro__section--pair.__jsx-style-dynamic-selector figure.__jsx-style-dynamic-selector:nth-child(".concat(prio, "){padding:var(--marginOuter);}}@media screen and (min-width:640px){.intro__section.intro__section--pair.__jsx-style-dynamic-selector figure.__jsx-style-dynamic-selector:nth-child(").concat(prio, "){width:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFZSxBQUlrQyxBQU1qQixVQUNYLGlCQU5BIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRyb1BhaXIocHJvcHMpIHtcblx0Y29uc3QgeyBsYXlvdXQsIHJlZmVyZW5jZSwgbWVkaWFfbGVmdCwgbWVkaWFfcmlnaHQgfSA9IHByb3BzLFxuXHRcdHByaW8gPSBsYXlvdXQgPT09IFwiTGFyZ2UgJiBTbWFsbFwiID8gMiA6IDEsXG5cdFx0YXNzZXRfbGVmdCA9XG5cdFx0XHRtZWRpYV9sZWZ0LnR5cGUgPT09IFwidmlkZW9cIiA/IG1lZGlhX2xlZnQudmlkZW8ubXV4LmFzc2V0IDogbWVkaWFfbGVmdC5pbWFnZS5hc3NldCxcblx0XHR0eXBlX2xlZnQgPSBtZWRpYV9sZWZ0LnR5cGUsXG5cdFx0YXNzZXRfcmlnaHQgPVxuXHRcdFx0bWVkaWFfcmlnaHQudHlwZSA9PT0gXCJ2aWRlb1wiID8gbWVkaWFfcmlnaHQudmlkZW8ubXV4LmFzc2V0IDogbWVkaWFfcmlnaHQuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZV9yaWdodCA9IG1lZGlhX3JpZ2h0LnR5cGU7XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb19fc2VjdGlvbiBpbnRyb19fc2VjdGlvbi0tcGFpclwiPlxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmsgdG89e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0uX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldF9sZWZ0fSB0eXBlPXt0eXBlX2xlZnR9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdHRvPXtyZWZlcmVuY2VbMF0gJiYgcmVmZXJlbmNlWzBdLl9pZH1cblx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0udGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmsgdG89e3JlZmVyZW5jZVsxXSAmJiByZWZlcmVuY2VbMV0uX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldF9yaWdodH0gdHlwZT17dHlwZV9yaWdodH0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZVsxXSAmJiByZWZlcmVuY2VbMV0uX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS50aXRsZX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS1wYWlyIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIgKyAxcmVtICsgMXJlbSkgMFxuXHRcdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlOm50aC1jaGlsZCgke3ByaW99KSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlOm50aC1jaGlsZCgke3ByaW99KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9QYWlyO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroPair);

/***/ })

})
//# sourceMappingURL=index.js.4d5746fff1006ba56905.hot-update.js.map