(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["default-src_app_faculty_save-marks_save-marks_page_ts"], {
    /***/
    72626:
    /*!*******************************************************!*\
      !*** ./src/app/faculty/save-marks/save-marks.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SaveMarksPage": function SaveMarksPage() {
          return (
            /* binding */
            _SaveMarksPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_save_marks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./save-marks.page.html */
      74160);
      /* harmony import */


      var _save_marks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./save-marks.page.scss */
      88848);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _SaveMarksPage = /*#__PURE__*/function () {
        function SaveMarksPage(modalCtrl, navParams, authService, formBuilder, generalService, alertController, popoverController, router) {
          var _this = this;

          _classCallCheck(this, SaveMarksPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.generalService = generalService;
          this.alertController = alertController;
          this.popoverController = popoverController;
          this.router = router;
          this.isFinalSubmitted = false;
          this.isDisable = [];
          this.isStudent = true;
          this.isMark = true;
          this.isGrade = true;
          this.isBatch = false;
          this.isReason = true;
          this.isCia = false;
          console.log(navParams.get('data'), 'd');
          this.facData = this.navParams.get('data');
          this.internalAssessment = this.navParams.get('internalAssessment');
          this.facDt = this.navParams.get('facDt');
          this.settings = this.navParams.get('settings');
          this.isFinalSubmitted = this.internalAssessment.final_save != null ? true : false;
          console.log(this.settings.enable_grade_column_in_internal_assessment_marks);
          this.token = localStorage.getItem("pas_faculty");
          this.generalService.listen().subscribe(function (m) {
            console.log(m, 'fdf34');

            _this.getStudents();
          });
        }

        _createClass(SaveMarksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              form0: [''],
              grade0: [''],
              reason0: ['']
            }); // this.getStudents();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getStudents();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            return this.modalCtrl.dismiss(null, 'cancel');
          }
        }, {
          key: "getStudents",
          value: function getStudents() {
            var _this2 = this;

            this.generalService.loadingPresent();
            this.authService.get_fac_t("teaching-staff/internal-assessment/assigned-students?academic_year_id=".concat(this.facData.academic_year_id, "&division_id=").concat(this.facData.division_id, "&elective_subject_id=").concat(this.facData.elective_subject_id, "&employee_detail_id=").concat(this.facData.employee_detail_id, "&exam_particular_id=").concat(this.facData.exam_particular_id, "&faculty_division_allocation_id=").concat(this.facData.faculty_division_allocation_id, "&iaconfig_id=").concat(this.facData.iaconfig_id, "&institution_id=").concat(this.facData.institution_id, "&internal_assessment_particular_id=").concat(this.facData.internal_assessment_particular_id, "&semester_id=").concat(this.facData.semester_id), this.token).subscribe(function (response) {
              _this2.studentList = response;
              _this2.internalAssessentarks = _this2.studentList.internalAssessmentMarks;
              _this2.count = _this2.internalAssessentarks.length;
              console.log(_this2.studentList);
              var studentdata = _this2.studentList.studentData;
              console.log(studentdata);

              for (var i = 0; i < _this2.count; i++) {
                if (_this2.settings.enable_reason_input_in_teaching_staff_internal_assessement == 1) {
                  _this2.myForm.addControl('reason' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                  if (studentdata[i].reason == null) {
                    _this2.myForm.controls['reason' + i].setValue('');

                    _this2.isDisable[i] = false;

                    _this2.myForm.addControl('form' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                    if (!studentdata[i].set_grades) {
                      _this2.myForm.get('form' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
                    }

                    _this2.myForm.controls['form' + i].setValue(studentdata[i].set_marks);

                    _this2.myForm.get('form' + i).updateValueAndValidity();

                    if (_this2.settings.enable_grade_column_in_internal_assessment_marks == 1) {
                      _this2.myForm.addControl('grade' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                      if (!studentdata[i].set_marks) {
                        _this2.myForm.get('grade' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
                      }

                      _this2.myForm.controls['grade' + i].setValue(studentdata[i].set_grades);

                      _this2.myForm.get('grade' + i).updateValueAndValidity();
                    } // this.myForm.addControl('form'+i, new FormControl('', Validators.required));
                    // this.myForm.controls['form'+i].setValue(studentdata[i].set_marks);
                    // if(this.settings.enable_grade_column_in_internal_assessment_marks == 1) {
                    //   this.myForm.addControl('grade'+i, new FormControl('', Validators.required));
                    //   this.myForm.controls['grade'+i].setValue(studentdata[i].set_grades);
                    // }

                  } else {
                    _this2.isDisable[i] = true;

                    _this2.myForm.controls['reason' + i].setValue(studentdata[i].reason);
                  }
                } else {
                  _this2.myForm.addControl('form' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                  if (!studentdata[i].set_grades) {
                    _this2.myForm.get('form' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
                  }

                  _this2.myForm.controls['form' + i].setValue(studentdata[i].set_marks);

                  _this2.myForm.get('form' + i).updateValueAndValidity();

                  if (_this2.settings.enable_grade_column_in_internal_assessment_marks == 1) {
                    _this2.myForm.addControl('grade' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                    if (!studentdata[i].set_marks) {
                      _this2.myForm.get('grade' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
                    }

                    _this2.myForm.controls['grade' + i].setValue(studentdata[i].set_grades);

                    _this2.myForm.get('grade' + i).updateValueAndValidity();
                  } // this.myForm.addControl('form'+i, new FormControl('', Validators.required));
                  //   this.myForm.controls['form'+i].setValue(studentdata[i].set_marks);
                  //   if(this.settings.enable_grade_column_in_internal_assessment_marks == 1) {
                  //     this.myForm.addControl('grade'+i, new FormControl('', Validators.required));
                  //     this.myForm.controls['grade'+i].setValue(studentdata[i].set_grades);
                  //   }

                }

                _this2.generalService.loadingDismiss();
              }
            }, function (error) {
              console.log(error);

              _this2.generalService.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this2.generalService.loginAgain();

                  _this2.router.navigateByUrl("/opem");
                }
              }
            });
          }
        }, {
          key: "onChangeTime",
          value: function onChangeTime(val, student, studentData, i) {
            var _this3 = this;

            if (val.detail['value'] != '') {
              this.myForm.addControl('grade' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
              this.myForm.get('grade' + i).setValidators([]);
            }

            if (val.detail['value'] == '') {
              this.myForm.get('grade' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            }

            this.myForm.get('grade' + i).updateValueAndValidity();
            console.log(val.detail['value']);
            console.log(this.internalAssessment);
            console.log(student);
            console.log(studentData);

            if (val.detail['value'] <= this.internalAssessment.max_marks) {
              var studentInternalMarks = {
                "studentInternalMarks": [{
                  "id": student.id,
                  "roll_no": student.roll_no,
                  "student_name": student.student_name,
                  "batch": student.batch,
                  "course_name": student.course_name,
                  "set_marks": val.detail['value'],
                  "set_grades": this.settings.enable_grade_column_in_internal_assessment_marks == 1 ? this.myForm.controls['grade' + i].value : studentData.set_grades,
                  "internal_marks_id": studentData.internal_marks_id,
                  "final_save": this.internalAssessment.final_save,
                  "ia_max": this.internalAssessment.ia_max,
                  "reason": studentData.reason,
                  "freeze_from_date": studentData.freeze_from_date,
                  "freeze_from_date_expired": studentData.freeze_from_date_expired,
                  "isFreezed": studentData.isFreezed,
                  // "Mid Sem": 6, 
                  // "quiz": 14, 
                  // "Assignment": 10, 
                  "total_marks": student.total_marks,
                  "internal_marks_convert_marks": student.internal_marks_convert_marks,
                  "non_convert_total_marks": student.non_convert_total_marks,
                  "ia_marks": student.ia_marks,
                  "studentInternalAssessmentPercentage": student.studentInternalAssessmentPercentage,
                  "internalAssessmentShortagePercentage": student.internalAssessmentShortagePercentage,
                  "internal_assessment_particular_id": this.internalAssessment.internal_assessment_particular_id,
                  "convert": this.internalAssessment.convert,
                  "iaconfig_id": this.internalAssessment.iaconfig_id,
                  "assessment_particulars": this.internalAssessment.assessment_particulars,
                  "max_marks": this.internalAssessment.max_marks,
                  "mcq": this.internalAssessment.mcq,
                  "allocated_faculty": this.internalAssessment.allocated_faculty,
                  "disabled_mcq_faculty": this.internalAssessment.disabled_mcq_faculty,
                  "exam_particular_id": this.internalAssessment.exam_particular_id,
                  "type": this.internalAssessment.type,
                  "name": this.internalAssessment.name,
                  "enable_association_student_activity_system": this.internalAssessment.enable_association_student_activity_system,
                  "no_entry": this.internalAssessment.no_entry
                }]
              }; // var t = false;

              var t = setTimeout(function () {
                return true;
              }, 3000);
              console.log(t);

              if (t) {
                this.authService.g_postt_fac(studentInternalMarks, 'teaching-staff/internal-assessment/internal-assessment-marks', this.token).subscribe(function (response) {
                  console.log(response, 'sd');

                  if (response.status) {
                    _this3.generalService.showToast(response.message);
                  }
                }, function (error) {
                  console.log(error); // this.generalService.loadingDismiss();

                  if (error.status == 401 || error.status == 422 || error.status == 0) {
                    if (error.statusText == "Unauthorized") {
                      _this3.modalCtrl.dismiss();

                      _this3.generalService.loginAgain();

                      _this3.router.navigateByUrl("/opem");
                    }
                  }
                });
                console.log(studentInternalMarks);
              }
            } else {
              this.generalService.showToast('Entered Marks should not be greater than maximum marks.. ');
              this.myForm.controls['form' + i].setValue('');
            }
          }
        }, {
          key: "onChangeGrade",
          value: function onChangeGrade(val, student, studentData, i) {
            var _this4 = this;

            if (val.detail['value'] != '') {
              this.myForm.addControl('form' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
              this.myForm.get('form' + i).setValidators([]);
            }

            if (val.detail['value'] == '') {
              this.myForm.get('form' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            }

            this.myForm.get('form' + i).updateValueAndValidity();
            console.log(this.myForm.controls['form' + i].value);
            console.log(val.detail['value']);
            console.log(this.internalAssessment);
            console.log(student);
            console.log(studentData);
            var newValue = val.detail['value'];
            var regExp = new RegExp('^[A-Za-z+?]+$');

            if (regExp.test(newValue) || newValue == '') {
              var studentInternalMarks = {
                "studentInternalMarks": [{
                  "id": student.id,
                  "roll_no": student.roll_no,
                  "student_name": student.student_name,
                  "batch": student.batch,
                  "course_name": student.course_name,
                  "set_marks": this.myForm.controls['form' + i].value,
                  "set_grades": val.detail['value'],
                  "internal_marks_id": studentData.internal_marks_id,
                  "final_save": this.internalAssessment.final_save,
                  "ia_max": this.internalAssessment.ia_max,
                  "reason": studentData.reason,
                  "freeze_from_date": studentData.freeze_from_date,
                  "freeze_from_date_expired": studentData.freeze_from_date_expired,
                  "isFreezed": studentData.isFreezed,
                  // "Mid Sem": 6, 
                  // "quiz": 14, 
                  // "Assignment": 10, 
                  "total_marks": student.total_marks,
                  "internal_marks_convert_marks": student.internal_marks_convert_marks,
                  "non_convert_total_marks": student.non_convert_total_marks,
                  "ia_marks": student.ia_marks,
                  "studentInternalAssessmentPercentage": student.studentInternalAssessmentPercentage,
                  "internalAssessmentShortagePercentage": student.internalAssessmentShortagePercentage,
                  "internal_assessment_particular_id": this.internalAssessment.internal_assessment_particular_id,
                  "convert": this.internalAssessment.convert,
                  "iaconfig_id": this.internalAssessment.iaconfig_id,
                  "assessment_particulars": this.internalAssessment.assessment_particulars,
                  "max_marks": this.internalAssessment.max_marks,
                  "mcq": this.internalAssessment.mcq,
                  "allocated_faculty": this.internalAssessment.allocated_faculty,
                  "disabled_mcq_faculty": this.internalAssessment.disabled_mcq_faculty,
                  "exam_particular_id": this.internalAssessment.exam_particular_id,
                  "type": this.internalAssessment.type,
                  "name": this.internalAssessment.name,
                  "enable_association_student_activity_system": this.internalAssessment.enable_association_student_activity_system,
                  "no_entry": this.internalAssessment.no_entry
                }]
              }; // var t = false;

              var t = setTimeout(function () {
                return true;
              }, 3000);
              console.log(t);

              if (t) {
                this.authService.g_postt_fac(studentInternalMarks, 'teaching-staff/internal-assessment/internal-assessment-marks', this.token).subscribe(function (response) {
                  console.log(response, 'sd');

                  if (response.status) {
                    _this4.generalService.showToast(response.message);
                  }
                }, function (error) {
                  console.log(error); // this.generalService.loadingDismiss();

                  if (error.status == 401 || error.status == 422 || error.status == 0) {
                    if (error.statusText == "Unauthorized") {
                      _this4.generalService.loginAgain();

                      _this4.modalCtrl.dismiss();

                      _this4.router.navigateByUrl("/opem");
                    }
                  }
                });
                console.log(studentInternalMarks);
              }
            } else {
              this.generalService.showToast('Entered Grade should not be number or special charaters ');
              this.myForm.controls['grade' + i].setValue('');
            }
          }
        }, {
          key: "create",
          value: function create() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    console.log('sfd');
                    _context.next = 3;
                    return this.alertController.create({
                      header: 'Confirm!',
                      message: "Are you sure you want to save? Once saved, you can't edit the marks again. Continue?",
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
                          var finalData = {
                            "institution_id": _this5.facData.institution_id,
                            "faculty_division_allocation_id": _this5.facData.faculty_division_allocation_id,
                            "iaconfig_id": _this5.facData.iaconfig_id,
                            "sharedFacultyLists": [{
                              "faculty_division_allocation_id": _this5.facData.faculty_division_allocation_id,
                              "iaconfig_id": _this5.facData.iaconfig_id
                            }],
                            "academic_year_id": _this5.facData.academic_year_id,
                            "semester_id": _this5.facData.semester_id,
                            "exam_particular_id": _this5.facData.exam_particular_id,
                            "elective_subject_id": _this5.facData.elective_subject_id
                          };
                          console.log(finalData);

                          _this5.authService.g_postt_fac(finalData, 'teaching-staff/internal-assessment/final-save', _this5.token).subscribe(function (response) {
                            console.log(response, 'sd');

                            if (response.status) {
                              _this5.generalService.showToast(response.message);
                            }

                            _this5.generalService.loadingDismiss();

                            _this5.generalService.filter('Saved');

                            _this5.modalCtrl.dismiss();
                          }, function (error) {
                            console.log(error);

                            _this5.generalService.loadingDismiss();

                            if (error.status == 401 || error.status == 422 || error.status == 0) {
                              if (error.statusText == "Unauthorized") {
                                _this5.generalService.loginAgain();

                                _this5.modalCtrl.dismiss();

                                _this5.router.navigateByUrl("/opem");
                              }
                            }
                          }); // this.popoverController.dismiss();

                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "confirm",
          value: function confirm() {
            return this.modalCtrl.dismiss('confirm');
          }
        }, {
          key: "onChangeReason",
          value: function onChangeReason(val, student, studentData, i) {
            var _this6 = this;

            console.log(val.detail['value']);
            var set_mark;
            var set_grade;
            set_mark = null;
            set_grade = null;

            if (val.detail['value'] == '') {
              this.isDisable[i] = false;
              this.myForm.addControl('form' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
              this.myForm.get('form' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
              this.myForm.controls['form' + i].setValue(set_mark);
              this.myForm.get('form' + i).updateValueAndValidity();

              if (this.settings.enable_grade_column_in_internal_assessment_marks == 1) {
                this.myForm.addControl('grade' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
                this.myForm.get('grade' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
                this.myForm.controls['grade' + i].setValue(set_grade);
                this.myForm.get('grade' + i).updateValueAndValidity();
              }
            } else {
              this.isDisable[i] = true;
              this.myForm.get('form' + i).clearValidators();
              this.myForm.get('form' + i).updateValueAndValidity();

              if (this.settings.enable_grade_column_in_internal_assessment_marks == 1) {
                this.myForm.get('grade' + i).clearValidators();
                this.myForm.get('grade' + i).updateValueAndValidity();
              } // studentData.set_marks = set_mark;
              // studentData.set_grades = set_grade;
              // this.myForm.addControl('form'+i, new FormControl(''));
              // this.myForm.addControl('grade'+i, new FormControl(''));

            }

            var studentInternalMarks = {
              "studentInternalMarks": [{
                "id": student.id,
                "roll_no": student.roll_no,
                "student_name": student.student_name,
                "batch": student.batch,
                "course_name": student.course_name,
                "set_marks": set_mark,
                "set_grades": set_grade,
                "internal_marks_id": studentData.internal_marks_id,
                "final_save": this.internalAssessment.final_save,
                "ia_max": this.internalAssessment.ia_max,
                "reason": val.detail['value'],
                "freeze_from_date": studentData.freeze_from_date,
                "freeze_from_date_expired": studentData.freeze_from_date_expired,
                "isFreezed": studentData.isFreezed,
                // "Mid Sem": 6, 
                // "quiz": 14, 
                // "Assignment": 10, 
                "total_marks": student.total_marks,
                "internal_marks_convert_marks": student.internal_marks_convert_marks,
                "non_convert_total_marks": student.non_convert_total_marks,
                "ia_marks": student.ia_marks,
                "studentInternalAssessmentPercentage": student.studentInternalAssessmentPercentage,
                "internalAssessmentShortagePercentage": student.internalAssessmentShortagePercentage,
                "internal_assessment_particular_id": this.internalAssessment.internal_assessment_particular_id,
                "convert": this.internalAssessment.convert,
                "iaconfig_id": this.internalAssessment.iaconfig_id,
                "assessment_particulars": this.internalAssessment.assessment_particulars,
                "max_marks": this.internalAssessment.max_marks,
                "mcq": this.internalAssessment.mcq,
                "allocated_faculty": this.internalAssessment.allocated_faculty,
                "disabled_mcq_faculty": this.internalAssessment.disabled_mcq_faculty,
                "exam_particular_id": this.internalAssessment.exam_particular_id,
                "type": this.internalAssessment.type,
                "name": this.internalAssessment.name,
                "enable_association_student_activity_system": this.internalAssessment.enable_association_student_activity_system,
                "no_entry": this.internalAssessment.no_entry
              }]
            };
            var t = setTimeout(function () {
              return true;
            }, 3000);
            console.log(t);

            if (t) {
              this.authService.g_postt_fac(studentInternalMarks, 'teaching-staff/internal-assessment/internal-assessment-marks', this.token).subscribe(function (response) {
                console.log(response, 'sd');

                if (response.status) {
                  _this6.generalService.showToast(response.message);
                }
              }, function (error) {
                console.log(error); // this.generalService.loadingDismiss();

                if (error.status == 401 || error.status == 422 || error.status == 0) {
                  if (error.statusText == "Unauthorized") {
                    _this6.modalCtrl.dismiss();

                    _this6.generalService.loginAgain();

                    _this6.router.navigateByUrl("/opem");
                  }
                }
              });
              console.log(studentInternalMarks);
            }
          }
        }]);

        return SaveMarksPage;
      }();

      _SaveMarksPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _SaveMarksPage.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _SaveMarksPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-save-marks',
        template: _raw_loader_save_marks_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_save_marks_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SaveMarksPage);
      /***/
    },

    /***/
    88848:
    /*!*********************************************************!*\
      !*** ./src/app/faculty/save-marks/save-marks.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#yourBtn {\n  position: relative;\n  width: 75%;\n  padding: 8px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  text-align: center;\n  color: #690d01fc;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\n.align {\n  text-align: center;\n  vertical-align: text-bottom;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.hdr_card {\n  padding-left: 10px;\n  padding-right: 5px;\n  color: #000;\n}\n\nion-card-content {\n  padding: 0 !important;\n  overflow: scroll;\n}\n\nion-card-content ion-grid {\n  padding: 0 !important;\n}\n\n.expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.not-colapse {\n  height: auto;\n}\n\n.accordion-button {\n  border: none;\n  color: #1e2023;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f1d0cb;\n  margin: 15px 19px;\n  height: 50px !important;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #f1d0cb;\n  height: 48px !important;\n}\n\n.bottom {\n  bottom: 15px !important;\n}\n\n.student_name {\n  margin-top: 15px;\n  font-size: 18px;\n  margin-left: 25px;\n}\n\n.ion-row_up {\n  margin-top: 10px;\n}\n\n.span_line {\n  margin: 5px;\n  font-size: 13px;\n  margin-top: 60px;\n}\n\nion-item.pl-0.ion-untouched.ion-pristine.ion-valid.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated {\n  position: absolute;\n  bottom: -11px;\n}\n\nion-item.pl-0.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated.ion-valid.ion-touched.ion-dirty {\n  height: 6px;\n  position: relative;\n  top: -10px;\n}\n\n.lable_color {\n  color: black;\n}\n\nion-select.drop.select_width.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.md.hydrated {\n  width: 35% !important;\n}\n\n.span_bold {\n  font-weight: bold;\n}\n\n.box {\n  border-color: #403E39;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 3px;\n}\n\n.grid-bordered .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 160%;\n  font-size: 12px;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUtbWFya3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSFI7O0FBYU07RUFDRSxpQ0FBQTtFQUNBLFlBQUE7QUFWUjs7QUFhSTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFWTjs7QUFZSTtFQUFZLGFBQUE7QUFSaEI7O0FBU0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU5SOztBQVFJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUxSOztBQU1RO0VBQ0kscUJBQUE7QUFKWjs7QUFTSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQU5SOztBQVNNO0VBQ0Usb0JBQUE7QUFOUjs7QUFRTTtFQUNJLFlBQUE7QUFMVjs7QUFPTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBSlI7O0FBT0k7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7O0FBT0k7RUFDSSx1QkFBQTtBQUpSOztBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKUjs7QUFPSTtFQUNJLGdCQUFBO0FBSlI7O0FBTUk7RUFHSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTFI7O0FBVUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFQUjs7QUFVSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFQUjs7QUFVSTtFQUNJLFlBQUE7QUFQUjs7QUFXSTtFQUNJLHFCQUFBO0FBUlI7O0FBWUk7RUFDQyxpQkFBQTtBQVRMOztBQVlJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUEwQlE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBdkJWOztBQWlDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUE5QlI7O0FBK0JRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBN0JaOztBQThCWTtFQUNJLHFCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBN0JoQiIsImZpbGUiOiJzYXZlLW1hcmtzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgICAjeW91ckJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8vIGJvcmRlcjogMXB4IGRhc2hlZCAjNjkwZDAxZmM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzY5MGQwMWZjO1xuICAgICAgICBjb2xvcjogIzY5MGQwMWZjO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAvLyAgIC5hbGlnbiB7XG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAvLyAgIH1cblxuXG5cbiAgICAgIC5pb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkhaW1wb3J0YW50IDtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIFxuICAgIH1cbiAgICAuYWxpZ24ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIH1cbiAgICBpb24tY29udGVudHtwYWRkaW5nOiAxMHB4O31cbiAgICAuaGRyX2NhcmR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzowIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbCA7XG4gICAgICAgIGlvbi1ncmlke1xuICAgICAgICAgICAgcGFkZGluZzowIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5leHBhbmQtd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gICAgICB9ICBcbiAgICAgIFxuICAgICAgLmNvbGxhcHNlZCB7XG4gICAgICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLm5vdC1jb2xhcHNle1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIC5hY2NvcmRpb24tYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiKDMwLCAzMiwgMzUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIwOCwgMjAzKTtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDE5cHg7XG4gICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFkMGNiO1xuICAgICAgICBoZWlnaHQ6IDQ4cHghaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuYm90dG9tIHtcbiAgICAgICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5zdHVkZW50X25hbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIH1cblxuICAgIC5pb24tcm93X3Vwe1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuc3Bhbl9saW5le1xuICAgICAgICAvLyAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIFxuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDgwLCAxMTcsIDI0MCk7XG4gICAgfVxuICAgIFxuICAgIGlvbi1pdGVtLnBsLTAuaW9uLXVudG91Y2hlZC5pb24tcHJpc3RpbmUuaW9uLXZhbGlkLml0ZW0ubWQuaW9uLWZvY3VzYWJsZS5pdGVtLWludGVyYWN0aXZlLml0ZW0tZGF0ZXRpbWUuaXRlbS1oYXMtdmFsdWUuaHlkcmF0ZWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTExcHg7XG4gICAgXG4gICAgfVxuICAgIGlvbi1pdGVtLnBsLTAuaXRlbS5tZC5pb24tZm9jdXNhYmxlLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1kYXRldGltZS5pdGVtLWhhcy12YWx1ZS5oeWRyYXRlZC5pb24tdmFsaWQuaW9uLXRvdWNoZWQuaW9uLWRpcnR5IHtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmxhYmxlX2NvbG9ye1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgLy8gIGxlZnQ6MjBweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLXNlbGVjdC5kcm9wLnNlbGVjdF93aWR0aC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQuaW9uLXVudG91Y2hlZC5pb24tcHJpc3RpbmUuaW9uLXZhbGlkLm1kLmh5ZHJhdGVke1xuICAgICAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG4gICAgICAgXG4gICAgfVxuICAgIFxuICAgIC5zcGFuX2JvbGQge1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgXG4gICAgLmJveCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQwM0UzOTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgLmdyaWQtYm9yZGVyZWR7XG4gICAgICAgIC8vIGlvbi1yb3d7XG4gICAgICAgIC8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgLy8gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAvLyAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgICAgIC8vICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAwcHg7XG4gICAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiAjNWY1NzU3O1xuICAgICAgICAvLyAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAvLyAvLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLnJvdy10ZXh0e1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW9uLWNvbHtcbiAgICAgICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAgICAgLy8gICBib3JkZXItY29sb3I6ICNjY2M2YzY7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgXG4gICAgLnRodW1uYWlsc3tcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIC5saXN0LXRodW1ibmFpbHtcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIC5pbWctdGh1bWJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYigyMTEsIDEyLCAxMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwJTsgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46MCAycHggMCAwOyBcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0iXX0= */";
      /***/
    },

    /***/
    74160:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/save-marks/save-marks.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"medium\" (click)=\"cancel()\">X</ion-button>\n    </ion-buttons>\n    <ion-title>Mark Entry</ion-title> \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"create()\" [disabled]=\"!myForm.valid\" >\n        Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"myForm\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button color=\"black\" (click)=\"cancel()\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n      </ion-buttons>\n      <!-- <ion-title>Mark Entry</ion-title> -->\n      <ion-buttons slot=\"end\" *ngIf=\"!isFinalSubmitted\">\n        <ion-button id=\"yourBtn\" (click)=\"create()\" [disabled]=\"!myForm.valid\" >\n          Save</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-grid lines=\"none\"  style=\"padding: 0 20px;\">\n      <ion-row   class=\"ion-row_up\">\n        <ion-col size=\"4\">\n          <span class=\"span_line\"><span class=\"span_bold\">Class</span> </span>\n        </ion-col>\n        <ion-col size=\"0.2\">:</ion-col>\n        <ion-col>{{facDt.class}}</ion-col>\n      </ion-row>\n      <ion-row   class=\"ion-row_up\">\n        <ion-col size=\"4\">\n          <span class=\"span_line\"><span class=\"span_bold\">Division</span> </span>\n        </ion-col>\n        <ion-col size=\"0.2\">:</ion-col>\n        <ion-col>{{facDt.division}}</ion-col>\n      </ion-row>\n      <ion-row   class=\"ion-row_up\">\n        <ion-col size=\"4\">\n          <span class=\"span_line\"><span class=\"span_bold\">Subject</span> </span>\n        </ion-col>\n        <ion-col size=\"0.2\">:</ion-col>\n        <ion-col>{{facDt.subject_name}}</ion-col>\n      </ion-row>\n      <ion-row   class=\"ion-row_up\">\n        <ion-col size=\"4\">\n          <span class=\"span_line\"><span class=\"span_bold\">Exam Particulars</span> </span>\n        </ion-col>\n        <ion-col size=\"0.2\">:</ion-col>\n        <ion-col>{{internalAssessment.name}}</ion-col>\n      </ion-row>\n      <ion-row   class=\"ion-row_up\">\n        <ion-col size=\"4\">\n          <span class=\"span_line\"><span class=\"span_bold\">Assessment Particulars</span> </span>\n        </ion-col>\n        <ion-col size=\"0.2\">:</ion-col>\n        <ion-col>{{internalAssessment.assessment_particulars\n        }}</ion-col>\n      </ion-row>\n      <ion-row   class=\"ion-row_up\">\n        <ion-col size=\"4\">\n          <span class=\"span_line\"><span class=\"span_bold\">Max Marks</span> </span>\n        </ion-col>\n        <ion-col size=\"0.2\">:</ion-col>\n        <ion-col>{{internalAssessment.max_marks}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <mat-accordion style=\"padding:0px !important\">\n      <mat-expansion-panel *ngFor=\"let student of internalAssessentarks; let i = index;\" class=\"animated slideInLeft delay-0s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            {{student.student_name}}\n          </mat-panel-title>\n          <mat-panel-description> \n           \n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid lines=\"none\">\n          <ion-row >\n            <ion-col class=\"ion-col\"  size=\"6\">Roll No.</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\"> {{student.roll_no}}</ion-col>\n          </ion-row>\n          <ion-row  *ngIf=\"settings.display_batch == 1\">\n            <ion-col class=\"ion-col\"  size=\"6\">Batch</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\"> {{student.batch}}</ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"!isFinalSubmitted\" >\n            <ion-col class=\"ion-col\" size=\"6\">Marks</ion-col>\n            <ion-col  class=\"ion-col\" size=\"6\" *ngIf=\"!isDisable[i]\">\n              <ion-input class=\"box\" type=\"number\"  (ionChange)='onChangeTime($event.target.value, student, studentList.studentData[i], i)'  formControlName=\"form{{i}}\" ></ion-input> </ion-col>\n              <ion-col class=\"ion-col\" size=\"6\" *ngIf=\"isDisable[i]\"></ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"isFinalSubmitted\" >\n            <ion-col class=\"ion-col\" size=\"6\">Marks</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\">\n              {{studentList.studentData[i].set_marks}}\n            </ion-col>\n          </ion-row>\n          \n          <ion-row  *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 1 && !isFinalSubmitted\">\n            <ion-col class=\"ion-col\"  size=\"6\">Grade</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\" *ngIf=\"!isDisable[i]\">\n              <ion-input type=\"text\" class=\"box\"   (ionChange)='onChangeGrade($event.target.value, student, studentList.studentData[i], i)'  formControlName=\"grade{{i}}\" ></ion-input> \n            </ion-col>\n            <ion-col class=\"ion-col\" size=\"6\" *ngIf=\"isDisable[i]\"></ion-col>\n          </ion-row>\n          <ion-row  *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 1 &&isFinalSubmitted\">\n            <ion-col class=\"ion-col\"  size=\"6\">Grade</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\" >\n              {{studentList.studentData[i].set_grades}}\n            </ion-col>\n          </ion-row>\n\n          <ion-row  *ngIf=\"settings.enable_reason_input_in_teaching_staff_internal_assessement == 1 && !isFinalSubmitted \">\n            <ion-col class=\"ion-col\" size=\"6\">Reason</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\" >\n              <ion-select class=\"box\" formControlName=\"reason{{i}}\" (ionChange)=\"onChangeReason($event.target.value, student, studentList.studentData[i], i)\" >\n                <ion-select-option value=\"\"></ion-select-option>\n                <ion-select-option value=\"ABSENT\">ABSENT</ion-select-option>\n                <ion-select-option value=\"EXEMPTED\">EXEMPTED</ion-select-option>\n                <ion-select-option value=\"MALPRACTICE\">MALPRACTICE</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row  *ngIf=\"settings.enable_reason_input_in_teaching_staff_internal_assessement == 1 && isFinalSubmitted \">\n            <ion-col class=\"ion-col\" size=\"6\">Reason</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\">\n              {{studentList.studentData[i].reason}}\n            </ion-col>\n          </ion-row>\n\n          <ion-row  *ngIf=\"settings.disable_projected_cia == 0\">\n            <ion-col class=\"ion-col\"  size=\"6\">Projected CIA</ion-col>\n            <ion-col class=\"ion-col\" size=\"6\">\n              <ion-label class=\"label_ion\" >\n              {{student.ia_marks}}\n            </ion-label> </ion-col>\n          </ion-row>\n        </ion-grid>\n        </mat-expansion-panel>\n        </mat-accordion> -->\n        <br/><br/>\n        <!-- <ion-button size=\"small\"    (click)=\"isMark = !isMark\"  >\n          <ion-icon *ngIf=\"isMark\" name=\"eye-outline\"></ion-icon> \n          <ion-icon *ngIf=\"!isMark\" name=\"eye-off-outline\"></ion-icon>\n           &nbsp;Marks </ion-button> -->\n           <ion-button size=\"small\"  (click)=\"isStudent = !isStudent\"  >\n            <ion-icon *ngIf=\"isStudent\" name=\"eye-outline\"></ion-icon> \n            <ion-icon *ngIf=\"!isStudent\" name=\"eye-off-outline\"></ion-icon>\n             &nbsp;Name </ion-button>\n          <ion-button size=\"small\" *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 1\" (click)=\"isGrade = !isGrade\"  >\n           <span *ngIf=\"isGrade\" >Grade</span>\n           <!-- <span *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 0 && isGrade\" > <ion-icon  name=\"eye-outline\"></ion-icon>&nbsp; Mark</span> -->\n           <span *ngIf=\"!isGrade\" >Mark</span>\n           <!-- <span *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 0 && !isGrade\" > <ion-icon name=\"eye-off-outline\"></ion-icon> &nbsp;Mark</span> -->\n            </ion-button>\n        \n           \n       \n          <ion-button size=\"small\" *ngIf=\"settings.enable_reason_input_in_teaching_staff_internal_assessement == 1\" (click)=\"isReason = !isReason\"  >\n            <ion-icon *ngIf=\"isReason\" name=\"eye-outline\"></ion-icon> \n            <ion-icon *ngIf=\"!isReason\" name=\"eye-off-outline\"></ion-icon>\n             &nbsp;Reason </ion-button>\n       \n       \n          <!-- <ion-button size=\"small\" *ngIf=\"settings.display_batch == 1\" (click)=\"isBatch = !isBatch\"  >\n            <ion-icon *ngIf=\"isBatch\" name=\"eye-outline\"></ion-icon> \n            <ion-icon *ngIf=\"!isBatch\" name=\"eye-off-outline\"></ion-icon>\n             &nbsp;Batch </ion-button> -->\n          <ion-button size=\"small\" *ngIf=\"settings.disable_projected_cia == 0\" (click)=\"isCia = !isCia\"  >\n              <ion-icon *ngIf=\"isCia\" name=\"eye-outline\"></ion-icon> \n              <ion-icon *ngIf=\"!isCia\" name=\"eye-off-outline\"></ion-icon>\n               &nbsp;CIA </ion-button>\n        <div class=\"thumnails\">\n          <div class=\"list-thumbnail\">\n            <div class=\"img-thumb\">\n              <ion-grid  class=\"grid-bordered\">\n                <ion-row  class=\"row-text\">\n                  <ion-col text-center class=\"ion-col\" size=\"0.8\">\n                    <ion-label class=\"label_ion \" >Roll No.</ion-label>\n                  </ion-col>\n                  <ion-col class=\"ion-col\" size=\"3\" *ngIf=\"isStudent\">Student Name </ion-col>\n                  <ion-col *ngIf=\"isGrade\" class=\"ion-col align\" size=\"1.2\">Marks</ion-col>\n                  <ion-col class=\"ion-col align\" size=\"1.2\"   *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 1 && !isGrade\">Grade</ion-col>\n                  <ion-col  size=\"2.4\" class=\"ion-col align\"  *ngIf=\"settings.enable_reason_input_in_teaching_staff_internal_assessement == 1 && isReason\">Reason</ion-col>\n                  \n                  <ion-col size=\"1.5\"  class=\"ion-col\"  *ngIf=\"settings.display_batch == 1 && isBatch\">Batch</ion-col>\n                  \n                  <ion-col size=\"1.5\" class=\"ion-col align\"  *ngIf=\"settings.disable_projected_cia == 0 && isCia\">CIA</ion-col>\n              </ion-row>\n                <!-- <ion-virtual-scroll  approxItemHeight=\"120px\"> -->\n                  <ion-row class=\"row-text\" *ngFor=\"let student of internalAssessentarks;let i=index\">\n                    <ion-col class=\"ion-col align\" size=\"0.8\"> \n                      <ion-label class=\"label_ion \" >{{student.roll_no}}</ion-label>\n                    </ion-col>\n                    <ion-col *ngIf=\"isStudent\" class=\"ion-col\" size=\"3\"> \n                      <ion-label class=\"label_ion\" >\n                        {{student.student_name}}\n                      </ion-label>\n                      <!-- <div style=\"font-weight: bold;\">\n                        ({{student.roll_no}})\n                      </div> -->\n                    </ion-col>\n      \n                    <ion-col   class=\"ion-col\" size=\"1.2\"  *ngIf=\"!isFinalSubmitted && isGrade\" >\n                      <ion-input *ngIf=\"!isDisable[i]\" class=\"box\" type=\"number\"  (ionChange)='onChangeTime($event, student, studentList.studentData[i], i)'  formControlName=\"form{{i}}\" ></ion-input> \n                    </ion-col>\n                    <ion-col   class=\"ion-col align\" size=\"1.2\"  *ngIf=\"isFinalSubmitted && isGrade\" >\n                      <ion-label class=\"label_ion\" >{{studentList.studentData[i].set_marks}}</ion-label>\n                    </ion-col>\n      \n      \n                    <ion-col  class=\"ion-col\" size=\"1.2\"  *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 1 && !isFinalSubmitted && !isGrade\">\n                      <ion-input *ngIf=\"!isDisable[i]\" type=\"text\" class=\"box\"   (ionChange)='onChangeGrade($event, student, studentList.studentData[i], i)'  formControlName=\"grade{{i}}\" ></ion-input> \n                    </ion-col>\n                    <ion-col  class=\"ion-col align\" size=\"1.2\"  *ngIf=\"settings.enable_grade_column_in_internal_assessment_marks == 1 && isFinalSubmitted && !isGrade\">\n                      <ion-label class=\"label_ion\" >{{studentList.studentData[i].set_grades}}</ion-label>\n                    </ion-col>\n      \n      \n                    <ion-col  class=\"ion-col\" size=\"2.4\"   *ngIf=\"settings.enable_reason_input_in_teaching_staff_internal_assessement == 1 && !isFinalSubmitted && isReason \">\n                      <ion-select class=\"box\" formControlName=\"reason{{i}}\" (ionChange)=\"onChangeReason($event, student, studentList.studentData[i], i)\" >\n                        <ion-select-option value=\"\"></ion-select-option>\n                        <ion-select-option value=\"ABSENT\">ABSENT</ion-select-option>\n                        <ion-select-option value=\"EXEMPTED\">EXEMPTED</ion-select-option>\n                        <ion-select-option value=\"MALPRACTICE\">MALPRACTICE</ion-select-option>\n                      </ion-select>\n                    </ion-col>\n                    <ion-col  class=\"ion-col align\" size=\"2.4\" *ngIf=\"settings.enable_reason_input_in_teaching_staff_internal_assessement == 1 && isFinalSubmitted && isReason\">\n                      <ion-label class=\"label_ion\" >{{studentList.studentData[i].reason}}</ion-label>\n                    </ion-col>\n\n                    \n                    <ion-col size=\"1.5\"  class=\"ion-col\"  *ngIf=\"settings.display_batch == 1 && isBatch\"> \n                      <ion-label class=\"label_ion\" >{{student.batch}}</ion-label>\n                    </ion-col>\n                    \n                    <ion-col size=\"1.5\" class=\"ion-col align\"  *ngIf=\"settings.disable_projected_cia == 0 && isCia\">\n                      <ion-label class=\"label_ion\" >\n                        {{student.ia_marks}}\n                      </ion-label>\n                    </ion-col>\n                </ion-row>\n                <!-- </ion-virtual-scroll> -->\n                <!-- <ion-row *ngIf=\"displaySheet?.length == 0\">\n                  <ion-col size=\"12\">\n                    No Data to Display\n                  </ion-col>\n                </ion-row> -->\n              </ion-grid>\n            </div>\n          </div>\n        </div>\n  <div style=\"text-align: center; padding-top: 15px\" *ngIf=\"!isFinalSubmitted\"  >\n    <ion-button (click)=\"create()\" [disabled]=\"!myForm.valid\" >\n      Save</ion-button>\n  </div>\n  </form>\n\n<!-- <br/><br/><br/>\n<div class=\"footer-btn\">\n    <ion-button (click)=\"edit()\" [disabled]=\"!sendAssign\" *ngIf=\"headerr == 'Edit Notices'\">\n        Update</ion-button>\n    <ion-button (click)=\"create()\" [disabled]=\"!sendAssign\" *ngIf=\"headerr != 'Edit Notices'\">\n        Submit</ion-button>\n\n    \n</div> -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_faculty_save-marks_save-marks_page_ts-es5.js.map