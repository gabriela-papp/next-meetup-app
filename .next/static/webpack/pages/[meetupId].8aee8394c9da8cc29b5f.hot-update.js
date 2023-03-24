webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meetups_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../meetups/MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _meetups_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_meetups_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\gpgab\\Desktop\\next-project\\components\\meetups\\MeetupDetail.js";


function MeetupDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
    className: _meetups_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      src: props.image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = MeetupDetail;
function getStaticPaths() {
  return _getStaticPaths.apply(this, arguments);
}

function _getStaticPaths() {
  _getStaticPaths = Object(C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              fallback: false,
              paths: [{
                params: {
                  meetupDetail: 'm1'
                }
              }, {
                params: {
                  meetupDetail: 'm2'
                }
              }]
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticPaths.apply(this, arguments);
}

function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var meetup;
    return C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meetup = context.params.meetupDetail;
            return _context2.abrupt("return", {
              props: {
                meetupData: {
                  image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                  id: 'a1',
                  title: 'details of the meetup',
                  address: '1234 Some Road, Some Town',
                  description: 'Welcome to our meetup page.'
                }
              }
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

var _c;

$RefreshReg$(_c, "MeetupDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwRGV0YWlsIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVldHVwIiwibWVldHVwRGF0YSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE0QjtBQUN4QixzQkFDSTtBQUFTLGFBQVMsRUFBRUMsdUVBQU8sQ0FBQ0MsTUFBNUI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRUYsS0FBSyxDQUFDRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFLSCxLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBVUosS0FBSyxDQUFDSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0tBVFFQLFk7QUFXRixTQUFlUSxjQUF0QjtBQUFBO0FBQUE7OzttU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ0c7QUFDRkMsc0JBQVEsRUFBQyxLQURQO0FBRUZDLG1CQUFLLEVBQUMsQ0FDSDtBQUFFQyxzQkFBTSxFQUFDO0FBQ0pDLDhCQUFZLEVBQUM7QUFEVDtBQUFULGVBREcsRUFLTjtBQUFFRCxzQkFBTSxFQUFDO0FBQ0RDLDhCQUFZLEVBQUM7QUFEWjtBQUFULGVBTE07QUFGSixhQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFpQkEsU0FBZUMsY0FBdEI7QUFBQTtBQUFBOzs7bVNBQU8sa0JBQThCQyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0Msa0JBREgsR0FDWUQsT0FBTyxDQUFDSCxNQUFSLENBQWVDLFlBRDNCO0FBQUEsOENBR0k7QUFDSFgsbUJBQUssRUFBQztBQUNGZSwwQkFBVSxFQUFDO0FBQ1BaLHVCQUFLLEVBQUMsNkpBREM7QUFFUGEsb0JBQUUsRUFBQyxJQUZJO0FBR1BaLHVCQUFLLEVBQUMsdUJBSEM7QUFJUEMseUJBQU8sRUFBQywyQkFKRDtBQUtQQyw2QkFBVyxFQUFDO0FBTEw7QUFEVDtBQURILGFBSEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWdCUVAsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS44YWVlODM5NGM5ZGE4Y2MyOWI1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gIC8+XHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZmFsbGJhY2s6ZmFsc2UsXHJcbiAgICAgICAgcGF0aHM6W1xyXG4gICAgICAgICAgIHsgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIG1lZXR1cERldGFpbDonbTEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIG1lZXR1cERldGFpbDonbTInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3QgbWVldHVwID0gY29udGV4dC5wYXJhbXMubWVldHVwRGV0YWlsXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIG1lZXR1cERhdGE6e1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6J2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUwMzQwNDk5LWE2YzYwZmM4Mjg3Yz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwJyxcclxuICAgICAgICAgICAgICAgIGlkOidhMScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTonZGV0YWlscyBvZiB0aGUgbWVldHVwJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6JzEyMzQgU29tZSBSb2FkLCBTb21lIFRvd24nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1dlbGNvbWUgdG8gb3VyIG1lZXR1cCBwYWdlLidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==