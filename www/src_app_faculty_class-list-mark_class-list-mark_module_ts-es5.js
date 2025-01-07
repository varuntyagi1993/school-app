(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_class-list-mark_class-list-mark_module_ts"], {
    /***/
    58602:
    /*!***************************************************************************!*\
      !*** ./src/app/faculty/class-list-mark/class-list-mark-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassListMarkPageRoutingModule": function ClassListMarkPageRoutingModule() {
          return (
            /* binding */
            _ClassListMarkPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _class_list_mark_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./class-list-mark.page */
      61891);

      var routes = [{
        path: '',
        component: _class_list_mark_page__WEBPACK_IMPORTED_MODULE_0__.ClassListMarkPage
      }];

      var _ClassListMarkPageRoutingModule = /*#__PURE__*/_createClass(function ClassListMarkPageRoutingModule() {
        _classCallCheck(this, ClassListMarkPageRoutingModule);
      });

      _ClassListMarkPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClassListMarkPageRoutingModule);
      /***/
    },

    /***/
    69828:
    /*!*******************************************************************!*\
      !*** ./src/app/faculty/class-list-mark/class-list-mark.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassListMarkPageModule": function ClassListMarkPageModule() {
          return (
            /* binding */
            _ClassListMarkPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _class_list_mark_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./class-list-mark-routing.module */
      58602);
      /* harmony import */


      var _class_list_mark_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./class-list-mark.page */
      61891);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _ClassListMarkPageModule = /*#__PURE__*/_createClass(function ClassListMarkPageModule() {
        _classCallCheck(this, ClassListMarkPageModule);
      });

      _ClassListMarkPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _class_list_mark_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassListMarkPageRoutingModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule],
        declarations: [_class_list_mark_page__WEBPACK_IMPORTED_MODULE_1__.ClassListMarkPage]
      })], _ClassListMarkPageModule);
      /***/
    },

    /***/
    61891:
    /*!*****************************************************************!*\
      !*** ./src/app/faculty/class-list-mark/class-list-mark.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassListMarkPage": function ClassListMarkPage() {
          return (
            /* binding */
            _ClassListMarkPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_class_list_mark_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./class-list-mark.page.html */
      86742);
      /* harmony import */


      var _class_list_mark_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./class-list-mark.page.scss */
      8340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _ClassListMarkPage = /*#__PURE__*/function () {
        function ClassListMarkPage(menu, authService, general, router, location, alert, alertController, popoverController) {
          _classCallCheck(this, ClassListMarkPage);

          this.menu = menu;
          this.authService = authService;
          this.general = general;
          this.router = router;
          this.location = location;
          this.alert = alert;
          this.alertController = alertController;
          this.popoverController = popoverController;
          this.Institution = [];
          this.sub = true;
          this.submenu = false;
        } // private storage: Storage) { }


        _createClass(ClassListMarkPage, [{
          key: "getInstitute",
          value: function getInstitute() {
            var _this = this;

            this.authService.get_fac_Institute('teaching-staff/institutions', this.token).subscribe(function (response) {
              _this.Institution = response;

              _this.institute(response);

              if (_this.Institution['institutions'].length == 0) {
                console.log(response, "asdda", response.token);
                alert("You have no Institute");
                localStorage.clear();
                localStorage.removeItem("token");
                localStorage.setItem('value', JSON.stringify(1));

                _this.general.router.navigateByUrl('opem');
              } else {// localStorage.setItem('institute', JSON.stringify(1));
              }

              console.log(response, "response111", response.token);
            });
          }
        }, {
          key: "institute",
          value: function institute(response) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var inputArray, _iterator, _step, name, _alert;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    inputArray = [];

                    if (!response.institutions[0]) {
                      _context.next = 9;
                      break;
                    }

                    _iterator = _createForOfIteratorHelper(response.institutions);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        name = _step.value;

                        if (name.id == '1') {
                          console.log(name.id, "name.student_id");
                          inputArray.push({
                            type: "radio",
                            label: name.name,
                            value: name.id,
                            checked: true
                          });
                        } else {
                          inputArray.push({
                            type: "radio",
                            label: name.name,
                            value: name.id,
                            checked: false
                          });
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    console.log(inputArray, "inputArray");
                    _context.next = 7;
                    return this.alertController.create({
                      header: "Select Institute",
                      backdropDismiss: false,
                      buttons: [{
                        text: "OK",
                        handler: function handler(data) {
                          console.log("out", data);
                          localStorage.setItem("institute", data);

                          _this2.GetFacSubjects();

                          _this2.FindUser();

                          console.log('kjh', 'me Data');
                        }
                      }],
                      inputs: inputArray
                    });

                  case 7:
                    _alert = _context.sent;

                    _alert.present();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentPopover",
          value: function presentPopover() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.submenu = !this.submenu;

                    if (this.submenu) {
                      _context2.next = 4;
                      break;
                    }

                    this.general.popoverController.dismiss();
                    return _context2.abrupt("return");

                  case 4:
                    this.general.presentPopover().then(function (data) {
                      console.log(_this3.general.instituteHit, "da;");

                      if (_this3.general.instituteHit) {
                        _this3.getInstitute();

                        _this3.general.instituteHit = !_this3.general.instituteHit;
                      }

                      console.log(_this3.general.instituteHit, "da 123");
                    }); // const popover = await this.popoverController.create({
                    //   component: PopComponent,
                    //   cssClass: 'my-custom-class',
                    //   event: ev,
                    //   translucent: true
                    // });
                    // await popover.present();
                    // const { role } = await popover.onDidDismiss();
                    // console.log('onDidDismiss resolved with role', role);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_faculty"); // return

            var institute = localStorage.getItem("institute");

            if (!institute) {
              this.getInstitute();
            } else {
              this.GetFacSubjects();
              this.FindUser();
            } // this.menu.enable(false);
            // this.menu.close();
            // this.GetFacSubjects();
            // console.log('kjh', 'me Data');
            // this.FindUser();

          }
        }, {
          key: "FindUser",
          value: function FindUser() {
            var _this4 = this;

            // return
            this.authService.g_postt_fac('item', 'me', this.token).subscribe(function (data) {
              console.log(data, "jhfdfhg");
              var response = data;
              _this4.Name = response.name;
              console.log(response, 'me Data', _this4.Name);
            });
          }
        }, {
          key: "GetFacSubjects",
          value: function GetFacSubjects() {
            var _this5 = this;

            this.authService.get_fac_t("teaching-staff/faculty-subjects", this.token).subscribe(function (data) {
              _this5.FacSub_data = true;
              console.log(data, 'dataget_fac_t');
              var response = data;
              _this5.reponseData = data;
              _this5.FacSubjects = response.facultyElectiveSubjects;
              _this5.MandtorySub = response.facultyMandatorySubjects;
              console.log(_this5.FacSubjects, "FacSubjects");
            }, function (err) {
              if (err.status === 401 || err.status === 422) {
                _this5.general.loginAgain();
              }
            });
          }
        }, {
          key: "select",
          value: function select(s) {
            localStorage.setItem('myParam', JSON.stringify(s));
            this.router.navigate(['/fac-markentry', {
              value: JSON.stringify(s)
            }]);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alert.create({
                      header: 'Confirm!',
                      message: 'Are You Sure!',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'OK',
                        handler: function handler() {
                          console.log('Confirm Ok');

                          _this6.auth_logout();
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "auth_logout",
          value: function auth_logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this7 = this;

              var load;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.general.loading("Loading ...");

                  case 2:
                    load = _context4.sent;
                    load.present();
                    this.authService.g_postt_fac('{}', "logout", this.token).subscribe(function (data) {
                      console.log(data);
                      load.dismiss();
                      localStorage.clear();
                      localStorage.removeItem("token");
                      localStorage.setItem('value', JSON.stringify(1));

                      _this7.router.navigateByUrl('opem');
                    }, function (err) {
                      _this7.data = true;

                      if (err.status === 401 || err.status === 422) {
                        if (err.statusText == 'Unauthorized') {
                          localStorage.clear();
                          localStorage.removeItem("token");
                          alert("session expired!!");

                          _this7.router.navigateByUrl("login");
                        }
                      }

                      if (err.status === 200) {
                        alert("Server Connection Error. Please Login Again.");
                        localStorage.clear();
                      }
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.presentAlertConfirm();
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('dashboard');
          }
        }]);

        return ClassListMarkPage;
      }();

      _ClassListMarkPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController
        }];
      };

      _ClassListMarkPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-class-list-mark',
        template: _raw_loader_class_list_mark_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_class_list_mark_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClassListMarkPage);
      /***/
    },

    /***/
    8340:
    /*!*******************************************************************!*\
      !*** ./src/app/faculty/class-list-mark/class-list-mark.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.hdr_card {\n  padding-left: 10px;\n  padding-right: 5px;\n  color: #000;\n}\n\nion-card-content {\n  padding: 0 !important;\n  overflow: scroll;\n}\n\nion-card-content ion-grid {\n  padding: 0 !important;\n}\n\n.expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.not-colapse {\n  height: auto;\n}\n\n.accordion-button {\n  border: none;\n  color: #1e2023;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f1d0cb;\n  margin: 15px 19px;\n  height: 50px !important;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #f1d0cb;\n  height: 48px !important;\n}\n\n.student_name {\n  margin-top: 15px;\n  font-size: 18px;\n  margin-left: 25px;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n\n.font {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWxpc3QtbWFyay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDVSxpQ0FBQTtFQUNBLFlBQUE7QUFDVjs7QUFDTTtFQUFZLGFBQUE7QUFHbEI7O0FBRk07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtWOztBQUhNO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQU1WOztBQUxVO0VBQ0kscUJBQUE7QUFPZDs7QUFGTTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQUtWOztBQUZRO0VBQ0Usb0JBQUE7QUFLVjs7QUFIUTtFQUNJLFlBQUE7QUFNWjs7QUFKUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBT1Y7O0FBSk07RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBT1Y7O0FBSE07RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1WOztBQUZJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBS1I7O0FBREE7RUFDSSxlQUFBO0FBSUoiLCJmaWxlIjoiY2xhc3MtbGlzdC1tYXJrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgICAgICAgIGJvcmRlcjogMXB4ICBzb2xpZCBncmF5IWltcG9ydGFudCA7XG4gICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICB9XG4gICAgICBpb24tY29udGVudHtwYWRkaW5nOiAxMHB4O31cbiAgICAgIC5oZHJfY2FyZHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGwgO1xuICAgICAgICAgIGlvbi1ncmlke1xuICAgICAgICAgICAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5leHBhbmQtd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICAgICAgICB9ICBcbiAgICAgICAgXG4gICAgICAgIC5jb2xsYXBzZWQge1xuICAgICAgICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5ub3QtY29sYXBzZXtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiByZ2IoMzAsIDMyLCAzNSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIwOCwgMjAzKTtcbiAgICAgICAgICBtYXJnaW46IDE1cHggMTlweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFkMGNiO1xuICAgICAgICAgIGhlaWdodDogNDhweCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgLnN0dWRlbnRfbmFtZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICB9XG4gICAgICBcbi5IZWFkRGF0YSB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGNvbG9yOiAjYWU1YzUwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5mb250IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
      /***/
    },

    /***/
    86742:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/class-list-mark/class-list-mark.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n     \n      <ion-title >Marks Entry </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!FacSub_data\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"FacSub_data\">\n    <mat-accordion style=\"padding:0px !important\">\n      <mat-expansion-panel [expanded]=\"true\" class=\"animated slideInLeft delay-0s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            Subjects\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row class=\"HeadData\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Class\n            </ion-col>\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Division\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              Subjects\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              Action\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of FacSubjects\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              {{s.class}}\n            </ion-col>\n            <ion-col class=\"font divsion ion-text-center\" text-center size=\"3\" >\n              {{s.division}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              {{s.subject_code}}-{{s.subject_name}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n      <mat-expansion-panel class=\"animated slideInRight delay-1s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            Mandatory Subjects\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row class=\"HeadData\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Class\n            </ion-col>\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Division\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              Subjects\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              Action\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of MandtorySub\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              {{s.class}}\n            </ion-col>\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              {{s.division}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              <!-- {{s.subject_code}} -->\n              {{s.subject_name}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n              <!-- Attend -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_class-list-mark_class-list-mark_module_ts-es5.js.map