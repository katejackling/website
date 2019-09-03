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
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function IntroText(props) {
  var _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      text = props.text,
      content = reference.content;
  var offsetHeader = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["getGlobal"])().headerHeight * -1;
  console.log(offsetHeader);
  return __jsx("section", {
    className: "jsx-3861008619" + " " + "intro__section intro__section--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3861008619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("figcaption", {
    className: "jsx-3861008619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), content.map(function (_ref, i) {
    var _type = _ref._type,
        media = _ref.media,
        media_left = _ref.media_left,
        media_right = _ref.media_right;
    media = media ? media : media_left;
    return [media && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      type: media && media.type,
      asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
      gif: media && media.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i + "_right",
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })];
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3861008619",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figure{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.intro__section--text figcaption{width:100%;font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}.intro__section--text img,.intro__section--text video{width:auto;height:calc(10rem + var(--marginOuter));padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEc0IsQUFHNkMsQUFJMUIsQUFNRixBQVNBLFdBUndELEFBUzNCLDRCQW5CekMsWUFvQnNDLHVCQWhCdEIsSUFPc0QsVUFVdEUsMkNBaEI0QixnQkFRRSx5RkFQOUIsUUFRQSIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL0ludHJvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEdsb2JhbCwgc2V0R2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCBCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9ja1wiO1xuXG5mdW5jdGlvbiBJbnRyb1RleHQocHJvcHMpIHtcblx0Y29uc3QgeyByZWZlcmVuY2UgPSBcIlwiLCB0ZXh0IH0gPSBwcm9wcyxcblx0XHRjb250ZW50ID0gcmVmZXJlbmNlLmNvbnRlbnQ7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGdldEdsb2JhbCgpLmhlYWRlckhlaWdodCAqIC0xO1xuXHRjb25zb2xlLmxvZyhvZmZzZXRIZWFkZXIpO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXRleHRcIj5cblx0XHRcdDxMaW5rIHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH0gc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9PlxuXHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0PEJsb2NrIGJsb2Nrcz17dGV4dH0gLz5cblx0XHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0e2NvbnRlbnQubWFwKCh7IF90eXBlLCBtZWRpYSwgbWVkaWFfbGVmdCwgbWVkaWFfcmlnaHQgfSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0bWVkaWEgPSBtZWRpYSA/IG1lZGlhIDogbWVkaWFfbGVmdDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRcdFx0bWVkaWEgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17bWVkaWEgJiYgbWVkaWEudHlwZX1cblx0XHRcdFx0XHRcdFx0XHRcdGFzc2V0PXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWEgJiYgbWVkaWEudHlwZSA9PT0gXCJ2aWRlb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBtZWRpYS52aWRlby5tdXguYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IG1lZGlhLmltYWdlLmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRnaWY9e21lZGlhICYmIG1lZGlhLnR5cGUgPT09IFwidmlkZW9cIn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRtZWRpYV9yaWdodCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2kgKyBcIl9yaWdodFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZX1cblx0XHRcdFx0XHRcdFx0XHRcdGFzc2V0PXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZSA9PT0gXCJ2aWRlb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBtZWRpYV9yaWdodC52aWRlby5tdXguYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IG1lZGlhX3JpZ2h0LmltYWdlLmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRnaWY9e21lZGlhX3JpZ2h0ICYmIG1lZGlhX3JpZ2h0LnR5cGUgPT09IFwidmlkZW9cIn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdDwvTGluaz5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQgZmlndXJlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQgZmlnY2FwdGlvbiB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDQ4cHggKyAoMTIwIC0gNDgpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogY2FsYyg1MnB4ICsgKDExNSAtIDUyKSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMilcblx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQgaW1nLFxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQgdmlkZW8ge1xuXHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRcdGhlaWdodDogY2FsYygxMHJlbSArIHZhcigtLW1hcmdpbk91dGVyKSk7XG5cdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9UZXh0O1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.8bd75471c8f4cf1e5d23.hot-update.js.map