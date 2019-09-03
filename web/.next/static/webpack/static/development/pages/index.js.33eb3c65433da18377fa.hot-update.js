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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function IntroText(props) {
  console.log(props);
  var _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      text = props.text,
      content = reference.content;
  return __jsx("section", {
    className: "jsx-2706909197" + " " + "intro__section intro__section--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-2706909197",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("figcaption", {
    className: "jsx-2706909197",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), content.map(function (_ref, i) {
    var _type = _ref._type,
        media = _ref.media,
        media_left = _ref.media_left,
        media_right = _ref.media_right;
    media = media ? media : media_left;
    return [media && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      type: media && media.type,
      asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
      gif: media && media.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i + "_right",
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })];
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2706909197",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figcaption{font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}.intro__section--text img,.intro__section--text video{width:auto;height:10rem;}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ec0IsQUFHNkMsQUFHNEIsQUFReEQsV0FDRSxhQUNkLGVBWkEsNEJBR3NFLHFFQUV4QyxpR0FDOUIiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRyb1RleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCBCbG9jayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9ja1wiO1xuXG5mdW5jdGlvbiBJbnRyb1RleHQocHJvcHMpIHtcblx0Y29uc29sZS5sb2cocHJvcHMpO1xuXG5cdGNvbnN0IHsgcmVmZXJlbmNlID0gXCJcIiwgdGV4dCB9ID0gcHJvcHMsXG5cdFx0Y29udGVudCA9IHJlZmVyZW5jZS5jb250ZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXRleHRcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdHsvKiA8TGluayB0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0XHRcdDxCbG9jayBibG9ja3M9e3RleHR9IC8+XG5cdFx0XHRcdFx0PC9MaW5rPiAqL31cblx0XHRcdFx0XHQ8QmxvY2sgYmxvY2tzPXt0ZXh0fSAvPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdHtjb250ZW50Lm1hcCgoeyBfdHlwZSwgbWVkaWEsIG1lZGlhX2xlZnQsIG1lZGlhX3JpZ2h0IH0sIGkpID0+IHtcblx0XHRcdFx0XHRtZWRpYSA9IG1lZGlhID8gbWVkaWEgOiBtZWRpYV9sZWZ0O1xuXG5cdFx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRcdG1lZGlhICYmIChcblx0XHRcdFx0XHRcdFx0PE1lZGlhXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9e21lZGlhICYmIG1lZGlhLnR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWEgJiYgbWVkaWEudHlwZSA9PT0gXCJ2aWRlb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gbWVkaWEudmlkZW8ubXV4LmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogbWVkaWEuaW1hZ2UuYXNzZXRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Z2lmPXttZWRpYSAmJiBtZWRpYS50eXBlID09PSBcInZpZGVvXCJ9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2kgKyBcIl9yaWdodFwifVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9e21lZGlhX3JpZ2h0ICYmIG1lZGlhX3JpZ2h0LnR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZSA9PT0gXCJ2aWRlb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gbWVkaWFfcmlnaHQudmlkZW8ubXV4LmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogbWVkaWFfcmlnaHQuaW1hZ2UuYXNzZXRcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Z2lmPXttZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCJ9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogY2FsYyg0OHB4ICsgKDEyMCAtIDQ4KSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGNhbGMoNTJweCArICgxMTUgLSA1MikgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKSBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpXG5cdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGltZyxcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHZpZGVvIHtcblx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRoZWlnaHQ6IDEwcmVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1RleHQ7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.33eb3c65433da18377fa.hot-update.js.map