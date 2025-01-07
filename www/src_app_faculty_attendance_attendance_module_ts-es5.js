(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_attendance_attendance_module_ts"], {
    /***/
    61017:
    /*!*****************************************************************!*\
      !*** ./src/app/faculty/attendance/attendance-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancePageRoutingModule": function AttendancePageRoutingModule() {
          return (
            /* binding */
            _AttendancePageRoutingModule
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


      var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendance.page */
      84824);

      var routes = [{
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
      }];

      var _AttendancePageRoutingModule = /*#__PURE__*/_createClass(function AttendancePageRoutingModule() {
        _classCallCheck(this, AttendancePageRoutingModule);
      });

      _AttendancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AttendancePageRoutingModule);
      /***/
    },

    /***/
    47068:
    /*!*********************************************************!*\
      !*** ./src/app/faculty/attendance/attendance.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancePageModule": function AttendancePageModule() {
          return (
            /* binding */
            _AttendancePageModule
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


      var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendance-routing.module */
      61017);
      /* harmony import */


      var _attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendance.page */
      84824);

      var _AttendancePageModule = /*#__PURE__*/_createClass(function AttendancePageModule() {
        _classCallCheck(this, AttendancePageModule);
      });

      _AttendancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendancePageRoutingModule],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_1__.AttendancePage]
      })], _AttendancePageModule);
      /***/
    },

    /***/
    84824:
    /*!*******************************************************!*\
      !*** ./src/app/faculty/attendance/attendance.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancePage": function AttendancePage() {
          return (
            /* binding */
            _AttendancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./attendance.page.html */
      43799);
      /* harmony import */


      var _attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendance.page.scss */
      56994);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var Port = /*#__PURE__*/_createClass(function Port() {
        _classCallCheck(this, Port);
      });

      var _AttendancePage = /*#__PURE__*/function () {
        function AttendancePage(route, router, authService, general, toastController, datePipe) {
          var _this = this;

          _classCallCheck(this, AttendancePage);

          this.route = route;
          this.router = router;
          this.authService = authService;
          this.general = general;
          this.toastController = toastController;
          this.datePipe = datePipe;
          this.arr = [];
          this.interval = [];
          this.interval_name = '';
          this.interval_list = [];
          this.disabled = false;
          this.fromDate = new Date(new Date().setDate(new Date().getDate() - 4)).toISOString();
          this.displayFac = false;
          this.progressShow = false;
          this.TakenAttdance = [];
          this.attndDate = new Date().toISOString();
          this.setDate = new Date().toISOString();
          this.leacturHour = [];
          this.TotalHour = [];
          this.totalHour = 1;
          this.totHour = 1;
          this.showTot = true;
          this.hide = true;
          this.getStudentList = [];
          this.PushAbsent = [];
          this.pushEnable = true;
          this.realoadAbsent = [];
          this.trackAbsent = [];
          this.reload_student = [];
          this.ShowProgrs = true;
          this.err = '';
          this.Sub_type = {
            subject_type: "",
            id: "" // faculty_division_allocation_id

          };
          this.SaveAttadance = {
            presentStudents: [],
            absentees: [],
            attendanceEntry: {
              date: "",
              interval: ""
            },
            attendanceClass: {
              institution_id: "",
              academic_year_id: "",
              attendance_entry: ""
            },
            lateComers: [],
            classType: null,
            absentReasons: {}
          };
          this.UpdateData = {
            progressHur: "",
            Date: "",
            interval: ""
          };
          this.UpdateAttdance = {
            presentStudents: [],
            absentees: [],
            attendanceEntry: {
              date: "",
              interval: ""
            },
            attendanceClass: {
              institution_id: "",
              academic_year_id: "",
              attendance_entry: ""
            },
            lateComers: [],
            classType: null,
            absentReasons: {}
          };
          this.getAbsenties = {
            subject_type: "",
            attendance_id: ""
          }; // Jayashri.B

          this.getPresent = {
            subject_type: "",
            attendance_id: ""
          };
          this.classAny = "";
          this.subName = "";
          this.facData = JSON.parse(localStorage.getItem('myParam'));
          this.Sub_type.subject_type = this.facData.subject_type;
          this.Sub_type.id = this.facData.id; //console.log(this.f.class, 'sf');

          if (this.facData) this.displayFac = true;else this.displayFac = false;
          this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['s'];
          }); // console.log(this.sub);
          //this.FindUser();

          this.err = '';
        }

        _createClass(AttendancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.token = localStorage.getItem("pas_faculty"); // console.log(this.fromDate, 'sds')

            this.getInterval();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.classAny = "";
            this.subName = "";
            this.facData = JSON.parse(localStorage.getItem('myParam'));
            this.fromDate = new Date(this.facData.attendance_start_date).toISOString();
            console.log(this.facData, 'fsd');
            var setdate = this.datePipe.transform(this.setDate, 'yyyy-MM-dd');

            if (setdate >= this.facData.attendance_last_date) {
              this.setDate = new Date(new Date(this.facData.attendance_last_date).setDate(new Date(this.facData.attendance_last_date).getDate() - 1)).toISOString();
              this.attndDate = this.setDate;
            }

            setTimeout(function () {
              _this2.displayList();

              _this2.progressShow = true;
              _this2.displayFac = true;
            }, 100); // this.sub = this.route.params.subscribe(params => {
            //   this.id = params['s']; 
            // });
            //this.FindUser();

            this.load_studentList(); // console.log(this.facData, 'Data');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_faculty");
            this.load_studentList();
          }
          /**** Interval Deatils ****/

        }, {
          key: "getInterval",
          value: function getInterval() {
            var _this3 = this;

            this.general.loadingPresent();
            this.authService.get_fac_t("teaching-staff/class-guide-attendance/intervals", this.token).subscribe(function (data) {
              console.log(data[0]);

              if (data.length != 0) {
                _this3.interval = data;
                _this3.inrval = data[0].id;
                _this3.interval_name = data[0].name;
              }

              _this3.general.loadingDismiss();
            });
          }
        }, {
          key: "intervalDetails",
          value: function intervalDetails(t) {
            console.log(this.inrval);
            var id = this.inrval;
            var interv = t.filter(function (intval) {
              return intval.id == id;
            });
            this.interval_name = interv[0].name;
            var i = this.interval_list.filter(function (v) {
              return v == id;
            });
            this.disabled = i.length != 0 ? true : false;
          }
          /*** End Interval ****/

          /**** New Attendace ****/

        }, {
          key: "GetNewAttdance",
          value: function GetNewAttdance() {
            if (this.getStudentList.length <= 0) {
              this.resentToast('No student are assigned.');
            } else {
              this.hide = false;
              this.displyDate = this.attndDate.split('T')[0];
              this.update = false;
              this.saveBtn = true;
              this.ShowProgrs = true; // setTimeout(() => {
              //   this.virtual = true;  
              // }, 100);

              this.load_studentList();
            }
          }
          /*** End New Attendace*/

          /***** Student List ****/

        }, {
          key: "load_studentList",
          value: function load_studentList() {
            var _this4 = this;

            this.getStudentList = [];
            this.PushAbsent = [];
            this.realoadAbsent = [];
            this.reload_student = [];
            var date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
            var page = "teaching-staff/class-guide-attendance/faculty-assigned-students?course_id=".concat(this.facData.course_id, "&batch_id=").concat(this.facData.batch_id, "&institution_id=").concat(this.facData.institution_id, "&date=").concat(date, "&filter_for_students=").concat(this.facData.filter_for_students); // let item = {
            //   "course_id" : this.facData.course_id, 
            //   "batch_id" : this.facData.batch_id, 
            //   "institution_id" : this.facData.institution_id, 
            //   "date" : date
            // }

            this.authService.get_fac_t(page, this.token).subscribe(function (data) {
              console.log(data, 'ashok');
              _this4.studentList = data;
              _this4.reload_student = _this4.studentList;
              _this4.getStudentList = data;
              _this4.ShowProgrs = false;
            }, function (err) {
              if (err.status == 401 || err.status == 422 || err.status == 0) {
                if (err.statusText == "Unauthorized") {
                  _this4.general.loginAgain();

                  _this4.router.navigateByUrl('/login');
                }
              }
            });
          }
          /***** End Student List *****/

          /***** Attedance List *****/

        }, {
          key: "displayList",
          value: function displayList() {
            var _this5 = this;

            this.TakenAttdance = [];
            this.Show_Lhour = false;
            console.log(this.datePipe.transform(this.attndDate, 'yyyy/MM/dd'));
            moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
            var date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
            var page = "teaching-staff/class-guide-attendance/faculty-attendances?course_id=".concat(this.facData.course_id, "&batch_id=").concat(this.facData.batch_id, "&institution_id=").concat(this.facData.institution_id, "&date=").concat(date, "&year_id=").concat(this.facData.year_id, "&academic_year_id=").concat(this.facData.academic_year_id); // let item ={
            //   "institution_id" : this.facData.institution_id, 
            //   "year_id" : this.facData.year_id, 
            //   "academic_year_id" : this.facData.academic_year_id, 
            //   "course_id" :this.facData.course_id, 
            //   "batch_id" : this.facData.batch_id, 
            //   "date" : this.datePipe.transform(this.attndDate, 'yyyy/MM/dd')
            // }

            var i = [];
            this.authService.get_fac_t(page, this.token).subscribe(function (data) {
              console.log(data);
              _this5.TakenAttdance = data.facultyAttendanceArray;
              _this5.facId = data.facultyId;
              _this5.PHour = data.progressiveHour;

              _this5.TakenAttdance.forEach(function (val) {
                i.push(val.interval_id);
              });

              console.log(_this5.PHour);
              _this5.interval_list = i;
              console.log(_this5.interval_list);
              var id = _this5.inrval;

              var c = _this5.interval_list.filter(function (v) {
                return v == id;
              });

              _this5.disabled = c.length != 0 ? true : false;
            }, function (err) {
              if (err.status === 401 || err.status === 422) {
                _this5.general.loginAgain();

                _this5.router.navigateByUrl('/login');
              }
            });
          } // ************  Method for get User Detail *************

        }, {
          key: "FindUser",
          value: function FindUser() {
            var _this6 = this;

            this.authService.g_postt_fac('item', 'me', this.token).subscribe(function (data) {
              var response = data;
              _this6.Name = response.name;
              console.log(response, 'me Data');
            });
          } //Alert Message

        }, {
          key: "resentToast",
          value: function resentToast(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: data,
                      duration: 3000
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
          } // *************** back button handler **************

        }, {
          key: "back",
          value: function back() {
            var _this$getStudentList, _this$reload_student;

            this.hide = true; // this.check2 = false;
            // this.chec = false;

            console.log(this.getStudentList.length, 'hi'); // if(this.getStudentList.length == 0) {
            // }

            (_this$getStudentList = this.getStudentList).push.apply(_this$getStudentList, _toConsumableArray(this.PushAbsent));

            (_this$reload_student = this.reload_student).push.apply(_this$reload_student, _toConsumableArray(this.PushAbsent));

            this.getStudentList.sort(function (a, b) {
              // return a.roll_no -b.roll_no;
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.reload_student.sort(function (a, b) {
              // return a.roll_no-b.roll_no; 
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.PushAbsent = [];
            this.realoadAbsent = [];
          } // ********* Method for add absent *************

        }, {
          key: "pushAbsent",
          value: function pushAbsent(s, i) {
            this.PushAbsent.length; // console.log(i);
            // console.log(s, 'sds');
            // if(this.pushEnable){ 

            this.allow_pop = true;
            this.getStudentList.splice(i, 1); // } else {
            //   this.getStudentList.splice(i,1);
            //   this.reload_student.splice(i,1);
            // }

            this.realoadAbsent.unshift(s);
            this.PushAbsent.unshift(s);
            this.PushAbsent.sort(function (a, b) {
              // return a.roll_no -b.roll_no;
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.realoadAbsent.sort(function (a, b) {
              // return a.roll_no-b.roll_no; 
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.getStudentList.length;
            console.log(this.getStudentList.length);
          } //************ Method for add student to present List   */

        }, {
          key: "pushPresent",
          value: function pushPresent(s, b, indx) {
            console.log(b);
            console.log(this.getStudentList, 'before');

            if (this.pushEnable) {
              this.trackAbsent = [];
              this.allow_pop = false;
              this.PushAbsent.splice(indx, 1);
            } else {
              this.PushAbsent.splice(indx, 1);
              this.realoadAbsent.splice(indx, 1);
            }

            console.log(this.pushEnable);
            console.log(this.getStudentList.length);
            this.getStudentList.unshift(b); //this.reload_student.unshift(b);   

            this.getStudentList.sort(function (a, b) {
              // return a.roll_no -b.roll_no;
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            }); // this.reload_student.sort((a,b)=>{
            //   return a.roll_no -b.roll_no;
            // })

            this.getStudentList.length;
            console.log(this.getStudentList);
          } //******** Method for selecting all Student in present List ********
          // ********* called in checkbox **********

        }, {
          key: "selectAll",
          value: function selectAll(c) {
            if (c == true) {
              this.check2 = false;
            }
          } //******** Method for selecting all Student in Absent List ********
          // ********* called in checkbox **********

        }, {
          key: "selectAllabsent",
          value: function selectAllabsent(c) {
            if (c == true) {
              this.chec = false;
            }
          }
        }, {
          key: "pushAll",
          value: function pushAll() {
            var _this$PushAbsent, _this$realoadAbsent;

            (_this$PushAbsent = this.PushAbsent).push.apply(_this$PushAbsent, _toConsumableArray(this.getStudentList));

            (_this$realoadAbsent = this.realoadAbsent).push.apply(_this$realoadAbsent, _toConsumableArray(this.getStudentList));

            this.PushAbsent.sort(function (a, b) {
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.realoadAbsent.sort(function (a, b) {
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.getStudentList = [];
            this.reload_student = [];
            this.virtual = false;
            this.virtual2 = true;
            this.chec = false;
          }
        }, {
          key: "pushpresentAll",
          value: function pushpresentAll() {
            var _this$getStudentList2, _this$reload_student2;

            (_this$getStudentList2 = this.getStudentList).push.apply(_this$getStudentList2, _toConsumableArray(this.PushAbsent));

            (_this$reload_student2 = this.reload_student).push.apply(_this$reload_student2, _toConsumableArray(this.PushAbsent));

            this.getStudentList.sort(function (a, b) {
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.reload_student.sort(function (a, b) {
              // return a.roll_no-b.roll_no; 
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.PushAbsent = [];
            this.realoadAbsent = [];
            this.virtual = true;
            this.virtual2 = false;
            this.check2 = false;
          } // *************** method for reloading student after search fires **************

        }, {
          key: "IntiliazeItmes",
          value: function IntiliazeItmes() {
            var _this7 = this,
                _this$getStudentList3,
                _this$PushAbsent2;

            this.getStudentList = [];
            this.PushAbsent = [];
            var item;

            if (this.realoadAbsent.length > 0 && this.allow_pop) {
              this.realoadAbsent.map(function (item) {
                for (var i in _this7.reload_student) {
                  if (item.roll_no == _this7.reload_student[i].roll_no) {
                    var rr = _this7.reload_student.splice(i, 1);
                  } else {
                    console.log('no matching found');
                  }
                }
              });
            }

            if (this.reload_student.length > 0 && !this.allow_pop) {
              this.reload_student.map(function (item) {
                for (var i in _this7.realoadAbsent) {
                  if (item.roll_no == _this7.realoadAbsent[i].roll_no) {
                    var abst = _this7.realoadAbsent.splice(i, 1);

                    console.log('absent Found', abst);
                  } else {
                    console.log('No matching found in absent list');
                  }
                }
              });
            }

            (_this$getStudentList3 = this.getStudentList).push.apply(_this$getStudentList3, _toConsumableArray(this.reload_student));

            (_this$PushAbsent2 = this.PushAbsent).push.apply(_this$PushAbsent2, _toConsumableArray(this.realoadAbsent));

            this.getStudentList.sort(function (a, b) {
              // return a.roll_no -b.roll_no;
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            });
            this.PushAbsent.sort(function (a, b) {
              // return a.roll_no -b.roll_no;
              if (a.student_full_name < b.student_full_name) {
                return -1;
              }

              if (a.student_full_name > b.student_full_name) {
                return 1;
              }

              return 0;
            }); //return this.getStudentList || this.PushAbsent;
            //  console.log(this.getStudentList.length,'reload items len');
          } // ++++++++++++  Method for search student +++++++++++++

        }, {
          key: "getItems",
          value: function getItems(et) {
            //this.IntiliazeItmes;
            var val = et.target.value;

            if (val && val.trim() != '') {
              this.pushEnable = true;
              this.PushAbsent = this.PushAbsent.filter(function (item) {
                return item.student_name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
              this.getStudentList = this.getStudentList.filter(function (item) {
                return item.student_name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.content.scrollToTop(400);
              this.pushEnable = false; // this.getStudentList = this.getStudentList;
              //this.load_studentList()

              this.IntiliazeItmes();
            }
          } // ************ Method for saving attendance ***********

        }, {
          key: "Save",
          value: function Save() {
            var _this8 = this;

            this.chec = false;
            this.check2 = false;
            this.err = '';
            this.searchTerm = "";
            this.spinerShow = true;
            setTimeout(function () {
              _this8.spinerShow = false;
            }, 500);
            this.SaveAttadance.absentees = [];
            this.SaveAttadance.presentStudents = [];
            this.SaveAttadance.attendanceEntry.date = this.displyDate;
            this.SaveAttadance.attendanceEntry.interval = this.inrval;
            this.SaveAttadance.attendanceClass.institution_id = this.facData.institution_id;
            this.SaveAttadance.attendanceClass.academic_year_id = this.facData.academic_year_id;
            this.SaveAttadance.attendanceClass.attendance_entry = 'New';
            this.general.loadingPresent();
            setTimeout(function () {
              var _iterator = _createForOfIteratorHelper(_this8.getStudentList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;

                  // if(i.check == false){
                  _this8.SaveAttadance.presentStudents.push(i.id); // }

                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(_this8.PushAbsent),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _i = _step2.value;

                  // if(i.check == true){ 
                  _this8.SaveAttadance.absentees.push(_i.id); // }

                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _this8.openModel();
            }, 1000);
          } // ************ Method for confirm save attendance ***********

        }, {
          key: "confirmSave",
          value: function confirmSave() {
            var _this9 = this;

            console.log(this.SaveAttadance, 'save');
            this.general.loadingPresent();
            this.authService.g_postt_fac(this.SaveAttadance, "teaching-staff/class-guide-attendance/save-attendance", this.token).subscribe(function (data) {
              _this9.general.loadingDismiss();

              _this9.resentToast('Saved successfully.');

              _this9.closeModel();

              _this9.displayList();

              _this9.back();

              _this9.err = '';
            }, function (error) {
              _this9.err = error;

              _this9.general.loadingDismiss();

              if (error.status == 401) {
                _this9.authService.loginAgain();
              } else if (error.status == 400) {
                console.error("Error!", error.status_code, error.message);

                _this9.general.presentAlert_g(error.message);
              } else {
                console.log(error.message);

                _this9.general.presentAlert_g("Please check your Internet Connection");
              }
            });
          }
          /***** Created Attendance Display */

        }, {
          key: "UpdateAttd",
          value: function UpdateAttd(a) {
            var _this10 = this;

            console.log(a);
            this.UpdateData.progressHur = a.progressive_hour;
            this.UpdateData.interval = a.interval_name;
            this.UpdateData.Date = a.date;
            this.displyDate = a.date;
            this.PHour = a.progressive_hour;
            this.totHour = a.total_hours;
            this.inrval = a.interval_id;
            this.interval_name = a.interval_name;
            this.UpdateObj = a;
            this.update = true;
            this.ShowProgrs = true;
            this.saveBtn = false;
            this.virtual = false;
            this.virtual2 = false;
            var absentId;
            this.getStudentList = [];
            this.reload_student = [];
            this.realoadAbsent = [];
            this.PushAbsent = [];
            var showList = [];
            var rlo_a = [];
            var rlo_s = [];
            var date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
            var page1 = "teaching-staff/class-guide-attendance/faculty-assigned-students?course_id=".concat(this.facData.course_id, "&batch_id=").concat(this.facData.batch_id, "&institution_id=").concat(this.facData.institution_id, "&date=").concat(date, "&filter_for_students=").concat(this.facData.filter_for_students);
            this.general.loadingPresent();
            this.authService.get_fac_t(page1, this.token).subscribe(function (data) {
              console.log(data, 'Ashok');
              var element = data;
              element.forEach(function (element) {
                _this10.getStudentList.push({
                  id: element.id,
                  roll_no: element.roll_no,
                  student_name: element.student_name,
                  check: false
                });

                rlo_s.push({
                  id: element.id,
                  roll_no: element.roll_no,
                  student_name: element.student_name,
                  check: false
                });
              });
              /*** Absent Student Api ****/

              var page2 = "teaching-staff/class-guide-attendance/fetch-absentees?course_id=".concat(_this10.facData.course_id, "&batch_id=").concat(_this10.facData.batch_id, "&interval=").concat(_this10.inrval, "&date=").concat(date);

              _this10.authService.get_fac_t(page2, _this10.token).subscribe(function (data) {
                var elemtnt = data;
                absentId = data;
                console.log(absentId, 'hi');

                if (absentId.length == 0) {
                  showList.forEach(function (s) {
                    _this10.getStudentList.push({
                      id: s.id,
                      roll_no: s.roll_no,
                      student_name: s.student_name,
                      check: false
                    });

                    rlo_s.push({
                      id: s.id,
                      roll_no: s.roll_no,
                      student_name: s.student_name,
                      check: false
                    });
                    _this10.ShowProgrs = false;
                  });
                }

                for (var j in absentId) {
                  for (var i in _this10.getStudentList) {
                    if (_this10.getStudentList[i].id == absentId[j]) {
                      _this10.PushAbsent.push({
                        id: _this10.getStudentList[i].id,
                        student_name: _this10.getStudentList[i].student_name,
                        roll_no: _this10.getStudentList[i].roll_no,
                        check: true
                      });

                      rlo_a.push({
                        id: _this10.getStudentList[i].id,
                        student_name: _this10.getStudentList[i].student_name,
                        roll_no: _this10.getStudentList[i].roll_no,
                        check: true
                      });

                      _this10.getStudentList.splice(i, 1);

                      rlo_s.splice(i, 1);
                    }
                  }
                }

                _this10.reload_student = rlo_s;
                _this10.realoadAbsent = rlo_a;
                _this10.ShowProgrs = false;
                _this10.virtual = true;
                console.log(_this10.PushAbsent);
                _this10.virtual2 = true;
              });

              _this10.general.loadingDismiss();
            }, function (error) {
              _this10.err = error;

              _this10.general.loadingDismiss();

              if (error.status == 401) {
                _this10.authService.loginAgain(); //this.router.navigateByUrl('/login');

              } else if (error.status == 400) {
                console.error("Error!", error.status_code, error.message);

                _this10.general.presentAlert_g(error.message);
              } else {
                console.log(error.message);

                _this10.general.presentAlert_g("Please check your Internet Connection");
              }
            });
          } //  ****************** api call of  Update Attadance ******** 

        }, {
          key: "UpdateSave",
          value: function UpdateSave() {
            var _this11 = this;

            this.chec = false;
            this.check2 = false;
            this.spinerShow = true;
            this.searchTerm = "";
            console.log(this.UpdateObj);
            this.UpdateAttdance.absentees = [];
            this.UpdateAttdance.presentStudents = [];
            this.UpdateAttdance.attendanceEntry.date = this.UpdateObj.date;
            this.UpdateAttdance.attendanceEntry.interval = this.UpdateObj.interval_id;
            this.UpdateAttdance.attendanceClass.institution_id = this.facData.institution_id;
            this.UpdateAttdance.attendanceClass.academic_year_id = this.facData.academic_year_id;
            this.UpdateAttdance.attendanceClass.attendance_entry = 'Update';
            console.log(this.UpdateAttdance.attendanceEntry);
            this.general.loadingPresent();
            setTimeout(function () {
              var _iterator3 = _createForOfIteratorHelper(_this11.getStudentList),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var i = _step3.value;

                  _this11.UpdateAttdance.presentStudents.push(i.id);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var _iterator4 = _createForOfIteratorHelper(_this11.PushAbsent),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _i2 = _step4.value;

                  _this11.UpdateAttdance.absentees.push(_i2.id);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              _this11.openUpdtModel();

              _this11.refresh;
            }, 1000);
          } // ********** Method For Confrim update Attedance ***********

        }, {
          key: "confirmUpdate",
          value: function confirmUpdate() {
            var _this12 = this;

            console.log(this.UpdateAttdance, 'testig');
            this.general.loadingPresent();
            this.authService.g_postt_fac(this.UpdateAttdance, "teaching-staff/class-guide-attendance/save-attendance", this.token).subscribe(function (data) {
              _this12.resentToast('Updated successfully.');

              _this12.closeUpdteModel();

              _this12.displayList();

              _this12.back();

              _this12.UpdateAttdance.absentees = [];
              _this12.UpdateAttdance.presentStudents = [];

              _this12.general.loadingDismiss();
            }, function (error) {
              console.log(error);

              _this12.general.loadingDismiss();

              if (error.status == 401) {
                _this12.authService.loginAgain(); //this.router.navigateByUrl('/login');

              } else if (error.status == 400) {
                console.error("Error!", error.status_code, error.message);

                _this12.general.presentAlert_g(error.message);
              } else {
                console.log(error.message);

                _this12.general.presentAlert_g("Please check your Internet Connection");
              }
            });
          } // ********* Called in Menu Bar ****************

        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigateByUrl('/homee');
          } //******** open confrimation model ********

        }, {
          key: "openModel",
          value: function openModel() {
            this.modal = document.getElementById("myModal");
            this.modal.style.display = "block";
            this.general.loadingDismiss();
          }
        }, {
          key: "openUpdtModel",
          value: function openUpdtModel() {
            var _this13 = this;

            this.updateModel = document.getElementById("UpdateModel");
            this.updateModel.style.display = "block";
            setTimeout(function () {
              _this13.spinerShow = false;
            }, 500);
            this.general.loadingDismiss();
          } // *********** close saving Model **********

        }, {
          key: "closeModel",
          value: function closeModel() {
            this.modal.style.display = "none";
          } // ********** close Updating Model **********

        }, {
          key: "closeUpdteModel",
          value: function closeUpdteModel() {
            this.updateModel.style.display = "none";
          } // ********** Method for View Attedance Statement ***********

        }, {
          key: "ViewStatemnt",
          value: function ViewStatemnt() {
            var date = this.attndDate.split('T')[0];
            localStorage.setItem('sheet', JSON.stringify(this.facData));
            localStorage.setItem('date', JSON.stringify(date));
            this.router.navigate(['attendance-statement']);
          } // ************** Method for View Attedance Sheet ************

        }, {
          key: "ViewSheet",
          value: function ViewSheet() {
            this.router.navigate(['/view-attdance']);
          }
        }]);

        return AttendancePage;
      }();

      _AttendancePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
        }];
      };

      _AttendancePage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, {
            "static": false
          }]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['refresh', {
            "static": false
          }]
        }]
      };
      _AttendancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-attendance',
        template: _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AttendancePage);
      /***/
    },

    /***/
    56994:
    /*!*********************************************************!*\
      !*** ./src/app/faculty/attendance/attendance.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-row_up {\n  margin-top: 10px;\n}\n\n.span_line {\n  margin: 5px;\n  font-size: 13px;\n  margin-top: 60px;\n}\n\nion-item.pl-0.ion-untouched.ion-pristine.ion-valid.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated {\n  position: absolute;\n  bottom: -11px;\n}\n\nion-item.pl-0.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated.ion-valid.ion-touched.ion-dirty {\n  height: 6px;\n  position: relative;\n  top: -10px;\n}\n\n.lable_color {\n  color: black;\n}\n\nion-select.drop.select_width.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.md.hydrated {\n  width: 35% !important;\n}\n\n.span_bold {\n  font-weight: bold;\n}\n\nion-select.drop.md.hydrated {\n  width: 35%;\n  background: #ae5c50;\n  color: #fff;\n  padding: 5px 10px;\n  margin-top: 0px !important;\n  opacity: 1;\n  float: right;\n  height: 25px;\n  font-size: 13px;\n}\n\n.label_text {\n  padding: 5px 10px;\n  margin-top: 0px !important;\n  opacity: 1;\n  float: right;\n  height: 25px;\n  font-size: 13px;\n  color: #000000;\n}\n\n.abst {\n  display: inline;\n  list-style-type: none;\n}\n\n.abst:after {\n  content: \", \";\n}\n\n.abst:last-child:after {\n  content: \" \";\n}\n\n.align_view {\n  margin-left: 83px !important;\n}\n\n.align_view1 {\n  margin-left: 20px !important;\n}\n\n.blue-bg {\n  background: #fdd2d26e;\n  padding: 10px;\n}\n\n.save_btn {\n  text-align: center;\n  text-transform: none;\n  align-items: center;\n}\n\n.back-btn {\n  background: none;\n  color: var(--ion-color-dark-tint);\n  font-size: 12px;\n  padding: 5px 25px;\n  border: 1px solid var(--ion-color-medium-shade);\n}\n\n.save {\n  height: 75%;\n  margin: 0px;\n  font-size: 12px;\n  position: relative;\n  top: -5px;\n}\n\n.ion-col-p {\n  font-weight: bold;\n  font-size: 12px;\n  box-sizing: border-box;\n  min-width: 10px;\n  border-color: whitesmoke;\n  background-color: white;\n}\n\nion-col.ion-col-p.colpadding.md.hydrated {\n  padding: 8px;\n}\n\n.hour-col .ion-col-p {\n  font-weight: bold;\n  font-size: 12px;\n  background-color: white;\n  padding: 8px 8px;\n}\n\n.item2, .item1 {\n  overflow: scroll;\n  height: 42vh;\n}\n\n.item1 {\n  grid-area: 1/1/2/2;\n}\n\n.item-absent {\n  background: #fcf8e3;\n}\n\n.border {\n  border-bottom: 1px solid #8d8989;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 105%;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n\n.label_ion {\n  font-size: 12px;\n  white-space: normal;\n}\n\n.label_ion:hover {\n  background-color: red;\n}\n\n.label_ion:hover {\n  --background-color: rgb(228, 25, 25)!important;\n}\n\n.label_ion:hover {\n  background-color: #f02222 !important;\n}\n\n.togle_btn {\n  margin-top: -32px;\n  opacity: -0.9;\n  height: 3px;\n  width: 135px;\n}\n\n.hover_stud:hover {\n  background-color: grey !important;\n}\n\n.att ion-col {\n  border: 1px solid #7c7c7c;\n  font-size: 12px;\n  color: var(--ion-color-dark-tint);\n}\n\n.blue-bg1 {\n  font-weight: bold;\n}\n\n.row-text {\n  white-space: normal;\n  line-height: 15px;\n  font-size: 9px;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 90%;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 999;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n.modal-content ion-col {\n  margin-right: 3px;\n  margin-top: 3px;\n  background: #ffebeb6e;\n  color: #434344;\n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.align_btn {\n  margin-left: 35%;\n}\n\n.view_button {\n  font-size: 13px;\n  width: 100%;\n}\n\n.alert-success {\n  padding: 0.2em 0.5em;\n  background-color: #d6ffa2;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUdJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFPQTtFQUNDLGlCQUFBO0FBSkQ7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpKOztBQVFBO0VBQVEsZUFBQTtFQUFpQixxQkFBQTtBQUh6Qjs7QUFJQTtFQUFjLGFBQUE7QUFBZDs7QUFDQTtFQUF5QixZQUFBO0FBR3pCOztBQURBO0VBQ0ksNEJBQUE7QUFJSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBREE7RUFBUyxxQkFBQTtFQUFxQixhQUFBO0FBTTlCOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTEE7RUFBVSxnQkFBQTtFQUNOLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUFTSjs7QUFQQTtFQUFPLFdBQUE7RUFBYyxXQUFBO0VBQWMsZUFBQTtFQUFpQixrQkFBQTtFQUFxQixTQUFBO0FBZXpFOztBQWJBO0VBSUksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWFKOztBQVZBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWEE7RUFBUyxrQkFBQTtBQWVUOztBQWRBO0VBQ0ksbUJBQUE7QUFpQko7O0FBZEE7RUFDSSxnQ0FBQTtBQWlCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBaEJJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBa0JOOztBQWpCTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFtQlI7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBZkk7RUFDSSxxQkFBQTtBQWlCUjs7QUFkQTtFQUNJLDhDQUFBO0FBaUJKOztBQWZBO0VBQ0ksb0NBQUE7QUFrQko7O0FBZkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFmQTtFQUNJLGlDQUFBO0FBa0JKOztBQWRJO0VBQ0kseUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUNBQUE7QUFnQlI7O0FBYkE7RUFDSSxpQkFBQTtBQWdCSjs7QUFaQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZUo7O0FBWkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFlBQUE7RUFBYyxlQUFBO0VBQ2Qsa0JBQUE7RUFBb0Isd0JBQUE7RUFDcEIsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsb0NBQUE7RUFBbUMscUJBQUE7QUF5QnZDOztBQXZCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQTBCSjs7QUF4QkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTJCSjs7QUF6QkE7O0VBRUksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTRCSjs7QUExQkE7RUFDSSxnQkFBQTtBQTZCSjs7QUExQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQTZCSjs7QUEzQkE7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQThCSiIsImZpbGUiOiJhdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tcm93X3Vwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc3Bhbl9saW5le1xuICAgIC8vICAgcGFkZGluZzogMTBweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcblxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODAsIDExNywgMjQwKTtcbn1cblxuaW9uLWl0ZW0ucGwtMC5pb24tdW50b3VjaGVkLmlvbi1wcmlzdGluZS5pb24tdmFsaWQuaXRlbS5tZC5pb24tZm9jdXNhYmxlLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1kYXRldGltZS5pdGVtLWhhcy12YWx1ZS5oeWRyYXRlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTExcHg7XG5cbn1cbmlvbi1pdGVtLnBsLTAuaXRlbS5tZC5pb24tZm9jdXNhYmxlLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1kYXRldGltZS5pdGVtLWhhcy12YWx1ZS5oeWRyYXRlZC5pb24tdmFsaWQuaW9uLXRvdWNoZWQuaW9uLWRpcnR5IHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbn1cblxuLmxhYmxlX2NvbG9ye1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIC8vICBsZWZ0OjIwcHg7XG59XG5cbmlvbi1zZWxlY3QuZHJvcC5zZWxlY3Rfd2lkdGgubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi12YWxpZC5tZC5oeWRyYXRlZHtcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG4gICBcbn1cblxuLnNwYW5fYm9sZCB7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWxlY3QuZHJvcC5tZC5oeWRyYXRlZCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBiYWNrZ3JvdW5kOiAjYWU1YzUwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDsgXG4gICAgb3BhY2l0eToxO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubGFiZWxfdGV4dHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7IFxuICAgIG9wYWNpdHk6MTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuICAgICAgICAgICAgXG4uYWJzdCB7IGRpc3BsYXk6IGlubGluZTsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG4uYWJzdDphZnRlciB7IGNvbnRlbnQ6IFwiLCBcIjsgfVxuLmFic3Q6bGFzdC1jaGlsZDphZnRlciB7IGNvbnRlbnQ6IFwiIFwiOyB9XG5cbi5hbGlnbl92aWV3IHtcbiAgICBtYXJnaW4tbGVmdDogODNweCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ25fdmlldzEge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ibHVlLWJne2JhY2tncm91bmQ6I2ZkZDJkMjZlO3BhZGRpbmc6MTBweDt9XG4uc2F2ZV9idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuLmJhY2stYnRue2JhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5zYXZleyBoZWlnaHQ6IDc1JTsgIG1hcmdpbjogMHB4OyAgZm9udC1zaXplOiAxMnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7ICB0b3A6IC01cHg7fVxuXG4uaW9uLWNvbC1we1xuICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgLy8gbWFyZ2luOiA1cHg7XG4gICAgLy8gd2lkdGg6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29sLmlvbi1jb2wtcC5jb2xwYWRkaW5nLm1kLmh5ZHJhdGVkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4uaG91ci1jb2wgLmlvbi1jb2wtcHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XG59XG5cbi5pdGVtMiwuaXRlbTEge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA0MnZoO1xufVxuLml0ZW0xIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4uaXRlbS1hYnNlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmY2Y4ZTM7XG59XG5cbi5ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ4OTg5O1xufVxuXG4udGh1bW5haWxze1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLmxpc3QtdGh1bWJuYWlse1xuICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLmltZy10aHVtYntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjExLCAxMiwgMTIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgd2lkdGg6IDEwNSU7IFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjowIDJweCAwIDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICB9XG59XG5cbi5sYWJlbF9pb257XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgXG4gICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cbn1cbi5sYWJlbF9pb246aG92ZXJ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyNSwgMjUpIWltcG9ydGFudDtcbn1cbi5sYWJlbF9pb246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAzNCwgMzQpIWltcG9ydGFudDtcbn1cblxuLnRvZ2xlX2J0bntcbiAgICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgICBvcGFjaXR5OiAtMC45O1xuICAgIGhlaWdodDozcHg7XG4gICAgd2lkdGg6MTM1cHg7XG59XG5cbi5ob3Zlcl9zdHVkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleSFpbXBvcnRhbnQ7XG59XG5cbi5hdHR7IFxuICAgIGlvbi1jb2x7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDEyNCwgMTI0LCAxMjQpO1xuICAgICAgICAvLyBwYWRkaW5nOjhweDtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTsgIFxuICAgIH1cbn1cbi5ibHVlLWJnMXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucm93LXRleHR7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDlweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogOTAlO1xufVxuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDk5OTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4ubW9kYWwtY29udGVudCBpb24tY29seyBcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZWJlYjZlO1xuICAgIGNvbG9yOiAjNDM0MzQ0O1xufVxuLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsaWduX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxuLnZpZXdfYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYWxlcnQtc3VjY2VzcyB7XG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjU1LCAxNjIpO1xuICAgIG1hcmdpbjogMTBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    43799:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/attendance/attendance.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"class-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Attendance</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" size=\"small\" class=\"view_button\" (click)=\"ViewSheet()\" color=\"tertiary\">\n          View Sheet\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" size=\"small\" class=\"view_button\" (click)=\"ViewStatemnt()\" color=\"tertiary\">\n          View Statement\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <span *ngIf=\"displayFac\">\n    <ion-row class=\"ion-row_up\">\n      <ion-col size=\"7\">\n        <span class=\"span_line\"><span class=\"span_bold\">Class:</span> {{facData.class}}</span>\n      </ion-col>\n      <ion-col>\n        <span class=\"span_line\"> <span class=\"span_bold\">Batch:</span> {{facData.batch}}</span>\n      </ion-col>\n    </ion-row>\n  </span>\n  <!-- Card Format --->\n  <span *ngIf=\"hide\">\n    <ion-card padding class=\"card_hour\">\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\">Progressive Peroid</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"label_text\"> {{PHour}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\"> Date</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-datetime \n          style=\"background: #ae5c50;\n                color: #fff;\n                padding: 5px 10px;\n                margin-top: 0px !important;\n                opacity: 1;\n                float: right;\n                height: 25px;\n                font-size: 13px;\n                width:72%;\" display-format=\"DD MMM YYYY\"\n            (ionChange)=\"displayList()\" min=\"{{fromDate}}\" max=\"{{setDate}}\" [(ngModel)]=\"attndDate\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"pl-0\">\n          <ion-label class=\"lable_color span_bold\">Interval</ion-label>\n          <ion-select [(ngModel)]=\"inrval\" interface=\"popover\" class=\"drop select_width\"\n          (ionChange)=\"intervalDetails(interval)\"\n          *ngIf=\"showTot\">\n\n            <ion-select-option *ngFor=\"let t of interval\" selected=\"t.id == inrval\" [value]=\"t.id\"\n              class=\"selecte_option\">{{t.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row class=\"blue-bg\">\n            <ion-col size=\"4\"></ion-col>\n            <ion-col size=\"5\">\n              <ion-button class=\"mt-0\" [disabled]=\"disabled\" tappable shape=\"round\" size=\"small\" fill=\"outline\"\n                (click)=\"GetNewAttdance()\" color=\"tertiary\" >Continue</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <div class=\"alert-success\">\n      <p style=\"text-align: center;\">Summary of Attendance Entered on ({{attndDate|date: 'dd/MM/yyyy'}})</p>\n    </div>\n    <!----List Of Attendances -->\n    <div class=\"thumnails\">\n      <div class=\"list-thumbnail\">\n        <div class=\"img-thumb\">\n          <ion-grid>\n            <ion-row class=\"blue-bg1 row-text att\">\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                Progressive Peroid\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                Interval\n              </ion-col>\n              <!-- <ion-col size=\"2\" class=\"ion-text-center\">\n                Teacher\n              </ion-col> -->\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                Created\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                Last Updated\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                Action\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let a of TakenAttdance\" class=\"att row-text\">\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                {{a.progressive_hour}}\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                {{a.interval_name}}\n              </ion-col>\n              <!-- <ion-col size=\"2\" class=\"ion-text-center\">\n                {{a.faculty_name}}\n              </ion-col> -->\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                {{a.created_at | date: \"d-MMM, h:mm a\"}}\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                {{a.updated_at | date: \"d-MMM, h:mm a\"}}\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                <ion-button [disabled]=\"a.faculty_id!=facId\" size=\"small\" (click)=\"hide=false;UpdateAttd(a)\"\n                  color=\"tertiary\">\n                  <ion-icon name=\"add-circle-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n    <!--- End List Of Attendances -->\n  </span>\n\n  <!----- Attedance Student Select Page ---->\n  <span *ngIf=\"!hide\">\n    <ion-card padding class=\"card_hour\">\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\">Progressive Peroid</ion-label>\n        </ion-col>\n        <ion-col class=\"label_text\">{{PHour}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\"> Date</ion-label>\n        </ion-col>\n        <ion-col class=\"label_text\"> {{displyDate|date: 'dd/MM/yyyy'}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\"> Interval </ion-label>\n        </ion-col>\n        <ion-col class=\"label_text\">{{interval_name}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"save_btn blue-bg\">\n          <ion-chip class=\"back-btn\" (click)=\"back()\">\n            <ion-label>Back</ion-label>\n          </ion-chip>\n          <ion-button *ngIf=\"saveBtn\" class=\"save\" shape=\"round\" (click)=\"Save()\" color=\"tertiary\">Save</ion-button>\n          <ion-button shape=\"round\" *ngIf=\"update\" class=\"save\" (click)=\"UpdateSave()\" color=\"tertiary\">Update\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-toolbar class=\"search\">\n          <ion-searchbar class=\"search-col\" [(ngModel)]=\"searchTerm\" (ionInput)=\"getItems($event)\" color=\"primary\"\n            debounce=\"500\"  ></ion-searchbar>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col class=\"ion-col-p colpadding\">\n            <ion-checkbox [(ngModel)]=\"chec\" (ionChange)=\"selectAll(chec)\"></ion-checkbox> Students\n            &nbsp;&nbsp;&nbsp;{{getStudentList?.length}} entries\n            <div class=\"item1\">\n              <div class=\"thumnails\">\n                <div class=\"list-thumnail\">\n                  <ion-progress-bar *ngIf=\"ShowProgrs\" type=\"indeterminate\"></ion-progress-bar>\n                </div>\n                <ion-list>\n                  <ion-grid *ngFor=\"let s of getStudentList; let i = index;\" class=\"animated lightSpeedIn item-wrap\">\n                    <ion-row class=\"border\">\n                      <ion-col size=\"12\">\n                        <ion-checkbox *ngIf=\"chec\" disabled=\"true\" checked=\"true\"></ion-checkbox>\n                        <ion-label class=\"label_ion\" (click)=\"pushAbsent(s,i)\">{{s.student_name}}</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-list>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-col-p colpadding\">\n            <ion-checkbox [(ngModel)]=\"check2\" (ionChange)=\"selectAllabsent(check2)\"></ion-checkbox> Absentees &nbsp;\n            {{PushAbsent.length}} entries\n            <div class=\"item1 item-absent\">\n              <div class=\"thumnails\">\n                <div class=\"list-thumnail\">\n                  <ion-progress-bar *ngIf=\"ShowProgrs\" type=\"indeterminate\"></ion-progress-bar>\n                  <ion-grid class=\"animated lightSpeedIn item-wrap\" *ngFor=\"let s of PushAbsent;let i =index;\">\n                    <ion-row class=\"hover_stud border\">\n                      <ion-col size=\"12\">\n                        <ion-checkbox *ngIf=\"check2\" disabled=\"true\" checked=\"true\"></ion-checkbox>\n                        <ion-label class=\"label_ion\" (click)=\"pushPresent(s.check,s,i)\">{{s.student_name}}</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n            </div>\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n              <ion-fab-button>\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-fab *ngIf=\"chec\" (click)=\"pushAll()\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button>\n         <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab *ngIf=\"check2\" (click)=\"pushpresentAll()\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button>\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </span>\n\n  <div id=\"myModal\" class=\"modal\">\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span (click)=\"closeModel()\" class=\"close\">&times;</span>\n      <h6>ATTENDANCE SUMMARY</h6>\n      <span style=\"color: red;\">{{err}}</span>\n      <!-- <ion-row>\n        <ion-col>\n          <strong>Description</strong>\n        </ion-col>\n        <ion-col>\n          <strong>Details</strong>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>Class</ion-col>\n        <ion-col>{{facData?.class}}  {{facData?.batch}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Progressive Peroid</ion-col>\n        <ion-col>{{PHour}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Attendance Date</ion-col>\n        <ion-col>{{attndDate | date: 'dd/MM/yyyy'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Interval</ion-col>\n        <ion-col>{{interval_name}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Total No of Absentees</ion-col>\n        <ion-col>{{PushAbsent.length}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Absentees</ion-col>\n        <ion-col>\n          <ion-spinner *ngIf=\"spinerShow\" name=\"lines-small\"></ion-spinner>\n          <span *ngFor=\"let a of PushAbsent\" class=\"abst\">\n            {{a.roll_no}}\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"align_btn\" (click)=\"confirmSave()\" color=\"tertiary\">Confirm</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div id=\"UpdateModel\" class=\"modal\">\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span (click)=\"closeUpdteModel()\" class=\"close\">&times;</span>\n      <h6>ATTENDANCE SUMMARY</h6>\n      <!-- <ion-row>\n        <ion-col>\n          <strong> Description</strong>\n        </ion-col>\n        <ion-col>\n          <strong> Details</strong>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>Class</ion-col>\n        <ion-col>{{facData?.class}} {{facData?.batch}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Progressive Peroid</ion-col>\n        <ion-col>{{UpdateData.progressHur}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Attendance Date</ion-col>\n        <ion-col>{{UpdateData.Date | date: 'dd/MM/yyyy'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Interval</ion-col>\n        <ion-col>{{UpdateData.interval}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Total No of Absentees</ion-col>\n        <ion-col>{{PushAbsent.length}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Absentees</ion-col>\n        <ion-col>\n          <ion-spinner *ngIf=\"spinerShow\" name=\"lines-small\"></ion-spinner>\n          <span *ngFor=\"let a of PushAbsent\" class=\"abst\">\n            {{a?.roll_no}}\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"align_btn\" (click)=\"confirmUpdate()\" color=\"tertiary\">Confirm</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_attendance_attendance_module_ts-es5.js.map