webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Intro75.js":
/*!****************************************!*\
  !*** ./components/sections/Intro75.js ***!
  \****************************************/
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

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Intro75(props) {
  var _props$media = props.media,
      media = _props$media === void 0 ? "" : _props$media,
      _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? "" : _props$layout;

  var asset = media.condition ? media.video.mux.asset : media.image.asset,
      type = media.condition ? "video" : "image",
      _useGlobal = useGlobal("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerSize = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]) + " " + "intro__section intro__section--75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]),
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
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 25
    },
    __self: this
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3422645003",
    __self: this
  }, "@media screen and (min-width:640px){.intro__section.intro__section--75{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--75 figure{width:75%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3NCLEFBSW9CLEFBS0gsVUFFbUIsZ0VBTlUsb0JBT3hDLG1CQU5BIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm83NShwcm9wcykge1xuXHRjb25zdCB7IG1lZGlhID0gXCJcIiwgcmVmZXJlbmNlID0gXCJcIiwgbGF5b3V0ID0gXCJcIiB9ID0gcHJvcHM7XG5cdGNvbnN0IGFzc2V0ID0gbWVkaWEuY29uZGl0aW9uID8gbWVkaWEudmlkZW8ubXV4LmFzc2V0IDogbWVkaWEuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZSA9IG1lZGlhLmNvbmRpdGlvbiA/IFwidmlkZW9cIiA6IFwiaW1hZ2VcIixcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS03NVwiPlxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldH0gdHlwZT17dHlwZX0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS03NSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tNzUgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAwXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS03NSB7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ICR7bGF5b3V0ID09PSBcImxlZnRcIiA/IFwiZmxleC1zdGFydFwiIDogXCJmbGV4LWVuZFwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBJbnRybzc1O1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3167211398",
    dynamic: [layout === "left" ? "flex-start" : "flex-end"],
    __self: this
  }, "@media screen and (min-width:640px){.intro__section--75.__jsx-style-dynamic-selector{-webkit-box-pack:".concat(layout === "left" ? "flex-start" : "flex-end", ";-webkit-justify-content:").concat(layout === "left" ? "flex-start" : "flex-end", ";-ms-flex-pack:").concat(layout === "left" ? "flex-start" : "flex-end", ";justify-content:").concat(layout === "left" ? "flex-start" : "flex-end", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGUsQUFJb0QsMkxBQzlDIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm83NShwcm9wcykge1xuXHRjb25zdCB7IG1lZGlhID0gXCJcIiwgcmVmZXJlbmNlID0gXCJcIiwgbGF5b3V0ID0gXCJcIiB9ID0gcHJvcHM7XG5cdGNvbnN0IGFzc2V0ID0gbWVkaWEuY29uZGl0aW9uID8gbWVkaWEudmlkZW8ubXV4LmFzc2V0IDogbWVkaWEuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZSA9IG1lZGlhLmNvbmRpdGlvbiA/IFwidmlkZW9cIiA6IFwiaW1hZ2VcIixcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS03NVwiPlxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldH0gdHlwZT17dHlwZX0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS03NSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tNzUgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAwXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS03NSB7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ICR7bGF5b3V0ID09PSBcImxlZnRcIiA/IFwiZmxleC1zdGFydFwiIDogXCJmbGV4LWVuZFwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBJbnRybzc1O1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro75);

/***/ })

})
//# sourceMappingURL=index.js.f6744b6084d0ebe5b60a.hot-update.js.map