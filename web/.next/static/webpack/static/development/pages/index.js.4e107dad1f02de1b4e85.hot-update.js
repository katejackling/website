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
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3861008619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("figcaption", {
    className: "jsx-3861008619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, offsetHeader, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
        lineNumber: 34
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i + "_right",
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })];
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3861008619",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figure{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.intro__section--text figcaption{width:100%;font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}.intro__section--text img,.intro__section--text video{width:auto;height:calc(10rem + var(--marginOuter));padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEc0IsQUFHNkMsQUFJMUIsQUFNRixBQVNBLFdBUndELEFBUzNCLDRCQW5CekMsWUFvQnNDLHVCQWhCdEIsSUFPc0QsVUFVdEUsMkNBaEI0QixnQkFRRSx5RkFQOUIsUUFRQSIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL0ludHJvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEdsb2JhbCwgc2V0R2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCBCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9ja1wiO1xuXG5mdW5jdGlvbiBJbnRyb1RleHQocHJvcHMpIHtcblx0Y29uc3QgeyByZWZlcmVuY2UgPSBcIlwiLCB0ZXh0IH0gPSBwcm9wcyxcblx0XHRjb250ZW50ID0gcmVmZXJlbmNlLmNvbnRlbnQ7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGdldEdsb2JhbCgpLmhlYWRlckhlaWdodCAqIC0xO1xuXHRjb25zb2xlLmxvZyhvZmZzZXRIZWFkZXIpO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXRleHRcIj5cblx0XHRcdDxMaW5rXG5cdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdDxCbG9jayBibG9ja3M9e3RleHR9IC8+XG5cdFx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0XHRcdHtjb250ZW50Lm1hcCgoeyBfdHlwZSwgbWVkaWEsIG1lZGlhX2xlZnQsIG1lZGlhX3JpZ2h0IH0sIGkpID0+IHtcblx0XHRcdFx0XHRcdG1lZGlhID0gbWVkaWEgPyBtZWRpYSA6IG1lZGlhX2xlZnQ7XG5cblx0XHRcdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0XHRcdG1lZGlhICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9e21lZGlhICYmIG1lZGlhLnR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRhc3NldD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhICYmIG1lZGlhLnR5cGUgPT09IFwidmlkZW9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gbWVkaWEudmlkZW8ubXV4LmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBtZWRpYS5pbWFnZS5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Z2lmPXttZWRpYSAmJiBtZWRpYS50eXBlID09PSBcInZpZGVvXCJ9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpICsgXCJfcmlnaHRcIn1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9e21lZGlhX3JpZ2h0ICYmIG1lZGlhX3JpZ2h0LnR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRhc3NldD17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lZGlhX3JpZ2h0ICYmIG1lZGlhX3JpZ2h0LnR5cGUgPT09IFwidmlkZW9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gbWVkaWFfcmlnaHQudmlkZW8ubXV4LmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBtZWRpYV9yaWdodC5pbWFnZS5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Z2lmPXttZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCJ9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9maWd1cmU+XG5cdFx0XHQ8L0xpbms+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGZpZ3VyZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogY2FsYyg0OHB4ICsgKDEyMCAtIDQ4KSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGNhbGMoNTJweCArICgxMTUgLSA1MikgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKSBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpXG5cdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGltZyxcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHZpZGVvIHtcblx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTByZW0gKyB2YXIoLS1tYXJnaW5PdXRlcikpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvVGV4dDtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.4e107dad1f02de1b4e85.hot-update.js.map