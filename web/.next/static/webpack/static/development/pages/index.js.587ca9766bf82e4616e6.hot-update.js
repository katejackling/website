webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/hooks/useDimensions.js":
/*!**************************************!*\
  !*** ./utils/hooks/useDimensions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);


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

function useDimensions(global) {
  var _useState = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var _useState3 = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  var ref = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (node) {
    setNode(node);
  }, []);
  Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (node) {
      var measure = function measure() {
        window.requestAnimationFrame(function () {
          return setDimensions(getDimensionObject(node));
        });

        var globalObj = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, global.global, getDimensionObject(node));

        console.log(getDimensionObject(node), global.global, globalObj);
        Object(reactn__WEBPACK_IMPORTED_MODULE_2__["setGlobal"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, global.global, dimensions));
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
//# sourceMappingURL=index.js.587ca9766bf82e4616e6.hot-update.js.map