webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _utils_redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/redux/actions */ "./utils/redux/actions.js");
/* harmony import */ var _utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks/useDimensions */ "./utils/hooks/useDimensions.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import useDimensions from "react-use-dimensions";





function Header(props) {
  var toggleNav = props.toggleNav,
      navOpen = props.navOpen,
      _useDimensions = Object(_utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      _useDimensions2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      headerRef = _useDimensions2[0],
      headerSize = _useDimensions2[1],
      offsetHeader = headerSize.height * -1;

  return __jsx("header", {
    ref: headerRef,
    "data-nav-active": navOpen,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Kate Jackling"), __jsx("button", {
    onClick: function onClick() {
      return toggleNav(!navOpen);
    },
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, navOpen ? "Close" : "Menu"), __jsx("nav", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "stilllife",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Stilllife")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "commercial",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Commercial")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "film",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Film")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "info",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Info")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "621272809",
    __self: this
  }, "header{position:fixed;top:0;left:0;width:100%;padding:var(--marginOuter);z-index:99;}header a{display:inline;}nav ul li{cursor:pointer;}@media screen and (max-width:639px){header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}nav{width:100%;margin-top:var(--marginMedium);font-size:var(--font-size--large);line-height:1.045;}header[data-nav-active=\"true\"]{height:calc(100 * var(--vH));background:white;}header[data-nav-active=\"true\"]>*{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}header[data-nav-active=\"false\"] nav{display:none;}}@media screen and (min-width:640px){header button{display:none;}nav ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav ul li:not(:last-child)::after{content:\", \";margin-right:0.25em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fc0IsQUFHcUIsQUFTQSxBQUlBLEFBS0QsQUFPRixBQU9rQixBQUtQLEFBSVQsQUFNQSxBQUlBLEFBSUEsV0E3QmtCLEVBZ0JoQyxBQU1BLEFBUXFCLEVBdkRmLEFBU1AsQUFJQSxNQVpRLE9BQ0ksQ0E4Qk8sSUF3QmxCLE1BckQyQixHQXVCUSxJQU9uQyxvQkE3QlcsUUFjb0IsQUFpQy9CLEVBeEJtQixDQXRCcEIsQ0FnQ0MsZ0JBVEEsK0ZBVDBCLG1GQUNWLHlEQUNoQiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIGdldEdsb2JhbCwgc2V0R2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyB0b2dnbGVOYXYgfSBmcm9tIFwiLi4vdXRpbHMvcmVkdXgvYWN0aW9uc1wiO1xuLy8gaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LXVzZS1kaW1lbnNpb25zXCI7XG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwiLi4vdXRpbHMvaG9va3MvdXNlRGltZW5zaW9uc1wiO1xuXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG5cdGNvbnN0IHsgdG9nZ2xlTmF2LCBuYXZPcGVuIH0gPSBwcm9wcyxcblx0XHRbaGVhZGVyUmVmLCBoZWFkZXJTaXplXSA9IHVzZURpbWVuc2lvbnMoKSxcblx0XHRvZmZzZXRIZWFkZXIgPSBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciByZWY9e2hlYWRlclJlZn0gZGF0YS1uYXYtYWN0aXZlPXtuYXZPcGVufT5cblx0XHRcdDxoMT5LYXRlIEphY2tsaW5nPC9oMT5cblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2KCFuYXZPcGVuKX0+e25hdk9wZW4gPyBcIkNsb3NlXCIgOiBcIk1lbnVcIn08L2J1dHRvbj5cblx0XHRcdDxuYXY+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHR0bz1cInN0aWxsbGlmZVwiXG5cdFx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0U3RpbGxsaWZlXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHR0bz1cImNvbW1lcmNpYWxcIlxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdENvbW1lcmNpYWxcblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwiZmlsbVwiXG5cdFx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0RmlsbVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dG89XCJpbmZvXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRJbmZvXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0aGVhZGVyIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luT3V0ZXIpO1xuXHRcdFx0XHRcdHotaW5kZXg6IDk5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aGVhZGVyIGEge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5hdiB1bCBsaSB7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHRoZWFkZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bmF2IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogdmFyKC0tbWFyZ2luTWVkaXVtKTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLS1sYXJnZSk7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4wNDU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aGVhZGVyW2RhdGEtbmF2LWFjdGl2ZT1cInRydWVcIl0ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCAqIHZhcigtLXZIKSk7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoZWFkZXJbZGF0YS1uYXYtYWN0aXZlPVwidHJ1ZVwiXSA+ICoge1xuXHRcdFx0XHRcdFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoZWFkZXJbZGF0YS1uYXYtYWN0aXZlPVwiZmFsc2VcIl0gbmF2IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHRoZWFkZXIgYnV0dG9uIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bmF2IHVsIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bmF2IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiLCBcIjtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMC4yNWVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuXHRuYXZPcGVuOiBzdGF0ZS5uYXYubmF2T3BlblxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7IHRvZ2dsZU5hdiB9LCBkaXNwYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0bWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEhlYWRlcik7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js */"));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    navOpen: state.nav.navOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
    toggleNav: _utils_redux_actions__WEBPACK_IMPORTED_MODULE_6__["toggleNav"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.fb709ca1774b3025b6b0.hot-update.js.map