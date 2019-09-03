webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/hooks/useDimensions.js":
/*!**************************************!*\
  !*** ./utils/hooks/useDimensions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);

 // import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from "./types";

function getDimensionObject(node) {
  var rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : rect.top,
    left: "y" in rect ? rect.y : rect.left,
    x: "x" in rect ? rect.x : rect.left,
    y: "y" in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
}

function useDimensions() {
  var _useState = Object(reactn__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var _useState3 = Object(reactn__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  var ref = Object(reactn__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (node) {
    setNode(node);
  }, []);
  Object(reactn__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (node) {
      var measure = function measure() {
        window.requestAnimationFrame(function () {
          return setDimensions(getDimensionObject(node));
        });
        Object(reactn__WEBPACK_IMPORTED_MODULE_1__["setGlobal"])({
          headerHeight: 44
        });
      };

      measure();
      window.addEventListener("resize", measure); // window.addEventListener("scroll", measure);

      return function () {
        window.removeEventListener("resize", measure); // window.removeEventListener("scroll", measure);
      };
    }
  }, [node]);
  return [ref, dimensions, node];
}

/* harmony default export */ __webpack_exports__["default"] = (useDimensions);

/***/ })

})
//# sourceMappingURL=index.js.4b7a6829bd4b5c3b1414.hot-update.js.map