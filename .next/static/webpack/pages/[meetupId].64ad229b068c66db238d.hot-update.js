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
    var meetupId;
    return C_Users_gpgab_Desktop_next_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meetupId = context.params.meetupDetail;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJkZXRhaWwiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwRGV0YWlsIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVldHVwSWQiLCJtZWV0dXBEYXRhIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTRCO0FBQ3hCLHNCQUNJO0FBQVMsYUFBUyxFQUFFQyx1RUFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNJO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0k7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLGdCQUFVSixLQUFLLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsZ0JBQUlMLEtBQUssQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7S0FUUVAsWTtBQVdGLFNBQWVRLGNBQXRCO0FBQUE7QUFBQTs7O21TQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDRztBQUNGQyxzQkFBUSxFQUFDLEtBRFA7QUFFRkMsbUJBQUssRUFBQyxDQUNIO0FBQUVDLHNCQUFNLEVBQUM7QUFDSkMsOEJBQVksRUFBQztBQURUO0FBQVQsZUFERyxFQUtOO0FBQUVELHNCQUFNLEVBQUM7QUFDREMsOEJBQVksRUFBQztBQURaO0FBQVQsZUFMTTtBQUZKLGFBREg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWlCQSxTQUFlQyxjQUF0QjtBQUFBO0FBQUE7OzttU0FBTyxrQkFBOEJDLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQyxvQkFESCxHQUNjRCxPQUFPLENBQUNILE1BQVIsQ0FBZUMsWUFEN0I7QUFBQSw4Q0FHSTtBQUNIWCxtQkFBSyxFQUFDO0FBQ0ZlLDBCQUFVLEVBQUM7QUFDUFosdUJBQUssRUFBQyw2SkFEQztBQUVQYSxvQkFBRSxFQUFDLElBRkk7QUFHUFosdUJBQUssRUFBQyx1QkFIQztBQUlQQyx5QkFBTyxFQUFDLDJCQUpEO0FBS1BDLDZCQUFXLEVBQUM7QUFMTDtBQURUO0FBREgsYUFISjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZ0JRUCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLjY0YWQyMjliMDY4YzY2ZGIyMzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlsKHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAgLz5cclxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIHJldHVybntcclxuICAgICAgICBmYWxsYmFjazpmYWxzZSxcclxuICAgICAgICBwYXRoczpbXHJcbiAgICAgICAgICAgeyBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgbWVldHVwRGV0YWlsOidtMSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgbWVldHVwRGV0YWlsOidtMidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cERldGFpbFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhOntcclxuICAgICAgICAgICAgICAgIGltYWdlOidodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MDM0MDQ5OS1hNmM2MGZjODI4N2M/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MCcsXHJcbiAgICAgICAgICAgICAgICBpZDonYTEnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6J2RldGFpbHMgb2YgdGhlIG1lZXR1cCcsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOicxMjM0IFNvbWUgUm9hZCwgU29tZSBUb3duJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidXZWxjb21lIHRvIG91ciBtZWV0dXAgcGFnZS4nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=