webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectViewerContainer.js":
/*!**********************************************!*\
  !*** ./components/ProjectViewerContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/hooks/useLockBodyScroll */ "./utils/hooks/useLockBodyScroll.js");
/* harmony import */ var _ProjectViewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProjectViewer */ "./components/ProjectViewer.js");


var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 // import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { setSlide, resetViewer } from "../utils/redux/actions";









function ProjectViewerContainer(props) {
  var viewerContent = props.viewerContent,
      id = props.id,
      viewerOpen = props.viewerOpen,
      viewerID = props.viewerID,
      slideIndex = props.slideIndex,
      setSlide = props.setSlide,
      resetViewer = props.resetViewer;

  var _useState = Object(reactn__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      clickEnabled = _useState2[0],
      toggleClick = _useState2[1];

  var windowSize = Object(_utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])();
  if (!viewerContent) return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Loading");

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["useSpring"])(function () {
    return {
      y: 0,
      onFrame: function onFrame(params) {
        var y = params.y;

        if (Math.abs(y) <= 2) {
          toggleClick(true);
        }

        if (Math.abs(y) >= windowSize.height / 4) {
          resetViewer(); //toggleClick(true);
        }
      },
      onRest: function onRest() {
        toggleClick(true);
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      y = _useSpring2[0].y,
      set = _useSpring2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_9__["useGesture"])({
    onDrag: function onDrag(_ref) {
      var down = _ref.down,
          delta = _ref.delta,
          velocity = _ref.velocity;
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["clamp"])(velocity, 1, 8);
      toggleClick(!down);
      set({
        y: down ? delta[1] : 0,
        config: {
          mass: velocity,
          tension: 500 * velocity,
          friction: 50
        }
      });
    },
    onWheel: function onWheel(_ref2) {
      var active = _ref2.active,
          delta = _ref2.delta,
          velocity = _ref2.velocity,
          _ref2$temp = _ref2.temp,
          temp = _ref2$temp === void 0 ? y.getValue() : _ref2$temp;
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["clamp"])(velocity, 1, 8);
      toggleClick(!active);
      set({
        y: active ? temp + delta[1] * -1 : 0,
        config: {
          mass: velocity,
          tension: 500 * velocity,
          friction: 50
        }
      });
    }
  });
  Object(_utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_11__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer__overlay"
  }, bind(), {
    style: {
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("h2", {
    className: "project__viewer__caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Test")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].section, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer"
  }, bind(), {
    style: {
      transform: viewerOpen ? y.interpolate(function (y) {
        return "translate3d(0,".concat(y, "px,0)");
      }) : "none",
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_ProjectViewer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    content: viewerContent,
    clickEnabled: clickEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2404343687",
    __self: this
  }, ".project__viewer{position:fixed;top:0;left:0;width:100%;height:calc(100 * var(--vH));z-index:9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}.project__viewer:active{cursor:-webkit-grabbing !important;cursor:-moz-grabbing !important;cursor:grabbing !important;cursor:-webkit--moz-grabbing !important;cursor:-moz--moz-grabbing !important;cursor:-moz-grabbing !important;cursor:-webkit--webkit-grabbing !important;cursor:-moz--webkit-grabbing !important;cursor:-webkit-grabbing !important;}.project__viewer__overlay{position:fixed;top:0;left:0;bottom:0;right:0;z-index:8;background:white;}.project__viewer__caption{position:fixed;left:0;bottom:0;width:100%;padding:var(--marginOuter);z-index:12;}.project__viewer ul{position:relative;width:100%;height:100%;}.project__viewer li{position:absolute;top:0;left:0;width:100%;height:100%;}.project__viewer li.hidden{visibility:hidden;z-index:-1;}.project__viewer figure{width:100%;height:100%;position:relative;}.project__viewer figure:not(.pair) img,.project__viewer figure:not(.pair) .player__wrapper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer;}[data-orientation=\"portrait\"] video{width:auto;height:100%;}[data-orientation=\"landscape\"] video{width:100%;height:auto;}.project__viewer img,.project__viewer video{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-touch-callout:none;}.project__viewer figure.contain{max-width:100vmin;margin:0 auto;}.project__viewer figure.contain [data-orientation=\"landscape\"]{width:100%;height:auto;padding:var(--headerH) 0;}.project__viewer figure.contain [data-orientation=\"portrait\"]{width:auto;height:100%;padding:var(--headerH) 3rem;}.project__viewer figure.cover [data-orientation=\"landscape\"]{width:auto;height:100%;}.project__viewer figure.cover [data-orientation=\"portrait\"]{width:100%;height:auto;}.project__viewer figure.cover [data-orientation=\"portrait\"],.project__viewer figure.cover [data-orientation=\"landscape\"],.project__viewer figure.cover img,.project__viewer figure.cover video{width:100%;height:100%;}figure.pair{max-width:calc(100vmin - 3rem + var(--marginOuter) / 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--headerH) - var(--marginOuter) / 2) calc(var(--marginOuter) / 2);margin:0 auto;}figure.pair img,figure.pair video{width:50%;height:100%;object-fit:contain;padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){.project__viewer__caption{text-align:center;}}@media screen and (min-width:640px){.project__viewer figure.contain [data-orientation=\"landscape\"]{padding:var(--headerH) 3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFZpZXdlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RnVCLEFBR3NCLEFBVVksQUFLWixBQVVBLEFBUUcsQUFNQSxBQVFBLEFBS1AsQUFPTyxBQVFQLEFBS0EsQUFNVyxBQVVKLEFBS1AsQUFNQSxBQU1BLEFBS0EsQUFRQSxBQUs2QyxBQVU5QyxBQVFTLEFBTVUsVUFiakIsQ0FqRkEsQUFlQSxBQUtBLEFBcUJBLEFBTUEsQUFNQSxBQUtBLEFBUUEsSUF0SE4sQUFlQSxBQVVDLEdBUUksQUFNTCxBQVFLLEFBWUgsQUE2Qk0sQUFxRGQsR0E1SU8sQUFlQSxDQVVFLEFBb0RnQixBQXdETixDQWpGRCxBQWVuQixBQUtBLEFBcUIwQixBQU1HLEFBTTdCLEFBS0EsQUFRQSxDQS9FUSxFQW9CRSxFQTFERSxBQWVGLEFBa0lULENBakhZLEFBY2IsRUFyQlksQUFjQSxDQWdEWixHQTVCaUMsRUEzQ3hCLEVBZnFCLEVBZ0M5QixBQW1CQSxBQWlGc0MsQ0EzR1YsQUFjZixHQXZCRixFQTREVyxDQWdCdEIsR0FNQSxHQTFEQSxDQXZCa0IsQ0F1R0osWUF2SEgsQUE0RU8sQ0FuRE4sR0FSWixNQWhCa0IsQUFtSWxCLEVBMUdBLGNBcEJpQyxvQ0FrSGYsVUE5REYsYUFtQlEsRUFsQnhCLFFBekRhLGFBNEVHLGlCQTJDUSxVQWxIWSxTQUpwQyx5Q0E0RTRCLDJCQUM1QixZQTJDOEIsNkJBbkg5QixzREFvSGUsY0FDZiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL1Byb2plY3RWaWV3ZXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdG5cIjtcbmltcG9ydCB7IHRocm93cyB9IGZyb20gXCJhc3NlcnRcIjtcblxuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG4vLyBpbXBvcnQgeyBzZXRTbGlkZSwgcmVzZXRWaWV3ZXIgfSBmcm9tIFwiLi4vdXRpbHMvcmVkdXgvYWN0aW9uc1wiO1xuXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gXCJyZWFjdC11c2UtZ2VzdHVyZVwiO1xuaW1wb3J0IHsgY2xhbXAsIGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHVzZUxvY2tCb2R5U2Nyb2xsIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VMb2NrQm9keVNjcm9sbFwiO1xuXG5pbXBvcnQgUHJvamVjdFZpZXdlciBmcm9tIFwiLi9Qcm9qZWN0Vmlld2VyXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RWaWV3ZXJDb250YWluZXIocHJvcHMpIHtcblx0Y29uc3QgeyB2aWV3ZXJDb250ZW50LCBpZCwgdmlld2VyT3Blbiwgdmlld2VySUQsIHNsaWRlSW5kZXgsIHNldFNsaWRlLCByZXNldFZpZXdlciB9ID0gcHJvcHM7XG5cdGNvbnN0IFtjbGlja0VuYWJsZWQsIHRvZ2dsZUNsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qgd2luZG93U2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcblxuXHRpZiAoIXZpZXdlckNvbnRlbnQpIHJldHVybiA8aDE+TG9hZGluZzwvaDE+O1xuXG5cdGNvbnN0IFt7IHkgfSwgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoe1xuXHRcdHk6IDAsXG5cdFx0b25GcmFtZTogZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0XHRsZXQgeyB5IH0gPSBwYXJhbXM7XG5cblx0XHRcdGlmIChNYXRoLmFicyh5KSA8PSAyKSB7XG5cdFx0XHRcdHRvZ2dsZUNsaWNrKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1hdGguYWJzKHkpID49IHdpbmRvd1NpemUuaGVpZ2h0IC8gNCkge1xuXHRcdFx0XHRyZXNldFZpZXdlcigpO1xuXHRcdFx0XHQvL3RvZ2dsZUNsaWNrKHRydWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25SZXN0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRvZ2dsZUNsaWNrKHRydWUpO1xuXHRcdH1cblx0fSkpO1xuXG5cdGNvbnN0IGJpbmQgPSB1c2VHZXN0dXJlKHtcblx0XHRvbkRyYWc6ICh7IGRvd24sIGRlbHRhLCB2ZWxvY2l0eSB9KSA9PiB7XG5cdFx0XHR2ZWxvY2l0eSA9IGNsYW1wKHZlbG9jaXR5LCAxLCA4KTtcblx0XHRcdHRvZ2dsZUNsaWNrKCFkb3duKTtcblx0XHRcdHNldCh7XG5cdFx0XHRcdHk6IGRvd24gPyBkZWx0YVsxXSA6IDAsXG5cdFx0XHRcdGNvbmZpZzogeyBtYXNzOiB2ZWxvY2l0eSwgdGVuc2lvbjogNTAwICogdmVsb2NpdHksIGZyaWN0aW9uOiA1MCB9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdG9uV2hlZWw6ICh7IGFjdGl2ZSwgZGVsdGEsIHZlbG9jaXR5LCB0ZW1wID0geS5nZXRWYWx1ZSgpIH0pID0+IHtcblx0XHRcdHZlbG9jaXR5ID0gY2xhbXAodmVsb2NpdHksIDEsIDgpO1xuXHRcdFx0dG9nZ2xlQ2xpY2soIWFjdGl2ZSk7XG5cdFx0XHRzZXQoe1xuXHRcdFx0XHR5OiBhY3RpdmUgPyB0ZW1wICsgZGVsdGFbMV0gKiAtMSA6IDAsXG5cdFx0XHRcdGNvbmZpZzogeyBtYXNzOiB2ZWxvY2l0eSwgdGVuc2lvbjogNTAwICogdmVsb2NpdHksIGZyaWN0aW9uOiA1MCB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdHVzZUxvY2tCb2R5U2Nyb2xsKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGFuaW1hdGVkLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3ZXJfX292ZXJsYXlcIlxuXHRcdFx0XHR7Li4uYmluZCgpfVxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdG9wYWNpdHk6IHkuaW50ZXJwb2xhdGUoXG5cdFx0XHRcdFx0XHRbLXdpbmRvd1NpemUuaGVpZ2h0IC8gNCwgMCwgd2luZG93U2l6ZS5oZWlnaHQgLyA0XSxcblx0XHRcdFx0XHRcdFswLjIsIDEsIDAuMl1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3ZXJfX2NhcHRpb25cIj5UZXN0PC9oMj5cblx0XHRcdDwvYW5pbWF0ZWQuZGl2PlxuXHRcdFx0PGFuaW1hdGVkLnNlY3Rpb25cblx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdF9fdmlld2VyXCJcblx0XHRcdFx0ey4uLmJpbmQoKX1cblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHZpZXdlck9wZW4gPyB5LmludGVycG9sYXRlKHkgPT4gYHRyYW5zbGF0ZTNkKDAsJHt5fXB4LDApYCkgOiBcIm5vbmVcIixcblx0XHRcdFx0XHRvcGFjaXR5OiB5LmludGVycG9sYXRlKFxuXHRcdFx0XHRcdFx0Wy13aW5kb3dTaXplLmhlaWdodCAvIDQsIDAsIHdpbmRvd1NpemUuaGVpZ2h0IC8gNF0sXG5cdFx0XHRcdFx0XHRbMC4yLCAxLCAwLjJdXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8UHJvamVjdFZpZXdlciBjb250ZW50PXt2aWV3ZXJDb250ZW50fSBjbGlja0VuYWJsZWQ9e2NsaWNrRW5hYmxlZH0gLz5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogY2FsYygxMDAgKiB2YXIoLS12SCkpO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTtcblx0XHRcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBncmFiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyOmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IC1tb3otZ3JhYmJpbmcgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZyAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyX19vdmVybGF5IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyX19jYXB0aW9uIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDEyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIHVsIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgbGkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgbGkuaGlkZGVuIHtcblx0XHRcdFx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlOm5vdCgucGFpcikgaW1nLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlOm5vdCgucGFpcikgLnBsYXllcl9fd3JhcHBlciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFtkYXRhLW9yaWVudGF0aW9uPVwicG9ydHJhaXRcIl0gdmlkZW8ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0W2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0gdmlkZW8ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBpbWcsXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciB2aWRlbyB7XG5cdFx0XHRcdFx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHRcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0XHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY29udGFpbiB7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMHZtaW47XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb250YWluIFtkYXRhLW9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJdIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taGVhZGVySCkgMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb250YWluIFtkYXRhLW9yaWVudGF0aW9uPVwicG9ydHJhaXRcIl0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1oZWFkZXJIKSAzcmVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIFtkYXRhLW9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJdIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIFtkYXRhLW9yaWVudGF0aW9uPVwicG9ydHJhaXRcIl0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgW2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciBbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciBpbWcsXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgdmlkZW8ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZmlndXJlLnBhaXIge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEwMHZtaW4gLSAzcmVtICsgdmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IGNhbGModmFyKC0taGVhZGVySCkgLSB2YXIoLS1tYXJnaW5PdXRlcikgLyAyKVxuXHRcdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpZ3VyZS5wYWlyIGltZyxcblx0XHRcdFx0XHRmaWd1cmUucGFpciB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXJfX2NhcHRpb24ge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvbnRhaW4gW2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0ge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1oZWFkZXJIKSAzcmVtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9hbmltYXRlZC5zZWN0aW9uPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Vmlld2VyQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectViewerContainer);

/***/ })

})
//# sourceMappingURL=index.js.aaefce34b68c1195ba0d.hot-update.js.map