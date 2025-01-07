(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_timetable_timetable_module_ts"], {
    /***/
    78297:
    /*!************************************************************!*\
      !*** ./src/app/proj/timetable/timetable-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimetablePageRoutingModule": function TimetablePageRoutingModule() {
          return (
            /* binding */
            _TimetablePageRoutingModule
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


      var _timetable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timetable.page */
      67308);

      var routes = [{
        path: '',
        component: _timetable_page__WEBPACK_IMPORTED_MODULE_0__.TimetablePage
      }];

      var _TimetablePageRoutingModule = /*#__PURE__*/_createClass(function TimetablePageRoutingModule() {
        _classCallCheck(this, TimetablePageRoutingModule);
      });

      _TimetablePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TimetablePageRoutingModule);
      /***/
    },

    /***/
    83255:
    /*!****************************************************!*\
      !*** ./src/app/proj/timetable/timetable.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimetablePageModule": function TimetablePageModule() {
          return (
            /* binding */
            _TimetablePageModule
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


      var _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timetable-routing.module */
      78297);
      /* harmony import */


      var _timetable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timetable.page */
      67308);

      var _TimetablePageModule = /*#__PURE__*/_createClass(function TimetablePageModule() {
        _classCallCheck(this, TimetablePageModule);
      });

      _TimetablePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimetablePageRoutingModule],
        declarations: [_timetable_page__WEBPACK_IMPORTED_MODULE_1__.TimetablePage]
      })], _TimetablePageModule);
      /***/
    },

    /***/
    67308:
    /*!**************************************************!*\
      !*** ./src/app/proj/timetable/timetable.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimetablePage": function TimetablePage() {
          return (
            /* binding */
            _TimetablePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./timetable.page.html */
      34924);
      /* harmony import */


      var _timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timetable.page.scss */
      5204);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);

      var _TimetablePage = /*#__PURE__*/function () {
        // @ViewChild("mySlider", { static: true }) modalContent: TemplateRef<any>;
        function TimetablePage(router, authService, generalts) {
          _classCallCheck(this, TimetablePage);

          this.router = router;
          this.authService = authService;
          this.generalts = generalts;
          this.day = new Date();
          this.slideOpts = {
            initialSlide: this.day.getDay() - 1,
            speed: 400,
            pager: false
          };
          this.isError = false;
          console.log(this.day.getDay(), 'd');
        } // startSlide(data) {
        //   data.ionSlideReachStart();
        // }


        _createClass(TimetablePage, [{
          key: "prev",
          value: function prev(data) {
            data.slidePrev(); // data.slideEnd();
          }
        }, {
          key: "nnext",
          value: function nnext(data) {
            // console.log("asdf", data)
            data.slideNext(); // this.slides.slideNext()
            // this.mySlider.slideNext();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_tok"); // this.timetableData =
            // {
            //   "classTimeTable": {
            //     "Monday": [
            //       "Anatomy",
            //       "Physiology",
            //       "Physiology",
            //       "Nutrition",
            //       "Microbiology",
            //       "Kannada"
            //     ],
            //     "Tuesday": [
            //       "Anatomy",
            //       "Nutrition",
            //       "Microbiology",
            //       "Nursing Foundation",
            //       "English",
            //       null
            //     ],
            //     "Wednesday": [
            //       "Anatomy",
            //       "Nutrition",
            //       "Nursing Foundation",
            //       "English",
            //       "Psychology",
            //       null
            //     ],
            //     "Thursday": [
            //       "Physiology",
            //       "Biochemistry",
            //       null,
            //       null,
            //       null,
            //       null
            //     ],
            //     "Friday": [
            //       "Anatomy",
            //       "Nursing Foundation",
            //       null,
            //       null,
            //       null,
            //       null
            //     ],
            //     "Saturday": [
            //       "Nursing Foundation",
            //       null,
            //       null,
            //       null,
            //       null,
            //       null
            //     ],
            //     "Sunday": []
            //   },
            //   "classPeriodAndTime": {
            //     "1": "08:30 am to 09:30 am",
            //     "2": "09:30 am to 10:30 am",
            //     "3": "10:30 am to 11:30 am",
            //     "4": "11:30 am to 12:30 pm",
            //     "5": "01:30 pm to 02:30 pm",
            //     "6": "02:30 pm to 03:30 pm"
            //   }
            // }

            this.getNoticeValue(); // var data = { "data": [{ "week_name": "MONDAY", "item": [{ "subName": "Kannada", "from_time": "11:30 AM", "end_time": "12:15 PM", "period_no": 1, "hrs": "11:30" }, { "subName": "Hindi", "from_time": "12:20 PM", "end_time": "01:05 PM", "period_no": 2, "hrs": "12:20" }] }, { "week_name": "TUESDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }, { "week_name": "WEDNESDAY", "item": [{ "subName": "Environmental Studies", "from_time": "11:30 AM", "end_time": "12:15 PM", "period_no": 1, "hrs": "11:30" }, { "subName": "Art Education", "from_time": "12:20 PM", "end_time": "01:05 PM", "period_no": 2, "hrs": "12:20" }] }, { "week_name": "THURSDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }, { "week_name": "FRIDAY", "item": [{ "subName": "Mathematics", "from_time": "11:30 AM", "end_time": "12:15 PM", "period_no": 1, "hrs": "11:30" }, { "subName": "English", "from_time": "12:20 PM", "end_time": "01:05 PM", "period_no": 2, "hrs": "12:20" }] }, { "week_name": "SATURDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }, { "week_name": "SUNDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }] }
          }
        }, {
          key: "getNoticeValue",
          value: function getNoticeValue() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var load, data, c_stu, link;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.generalts.loading("Loading ...");

                  case 2:
                    load = _context.sent;
                    _context.next = 5;
                    return load.present();

                  case 5:
                    data = "";
                    c_stu = localStorage.getItem("c_stud");
                    link = "student/" + c_stu + "/class-timetable"; // "student/" + c_stu + "/notices?type=Notices&paginate=0";

                    console.log(link, "link", "this.c_stud ", c_stu);
                    this.authService.g_get(data, link, this.token).subscribe(function (data) {
                      load.dismiss();
                      _this.timetableData = data;
                      _this.isError = false;
                      console.log(data, "prof");
                    }, function (error) {
                      load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status == 401) {
                        _this.authService.loginAgain(); //this.router.navigateByUrl('/login');

                      } else if (error.status_code == 400) {
                        _this.err = error.message;
                        _this.isError = true;
                      }
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return TimetablePage;
      }();

      _TimetablePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }];
      };

      _TimetablePage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: ["Slides", {
            "static": true
          }]
        }]
      };
      _TimetablePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-timetable',
        template: _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TimetablePage);
      /***/
    },

    /***/
    5204:
    /*!****************************************************!*\
      !*** ./src/app/proj/timetable/timetable.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-size: 15px;\n}\n\nion-slides {\n  width: 100% !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #fff;\n}\n\n.tabl ion-col {\n  border: 1px solid #fff;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #ae5c50;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.abst_list {\n  background: #b9cbff;\n}\n\n.a_list {\n  background: #ae5c50;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSxzQkFBQTtBQUNSOztBQUdRO0VBQ0ksNEJBQUE7QUFBWjs7QUFFUTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUFaOztBQUlJO0VBQ0ksa0JBQUE7QUFEUjs7QUFFUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFaOztBQU9RO0VBQ0ksYUFBQTtBQUpaOztBQVFJO0VBQ0ksbUJBQUE7QUFMUjs7QUFRSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6InRpbWV0YWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC50YWJsIHtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNhZTVjNTA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDExNiwgMTA5LCAxMDkpO1xuICAgIH1cbiAgICBcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAxcHggMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYWJzdF9saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2I5Y2JmZjtcbiAgICB9XG4gICAgXG4gICAgLmFfbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhZTVjNTA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLy8gLmFic3RfbGlzdCBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIC8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc0NmQ2ZDtcbiAgICAvLyB9Il19 */";
      /***/
    },

    /***/
    34924:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/timetable/timetable.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> Time Table </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"!isError && timetableData\">\n        <!-- {{timetableData.classTimeTable.Monday|json}} -->\n        <!-- <ion-row class=\"no_data\">\n                      <ion-col size=\"12\" *ngIf=\"[undefined,'',null].indexOf(absentDetails)>-1\"><span style=\"color: red;\">No Data Found</span>\n                      </ion-col>\n                  </ion-row> -->\n        <!-- <div class=\"\">\n            <div>\n                <ion-grid class=\"tabl\">\n                    <ion-row class=\"a_list\">\n                        <ion-col size=\"2\">\n                            <p>Hour</p>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <p>Subject</p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <p>Lecturer</p>\n                        </ion-col>\n                    </ion-row>\n                   \n\n                    <div class=\"abst_list\" *ngFor=\"let Monday of timetableData.classTimeTable.Monday,let i=index\">\n                        <ion-row>\n                            <ion-col size=\"2\">\n                                <p>{{i+1}}</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>{{Monday.timings}}</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>{{Monday.subject_name}}</p>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </ion-grid>\n            </div>\n        </div> -->\n        <!-- <ion-row class=\"no_data\">\n                          <ion-col size=\"12\" *ngIf=\"[undefined,'',null].indexOf(absentDetails)>-1\"><span style=\"color: red;\">No Data Found</span>\n                          </ion-col>\n                      </ion-row> -->\n        <ion-slides pager=\"false\" #Slides [options]=\"slideOpts\">\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <!-- <ion-icon name=\"arrow-dropleft\"></ion-icon> -->\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Monday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                \n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Monday of timetableData.classTimeTable.Monday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Monday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Monday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Tuesday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Tuesday of timetableData.classTimeTable.Tuesday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Tuesday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Tuesday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Wednesday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Wednesday of timetableData.classTimeTable.Wednesday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Wednesday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Wednesday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Thursday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Thursday of timetableData.classTimeTable.Thursday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Thursday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Thursday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Friday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Friday of timetableData.classTimeTable.Friday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Friday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Friday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Saturday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Saturday of timetableData.classTimeTable.Saturday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Saturday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Saturday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Sunday\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <!-- <ion-icon name=\"arrow-dropright\"></ion-icon> -->\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Sunday of timetableData.classTimeTable.Sunday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Sunday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Sunday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n            <!-- \n            <ion-slide>\n                <h1>Slide 2</h1>\n            </ion-slide>\n            <ion-slide>\n                <h1>Slide 3</h1>\n            </ion-slide> -->\n        </ion-slides>\n\n    </div>\n    <ion-card *ngIf=\"isError\" style=\"text-align: center;color: #000;margin: 15px;\">\n\n        <!-- {{ circularData.data.length|json}} -->\n\n        <h3>{{err}}</h3>\n\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n    </ion-card>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_timetable_timetable_module_ts-es5.js.map