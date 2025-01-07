(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_payment_payment_module_ts"], {
    /***/
    16097:
    /*!********************************************************!*\
      !*** ./src/app/proj/payment/payment-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPageRoutingModule": function PaymentPageRoutingModule() {
          return (
            /* binding */
            _PaymentPageRoutingModule
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


      var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment.page */
      12776);

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
      }];

      var _PaymentPageRoutingModule = /*#__PURE__*/_createClass(function PaymentPageRoutingModule() {
        _classCallCheck(this, PaymentPageRoutingModule);
      });

      _PaymentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PaymentPageRoutingModule);
      /***/
    },

    /***/
    21241:
    /*!************************************************!*\
      !*** ./src/app/proj/payment/payment.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPageModule": function PaymentPageModule() {
          return (
            /* binding */
            _PaymentPageModule
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


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment-routing.module */
      16097);
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment.page */
      12776);

      var _PaymentPageModule = /*#__PURE__*/_createClass(function PaymentPageModule() {
        _classCallCheck(this, PaymentPageModule);
      });

      _PaymentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
      })], _PaymentPageModule);
      /***/
    },

    /***/
    12776:
    /*!**********************************************!*\
      !*** ./src/app/proj/payment/payment.page.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPage": function PaymentPage() {
          return (
            /* binding */
            _PaymentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./payment.page.html */
      19191);
      /* harmony import */


      var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment.page.scss */
      38051);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _success_success_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../success/success.page */
      77413);
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      85838);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583); // import sha256 from 'crypto-js/sha256';
      // import hmac_sha256 from 'crypto-js/hmac-sha256';
      // import Base64 from 'crypto-js/enc-base64';
      // import pdfMake from 'pdfmake/build/pdfmake';
      // import pdfFonts from 'pdfmake/build/vfs_fonts';
      // import { FileOpener } from '@ionic-native/file-opener/ngx';
      // import { File } from '@ionic-native/file/ngx';
      // pdfMake.vfs = pdfFonts.pdfMake.vfs;


      var _PaymentPage = /*#__PURE__*/function () {
        function PaymentPage(authService, gelService, modalController, plt, // private file: File,
        previewAnyFile, datePipe // private fileOpener: FileOpener
        ) {
          _classCallCheck(this, PaymentPage);

          this.authService = authService;
          this.gelService = gelService;
          this.modalController = modalController;
          this.plt = plt;
          this.previewAnyFile = previewAnyFile;
          this.datePipe = datePipe;
          this.status = false;
          this.pdfObj = null;
          this.isEnable = false;
          this.isError = false;
          this.isTab = true;
          this.type = 'fees';
          this.isValid = true;
          this.amount = 0;
          this.paidDate = new Date().toISOString();
          setTimeout(function () {
            // this.intialData();
            console.log('sfsd');
          }, 2000);
          this.gelService.listen().subscribe(function (m) {
            console.log(m, 'fdf34');
            console.log(localStorage.getItem('event')); //  this.getRefresh(localStorage.getItem('event'));
          });
        }

        _createClass(PaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged() {
            var _this = this;

            this.orders = []; // console.log(ev.detail['value']);
            // if(ev.detail['value'] == 'fees') 
            // {
            //   this.intialData();
            // }
            // if(ev.detail['value'] == 'fee-v3') {

            var data = '';
            var link = "pay-fee-v3/student/" + this.student_id + "/student-fees"; // this.gelService.loadingPresent();

            this.authService.g_get(data, link, this.token).subscribe(function (data) {
              console.log(data);
              _this.orders1 = data['studentFees'];
              _this.amount = _this.orders1[0]['pending_amount'];
              console.log(_this.orders1[0], 'ada'); // this.gelService.loadingDismiss();
            }, function (error) {
              // this.gelService.loadingDismiss();
              console.log(error);

              if (error.status == 401) {
                _this.authService.loginAgain();
              } else if (error.status_code == 400) {
                _this.error = error.message;
                _this.isError = true;
                console.error("Error!", error); //this.gelService.presentAlert_g(this.error);
              } else if (error.status_code == 404) {
                _this.error = error.message;
                _this.isError = true;
              } else {
                _this.gelService.presentAlert_g("Please check your Internet Connection");
              }
            }); // }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_tok");
            this.student_id = localStorage.getItem("c_stud");
            this.intialData(); //console.log('Rupees ' + this.inWords(100000) + 'only');
            //console.log(this.exam_practicular)
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "generalSetting",
          value: function generalSetting() {
            var _this2 = this;

            var data = '';
            var link = "pay-fee-v3/student/" + this.student_id + "/general-settings"; // this.gelService.loadingPresent();

            this.authService.g_get(data, link, this.token).subscribe(function (resp) {
              console.log(resp);
              _this2.setting = resp;
            });
          }
        }, {
          key: "intialData",
          value: function intialData() {
            var _this3 = this;

            var data = '';
            var link = "student/" + this.student_id + "/get-challans"; //console.log(examParticular.detail['value'])

            this.segmentChanged();
            this.generalSetting();
            this.gelService.loadingPresent();
            this.authService.g_get(data, link, this.token).subscribe(function (data) {
              console.log(data);
              _this3.logo = data.logo;
              _this3.admissionFeesInStudentDashboard = data.admissionFeesInStudentDashboard;
              _this3.orders = data.challans;
              _this3.academicYearId = data.academicYearId;
              _this3.isError = false;
              console.log(_this3.academicYearId);

              _this3.gelService.loadingDismiss();
            }, function (error) {
              _this3.gelService.loadingDismiss();

              console.log(error);

              if (error.status == 401) {
                _this3.authService.loginAgain();
              } else if (error.status_code == 400) {
                _this3.error = error.message;
                _this3.isError = true;
                console.error("Error!", error); //this.gelService.presentAlert_g(this.error);
              } else if (error.status_code == 404) {
                _this3.error = error.message;
                _this3.isError = true;
              } else {
                _this3.gelService.presentAlert_g("Please check your Internet Connection");
              }
            });
          }
        }, {
          key: "onChangeAmount",
          value: function onChangeAmount(event, pending_amount) {
            this.isValid = event.detail['value'] <= pending_amount && event.detail['value'] != 0;
            this.amount = event.detail['value'];
          }
        }, {
          key: "generateOrder",
          value: function generateOrder(order, type) {
            var _this4 = this;

            console.log(order);

            if (type == 'fees') {
              var item = {
                "challan_id": order.challan_id,
                "challan_type_id": order.challan_type_id,
                "amount": order.amount
              };
              console.log(this.token);
              var link = "student/" + this.student_id + "/create-order";
              this.gelService.loadingPresent();
              this.authService.g_postt(item, link, this.token).subscribe(function (data) {
                _this4.gelService.loadingDismiss();

                console.log(data);
                var order_id = data.razorpayOrderId;
                var secret = order.paymentKey;
                var options = {
                  description: 'Online Payment',
                  image: _this4.logo,
                  order_id: data.razorpayOrderId,
                  currency: 'INR',
                  key: order.paymentKey,
                  amount: order.amount,
                  name: order.challan_type,
                  theme: {
                    color: '#620b23'
                  }
                };
                console.log(options, 'orders');

                var successCallback = function successCallback(success) {
                  _this4.status = true;
                  console.log(success, 'success'); //alert('payment_id: ' + success.razorpay_payment_id)

                  var razorpay_payment_id = success;
                  _this4.isEnable = true;
                  var response = {
                    "orderId": order_id,
                    "challanData": {
                      "student_id": order.student_id,
                      "challan_type_id": order.challan_type_id,
                      "challan_id": order.challan_id
                    },
                    "paymentResponse": {
                      "razorpay_payment_id": razorpay_payment_id
                    },
                    "isEnable": _this4.isEnable
                  };

                  _this4.paymentResponse(response, 'fees');

                  console.log(success);
                };

                var cancelCallback = function cancelCallback(error) {
                  console.log(error);
                  var errors = error.error;

                  _this4.gelService.presentAlert_g(errors.description);

                  _this4.isEnable = false; // var response = {
                  //   'message':'',
                  //   'student_name': '',
                  //   'payment_id': '',
                  //   'payment_date': '',
                  //   'amount': '',
                  //   'status': '',
                  //   "isEnable": this.isEnable
                  // }
                  //this.openModal(response);
                };

                RazorpayCheckout.open(options, successCallback, cancelCallback);
                console.log(_this4.status);
              }, function (error) {
                _this4.gelService.loadingDismiss();

                if (error.status == 401) {
                  _this4.authService.loginAgain(); //this.router.navigateByUrl('/login');

                } else if (error.status == 400) {
                  _this4.error = error.message;
                  console.error("Error!", error.status_code, error.message);

                  _this4.gelService.presentAlert_g(_this4.error);
                } else {
                  console.log(error);

                  _this4.gelService.presentAlert_g("Please check your Internet Connection1");
                }
              });
            }

            if (type = 'fee-v3') {
              // order.amount = this.amount;
              var o = {
                "student_id": order.student_id,
                "institution_id": order.institution_id,
                "student_name": order.student_name,
                "fathers_name": order.fathers_name,
                "mothers_name": order.mothers_name,
                "application_no": order.application_no,
                "class_batch": order.class_batch,
                "year": order.year,
                "challan_type_id": order.challan_type_id,
                "challan_type": order.challan_type,
                "challan_exist": order.challan_exist,
                "challan_number": order.challan_number,
                "total_fees": order.total_fees,
                "pending_amount": order.pending_amount,
                "paid_amount": order.paid_amount,
                "concession": order.concession,
                "student_concession": order.student_concession,
                "remarks_receipt": order.remarks_receipt,
                "installment": order.installment,
                "academic_year_id": order.academic_year_id,
                "year_id": order.year_id,
                "programme_id": order.programme_id,
                "combination_id": order.combination_id,
                "combination": order.combination,
                "batch_id": order.batch_id,
                "fee_batch_id": order.fee_batch_id,
                "second_language_id": order.second_language_id,
                "second_language": order.second_language,
                "is_nri": order.is_nri,
                "is_nri_display": order.is_nri_display,
                "state_id": order.state_id,
                "last_studied_state": order.last_studied_state,
                "district_id": order.district_id,
                "last_studied_district": order.last_studied_district,
                "admission_board_id": order.admission_board_id,
                "last_studied_board": order.last_studied_board,
                "email_id": order.email_id,
                "student_mobile_no": order.student_mobile_no,
                "admission_number": order.admission_number,
                "freeship": order.freeship,
                "fee_structure_category_id": order.fee_structure_category_id,
                "challanIds": order.challanIds,
                "fathers_mobile_no": order.fathers_mobile_no,
                "mothers_mobile_no": order.mothers_mobile_no,
                "student_minimum_amount": order.student_minimum_amount,
                "payment_block": order.payment_block,
                "payment_block_print": order.payment_block_print,
                "receipt_view": order.receipt_view,
                "receipt_ids": order.receipt_ids,
                "otherFees": order.otherFees,
                "arrearFees": order.arrearFees,
                "settled_amount": order.settled_amount,
                "non_settled_amount": order.non_settled_amount,
                "pay_amount": this.amount,
                "minimum_amount": order.minimum_amount,
                "possible_installment": order.possible_installment,
                "fee_details": order.fee_details,
                "discount_details": order.discount_details,
                "fee_type_id": order.fee_type_id,
                "paymentKey": order.paymentKey,
                "amount": this.amount
              }; // "fee_details": [
              //   {
              //     "challan_type_id": 21,
              //     "fee_type_id": 21,
              //     "setting_fee_header_id": 110,
              //     "fee_item": "Tuition",
              //     "type": "COMBINATION_FEES",
              //     "amount": "0.00",
              //     "sort_order": 2,
              //     "fee_structure_amount": 15640,
              //     "paid_amount": 0,
              //     "balance": 15640,
              //     "discounts": {
              //       "42": null,
              //       "43": null
              //     }
              //   },
              //   {
              //     "challan_type_id": 21,
              //     "fee_type_id": 21,
              //     "setting_fee_header_id": 111,
              //     "fee_item": "Exam",
              //     "type": "COMBINATION_FEES",
              //     "amount": "0.00",
              //     "sort_order": 3,
              //     "fee_structure_amount": 345,
              //     "paid_amount": 0,
              //     "balance": 345,
              //     "discounts": {
              //       "42": null,
              //       "43": null
              //     }
              //   },
              //   {
              //     "challan_type_id": 21,
              //     "fee_type_id": 21,
              //     "setting_fee_header_id": 112,
              //     "fee_item": "Sports",
              //     "type": "COMBINATION_FEES",
              //     "amount": "0.00",
              //     "sort_order": 4,
              //     "fee_structure_amount": 60,
              //     "paid_amount": 0,
              //     "balance": 60,
              //     "discounts": {
              //       "42": null,
              //       "43": null
              //     }
              //   }
              // ],
              // "discount_details": {
              //   "42": 0,
              //   "43": 0
              // },
              // let o = {
              //   "student_id": order.student_id,
              //   "institution_id": order.institution_id,
              //   "student_name": order.student_name,
              //   "fathers_name": order.fathers_name,
              //   "mothers_name": order.mothers_name,
              //   "application_no": order.application_no,
              //   "class_batch": order.class_batch,
              //   "year": order.year,
              //   "challan_type_id": order.challan_type_id,
              //   "challan_type": order.challan_type,
              //   "challan_exist": order.challan_exist,
              //   "challan_number": order.challan_number,
              //   "total_fees": order.total_fees,
              //   "pending_amount": order.pending_amount,
              //   "paid_amount": order.paid_amount,
              //   "concession": order.concession,
              //   "student_concession": order.student_concession,
              //   "remarks_receipt": order.remarks_receipt,
              //   "installment": order.installment,
              //   "academic_year_id": order.academic_year_id,
              //   "year_id": order.year_id,
              //   "programme_id": order.programme_id,
              //   "combination_id": order.combination_id,
              //   "combination": order.combination_id,
              //   "batch_id": order.batch_id,
              //   "fee_batch_id": order.fee_batch_id,
              //   "second_language_id": order.second_language_id,
              //   "second_language": order.second_language,
              //   "is_nri": order.is_nri,
              //   "is_nri_display": order.is_nri_display,
              //   "state_id": order.state_id,
              //   "last_studied_state": order.last_studied_state,
              //   "district_id": order.district_id,
              //   "last_studied_district": order.last_studied_district,
              //   "admission_board_id": order.admission_board_id,
              //   "last_studied_board": order.last_studied_board,
              //   "email_id": order.email_id,
              //   "student_mobile_no": order.student_mobile_no,
              //   "admission_number": order.admission_number,
              //   "freeship": order.freeship,
              //   "fee_structure_category_id": order.fee_structure_category_id,
              //   "challanIds": order.challanIds,
              //   "fathers_mobile_no": order.fathers_mobile_no,
              //   "mothers_mobile_no": order.mothers_mobile_no,
              //   "student_minimum_amount": order.student_minimum_amount,
              //   "payment_block": order.payment_block,
              //   "payment_block_print": order.payment_block_print,
              //   "receipt_view": order.receipt_view,
              //   "receipt_ids": order.receipt_ids,
              //   "otherFees": order.otherFees,
              //   "arrearFees": order.arrearFees,
              //   "settled_amount": order.settled_amount,
              //   "non_settled_amount": order.non_settled_amount,
              //   "pay_amount": order.pay_amount,
              //   "minimum_amount": order.minimum_amount,
              //   "possible_installment": order.possible_installment,
              //   "fee_details": order.fee_details,
              //   "discount_details": order.discount_details,
              //   "fee_type_id": order.fee_type_id,
              //   "paymentKey": order.paymentKey,
              //   "amount": order.amount
              // };

              console.log(o, 'as');
              var link = "pay-fee-v3/student/" + this.student_id + "/create-order";
              this.gelService.loadingPresent();
              this.authService.g_postt(o, link, this.token).subscribe(function (data) {
                _this4.gelService.loadingDismiss();

                console.log(data);
                var challan_id = data.challanId;
                var order_id = data.razorpayOrderId;
                var options = {
                  description: 'Online Payment',
                  image: _this4.logo,
                  order_id: data.razorpayOrderId,
                  currency: 'INR',
                  key: order.paymentKey,
                  amount: _this4.amount,
                  name: order.challan_type,
                  theme: {
                    color: '#620b23'
                  }
                };
                console.log(options, 'orders');

                var successCallback = function successCallback(success) {
                  _this4.status = true;
                  console.log(success, 'success'); //alert('payment_id: ' + success.razorpay_payment_id)

                  var razorpay_payment_id = success; // alert(razorpay_payment_id+"orderId:"+order_id );

                  _this4.isEnable = true;
                  var response = {
                    "paymentResponse": {
                      "razorpay_payment_id": razorpay_payment_id,
                      "razorpay_order_id": order_id,
                      "razorpay_signature": ""
                    },
                    "feeData": {
                      "student_id": o.student_id,
                      "institution_id": o.institution_id,
                      "student_name": o.student_name,
                      "fathers_name": o.fathers_name,
                      "mothers_name": o.mothers_name,
                      "application_no": o.application_no,
                      "class_batch": o.class_batch,
                      "year": o.year,
                      "challan_type_id": o.challan_type_id,
                      "challan_type": o.challan_type,
                      "challan_exist": o.challan_exist,
                      "challan_number": o.challan_number,
                      "total_fees": o.total_fees,
                      "pending_amount": o.pending_amount,
                      "paid_amount": o.paid_amount,
                      "concession": o.concession,
                      "student_concession": o.student_concession,
                      "remarks_receipt": o.remarks_receipt,
                      "installment": o.installment,
                      "academic_year_id": o.academic_year_id,
                      "year_id": o.year_id,
                      "programme_id": o.programme_id,
                      "combination_id": o.combination_id,
                      "combination": o.combination,
                      "batch_id": o.batch_id,
                      "fee_batch_id": o.fee_batch_id,
                      "second_language_id": o.second_language_id,
                      "second_language": o.second_language,
                      "is_nri": o.is_nri,
                      "is_nri_display": o.is_nri_display,
                      "state_id": o.state_id,
                      "last_studied_state": o.last_studied_state,
                      "district_id": o.district_id,
                      "last_studied_district": o.last_studied_district,
                      "admission_board_id": o.admission_board_id,
                      "last_studied_board": o.last_studied_board,
                      "email_id": o.email_id,
                      "student_mobile_no": o.student_mobile_no,
                      "admission_number": o.admission_number,
                      "freeship": o.freeship,
                      "fee_structure_category_id": o.fee_structure_category_id,
                      "challanIds": o.challanIds,
                      "fathers_mobile_no": o.fathers_mobile_no,
                      "mothers_mobile_no": o.mothers_mobile_no,
                      "student_minimum_amount": o.student_minimum_amount,
                      "payment_block": o.payment_block,
                      "payment_block_print": o.payment_block_print,
                      "receipt_view": o.receipt_view,
                      "receipt_ids": o.receipt_ids,
                      "otherFees": o.otherFees,
                      "arrearFees": o.arrearFees,
                      "settled_amount": o.settled_amount,
                      "non_settled_amount": o.non_settled_amount,
                      "pay_amount": o.amount,
                      "minimum_amount": o.minimum_amount,
                      "possible_installment": o.possible_installment,
                      "fee_details": o.fee_details,
                      "discount_details": o.discount_details,
                      "fee_type_id": o.fee_type_id,
                      "paymentKey": o.paymentKey,
                      "amount": o.amount,
                      "challan_id": challan_id
                    },
                    "orderId": order_id,
                    "paymentDate": _this4.datePipe.transform(_this4.paidDate, 'yyyy-MM-dd'),
                    "academic_year_id": order.academic_year_id
                  }; // alert(JSON.stringify(response));

                  _this4.paymentResponse(response, 'fee-v3');

                  console.log(response);
                };

                var cancelCallback = function cancelCallback(error) {
                  console.log(error);
                  var errors = error.error;

                  _this4.gelService.presentAlert_g(errors.description);

                  _this4.isEnable = false; // var response = {
                  //   'message':'',
                  //   'student_name': '',
                  //   'payment_id': '',
                  //   'payment_date': '',
                  //   'amount': '',
                  //   'status': '',
                  //   "isEnable": this.isEnable
                  // }
                  //this.openModal(response);
                };

                RazorpayCheckout.open(options, successCallback, cancelCallback);
                console.log(_this4.status);
              }, function (error) {
                _this4.gelService.loadingDismiss();

                if (error.status == 401) {
                  _this4.authService.loginAgain(); //this.router.navigateByUrl('/login');

                } else if (error.status == 400) {
                  _this4.error = error.message;
                  console.error("Error!", error.status_code, error.message);

                  _this4.gelService.presentAlert_g(_this4.error);
                } else {
                  console.log(error);

                  _this4.gelService.presentAlert_g("Please check your Internet Connection1");
                }
              });
            }
          }
        }, {
          key: "paymentResponse",
          value: function paymentResponse(response, type) {
            var _this5 = this;

            console.log(response, 'sdfd');

            if (type === 'fees') {
              var link1 = "student/" + this.student_id + "/payment-response";
              this.gelService.loadingPresent();
              this.authService.g_postt(response, link1, this.token).subscribe(function (resp) {
                resp.isEnable = response.isEnable;
                console.log(resp);

                _this5.openModal(resp);

                _this5.gelService.loadingDismiss();
              }, function (error) {
                _this5.gelService.loadingDismiss();

                if (error.status == 401) {
                  _this5.authService.loginAgain(); //this.router.navigateByUrl('/login');

                } else if (error.status_code == 400) {
                  _this5.error = error.message;
                  console.error("Error!", error.status_code, error.message);

                  _this5.gelService.presentAlert_g(_this5.error);
                } else {
                  console.log(error);

                  _this5.gelService.presentAlert_g("Please check your Internet Connection2");
                }
              });
            }

            if (type = 'fee-v3') {
              var link1 = "pay-fee-v3/student/" + this.student_id + "/payment-response";
              this.gelService.loadingPresent();
              this.authService.g_postt(response, link1, this.token).subscribe(function (resp) {
                resp.isEnable = _this5.isEnable;
                console.log(resp);

                _this5.openModal(resp);

                _this5.gelService.loadingDismiss();
              }, function (error) {
                _this5.gelService.loadingDismiss();

                if (error.status == 401) {
                  _this5.authService.loginAgain(); //this.router.navigateByUrl('/login');

                } else if (error.status_code == 400) {
                  _this5.error = error.message;
                  console.error("Error!", error.status_code, error.message);

                  _this5.gelService.presentAlert_g(_this5.error);
                } else {
                  console.log(error); // alert("Error!"+ error.status+ "mesg:" + error.message);

                  _this5.gelService.presentAlert_g("Please check your Internet Connection2");
                }
              });
            }
          }
        }, {
          key: "openModal",
          value: function openModal(resp) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    console.log(resp); // alert(JSON.stringify(resp));

                    _context.next = 3;
                    return this.modalController.create({
                      component: _success_success_page__WEBPACK_IMPORTED_MODULE_4__.SuccessPage,
                      cssClass: 'my-custom-class',
                      componentProps: {
                        'message': resp.message,
                        'student_name': resp.student_name,
                        'payment_id': resp.payment_id,
                        'payment_date': resp.payment_date,
                        'amount': resp.amount,
                        'academicYearId': resp.academicYearId,
                        'receipt_ids': resp.receipt_ids,
                        'status': resp.status,
                        'isEnable': resp.isEnable
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          } // async generateReport(receipt_ids) {
          //   const logo = await this.getBase64ImageFromURL("../../assets/images/logo.jpeg");
          //   var link1 = "student/" + this.student_id + "/print-receipt";
          //   var data = {
          //     "ids": receipt_ids,
          //     "academic_year_id": this.academicYearId 
          //   }
          //   this.gelService.loadingPresent();
          //   this.authService.g_postt(data, link1, this.token)
          //   .subscribe(rsp => {
          //     console.log(rsp)
          //     var recieptDetails = rsp.receiptDetails
          //     var docDefinition;
          //     if(recieptDetails) {
          //       var item = rsp.receiptDetailsFeeItems[recieptDetails[0].receipt_id];
          //       var amt = 0;
          //       item.forEach(element => {
          //         amt = amt + element.amount;
          //       });
          //       console.log(amt);
          //       var formatter = new Intl.NumberFormat('en-US', {
          //         style: 'currency',
          //         currency: 'INR',
          //       });
          //       var installment;
          //       if(recieptDetails[0].challan_description)
          //         installment = recieptDetails[0].challan_description;
          //       else
          //         installment = recieptDetails[0].installment;
          //       var student_details =  [
          //         [ 
          //           {text: "Receipt No.", fontSize: 12}, 
          //           {text: ': '+ (recieptDetails[0].receipt_number) ? recieptDetails[0].receipt_number : '', margin: [ -20, 0, 0, 0 ], fontSize: 12},
          //           {text: "Payment Date", margin: [ -20, 0, 0, 0 ], fontSize: 12},
          //           {text: ': '+ (recieptDetails[0].receipt_date) ? recieptDetails[0].receipt_date : '',  margin: [ -25, 0, 0, 0 ], fontSize: 12},
          //         ],
          //         [ 
          //           {text: "NAME", fontSize: 12}, 
          //           {text: ': '+ (recieptDetails[0].student_name) ? recieptDetails[0].student_name : '', margin: [ -20, 0, 0, 0 ], fontSize: 12},
          //           {text: "CLASS", margin: [ -20, 0, 0, 0 ], fontSize: 12},
          //           {text: ': '+ (recieptDetails[0].course_name) ? recieptDetails[0].course_name : '' + ' - ' + (recieptDetails[0].batch_name) ? recieptDetails[0].batch_name : '',  margin: [ -25, 0, 0, 0 ], fontSize: 12},
          //         ],
          //         [ 
          //           {text:  "Admission No.", fontSize: 12},
          //           {text: ': '+ (recieptDetails[0].admission_number) ? recieptDetails[0].admission_number : '', margin: [ -20, 0, 0, 0 ], fontSize: 12},
          //           {text: "Installment", margin: [ -20, 0, 0, 0 ], fontSize: 12},
          //           {text: ": " + (installment) ? installment : '',  margin: [ -25, 0, 0, 0 ], fontSize: 12}
          //         ],
          //         [ 
          //           {text: ""}, 
          //           {text: ''},
          //           {text: ""},
          //           {text: ""}
          //         ],
          //         [ 
          //           {text: ""}, 
          //           {text: ''},
          //           {text: ""},
          //           {text: ""}
          //         ],
          //         [ 
          //           {text: ""}, 
          //           {text: ''},
          //           {text: ""},
          //           {text: ""}
          //         ],
          //         [ 
          //           {text: "Total Paid Amount ", fontSize: 12}, 
          //           {text: ': '+ (amt) ? formatter.format(amt) : '', margin: [ -9, 0, 0, 0 ], fontSize: 12},
          //           {text: ""},
          //           {text: ""}
          //         ],
          //         [ 
          //           {text: "Mode of Payment", fontSize: 12}, 
          //           {text: ': ' + (recieptDetails[0].payment_type) ? recieptDetails[0].payment_type : '', margin: [ -9, 0, 0, 0 ], fontSize: 12},
          //           {text: ""},
          //           {text: ""}
          //         ],
          //         [ 
          //           {text:  "Amount in words", fontSize: 12},
          //           {text: ': Rupees ' + (amt) ? this.inWords(amt) +'only' : '', margin: [ -9, 0, 0, 0 ], fontSize: 12},
          //           {text: ""},
          //           {text: ""}
          //         ]
          //       ];
          //       docDefinition = {
          //           content: [
          //             {
          //               style: 'tableExample',
          //               table: {
          //                 heights: [80, 120],
          //                 widths: ['*'],
          //                 body: [
          //                   [
          //                     {
          //                       columns: [
          //                         {
          //                             image: logo,
          //                             width: 70,
          //                             height: 80,
          //                         },
          //                         [
          //                           {text: recieptDetails[0].header1, style: 'title'},
          //                           {text: recieptDetails[0].header2, style: 'sub_title'},
          //                           {text: recieptDetails[0].header3+ ' (Student Copy)', style: 'f_title'},
          //                         ],
          //                       ]
          //                     },
          //                   ],
          //                   [
          //                     {
          //                       margin: [ 0, 20, 0,10],
          //                       style: 'header',
          //                       layout: 'noBorders',
          //                       table: {
          //                         widths: ['*',230,80,70],
          //                         body: student_details
          //                       }
          //                     }
          //                   ],
          //                 ]
          //               }
          //             }
          //           ],
          //           styles: {
          //             header: {
          //               fontSize: 9,
          //               //bold: true,
          //               margin: [0, 0, 10]
          //             },
          //             title: {
          //               bold: true,
          //               fontSize: 15,
          //               alignment: 'center',
          //               margin: [ -75, 10, 0, 0]
          //             },
          //             sub_title: {
          //               bold: true,
          //               fontSize: 12,
          //               alignment: 'center',
          //               margin: [ -75, 10, 0, 0]
          //             },
          //             f_title: {
          //               bold: true,
          //               fontSize: 10,
          //               alignment: 'center',
          //               margin: [ -75, 10, 0, 0]
          //             },
          //             footer_title: {
          //               bold: true,
          //               fontSize: 10,
          //               alignment: 'right'
          //             },
          //             tableExample: {
          //               margin: [0, 5, 0, 15]
          //             },
          //           }
          //         };
          //         this.pdfObj = pdfMake.createPdf(docDefinition);
          //         // this.pdfObj.open();
          //         if(this.plt.is('cordova')){
          //           this.pdfObj.getBuffer((buffer) => {
          //             var utf8 = new Uint8Array(buffer);
          //             var binaryArray = utf8.buffer;
          //             var blob = new Blob([binaryArray], { type: 'application/pdf'});
          //             this.file.writeFile(this.file.dataDirectory, 'PaymentReciept.pdf', blob, { replace: true }).then(fileEntry => {
          //               console.log(this.file.dataDirectory)
          //               this.fileOpener.open(this.file.dataDirectory + 'PaymentReciept.pdf', 'application/pdf');
          //             })
          //           })
          //         }else {
          //           this.pdfObj.open();
          //         }
          //     }
          //     this.gelService.loadingDismiss();
          //   })
          // }

        }, {
          key: "generateReport",
          value: function generateReport(receipt) {
            console.log(receipt);
            var url = this.authService.base_path + 'pay-fee-v3/student/' + receipt.student_id + '/print-receipt?academic_year_id=' + this.academicYearId + '&ids=' + receipt.receipt_ids + '&type=pdf';
            console.log(url);
            this.previewAnyFile.preview(url).then(function (res) {
              return console.log(res);
            })["catch"](function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "getBase64ImageFromURL",
          value: function getBase64ImageFromURL(url) {
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.setAttribute("crossOrigin", "anonymous");

              img.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
              };

              img.onerror = function (error) {
                reject(error);
              };

              img.src = url;
            });
          }
        }, {
          key: "inWords",
          value: function inWords(num) {
            var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
            var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            var n = [];
            if ((num = num.toString()).length > 9) return 'overflow';
            n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) return;
            var str = '';
            str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
            str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
            str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
            str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
            str += n[5] != 0 ? (str != '' ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
            return str;
          }
        }]);

        return PaymentPage;
      }();

      _PaymentPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_5__.PreviewAnyFile
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
        }];
      };

      _PaymentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PaymentPage);
      /***/
    },

    /***/
    38051:
    /*!************************************************!*\
      !*** ./src/app/proj/payment/payment.page.scss ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-size: 15px;\n}\n\nion-slides {\n  width: 100% !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #d5d2d26b;\n}\n\n.tabl ion-col {\n  border: 1px solid #d5d2d26b;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\n.tabl1 ion-row {\n  border-right: 0;\n}\n\n.tabl1 ion-col {\n  border: 0;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\n.grid-bordered .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 160%;\n  font-size: 12px;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #620b23;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.abst_list {\n  background: white;\n}\n\n.a_list {\n  background: #e4e2e2;\n  color: black;\n}\n\n.button-1 {\n  padding: 0.5rem;\n  margin: 0.1rem;\n  background: #620b23;\n  border: 1px solid #ccc;\n  color: #fff;\n}\n\n.button-1:disabled {\n  padding: 0.5rem;\n  margin: 0.1rem;\n  background: #ccc;\n  border: 1px solid #ccc;\n  color: #857e7e;\n}\n\nion-row:last-child {\n  border-bottom: 2px solid #620b23;\n}\n\n.v {\n  color: #4f5152;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFHSTtFQUNJLGlDQUFBO0FBQVI7O0FBRUk7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFNSTtFQUNJLGVBQUE7QUFIUjs7QUFLSTtFQUNJLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBSFI7O0FBc0JJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQW5CTjs7QUE2QkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBMUJKOztBQTJCSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQXpCUjs7QUEwQlE7RUFDSSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXpCWjs7QUE4QkE7RUFDSSxrQkFBQTtBQTNCSjs7QUE0Qkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUExQlI7O0FBbUNJO0VBQ0ksYUFBQTtBQWhDUjs7QUFvQ0E7RUFDSSxpQkFBQTtBQWpDSjs7QUFvQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFqQ0o7O0FBb0NBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWpDSjs7QUFvQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBakNKOztBQW9DQTtFQUNJLGdDQUFBO0FBakNKOztBQW1DQTtFQUNJLGNBQUE7QUFoQ0oiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsIHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q1ZDJkMjZiO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDJkMjZiO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiBpbmhlcml0O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxuICAgIFxufVxuXG4udGFibDEge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogaW5oZXJpdDtcbiAgICB9XG4gICAgXG59XG5cbi5ncmlkLWJvcmRlcmVke1xuICAgIC8vIGlvbi1yb3d7XG4gICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC8vICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgLy8gICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvLyAgIGJvcmRlci13aWR0aDogMXB4IDBweCAxcHggMHB4O1xuICAgIC8vICAgYm9yZGVyLWNvbG9yOiAjNWY1NzU3O1xuICAgIC8vICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgLy8gLy8gICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC8vIH1cbiAgICAucm93LXRleHR7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC8vIGlvbi1jb2x7XG4gICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC8vICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDBweCAxcHg7XG4gICAgLy8gICBib3JkZXItY29sb3I6ICNjY2M2YzY7XG4gICAgLy8gfVxufVxuXG4udGh1bW5haWxze1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLmxpc3QtdGh1bWJuYWlse1xuICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgLmltZy10aHVtYntcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgcmdiKDIxMSwgMTIsIDEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNjAlOyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjowIDJweCAwIDA7IFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICBjb2xvcjogIzYyMGIyMztcbiAgICB9XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDExNiwgMTA5LCAxMDkpO1xufVxuXG5cblxuaW9uLWdyaWQge1xuICAgIC8vIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMXB4IDA7XG4gICAgfVxufVxuXG4uYWJzdF9saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmFfbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2U0ZTJlMjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24tMSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogMC4xcmVtO1xuICAgIGJhY2tncm91bmQ6ICM2MjBiMjM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi0xOmRpc2FibGVkIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwLjFyZW07XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGNvbG9yOiAjODU3ZTdlOyBcbn1cblxuaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyMGIyMztcbn1cbi52IHtcbiAgICBjb2xvcjogIzRmNTE1Mjtcbn0iXX0= */";
      /***/
    },

    /***/
    19191:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/payment/payment.page.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title> Fees </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-segment color=\"primary\" [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" scrollable>\n    <ion-segment-button value=\"fees\" checked>\n      <ion-label>Fees</ion-label> -->\n      <!-- <ion-icon name=\"cash\"></ion-icon> -->\n    <!-- </ion-segment-button>\n    <ion-segment-button *ngIf=\"isTab\" value=\"fee-v3\">\n      <ion-label>Pay Fee</ion-label> -->\n      <!-- <ion-icon name=\"cash\"></ion-icon> -->\n    <!-- </ion-segment-button>\n  </ion-segment> -->\n  <!-- <div [ngSwitch]=\"type\"> -->\n    <!-- <ion-list *ngSwitchCase=\"'fee-v3'\"> -->\n      <ion-list>\n      <div *ngIf=\"!isError\">\n        <div *ngIf=\"admissionFeesInStudentDashboard == 0\">\n          <p style=\"margin-top: 2rem;text-align: center;font-size: 16px;color: red;\">ADMISSION FEE PAYMENT IS CLOSED</p>\n        </div>\n        <div *ngIf=\"admissionFeesInStudentDashboard == 1\">\n          <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n          <!-- <div class=\"thumnails\" >\n            <div class=\"list-thumbnail\">\n              <div class=\"img-thumb\"> -->\n                <ion-grid class=\"tabl \">\n                  <ion-row class=\"a_list \">\n                    <!-- <ion-col class=\"ion-col\" size=\"2.5\">\n                      <p>Fee Type</p>\n                    </ion-col>\n                    <ion-col class=\"ion-col\" size=\"1.7\">\n                      <p>Class</p>\n                    </ion-col> -->\n                    <ion-col class=\"ion-col\" size=\"4\">\n                      <p>Total Fees</p>\n                    </ion-col>\n                    <ion-col class=\"ion-col\" size=\"4\">\n                      <p>Paid Amount</p>\n                    </ion-col>\n                    <ion-col class=\"ion-col\" size=\"4\">\n                      <p>Balance</p>\n                    </ion-col>\n                    <!-- <ion-col class=\"ion-col\" size=\"1.7\">\n                      <p>Paying Amount</p>\n                    </ion-col>\n                    <ion-col class=\"ion-col\" size=\"2.3\">\n                      <p>Action</p>\n                    </ion-col> -->\n                  </ion-row>\n                  <span *ngFor=\"let order of orders1\" >\n                    <ion-row class=\"abst_list  \" >\n                      <!-- <form [formGroup]=\"myForm\"></form> -->\n                      <!-- <ion-col class=\"ion-col\" size=\"2.5\">\n                        <p style=\"text-align: left;\" class=\"v\">{{order.challan_type}}</p>\n                      </ion-col>\n                      <ion-col class=\"ion-col\" size=\"1.7\">\n                        <p class=\"v\">{{order.year}}</p>\n                      </ion-col> -->\n                      <ion-col class=\"ion-col\" size=\"4\">\n                        <p class=\"v\">{{order.total_fees | currency:'INR'\n                        }}</p>\n                      </ion-col>\n                      <ion-col  class=\"ion-col\" size=\"4\">\n                        <p class=\"v\">{{order.paid_amount | currency:'INR'}}</p>\n                       \n                      </ion-col>\n                      <ion-col class=\"ion-col\" size=\"4\">\n                        <p class=\"v\">{{order.pending_amount | currency:'INR'}}</p>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row class=\"tabl1\">\n                      <ion-col>&nbsp;</ion-col>\n                    </ion-row>\n                    <ion-row class=\"tabl1\" *ngIf=\"setting.hide_pay_button_in_student_dashboard_and_online_admission_pay_fee != 1\">\n                      <ion-col size=\"4\">\n                        <p style=\"margin-top: 10px;\">Amount To Pay</p>\n                      </ion-col>\n                      <ion-col class=\"ion-col\" size=\"4\">\n                        <ion-input placeholder=\"Enter Amount\" (ionChange)=\"onChangeAmount($event, order.pending_amount)\" type=\"number\" [value]=\"order.pending_amount\"></ion-input>\n                      </ion-col>\n                      <ion-col class=\"ion-col\" size=\"4\">\n                        <button [disabled]=\"!isValid || order.pending_amount === 0 || order.payment_block === 1\" (click)=\"generateOrder(order, 'fee-v3')\"  class=\"button-1\" >Pay</button>\n                        <!-- <button (click)=\" generateReport(order)\" *ngIf=\"order.receipt_ids\" class=\"button-1\">Print</button> -->\n                      </ion-col>\n                    </ion-row>\n                  </span>\n                  \n                  <!-- <div *ngIf=\"orders.length != 0\">\n                    <ion-row class=\"abst_list\"  *ngFor=\"let order of orders\">\n                      <ion-col size=\"3.3\">\n                          <p style=\"text-align: left;\" class=\"v\">{{order.challan_number}}</p>\n                      </ion-col>\n                      <ion-col size=\"3.5\">\n                          <p class=\"v\">{{order.amount  | currency:'INR' }}</p>\n                      </ion-col>\n                      <ion-col size=\"3.2\" >\n                        <p class=\"v\">{{order.due_date}}</p>\n                      </ion-col>\n                      <ion-col size=\"2\" *ngIf=\"order.action == 'Print'\">\n                        <button (click)=\" generateReport(order.receipt_ids)\" [disabled]=\"!order.receipt_ids\" class=\"button-1\">Print</button>\n                      </ion-col>\n                      <ion-col size=\"2\" *ngIf=\"order.action == 'Pay'\">\n                        <button (click)=\"generateOrder(order)\" [disabled]=\"order.pay_fee_disable == 'Y'\" class=\"button-1\">Pay</button>\n                      </ion-col>\n                      <ion-col size=\"2\" *ngIf=\"order.action == 'Due Date Passed'\">\n                        <p style=\"color: red;\">Due Date Passed</p>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                  <div *ngIf=\"orders.length == 0\">\n                    <ion-row class=\"abst_list\">\n                      <ion-col>\n                        Data Not Found\n                      </ion-col>\n                    </ion-row>\n                  </div> -->\n                </ion-grid>\n              <!-- </div>\n            </div>\n          </div> -->\n          \n        </div>\n      </div>\n      <ion-card *ngIf=\"isError\" style=\"text-align: center;color: #000;margin: 15px;\">\n        <h3>{{error}}</h3>\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n      </ion-card>\n    \n  </ion-list>\n    <!-- <ion-list *ngSwitchCase=\"'fees'\"> -->\n      \n      <ion-list>\n        \n      <div *ngIf=\"!isError\">\n        <div *ngIf=\"admissionFeesInStudentDashboard == 0\">\n          <p style=\"margin-top: 2rem;text-align: center;font-size: 16px;color: red;\">ADMISSION FEE PAYMENT IS CLOSED</p>\n        </div>\n        <div *ngIf=\"admissionFeesInStudentDashboard == 1\">\n          <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n            <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n          <!-- <ion-list-header><h4 style=\"color: #620b23;\" >Paid Details</h4></ion-list-header> -->\n          <!-- <div class=\"thumnails\" >\n              <div class=\"list-thumbnail\">\n                <div class=\"img-thumb\"> -->\n                <ion-grid class=\"tabl \">\n                  <ion-row class=\"a_list \">\n                    <ion-col size=\"3.2\">\n                      <p>Installments</p>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                      <p>Amount</p>\n                    </ion-col>\n                    <!-- <ion-col size=\"2.2\">\n                      <p>Due Date</p>\n                    </ion-col> -->\n                    <ion-col size=\"3.2\">\n                      <p>Paid Date</p>\n                    </ion-col>\n                    <ion-col >\n                      <p>Reciept</p>\n                    </ion-col>\n                  </ion-row>\n                  <div *ngIf=\"orders.length != 0\">\n                    <ion-row class=\"abst_list \"   *ngFor=\"let order of orders\">\n                      <ion-col size=\"3.2\">\n                          <p style=\"text-align: left;\" class=\"v\">{{order.challan_number}}</p>\n                      </ion-col>\n                      <ion-col size=\"3\">\n                          <p class=\"v\">{{order.amount  | currency:'INR' }}</p>\n                      </ion-col>\n                      <!-- <ion-col size=\"2.2\" >\n                        <p class=\"v\">{{order.due_date}}</p>\n                      </ion-col> -->\n                      <ion-col size=\"3.2\" >\n                        <p class=\"v\">{{order.payment_date}}</p>\n                      </ion-col>\n                      <ion-col  *ngIf=\"order.action == 'Print'\">\n                        <div *ngIf=\"order.receipt_ids\">\n                          <button (click)=\" generateReport(order)\" [disabled]=\"!order.receipt_ids\" class=\"button-1\">Print</button>\n                        </div>\n                        <div *ngIf=\"!order.receipt_ids\" style=\"text-align: center;\">\n                          <span style=\"color: red; \">\n                            Reciept Not Available</span>\n                        </div>\n                      </ion-col>\n                      <ion-col  *ngIf=\"order.action == 'Pay'\">\n                        <button (click)=\"generateOrder(order, 'fees')\" [disabled]=\"order.pay_fee_disable == 'Y'\" class=\"button-1\">Pay</button>\n                      </ion-col>\n                      <ion-col  *ngIf=\"order.action == 'Due Date Passed'\">\n                        <p style=\"color: red;\">Due Date Passed</p>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                  <div *ngIf=\"orders.length == 0\">\n                    <ion-row class=\"abst_list row-text\">\n                      <ion-col>\n                        Data Not Found\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-grid>\n                <!-- </div>\n                </div>\n                </div> -->\n        </div>\n      </div>\n      <ion-card *ngIf=\"isError\" style=\"text-align: center;color: #000;margin: 15px;\">\n        <h3>{{error}}</h3>\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n      </ion-card>\n    </ion-list>\n\n   \n  <!-- </div> -->\n  \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_payment_payment_module_ts-es5.js.map