(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
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


      var _auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../auth/aaa.guard */
      62690);

      var routes = [{
        path: "",
        redirectTo: "opem",
        pathMatch: "full"
      }, // { path: "**", redirectTo: "home" }, pathMatch: "full"
      //{ path: '**', component: OpemPage },
      {
        path: "opem",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_logger_opem_opem_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./logger/opem/opem.module */
          68641)).then(function (m) {
            return m.OpemPageModule;
          });
        } //,canActivate: [AaaGuard]

      }, {
        path: "home",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/home/home.module */
          424)).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_logger_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./logger/login/login.module */
          91535)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "profile",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/profile/profile.module */
          20000)).then(function (m) {
            return m.ProfilePageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: "signup",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_logger_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./logger/signup/signup.module */
          50309)).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: "otpcheck",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_logger_otpcheck_otpcheck_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./logger/otpcheck/otpcheck.module */
          18716)).then(function (m) {
            return m.OtpcheckPageModule;
          });
        }
      }, {
        path: "contact",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/contact/contact.module */
          92654)).then(function (m) {
            return m.ContactPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: "password",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_password_password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/password/password.module */
          144)).then(function (m) {
            return m.PasswordPageModule;
          });
        }
      }, {
        path: "noti",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_proj_noti_noti_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/noti/noti.module */
          80095)).then(function (m) {
            return m.NotiPageModule;
          });
        }
      }, {
        path: "attendanc",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js-src_app_-a62796"), __webpack_require__.e("src_app_proj_attendanc_attendanc_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/attendanc/attendanc.module */
          2191)).then(function (m) {
            return m.AttendancPageModule;
          });
        }
      }, {
        path: 'noti-view',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_noti-view_noti-view_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/noti-view/noti-view.module */
          61685)).then(function (m) {
            return m.NotiViewPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'homee',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-0bef93"), __webpack_require__.e("src_app_faculty_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/home/home.module */
          69056)).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'attendance',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_faculty_attendance_attendance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/attendance/attendance.module */
          47068)).then(function (m) {
            return m.AttendancePageModule;
          });
        }
      }, {
        path: 'view-attdance',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_faculty_view-attendance_view-attendance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/view-attendance/view-attendance.module */
          35378)).then(function (m) {
            return m.ViewAttendancePageModule;
          });
        }
      }, {
        path: 'attendance-statement',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_faculty_attendance-statement_attendance-statement_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/attendance-statement/attendance-statement.module */
          10439)).then(function (m) {
            return m.AttendanceStatementPageModule;
          });
        }
      }, {
        path: 'menuextra',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/menuextra/menuextra.module */
          53104)).then(function (m) {
            return m.MenuextraPageModule;
          });
        }
      }, {
        path: 'circular',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_circular_circular_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/circular/circular.module */
          96189)).then(function (m) {
            return m.CircularPageModule;
          });
        }
      }, {
        path: 'circularsingle',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_circular_circularsingle_circularsingle_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/circular/circularsingle/circularsingle.module */
          52920)).then(function (m) {
            return m.CircularsinglePageModule;
          });
        }
      }, {
        path: 'timetable',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_timetable_timetable_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/timetable/timetable.module */
          83255)).then(function (m) {
            return m.TimetablePageModule;
          });
        }
      }, {
        path: 'calendar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js-src_app_-a62796"), __webpack_require__.e("src_app_proj_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/calendar/calendar.module */
          27230)).then(function (m) {
            return m.CalendarPageModule;
          });
        }
      }, {
        path: 'marks-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_marks-list_marks-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/marks-list/marks-list.module */
          34201)).then(function (m) {
            return m.MarksListPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'fee-payment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_proj_success_success_page_ts"), __webpack_require__.e("src_app_proj_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/payment/payment.module */
          21241)).then(function (m) {
            return m.PaymentPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'pay-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_pay-report_pay-report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/pay-report/pay-report.module */
          67696)).then(function (m) {
            return m.PayReportPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'success',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_proj_success_success_page_ts"), __webpack_require__.e("src_app_proj_success_success_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/success/success.module */
          42685)).then(function (m) {
            return m.SuccessPageModule;
          });
        }
      }, {
        path: 'class-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_class-list_class-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/class-list/class-list.module */
          2661)).then(function (m) {
            return m.ClassListPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'fac-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_fac-password_fac-password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/fac-password/fac-password.module */
          77549)).then(function (m) {
            return m.FacPasswordPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/dashboard/dashboard.module */
          87869)).then(function (m) {
            return m.DashboardPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'assign-faculty',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_assign-faculty_assign-faculty_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/assign-faculty/assign-faculty.module */
          75132)).then(function (m) {
            return m.AssignFacultyPageModule;
          });
        }
      }, {
        path: 'assignment-notices',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_assignment-notices_assignment-notices_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/assignment-notices/assignment-notices.module */
          15312)).then(function (m) {
            return m.AssignmentNoticesPageModule;
          });
        }
      }, {
        path: 'assignmentedit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_quill_dist_quill_js"), __webpack_require__.e("src_app_faculty_assignmentedit_assignmentedit_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/assignmentedit/assignmentedit.module */
          20062)).then(function (m) {
            return m.AssignmenteditPageModule;
          });
        }
      }, {
        path: 'menupop',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_menupop_menupop_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/menupop/menupop.module */
          39903)).then(function (m) {
            return m.MenupopPageModule;
          });
        }
      }, {
        path: 'change-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_proj_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./proj/change-password/change-password.module */
          5057)).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        }
      }, {
        path: 'fac-markentry',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-0bef93"), __webpack_require__.e("default-src_app_faculty_save-marks_save-marks_page_ts"), __webpack_require__.e("src_app_faculty_fac-markentry_fac-markentry_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/fac-markentry/fac-markentry.module */
          79521)).then(function (m) {
            return m.FacMarkentryPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'class-list-mark',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-0bef93"), __webpack_require__.e("src_app_faculty_class-list-mark_class-list-mark_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/class-list-mark/class-list-mark.module */
          69828)).then(function (m) {
            return m.ClassListMarkPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'save-marks',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-0bef93"), __webpack_require__.e("default-src_app_faculty_save-marks_save-marks_page_ts"), __webpack_require__.e("src_app_faculty_save-marks_save-marks_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/save-marks/save-marks.module */
          47832)).then(function (m) {
            return m.SaveMarksPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'mark-remarks',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_mark-remarks_mark-remarks_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/mark-remarks/mark-remarks.module */
          8526)).then(function (m) {
            return m.MarkRemarksPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'remark-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_remark-modal_remark-modal_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/remark-modal/remark-modal.module */
          49997)).then(function (m) {
            return m.RemarkModalPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'exam',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_exam_exam_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/exam/exam.module */
          48998)).then(function (m) {
            return m.ExamPageModule;
          });
        },
        canActivate: [_auth_aaa_guard__WEBPACK_IMPORTED_MODULE_0__.AaaGuard]
      }, {
        path: 'bluck-attendance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faculty_bluck-attendance_bluck-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faculty/bluck-attendance/bluck-attendance.module */
          35467)).then(function (m) {
            return m.BluckAttendancePageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      75592);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth.service */
      37556);
      /* harmony import */


      var _services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/general.service */
      21864);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, menu, toastController, router, network, authService, gelService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.menu = menu;
          this.toastController = toastController;
          this.router = router;
          this.network = network;
          this.authService = authService;
          this.gelService = gelService;
          this.navigate = [{
            title: "Home",
            url: "/home",
            icon: "home"
          }, {
            title: "Profile",
            url: "/profile",
            icon: "school"
          }, {
            title: "Notification",
            url: "/noti",
            icon: "notifications-outline"
          }, {
            title: "Attendance",
            url: "/attendanc",
            icon: "calendar"
          }, {
            title: "Fee",
            url: "/fee-payment",
            icon: "pricetag-outline"
          }, // {
          //   title: "eWallet",
          //   url: "/ewallet-dashboard",
          //   icon: "wallet"
          // },
          {
            title: "Progress Report",
            url: "/marks-list",
            icon: "book-outline"
          }, {
            title: "Contact Us",
            url: "/contact",
            icon: "call"
          }];
          this.initializeApp();
          this.sideMenu();
          this.backbuttonEvent();
          this.NetworkStatus();
          this.Checkversion();
        }

        _createClass(AppComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log("app test");
          }
        }, {
          key: "logot",
          value: function logot() {
            localStorage.clear();
            this.router.navigate(["/opem"]);
            this.menu.close();
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleLightContent();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "backbuttonEvent",
          value: function backbuttonEvent() {
            var _this2 = this;

            this.platform.backButton.subscribe(function () {
              if (_this2.router.url === "/home") {
                navigator["app"].exitApp();
              } else if (_this2.router.url === "/dashboard") {
                navigator["app"].exitApp();
              } else if (_this2.router.url === "/opem") {
                navigator["app"].exitApp();
              } else {
                window.history.back();
              }
            });
          }
        }, {
          key: "NetworkStatus",
          value: function NetworkStatus() {
            var _this3 = this;

            var disconct = this.network.onDisconnect();
            console.log("disconct", disconct);
            var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
              console.log("Network was disconnected :-(");

              _this3.presentToast("Your in offline");
            });

            (function (error) {//  alert("eroor");
            }); // disconnectSubscription.unsubscribe();


            var conc = this.network.onConnect();
            console.log(conc, "connected"); //  disconnectSubscription.unsubscribe();

            var connectSubscription = this.network.onConnect().subscribe(function () {
              _this3.presentToast(_this3.network.type + " " + "network was connected");
            }); // stop connect watch
            // connectSubscription.unsubscribe();
          }
        }, {
          key: "presentToast",
          value: function presentToast(as) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: as,
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sideMenu",
          value: function sideMenu() {
            // this.menu.enable(false);
            // this.menu.swipeGesture(false);
            console.log(localStorage.getItem("pas_faculty"));
            console.log(this.navigate, "asdf");

            if (localStorage.getItem("pas_faculty")) {
              this.navigate = [{
                title: "Dashboard",
                url: "/dashboard",
                icon: "home"
              }, {
                title: "Attendance",
                url: "/class-list",
                icon: "",
                src: "../assets/images/calendar.png"
              }, {
                title: "Assignment / Notice",
                url: "/assign-faculty",
                icon: "",
                src: "../assets/images/circular.png"
              }, {
                title: "Exam",
                url: "/exam",
                icon: "",
                src: "../assets/images/progress-report.png"
              }, // {
              //   title: "Remarks For Mark Card",
              //   url: "/mark-remarks",
              //   icon: "",
              //   src: "../assets/images/progress-report.png",
              // },
              {
                title: "Change Password",
                url: "/fac-password",
                icon: "",
                src: "../assets/images/profile.png"
              }];
            } else if (localStorage.getItem("pas_tok")) {
              this.navigate = [{
                title: "Home",
                url: "/home",
                icon: "home"
              }, {
                title: "Profile",
                url: "/profile",
                icon: "school"
              }, {
                title: "Notification",
                url: "/noti",
                icon: "notifications-outline"
              }, {
                title: "Attendance",
                url: "/attendanc",
                icon: "calendar"
              }, {
                title: "Assignment / Notice",
                url: "/circular",
                icon: "",
                src: "../assets/images/circular.png"
              }, {
                title: "Progress Report",
                url: "/marks-list",
                icon: "book-outline"
              }, {
                title: "Fee",
                url: "/fee-payment",
                icon: "pricetag-outline"
              }, // {
              //   title: "eWallet",
              //   url: "/ewallet-dashboard",
              //   icon: "wallet"
              // },
              {
                title: "Contact Us",
                url: "/contact",
                icon: "call"
              }];
            }
          }
        }, {
          key: "prof",
          value: function prof() {
            this.menu.close();
            this.router.navigate(["/profile"]);
          }
        }, {
          key: "ionWillOpenw",
          value: function ionWillOpenw() {
            console.log("menu open");
            this.sideMenu();
          }
        }, {
          key: "Checkversion",
          value: function Checkversion() {
            var _this4 = this;

            var path = "get-mobile-app-version";
            var data = {
              app_id: "com.app.infantjesus",
              os_id: "0"
            };
            this.authService.postVersionDetails(path, data).subscribe(function (data) {
              var val = data.currentAppVersion;
              console.log(val, "versionData");
              console.log(val.version, "versionData"); //if (val[0].Version != "1.4.1") {

              if (val.version != "1.0.2") {
                console.log("version update must");

                _this4.gelService.presentAlertVersion(val);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__.Network
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
        }, {
          type: _services_general_service__WEBPACK_IMPORTED_MODULE_6__.GeneralService
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _proj_pop_pop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./proj/pop/pop.component */
      50885);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      75592);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular-calendar */
      13174);
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      83362);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _faculty_menuextra_menuextra_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./faculty/menuextra/menuextra.module */
      53104);
      /* harmony import */


      var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/firebase/ngx */
      41636);
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      85838);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/market/ngx */
      67972);
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-quill */
      67185);
      /* harmony import */


      var _faculty_menu_menu_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./faculty/menu/menu.page */
      82136);
      /* harmony import */


      var _faculty_exam_exam_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./faculty/exam/exam-routing.module */
      33782); // import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
      // import { SocialSharing } from "@ionic-native/social-sharing/ngx";
      // import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
      // import { FilePath } from '@ionic-native/file-path/ngx';
      // import { File } from "@ionic-native/file/ngx";
      // import { FileOpener } from '@ionic-native/file-opener/ngx';
      // import { FileChooser } from '@ionic-native/file-chooser/ngx';
      // import { Base64 } from '@ionic-native/base64/ngx';
      // import { Crop } from '@ionic-native/crop/ngx';
      //import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
      // import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
      // import { DataTablesModule } from "angular-datatables";


      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _proj_pop_pop_component__WEBPACK_IMPORTED_MODULE_4__.PopComponent, _faculty_menu_menu_page__WEBPACK_IMPORTED_MODULE_11__.MenuPage],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_17__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _faculty_menuextra_menuextra_module__WEBPACK_IMPORTED_MODULE_7__.MenuextraPageModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_20__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_20__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_21__.adapterFactory
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_23__.QuillModule, _faculty_exam_exam_routing_module__WEBPACK_IMPORTED_MODULE_12__.ExamPageRoutingModule // DataTablesModule
        //InAppBrowser
        ],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_9__.PreviewAnyFile, _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_8__.Firebase, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Network, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera, // DocumentViewer,
        {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy
        }, // SocialSharing,
        // BarcodeScanner,
        // Crop,
        // File,
        // FileOpener,
        // FilePath,
        // FileChooser,
        // Base64,
        // PDFGenerator,
        _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__.Market],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      })], _AppModule); //comment last

      /***/
    },

    /***/
    33782:
    /*!*****************************************************!*\
      !*** ./src/app/faculty/exam/exam-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExamPageRoutingModule": function ExamPageRoutingModule() {
          return (
            /* binding */
            _ExamPageRoutingModule
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


      var _exam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exam.page */
      38845);

      var routes = [{
        path: '',
        component: _exam_page__WEBPACK_IMPORTED_MODULE_0__.ExamPage,
        children: [{
          path: 'class-list-mark',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-0bef93"), __webpack_require__.e("src_app_faculty_class-list-mark_class-list-mark_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../../faculty/class-list-mark/class-list-mark.module */
            69828)).then(function (m) {
              return m.ClassListMarkPageModule;
            });
          }
        }, {
          path: 'mark-remarks',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_faculty_mark-remarks_mark-remarks_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../../faculty/mark-remarks/mark-remarks.module */
            8526)).then(function (m) {
              return m.MarkRemarksPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'class-list-mark',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/class-list-mark',
        pathMatch: 'full'
      }];

      var _ExamPageRoutingModule = /*#__PURE__*/_createClass(function ExamPageRoutingModule() {
        _classCallCheck(this, ExamPageRoutingModule);
      });

      _ExamPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ExamPageRoutingModule);
      /***/
    },

    /***/
    38845:
    /*!*******************************************!*\
      !*** ./src/app/faculty/exam/exam.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExamPage": function ExamPage() {
          return (
            /* binding */
            _ExamPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_exam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./exam.page.html */
      20773);
      /* harmony import */


      var _exam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./exam.page.scss */
      2182);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ExamPage = /*#__PURE__*/function () {
        function ExamPage(router, location) {
          _classCallCheck(this, ExamPage);

          this.router = router;
          this.location = location;
        }

        _createClass(ExamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "rout",
          value: function rout(val) {
            console.log(val, "val");
            this.router.navigate([val]);
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return ExamPage;
      }();

      _ExamPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location
        }];
      };

      _ExamPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-exam',
        template: _raw_loader_exam_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exam_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExamPage);
      /***/
    },

    /***/
    82136:
    /*!*******************************************!*\
      !*** ./src/app/faculty/menu/menu.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuPage": function MenuPage() {
          return (
            /* binding */
            _MenuPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menu.page.html */
      44725);
      /* harmony import */


      var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu.page.scss */
      24924);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MenuPage = /*#__PURE__*/function () {
        function MenuPage() {
          _classCallCheck(this, MenuPage);

          this.sideMenu();
        }

        _createClass(MenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sideMenu",
          value: function sideMenu() {
            // this.menu.enable(false);
            // this.menu.swipeGesture(false);
            console.log(localStorage.getItem('pas_faculty'));
            console.log(this.navigate, "asdf");

            if (localStorage.getItem('pas_faculty')) {
              this.navigate = [{
                title: "Dashboard",
                url: "/dashboard",
                icon: "home"
              }, {
                title: "Attendance",
                url: "/class-list",
                icon: "",
                src: "../assets/images/calendar.png"
              }, {
                title: "Assignment",
                url: "/assign-faculty",
                icon: "",
                src: "../assets/images/circular.png"
              }, {
                title: "Change Password",
                url: "/fac-password",
                icon: "",
                src: "../assets/images/profile.png"
              }];
            }

            if (localStorage.getItem('pas_tok')) {
              this.navigate = [{
                title: "Home",
                url: "/home",
                icon: "home"
              }, {
                title: "Profile",
                url: "/profile",
                icon: "school"
              }, {
                title: "Notification",
                url: "/noti",
                icon: "notifications-outline"
              }, {
                title: "Attendance",
                url: "/attendanc",
                icon: "calendar"
              }, {
                title: 'Fee',
                url: "/fee-payment",
                icon: 'pricetag-outline'
              }, // {
              //   title: "eWallet",
              //   url: "/ewallet-dashboard",
              //   icon: "wallet"
              // },
              {
                title: "Progress Report",
                url: "/marks-list",
                icon: "book-outline"
              }, {
                title: "Contact Us",
                url: "/contact",
                icon: "call"
              }];
            }
          }
        }]);

        return MenuPage;
      }();

      _MenuPage.ctorParameters = function () {
        return [];
      };

      _MenuPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenuPage);
      /***/
    },

    /***/
    60842:
    /*!***************************************************************!*\
      !*** ./src/app/faculty/menuextra/menuextra-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuextraPageRoutingModule": function MenuextraPageRoutingModule() {
          return (
            /* binding */
            _MenuextraPageRoutingModule
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


      var _menuextra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menuextra.page */
      41036);

      var routes = [{
        path: '',
        component: _menuextra_page__WEBPACK_IMPORTED_MODULE_0__.MenuextraPage
      }];

      var _MenuextraPageRoutingModule = /*#__PURE__*/_createClass(function MenuextraPageRoutingModule() {
        _classCallCheck(this, MenuextraPageRoutingModule);
      });

      _MenuextraPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MenuextraPageRoutingModule);
      /***/
    },

    /***/
    53104:
    /*!*******************************************************!*\
      !*** ./src/app/faculty/menuextra/menuextra.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuextraPageModule": function MenuextraPageModule() {
          return (
            /* binding */
            _MenuextraPageModule
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


      var _menuextra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menuextra-routing.module */
      60842);
      /* harmony import */


      var _menuextra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menuextra.page */
      41036);

      var _MenuextraPageModule = /*#__PURE__*/_createClass(function MenuextraPageModule() {
        _classCallCheck(this, MenuextraPageModule);
      });

      _MenuextraPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _menuextra_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuextraPageRoutingModule],
        declarations: [_menuextra_page__WEBPACK_IMPORTED_MODULE_1__.MenuextraPage]
      })], _MenuextraPageModule);
      /***/
    },

    /***/
    41036:
    /*!*****************************************************!*\
      !*** ./src/app/faculty/menuextra/menuextra.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuextraPage": function MenuextraPage() {
          return (
            /* binding */
            _MenuextraPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menuextra_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menuextra.page.html */
      35395);
      /* harmony import */


      var _menuextra_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menuextra.page.scss */
      43030);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);

      var _MenuextraPage = /*#__PURE__*/function () {
        function MenuextraPage(general) {
          _classCallCheck(this, MenuextraPage);

          this.general = general;
        }

        _createClass(MenuextraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            localStorage.removeItem("token");
            localStorage.setItem('value', JSON.stringify(1));
            this.general.router.navigateByUrl('opem');
            this.general.popoverController.dismiss();
          }
        }, {
          key: "institute",
          value: function institute() {
            this.general.instituteClose();
          }
        }, {
          key: "password",
          value: function password() {
            this.general.router.navigateByUrl('fac-password');
            this.general.popoverController.dismiss();
          }
        }]);

        return MenuextraPage;
      }();

      _MenuextraPage.ctorParameters = function () {
        return [{
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService
        }];
      };

      _MenuextraPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menuextra',
        template: _raw_loader_menuextra_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menuextra_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenuextraPage);
      /***/
    },

    /***/
    11475:
    /*!**********************************************!*\
      !*** ./src/app/proj/menupop/menupop.page.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenupopPage": function MenupopPage() {
          return (
            /* binding */
            _MenupopPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menupop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menupop.page.html */
      73693);
      /* harmony import */


      var _menupop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menupop.page.scss */
      38761);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);

      var _MenupopPage = /*#__PURE__*/function () {
        function MenupopPage(general) {
          _classCallCheck(this, MenupopPage);

          this.general = general;
        }

        _createClass(MenupopPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "student",
          value: function student() {
            console.log('sf');
            this.general.instituteClose();
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            localStorage.removeItem("token");
            localStorage.setItem('value', JSON.stringify(1));
            this.general.router.navigateByUrl('opem');
            this.general.popoverController.dismiss();
          }
        }, {
          key: "password",
          value: function password() {
            this.general.router.navigateByUrl('change-password');
            this.general.popoverController.dismiss();
          }
        }]);

        return MenupopPage;
      }();

      _MenupopPage.ctorParameters = function () {
        return [{
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService
        }];
      };

      _MenupopPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menupop',
        template: _raw_loader_menupop_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menupop_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenupopPage);
      /***/
    },

    /***/
    50885:
    /*!*******************************************!*\
      !*** ./src/app/proj/pop/pop.component.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopComponent": function PopComponent() {
          return (
            /* binding */
            _PopComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pop.component.html */
      5192);
      /* harmony import */


      var _pop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pop.component.scss */
      22530);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PopComponent = /*#__PURE__*/function () {
        function PopComponent() {
          _classCallCheck(this, PopComponent);
        }

        _createClass(PopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PopComponent;
      }();

      _PopComponent.ctorParameters = function () {
        return [];
      };

      _PopComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pop',
        template: _raw_loader_pop_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pop_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PopComponent);
      /***/
    },

    /***/
    37556:
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      74945);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AuthService = /*#__PURE__*/function () {
        function AuthService(http, router, alertController) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.alertController = alertController; // Demo
          // base_path = "https://dev.pacifyca.com/pacifyca-v2/school-demo/api/v1/parent/";
          // base_path_faculty = "https://dev.pacifyca.com/pacifyca-v2/school-demo/api/";
          // base_path = "https://dev.pacifyca.com/pacifyca-v2/prathima/api/v1/parent/";
          // base_path_faculty = "https://dev.pacifyca.com/pacifyca-v2/prathima/api/";
          // Live

          this.base_path = "https://infantjesusschool.pacifyca.com/api/v1/parent/";
          this.base_path_faculty = "https://infantjesusschool.pacifyca.com/api/"; // Http Options

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              "Content-Type": "application/json",
              Accept: "application/json"
            })
          };
        } // Create a new item post


        _createClass(AuthService, [{
          key: "createItem",
          value: function createItem(item) {
            return this.http.post(this.base_path, JSON.stringify(item), this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Create a  login post

        }, {
          key: "postt",
          value: function postt(item, page, fac_api) {
            var lnk = "";
            lnk = fac_api == undefined ? this.base_path : this.base_path_faculty;
            console.log(item, "postt", page, "linnk", lnk);
            return this.http.post(lnk + page, JSON.stringify(item), this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Create a  token post

        }, {
          key: "g_postt",
          value: function g_postt(item, page, token) {
            console.log(item, "postt", token); // this.httpOptions.headers.append("Authorization", "Bearer " + token);

            console.log(this.base_path + page);
            return this.http.post(this.base_path + page, JSON.stringify(item), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
              }).set("Authorization", "Bearer " + token)
            }); // .pipe(retry(2), catchError(this.handleError));
          }
        }, {
          key: "g_postt_fac",
          value: function g_postt_fac(item, page, token) {
            console.log(item, "g_postt_fac", token); // "institution-Id": '1',
            // this.httpOptions.headers.append("institution-Id", "Bearer " + token);

            var institute = localStorage.getItem("institute");

            if (!institute) {
              institute = "2";
            }

            return this.http.post(this.base_path_faculty + page, JSON.stringify(item), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Institution-Id": institute
              }).set("Authorization", "Bearer " + token)
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          }
        }, {
          key: "get_fac_Institute",
          value: function get_fac_Institute(page, token) {
            //this.httpOptions.headers.append("Authorization", "Bearer " + token);
            var institute = localStorage.getItem("institute");
            console.log(this.base_path_faculty + page);
            console.log(institute, "instituteinstitute");
            var f = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json" // "Institution-Id": institute,

              }).set("Authorization", "Bearer " + token)
            };
            return this.http.get(this.base_path_faculty + page, f).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          }
        }, {
          key: "get_fac_t",
          value: function get_fac_t(page, token) {
            //this.httpOptions.headers.append("Authorization", "Bearer " + token);
            var institute = localStorage.getItem("institute");

            if (!institute) {
              institute = "2";
            }

            console.log(institute, "instituteinstitute");
            var f = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Institution-Id": institute
              }).set("Authorization", "Bearer " + token)
            };
            console.log(this.base_path_faculty + page, f); // this.http.setDataSerializer('json');

            return this.http.get(this.base_path_faculty + page, f).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          }
        }, {
          key: "noti_scrol",
          value: function noti_scrol(page, token) {
            console.log("postt", token);
            this.httpOptions.headers.append("Authorization", "Bearer " + token);
            return this.http.get(page, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
              }).set("Authorization", "Bearer " + token)
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Create a  token PUT

        }, {
          key: "g_put",
          value: function g_put(item, page, token) {
            console.log(item, "postt", token);
            this.httpOptions.headers.append("Authorization", "Bearer " + token);
            return this.http.put(this.base_path + page, JSON.stringify(item), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
              }).set("Authorization", "Bearer " + token)
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Create a  token get

        }, {
          key: "g_get",
          value: function g_get(data, page, token) {
            console.log("postt g_get", token);
            this.httpOptions.headers.append("Authorization", "Bearer " + token);
            console.log(this.base_path + page);
            return this.http.get(this.base_path + page, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
              }).set("Authorization", "Bearer " + token)
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Get single <any> data by ID

        }, {
          key: "getItem",
          value: function getItem(id) {
            return this.http.get(this.base_path + "/" + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Get <any>s data

        }, {
          key: "getList",
          value: function getList(path) {
            return this.http.get(this.base_path_faculty + path).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Update item by id

        }, {
          key: "updateItem",
          value: function updateItem(id, item) {
            return this.http.put(this.base_path + "/" + id, JSON.stringify(item), this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Delete item by id

        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            return this.http["delete"](this.base_path + "/" + id, this.httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
          } // Handle API errors

        }, {
          key: "handleError",
          value: function handleError(error) {
            // console.error("An error occurred:", error.error.message);
            // if (error.status === 400) {
            //   console.log(401, "4011", "An error occurred");
            //   return;
            // }
            // if (error.status === 401 || error.status == 401) {
            //   //|| error.status == "500"
            //   //alert("Unauthorised User!! Login Again!!");
            //   localStorage.clear();
            //   // redirect to the login route
            //   // or show a modal
            // }
            // if (error.status === 500 || error.status == 500) {
            //   //|| error.status == "500"
            //   alert("Something went wrong!! Login Again!!");
            //   localStorage.clear();
            //   //this.navCtrl.setRoot("FacLogoutPage");
            //   // redirect to the login route
            //   // or show a modal
            // }
            // if (error.error instanceof ErrorEvent) {
            //   // A client-side or network error occurred. Handle it accordingly.
            //   console.error("An error occurred:", error.error.message, error.status);
            //   return throwError("error.error instanceof ErrorEvent");
            // } else
            if (error.status == 401) {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log([404, 401].indexOf(error.status) > -1, "error.status != 400 Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
              localStorage.clear(); // alert("Login again"); 
              // this.router.navigate(['/']); 

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error); //"Something bad happened; please try again later"
            } else if (error.status == 405 || error.status == 404) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error.error);
            } else if (error.status == 400) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error.error);
            } // return an observable with a user-facing error message
            // return throwError("Something bad happened; please try again later.");

          }
        }, {
          key: "loginAgain",
          value: function loginAgain() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Session Expired',
                      // subHeader: 'Subtitle',
                      message: 'Login Again',
                      buttons: [{
                        text: 'Okay',
                        handler: function handler() {
                          _this5.router.navigate(['/login']);

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getData",
          value: function getData(type) {
            var factoken = localStorage.getItem("pas_faculty");
            console.log(factoken, 'Token check ');
            var herders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
              "Content-Type": "application/json",
              "Accept": "application/json"
            }).set("Authorization", "Bearer " + factoken); // console.log(herders);

            if (factoken != null) {
              var token_header = "Bearer " + factoken;
              console.log("type ", type); // console.log("key Value",keyval);
              //  let headers = new Headers();
              // headers.append("API-KEY", this.api_key);
              //  headers.append("Accept", "application/json");
              //  headers.append("Content-Type", "application/json"); // return this.http.get(apiUrl+ 'getState');
              //  headers.append("Authorization", token_header);

              var f = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }).set("Authorization", "Bearer " + factoken)
              };
              console.log(f);
              return this.http.get(this.base_path_faculty + type, f);
            }
          }
        }, {
          key: "postVersionDetails",
          value: function postVersionDetails(urlExtension, item) {
            var api_url_extn = this.base_path + urlExtension;
            var headers = new Headers();
            return this.http.post(api_url_extn, JSON.stringify(item), {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
              })
            });
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: "root"
      })], _AuthService);
      /***/
    },

    /***/
    21864:
    /*!*********************************************!*\
      !*** ./src/app/services/general.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeneralService": function GeneralService() {
          return (
            /* binding */
            _GeneralService
          );
        },

        /* harmony export */
        "MustMatch": function MustMatch() {
          return (
            /* binding */
            _MustMatch
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _faculty_menuextra_menuextra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../faculty/menuextra/menuextra.page */
      41036);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      37556);
      /* harmony import */


      var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/firebase/ngx */
      41636);
      /* harmony import */


      var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/market/ngx */
      67972);
      /* harmony import */


      var _proj_menupop_menupop_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../proj/menupop/menupop.page */
      11475);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _GeneralService = /*#__PURE__*/function () {
        function GeneralService(authService, loadingController, toastCtrl, firebaseX, alertController, router, popoverController, market, platform) {
          _classCallCheck(this, GeneralService);

          this.authService = authService;
          this.loadingController = loadingController;
          this.toastCtrl = toastCtrl;
          this.firebaseX = firebaseX;
          this.alertController = alertController;
          this.router = router;
          this.popoverController = popoverController;
          this.market = market;
          this.platform = platform;
          this.instituteHit = false;
          this.isLoading = false;
          this._listners = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(GeneralService, [{
          key: "instituteClose",
          value: function instituteClose() {
            this.popoverController.dismiss({
              institute: "openInstitute"
            });
          }
        }, {
          key: "listen",
          value: function listen() {
            return this._listners.asObservable();
          }
        }, {
          key: "filter",
          value: function filter(filterBy) {
            this._listners.next(filterBy);
          }
        }, {
          key: "presentPopover",
          value: function presentPopover() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this6 = this;

              var popover, _yield$popover$onDidD, role;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _faculty_menuextra_menuextra_page__WEBPACK_IMPORTED_MODULE_0__.MenuextraPage,
                      animated: false,
                      translucent: false,
                      cssClass: "extraMenu"
                    });

                  case 2:
                    popover = _context3.sent;
                    popover.onDidDismiss().then(function (result) {
                      console.log(result['data']); //  this.insti = result['data'];

                      if (result['data']) {
                        _this6.instituteHit = true;
                      }
                    });
                    popover.style.cssText = ' top: 50px !important;';
                    _context3.next = 7;
                    return popover.present();

                  case 7:
                    _context3.next = 9;
                    return popover.onDidDismiss();

                  case 9:
                    _yield$popover$onDidD = _context3.sent;
                    role = _yield$popover$onDidD.role;
                    console.log('onDidDismiss resolved with role', role);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentPopover1",
          value: function presentPopover1() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this7 = this;

              var popover, _yield$popover$onDidD2, role;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: _proj_menupop_menupop_page__WEBPACK_IMPORTED_MODULE_4__.MenupopPage,
                      animated: false,
                      translucent: false,
                      cssClass: "extraMenu"
                    });

                  case 2:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (result) {
                      console.log(result['data']); //  this.insti = result['data'];

                      if (result['data']) {
                        _this7.instituteHit = true;
                      }
                    });
                    popover.style.cssText = ' top: 50px !important;';
                    _context4.next = 7;
                    return popover.present();

                  case 7:
                    _context4.next = 9;
                    return popover.onDidDismiss();

                  case 9:
                    _yield$popover$onDidD2 = _context4.sent;
                    role = _yield$popover$onDidD2.role;
                    console.log('onDidDismiss resolved with role', role);

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "loginAgain",
          value: function loginAgain() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this8 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Session Expired',
                      // subHeader: 'Subtitle',
                      message: 'Login Again',
                      buttons: [{
                        text: 'Okay',
                        handler: function handler() {
                          _this8.router.navigate(['/opem']);

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "firebase_token",
          value: function firebase_token(data) {
            var _this9 = this;

            this.firebaseX.getToken().then(function (token) {
              return console.log("The token is ".concat(token));
            }) // save the token server-side and use it to push notifications to this device
            ["catch"](function (error) {
              return console.error("Error getting token", error);
            });
            this.firebaseX.onNotificationOpen().subscribe(function (data) {
              return console.log("User opened a notification ".concat(data));
            });
            setTimeout(function () {
              _this9.refresh_fire();
            }, 1500);
          }
        }, {
          key: "refresh_fire",
          value: function refresh_fire() {
            this.firebaseX.onTokenRefresh().subscribe(function (token) {
              return console.log("Got a new token ".concat(token));
            });
          }
        }, {
          key: "loading",
          value: function loading(cred) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var loadinga;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      message: cred // translucent: true
                      //spinner: 'crescent'

                    });

                  case 2:
                    loadinga = _context6.sent;
                    return _context6.abrupt("return", loadinga);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "gen_loading",
          value: function gen_loading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var loading, _yield$loading$onDidD, role, data;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.create({
                      message: "Loading ...",
                      duration: 2000
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                    _context7.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context7.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log("Loading dismissed!");

                  case 11:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1000,
                      position: "bottom"
                    });

                  case 2:
                    toast = _context8.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "auth_logout",
          value: function auth_logout() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this10 = this;

              var token, load;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    token = localStorage.getItem("pas_faculty");
                    _context9.next = 3;
                    return this.loading("Loading ...");

                  case 3:
                    load = _context9.sent;
                    load.present();
                    this.authService.g_postt_fac('{}', "logout", token).subscribe(function (data) {
                      console.log(data);
                      load.dismiss();
                      localStorage.clear();
                      localStorage.removeItem("token");
                      localStorage.setItem('value', JSON.stringify(1));

                      _this10.router.navigateByUrl('opem');
                    }, function (err) {
                      _this10.data = true;

                      if (err.status === 401 || err.status === 422) {
                        if (err.statusText == 'Unauthorized') {
                          localStorage.clear();
                          localStorage.removeItem("token");
                          alert("session expired!!");

                          _this10.router.navigateByUrl("opem");
                        }
                      }

                      if (err.status === 200) {
                        alert("Server Connection Error. Please Login Again.");
                        localStorage.clear();
                      }
                    });

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this11 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertController.create({
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

                          _this11.auth_logout();

                          _this11.popoverController.dismiss();
                        }
                      }]
                    });

                  case 2:
                    alert = _context10.sent;
                    _context10.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.presentAlertConfirm();
          } //---- new ----//

        }, {
          key: "presentAlert_g",
          value: function presentAlert_g(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      // header:data,
                      // /subHeader: data,
                      message: data,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "loadingPresent",
          value: function loadingPresent() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var _this12 = this;

              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    this.isLoading = true;
                    _context12.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait ...',
                      spinner: 'circles',
                      cssClass: 'custom-loading'
                    }).then(function (a) {
                      return a.present().then(function () {
                        console.log('loading presented');

                        if (!_this12.isLoading) {
                          a.dismiss().then(function () {
                            console.log('abort laoding');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context12.abrupt("return", _context12.sent);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "loadingDismiss",
          value: function loadingDismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    this.isLoading = false; // return await this.loadingController.dismiss(null);

                    if (!this.isLoading) {
                      _context13.next = 6;
                      break;
                    }

                    this.isLoading = false;
                    _context13.next = 5;
                    return this.loadingController.dismiss();

                  case 5:
                    return _context13.abrupt("return", _context13.sent);

                  case 6:
                    _context13.next = 8;
                    return this.loadingController.dismiss();

                  case 8:
                    return _context13.abrupt("return", _context13.sent);

                  case 9:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, this);
            }));
          } //-----new End ----//

        }, {
          key: "presentAlertVersion",
          value: function presentAlertVersion(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var _this13 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.alertController.create({
                      header: 'New Updates',
                      message: 'The software need to be updated',
                      buttons: [{
                        text: 'Update',
                        handler: function handler() {
                          console.log('Confirm Ok');

                          if (_this13.platform.is("android")) {
                            console.log(val.app_id);

                            _this13.market.open(val.app_id);
                          } else {
                            _this13.market.open("https://apps.apple.com");
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context14.sent;
                    _context14.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, this);
            }));
          }
        }]);

        return GeneralService;
      }();

      _GeneralService.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_2__.Firebase
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
        }, {
          type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__.Market
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }];
      };

      _GeneralService = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: "root"
      })], _GeneralService); // custom validator to check that two fields match

      function _MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    62690:
    /*!*******************************!*\
      !*** ./src/auth/aaa.guard.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AaaGuard": function AaaGuard() {
          return (
            /* binding */
            _AaaGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AaaGuard = /*#__PURE__*/function () {
        function AaaGuard(_router, menu, alertController) {
          _classCallCheck(this, AaaGuard);

          this._router = _router;
          this.menu = menu;
          this.alertController = alertController;
          this.userData = null;
          this.faculty = null;
        }

        _createClass(AaaGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            this.userData = localStorage.getItem("pas_tok");
            this.pas_faculty = localStorage.getItem("pas_faculty");
            console.log(this.userData, "userData");
            console.log(this.pas_faculty, 'Faculty');

            if (this.userData || this.pas_faculty) {
              console.log("a");
              return true;
            } else {
              // this.loginAgain();
              console.log('logout');

              this._router.navigate(["/login"]);

              return false;
            }
          }
        }, {
          key: "loginAgain",
          value: function loginAgain() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var _this14 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.alertController.create({
                      header: 'Session Expired',
                      // subHeader: 'Subtitle',
                      message: 'Login Again',
                      buttons: [{
                        text: 'Okay',
                        handler: function handler() {
                          _this14._router.navigate(['/login']);

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context15.sent;
                    _context15.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, this);
            }));
          }
        }]);

        return AaaGuard;
      }();

      _AaaGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _AaaGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
      })], _AaaGuard);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list {\n  background: var(--ion-color-menu);\n}\n\nion-toolbar {\n  background: var(--ion-color-menu-shade);\n}\n\nion-thumbnail {\n  border-radius: 50%;\n}\n\nion-label {\n  margin-left: 20px;\n}\n\nion-item {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1Q0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZW51KTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lbnUtc2hhZGUpO1xyXG59XHJcbmlvbi10aHVtYm5haWwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    2182:
    /*!*********************************************!*\
      !*** ./src/app/faculty/exam/exam.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #620b23;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.card1 {\n  background: linear-gradient(to bottom, #cc6f61 0%, #54231c 100%);\n}\n\n.img1 {\n  width: 20px;\n  margin: 0px 35%;\n  margin-top: 20px;\n}\n\n.label {\n  margin-top: 5px;\n  color: #ffff;\n}\n\n.text1 {\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 10px;\n  color: white;\n}\n\n.sms_c {\n  position: absolute;\n  top: 2px;\n  right: 45px;\n  color: #ae5c50;\n  background: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 2;\n  font-size: 10px;\n}\n\nion-segment {\n  color: #fff;\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked {\n  background: #bd5757;\n  color: #fff;\n  text-transform: unset;\n}\n\nion-segment .segment-button-checked:nth-child(1) {\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked:nth-child(2) {\n  border-radius: 0;\n}\n\n.picker_input {\n  border: 1px solid #252525 !important;\n  border-radius: 40px;\n  margin-top: 20px;\n}\n\n.picker_input ion-input {\n  border: 1px solid transparent;\n  padding: 0;\n}\n\n.picker_input ion-icon {\n  margin: 5px !important;\n}\n\n.topicons_design {\n  margin-top: 20px;\n  color: #bdbdbd;\n}\n\n.topicons_design ion-icon {\n  font-size: 35px;\n  border: 1px solid #252525;\n  border-radius: 50%;\n  padding: 10px;\n}\n\n.topicons_design ion-label {\n  color: #252525;\n}\n\n.icons_design .active {\n  color: var(--ion-color-primary);\n  border: none !important;\n}\n\n.icons_design ion-col {\n  margin-top: 20px;\n  color: #bdbdbd;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.icons_design ion-col ion-icon {\n  font-size: 35px;\n}\n\n.prof {\n  font-size: 22px;\n  margin-top: 4px;\n}\n\n.seg {\n  background: #a93d3d;\n  margin-top: -4px;\n  height: 69px;\n  border-radius: 0;\n}\n\n.seg-btn {\n  width: 50%;\n}\n\n.line {\n  border-right: 1px solid #8b7777;\n}\n\n.line1 {\n  border-top: 1px solid #8b7777;\n}\n\nion-tab-bar {\n  bottom: 20px;\n  position: relative;\n  border-radius: 16px;\n  width: 92%;\n  margin: 0 auto;\n}\n\nion-tab-button {\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-primary);\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MscUJBQUE7QUFBRDs7QUFHQTtFQUNDLHVCQUFBO0VBQ0Esc0JBQUE7QUFBRDs7QUFFQTtFQUVDLGdFQUFBO0FBQUQ7O0FBRUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxlQUFBO0VBRUEsWUFBQTtBQUNEOztBQUNBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVEOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdEOztBQURBO0VBRUMsV0FBQTtFQUNBLGdCQUFBO0FBR0Q7O0FBRkM7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFPQSxxQkFBQTtBQUZIOztBQUpHO0VBQ0EsZ0JBQUE7QUFNSDs7QUFKRztFQUNBLGdCQUFBO0FBTUg7O0FBQUE7RUFDQyxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRDs7QUFEQztFQUNDLDZCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFDO0VBQ0Msc0JBQUE7QUFFRjs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNDO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0M7RUFDQyxjQUFBO0FBQ0Y7O0FBR0E7RUFDQywrQkFBQTtFQUNBLHVCQUFBO0FBQUQ7O0FBSUM7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUdFO0VBQ0MsZUFBQTtBQURIOztBQUtBO0VBQ0MsZUFBQTtFQUNBLGVBQUE7QUFGRDs7QUFJQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERDs7QUFJQTtFQUNDLFVBQUE7QUFERDs7QUFJQTtFQUNDLCtCQUFBO0FBREQ7O0FBR0E7RUFDQyw2QkFBQTtBQUFEOztBQUlBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUREOztBQUlRO0VBQ1AsZ0NBQUE7RUFDQSwwQ0FBQTtBQUREOztBQUdDO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURIOztBQUlDO0VBQ0UsMENBQUE7QUFGSCIsImZpbGUiOiJleGFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQgIHtcblx0LS1iYWNrZ3JvdW5kOiAjNjIwYjIzO1xufVxuXG5pb24tY2FyZCB7XG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQxIHtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNzg0NzAgMCUsICNhOTJjMTYgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjYzZmNjEgMCUsICM1NDIzMWMgMTAwJSk7XG59XG4uaW1nMSB7XG5cdHdpZHRoOiAyMHB4O1xuXHRtYXJnaW46IDBweCAzNSU7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGFiZWwge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdC8vIGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNmZmZmO1xufVxuLnRleHQxIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRjb2xvcjogd2hpdGU7XG59XG4uc21zX2Mge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMnB4O1xuXHRyaWdodDogNDVweDtcblx0Y29sb3I6ICNhZTVjNTA7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAyO1xuXHRmb250LXNpemU6IDEwcHg7XG59XG5pb24tc2VnbWVudCB7XG5cdC8vIGJvcmRlcjogMXB4IHNvbGlkICNiZDU3NTc7XG5cdGNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmQ1NzU3O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHQmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdH1cblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1bnNldDtcblx0fVxufVxuXG4ucGlja2VyX2lucHV0IHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzI1MjUyNSAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdGlvbi1pbnB1dCB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdGlvbi1pY29uIHtcblx0XHRtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi50b3BpY29uc19kZXNpZ24ge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRjb2xvcjogI2JkYmRiZDtcblxuXHRpb24taWNvbiB7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdH1cblx0aW9uLWxhYmVsIHtcblx0XHRjb2xvcjogIzI1MjUyNTtcblx0fVxufVxuXG4uaWNvbnNfZGVzaWduIC5hY3RpdmUge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmljb25zX2Rlc2lnbiB7XG5cdGlvbi1jb2wge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0Y29sb3I6ICNiZGJkYmQ7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRtYXJnaW46IDEwcHg7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdH1cblx0fVxufVxuLnByb2Yge1xuXHRmb250LXNpemU6IDIycHg7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbi5zZWcge1xuXHRiYWNrZ3JvdW5kOiAjYTkzZDNkO1xuXHRtYXJnaW4tdG9wOiAtNHB4O1xuXHRoZWlnaHQ6IDY5cHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zZWctYnRuIHtcblx0d2lkdGg6IDUwJTtcblxufVxuLmxpbmUge1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOGI3Nzc3O1xufVxuLmxpbmUxIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM4Yjc3Nzc7XG59XG5cblxuaW9uLXRhYi1iYXIge1xuXHRib3R0b206IDIwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0d2lkdGg6IDkyJTtcblx0bWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi10YWItYnV0dG9uIHtcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cdC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgXG5cdCY6OmJlZm9yZSB7XG5cdCAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdCAgZGlzcGxheTogYmxvY2s7XG5cdCAgY29udGVudDogXCJcIjtcblx0ICBtYXJnaW46IDAgYXV0bztcblx0ICB3aWR0aDogMjBweDtcblx0ICBoZWlnaHQ6IDJweDtcblx0fVxuICAgICAgICBcblx0Ji50YWItc2VsZWN0ZWQ6OmJlZm9yZSB7XG5cdCAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHR9XG59Il19 */";
      /***/
    },

    /***/
    24924:
    /*!*********************************************!*\
      !*** ./src/app/faculty/menu/menu.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    43030:
    /*!*******************************************************!*\
      !*** ./src/app/faculty/menuextra/menuextra.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51ZXh0cmEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    38761:
    /*!************************************************!*\
      !*** ./src/app/proj/menupop/menupop.page.scss ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51cG9wLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    22530:
    /*!*********************************************!*\
      !*** ./src/app/proj/pop/pop.component.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3AuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-menu side=\"start\" color=\"menu\" (ionWillOpen)=\"ionWillOpenw()\" menuId=\"content1\" contentId=\"content1\">\n        <ion-header color=\"menu\">\n            <ion-toolbar color=\"menu\" style=\"padding-left: 20px\">\n                <h3>Menu</h3>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content color=\"menu\">\n            <ion-list *ngFor=\"let pages of navigate\" color=\"menu\">\n                <ion-menu-toggle auto-hide=\"true\" menuClose>\n                    <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[pages.url]\" color=\"menu\">\n                        <!-- //  lines=\"none\" -->\n                        <ion-icon *ngIf=\"pages.icon\" [name]=\"pages.icon\"></ion-icon>\n                        <img *ngIf=\"!pages.icon\" [src]=\"pages.src\" style=\"width: 8%\" />\n                        <ion-label> {{ pages.title }}</ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n            </ion-list>\n\n            <ion-item color=\"menu\" (click)=\"logot()\">\n                <!-- //  lines=\"none\" -->\n                <ion-icon name=\"log-out\"></ion-icon>\n                <ion-label> Logout</ion-label>\n            </ion-item>\n        </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>";
      /***/
    },

    /***/
    20773:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/exam/exam.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- <ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title >Exam </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n<ion-content>\n  <!-- <img src=\"assets/images/banner_2.png\" style=\"width: 100%;\n  height: 202px;\" alt=\"\" />\n  <ion-segment class=\"seg\" value=\"profile\">\n    <ion-segment-button value=\"profile\" class=\"seg-btn\" (click)=\"rout('/class-list-mark')\" >\n      <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n      <ion-label class=\"label\">Mark Entry</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"notification\" (click)=\"rout('/mark-remarks')\">\n      <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n      <ion-label class=\"label\">Remarks For Mark Card</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n\n  <ion-tabs>\n    \n\n    <ion-tab-bar selectedTab=\"class-list-mark\" slot=\"bottom\">\n      <ion-tab-button tab=\"class-list-mark\">\n        <ion-icon class=\"text-icon\" name=\"book-outline\"></ion-icon>\n        \n        <ion-label class=\"text-icon\">Marks Entry</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"mark-remarks\">\n        <ion-icon class=\"text-icon\" name=\"create-outline\"></ion-icon>\n        <ion-label class=\"text-icon\">Remarks For Mark Card</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    44725:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/menu/menu.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" color=\"menu\"  menuId=\"content1\" contentId=\"content1\">\n  <ion-header color=\"menu\">\n    <ion-toolbar color=\"menu\" style=\"padding-left: 20px;\"\n      ><h3>Menu</h3>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content color=\"menu\">\n    <ion-list *ngFor=\"let pages of navigate\" color=\"menu\">\n      <ion-menu-toggle auto-hide=\"true\" menuClose>\n        <ion-item\n          [routerDirection]=\"'root'\"\n          [routerLink]=\"[pages.url]\"\n          color=\"menu\"\n        >\n          <!-- //  lines=\"none\" -->\n          <ion-icon *ngIf=\"pages.icon\" [name]=\"pages.icon\"></ion-icon>\n          <img *ngIf=\"!pages.icon\" [src]=\"pages.src\" style=\"width: 8%;\">\n          <ion-label> {{ pages.title }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n\n    <!-- <ion-item color=\"menu\" (click)=\"logot()\"> -->\n      <!-- //  lines=\"none\" -->\n    <ion-item color=\"menu\">\n      <ion-icon name=\"log-out\"></ion-icon>\n      <ion-label> Logout</ion-label>\n    </ion-item>\n  </ion-content>\n</ion-menu>";
      /***/
    },

    /***/
    35395:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/menuextra/menuextra.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"position: relative;top: 0;right: 0;\">\n  <ion-list>\n    <ion-item (click)=\"institute()\">\n      <ion-label>Institute</ion-label>\n    </ion-item>\n    <ion-item (click)=\"password()\">\n      <ion-label>Change Password</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-label>Sign out </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    73693:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/menupop/menupop.page.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"position: relative;top: 0;right: 0;\">\n  <ion-list>\n    <ion-item (click)=\"student()\">\n      <ion-label>Student</ion-label>\n    </ion-item>\n    <ion-item (click)=\"password()\">\n      <ion-label>Change Password</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-label>Sign out </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    5192:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/pop/pop.component.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <p>\n  pop works!\n</p> -->\n\n<ion-content style=\"float:left\">\n  <ul>\n    <li>asdfasd</li>\n    <li>asdfasd</li>\n    <li>asdfasd</li>\n    <li>asdfasd</li>\n    <li>asdfasd</li>\n  </ul></ion-content\n>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map