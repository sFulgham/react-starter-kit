webpackJsonp([0],{

/***/ 101:
/*!************************************!*\
  !*** ./src/assets/jsLibs/utils.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.convertToObj = convertToObj;\nexports.formatDate = formatDate;\nfunction convertToObj(arr) {\n  var convertedObj = arr.reduce(function (acc, curr) {\n    acc[curr.id] = curr;\n    return acc;\n  }, {});\n  return convertedObj;\n}\n\nfunction formatDate(dateString) {\n  return new Date(dateString).toDateString();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hc3NldHMvanNMaWJzL3V0aWxzLmpzP2NkMGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb09iaihhcnIpIHtcbiAgbGV0IGNvbnZlcnRlZE9iaiA9IGFyci5yZWR1Y2UoKGFjYyxjdXJyKSA9PiB7XG4gICAgYWNjW2N1cnIuaWRdID0gY3VycjtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBjb252ZXJ0ZWRPYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvRGF0ZVN0cmluZygpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXNzZXRzL2pzTGlicy91dGlscy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///101\n");

/***/ }),

/***/ 384:
/*!**************************!*\
  !*** multi mount/dom.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! mount/dom.js */385);


/***/ }),

/***/ 385:
/*!**************************!*\
  !*** ./src/mount/dom.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 45);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 137);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _app = __webpack_require__(/*! ../components/app */ 386);\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _state = __webpack_require__(/*! ../api/state */ 389);\n\nvar _state2 = _interopRequireDefault(_state);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = new _state2.default(window.initialState);\n\n_reactDom2.default.render(_react2.default.createElement(_app2.default, {\n  store: store\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9tb3VudC9kb20uanM/NjgzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCBTdGF0ZUFwaSBmcm9tICcuLi9hcGkvc3RhdGUnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdGF0ZUFwaSh3aW5kb3cuaW5pdGlhbFN0YXRlKTtcblxuUmVhY3REb20ucmVuZGVyKFxuICA8QXBwIFxuICAgIHN0b3JlPXtzdG9yZX1cbiAgLz4sIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tb3VudC9kb20uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///385\n");

/***/ }),

/***/ 386:
/*!*************************************!*\
  !*** ./src/components/app/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 45);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _accountList = __webpack_require__(/*! ../accountList */ 387);\n\nvar _accountList2 = _interopRequireDefault(_accountList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = _this.props.store.getState();\n    _this.store = _this.props.store;\n    /*this.accountActions = {\n      lookupPosts: accountId => this.state.posts[accountId].paragraph\n    };*/\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_accountList2.default, { accounts: this.state.accounts, store: this.store });\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FwcC9pbmRleC5qcz9kMjEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjY291bnRMaXN0IGZyb20gJy4uL2FjY291bnRMaXN0JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5zdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XG4gICAgLyp0aGlzLmFjY291bnRBY3Rpb25zID0ge1xuICAgICAgbG9va3VwUG9zdHM6IGFjY291bnRJZCA9PiB0aGlzLnN0YXRlLnBvc3RzW2FjY291bnRJZF0ucGFyYWdyYXBoXG4gICAgfTsqL1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxBY2NvdW50TGlzdCBhY2NvdW50cz17IHRoaXMuc3RhdGUuYWNjb3VudHMgfSBzdG9yZT17IHRoaXMuc3RvcmUgfS8+XG4gICAgKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hcHAvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7Ozs7OztBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///386\n");

/***/ }),

/***/ 387:
/*!*********************************************!*\
  !*** ./src/components/accountList/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 45);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _account = __webpack_require__(/*! ../account */ 392);\n\nvar _account2 = _interopRequireDefault(_account);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AccountList = function AccountList(props) {\n  return _react2.default.createElement(\n    'section',\n    null,\n    Object.values(props.accounts).map(function (account) {\n      return _react2.default.createElement(_account2.default, {\n        key: account.id,\n        account: account,\n        store: props.store\n      });\n    })\n  );\n};\n\nexports.default = AccountList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FjY291bnRMaXN0L2luZGV4LmpzPzg1ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uL2FjY291bnQnO1xuXG5jb25zdCBBY2NvdW50TGlzdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge1xuICAgICAgICBPYmplY3QudmFsdWVzKHByb3BzLmFjY291bnRzKS5tYXAoYWNjb3VudCA9PiBcbiAgICAgICAgICA8QWNjb3VudFxuICAgICAgICAgICAga2V5PXsgYWNjb3VudC5pZCB9XG4gICAgICAgICAgICBhY2NvdW50PXsgYWNjb3VudCB9XG4gICAgICAgICAgICBzdG9yZT17IHByb3BzLnN0b3JlIH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudExpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2FjY291bnRMaXN0L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFGQTtBQVlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///387\n");

/***/ }),

/***/ 388:
/*!***********************************************!*\
  !*** ./src/components/storeProvider/index.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 45);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 144);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar storeProvider = function storeProvider(Component) {\n  var wrapper = function wrapper(props, _ref) {\n    var store = _ref.store;\n    return _react2.default.createElement(Component, _extends({}, props, { store: props.store }));\n  };\n  wrapper.displayName = Component.name + 'Container';\n  wrapper.contextTypes = {\n    store: _propTypes2.default.object\n  };\n\n  return wrapper;\n};\n\nexports.default = storeProvider;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3N0b3JlUHJvdmlkZXIvaW5kZXguanM/ZGNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3Qgc3RvcmVQcm92aWRlciA9IChDb21wb25lbnQpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IChwcm9wcywge3N0b3JlfSkgPT4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHN0b3JlPXtwcm9wcy5zdG9yZX0gLz47XG4gIHdyYXBwZXIuZGlzcGxheU5hbWUgPSBgJHtDb21wb25lbnQubmFtZX1Db250YWluZXJgO1xuICB3cmFwcGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIHJldHVybiB3cmFwcGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVQcm92aWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvc3RvcmVQcm92aWRlci9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///388\n");

/***/ }),

/***/ 389:
/*!********************************!*\
  !*** ./src/api/state/index.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _accounts = __webpack_require__(/*! ../accounts */ 390);\n\nvar _accounts2 = _interopRequireDefault(_accounts);\n\nvar _posts = __webpack_require__(/*! ../posts */ 391);\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StateApi = function () {\n  function StateApi(payload) {\n    _classCallCheck(this, StateApi);\n\n    this.data = {\n      accounts: {},\n      posts: {}\n    };\n\n    if (payload.accounts) {\n      var accountsApi = new _accounts2.default(payload.accounts);\n      this.data.accounts = accountsApi.getAccounts();\n    }\n    if (payload.posts) {\n      var postsApi = new _posts2.default(payload.posts);\n      this.data.posts = postsApi.getPosts();\n    }\n  }\n\n  _createClass(StateApi, [{\n    key: 'getState',\n    value: function getState() {\n      return this.data;\n    }\n  }, {\n    key: 'getPostById',\n    value: function getPostById(id) {\n      return this.data.posts[id].paragraph;\n    }\n  }]);\n\n  return StateApi;\n}();\n\nexports.default = StateApi;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcGkvc3RhdGUvaW5kZXguanM/NzEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWNjb3VudHNBcGkgZnJvbSAnLi4vYWNjb3VudHMnO1xuaW1wb3J0IFBvc3RzQXBpIGZyb20gJy4uL3Bvc3RzJztcblxuY2xhc3MgU3RhdGVBcGkge1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkKXtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBhY2NvdW50czoge30sXG4gICAgICBwb3N0czoge31cbiAgICB9O1xuXG4gICAgaWYocGF5bG9hZC5hY2NvdW50cyl7XG4gICAgICBsZXQgYWNjb3VudHNBcGkgPSBuZXcgQWNjb3VudHNBcGkocGF5bG9hZC5hY2NvdW50cyk7XG4gICAgICB0aGlzLmRhdGEuYWNjb3VudHMgPSBhY2NvdW50c0FwaS5nZXRBY2NvdW50cygpO1xuICAgIH1cbiAgICBpZihwYXlsb2FkLnBvc3RzKXtcbiAgICAgIGxldCBwb3N0c0FwaSA9IG5ldyBQb3N0c0FwaShwYXlsb2FkLnBvc3RzKTtcbiAgICAgIHRoaXMuZGF0YS5wb3N0cyA9IHBvc3RzQXBpLmdldFBvc3RzKCk7XG4gICAgfSAgIFxuICB9XG5cbiAgZ2V0U3RhdGUoKXtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0UG9zdEJ5SWQoaWQpe1xuICAgIHJldHVybiB0aGlzLmRhdGEucG9zdHNbaWRdLnBhcmFncmFwaDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUFwaTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwaS9zdGF0ZS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///389\n");

/***/ }),

/***/ 390:
/*!***********************************!*\
  !*** ./src/api/accounts/index.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _utils = __webpack_require__(/*! ../../assets/jsLibs/utils */ 101);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AccountsApi = function () {\n  function AccountsApi(data) {\n    _classCallCheck(this, AccountsApi);\n\n    this.data = data;\n  }\n\n  _createClass(AccountsApi, [{\n    key: 'getAccounts',\n    value: function getAccounts() {\n      return (0, _utils.convertToObj)(this.data);\n    }\n  }]);\n\n  return AccountsApi;\n}();\n\nexports.default = AccountsApi;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcGkvYWNjb3VudHMvaW5kZXguanM/MTkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbnZlcnRUb09ian0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzTGlicy91dGlscyc7XG5cbmNsYXNzIEFjY291bnRzQXBpIHtcbiAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldEFjY291bnRzKCl7XG4gICAgcmV0dXJuIGNvbnZlcnRUb09iaih0aGlzLmRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzQXBpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBpL2FjY291bnRzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///390\n");

/***/ }),

/***/ 391:
/*!********************************!*\
  !*** ./src/api/posts/index.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _utils = __webpack_require__(/*! ../../assets/jsLibs/utils */ 101);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PostsApi = function () {\n  function PostsApi(data) {\n    _classCallCheck(this, PostsApi);\n\n    this.data = data;\n  }\n\n  _createClass(PostsApi, [{\n    key: 'getPosts',\n    value: function getPosts() {\n      return (0, _utils.convertToObj)(this.data);\n    }\n  }]);\n\n  return PostsApi;\n}();\n\nexports.default = PostsApi;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcGkvcG9zdHMvaW5kZXguanM/YjdiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbnZlcnRUb09ian0gZnJvbSAnLi4vLi4vYXNzZXRzL2pzTGlicy91dGlscyc7XG5cbmNsYXNzIFBvc3RzQXBpIHtcbiAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuICBcbiAgZ2V0UG9zdHMoKXtcbiAgICByZXR1cm4gY29udmVydFRvT2JqKHRoaXMuZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNBcGk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcGkvcG9zdHMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///391\n");

/***/ }),

/***/ 392:
/*!*****************************************!*\
  !*** ./src/components/account/index.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 45);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _utils = __webpack_require__(/*! ../../assets/jsLibs/utils */ 101);\n\nvar _storeProvider = __webpack_require__(/*! ../storeProvider */ 388);\n\nvar _storeProvider2 = _interopRequireDefault(_storeProvider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Account = function Account(props) {\n  var _props$account = props.account,\n      id = _props$account.id,\n      business = _props$account.business,\n      date = _props$account.date,\n      website = _props$account.website,\n      name = _props$account.name;\n\n  var post = props.store.getPostById(id);\n\n  return _react2.default.createElement(\n    'article',\n    { className: 'account' },\n    _react2.default.createElement(\n      'h3',\n      null,\n      business\n    ),\n    _react2.default.createElement(\n      'h4',\n      null,\n      (0, _utils.formatDate)(date.toString())\n    ),\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'a',\n        { href: website },\n        name\n      )\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      post\n    )\n  );\n};\n\nexports.default = (0, _storeProvider2.default)(Account);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanM/YTI4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtmb3JtYXREYXRlfSBmcm9tICcuLi8uLi9hc3NldHMvanNMaWJzL3V0aWxzJztcbmltcG9ydCBzdG9yZVByb3ZpZGVyIGZyb20gJy4uL3N0b3JlUHJvdmlkZXInO1xuXG5jb25zdCBBY2NvdW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpZCwgYnVzaW5lc3MsIGRhdGUsIHdlYnNpdGUsIG5hbWV9ID0gcHJvcHMuYWNjb3VudDtcbiAgY29uc3QgcG9zdCA9IHByb3BzLnN0b3JlLmdldFBvc3RCeUlkKGlkKTtcblxuICByZXR1cm4oXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPSdhY2NvdW50Jz5cbiAgICAgIDxoMz57IGJ1c2luZXNzIH08L2gzPlxuICAgICAgPGg0PnsgZm9ybWF0RGF0ZShkYXRlLnRvU3RyaW5nKCkpIH08L2g0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj17IHdlYnNpdGUgfT57IG5hbWUgfTwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+XG4gICAgICAgICAgeyBwb3N0IH1cbiAgICAgIDwvcD5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVByb3ZpZGVyKEFjY291bnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hY2NvdW50L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBV0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///392\n");

/***/ })

},[384]);