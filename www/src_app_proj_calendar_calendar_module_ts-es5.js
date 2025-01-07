(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_calendar_calendar_module_ts"], {
    /***/
    50196:
    /*!**********************************************************!*\
      !*** ./src/app/proj/calendar/calendar-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarPageRoutingModule": function CalendarPageRoutingModule() {
          return (
            /* binding */
            _CalendarPageRoutingModule
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


      var _calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar.page */
      83677);

      var routes = [{
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_0__.CalendarPage
      }];

      var _CalendarPageRoutingModule = /*#__PURE__*/_createClass(function CalendarPageRoutingModule() {
        _classCallCheck(this, CalendarPageRoutingModule);
      });

      _CalendarPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CalendarPageRoutingModule);
      /***/
    },

    /***/
    27230:
    /*!**************************************************!*\
      !*** ./src/app/proj/calendar/calendar.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarPageModule": function CalendarPageModule() {
          return (
            /* binding */
            _CalendarPageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar-routing.module */
      50196);
      /* harmony import */


      var _calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar.page */
      83677);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-calendar */
      13174);
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      83362);

      var _CalendarPageModule = /*#__PURE__*/_createClass(function CalendarPageModule() {
        _classCallCheck(this, CalendarPageModule);
      });

      _CalendarPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, angular_calendar__WEBPACK_IMPORTED_MODULE_7__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__.adapterFactory
        }), _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarPageRoutingModule],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage]
      })], _CalendarPageModule);
      /***/
    },

    /***/
    83677:
    /*!************************************************!*\
      !*** ./src/app/proj/calendar/calendar.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarPage": function CalendarPage() {
          return (
            /* binding */
            _CalendarPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./calendar.page.html */
      26127);
      /* harmony import */


      var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./calendar.page.scss */
      84299);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-calendar */
      13174);
      /* harmony import */


      var date_fns_esm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns/esm */
      98120);
      /* harmony import */


      var date_fns_esm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns/esm */
      43257);
      /* harmony import */


      var date_fns_esm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns/esm */
      57888);
      /* harmony import */


      var date_fns_esm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! date-fns/esm */
      12297);
      /* harmony import */


      var date_fns_esm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! date-fns/esm */
      62094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _attendanc_custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../attendanc/custom-date-formatter.provider */
      63489);

      var colors = {
        red: {
          primary: "#ad2121",
          secondary: "#FAE3E3"
        },
        blue: {
          primary: "#1e90ff",
          secondary: "#D1E8FF"
        },
        yellow: {
          primary: "#e3bc08",
          secondary: "#FDF1BA"
        }
      };

      var _CalendarPage = /*#__PURE__*/function () {
        function CalendarPage(generalts, auth, datepipe, modal, alertController) {
          _classCallCheck(this, CalendarPage);

          this.generalts = generalts;
          this.auth = auth;
          this.datepipe = datepipe;
          this.modal = modal;
          this.alertController = alertController;
          this.calc = 1;
          this.dateMulti = [];
          this.dateMulti1 = [];
          this.string = "string";
          this.clicked_Date = false;
          this.lyt = false;
          this.keyValueCalendar = [];
          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView.Month;
          this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView;
          this.viewDate = new Date();
          this.actions = [];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
          this.events = [];
          this.activeDayIsOpen = true;
          this.changeMonth = new Date();
          this.keyValueCz = [];
        }

        _createClass(CalendarPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.calc = 1;
            this.token = localStorage.getItem("pas_tok");
            console.log("afs");
            this.get_absent(); // this.getNoticeValue();
            //this.generalts.gen_loading();

            this.events = [];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            this.clicked_Date = true;
            console.log("eventonSelect ", event); //var date = new Date(event.time);

            var date = new Date(event);
            var dateFormat = this.datepipe.transform(date, "yyyy-MM-dd");
            this.absentDetails = this.absentData[dateFormat]; // return (this.dateMulti = this.dateMulti1);

            var dass = this.datepipe.transform(date, "yyyy ,MM ,dd"); // this._daysConfig.push({
            //   cssClass: "holiday",
            //   date: new Date(dass),
            //   subTitle: "2",
            //   marked: true
            // });

            this.keyValueCz = this.absentDetails;
            console.log(this.absentDetails, "length", this.dateMulti, this.absentData, dateFormat);
          }
        }, {
          key: "monthchnge",
          value: function monthchnge(event) {
            console.log(event, "event147", event.value);
            var currentMonth1 = event.newMonth;
            this.currentMonth = currentMonth1.months.toString();
            console.log(this.absentData);
          }
        }, {
          key: "sda",
          value: function sda() {
            console.log("event", this.dateMulti); //this.dateMulti = [];
          }
        }, {
          key: "get_absent",
          value: function get_absent() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var stud, data, link, load;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    // const load = await this.generalts.loading("Loading ...");
                    // await load.present();
                    stud = localStorage.getItem("c_stud");
                    data = ""; //this.dateMulti = [];
                    // setTimeout(() => {

                    data = "";
                    link = "student/" + stud + "/calendar"; // if (month && year) {
                    //   link = "student/" + stud + "/calendar?month=" + month + "&year=" + year;
                    // }
                    // var link =
                    //   "student/" + stud + "/absent-info?from=2018-06-01&to=2022-12-12";
                    //console.log(link, "link");

                    this.lyt = false;
                    _context.next = 7;
                    return this.generalts.loading("Loading ...");

                  case 7:
                    load = _context.sent;
                    _context.next = 10;
                    return load.present();

                  case 10:
                    this.auth.g_get(data, link, this.token).subscribe(function (absent) {
                      _this.lyt = true;
                      load.dismiss();
                      var arr;
                      _this.absentData = absent; // this.absentData = {
                      //   "2019-07-03": [
                      //     {
                      //       "lecture_hour": 1,
                      //       "subject_name": "18COM302 - Cost Accounting",
                      //       "lecturer": "Ms. Alisha Mary Philip",
                      //       "lecturer_mobile_number": null
                      //     }
                      //   ]
                      // }
                      //this.abs1=[];

                      console.log(_this.absentData, "given data RAWW");
                      Object.keys(absent).forEach(function (element) {
                        _this.dateMulti.push(element.toString());

                        _this.dateMulti1.push(element.toString()); // this.dateMulti.push(element);
                        // console.log(this.dateMulti, "dat", this.events, "eventsevents123");
                        // // this.dateMulti;
                        // console.log(this.dateMulti, this.dateMulti1, "element");
                        // console.log(this.dateMulti);

                      });

                      for (var index = 0; index < _this.dateMulti.length; index++) {
                        var element = _this.dateMulti[index];

                        _this.keyValueCalendar.push({
                          date: element,
                          value: _this.absentData[_this.dateMulti[index]]
                        });

                        console.log(element, "elementdateMulti", _this.keyValueCalendar, "this.keyValueCalendar", // this.absentData["2019-06-28"],
                        new Date(_this.keyValueCalendar[index]['date']).getMonth() + 1 // this.absentData[this.dateMulti[index]]
                        ); // var dataSort = this.keyValueCalendar[index]['date'];
                        // var monthz = this.changeMonth.getMonth() + 1;
                        // var year = this.changeMonth.getFullYear();
                        // if (new Date(dataSort).getMonth() + 1 == monthz && new Date(dataSort).getFullYear()) {
                        //   this.keyValueC.push({
                        //     date: element,
                        //     value: this.absentData[this.dateMulti[index]]
                        //   })
                        // }

                        var a = _this.absentData[_this.dateMulti[index]];

                        if (a != undefined) {
                          // console.log("ashok", typeof a, a.length);
                          for (var index1 = 0; index1 < a.length; index1++) {
                            var _element = a[index1];
                            console.log(_this.dateMulti[index], "dsa");

                            _this.events.push({
                              start: (0, date_fns_esm__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns_esm__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date(_this.dateMulti[index])), 0),
                              //  end: addDays(new Date(), 1),
                              title: _element,
                              color: colors.blue,
                              actions: _this.actions,
                              allDay: true,
                              resizable: {
                                beforeStart: false,
                                afterEnd: false
                              },
                              draggable: false
                            });
                          }
                        }
                      }

                      _this.closeOpenMonthViewDay(_this.changeMonth);

                      console.log(_this.events, _this.dateMulti, "55555");
                      return _this.events;
                    }, function (error) {
                      //   load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status == 401) {
                        _this.auth.loginAgain(); //this.router.navigateByUrl('/login');

                      } else if (error.status_code == 400) {
                        _this.err = error.message;
                      }
                    }); // }, 500);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          } ////////////calender

        }, {
          key: "dayClicked",
          value: function dayClicked(_ref) {
            var date = _ref.date,
                events = _ref.events;

            if ((0, date_fns_esm__WEBPACK_IMPORTED_MODULE_10__["default"])(date, this.viewDate)) {
              if ((0, date_fns_esm__WEBPACK_IMPORTED_MODULE_11__["default"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
                this.activeDayIsOpen = false;
              } else {
                this.activeDayIsOpen = true;
              }

              this.viewDate = date;
              console.log(this.viewDate, "viewDate");
              this.onSelect(this.viewDate); //this.presentAlertConfirm(this.viewDate);
            }
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(date) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Absent Days!",
                      message: "Message <strong>" + date + "</strong>!!!",
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Okay",
                        handler: function handler() {
                          console.log("Confirm Okay");
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
          key: "eventTimesChanged",
          value: function eventTimesChanged(_ref2) {
            var event = _ref2.event,
                newStart = _ref2.newStart,
                newEnd = _ref2.newEnd;
            this.events = this.events.map(function (iEvent) {
              if (iEvent === event) {
                return Object.assign(Object.assign({}, event), {
                  start: newStart,
                  end: newEnd
                });
              }

              return iEvent;
            });
            this.handleEvent("Dropped or resized", event);
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(action, event) {
            this.modalData = {
              event: event,
              action: action
            };
            this.modal.open(this.modalContent, {
              size: "lg"
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            this.events = [].concat(_toConsumableArray(this.events), [{
              title: "New event",
              start: (0, date_fns_esm__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date()),
              end: (0, date_fns_esm__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date()),
              //color: colors.red,
              cssClass: "asd",
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            }]);
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent(eventToDelete) {
            this.events = this.events.filter(function (event) {
              return event !== eventToDelete;
            });
          }
        }, {
          key: "setView",
          value: function setView(view) {
            this.view = view;
          }
        }, {
          key: "closeOpenMonthViewDay",
          value: function closeOpenMonthViewDay(data) {
            this.changeMonth = data;
            var monthz = data.getMonth() + 1;
            var year = data.getFullYear();
            console.log(data, "month", monthz, year); // this.get_absent(monthz, year)

            this.getMonth(monthz, year);
            console.log(this.keyValueCalendar);
            this.activeDayIsOpen = false;
          }
        }, {
          key: "getMonth",
          value: function getMonth(month, year) {
            var _this2 = this;

            this.keyValueCz = [];
            console.log("getMonth", this.keyValueCalendar);

            for (var index = 0; index < this.keyValueCalendar.length; index++) {
              var element = this.keyValueCalendar[index];
              var dataSort = this.keyValueCalendar[index]['date'];
              var monthz = this.changeMonth.getMonth() + 1;
              var yeasr = this.changeMonth.getFullYear(); // console.log(dataSort, new Date(dataSort).getMonth() + 1, new Date(dataSort).getFullYear(), "dataSort dataSort", yeasr, monthz, "res",
              //   new Date(dataSort).getMonth() + 1 == monthz && new Date(dataSort).getFullYear() == yeasr);

              console.log(element.value, "element123");

              for (var _index = 0; _index < element.value.length; _index++) {
                var elementNew = element.value[_index];
                console.log(elementNew.event, "element123NEw");

                if (new Date(dataSort).getMonth() + 1 == monthz && new Date(dataSort).getFullYear() == yeasr) {
                  elementNew.date = dataSort;
                  this.keyValueCz.push(elementNew);
                }
              } // }

            }

            return;
            console.log(this.keyValueCalendar);
            var stud = localStorage.getItem("c_stud");
            var data = ""; //this.dateMulti = [];
            // setTimeout(() => {

            var data = "";
            var link = "student/" + stud + "/calendar";

            if (month && year) {
              link = "student/" + stud + "/calendar?month=" + month + "&year=" + year;
            } // var link =
            //   "student/" + stud + "/absent-info?from=2018-06-01&to=2022-12-12";
            //console.log(link, "link");
            // this.lyt = false;


            this.auth.g_get(data, link, this.token).subscribe(function (Data) {
              console.log(Data, "Data month");
              _this2.monthDAta = Data; // this.da = absent;
            });
          }
        }]);

        return CalendarPage;
      }();

      _CalendarPage.ctorParameters = function () {
        return [{
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }];
      };

      _CalendarPage.propDecorators = {
        modalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
          args: ["modalContent", {
            "static": true
          }]
        }]
      };
      _CalendarPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [{
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarDateFormatter,
          useClass: _attendanc_custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CustomDateFormatter
        }],
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CalendarPage); //   timetableData: any;
      //   token: any; err: any;
      //   constructor(private router: Router,
      //     public authService: AuthService,
      //     public generalts: GeneralService) { }
      //   ngOnInit() {
      //   }
      //   ionViewWillEnter() {
      //     this.token = localStorage.getItem("pas_tok");
      //     // this.getNoticeValue();
      //   }
      // }

      /***/
    },

    /***/
    84299:
    /*!**************************************************!*\
      !*** ./src/app/proj/calendar/calendar.page.scss ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-clder {\n  background-color: white !important;\n  color: #d81d1d !important;\n}\n\n.abscent {\n  background: #222428;\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  border-radius: 30px;\n  margin-right: 5px;\n  position: relative;\n  top: 2px;\n}\n\n.holiday {\n  color: #fef5ff !important;\n  background-color: #c74c4e !important;\n}\n\nion-calendar .unavailableDay {\n  background-color: #f70e0e !important;\n}\n\nion-calendar .unavailableDay p {\n  color: white !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #746d6d;\n}\n\n.tabl ion-col {\n  border: 1px solid #746d6d;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #ae5c50;\n}\n\nion-grid {\n  padding: 0 5px !important;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.actived_Date .cal-month-view .cal-cell-top {\n  background-color: red;\n}\n\n.abst_list ion-row:last-child {\n  border-bottom: 1px solid #746d6d;\n}\n\n.a_list ion-row:first-child {\n  border-top: 1px solid #746d6d;\n}\n\n.no_data {\n  border-bottom: 1px solid #746d6d;\n}\n\n.cardss h4 {\n  margin: 0px;\n  margin-bottom: 7px;\n}\n\n.cardss p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFHSTtFQUNJLG9DQUFBO0FBQVI7O0FBQ1E7RUFDSSx1QkFBQTtBQUNaOztBQUtJO0VBQ0ksK0JBQUE7QUFGUjs7QUFJSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUZSOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9BO0VBQ0kseUJBQUE7QUFKSjs7QUFLSTtFQUNJLGFBQUE7QUFIUjs7QUFRSTtFQUNJLHFCQUFBO0FBTFI7O0FBWUE7RUFDSSxnQ0FBQTtBQVRKOztBQVlBO0VBQ0ksNkJBQUE7QUFUSjs7QUFZQTtFQUNJLGdDQUFBO0FBVEo7O0FBYUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFWUjs7QUFZSTtFQUNJLFNBQUE7QUFWUiIsImZpbGUiOiJjYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNsZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjE2LCAyOSwgMjkpICFpbXBvcnRhbnQ7XG59XG5cbi5hYnNjZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyNDI4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG59XG5cbi5ob2xpZGF5IHtcbiAgICBjb2xvcjogcmdiKDI1NCwgMjQ1LCAyNTUpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3NGM0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FsZW5kYXIge1xuICAgIC51bmF2YWlsYWJsZURheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzBlMGUgIWltcG9ydGFudDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmwge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzQ2ZDZkO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc0NmQ2ZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiBpbmhlcml0O1xuICAgIH1cbn1cblxuaW9uLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjYWU1YzUwO1xuICAgIH1cbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE2LCAxMDksIDEwOSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDFweCAwO1xuICAgIH1cbn1cblxuLmFjdGl2ZWRfRGF0ZSB7XG4gICAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC10b3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4vLyBpb24tcm93Om50aC1sYXN0LWNoaWxkKDIpIHtcbi8vICAgYmFja2dyb3VuZDogcmVkO1xuLy8gfVxuLmFic3RfbGlzdCBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ2ZDZkO1xufVxuXG4uYV9saXN0IGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzQ2ZDZkO1xufVxuXG4ubm9fZGF0YSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NDZkNmQ7XG59XG5cbi5jYXJkc3Mge1xuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    26127:
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/calendar/calendar.page.html ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <!-- <span class=\"ion-padding back_butt\" style=\"font-size: 18px;\">\n      Calendar\n    </span> -->\n\n        <ion-title>Calendar</ion-title>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\"margin-top: 25px;\">\n            <ion-col size=\"3\">\n                <div class=\"btn btn-primary\" \n                mwlCalendarPreviousView \n                [view]=\"view\" \n                [(viewDate)]=\"viewDate\" \n                (viewDateChange)=\"closeOpenMonthViewDay(viewDate)\"\n                style=\"padding: 15px 0px 9px 6px;\"\n                >\n                <ion-icon name=\"arrow-back-circle\"></ion-icon>\n                </div>\n            </ion-col>\n\n            <ion-col size=\"6\">\n\n                <h3 no-margin>\n                    {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\n                </h3>\n            </ion-col>\n\n            <ion-col size=\"3\">\n                <div class=\"btn btn-primary\" \n                mwlCalendarNextView \n                [view]=\"view\" \n                [(viewDate)]=\"viewDate\" \n                (viewDateChange)=\"closeOpenMonthViewDay(viewDate)\"\n                style=\"padding: 15px 0px 9px 6px;\"\n                >\n                  <ion-icon name=\"arrow-forward-circle\"></ion-icon>\n                </div>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n    <div class=\"row ion-text-center\"></div>\n    <br />\n    <div [ngSwitch]=\"view\" class=\"ion-padding\" *ngIf=\"lyt\">\n        <mwl-calendar-month-view \n        *ngSwitchCase=\"CalendarView.Month\" \n        [viewDate]=\"viewDate\" \n        [events]=\"events\" \n        class=\"da\" \n        [refresh]=\"refresh\" \n        [activeDayIsOpen]=\"activeDayIsOpen\" \n        (dayClicked)=\"dayClicked($event.day)\" \n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n    </div>\n    <!-- /////table bottom -->\n    <div *ngIf=\"keyValueCalendar\">\n        <!-- {{this.viewDate}}  -->\n        <div *ngFor=\"let d of keyValueCz\">\n            <ion-card style=\"padding: 10px 20px; \" class=\"cardss\">\n                <h4 [style.color]=\"d.color\" style=\"font-size: 19px;\">{{d.name}}</h4>\n                <p>Event Date - {{d.date | date:'dd/MM/y'}}</p>\n                <p>Description - {{d.event}}</p>\n\n            </ion-card>\n\n        </div>\n\n\n    </div>\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_calendar_calendar_module_ts-es5.js.map