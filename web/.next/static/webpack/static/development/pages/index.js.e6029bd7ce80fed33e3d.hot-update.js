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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _utils_redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/redux/actions */ "./utils/redux/actions.js");
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/hooks/useLockBodyScroll */ "./utils/hooks/useLockBodyScroll.js");
/* harmony import */ var _ProjectViewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProjectViewer */ "./components/ProjectViewer.js");


var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













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

  var windowSize = Object(_utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["default"])();
  if (!viewerContent) return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Loading");

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_11__["useSpring"])(function () {
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

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_12__["useGesture"])({
    onDrag: function onDrag(_ref) {
      var down = _ref.down,
          delta = _ref.delta,
          velocity = _ref.velocity;
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["clamp"])(velocity, 1, 8);
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
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["clamp"])(velocity, 1, 8);
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
  Object(_utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_14__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_11__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer__overlay"
  }, bind(), {
    style: {
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("h2", {
    className: "project__viewer__caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Test")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_11__["animated"].section, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 75
    },
    __self: this
  }), __jsx(_ProjectViewer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    content: viewerContent,
    clickEnabled: clickEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2404343687",
    __self: this
  }, ".project__viewer{position:fixed;top:0;left:0;width:100%;height:calc(100 * var(--vH));z-index:9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}.project__viewer:active{cursor:-webkit-grabbing !important;cursor:-moz-grabbing !important;cursor:grabbing !important;cursor:-webkit--moz-grabbing !important;cursor:-moz--moz-grabbing !important;cursor:-moz-grabbing !important;cursor:-webkit--webkit-grabbing !important;cursor:-moz--webkit-grabbing !important;cursor:-webkit-grabbing !important;}.project__viewer__overlay{position:fixed;top:0;left:0;bottom:0;right:0;z-index:8;background:white;}.project__viewer__caption{position:fixed;left:0;bottom:0;width:100%;padding:var(--marginOuter);z-index:12;}.project__viewer ul{position:relative;width:100%;height:100%;}.project__viewer li{position:absolute;top:0;left:0;width:100%;height:100%;}.project__viewer li.hidden{visibility:hidden;z-index:-1;}.project__viewer figure{width:100%;height:100%;position:relative;}.project__viewer figure:not(.pair) img,.project__viewer figure:not(.pair) .player__wrapper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer;}[data-orientation=\"portrait\"] video{width:auto;height:100%;}[data-orientation=\"landscape\"] video{width:100%;height:auto;}.project__viewer img,.project__viewer video{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-touch-callout:none;}.project__viewer figure.contain{max-width:100vmin;margin:0 auto;}.project__viewer figure.contain [data-orientation=\"landscape\"]{width:100%;height:auto;padding:var(--headerH) 0;}.project__viewer figure.contain [data-orientation=\"portrait\"]{width:auto;height:100%;padding:var(--headerH) 3rem;}.project__viewer figure.cover [data-orientation=\"landscape\"]{width:auto;height:100%;}.project__viewer figure.cover [data-orientation=\"portrait\"]{width:100%;height:auto;}.project__viewer figure.cover [data-orientation=\"portrait\"],.project__viewer figure.cover [data-orientation=\"landscape\"],.project__viewer figure.cover img,.project__viewer figure.cover video{width:100%;height:100%;}figure.pair{max-width:calc(100vmin - 3rem + var(--marginOuter) / 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--headerH) - var(--marginOuter) / 2) calc(var(--marginOuter) / 2);margin:0 auto;}figure.pair img,figure.pair video{width:50%;height:100%;object-fit:contain;padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){.project__viewer__caption{text-align:center;}}@media screen and (min-width:640px){.project__viewer figure.contain [data-orientation=\"landscape\"]{padding:var(--headerH) 3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFZpZXdlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRnVCLEFBR3NCLEFBVVksQUFLWixBQVVBLEFBUUcsQUFNQSxBQVFBLEFBS1AsQUFPTyxBQVFQLEFBS0EsQUFNVyxBQVVKLEFBS1AsQUFNQSxBQU1BLEFBS0EsQUFRQSxBQUs2QyxBQVU5QyxBQVFTLEFBTVUsVUFiakIsQ0FqRkEsQUFlQSxBQUtBLEFBcUJBLEFBTUEsQUFNQSxBQUtBLEFBUUEsSUF0SE4sQUFlQSxBQVVDLEdBUUksQUFNTCxBQVFLLEFBWUgsQUE2Qk0sQUFxRGQsR0E1SU8sQUFlQSxDQVVFLEFBb0RnQixBQXdETixDQWpGRCxBQWVuQixBQUtBLEFBcUIwQixBQU1HLEFBTTdCLEFBS0EsQUFRQSxDQS9FUSxFQW9CRSxFQTFERSxBQWVGLEFBa0lULENBakhZLEFBY2IsRUFyQlksQUFjQSxDQWdEWixHQTVCaUMsRUEzQ3hCLEVBZnFCLEVBZ0M5QixBQW1CQSxBQWlGc0MsQ0EzR1YsQUFjZixHQXZCRixFQTREVyxDQWdCdEIsR0FNQSxHQTFEQSxDQXZCa0IsQ0F1R0osWUF2SEgsQUE0RU8sQ0FuRE4sR0FSWixNQWhCa0IsQUFtSWxCLEVBMUdBLGNBcEJpQyxvQ0FrSGYsVUE5REYsYUFtQlEsRUFsQnhCLFFBekRhLGFBNEVHLGlCQTJDUSxVQWxIWSxTQUpwQyx5Q0E0RTRCLDJCQUM1QixZQTJDOEIsNkJBbkg5QixzREFvSGUsY0FDZiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL1Byb2plY3RWaWV3ZXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdG5cIjtcbmltcG9ydCB7IHRocm93cyB9IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgc2V0U2xpZGUsIHJlc2V0Vmlld2VyIH0gZnJvbSBcIi4uL3V0aWxzL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VXaW5kb3dTaXplXCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgeyB1c2VHZXN0dXJlIH0gZnJvbSBcInJlYWN0LXVzZS1nZXN0dXJlXCI7XG5pbXBvcnQgeyBjbGFtcCwgZGVib3VuY2UgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdXNlTG9ja0JvZHlTY3JvbGwgZnJvbSBcIi4uL3V0aWxzL2hvb2tzL3VzZUxvY2tCb2R5U2Nyb2xsXCI7XG5cbmltcG9ydCBQcm9qZWN0Vmlld2VyIGZyb20gXCIuL1Byb2plY3RWaWV3ZXJcIjtcblxuZnVuY3Rpb24gUHJvamVjdFZpZXdlckNvbnRhaW5lcihwcm9wcykge1xuXHRjb25zdCB7IHZpZXdlckNvbnRlbnQsIGlkLCB2aWV3ZXJPcGVuLCB2aWV3ZXJJRCwgc2xpZGVJbmRleCwgc2V0U2xpZGUsIHJlc2V0Vmlld2VyIH0gPSBwcm9wcztcblx0Y29uc3QgW2NsaWNrRW5hYmxlZCwgdG9nZ2xlQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xuXG5cdGlmICghdmlld2VyQ29udGVudCkgcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT47XG5cblx0Y29uc3QgW3sgeSB9LCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7XG5cdFx0eTogMCxcblx0XHRvbkZyYW1lOiBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRcdGxldCB7IHkgfSA9IHBhcmFtcztcblxuXHRcdFx0aWYgKE1hdGguYWJzKHkpIDw9IDIpIHtcblx0XHRcdFx0dG9nZ2xlQ2xpY2sodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTWF0aC5hYnMoeSkgPj0gd2luZG93U2l6ZS5oZWlnaHQgLyA0KSB7XG5cdFx0XHRcdHJlc2V0Vmlld2VyKCk7XG5cdFx0XHRcdC8vdG9nZ2xlQ2xpY2sodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblJlc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dG9nZ2xlQ2xpY2sodHJ1ZSk7XG5cdFx0fVxuXHR9KSk7XG5cblx0Y29uc3QgYmluZCA9IHVzZUdlc3R1cmUoe1xuXHRcdG9uRHJhZzogKHsgZG93biwgZGVsdGEsIHZlbG9jaXR5IH0pID0+IHtcblx0XHRcdHZlbG9jaXR5ID0gY2xhbXAodmVsb2NpdHksIDEsIDgpO1xuXHRcdFx0dG9nZ2xlQ2xpY2soIWRvd24pO1xuXHRcdFx0c2V0KHtcblx0XHRcdFx0eTogZG93biA/IGRlbHRhWzFdIDogMCxcblx0XHRcdFx0Y29uZmlnOiB7IG1hc3M6IHZlbG9jaXR5LCB0ZW5zaW9uOiA1MDAgKiB2ZWxvY2l0eSwgZnJpY3Rpb246IDUwIH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0b25XaGVlbDogKHsgYWN0aXZlLCBkZWx0YSwgdmVsb2NpdHksIHRlbXAgPSB5LmdldFZhbHVlKCkgfSkgPT4ge1xuXHRcdFx0dmVsb2NpdHkgPSBjbGFtcCh2ZWxvY2l0eSwgMSwgOCk7XG5cdFx0XHR0b2dnbGVDbGljayghYWN0aXZlKTtcblx0XHRcdHNldCh7XG5cdFx0XHRcdHk6IGFjdGl2ZSA/IHRlbXAgKyBkZWx0YVsxXSAqIC0xIDogMCxcblx0XHRcdFx0Y29uZmlnOiB7IG1hc3M6IHZlbG9jaXR5LCB0ZW5zaW9uOiA1MDAgKiB2ZWxvY2l0eSwgZnJpY3Rpb246IDUwIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0dXNlTG9ja0JvZHlTY3JvbGwoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8YW5pbWF0ZWQuZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXdlcl9fb3ZlcmxheVwiXG5cdFx0XHRcdHsuLi5iaW5kKCl9XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0b3BhY2l0eTogeS5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFstd2luZG93U2l6ZS5oZWlnaHQgLyA0LCAwLCB3aW5kb3dTaXplLmhlaWdodCAvIDRdLFxuXHRcdFx0XHRcdFx0WzAuMiwgMSwgMC4yXVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXdlcl9fY2FwdGlvblwiPlRlc3Q8L2gyPlxuXHRcdFx0PC9hbmltYXRlZC5kaXY+XG5cdFx0XHQ8YW5pbWF0ZWQuc2VjdGlvblxuXHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3ZXJcIlxuXHRcdFx0XHR7Li4uYmluZCgpfVxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdmlld2VyT3BlbiA/IHkuaW50ZXJwb2xhdGUoeSA9PiBgdHJhbnNsYXRlM2QoMCwke3l9cHgsMClgKSA6IFwibm9uZVwiLFxuXHRcdFx0XHRcdG9wYWNpdHk6IHkuaW50ZXJwb2xhdGUoXG5cdFx0XHRcdFx0XHRbLXdpbmRvd1NpemUuaGVpZ2h0IC8gNCwgMCwgd2luZG93U2l6ZS5oZWlnaHQgLyA0XSxcblx0XHRcdFx0XHRcdFswLjIsIDEsIDAuMl1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxQcm9qZWN0Vmlld2VyIGNvbnRlbnQ9e3ZpZXdlckNvbnRlbnR9IGNsaWNrRW5hYmxlZD17Y2xpY2tFbmFibGVkfSAvPlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCAqIHZhcigtLXZIKSk7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHRcdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IGdyYWI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXI6YWN0aXZlIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGN1cnNvcjogLW1vei1ncmFiYmluZyAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXJfX292ZXJsYXkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogODtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXJfX2NhcHRpb24ge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luT3V0ZXIpO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgdWwge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBsaSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBsaS5oaWRkZW4ge1xuXHRcdFx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmU6bm90KC5wYWlyKSBpbWcsXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmU6bm90KC5wYWlyKSAucGxheWVyX193cmFwcGVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0W2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGltZyxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIHZpZGVvIHtcblx0XHRcdFx0XHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHRcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb250YWluIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwdm1pbjtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvbnRhaW4gW2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1oZWFkZXJIKSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvbnRhaW4gW2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWhlYWRlckgpIDNyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgW2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgW2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciBbZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCJdLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIFtkYXRhLW9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJdLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIGltZyxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmaWd1cmUucGFpciB7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwdm1pbiAtIDNyZW0gKyB2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1oZWFkZXJIKSAtIHZhcigtLW1hcmdpbk91dGVyKSAvIDIpXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlndXJlLnBhaXIgaW1nLFxuXHRcdFx0XHRcdGZpZ3VyZS5wYWlyIHZpZGVvIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlcl9fY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY29udGFpbiBbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWhlYWRlckgpIDNyZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2FuaW1hdGVkLnNlY3Rpb24+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG5cdHZpZXdlck9wZW46IHN0YXRlLnZpZXdlci52aWV3ZXJPcGVuLFxuXHR2aWV3ZXJDb250ZW50OiBzdGF0ZS52aWV3ZXIudmlld2VyQ29udGVudCxcblx0dmlld2VySUQ6IHN0YXRlLnZpZXdlci52aWV3ZXJJRCxcblx0c2xpZGVJbmRleDogc3RhdGUudmlld2VyLnNsaWRlSW5kZXhcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBzZXRTbGlkZSwgcmVzZXRWaWV3ZXIgfSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdG1hcERpc3BhdGNoVG9Qcm9wc1xuKShQcm9qZWN0Vmlld2VyQ29udGFpbmVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js */")));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    viewerOpen: state.viewer.viewerOpen,
    viewerContent: state.viewer.viewerContent,
    viewerID: state.viewer.viewerID,
    slideIndex: state.viewer.slideIndex
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    setSlide: _utils_redux_actions__WEBPACK_IMPORTED_MODULE_8__["setSlide"],
    resetViewer: _utils_redux_actions__WEBPACK_IMPORTED_MODULE_8__["resetViewer"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectViewerContainer));

/***/ })

})
//# sourceMappingURL=index.js.e6029bd7ce80fed33e3d.hot-update.js.map