(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_password_password_module_ts"], {
    /***/
    17151:
    /*!**********************************************************!*\
      !*** ./src/app/proj/password/password-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PasswordPageRoutingModule": function PasswordPageRoutingModule() {
          return (
            /* binding */
            _PasswordPageRoutingModule
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


      var _password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./password.page */
      7242);

      var routes = [{
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_0__.PasswordPage
      }];

      var _PasswordPageRoutingModule = /*#__PURE__*/_createClass(function PasswordPageRoutingModule() {
        _classCallCheck(this, PasswordPageRoutingModule);
      });

      _PasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PasswordPageRoutingModule);
      /***/
    },

    /***/
    144:
    /*!**************************************************!*\
      !*** ./src/app/proj/password/password.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PasswordPageModule": function PasswordPageModule() {
          return (
            /* binding */
            _PasswordPageModule
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


      var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./password-routing.module */
      17151);
      /* harmony import */


      var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./password.page */
      7242);

      var _PasswordPageModule = /*#__PURE__*/_createClass(function PasswordPageModule() {
        _classCallCheck(this, PasswordPageModule);
      });

      _PasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_1__.PasswordPage]
      })], _PasswordPageModule);
      /***/
    },

    /***/
    7242:
    /*!************************************************!*\
      !*** ./src/app/proj/password/password.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PasswordPage": function PasswordPage() {
          return (
            /* binding */
            _PasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./password.page.html */
      50490);
      /* harmony import */


      var _password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./password.page.scss */
      4244);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _PasswordPage = /*#__PURE__*/function () {
        function PasswordPage(formBuilder, auth, router, generalts, actroute) {
          _classCallCheck(this, PasswordPage);

          this.formBuilder = formBuilder;
          this.auth = auth;
          this.router = router;
          this.generalts = generalts;
          this.actroute = actroute;
          this.submitted = false;
          this.mob = this.actroute.snapshot.paramMap.get("mob_num");
        }

        _createClass(PasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
              confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }, {
              validator: (0, src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.MustMatch)("password", "confirmPassword")
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var pas, token, load;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.submitted = true; // stop here if form is invalid

                    if (!this.registerForm.invalid) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return");

                  case 5:
                    console.log(this.registerForm.value.confirmPassword, "reg");
                    pas = {
                      password: this.registerForm.value.password,
                      //mobile: this.mob,
                      password_confirm: this.registerForm.value.confirmPassword
                    };
                    token = localStorage.getItem("pas_tok");
                    _context.next = 10;
                    return this.generalts.loading("Loading ...");

                  case 10:
                    load = _context.sent;
                    _context.next = 13;
                    return load.present();

                  case 13:
                    this.auth.g_postt(pas, "change-password", token).subscribe(function (sa) {
                      console.log(sa, "da");

                      if (sa.message) {
                        load.dismiss(); //  alert("password");

                        _this.generalts.showToast(sa.message);

                        localStorage.setItem("*/", _this.mob);

                        _this.router.navigate(["/home"]); //localStorage.setItem("asd", this.mob);

                      } // else if (sa.status != true) {
                      //   this.err = sa.status;
                      // }

                    }, function (error) {
                      load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status_code == 400) {
                        _this.err = error.message;
                      }
                    });

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return PasswordPage;
      }();

      _PasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }];
      };

      _PasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-password",
        template: _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PasswordPage);
      /***/
    },

    /***/
    4244:
    /*!**************************************************!*\
      !*** ./src/app/proj/password/password.page.scss ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  padding: 0 15px !important;\n}\n\n.brde {\n  text-align: center;\n  border: 1px solid #6b1a0d;\n  padding: 4px 13px 20px;\n  border-radius: 48px;\n  margin: 0 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAvLyAgIC5pb24tbGFiZWwge1xuICAvLyAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgLy8gICB9XG59XG4uYnJkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZiMWEwZDtcbiAgcGFkZGluZzogNHB4IDEzcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbiAgbWFyZ2luOiAwIDEzcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    50490:
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/password/password.page.html ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <img src=\"../../../assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n\n  <div class=\"brde\">\n    <h3>Change Password</h3>\n    <form style=\"margin-top: 10px;\" [formGroup]=\"registerForm\">\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input\n          type=\"password\"\n          clearOnEdit=\"false\"\n          formControlName=\"password\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.password.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.password.errors.required\">\n            Password is required\n          </div>\n          <div *ngIf=\"f.password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input\n          clearOnEdit=\"false\"\n          type=\"password\"\n          formControlName=\"confirmPassword\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.confirmPassword.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.confirmPassword.errors.required\">\n            Confirm Password is required\n          </div>\n          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n            Password miss match\n          </div>\n        </div>\n      </ion-item>\n      <p text-center>{{err}}</p>\n      <div text-center>\n        <ion-button padding class=\"btn btn-primary\" (click)=\"onSubmit()\" color=\"tertiary\"\n          >Submit</ion-button\n        >\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n<!-- <div class=\"form-group\">\n      <label>Password</label>\n      <input\n        type=\"password\"\n        formControlName=\"password\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n      />\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        <div *ngIf=\"f.password.errors.minlength\">\n          Password must be at least 6 characters\n        </div>\n      </div>\n    </div> -->\n\n<!-- <div class=\"form-group\">\n      <label>Confirm Password</label>\n      <input\n        type=\"password\"\n        formControlName=\"confirmPassword\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\n      />\n      <div\n        *ngIf=\"submitted && f.confirmPassword.errors\"\n        class=\"invalid-feedback\"\n      >\n        <div *ngIf=\"f.confirmPassword.errors.required\">\n          Confirm Password is required\n        </div>\n        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n          Passwords must match\n        </div>\n      </div>\n    </div>\n  \n  \n  <div class=\"form-group\">\n      <button class=\"btn btn-primary\">Register</button>\n    </div>-->\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_password_password_module_ts-es5.js.map