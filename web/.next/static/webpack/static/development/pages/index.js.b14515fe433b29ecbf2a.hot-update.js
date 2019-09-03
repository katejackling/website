webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections */ "./components/sections/index.js");

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Intro.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  var Section = _sections__WEBPACK_IMPORTED_MODULE_4__[Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(section._type)];

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console

  return null;
}

function Intro(props) {
  var content = props.content,
      references = props.references;

  if (!content) {
    console.error("Missing section");
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Missing content");
  }

  return __jsx("article", {
    id: "intro",
    className: "jsx-1798990367",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, content.map(function (section, i) {
    var IntroSection = resolveSections(section);

    if (!IntroSection) {
      return __jsx("div", {
        className: "jsx-1798990367",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Missing section ", section._type);
    }

    var ref = section._type === "introPair" ? [references.references_left[i], references.references_right[i]] : references.references[i];
    return __jsx(IntroSection, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      reference: ref,
      key: section._key + i,
      className: "jsx-1798990367" + " " + (section.className != null && section.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1798990367",
    __self: this
  }, "#intro{margin-bottom:var(--marginMedium);}.intro__section,.intro__section figure{position:relative;width:100%;}.intro__section:not(.intro__section--text) figcaption{position:absolute;top:0;left:100%;white-space:nowrap;-webkit-transform:rotate(-90deg) translate(-100%,-100%);-ms-transform:rotate(-90deg) translate(-100%,-100%);transform:rotate(-90deg) translate(-100%,-100%);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;padding:0.5rem 0;}@media screen and (max-width:639px){.intro__section:not(.intro__section--text) figcaption{display:none;}}@media screen and (min-width:640px){#intro,.intro__section:not(:last-child){margin-bottom:15rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NzQixBQUd3QyxBQUtoQixBQUlBLEFBV0osQUFPTyxhQU5yQixLQWZXLEFBSUwsRUFrQk4sSUFqQlUsS0FKWCxLQU5BLEFBV29CLG1CQUM4Qiw0SkFDdkIsMEZBQ1QsaUJBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIEludHJvU2VjdGlvbnMgZnJvbSBcIi4vc2VjdGlvbnNcIjtcblxuZnVuY3Rpb24gcmVzb2x2ZVNlY3Rpb25zKHNlY3Rpb24pIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uYW1lc3BhY2Vcblx0Y29uc3QgU2VjdGlvbiA9IEludHJvU2VjdGlvbnNbY2FwaXRhbGl6ZShzZWN0aW9uLl90eXBlKV07XG5cblx0aWYgKFNlY3Rpb24pIHtcblx0XHRyZXR1cm4gU2VjdGlvbjtcblx0fVxuXG5cdGNvbnNvbGUuZXJyb3IoXCJDYW50IGZpbmQgc2VjdGlvblwiLCBzZWN0aW9uKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBJbnRybyhwcm9wcykge1xuXHRjb25zdCB7IGNvbnRlbnQsIHJlZmVyZW5jZXMgfSA9IHByb3BzO1xuXG5cdGlmICghY29udGVudCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIHNlY3Rpb25cIik7XG5cdFx0cmV0dXJuIDxkaXY+TWlzc2luZyBjb250ZW50PC9kaXY+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBpZD1cImludHJvXCI+XG5cdFx0XHR7Y29udGVudC5tYXAoKHNlY3Rpb24sIGkpID0+IHtcblx0XHRcdFx0Y29uc3QgSW50cm9TZWN0aW9uID0gcmVzb2x2ZVNlY3Rpb25zKHNlY3Rpb24pO1xuXHRcdFx0XHRpZiAoIUludHJvU2VjdGlvbikge1xuXHRcdFx0XHRcdHJldHVybiA8ZGl2Pk1pc3Npbmcgc2VjdGlvbiB7c2VjdGlvbi5fdHlwZX08L2Rpdj47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVmID1cblx0XHRcdFx0XHRzZWN0aW9uLl90eXBlID09PSBcImludHJvUGFpclwiXG5cdFx0XHRcdFx0XHQ/IFtyZWZlcmVuY2VzLnJlZmVyZW5jZXNfbGVmdFtpXSwgcmVmZXJlbmNlcy5yZWZlcmVuY2VzX3JpZ2h0W2ldXVxuXHRcdFx0XHRcdFx0OiByZWZlcmVuY2VzLnJlZmVyZW5jZXNbaV07XG5cdFx0XHRcdHJldHVybiA8SW50cm9TZWN0aW9uIHsuLi5zZWN0aW9ufSByZWZlcmVuY2U9e3JlZn0ga2V5PXtzZWN0aW9uLl9rZXkgKyBpfSAvPjtcblx0XHRcdH0pfVxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0I2ludHJvIHtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLFxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24gZmlndXJlIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmludHJvX19zZWN0aW9uOm5vdCguaW50cm9fX3NlY3Rpb24tLXRleHQpIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMTAwJTtcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSk7XG5cdFx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG5cdFx0XHRcdFx0cGFkZGluZzogMC41cmVtIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbjpub3QoLmludHJvX19zZWN0aW9uLS10ZXh0KSBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQjaW50cm8sXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybztcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Intro.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ })

})
//# sourceMappingURL=index.js.b14515fe433b29ecbf2a.hot-update.js.map