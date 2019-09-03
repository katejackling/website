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
  console.log(content);
  return __jsx("section", {
    className: "jsx-4001153962" + " " + "intro__section intro__section--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-4001153962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, content.map(function (_ref, i) {
    var _type = _ref._type,
        media = _ref.media,
        media_left = _ref.media_left,
        media_right = _ref.media_right;
    media = media ? media : media_left;
    console.log(i, media);
    return media && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      type: media && media.type,
      asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
      gif: media && media.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: iR,
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  }), __jsx("figcaption", {
    className: "jsx-4001153962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4001153962",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figcaption{font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEc0IsQUFHNkMsQUFHNEIsdUNBRnBFLDRCQUdzRSxxRUFFeEMsaUdBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvY2tcIjtcblxuZnVuY3Rpb24gSW50cm9UZXh0KHByb3BzKSB7XG5cdGNvbnNvbGUubG9nKHByb3BzKTtcblxuXHRjb25zdCB7IHJlZmVyZW5jZSA9IFwiXCIsIHRleHQgfSA9IHByb3BzLFxuXHRcdGNvbnRlbnQgPSByZWZlcmVuY2UuY29udGVudDtcblxuXHRjb25zb2xlLmxvZyhjb250ZW50KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS10ZXh0XCI+XG5cdFx0XHQ8TGluayB0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0XHR7Y29udGVudC5tYXAoKHsgX3R5cGUsIG1lZGlhLCBtZWRpYV9sZWZ0LCBtZWRpYV9yaWdodCB9LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRtZWRpYSA9IG1lZGlhID8gbWVkaWEgOiBtZWRpYV9sZWZ0O1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaSwgbWVkaWEpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRtZWRpYSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXttZWRpYSAmJiBtZWRpYS50eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0YXNzZXQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYSAmJiBtZWRpYS50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IG1lZGlhLnZpZGVvLm11eC5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogbWVkaWEuaW1hZ2UuYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGdpZj17bWVkaWEgJiYgbWVkaWEudHlwZSA9PT0gXCJ2aWRlb1wifVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdG1lZGlhX3JpZ2h0ICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aVJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXttZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0YXNzZXQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IG1lZGlhX3JpZ2h0LnZpZGVvLm11eC5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogbWVkaWFfcmlnaHQuaW1hZ2UuYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGdpZj17bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZSA9PT0gXCJ2aWRlb1wifVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cblx0XHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHRcdDxCbG9jayBibG9ja3M9e3RleHR9IC8+XG5cdFx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IGNhbGMoNDhweCArICgxMjAgLSA0OCkgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBjYWxjKDUycHggKyAoMTE1IC0gNTIpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMikgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKVxuXHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9UZXh0O1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.d3811d3fbfef62f55b65.hot-update.js.map