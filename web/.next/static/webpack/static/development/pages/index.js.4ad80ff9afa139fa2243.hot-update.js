webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Intro100.js":
/*!*****************************************!*\
  !*** ./components/sections/Intro100.js ***!
  \*****************************************/
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

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro100.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Intro100(props) {
  var _props$media = props.media,
      media = _props$media === void 0 ? "" : _props$media,
      _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference;

  var asset = media.condition ? media.video.mux.asset : media.image.asset,
      type = media.condition ? "video" : "image",
      _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerSize = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-4008603855" + " " + "intro__section intro__section--100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-4008603855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-4008603855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, reference && reference.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4008603855",
    __self: this
  }, ".intro__section.intro__section--100 figcaption{color:white;mix-blend-mode:difference;padding:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm8xMDAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJzQixBQUdrQixZQUNjLDBCQUNYLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm8xMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwicmVhY3RuXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm8xMDAocHJvcHMpIHtcblx0Y29uc3QgeyBtZWRpYSA9IFwiXCIsIHJlZmVyZW5jZSA9IFwiXCIgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGFzc2V0ID0gbWVkaWEuY29uZGl0aW9uID8gbWVkaWEudmlkZW8ubXV4LmFzc2V0IDogbWVkaWEuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZSA9IG1lZGlhLmNvbmRpdGlvbiA/IFwidmlkZW9cIiA6IFwiaW1hZ2VcIixcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS0xMDBcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXR9IHR5cGU9e3R5cGV9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tMTAwIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjVyZW07XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvMTAwO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro100.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro100);

/***/ })

})
//# sourceMappingURL=index.js.4ad80ff9afa139fa2243.hot-update.js.map