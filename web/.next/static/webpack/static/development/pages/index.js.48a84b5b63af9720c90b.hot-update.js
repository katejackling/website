webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Media.js":
/*!*****************************!*\
  !*** ./components/Media.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Img */ "./components/Img.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Video */ "./components/Video.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Media.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Media(props) {
  var media = props.media,
      _props$asset = props.asset,
      asset = _props$asset === void 0 ? "" : _props$asset,
      _props$type = props.type,
      type = _props$type === void 0 ? "" : _props$type,
      _props$fit = props.fit,
      fit = _props$fit === void 0 ? null : _props$fit,
      _props$gif = props.gif,
      gif = _props$gif === void 0 ? false : _props$gif;

  if (type === "image") {
    return __jsx(_Img__WEBPACK_IMPORTED_MODULE_1__["default"], {
      asset: asset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  } else {
    return __jsx(_Video__WEBPACK_IMPORTED_MODULE_2__["default"], {
      asset: asset,
      gif: gif,
      controls: media && media.video.videoControls,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

})
//# sourceMappingURL=index.js.48a84b5b63af9720c90b.hot-update.js.map