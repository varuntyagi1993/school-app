(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_mark-remarks_mark-remarks_module_ts"], {
    /***/
    90170:
    /*!*********************************************************************!*\
      !*** ./src/app/faculty/mark-remarks/mark-remarks-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarkRemarksPageRoutingModule": function MarkRemarksPageRoutingModule() {
          return (
            /* binding */
            _MarkRemarksPageRoutingModule
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


      var _mark_remarks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mark-remarks.page */
      14875);

      var routes = [{
        path: '',
        component: _mark_remarks_page__WEBPACK_IMPORTED_MODULE_0__.MarkRemarksPage
      }];

      var _MarkRemarksPageRoutingModule = /*#__PURE__*/_createClass(function MarkRemarksPageRoutingModule() {
        _classCallCheck(this, MarkRemarksPageRoutingModule);
      });

      _MarkRemarksPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MarkRemarksPageRoutingModule);
      /***/
    },

    /***/
    8526:
    /*!*************************************************************!*\
      !*** ./src/app/faculty/mark-remarks/mark-remarks.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarkRemarksPageModule": function MarkRemarksPageModule() {
          return (
            /* binding */
            _MarkRemarksPageModule
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


      var _mark_remarks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mark-remarks-routing.module */
      90170);
      /* harmony import */


      var _mark_remarks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mark-remarks.page */
      14875);

      var _MarkRemarksPageModule = /*#__PURE__*/_createClass(function MarkRemarksPageModule() {
        _classCallCheck(this, MarkRemarksPageModule);
      });

      _MarkRemarksPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mark_remarks_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarkRemarksPageRoutingModule],
        declarations: [_mark_remarks_page__WEBPACK_IMPORTED_MODULE_1__.MarkRemarksPage]
      })], _MarkRemarksPageModule);
      /***/
    },

    /***/
    14875:
    /*!***********************************************************!*\
      !*** ./src/app/faculty/mark-remarks/mark-remarks.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarkRemarksPage": function MarkRemarksPage() {
          return (
            /* binding */
            _MarkRemarksPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mark_remarks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mark-remarks.page.html */
      1074);
      /* harmony import */


      var _mark_remarks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mark-remarks.page.scss */
      48102);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _MarkRemarksPage = /*#__PURE__*/function () {
        // compareWithFn(o1, o2) {
        //   return o1 === o2;
        // };
        function MarkRemarksPage(authService, general, router, location, alertController, modalCtrl, formBuilder) {
          _classCallCheck(this, MarkRemarksPage);

          this.authService = authService;
          this.general = general;
          this.router = router;
          this.location = location;
          this.alertController = alertController;
          this.modalCtrl = modalCtrl;
          this.formBuilder = formBuilder;
          this.count = 0;
          this.token = localStorage.getItem("pas_faculty"); // return

          var institute = localStorage.getItem("institute");
          this.general.listen().subscribe(function (m) {
            console.log(m, 'fdf34');
            console.log(localStorage.getItem('event')); //  this.getRefresh(localStorage.getItem('event'));
          });
        }

        _createClass(MarkRemarksPage, [{
          key: "onKeyupEnter",
          value: function onKeyupEnter() {
            var nextEl = this.findNextTabStop(document.activeElement);
            nextEl.focus(); // or try for ionic 4:
            // nextEl.setFocus();
          }
        }, {
          key: "findNextTabStop",
          value: function findNextTabStop(el) {
            var universe = document.querySelectorAll("input, button, select, textarea, a[href]");
            var list = Array.prototype.filter.call(universe, function (item) {
              return item.tabIndex >= "0";
            });
            var index = list.indexOf(el);
            return list[index + 1] || list[0];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('df');
            this.myForm = this.formBuilder.group({
              remark0: ['']
            }); // this.particularsId = 85;
            // this.compareWith = this.compareWithFn;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log('ngAfterViewInit');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // window.location.reload();
            this.token = localStorage.getItem("pas_faculty");
            console.log('ds'); // return

            var institute = localStorage.getItem("institute"); // this.MyDefaultYearIdValue = 85 ;

            this.getClassGuide();
          }
        }, {
          key: "getClassGuide",
          value: function getClassGuide() {
            var _this = this;

            this.general.loadingPresent();
            this.authService.get_fac_t("teaching-staff/class-guide-marks-card-remarks/class-guide-details", this.token).subscribe(function (data) {
              console.log(data); // 

              _this.general.loadingDismiss();

              var assessmentParticular = data['assessmentParticularIds'];
              _this.assessmentParticular = Object.keys(assessmentParticular).map(function (index) {
                var a = assessmentParticular[index];
                return a;
              });

              var particularsId = _this.assessmentParticular.filter(function (particular) {
                return particular.main == 1;
              });

              _this.particularsId = particularsId[0].id;
              console.log(_this.particularsId, 'sd');
              _this.length = data['yearIds'].length; // if(this.length == 1) {

              var y = data['yearIds'];
              _this.yearId = y[0].id; // }

              _this.years = data['yearIds'];

              _this.getRefresh(_this.particularsId, _this.yearId);
            }, function (error) {
              console.log(error);

              _this.general.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this.general.loginAgain();

                  _this.router.navigateByUrl("/opem");
                }
              }
            });
          }
        }, {
          key: "getYear",
          value: function getYear(year) {
            this.yearId = year.detail['value'];
          }
        }, {
          key: "getStudent",
          value: function getStudent(event) {
            var _this2 = this;

            localStorage.setItem('event', event.detail['value']);
            this.general.loadingPresent();
            var particularsId = event.detail['value'];
            this.particularsId = particularsId;
            this.authService.get_fac_t("teaching-staff/class-guide-marks-card-remarks/fetch-students?year_id=" + this.yearId + "&assessment_Id=" + particularsId, this.token).subscribe(function (data) {
              console.log(data);
              _this2.count = data.length;
              _this2.studentDetails = data;

              _this2.general.loadingDismiss();

              for (var i = 0; i < _this2.count; i++) {
                _this2.myForm.addControl('remark' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                _this2.myForm.controls['remark' + i].setValue(_this2.studentDetails[i].remarks);

                _this2.myForm.get('remark' + i).updateValueAndValidity();
              }
            }, function (error) {
              console.log(error);

              _this2.general.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this2.general.loginAgain();

                  _this2.router.navigateByUrl("/opem");
                }
              }
            });
          }
        }, {
          key: "getRefresh",
          value: function getRefresh(event, yearId) {
            var _this3 = this;

            console.log(this.yearId); // this.general.loadingPresent();

            var particularsId = event; // this.particularsId = particularsId;

            this.authService.get_fac_t("teaching-staff/class-guide-marks-card-remarks/fetch-students?year_id=" + yearId + "&assessment_Id=" + particularsId, this.token).subscribe(function (data) {
              console.log(data);
              _this3.count = data.length;
              _this3.studentDetails = data;

              for (var i = 0; i < _this3.count; i++) {
                _this3.myForm.addControl('remark' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                _this3.myForm.controls['remark' + i].setValue(_this3.studentDetails[i].remarks);

                _this3.myForm.get('remark' + i).updateValueAndValidity();
              } // this.general.loadingDismiss();

            }, function (error) {
              console.log(error); // this.general.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this3.general.loginAgain();

                  _this3.router.navigateByUrl("/opem");
                }
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigateByUrl('dashboard');
          }
        }, {
          key: "delete",
          value: function _delete(student) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;

              var data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    data = {
                      "studentDetail": {
                        "class_guide_allocations_id": student.class_guide_allocations_id,
                        "remarks": student.remarks,
                        "student_id": student.student_id,
                        "student_name": student.student_name,
                        "roll_no": student.roll_no
                      },
                      "assessmentParticularId": this.particularsId
                    };
                    console.log(data);
                    this.general.loadingPresent();
                    this.authService.g_postt_fac(data, 'teaching-staff/class-guide-marks-card-remarks/delete-remarks', this.token).subscribe(function (response) {
                      _this4.general.loadingDismiss();

                      console.log(response);

                      if (response.status) {
                        _this4.general.showToast(response.message);
                      }

                      _this4.general.filter('Deleted'); // location.reload();

                    }, function (error) {
                      console.log(error);

                      _this4.general.loadingDismiss();

                      if (error.status == 401 || error.status == 422 || error.status == 0) {
                        if (error.statusText == "Unauthorized") {
                          _this4.general.loginAgain();

                          _this4.router.navigateByUrl("/opem");
                        }
                      }
                    }); // const alert = await this.alertController.create({
                    //   header: 'Confirm!',
                    //   message: "Are you sure you want to delete?",
                    //   buttons: [
                    //     {
                    //       text: 'No',
                    //       role: 'cancel',
                    //       cssClass: 'secondary',
                    //       handler: (blah) => {
                    //         console.log('Confirm Cancel: blah');
                    //       }
                    //     }, {
                    //       text: 'Yes',
                    //       handler: () => {
                    //         // this.popoverController.dismiss();
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit(value, student) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var data;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (value.detail['value'] != '') {
                      data = {
                        "editStudentRemarks": {
                          "class_guide_allocations_id": student.class_guide_allocations_id,
                          "remarks": value.detail['value'],
                          "student_id": student.student_id,
                          "student_name": student.student_name,
                          "roll_no": student.roll_no
                        },
                        "assessmentParticularId": this.particularsId
                      };
                      console.log(data); // this.general.loadingPresent()

                      this.authService.g_postt_fac(data, 'teaching-staff/class-guide-marks-card-remarks/save-remarks', this.token).subscribe(function (response) {
                        // this.general.loadingDismiss();
                        console.log(response);

                        if (response.status) {
                          _this5.general.showToast(response.message);
                        } // this.general.filter('Added');
                        // this.modalCtrl.dismiss();

                      }, function (error) {
                        console.log(error); // this.general.loadingDismiss();

                        if (error.status == 401 || error.status == 422 || error.status == 0) {
                          if (error.statusText == "Unauthorized") {
                            _this5.general.loginAgain();

                            _this5.router.navigateByUrl("/opem");
                          }
                        }
                      });
                    }

                    if (value.detail['value'] == '') {
                      this["delete"](student);
                    } // const modal = await this.modalCtrl.create({
                    //   component: RemarkModalPage,
                    //   componentProps: {
                    //     "data" : student,
                    //     "assessmentParticularId": this.particularsId,
                    //   }
                    // });
                    // modal.present();


                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }]);

        return MarkRemarksPage;
      }();

      _MarkRemarksPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _MarkRemarksPage.propDecorators = {
        onKeyupEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener,
          args: ["keyup.enter"]
        }]
      };
      _MarkRemarksPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-mark-remarks',
        template: _raw_loader_mark_remarks_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mark_remarks_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MarkRemarksPage);
      /***/
    },

    /***/
    48102:
    /*!*************************************************************!*\
      !*** ./src/app/faculty/mark-remarks/mark-remarks.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid-bordered .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 160%;\n  font-size: 12px;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n\n.ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\n.align {\n  text-align: center;\n  vertical-align: text-bottom;\n}\n\n.btn {\n  text-align: center;\n  color: #690d01fc;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n\n.font {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmstcmVtYXJrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBYk47O0FBdUJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQXBCSjs7QUFxQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFuQlI7O0FBb0JRO0VBQ0kscUJBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFuQlo7O0FBeUJBO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0FBdEJKOztBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUF0QkY7O0FBeUJBO0VBT1Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTdCUjs7QUFpQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUE5QlI7O0FBa0NBO0VBQ0ksZUFBQTtBQS9CSiIsImZpbGUiOiJtYXJrLXJlbWFya3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtYm9yZGVyZWR7XG4gICAgLy8gaW9uLXJvd3tcbiAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC8vICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAwcHg7XG4gICAgLy8gICBib3JkZXItY29sb3I6ICM1ZjU3NTc7XG4gICAgLy8gICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAvLyAvLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLy8gfVxuICAgIC5yb3ctdGV4dHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB9XG4gICAgLy8gaW9uLWNvbHtcbiAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLy8gICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAvLyAgIGJvcmRlci1jb2xvcjogI2NjYzZjNjtcbiAgICAvLyB9XG59XG5cbi50aHVtbmFpbHN7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAubGlzdC10aHVtYm5haWx7XG4gICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAuaW1nLXRodW1ie1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjExLCAxMiwgMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE2MCU7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOjAgMnB4IDAgMDsgXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkhaW1wb3J0YW50IDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBcbn1cbi5hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4uYnRuIHtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIHdpZHRoOiA3NSU7XG4gICAgICAgIC8vIHBhZGRpbmc6IDhweDtcbiAgICAgICAgLy8gLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8vIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgIzY5MGQwMWZjO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM2OTBkMDFmYztcbiAgICAgICAgY29sb3I6ICM2OTBkMDFmYztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uSGVhZERhdGEge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogI2FlNWM1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG4uZm9udCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    1074:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/mark-remarks/mark-remarks.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title >Remarks Entry </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item *ngIf=\"length > 1\">\n    <ion-label floating>Year</ion-label>\n      <ion-select\n      [(ngModel)]=\"yearId\" \n        placeholder=\"Select\"\n        (ionChange)=\"getYear($event)\">\n        <ion-select-option\n          *ngFor=\"let year of years;\"\n          [value]=\"year.id\">\n          {{year.year}}\n        </ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Particulars</ion-label>\n      <ion-select \n        [(ngModel)]=\"particularsId\" \n        placeholder=\"Select\"\n        (ionChange)=\"getStudent($event)\">\n        <ion-select-option\n          *ngFor=\"let item of assessmentParticular;\"\n          [value]=\"item.id\">\n          {{item.name}}\n        </ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <div class=\"thumnails\" *ngIf=\"studentDetails\">\n    <div class=\"list-thumbnail\">\n      <div class=\"img-thumb\">\n        <form [formGroup]=\"myForm\">\n          <ion-grid  class=\"grid-bordered\" >\n            <ion-row class=\"row-text HeadData\">\n              <!-- <ion-col text-center class=\"ion-col\" size=\"1\">\n                <p>Action</p>\n              </ion-col> -->\n              <ion-col text-center class=\"font ion-col\" size=\"1\">\n                <p>Roll No</p>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3\">\n                <p>Name</p>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3.5\">\n                <p>Remarks</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"row-text\" *ngFor=\"let student of studentDetails; let i=index\">\n              <!-- <ion-col text-center class=\"ion-col\" size=\"1\">\n                <ion-label (click)=\"edit(student)\" class=\"label_ion\" >\n                  <ion-icon  class=\"btn\" name=\"create-outline\"></ion-icon>\n                </ion-label>\n                &nbsp;&nbsp;\n                <ion-label (click)=\"delete(student)\" class=\"label_ion\" *ngIf=\"student.remarks != null\">\n                  <ion-icon class=\"btn\" name=\"trash-outline\"></ion-icon>\n                </ion-label>\n              </ion-col>  -->\n              <ion-col text-center class=\"font ion-col ion-text-center\" size=\"1\">\n                <ion-label class=\"label_ion\" >{{student.roll_no}}</ion-label>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3\">\n                <ion-label class=\"label_ion\" >{{student.student_name}}</ion-label>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3.5\">\n                <ion-input formControlName=\"remark{{i}}\"    (ionChange)='edit($event, student)'  placeholder=\"Remarks\"></ion-input>\n                <!-- <ion-label class=\"label_ion\" >{{student.remarks}}</ion-label> -->\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_mark-remarks_mark-remarks_module_ts-es5.js.map