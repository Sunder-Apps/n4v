/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Selectors.ts":
/*!*****************************!*\
  !*** ./src/ts/Selectors.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {\n  if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n  if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n  return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\n\nvar _Selectors_lib, _Selectors_pre, _Selectors_controls, _Selectors_disabled, _Selectors_expanded, _Selectors_tabbable, _Selectors_hasLink, _Selectors_hasId, _Selectors_noTab;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Selectors = /*#__PURE__*/function () {\n  function Selectors() {\n    _classCallCheck(this, Selectors);\n\n    _Selectors_lib.set(this, 'n4v');\n\n    _Selectors_pre.set(this, \"\".concat(__classPrivateFieldGet(this, _Selectors_lib, \"f\"), \"-\"));\n\n    _Selectors_controls.set(this, '[aria-controls]');\n\n    _Selectors_disabled.set(this, '[disabled]');\n\n    _Selectors_expanded.set(this, '[aria-expanded]');\n\n    _Selectors_tabbable.set(this, '[tabindex]');\n\n    _Selectors_hasLink.set(this, '[href]');\n\n    _Selectors_hasId.set(this, '[id]');\n\n    _Selectors_noTab.set(this, '[tabindex^=\"-\"]');\n\n    this.focusable = \"input\".concat(this.not(__classPrivateFieldGet(this, _Selectors_disabled, \"f\"))).concat(this.not(__classPrivateFieldGet(this, _Selectors_noTab, \"f\")), \",\\n                         select\").concat(this.not(__classPrivateFieldGet(this, _Selectors_disabled, \"f\"))).concat(this.not(__classPrivateFieldGet(this, _Selectors_noTab, \"f\")), \",\\n                         textarea\").concat(this.not(__classPrivateFieldGet(this, _Selectors_disabled, \"f\"))).concat(this.not(__classPrivateFieldGet(this, _Selectors_noTab, \"f\")), \",\\n                         button\").concat(this.not(__classPrivateFieldGet(this, _Selectors_disabled, \"f\"))).concat(this.not(__classPrivateFieldGet(this, _Selectors_noTab, \"f\")), \",\\n                         object\").concat(this.not(__classPrivateFieldGet(this, _Selectors_disabled, \"f\"))).concat(this.not(__classPrivateFieldGet(this, _Selectors_noTab, \"f\")), \",\\n                         a\").concat(__classPrivateFieldGet(this, _Selectors_hasLink, \"f\"), \",\\n                         area\").concat(__classPrivateFieldGet(this, _Selectors_hasLink, \"f\"), \",\\n                         \").concat(__classPrivateFieldGet(this, _Selectors_tabbable, \"f\")).concat(this.not(__classPrivateFieldGet(this, _Selectors_noTab, \"f\"))).replace(/\\s/g, '');\n    this.subMenuButtons = \"button\".concat(__classPrivateFieldGet(this, _Selectors_controls, \"f\"));\n    this.subMenu = \"\".concat(this.subMenuButtons, \" + ul\").concat(__classPrivateFieldGet(this, _Selectors_hasId, \"f\"));\n    this.ids = {\n      header: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"header\"),\n      logo: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"logo\"),\n      wrapper: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"wrapper\"),\n      mainContent: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"mainContent\")\n    };\n    this.classes = {\n      srOnly: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"sr-only\"),\n      js: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"js\"),\n      fixed: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"fixed\"),\n      gettingHeight: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"geting-height\"),\n      anime: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"anime\"),\n      open: \"\".concat(__classPrivateFieldGet(this, _Selectors_pre, \"f\"), \"open\")\n    };\n  }\n\n  _createClass(Selectors, [{\n    key: \"not\",\n    value: function not(base) {\n      return \":not(\".concat(base, \")\");\n    }\n  }, {\n    key: \"controls\",\n    value: function controls(id) {\n      return id ? \"[aria-controls=\\\"\".concat(id, \"\\\"]\") : '[aria-controls]';\n    }\n  }]);\n\n  return Selectors;\n}();\n\n_Selectors_lib = new WeakMap(), _Selectors_pre = new WeakMap(), _Selectors_controls = new WeakMap(), _Selectors_disabled = new WeakMap(), _Selectors_expanded = new WeakMap(), _Selectors_tabbable = new WeakMap(), _Selectors_hasLink = new WeakMap(), _Selectors_hasId = new WeakMap(), _Selectors_noTab = new WeakMap();\nexports[\"default\"] = Selectors;\n\n//# sourceURL=webpack://@sunderapps/n4v/./src/ts/Selectors.ts?");

/***/ }),

/***/ "./src/ts/Settings.ts":
/*!****************************!*\
  !*** ./src/ts/Settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Settings = /*#__PURE__*/_createClass(function Settings() {\n  _classCallCheck(this, Settings);\n\n  this.delay = {\n    instant: 0,\n    fast: 100,\n    medFast: 200,\n    default: 300,\n    medSlow: 400,\n    slow: 500\n  };\n});\n\nexports[\"default\"] = Settings;\n\n//# sourceURL=webpack://@sunderapps/n4v/./src/ts/Settings.ts?");

/***/ }),

/***/ "./src/ts/ThrottleOptions.ts":
/*!***********************************!*\
  !*** ./src/ts/ThrottleOptions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar ThrottleOptions = /*#__PURE__*/_createClass(function ThrottleOptions() {\n  var leading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  var trailing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  _classCallCheck(this, ThrottleOptions);\n\n  this.leading = true;\n  this.trailing = true;\n  this.leading = leading;\n  this.trailing = trailing;\n});\n\nexports[\"default\"] = ThrottleOptions;\n\n//# sourceURL=webpack://@sunderapps/n4v/./src/ts/ThrottleOptions.ts?");

/***/ }),

/***/ "./src/ts/n4v.ts":
/*!***********************!*\
  !*** ./src/ts/n4v.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__webpack_require__(/*! ../scss/n4v.scss */ \"./src/scss/n4v.scss\");\n\nvar n4vBar_1 = __importDefault(__webpack_require__(/*! ./n4vBar */ \"./src/ts/n4vBar.ts\"));\n\nvar n4v = new n4vBar_1.default();\nexports[\"default\"] = n4v;\n\n//# sourceURL=webpack://@sunderapps/n4v/./src/ts/n4v.ts?");

/***/ }),

/***/ "./src/ts/n4vBar.ts":
/*!**************************!*\
  !*** ./src/ts/n4vBar.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (receiver, state, kind, f) {\n  if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n  if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n  return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nvar _n4vBar_el, _n4vBar_sel, _n4vBar_set;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar Selectors_1 = __importDefault(__webpack_require__(/*! ./Selectors */ \"./src/ts/Selectors.ts\"));\n\nvar Settings_1 = __importDefault(__webpack_require__(/*! ./Settings */ \"./src/ts/Settings.ts\"));\n\nvar ThrottleOptions_1 = __importDefault(__webpack_require__(/*! ./ThrottleOptions */ \"./src/ts/ThrottleOptions.ts\"));\n\nvar n4vBar = /*#__PURE__*/function () {\n  // Initializers\n  function n4vBar() {\n    _classCallCheck(this, n4vBar);\n\n    var _a, _b;\n\n    _n4vBar_el.set(this, {});\n\n    _n4vBar_sel.set(this, new Selectors_1.default());\n\n    _n4vBar_set.set(this, new Settings_1.default());\n\n    this.attachElements();\n    this.attachEvents();\n    (_a = __classPrivateFieldGet(this, _n4vBar_el, \"f\").header) === null || _a === void 0 ? void 0 : _a.classList.add(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.js);\n    (_b = __classPrivateFieldGet(this, _n4vBar_el, \"f\").header) === null || _b === void 0 ? void 0 : _b.classList.add(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.fixed);\n  }\n\n  _createClass(n4vBar, [{\n    key: \"attachElements\",\n    value: function attachElements() {\n      var _a;\n\n      __classPrivateFieldGet(this, _n4vBar_el, \"f\").header = document.getElementById(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").ids.header);\n      __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton = ((_a = __classPrivateFieldGet(this, _n4vBar_el, \"f\").header) === null || _a === void 0 ? void 0 : _a.querySelector(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").controls(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").ids.wrapper))) || null;\n      __classPrivateFieldGet(this, _n4vBar_el, \"f\").wrapper = document.getElementById(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").ids.wrapper);\n    }\n  }, {\n    key: \"attachEvents\",\n    value: function attachEvents() {\n      var _this = this;\n\n      var _a, _b, _c, _d;\n\n      var focusables = (_a = __classPrivateFieldGet(this, _n4vBar_el, \"f\").header) === null || _a === void 0 ? void 0 : _a.querySelectorAll(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").focusable),\n          lastFocusable = focusables === null || focusables === void 0 ? void 0 : focusables[(focusables === null || focusables === void 0 ? void 0 : focusables.length) - 1];\n      lastFocusable === null || lastFocusable === void 0 ? void 0 : lastFocusable.addEventListener('keydown', this.throttle(this.eWrapTab.bind(this)));\n      focusables === null || focusables === void 0 ? void 0 : focusables.forEach(function (focusable) {\n        focusable.addEventListener('keydown', _this.throttle(_this.eHandleKeypress.bind(_this)));\n      });\n      var menuButtons = (_b = __classPrivateFieldGet(this, _n4vBar_el, \"f\").header) === null || _b === void 0 ? void 0 : _b.querySelectorAll(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").controls() + __classPrivateFieldGet(this, _n4vBar_sel, \"f\").not(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").controls(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").ids.wrapper)));\n      menuButtons === null || menuButtons === void 0 ? void 0 : menuButtons.forEach(function (menuButton) {\n        menuButton.addEventListener('mousedown', _this.throttle(_this.eToggleMenu.bind(_this), __classPrivateFieldGet(_this, _n4vBar_set, \"f\").delay.slow, new ThrottleOptions_1.default(true, false)));\n      });\n      (_c = __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton) === null || _c === void 0 ? void 0 : _c.addEventListener('mousedown', this.throttle(this.eToggleMobileMenu.bind(this), __classPrivateFieldGet(this, _n4vBar_set, \"f\").delay.slow, new ThrottleOptions_1.default(true, false)));\n      (_d = __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton) === null || _d === void 0 ? void 0 : _d.click();\n    } // Utility\n\n  }, {\n    key: \"throttle\",\n    value: function throttle(func) {\n      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __classPrivateFieldGet(this, _n4vBar_set, \"f\").delay.default;\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new ThrottleOptions_1.default();\n\n      var context,\n          args,\n          result,\n          timeout,\n          previous = 0,\n          later = function later() {\n        previous = options.leading === false ? 0 : new Date().getTime();\n        timeout = 0;\n        result = func.apply(context, args);\n\n        if (!timeout) {\n          context = args = null;\n        }\n      },\n          throttled = function throttled() {\n        var now = new Date().getTime();\n\n        if (!previous && options.leading === false) {\n          previous = now;\n        }\n\n        var remaining = wait - now + previous;\n        context = this;\n        args = arguments;\n\n        if (remaining <= 0 || remaining > wait) {\n          if (timeout) {\n            clearTimeout(timeout);\n            timeout = 0;\n          }\n\n          previous = now;\n          result = func.apply(context, args);\n\n          if (!timeout) {\n            context = args = null;\n          }\n        } else if (!timeout && options.trailing !== false) {\n          timeout = window.setTimeout(later, remaining);\n        }\n\n        return result;\n      };\n\n      return throttled;\n    }\n  }, {\n    key: \"getHeight\",\n    value: function getHeight(el) {\n      el === null || el === void 0 ? void 0 : el.classList.add(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.gettingHeight);\n      var height = (el === null || el === void 0 ? void 0 : el.scrollHeight) || 0;\n      el === null || el === void 0 ? void 0 : el.classList.remove(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.gettingHeight);\n      return height;\n    } // Functionality\n\n  }, {\n    key: \"setMobileMenu\",\n    value: function setMobileMenu() {\n      var _this2 = this;\n\n      var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      var _a, _b, _c;\n\n      var ariaExpanded = open ? 'true' : 'false',\n          ariaLabel = open ? 'close menu' : 'open menu';\n      (_a = __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', ariaExpanded);\n      setTimeout(function () {\n        var _a;\n\n        (_a = __classPrivateFieldGet(_this2, _n4vBar_el, \"f\").mobileButton) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-label', ariaLabel);\n      }, __classPrivateFieldGet(this, _n4vBar_set, \"f\").delay.fast);\n\n      if (open) {\n        (_b = __classPrivateFieldGet(this, _n4vBar_el, \"f\").wrapper) === null || _b === void 0 ? void 0 : _b.classList.add(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.open);\n      } else {\n        (_c = __classPrivateFieldGet(this, _n4vBar_el, \"f\").wrapper) === null || _c === void 0 ? void 0 : _c.classList.remove(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.open);\n        this.closeAllMenus();\n      }\n    }\n  }, {\n    key: \"setMenu\",\n    value: function setMenu(button) {\n      var _this3 = this;\n\n      var open = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var ariaExpanded = open ? 'true' : 'false',\n          menu = button === null || button === void 0 ? void 0 : button.nextElementSibling;\n\n      if (button && menu) {\n        menu.classList.add(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").classes.anime);\n        button.setAttribute('aria-expanded', ariaExpanded);\n        menu.style.height = open ? this.getHeight(menu) + 'px' : '';\n        setTimeout(function () {\n          menu === null || menu === void 0 ? void 0 : menu.classList.remove(__classPrivateFieldGet(_this3, _n4vBar_sel, \"f\").classes.anime);\n        }, __classPrivateFieldGet(this, _n4vBar_set, \"f\").delay.default);\n      }\n    }\n  }, {\n    key: \"closeAllMenus\",\n    value: function closeAllMenus() {\n      var _this4 = this;\n\n      var _a;\n\n      var menuButtons = (_a = __classPrivateFieldGet(this, _n4vBar_el, \"f\").wrapper) === null || _a === void 0 ? void 0 : _a.querySelectorAll(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").subMenuButtons);\n      menuButtons === null || menuButtons === void 0 ? void 0 : menuButtons.forEach(function (menuButton) {\n        _this4.setMenu(menuButton);\n      });\n    }\n  }, {\n    key: \"openClosestMenu\",\n    value: function openClosestMenu() {\n      var _a;\n\n      var activeButton = document.activeElement,\n          activeMenu = activeButton === null || activeButton === void 0 ? void 0 : activeButton.nextElementSibling,\n          showing = ((_a = activeButton === null || activeButton === void 0 ? void 0 : activeButton.getAttribute('aria-expanded')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'true';\n\n      if ((activeButton === null || activeButton === void 0 ? void 0 : activeButton.getAttribute('aria-controls')) === __classPrivateFieldGet(this, _n4vBar_sel, \"f\").ids.wrapper) {\n        activeMenu = __classPrivateFieldGet(this, _n4vBar_el, \"f\").wrapper;\n      }\n\n      if ((activeButton === null || activeButton === void 0 ? void 0 : activeButton.getAttribute('aria-controls')) && activeMenu && !showing) {\n        activeButton.click();\n        var firstFocusable = activeMenu.querySelector(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").focusable);\n        firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();\n      }\n    }\n  }, {\n    key: \"closeClosestMenu\",\n    value: function closeClosestMenu() {\n      var _a, _b;\n\n      var activeElement = document.activeElement,\n          activeMenu = activeElement === null || activeElement === void 0 ? void 0 : activeElement.closest(__classPrivateFieldGet(this, _n4vBar_sel, \"f\").subMenu),\n          activeButton = (activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.previousElementSibling) ? activeMenu.previousElementSibling : __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton;\n\n      if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.getAttribute('aria-controls')) && ((_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.getAttribute('aria-expanded')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'true') {\n        activeButton = activeElement;\n      }\n\n      if (((_b = activeButton === null || activeButton === void 0 ? void 0 : activeButton.getAttribute('aria-expanded')) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'true') {\n        activeButton === null || activeButton === void 0 ? void 0 : activeButton.click();\n        activeButton === null || activeButton === void 0 ? void 0 : activeButton.focus();\n      }\n    }\n  }, {\n    key: \"toggleClosestMenu\",\n    value: function toggleClosestMenu() {\n      var _a, _b;\n\n      if (((_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-expanded')) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'true') {\n        this.closeClosestMenu();\n      } else {\n        this.openClosestMenu();\n      }\n    } // Events\n\n  }, {\n    key: \"eWrapTab\",\n    value: function eWrapTab(e) {\n      var _a;\n\n      if (e.key.toLowerCase() === 'tab' && !e.shiftKey) {\n        (_a = __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton) === null || _a === void 0 ? void 0 : _a.focus();\n\n        if (document.activeElement === __classPrivateFieldGet(this, _n4vBar_el, \"f\").mobileButton) {\n          e.preventDefault();\n        }\n      }\n    }\n  }, {\n    key: \"eHandleButtonKeypress\",\n    value: function eHandleButtonKeypress(e) {\n      switch (e.key.toLowerCase()) {\n        case 'escape':\n        case 'arrowleft':\n          this.closeClosestMenu();\n          break;\n\n        case 'arrowright':\n          break;\n\n        case 'enter':\n        case 'space':\n          break;\n      }\n    }\n  }, {\n    key: \"eHandleLinkKeypress\",\n    value: function eHandleLinkKeypress(e) {\n      switch (e.key.toLowerCase()) {\n        case 'escape':\n        case 'arrowleft':\n          this.closeClosestMenu();\n          break;\n\n        case 'arrowright':\n          this.openClosestMenu();\n          break;\n\n        case 'enter':\n        case 'space':\n          this.toggleClosestMenu();\n          break;\n      }\n    }\n  }, {\n    key: \"eHandleKeypress\",\n    value: function eHandleKeypress(e) {\n      if (e.key.toLowerCase() !== 'tab') {\n        e.preventDefault();\n      }\n\n      var target = e.target;\n\n      switch (target === null || target === void 0 ? void 0 : target.tagName.toLowerCase()) {\n        case 'a':\n          this.eHandleLinkKeypress(e);\n          break;\n\n        case 'button':\n          this.eHandleButtonKeypress(e);\n          break;\n      }\n    }\n  }, {\n    key: \"eToggleMobileMenu\",\n    value: function eToggleMobileMenu(e) {\n      var _a;\n\n      var target = e.target,\n          open = ((_a = target === null || target === void 0 ? void 0 : target.getAttribute('aria-expanded')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== 'true';\n      this.setMobileMenu(open);\n    }\n  }, {\n    key: \"eToggleMenu\",\n    value: function eToggleMenu(e) {\n      var _a;\n\n      var target = e.target,\n          open = ((_a = target === null || target === void 0 ? void 0 : target.getAttribute('aria-expanded')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== 'true';\n      this.setMenu(target, open);\n    }\n  }]);\n\n  return n4vBar;\n}();\n\n_n4vBar_el = new WeakMap(), _n4vBar_sel = new WeakMap(), _n4vBar_set = new WeakMap();\nexports[\"default\"] = n4vBar;\n\n//# sourceURL=webpack://@sunderapps/n4v/./src/ts/n4vBar.ts?");

/***/ }),

/***/ "./src/scss/n4v.scss":
/*!***************************!*\
  !*** ./src/scss/n4v.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@sunderapps/n4v/./src/scss/n4v.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/n4v.ts");
/******/ 	
/******/ })()
;