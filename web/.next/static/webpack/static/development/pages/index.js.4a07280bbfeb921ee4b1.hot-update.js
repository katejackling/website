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
      content = reference.content; // const asset = media.condition ? media.video.mux.asset : media.image.asset,
  // 	type = media.condition ? "video" : "image";

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
    return (media_left || media) && __jsx(ProjectRowItem, {
      media: media ? media : media_left,
      rowIndex: rowIndex,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), media_right && __jsx(ProjectRowItem, {
      media: media_right,
      rowIndex: rowIndex + 1,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
    media_right && rowIndex++;
  }), __jsx("figcaption", {
    className: "jsx-4001153962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4001153962",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figcaption{font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDc0IsQUFHNkMsQUFHNEIsdUNBRnBFLDRCQUdzRSxxRUFFeEMsaUdBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvY2tcIjtcblxuZnVuY3Rpb24gSW50cm9UZXh0KHByb3BzKSB7XG5cdGNvbnNvbGUubG9nKHByb3BzKTtcblxuXHRjb25zdCB7IHJlZmVyZW5jZSA9IFwiXCIsIHRleHQgfSA9IHByb3BzLFxuXHRcdGNvbnRlbnQgPSByZWZlcmVuY2UuY29udGVudDtcblx0Ly8gY29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0Ly8gXHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXRleHRcIj5cblx0XHRcdDxMaW5rIHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH0gc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9PlxuXHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdHtjb250ZW50Lm1hcCgoeyBfdHlwZSwgbWVkaWEsIG1lZGlhX2xlZnQsIG1lZGlhX3JpZ2h0IH0sIGkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdChtZWRpYV9sZWZ0IHx8IG1lZGlhKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3RSb3dJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYT17bWVkaWEgPyBtZWRpYSA6IG1lZGlhX2xlZnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRyb3dJbmRleD17cm93SW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHR0b3RhbD17dG90YWx9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxQcm9qZWN0Um93SXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0bWVkaWE9e21lZGlhX3JpZ2h0fVxuXHRcdFx0XHRcdFx0XHRcdFx0cm93SW5kZXg9e3Jvd0luZGV4ICsgMX1cblx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsPXt0b3RhbH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgcm93SW5kZXgrKztcblx0XHRcdFx0XHR9KX1cblxuXHRcdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0PEJsb2NrIGJsb2Nrcz17dGV4dH0gLz5cblx0XHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogY2FsYyg0OHB4ICsgKDEyMCAtIDQ4KSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGNhbGMoNTJweCArICgxMTUgLSA1MikgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKSBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpXG5cdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1RleHQ7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.4a07280bbfeb921ee4b1.hot-update.js.map