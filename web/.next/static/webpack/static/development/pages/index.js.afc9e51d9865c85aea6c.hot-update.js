webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/hooks/useDimensions.js":
/*!**************************************!*\
  !*** ./utils/hooks/useDimensions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      node = _useState2[0],
      setNode = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
    setNode(node);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (node) {
      var measure = function measure() {
        window.requestAnimationFrame(function () {
          return setDimensions(getDimensionObject(node));
        });
        console.log(node);
        global && setGlobal({
          node: dimensions
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.afc9e51d9865c85aea6c.hot-update.js.map