(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_assignment-notices_assignment-notices_module_ts"], {
    /***/
    35977:
    /*!*********************************************************************************!*\
      !*** ./src/app/faculty/assignment-notices/assignment-notices-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignmentNoticesPageRoutingModule": function AssignmentNoticesPageRoutingModule() {
          return (
            /* binding */
            _AssignmentNoticesPageRoutingModule
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


      var _assignment_notices_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assignment-notices.page */
      64774);

      var routes = [{
        path: '',
        component: _assignment_notices_page__WEBPACK_IMPORTED_MODULE_0__.AssignmentNoticesPage
      }];

      var _AssignmentNoticesPageRoutingModule = /*#__PURE__*/_createClass(function AssignmentNoticesPageRoutingModule() {
        _classCallCheck(this, AssignmentNoticesPageRoutingModule);
      });

      _AssignmentNoticesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AssignmentNoticesPageRoutingModule);
      /***/
    },

    /***/
    15312:
    /*!*************************************************************************!*\
      !*** ./src/app/faculty/assignment-notices/assignment-notices.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignmentNoticesPageModule": function AssignmentNoticesPageModule() {
          return (
            /* binding */
            _AssignmentNoticesPageModule
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


      var _assignment_notices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assignment-notices-routing.module */
      35977);
      /* harmony import */


      var _assignment_notices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assignment-notices.page */
      64774);

      var _AssignmentNoticesPageModule = /*#__PURE__*/_createClass(function AssignmentNoticesPageModule() {
        _classCallCheck(this, AssignmentNoticesPageModule);
      });

      _AssignmentNoticesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _assignment_notices_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignmentNoticesPageRoutingModule],
        declarations: [_assignment_notices_page__WEBPACK_IMPORTED_MODULE_1__.AssignmentNoticesPage]
      })], _AssignmentNoticesPageModule);
      /***/
    },

    /***/
    64774:
    /*!***********************************************************************!*\
      !*** ./src/app/faculty/assignment-notices/assignment-notices.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignmentNoticesPage": function AssignmentNoticesPage() {
          return (
            /* binding */
            _AssignmentNoticesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_assignment_notices_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./assignment-notices.page.html */
      35474);
      /* harmony import */


      var _assignment_notices_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assignment-notices.page.scss */
      31468);
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

      var _AssignmentNoticesPage = /*#__PURE__*/function () {
        function AssignmentNoticesPage(route, router, authService, general, modalCtrl) {
          _classCallCheck(this, AssignmentNoticesPage);

          this.route = route;
          this.router = router;
          this.authService = authService;
          this.general = general;
          this.modalCtrl = modalCtrl;
          this.assignID = "";
          this.listData = [];
          this.academicYearId = "";
        }

        _createClass(AssignmentNoticesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_faculty");
            this.assignID = JSON.parse(this.route.snapshot.paramMap.get("data")).id;
            this.academicYearId = JSON.parse(this.route.snapshot.paramMap.get("data")).academic_year_id;
            console.log(JSON.parse(this.route.snapshot.paramMap.get("data")), "academicYearIdacademicYearId", this.academicYearId);
            this.LoadList();
          }
        }, {
          key: "edit",
          value: function edit(d) {
            this.router.navigate(["assignmentedit", {
              data: JSON.stringify(d),
              topic: "Edit Notices",
              facultyDivisionId: this.assignID,
              academicYearId: this.academicYearId
            }]);
          }
        }, {
          key: "create",
          value: function create() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    // let a = {
                    //       data: null,
                    //       topic: "Add Notices",
                    //       facultyDivisionId: this.assignID,
                    //       academicYearId: this.academicYearId,
                    //     };
                    // const modal = await this.modalCtrl.create({
                    //   component: AssignmenteditPage,
                    //   componentProps: { assignment: a }
                    // });
                    // return await modal.present();
                    this.router.navigate(["assignmentedit", {
                      data: null,
                      topic: "Add Notices",
                      facultyDivisionId: this.assignID,
                      academicYearId: this.academicYearId
                    }]);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(d) {}
        }, {
          key: "LoadList",
          value: function LoadList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this = this;

              var load, page;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.general.loading("Loading ...");

                  case 2:
                    load = _context2.sent;
                    load.present();
                    page = "teaching-staff/notices/get-notices?faculty_division_allocation_id=" + this.assignID;
                    this.authService.get_fac_t(page, this.token).subscribe(function (data) {
                      load.dismiss();
                      console.log(data, "sd");
                      _this.listData = data;
                    }, function (err) {
                      if (err.status == 401 || err.status == 422 || err.status == 0) {
                        if (err.statusText == "Unauthorized") {
                          _this.general.loginAgain();

                          _this.router.navigateByUrl("/opem");
                        }
                      }

                      load.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AssignmentNoticesPage;
      }();

      _AssignmentNoticesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }];
      };

      _AssignmentNoticesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-assignment-notices",
        template: _raw_loader_assignment_notices_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_assignment_notices_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AssignmentNoticesPage);
      /***/
    },

    /***/
    31468:
    /*!*************************************************************************!*\
      !*** ./src/app/faculty/assignment-notices/assignment-notices.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  border: 1px solid gray !important;\n  color: black;\n  text-align: center;\n}\n\n.valData {\n  font-size: 13px;\n}\n\n.valData ion-icon {\n  font-size: 18px;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnQtbm90aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksZUFBQTtBQUVSOztBQUdJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoiYXNzaWdubWVudC1ub3RpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWxEYXRhIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG4uSGVhZERhdGEge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogI2FlNWM1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    35474:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/assignment-notices/assignment-notices.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-button routerLink=\"/assign-faculty\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title> Assignment / Notice </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button color=\"primary\" class=\"fab-btn\" (click)=\"create()\">\n          <ion-icon name=\"add\" class=\"add-icon\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-grid>\n        <ion-row class=\"HeadData\">\n            <ion-col size=\"2\"> S.No </ion-col>\n            <ion-col size=\"3\"> Title </ion-col>\n            <ion-col size=\"4\"> Created Date </ion-col>\n            <ion-col size=\"3\"> Action </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"listData.length==0\">\n            <ion-col size=\"12\"> No data found </ion-col>\n        </ion-row>\n        <div class=\"valData\" *ngIf=\"listData.length!=0\">\n            <ion-row *ngFor=\"let d of listData;let n=index\">\n                <ion-col size=\"2\"> {{n+1}} </ion-col>\n                <ion-col size=\"3\"> {{d.title}} </ion-col>\n                <ion-col size=\"4\"> {{d.notice_date_time}} </ion-col>\n                <ion-col size=\"3\">\n                    <ion-icon name=\"create\" style=\"color: blue; padding-right: 10px\" (click)=\"edit(d)\"></ion-icon>\n                    <!-- <ion-icon name=\"trash\" style=\"color: red\" (click)=\"delete(d)\"></ion-icon> -->\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_assignment-notices_assignment-notices_module_ts-es5.js.map