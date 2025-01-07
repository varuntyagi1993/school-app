(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_attendance-statement_attendance-statement_module_ts"], {
    /***/
    43176:
    /*!*************************************************************************************!*\
      !*** ./src/app/faculty/attendance-statement/attendance-statement-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendanceStatementPageRoutingModule": function AttendanceStatementPageRoutingModule() {
          return (
            /* binding */
            _AttendanceStatementPageRoutingModule
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


      var _attendance_statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendance-statement.page */
      25721);

      var routes = [{
        path: '',
        component: _attendance_statement_page__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatementPage
      }];

      var _AttendanceStatementPageRoutingModule = /*#__PURE__*/_createClass(function AttendanceStatementPageRoutingModule() {
        _classCallCheck(this, AttendanceStatementPageRoutingModule);
      });

      _AttendanceStatementPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AttendanceStatementPageRoutingModule);
      /***/
    },

    /***/
    10439:
    /*!*****************************************************************************!*\
      !*** ./src/app/faculty/attendance-statement/attendance-statement.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendanceStatementPageModule": function AttendanceStatementPageModule() {
          return (
            /* binding */
            _AttendanceStatementPageModule
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


      var _attendance_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendance-statement-routing.module */
      43176);
      /* harmony import */


      var _attendance_statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendance-statement.page */
      25721);

      var _AttendanceStatementPageModule = /*#__PURE__*/_createClass(function AttendanceStatementPageModule() {
        _classCallCheck(this, AttendanceStatementPageModule);
      });

      _AttendanceStatementPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _attendance_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatementPageRoutingModule],
        declarations: [_attendance_statement_page__WEBPACK_IMPORTED_MODULE_1__.AttendanceStatementPage]
      })], _AttendanceStatementPageModule);
      /***/
    },

    /***/
    25721:
    /*!***************************************************************************!*\
      !*** ./src/app/faculty/attendance-statement/attendance-statement.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendanceStatementPage": function AttendanceStatementPage() {
          return (
            /* binding */
            _AttendanceStatementPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_attendance_statement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./attendance-statement.page.html */
      66241);
      /* harmony import */


      var _attendance_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendance-statement.page.scss */
      20280);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);

      var _AttendanceStatementPage = /*#__PURE__*/function () {
        function AttendanceStatementPage(router, authService, alert, general) {
          _classCallCheck(this, AttendanceStatementPage);

          this.router = router;
          this.authService = authService;
          this.alert = alert;
          this.general = general;
          this.cout = 0;
          this.fillType = "outline";
          this.showList = true;
          this.btnText = "Show Shortage List";
          this.shortage = "Show Full List";
          this.showShortage = "SHORTAGE";
        }

        _createClass(AttendanceStatementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.token = localStorage.getItem("pas_faculty");
            var obj = JSON.parse(localStorage.getItem("sheet"));
            this.date = JSON.parse(localStorage.getItem("date"));
            this.statmentObj = obj;
            this.displayAttndSheet();
          }
        }, {
          key: "displayAttndSheet",
          value: function displayAttndSheet() {
            var _this = this;

            moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
            console.log(this.date);
            var page = "teaching-staff/class-guide-attendance/attendance-statement?institution_id=".concat(this.statmentObj.institution_id, "&year_id=").concat(this.statmentObj.year_id, "&academic_year_id=").concat(this.statmentObj.academic_year_id, "&course_id=").concat(this.statmentObj.course_id, "&batch_id=").concat(this.statmentObj.batch_id, "&date=").concat(this.date, "&attendanceStatementType=ALL&showOnlyActiveStudents=true");
            this.general.loadingPresent();
            this.authService.get_fac_t(page, this.token).subscribe(function (data) {
              _this.viewStatment = data;

              _this.general.loadingDismiss();
            }, function (err) {
              if (err.status === 401 || err.status === 422) {
                localStorage.clear();

                _this.alertMeassage('Session expierd');

                _this.router.navigateByUrl('/login');
              }

              if (err.status === 200) {
                _this.alertMeassage("Server Connection Error. Please Login Again.");

                localStorage.clear();
              }

              _this.general.loadingDismiss();
            });
          }
        }, {
          key: "showlist",
          value: function showlist() {
            var _this2 = this;

            this.cout = this.cout + 1;

            if (this.cout % 2 == 0) {
              this.showList = true;
              this.fillType = "outline";
            } else {
              this.showList = false;
              this.fillType = "solid";
            }

            this.cout % 2 == 0 ? this.btnText = "Show Shortage List" : this.btnText = "Show complete List";
            var status;
            this.cout % 2 == 0 ? status = "ALL" : status = "SHORTAGE";
            var page = "teaching-staff/class-guide-attendance/attendance-statement?institution_id=".concat(this.statmentObj.institution_id, "&year_id=").concat(this.statmentObj.year_id, "&academic_year_id=").concat(this.statmentObj.academic_year_id, "&course_id=").concat(this.statmentObj.course_id, "&batch_id=").concat(this.statmentObj.batch_id, "&date=").concat(this.date, "&attendanceStatementType=").concat(status, "&showOnlyActiveStudents=true");
            this.general.loadingPresent();
            this.authService.get_fac_t(page, this.token).subscribe(function (data) {
              _this2.displyShortage = data;

              _this2.general.loadingDismiss();
            }, function (err) {
              if (err.status === 401 || err.status === 422) {
                localStorage.clear();

                _this2.alertMeassage('Session expierd');

                _this2.router.navigateByUrl('/login');
              }

              if (err.status === 200) {
                _this2.alertMeassage("Server Connection Error. Please Login Again.");

                localStorage.clear();
              }

              _this2.general.loadingDismiss();
            });
          } //Alert Message

        }, {
          key: "alertMeassage",
          value: function alertMeassage(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alert.create({
                      header: 'Alert Message!',
                      message: data,
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return AttendanceStatementPage;
      }();

      _AttendanceStatementPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService
        }];
      };

      _AttendanceStatementPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-attendance-statement',
        template: _raw_loader_attendance_statement_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attendance_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AttendanceStatementPage);
      /***/
    },

    /***/
    20280:
    /*!*****************************************************************************!*\
      !*** ./src/app/faculty/attendance-statement/attendance-statement.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid-bordered ion-row {\n  border-style: solid;\n  text-align: center;\n  font-style: bold;\n  font-weight: bold;\n  border-width: 1px 0px 1px 0px;\n  border-color: #5f5757;\n  line-height: 32px;\n}\n.grid-bordered ion-col {\n  border-style: solid;\n  border-radius: 2px;\n  border-width: 0px 1px 0px 1px;\n  border-color: #ccc6c6;\n}\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 250%;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n.thumnails .cat {\n  color: red;\n  font-size: 12px;\n}\n.thumnails .rat {\n  color: #1a1b1b;\n}\n.thumnails .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n.thumnails .white_space {\n  white-space: normal;\n}\nion-col.md.hydrated {\n  font-size: 12px !important;\n}\n.attendence-header {\n  color: #3880ff;\n  font-size: 15px;\n  padding-top: 5px;\n}\nion-title.md.title-md.hydrated {\n  font-size: 17px;\n  padding-top: 10px;\n}\n.badge {\n  margin-top: 10px;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2Utc3RhdGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBSE47QUFNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBRk47QUFHTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUlJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFGTjtBQUlJO0VBQ0UsY0FBQTtBQUZOO0FBSUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBRk47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFPRTtFQUNFLDBCQUFBO0FBSko7QUFNQTtFQUFtQixjQUFBO0VBQWMsZUFBQTtFQUFlLGdCQUFBO0FBQWhEO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGIiwiZmlsZSI6ImF0dGVuZGFuY2Utc3RhdGVtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWJvcmRlcmVke1xuICAgIGlvbi1yb3d7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC8vICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMXB4IDBweDtcbiAgICAgIGJvcmRlci1jb2xvcjogIzVmNTc1NztcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NjYzZjNjtcbiAgICB9XG4gIH1cbi50aHVtbmFpbHN7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAubGlzdC10aHVtYm5haWx7XG4gICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAuaW1nLXRodW1ie1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYigyMTEsIDEyLCAxMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB3aWR0aDogMjUwJTsgXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOjAgMnB4IDAgMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2F0e1xuICAgICAgY29sb3I6cmVkO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAucmF0e1xuICAgICAgY29sb3I6cmdiKDI2LCAyNywgMjcpO1xuICAgIH1cbiAgICAucm93LXRleHR7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC53aGl0ZV9zcGFjZXtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gIH1cblxuICBpb24tY29sLm1kLmh5ZHJhdGVke1xuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG59XG4uYXR0ZW5kZW5jZS1oZWFkZXJ7Y29sb3I6IzM4ODBmZjtmb250LXNpemU6MTVweDtwYWRkaW5nLXRvcDo1cHh9XG5pb24tdGl0bGUubWQudGl0bGUtbWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmJhZGdle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn0iXX0= */";
      /***/
    },

    /***/
    66241:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/attendance-statement/attendance-statement.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"attendance\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Attendance Statement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"thumnails\">\n    <div class=\"list-thumbnail\">\n      <div class=\"img-thumb\">\n        <ion-grid *ngIf=\"showList\"  text-center class=\"grid-bordered\">\n          <ion-row class=\"row-text\">\n            <ion-col size=\"1.5\">\n              Roll No\n            </ion-col>\n            <ion-col size=\"3.5\">\n              Student Name\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Conducted\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Attended\n            </ion-col>\n            <!-- <ion-col size=\"1\">\n              Exempt\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col size=\"0.9\">\n              Excused\n            </ion-col>\n            <ion-col size=\"0.8\">\n              Allowed\n            </ion-col> -->\n           \n            <ion-col size=\"0.7\">\n              Absent\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col  >\n              Absent Dates\n            </ion-col>\n          </ion-row>\n          <ion-virtual-scroll  [items]=\"viewStatment\" approxItemHeight=\"20px\" >\n            <ion-row class=\"row-text\" *virtualItem=\"let s;let i=index\" [ngClass]=\"s.shortage =='Y'?'cat':'rat'\"  >\n              <ion-col size=\"1.5\" > \n                {{s.roll_no}}\n              </ion-col>\n              <ion-col size=\"3.5\" style=\"text-align: left;\">\n                {{s.student_name}}\n              </ion-col> \n              <ion-col size=\"0.7\">\n                {{s.conducted}}\n              </ion-col>\n              <ion-col size=\"0.7\">\n                {{s.attended}}\n              </ion-col>\n              <!-- <ion-col size=\"1\">\n                {{s.exempt}}\n              </ion-col>\n              <ion-col size=\"0.7\">\n                {{s.percetage}}\n              </ion-col>\n              <ion-col size=\"0.9\">\n                {{s.excused}}\n              </ion-col>\n              <ion-col size=\"0.8\">      \n                {{s.allowed}}\n              </ion-col> -->\n             \n              <ion-col size=\"0.7\">\n                {{s.absent}}\n              </ion-col>\n              <ion-col size=\"0.7\">\n                {{s.final_percentage}}\n              </ion-col>\n              <ion-col class=\"white_space\" >\n                {{s.absent_dates}}\n              </ion-col>\n            </ion-row>\n          </ion-virtual-scroll>\n          <ion-row *ngIf=\"viewStatment?.length == 0\">\n            <ion-col size=\"12\">\n              No Data to Display\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid *ngIf=\"!showList\"  text-center class=\"grid-bordered\">\n          <ion-row class=\"row-text\">\n            <ion-col size=\"1.5\">\n              Roll No\n            </ion-col>\n            <ion-col size=\"3.5\">\n              Student Name\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Conducted\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Attended\n            </ion-col>\n            <!-- <ion-col size=\"1\">\n              Exempt\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col size=\"0.9\">\n              Excused\n            </ion-col>\n            <ion-col size=\"0.8\">\n              Allowed\n            </ion-col> -->\n            <ion-col size=\"0.7\">\n              Absent\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col>\n              Absent Dates\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"displyShortage?.length == 0\">\n            <ion-col size=\"12\">\n              No Data to Display\n            </ion-col>\n          </ion-row>\n          <ion-row  class=\"row-text\" ngClass=\"cat\" *ngFor=\"let s of displyShortage\">\n            <ion-col size=\"1.5\">\n              {{s.roll_no}}\n            </ion-col>\n            <ion-col size=\"3.5\" style=\"text-align: left;\">\n              {{s.student_name}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.conducted}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.attended}}\n            </ion-col>\n            <!-- <ion-col size=\"1\">\n              {{s.exempt}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.percetage}}\n            </ion-col>\n            <ion-col size=\"0.9\">\n              {{s.excused}}\n            </ion-col>\n            <ion-col size=\"0.8\">\n              {{s.allowed}}\n            </ion-col> -->\n           \n            <ion-col size=\"0.7\">\n              {{s.absent}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.percetage}}\n            </ion-col>\n            <ion-col class=\"white_space\" >\n              {{s.absent_dates}}\n            </ion-col>\n          </ion-row> \n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer> \n  <ion-button (click)=\"showlist()\" shape=\"round\" expand=\"block\" fill=\"{{fillType}}\" size=\"small\" color=\"tertiary\">\n    {{btnText}}\n  </ion-button>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_attendance-statement_attendance-statement_module_ts-es5.js.map