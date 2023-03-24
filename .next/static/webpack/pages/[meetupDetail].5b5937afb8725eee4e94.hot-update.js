webpackHotUpdate_N_E("pages/[meetupDetail]",{

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
    var meetupDetail;
    return C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meetupDetail = context.params.meetupDetail;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwRGV0YWlsIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVldHVwRGF0YSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE0QjtBQUN4QixzQkFDSTtBQUFTLGFBQVMsRUFBRUMsdUVBQU8sQ0FBQ0MsTUFBNUI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRUYsS0FBSyxDQUFDRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFLSCxLQUFLLENBQUNJO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBVUosS0FBSyxDQUFDSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0tBVFFQLFk7QUFXRixTQUFlUSxjQUF0QjtBQUFBO0FBQUE7OzttU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ0c7QUFDRkMsc0JBQVEsRUFBQyxLQURQO0FBRUZDLG1CQUFLLEVBQUMsQ0FDSDtBQUFFQyxzQkFBTSxFQUFDO0FBQ0pDLDhCQUFZLEVBQUM7QUFEVDtBQUFULGVBREcsRUFLTjtBQUFFRCxzQkFBTSxFQUFDO0FBQ0RDLDhCQUFZLEVBQUM7QUFEWjtBQUFULGVBTE07QUFGSixhQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFpQkEsU0FBZUMsY0FBdEI7QUFBQTtBQUFBOzs7bVNBQU8sa0JBQThCQyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0Ysd0JBREgsR0FDa0JFLE9BQU8sQ0FBQ0gsTUFBUixDQUFlQyxZQURqQztBQUFBLDhDQUdJO0FBQ0hYLG1CQUFLLEVBQUM7QUFDRmMsMEJBQVUsRUFBQztBQUNQWCx1QkFBSyxFQUFDLDZKQURDO0FBRVBZLG9CQUFFLEVBQUMsSUFGSTtBQUdQWCx1QkFBSyxFQUFDLHVCQUhDO0FBSVBDLHlCQUFPLEVBQUMsMkJBSkQ7QUFLUEMsNkJBQVcsRUFBQztBQUxMO0FBRFQ7QUFESCxhQUhKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFnQlFQLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBEZXRhaWxdLjViNTkzN2FmYjg3MjVlZWU0ZTk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlsKHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAgLz5cclxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIHJldHVybntcclxuICAgICAgICBmYWxsYmFjazpmYWxzZSxcclxuICAgICAgICBwYXRoczpbXHJcbiAgICAgICAgICAgeyBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgbWVldHVwRGV0YWlsOidtMSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgbWVldHVwRGV0YWlsOidtMidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCBtZWV0dXBEZXRhaWwgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBEZXRhaWxcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgbWVldHVwRGF0YTp7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTonaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTAzNDA0OTktYTZjNjBmYzgyODdjP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDcwJnE9ODAnLFxyXG4gICAgICAgICAgICAgICAgaWQ6J2ExJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOidkZXRhaWxzIG9mIHRoZSBtZWV0dXAnLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczonMTIzNCBTb21lIFJvYWQsIFNvbWUgVG93bicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonV2VsY29tZSB0byBvdXIgbWVldHVwIHBhZ2UuJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWwiXSwic291cmNlUm9vdCI6IiJ9