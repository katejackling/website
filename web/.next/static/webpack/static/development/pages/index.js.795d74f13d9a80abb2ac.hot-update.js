webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/IntroPair.js":
/*!******************************************!*\
  !*** ./components/sections/IntroPair.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function IntroPair(props) {
  var layout = props.layout,
      reference = props.reference,
      media_left = props.media_left,
      media_right = props.media_right,
      prio = layout === "Large & Small" ? 2 : 1,
      asset_left = media_left.type === "video" ? media_left.video.mux.asset : media_left.image.asset,
      type_left = media_left.type,
      asset_right = media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      type_right = media_right.type,
      _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerSize = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3903898118", [prio, prio]]]) + " " + "intro__section intro__section--pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference[0] && reference[0]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    asset: asset_left,
    type: type_left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference[0] && reference[0]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, reference[0] && reference[0].title))), __jsx("figure", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference[1] && reference[1]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    asset: asset_right,
    type: type_right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference[1] && reference[1]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, reference[1] && reference[1].title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2124198383",
    __self: this
  }, "@media screen and (min-width:640px){.intro__section.intro__section--pair{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--pair figure{width:50%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFc0IsQUFJb0IsQUFPSCxVQUVtQixnRUFSQyxvQkFTUiw4RUFDdkIsaUJBVGtCLCtEQUNzQix1Q0FDeEMiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRyb1BhaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwicmVhY3RuXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm9QYWlyKHByb3BzKSB7XG5cdGNvbnN0IHsgbGF5b3V0LCByZWZlcmVuY2UsIG1lZGlhX2xlZnQsIG1lZGlhX3JpZ2h0IH0gPSBwcm9wcyxcblx0XHRwcmlvID0gbGF5b3V0ID09PSBcIkxhcmdlICYgU21hbGxcIiA/IDIgOiAxLFxuXHRcdGFzc2V0X2xlZnQgPVxuXHRcdFx0bWVkaWFfbGVmdC50eXBlID09PSBcInZpZGVvXCIgPyBtZWRpYV9sZWZ0LnZpZGVvLm11eC5hc3NldCA6IG1lZGlhX2xlZnQuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZV9sZWZ0ID0gbWVkaWFfbGVmdC50eXBlLFxuXHRcdGFzc2V0X3JpZ2h0ID1cblx0XHRcdG1lZGlhX3JpZ2h0LnR5cGUgPT09IFwidmlkZW9cIiA/IG1lZGlhX3JpZ2h0LnZpZGVvLm11eC5hc3NldCA6IG1lZGlhX3JpZ2h0LmltYWdlLmFzc2V0LFxuXHRcdHR5cGVfcmlnaHQgPSBtZWRpYV9yaWdodC50eXBlLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXBhaXJcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0uX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXRfbGVmdH0gdHlwZT17dHlwZV9sZWZ0fSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlWzBdICYmIHJlZmVyZW5jZVswXS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0udGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHR0bz17cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS5faWR9XG5cdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldF9yaWdodH0gdHlwZT17dHlwZV9yaWdodH0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZVsxXSAmJiByZWZlcmVuY2VbMV0uX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2VbMV0gJiYgcmVmZXJlbmNlWzFdLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS1wYWlyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAwXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciBmaWd1cmU6bnRoLWNoaWxkKCR7cHJpb30pIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciBmaWd1cmU6bnRoLWNoaWxkKCR7cHJpb30pIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1BhaXI7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3903898118",
    dynamic: [prio, prio],
    __self: this
  }, "@media screen and (max-width:639px){.intro__section.intro__section--pair.__jsx-style-dynamic-selector figure.__jsx-style-dynamic-selector:nth-child(".concat(prio, "){padding:var(--marginOuter);}}@media screen and (min-width:640px){.intro__section.intro__section--pair.__jsx-style-dynamic-selector figure.__jsx-style-dynamic-selector:nth-child(").concat(prio, "){width:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GZSxBQUlrQyxBQU1qQixVQUNYLGlCQU5BIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEludHJvUGFpcihwcm9wcykge1xuXHRjb25zdCB7IGxheW91dCwgcmVmZXJlbmNlLCBtZWRpYV9sZWZ0LCBtZWRpYV9yaWdodCB9ID0gcHJvcHMsXG5cdFx0cHJpbyA9IGxheW91dCA9PT0gXCJMYXJnZSAmIFNtYWxsXCIgPyAyIDogMSxcblx0XHRhc3NldF9sZWZ0ID1cblx0XHRcdG1lZGlhX2xlZnQudHlwZSA9PT0gXCJ2aWRlb1wiID8gbWVkaWFfbGVmdC52aWRlby5tdXguYXNzZXQgOiBtZWRpYV9sZWZ0LmltYWdlLmFzc2V0LFxuXHRcdHR5cGVfbGVmdCA9IG1lZGlhX2xlZnQudHlwZSxcblx0XHRhc3NldF9yaWdodCA9XG5cdFx0XHRtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCIgPyBtZWRpYV9yaWdodC52aWRlby5tdXguYXNzZXQgOiBtZWRpYV9yaWdodC5pbWFnZS5hc3NldCxcblx0XHR0eXBlX3JpZ2h0ID0gbWVkaWFfcmlnaHQudHlwZSxcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS1wYWlyXCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2VbMF0gJiYgcmVmZXJlbmNlWzBdLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0X2xlZnR9IHR5cGU9e3R5cGVfbGVmdH0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0uX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2VbMF0gJiYgcmVmZXJlbmNlWzBdLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZVsxXSAmJiByZWZlcmVuY2VbMV0uX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXRfcmlnaHR9IHR5cGU9e3R5cGVfcmlnaHR9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdHRvPXtyZWZlcmVuY2VbMV0gJiYgcmVmZXJlbmNlWzFdLl9pZH1cblx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS50aXRsZX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS1wYWlyIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIgKyAxcmVtICsgMXJlbSkgMFxuXHRcdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlOm50aC1jaGlsZCgke3ByaW99KSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlOm50aC1jaGlsZCgke3ByaW99KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9QYWlyO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroPair);

/***/ })

})
//# sourceMappingURL=index.js.795d74f13d9a80abb2ac.hot-update.js.map