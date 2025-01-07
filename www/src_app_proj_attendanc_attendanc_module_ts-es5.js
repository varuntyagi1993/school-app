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

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_attendanc_attendanc_module_ts"], {
    /***/
    95599:
    /*!************************************************************!*\
      !*** ./src/app/proj/attendanc/attendanc-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancPageRoutingModule": function AttendancPageRoutingModule() {
          return (
            /* binding */
            _AttendancPageRoutingModule
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


      var _attendanc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendanc.page */
      13468);

      var routes = [{
        path: '',
        component: _attendanc_page__WEBPACK_IMPORTED_MODULE_0__.AttendancPage
      }];

      var _AttendancPageRoutingModule = /*#__PURE__*/_createClass(function AttendancPageRoutingModule() {
        _classCallCheck(this, AttendancPageRoutingModule);
      });

      _AttendancPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AttendancPageRoutingModule);
      /***/
    },

    /***/
    2191:
    /*!****************************************************!*\
      !*** ./src/app/proj/attendanc/attendanc.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancPageModule": function AttendancPageModule() {
          return (
            /* binding */
            _AttendancPageModule
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


      var _attendanc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendanc-routing.module */
      95599);
      /* harmony import */


      var _attendanc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendanc.page */
      13468);
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

      var _AttendancPageModule = /*#__PURE__*/_createClass(function AttendancPageModule() {
        _classCallCheck(this, AttendancPageModule);
      });

      _AttendancPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule, angular_calendar__WEBPACK_IMPORTED_MODULE_7__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__.adapterFactory
        }), _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _attendanc_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendancPageRoutingModule],
        declarations: [_attendanc_page__WEBPACK_IMPORTED_MODULE_1__.AttendancPage]
      })], _AttendancPageModule);
      /***/
    },

    /***/
    13468:
    /*!**************************************************!*\
      !*** ./src/app/proj/attendanc/attendanc.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancPage": function AttendancPage() {
          return (
            /* binding */
            _AttendancPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_attendanc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./attendanc.page.html */
      58542);
      /* harmony import */


      var _attendanc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendanc.page.scss */
      94190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-calendar */
      13174);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      98120);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      43257);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      57888);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      12297);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! date-fns */
      62094);
      /* harmony import */


      var _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./custom-date-formatter.provider */
      63489);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

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

      var _AttendancPage = /*#__PURE__*/function () {
        function AttendancPage(generalts, auth, datepipe, modal, alertController) {
          _classCallCheck(this, AttendancPage);

          this.generalts = generalts;
          this.auth = auth;
          this.datepipe = datepipe;
          this.modal = modal;
          this.alertController = alertController;
          this.calc = 1;
          this.dateMulti = [""];
          this.dateMulti1 = [""];
          this.string = "string";
          this.clicked_Date = false;
          this.lyt = false;
          this.isError = false;
          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView.Month;
          this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView;
          this.viewDate = new Date();
          this.actions = [];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
          this.events = [];
          this.activeDayIsOpen = true;
        }

        _createClass(AttendancPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.asss = "asdf";
            this.calc = 1;
            this.token = localStorage.getItem("pas_tok");
            console.log("afs");
            this.get_absent(); //this.generalts.gen_loading();

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
            var _this = this;

            // const load = await this.generalts.loading("Loading ...");
            // await load.present();
            var date = new Date();
            var dateFormat = this.datepipe.transform(date, "yyyy-MM-dd");
            var stud = localStorage.getItem("c_stud");
            var data = ""; //this.dateMulti = [];
            // setTimeout(() => {
            // var link = "student/" + stud + "/absent-info?from=2018-06-01&to=" + dateFormat;

            var link = "student/" + stud + "/get-class-guide-attendance";
            console.log(link, "link");
            this.lyt = false; // const load = await this.generalts.loading("Loading ...");
            // await load.present();

            this.auth.g_get(data, link, this.token).subscribe(function (absent) {
              _this.lyt = true;
              _this.isError = false; // load.dismiss();

              console.log(absent.attendance['absent_dates_for_api'].split(","));
              _this.absentData = absent.attendance['absent_dates_for_api'].split(",");

              _this.absentData.forEach(function (val) {
                console.log(val);

                _this.events.push({
                  start: (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(val)), 0),
                  //  end: addDays(new Date(), 1),
                  title: 'absent',
                  color: colors.blue,
                  actions: _this.actions,
                  allDay: true,
                  resizable: {
                    beforeStart: false,
                    afterEnd: false
                  },
                  draggable: false
                });
              });

              console.log(_this.events, _this.dateMulti, "55555");
              return _this.events;
            }, function (error) {
              // load.dismiss();
              console.error("Error!", error.status_code, error.message);

              if (error.status == 401) {
                _this.auth.loginAgain(); //this.router.navigateByUrl('/login');

              } else if (error.status_code == 400) {
                _this.err = error.message;
                _this.isError = true;
              }
            }); // }, 500);
          } ////////////calender

        }, {
          key: "dayClicked",
          value: function dayClicked(_ref) {
            var date = _ref.date,
                events = _ref.events;

            if ((0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(date, this.viewDate)) {
              if ((0, date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
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
              start: (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()),
              end: (0, date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date()),
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
          value: function closeOpenMonthViewDay() {
            this.activeDayIsOpen = false;
          }
        }]);

        return AttendancPage;
      }();

      _AttendancPage.ctorParameters = function () {
        return [{
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }];
      };

      _AttendancPage.propDecorators = {
        modalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
          args: ["modalContent", {
            "static": true
          }]
        }]
      };
      _AttendancPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: "app-attendanc",
        template: _raw_loader_attendanc_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [{
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarDateFormatter,
          useClass: _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CustomDateFormatter
        }],
        styles: [_attendanc_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AttendancPage);
      /***/
    },

    /***/
    94190:
    /*!****************************************************!*\
      !*** ./src/app/proj/attendanc/attendanc.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-clder {\n  background-color: white !important;\n  color: #d81d1d !important;\n}\n\n.abscent {\n  background: #222428;\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  border-radius: 30px;\n  margin-right: 5px;\n  position: relative;\n  top: 2px;\n}\n\n.holiday {\n  color: #fef5ff !important;\n  background-color: #c74c4e !important;\n}\n\nion-calendar .unavailableDay {\n  background-color: #f70e0e !important;\n}\n\nion-calendar .unavailableDay p {\n  color: white !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #746d6d;\n}\n\n.tabl ion-col {\n  border: 1px solid #746d6d;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #ae5c50;\n}\n\nion-grid {\n  padding: 0 5px !important;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.actived_Date .cal-month-view .cal-cell-top {\n  background-color: red;\n}\n\n.abst_list ion-row:last-child {\n  border-bottom: 1px solid #746d6d;\n}\n\n.a_list ion-row:first-child {\n  border-top: 1px solid #746d6d;\n}\n\n.no_data {\n  border-bottom: 1px solid #746d6d;\n}\n\n.sms_c {\n  position: absolute;\n  left: 20px;\n  color: white;\n  background: #b94a48;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 1.5;\n  font-size: 12px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBRUY7O0FBRUU7RUFDRSxvQ0FBQTtBQUNKOztBQUFJO0VBQ0UsdUJBQUE7QUFFTjs7QUFHRTtFQUNFLCtCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBQ0U7RUFDRSxhQUFBO0FBQ0o7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQU9BO0VBQ0UsZ0NBQUE7QUFKRjs7QUFPQTtFQUNFLDZCQUFBO0FBSkY7O0FBTUE7RUFDRSxnQ0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEYiLCJmaWxlIjoiYXR0ZW5kYW5jLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY2xkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDIxNiwgMjksIDI5KSAhaW1wb3J0YW50O1xufVxuLmFic2NlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyNDI4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuXG4uaG9saWRheSB7XG4gIGNvbG9yOiByZ2IoMjU0LCAyNDUsIDI1NSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3NGM0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FsZW5kYXIge1xuICAudW5hdmFpbGFibGVEYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzBlMGUgIWltcG9ydGFudDtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLnRhYmwge1xuICBpb24tcm93IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzQ2ZDZkO1xuICB9XG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NDZkNmQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogaW5oZXJpdDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbmlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGNvbG9yOiAjYWU1YzUwO1xuICB9XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTYsIDEwOSwgMTA5KTtcbn1cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbiAgcCB7XG4gICAgbWFyZ2luOiAxcHggMDtcbiAgfVxufVxuXG4uYWN0aXZlZF9EYXRlIHtcbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC10b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxufVxuLy8gaW9uLXJvdzpudGgtbGFzdC1jaGlsZCgyKSB7XG4vLyAgIGJhY2tncm91bmQ6IHJlZDtcbi8vIH1cbi5hYnN0X2xpc3QgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NDZkNmQ7XG59XG5cbi5hX2xpc3QgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzQ2ZDZkO1xufVxuLm5vX2RhdGEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc0NmQ2ZDtcbn1cblxuLnNtc19jIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNiOTRhNDg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    58542:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/attendanc/attendanc.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Attendance</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-calendar\n    [(ngModel)]=\"dateMulti\"\n    [options]=\"optionsMulti\"\n    [format]=\"'YYYY-MM-DD'\"\n    (onChange)=\"onSelect($event)\"\n    [readonly]=\"true\"\n  >\n   \n  </ion-calendar>\n  \n  (click)=\"onSelect($event)\" -->\n\n  <!-- <ion-calendar\n    *ngIf=\"calc==0\"\n    [(ngModel)]=\"dateMulti\"\n    class=\"ion-clder\"\n    [type]=\"string\"\n    [readonly]=\"false\"\n    [options]=\"optionsMulti\"\n    (select)=\"onSelect($event)\"\n    [format]=\"'YYYY-MM-DD'\"\n    (monthChange)=\"monthchnge($event)\"\n  >\n  </ion-calendar> -->\n  <!-- (monthChange)=\"monthchnge($event)\" -->\n\n  <!-- <div style=\"margin-top: 10px;text-align: center;\" *ngIf=\"calc==0\">\n    <p><span class=\"abscent\"></span>Absent days</p>\n  </div> -->\n  <!-- <div *ngFor=\"let abst of absentData\">\n    <ion-card>\n      {{abst.subjec}}\n    </ion-card>\n  </div> -->\n  <!-- \n  <div *ngFor=\"let absent of absentData\">\n    <div *ngFor=\"let a of absent\">\n      <div *ngFor=\"let b of a\">\n        {{b | json}}\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div *ngIf=\"calc==2\">\n    <div *ngIf=\"clicked_Date\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\"><p>Hours</p> </ion-col>\n          <ion-col size=\"9\"><p>Subject</p> </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            *ngIf=\"[undefined,'',null].indexOf(absentDetails)>-1\"\n            ><span style=\"color: red;\">No Data Found</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngFor=\"let item of absentDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\"><p>{{item.lecture_hour}}</p> </ion-col>\n            <ion-col size=\"9\"><p>{{item.subject_name}}</p> </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div *ngIf=\"calc==0\">\n    {{currentMonth.months}}\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\"><p>Class</p> </ion-col>\n        <ion-col size=\"4\"><p>Date</p> </ion-col>\n        <ion-col size=\"6\"><p>Subject</p> </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngIf=\"clicked_Date\">\n      <div *ngFor=\"let absent of absentData\">\n        <div *ngFor=\"let item of absent | keyvalue\">\n          <div *ngFor=\"let data of item.value\">\n            <ion-grid *ngIf=\"absent.month == currentMonth\">\n              <ion-row>\n                <ion-col size=\"2\" style=\"text-align: center;\">\n                  {{data['lecture_hour']}}\n                </ion-col>\n\n                <ion-col size=\"4\">\n                  {{item.key | date:'dd-LL-yyyy'}}\n                </ion-col>\n\n                <ion-col size=\"6\" style=\"overflow: scroll;\">\n                  {{data['subject_name']}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    \n  </div> -->\n\n  <!-- <div\n    style=\"margin-top: 15px;text-align: right;margin-right: 30px;\"\n    class=\"btn btn-outline-secondary\"\n    mwlCalendarToday\n    [(viewDate)]=\"viewDate\"\n  >\n    Today\n  </div> -->\n\n  <div *ngIf=\"!isError\">\n    <ion-grid>\n      <ion-row style=\"margin-top: 25px;\">\n        <ion-col size=\"3\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"closeOpenMonthViewDay()\" style=\"padding: 15px 0px 9px 6px;\"\n          >\n            <ion-icon name=\"arrow-back-circle\"></ion-icon></div\n        ></ion-col>\n  \n        <ion-col size=\"6\">\n          <h3 no-margin>\n            {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\n          </h3>\n        </ion-col>\n  \n        <ion-col size=\"3\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"closeOpenMonthViewDay()\"\n            style=\"padding: 15px 0px 9px 6px;\"\n          >\n            <ion-icon name=\"arrow-forward-circle\"></ion-icon></div\n        ></ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"row ion-text-center\"></div>\n    <br />\n    <div [ngSwitch]=\"view\" class=\"ion-padding\" *ngIf=\"lyt\">\n      <mwl-calendar-month-view\n      \n        *ngSwitchCase=\"CalendarView.Month\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        class=\"da cl\"\n        [refresh]=\"refresh\"\n        [activeDayIsOpen]=\"activeDayIsOpen\"\n        (dayClicked)=\"dayClicked($event.day)\"\n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n        (eventTimesChanged)=\"eventTimesChanged($event)\"\n      >\n      </mwl-calendar-month-view>\n    </div>\n  \n    <div style=\"padding-left: 20px;\">\n      <span class=\"sms_c\"></span>\n      <p style=\"font-size: 15px; margin-left: 25px;\">  - Absent</p>\n      \n    </div>\n   </div>\n \n  <ion-card *ngIf=\"isError\" style=\"text-align: center;color: #000;margin: 15px;\">\n\n    <!-- {{ circularData.data.length|json}} -->\n\n    <h3>{{err}}</h3>\n\n    <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n  </ion-card>\n\n  <!-- <div style=\"margin-top: 10px;text-align: center;\" *ngIf=\"calc==0\">\n    <p><span class=\"abscent\"></span>Absent days</p>\n  </div>\n\n  <div class=\"\">\n    <div *ngIf=\"clicked_Date\">\n      <ion-grid class=\"tabl\">\n        <ion-row class=\"a_list\">\n          <ion-col size=\"2\"><p>Hour</p> </ion-col>\n          <ion-col size=\"10\"><p>Subject</p> </ion-col>\n          <ion-col size=\"4\"><p>Lecturer</p> </ion-col> \n        </ion-row>\n        <ion-row class=\"no_data\">\n          <ion-col\n            size=\"12\"\n            *ngIf=\"[undefined,'',null].indexOf(absentDetails)>-1\"\n            ><span style=\"color: red;\">No Data Found</span>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"abst_list\" *ngFor=\"let item of absentDetails\">\n          <ion-row>\n            <ion-col size=\"2\"><p>{{item.lecture_hour}}</p> </ion-col>\n            <ion-col size=\"10\"><p>{{item.subject_name}}</p> </ion-col>\n            <ion-col size=\"4\"><p>{{item.lecturer}}</p> </ion-col> \n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n  </div> -->\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Previous\n        </div></ion-col\n      >\n\n      <ion-col size=\"4\">\n        <div\n          class=\"btn btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\"\n        >\n          Today\n        </div></ion-col\n      >\n\n      <ion-col size=\"4\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Next\n        </div></ion-col\n      >\n      \n    </ion-row>\n  </ion-grid> -->\n\n  <!-- <ion-col size=\"12\" class=\"ion-text-center\"\n        ><h3>\n          {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\n        </h3></ion-col\n      > -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_attendanc_attendanc_module_ts-es5.js.map