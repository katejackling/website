webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectViewer.js":
/*!*************************************!*\
  !*** ./components/ProjectViewer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var _viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer */ "./components/viewer/index.js");


var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function ProjectViewer(props) {
  var content = props.content,
      clickEnabled = props.clickEnabled,
      _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("slideIndex"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobal, 2),
      slideIndex = _useGlobal2[0],
      setSlide = _useGlobal2[1];

  var resolveSections = function resolveSections(section) {
    // eslint-disable-next-line import/namespace
    var Section = _viewer__WEBPACK_IMPORTED_MODULE_6__[Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(section._type)];

    if (Section) {
      return Section;
    }

    console.error("Cant find section", section); // eslint-disable-line no-console

    return null;
  };

  console.log(slideIndex);
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, content.map(function (section, i) {
    var ViewerSection = resolveSections(section);

    if (!ViewerSection) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Missing section ", section._type);
    }

    return __jsx("li", {
      key: section._key,
      className: slideIndex === i ? "visible" : "hidden",
      onMouseUp: function onMouseUp() {
        console.log(i);

        if (clickEnabled) {
          setSlide(slideIndex === content.length - 1 ? 0 : i + 1);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(ViewerSection, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectViewer);

/***/ })

})
//# sourceMappingURL=index.js.c2fc4607f590580d97a0.hot-update.js.map