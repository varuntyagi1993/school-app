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

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_dashboard_dashboard_module_ts"], {
    /***/
    15075:
    /*!***************************************************************!*\
      !*** ./src/app/faculty/dashboard/dashboard-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageRoutingModule": function DashboardPageRoutingModule() {
          return (
            /* binding */
            _DashboardPageRoutingModule
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      75599);

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
      }];

      var _DashboardPageRoutingModule = /*#__PURE__*/_createClass(function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      });

      _DashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DashboardPageRoutingModule);
      /***/
    },

    /***/
    87869:
    /*!*******************************************************!*\
      !*** ./src/app/faculty/dashboard/dashboard.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageModule": function DashboardPageModule() {
          return (
            /* binding */
            _DashboardPageModule
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      15075);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page */
      75599);

      var _DashboardPageModule = /*#__PURE__*/_createClass(function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      });

      _DashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
      })], _DashboardPageModule);
      /***/
    },

    /***/
    75599:
    /*!*****************************************************!*\
      !*** ./src/app/faculty/dashboard/dashboard.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPage": function DashboardPage() {
          return (
            /* binding */
            _DashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboard.page.html */
      48289);
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      53324);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);

      var _DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(general, router, alertController, popoverController, authService, menu) {
          _classCallCheck(this, DashboardPage);

          this.general = general;
          this.router = router;
          this.alertController = alertController;
          this.popoverController = popoverController;
          this.authService = authService;
          this.menu = menu;
          this.submenu = false;
          this.Institution = [];
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menu.enable(true);
            this.menu.swipeGesture(true);
            this.token = localStorage.getItem("pas_faculty");
            var institute = localStorage.getItem("institute");

            if (!institute) {
              this.getInstitute();
            } else {// this.GetFacClasses();
              // this.FindUser();
            }
          }
        }, {
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

                _this.general.router.navigateByUrl('/login');
              } else {// localStorage.setItem('institute', JSON.stringify(1));
              }

              console.log(response, "response111", response.token);
            });
          }
        }, {
          key: "institute",
          value: function institute(response) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var inputArray, _iterator, _step, name, inst, alert;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    inputArray = [];

                    if (response.institutions.length > 1) {
                      console.log(response.institutions[0]);
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
                    }

                    if (response.institutions.length == 1) {
                      // for (let name of response.institutions) {
                      // if (name.id == '1') {
                      inst = response.institutions[0];
                      localStorage.setItem("institute", inst.id);
                      console.log(inst.id, "name.student_id");
                      inputArray.push({
                        type: "radio",
                        label: inst.name,
                        value: inst.id,
                        checked: true
                      }); // } else {
                      //   inputArray.push({
                      //     type: "radio",
                      //     label: name.name,
                      //     value: name.id,
                      //     checked: false
                      //   });
                      // }
                      // }
                    }

                    _context.next = 5;
                    return this.alertController.create({
                      header: "Select Institute",
                      backdropDismiss: false,
                      buttons: [{
                        text: "OK",
                        handler: function handler(data) {
                          console.log("out", data);
                          localStorage.setItem("institute", data); // this.GetFacClasses();
                          // this.FindUser();

                          console.log('kjh', 'me Data');
                        }
                      }],
                      inputs: inputArray
                    });

                  case 5:
                    alert = _context.sent;
                    alert.present();

                  case 7:
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
              var _this2 = this;

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
                      console.log(_this2.general.instituteHit, "da;");

                      if (_this2.general.instituteHit) {
                        _this2.getInstitute();

                        _this2.general.instituteHit = !_this2.general.instituteHit;
                      }

                      console.log(_this2.general.instituteHit, "da 123");
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "rout",
          value: function rout(val) {
            console.log(val, "val");
            this.router.navigate([val]);
          }
        }]);

        return DashboardPage;
      }();

      _DashboardPage.ctorParameters = function () {
        return [{
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
        }];
      };

      _DashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DashboardPage);
      /***/
    },

    /***/
    53324:
    /*!*******************************************************!*\
      !*** ./src/app/faculty/dashboard/dashboard.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #620b23;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.card1 {\n  background: linear-gradient(to bottom, #cc6f61 0%, #54231c 100%);\n}\n\n.img1 {\n  width: 20px;\n  margin: 0px 35%;\n  margin-top: 20px;\n}\n\n.label {\n  margin-top: 5px;\n  color: #ffff;\n}\n\n.text1 {\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 10px;\n  color: white;\n}\n\n.sms_c {\n  position: absolute;\n  top: 2px;\n  right: 45px;\n  color: #ae5c50;\n  background: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 2;\n  font-size: 10px;\n}\n\nion-segment {\n  color: #fff;\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked {\n  background: #bd5757;\n  color: #fff;\n  text-transform: unset;\n}\n\nion-segment .segment-button-checked:nth-child(1) {\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked:nth-child(2) {\n  border-radius: 0;\n}\n\n.picker_input {\n  border: 1px solid #252525 !important;\n  border-radius: 40px;\n  margin-top: 20px;\n}\n\n.picker_input ion-input {\n  border: 1px solid transparent;\n  padding: 0;\n}\n\n.picker_input ion-icon {\n  margin: 5px !important;\n}\n\n.topicons_design {\n  margin-top: 20px;\n  color: #bdbdbd;\n}\n\n.topicons_design ion-icon {\n  font-size: 35px;\n  border: 1px solid #252525;\n  border-radius: 50%;\n  padding: 10px;\n}\n\n.topicons_design ion-label {\n  color: #252525;\n}\n\n.icons_design .active {\n  color: var(--ion-color-primary);\n  border: none !important;\n}\n\n.icons_design ion-col {\n  margin-top: 20px;\n  color: #bdbdbd;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.icons_design ion-col ion-icon {\n  font-size: 35px;\n}\n\n.prof {\n  font-size: 22px;\n  margin-top: 4px;\n}\n\n.seg {\n  background: #a93d3d;\n  margin-top: -4px;\n  height: 69px;\n  border-radius: 0;\n}\n\n.seg-btn {\n  width: 50%;\n}\n\n.line {\n  border-right: 1px solid #8b7777;\n}\n\n.line1 {\n  border-top: 1px solid #8b7777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxxQkFBQTtBQUFEOztBQUVBO0VBQ0MsdUJBQUE7RUFDQSxzQkFBQTtBQUNEOztBQUNBO0VBRUMsZ0VBQUE7QUFDRDs7QUFDQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7RUFFQSxZQUFBO0FBRUQ7O0FBQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0Q7O0FBREE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUQ7O0FBRkE7RUFFQyxXQUFBO0VBQ0EsZ0JBQUE7QUFJRDs7QUFIQztFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQU9BLHFCQUFBO0FBREg7O0FBTEc7RUFDQSxnQkFBQTtBQU9IOztBQUxHO0VBQ0EsZ0JBQUE7QUFPSDs7QUFEQTtFQUNDLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlEOztBQUZDO0VBQ0MsNkJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREM7RUFDQyxzQkFBQTtBQUdGOztBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBRUQ7O0FBQUM7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQztFQUNDLGNBQUE7QUFFRjs7QUFFQTtFQUNDLCtCQUFBO0VBQ0EsdUJBQUE7QUFDRDs7QUFHQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDQyxlQUFBO0FBQUg7O0FBSUE7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQUREOztBQUdBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFEOztBQUdBO0VBQ0MsVUFBQTtBQUFEOztBQUdBO0VBQ0MsK0JBQUE7QUFBRDs7QUFFQTtFQUNDLDZCQUFBO0FBQ0QiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6ICM2MjBiMjM7XG59XG5pb24tY2FyZCB7XG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQxIHtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNzg0NzAgMCUsICNhOTJjMTYgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjYzZmNjEgMCUsICM1NDIzMWMgMTAwJSk7XG59XG4uaW1nMSB7XG5cdHdpZHRoOiAyMHB4O1xuXHRtYXJnaW46IDBweCAzNSU7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGFiZWwge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdC8vIGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNmZmZmO1xufVxuLnRleHQxIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRjb2xvcjogd2hpdGU7XG59XG4uc21zX2Mge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMnB4O1xuXHRyaWdodDogNDVweDtcblx0Y29sb3I6ICNhZTVjNTA7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAyO1xuXHRmb250LXNpemU6IDEwcHg7XG59XG5pb24tc2VnbWVudCB7XG5cdC8vIGJvcmRlcjogMXB4IHNvbGlkICNiZDU3NTc7XG5cdGNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmQ1NzU3O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHQmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdH1cblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1bnNldDtcblx0fVxufVxuXG4ucGlja2VyX2lucHV0IHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzI1MjUyNSAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdGlvbi1pbnB1dCB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdGlvbi1pY29uIHtcblx0XHRtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi50b3BpY29uc19kZXNpZ24ge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRjb2xvcjogI2JkYmRiZDtcblxuXHRpb24taWNvbiB7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdH1cblx0aW9uLWxhYmVsIHtcblx0XHRjb2xvcjogIzI1MjUyNTtcblx0fVxufVxuXG4uaWNvbnNfZGVzaWduIC5hY3RpdmUge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmljb25zX2Rlc2lnbiB7XG5cdGlvbi1jb2wge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0Y29sb3I6ICNiZGJkYmQ7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRtYXJnaW46IDEwcHg7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdH1cblx0fVxufVxuLnByb2Yge1xuXHRmb250LXNpemU6IDIycHg7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbi5zZWcge1xuXHRiYWNrZ3JvdW5kOiAjYTkzZDNkO1xuXHRtYXJnaW4tdG9wOiAtNHB4O1xuXHRoZWlnaHQ6IDY5cHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zZWctYnRuIHtcblx0d2lkdGg6IDUwJTtcblxufVxuLmxpbmUge1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOGI3Nzc3O1xufVxuLmxpbmUxIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM4Yjc3Nzc7XG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    48289:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/dashboard/dashboard.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Dashboard </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <img src=\"assets/images/clg.png\"  /> -->\n  <img src=\"assets/images/banner_2.png\" style=\"width: 100%;\n  height: 202px;\" alt=\"\" />\n  <!-- <ion-segment class=\"seg\" value=\"profile\">\n    <ion-segment-button value=\"profile\" class=\"seg-btn\" (click)=\"rout('/profile')\" >\n      <img class=\"img1\" src=\"assets/images/profile.png\" />\n      <ion-label class=\"label\">Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"notification\" (click)=\"rout('/noti')\">\n      <img class=\"img1\" src=\"assets/images/notification.png\" />\n      <ion-label class=\"label\">Notifications</ion-label>\n      <span *ngIf=\"sms_count\" class=\"sms_c\">{{sms_count}}</span>\n    </ion-segment-button>\n  </ion-segment> -->\n  <ion-grid style=\"background: #620b23; height: 57%; \">\n    <ion-row>&nbsp;</ion-row>\n    <ion-row>&nbsp;</ion-row>\n    <ion-row>&nbsp;</ion-row>\n    <!-- <ion-row>&nbsp;</ion-row>\n    <ion-row>&nbsp;</ion-row> -->\n    \n    <ion-row style=\"margin-top: 20px;\n    margin-bottom: 20px;\">\n      <ion-col size=\"6\" class=\"line\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/class-list')\">\n          <img class=\"img1\" src=\"assets/images/calendar.png\" />\n          <ion-label class=\"label\">Attendance</ion-label>\n        </div>\n        \n      </ion-col>\n      <ion-col size=\"6\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/assign-faculty')\">\n          <img class=\"img1\" src=\"assets/images/circular.png\" />\n          <ion-label class=\"label\">Assignment / Notice</ion-label>\n          </div>\n      </ion-col>\n     \n     \n      \n    </ion-row>\n    <ion-row style=\"margin-top: 20px;\n    margin-bottom: 20px;\">\n      <ion-col size=\"6\" class=\"line\">\n        \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/exam')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Exam</ion-label>\n        </div>\n      </ion-col>\n      <!-- <ion-col size=\"6\" class=\"line\">\n        \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/mark-remarks')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Remarks For Mark Card</ion-label>\n        </div>\n      </ion-col> -->\n     \n     \n      \n    </ion-row>\n    <!-- <ion-row style=\"margin-top: 30px;\n    margin-bottom: 30px;\">\n      <ion-col size=\"3\" ></ion-col>\n      <ion-col size=\"6\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/class-list-mark')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Mark Entry</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\" ></ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_dashboard_dashboard_module_ts-es5.js.map