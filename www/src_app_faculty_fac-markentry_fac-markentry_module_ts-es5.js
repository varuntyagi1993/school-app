(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_fac-markentry_fac-markentry_module_ts"], {
    /***/
    51175:
    /*!***********************************************************************!*\
      !*** ./src/app/faculty/fac-markentry/fac-markentry-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FacMarkentryPageRoutingModule": function FacMarkentryPageRoutingModule() {
          return (
            /* binding */
            _FacMarkentryPageRoutingModule
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


      var _fac_markentry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fac-markentry.page */
      26061);

      var routes = [{
        path: '',
        component: _fac_markentry_page__WEBPACK_IMPORTED_MODULE_0__.FacMarkentryPage
      }];

      var _FacMarkentryPageRoutingModule = /*#__PURE__*/_createClass(function FacMarkentryPageRoutingModule() {
        _classCallCheck(this, FacMarkentryPageRoutingModule);
      });

      _FacMarkentryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FacMarkentryPageRoutingModule);
      /***/
    },

    /***/
    79521:
    /*!***************************************************************!*\
      !*** ./src/app/faculty/fac-markentry/fac-markentry.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FacMarkentryPageModule": function FacMarkentryPageModule() {
          return (
            /* binding */
            _FacMarkentryPageModule
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


      var _fac_markentry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fac-markentry-routing.module */
      51175);
      /* harmony import */


      var _fac_markentry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fac-markentry.page */
      26061);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _FacMarkentryPageModule = /*#__PURE__*/_createClass(function FacMarkentryPageModule() {
        _classCallCheck(this, FacMarkentryPageModule);
      });

      _FacMarkentryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _fac_markentry_routing_module__WEBPACK_IMPORTED_MODULE_0__.FacMarkentryPageRoutingModule],
        declarations: [_fac_markentry_page__WEBPACK_IMPORTED_MODULE_1__.FacMarkentryPage]
      })], _FacMarkentryPageModule);
      /***/
    },

    /***/
    26061:
    /*!*************************************************************!*\
      !*** ./src/app/faculty/fac-markentry/fac-markentry.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FacMarkentryPage": function FacMarkentryPage() {
          return (
            /* binding */
            _FacMarkentryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_fac_markentry_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./fac-markentry.page.html */
      65956);
      /* harmony import */


      var _fac_markentry_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fac-markentry.page.scss */
      77339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _save_marks_save_marks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../save-marks/save-marks.page */
      72626);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _FacMarkentryPage = /*#__PURE__*/function () {
        function FacMarkentryPage(authService, modalCtrl, general, router, location) {
          var _this = this;

          _classCallCheck(this, FacMarkentryPage);

          this.authService = authService;
          this.modalCtrl = modalCtrl;
          this.general = general;
          this.router = router;
          this.location = location;
          this.facData = JSON.parse(localStorage.getItem('myParam'));
          console.log(this.facData);
          this.token = localStorage.getItem("pas_faculty");
          this.general.listen().subscribe(function (m) {
            console.log(m, 'fdf34');

            _this.getInternal();
          });
        }

        _createClass(FacMarkentryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInternal();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "back",
          value: function back() {
            console.log('df');
            this.location.back();
          }
        }, {
          key: "getInternal",
          value: function getInternal() {
            var _this2 = this;

            console.log(this.facData.academic_year_id);
            this.authService.get_fac_t("teaching-staff/internal-assessment/internal-assessment-marks-entry?academic_year_id=" + this.facData.academic_year_id + "&institution_id=" + this.facData.institution_id + "&semester_id=" + this.facData.academic_period_id + "&elective_subject_id=" + this.facData.elective_subject_id + "&stream_id=null" + "&employee_detail_id=" + this.facData.employee_detail_id + "&faculty_division_allocation_id=" + this.facData.id + "&division_id=" + this.facData.division_id + "&subject_code=" + this.facData.subject_code, this.token).subscribe(function (data) {
              _this2.general.loadingDismiss();

              console.log(data, 'fdd');
              _this2.examParticulars = data['examParticulars'];
              var examSetting = data['examinationSettings'];
              var generalSettings = data['generalSettings'];
              _this2.setting = {
                "disable_projected_cia": examSetting.disable_projected_cia,
                "display_batch": examSetting.display_batch,
                "display_class": examSetting.display_class,
                "enable_reason_input_in_teaching_staff_internal_assessement": examSetting.enable_reason_input_in_teaching_staff_internal_assessement,
                "enable_grade_column_in_internal_assessment_marks": generalSettings.enable_grade_column_in_internal_assessment_marks
              };
              console.log(_this2.setting);
              _this2.internalAssessment = data['internalAssessmentParticulars'];
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
            this.general.loadingDismiss();
          }
        }, {
          key: "select",
          value: function select(s, e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var jsonData, modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    console.log(s, 'ss');
                    console.log(e, 'ee');
                    console.log(this.facData);
                    this.general.loadingDismiss();
                    jsonData = {
                      "faculty_division_allocation_id": this.facData.id,
                      "employee_detail_id": this.facData.employee_detail_id,
                      "iaconfig_id": s.iaconfig_id,
                      "internal_assessment_particular_id": s.internal_assessment_particular_id,
                      "elective_subject_id": this.facData.elective_subject_id,
                      "academic_year_id": this.facData.academic_year_id,
                      "institution_id": this.facData.institution_id,
                      "semester_id": this.facData.academic_period_id,
                      "division_id": this.facData.division_id,
                      "exam_particular_id": e.id
                    };
                    console.log(jsonData);
                    _context.next = 8;
                    return this.modalCtrl.create({
                      component: _save_marks_save_marks_page__WEBPACK_IMPORTED_MODULE_3__.SaveMarksPage,
                      componentProps: {
                        "data": jsonData,
                        "internalAssessment": s,
                        "facDt": this.facData,
                        "settings": this.setting
                      }
                    });

                  case 8:
                    modal = _context.sent;
                    modal.present();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return FacMarkentryPage;
      }();

      _FacMarkentryPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
        }];
      };

      _FacMarkentryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-fac-markentry',
        template: _raw_loader_fac_markentry_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fac_markentry_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FacMarkentryPage);
      /***/
    },

    /***/
    77339:
    /*!***************************************************************!*\
      !*** ./src/app/faculty/fac-markentry/fac-markentry.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\n.align {\n  text-align: center;\n  vertical-align: text-bottom;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.hdr_card {\n  padding-left: 10px;\n  padding-right: 5px;\n  color: #000;\n}\n\nion-card-content {\n  padding: 0 !important;\n  overflow: scroll;\n}\n\nion-card-content ion-grid {\n  padding: 0 !important;\n}\n\n.expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.not-colapse {\n  height: auto;\n}\n\n.accordion-button {\n  border: none;\n  color: #1e2023;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f1d0cb;\n  margin: 15px 19px;\n  height: 50px !important;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #f1d0cb;\n  height: 48px !important;\n}\n\n.student_name {\n  margin-top: 15px;\n  font-size: 18px;\n  margin-left: 25px;\n}\n\n.ion-row_up {\n  margin-top: 10px;\n}\n\n.span_line {\n  margin: 5px;\n  font-size: 13px;\n  margin-top: 60px;\n}\n\nion-item.pl-0.ion-untouched.ion-pristine.ion-valid.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated {\n  position: absolute;\n  bottom: -11px;\n}\n\nion-item.pl-0.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated.ion-valid.ion-touched.ion-dirty {\n  height: 6px;\n  position: relative;\n  top: -10px;\n}\n\n.lable_color {\n  color: black;\n}\n\nion-select.drop.select_width.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.md.hydrated {\n  width: 35% !important;\n}\n\n.span_bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhYy1tYXJrZW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1UsaUNBQUE7RUFDQSxZQUFBO0FBQ1Y7O0FBRU07RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FBQ1I7O0FBQ007RUFBWSxhQUFBO0FBR2xCOztBQUZNO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFLVjs7QUFITTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFNVjs7QUFMVTtFQUNJLHFCQUFBO0FBT2Q7O0FBRk07RUFDSSxTQUFBO0VBQ0EsdUJBQUE7QUFLVjs7QUFGUTtFQUNFLG9CQUFBO0FBS1Y7O0FBSFE7RUFDSSxZQUFBO0FBTVo7O0FBSlE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQU9WOztBQUpNO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQU9WOztBQUhNO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNVjs7QUFITTtFQUNJLGdCQUFBO0FBTVY7O0FBSk07RUFHSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS1Y7O0FBQU07RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFHVjs7QUFBTTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHVjs7QUFBTTtFQUNJLFlBQUE7QUFHVjs7QUFDTTtFQUNJLHFCQUFBO0FBRVY7O0FBRU07RUFDQyxpQkFBQTtBQUNQIiwiZmlsZSI6ImZhYy1tYXJrZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb2wge1xuICAgICAgICAgIGJvcmRlcjogMXB4ICBzb2xpZCBncmF5IWltcG9ydGFudCA7XG4gICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgXG4gICAgICB9XG4gICAgICAuYWxpZ24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIH1cbiAgICAgIGlvbi1jb250ZW50e3BhZGRpbmc6IDEwcHg7fVxuICAgICAgLmhkcl9jYXJke1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbCA7XG4gICAgICAgICAgaW9uLWdyaWR7XG4gICAgICAgICAgICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmV4cGFuZC13cmFwcGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gICAgICAgIH0gIFxuICAgICAgICBcbiAgICAgICAgLmNvbGxhcHNlZCB7XG4gICAgICAgICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLm5vdC1jb2xhcHNle1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5hY2NvcmRpb24tYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHJnYigzMCwgMzIsIDM1KTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjA4LCAyMDMpO1xuICAgICAgICAgIG1hcmdpbjogMTVweCAxOXB4O1xuICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWQwY2I7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4IWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICAuc3R1ZGVudF9uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgIH1cblxuICAgICAgLmlvbi1yb3dfdXB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5zcGFuX2xpbmV7XG4gICAgICAgICAgLy8gICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgXG4gICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig4MCwgMTE3LCAyNDApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpb24taXRlbS5wbC0wLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi12YWxpZC5pdGVtLm1kLmlvbi1mb2N1c2FibGUuaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWRhdGV0aW1lLml0ZW0taGFzLXZhbHVlLmh5ZHJhdGVkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMTFweDtcbiAgICAgIFxuICAgICAgfVxuICAgICAgaW9uLWl0ZW0ucGwtMC5pdGVtLm1kLmlvbi1mb2N1c2FibGUuaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWRhdGV0aW1lLml0ZW0taGFzLXZhbHVlLmh5ZHJhdGVkLmlvbi12YWxpZC5pb24tdG91Y2hlZC5pb24tZGlydHkge1xuICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAubGFibGVfY29sb3J7XG4gICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgLy8gIGxlZnQ6MjBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLXNlbGVjdC5kcm9wLnNlbGVjdF93aWR0aC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQuaW9uLXVudG91Y2hlZC5pb24tcHJpc3RpbmUuaW9uLXZhbGlkLm1kLmh5ZHJhdGVke1xuICAgICAgICAgIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcbiAgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAuc3Bhbl9ib2xkIHtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgICJdfQ== */";
      /***/
    },

    /***/
    65956:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/fac-markentry/fac-markentry.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n     \n      <ion-title >Marks Entry </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid lines=\"none\"  style=\"padding: 0 20px;\">\n    <ion-row   class=\"ion-row_up\">\n      <ion-col size=\"4\">\n        <span class=\"span_line\"><span class=\"span_bold\">Class</span> </span>\n      </ion-col>\n      <ion-col size=\"0.2\">:</ion-col>\n      <ion-col>{{facData.class}}</ion-col>\n    </ion-row>\n    <ion-row   class=\"ion-row_up\">\n      <ion-col size=\"4\">\n        <span class=\"span_line\"><span class=\"span_bold\">Division</span> </span>\n      </ion-col>\n      <ion-col size=\"0.2\">:</ion-col>\n      <ion-col>{{facData.division}}</ion-col>\n    </ion-row>\n    <ion-row   class=\"ion-row_up\">\n      <ion-col size=\"4\">\n        <span class=\"span_line\"><span class=\"span_bold\">Subject</span> </span>\n      </ion-col>\n      <ion-col size=\"0.2\">:</ion-col>\n      <ion-col>{{facData.subject_name}}</ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <div *ngIf=\"!internalAssessment\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n  <div *ngIf=\"internalAssessment\">\n    <mat-accordion style=\"padding:0px !important\">\n      <mat-expansion-panel *ngFor=\"let e of examParticulars\" class=\"animated slideInLeft delay-0s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            {{e.name}}\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row>\n            \n            <ion-col class=\"ion-col\" size=\"5\">\n              Description\n            </ion-col>\n            <ion-col class=\"ion-col\" size=\"4\">\n              Max Marks\n            </ion-col>\n            <ion-col class=\"ion-col\" size=\"3\">\n              Status\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of internalAssessment[e.id]\">\n            \n            <ion-col  class=\"divsion ion-col\" text-center size=\"5\">\n              {{s.assessment_particulars}}\n            </ion-col>\n            <ion-col class=\"ion-col align\" size=\"4\">\n              {{s.max_marks}}\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-col\">\n              <div *ngIf=\"s.final_save == null\">\n                <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s, e)\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n              <div *ngIf=\"s.final_save != null\">\n                <p (click)=\"select(s, e)\" style=\"color: #690d01fc;\">Closed</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_fac-markentry_fac-markentry_module_ts-es5.js.map