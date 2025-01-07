(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_circular_circularsingle_circularsingle_module_ts"], {
    /***/
    53064:
    /*!*******************************************************************************!*\
      !*** ./src/app/proj/circular/circularsingle/circularsingle-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircularsinglePageRoutingModule": function CircularsinglePageRoutingModule() {
          return (
            /* binding */
            _CircularsinglePageRoutingModule
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


      var _circularsingle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./circularsingle.page */
      66596);

      var routes = [{
        path: '',
        component: _circularsingle_page__WEBPACK_IMPORTED_MODULE_0__.CircularsinglePage
      }];

      var _CircularsinglePageRoutingModule = /*#__PURE__*/_createClass(function CircularsinglePageRoutingModule() {
        _classCallCheck(this, CircularsinglePageRoutingModule);
      });

      _CircularsinglePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CircularsinglePageRoutingModule);
      /***/
    },

    /***/
    52920:
    /*!***********************************************************************!*\
      !*** ./src/app/proj/circular/circularsingle/circularsingle.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircularsinglePageModule": function CircularsinglePageModule() {
          return (
            /* binding */
            _CircularsinglePageModule
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


      var _circularsingle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./circularsingle-routing.module */
      53064);
      /* harmony import */


      var _circularsingle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./circularsingle.page */
      66596);

      var _CircularsinglePageModule = /*#__PURE__*/_createClass(function CircularsinglePageModule() {
        _classCallCheck(this, CircularsinglePageModule);
      });

      _CircularsinglePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _circularsingle_routing_module__WEBPACK_IMPORTED_MODULE_0__.CircularsinglePageRoutingModule],
        declarations: [_circularsingle_page__WEBPACK_IMPORTED_MODULE_1__.CircularsinglePage]
      })], _CircularsinglePageModule);
      /***/
    },

    /***/
    66596:
    /*!*********************************************************************!*\
      !*** ./src/app/proj/circular/circularsingle/circularsingle.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircularsinglePage": function CircularsinglePage() {
          return (
            /* binding */
            _CircularsinglePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_circularsingle_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./circularsingle.page.html */
      26597);
      /* harmony import */


      var _circularsingle_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./circularsingle.page.scss */
      30531);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      85838);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);

      var _CircularsinglePage = /*#__PURE__*/function () {
        function CircularsinglePage(activatedroute, router, authService, previewAnyFile, generalts, domSanitizer) {
          _classCallCheck(this, CircularsinglePage);

          this.activatedroute = activatedroute;
          this.router = router;
          this.authService = authService;
          this.previewAnyFile = previewAnyFile;
          this.generalts = generalts;
          this.domSanitizer = domSanitizer;
        }

        _createClass(CircularsinglePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_tok");
            this.notice_id = this.activatedroute.snapshot.paramMap.get("notice_id");
            console.log("notice_id", this.notice_id);
            this.getNoticeValue();
          }
        }, {
          key: "fileopen",
          value: function fileopen(file) {
            console.log(file, "file");
            this.previewAnyFile.preview(file).then(function (res) {
              return console.log(res);
            })["catch"](function (error) {
              return console.error(error);
            }); // const options: DocumentViewerOptions = {
            //   title: 'My PDF'
            // }
            // this.document.viewDocument(file, 'application/pdf', options)
          }
        }, {
          key: "html",
          value: function html(d) {
            return this.domSanitizer.bypassSecurityTrustHtml(d);
          }
        }, {
          key: "getNoticeValue",
          value: function getNoticeValue() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
                    link = "student/" + c_stu + "/notice/" + this.notice_id; // "student/" + c_stu + "/notices?type=Notices&paginate=0";

                    console.log(link, "link", "this.c_stud ", c_stu);
                    this.authService.g_get(data, link, this.token).subscribe(function (data) {
                      load.dismiss();
                      _this.noticeData = data;
                      console.log(data, "prof123");
                    }, function (error) {
                      load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status == 401) {
                        _this.authService.loginAgain(); //this.router.navigateByUrl('/login');

                      } else if (error.status_code == 400) {
                        _this.err = error.message;
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

        return CircularsinglePage;
      }();

      _CircularsinglePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__.PreviewAnyFile
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
        }];
      };

      _CircularsinglePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-circularsingle',
        template: _raw_loader_circularsingle_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_circularsingle_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CircularsinglePage);
      /***/
    },

    /***/
    30531:
    /*!***********************************************************************!*\
      !*** ./src/app/proj/circular/circularsingle/circularsingle.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div {\n  padding: 10px;\n}\n\nh4 {\n  color: #ae5c50;\n}\n\n.label {\n  color: white;\n  padding: 7px;\n  font-family: Arial;\n  background-color: #620b23;\n  float: right;\n  text-align: center;\n  font-size: 14px;\n}\n\n.img1 {\n  width: 15px;\n  top: 3px;\n  position: relative;\n}\n\n.row {\n  position: relative;\n  right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bGFyc2luZ2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUdJLGNBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6ImNpcmN1bGFyc2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuaDQge1xuIFxuICAgIFxuICAgIGNvbG9yOiAjYWU1YzUwO1xufVxuLmxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwYjIzO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmltZzEge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHRvcDogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTJweDtcbn0iXX0= */";
      /***/
    },

    /***/
    26597:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/circular/circularsingle/circularsingle.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"circular\"></ion-back-button>\n        </ion-buttons>\n        <!-- <span style=\"font-size: 18px;\">\n      \n    </span> -->\n        <ion-title>Assignment / Notice</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- <ion-grid>\n      <ion-row>\n        <ion-col><h6 class=\"desc-title\">Title</h6>\n          {{ this.noticeBoardInfo.title }}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h6 class=\"desc-title\">Description</h6>\n          <zoom-area\n            [(scale)]=\"scale\"\n            (afterZoomIn)=\"afterZoomIn($event)\"\n            (afterZoomOut)=\"afterZoomOut($event)\"\n            [(controls)]=\"showControls\"\n          >\n            <span [innerHTML]=\"description\" imageViewer></span>\n          </zoom-area>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   -->\n\n<ion-content>\n\n    <div *ngIf=\"noticeData\" style=\"padding: 35px 0 1px 0;\n    border-bottom: 2px solid #620b23;\n    \">\n        <span class=\"label\"><img class=\"img1\" src=\"assets/images/calendar.png\" /><span style=\"padding: 10px;\">{{ noticeData.notice_date }}</span></span><br/>\n        <br/>\n\n        <ion-item class=\"row\">\n            <ion-grid style=\"margin: -10px 0 -10px 0;\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h4 style=\"font-size: 15px; font-weight: 700;\">\n                            Title\n                        </h4>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <h6  style=\"font-size: 15px;\">\n                            {{noticeData.title}}\n                        </h6>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n           \n            \n        </ion-item>\n        <ion-item class=\"row\">\n            <ion-grid style=\"margin: -10px 0 -10px 0;\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h4 style=\"font-size: 15px; font-weight: 700;\">\n                            Subject\n                        </h4>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <h6  style=\"font-size: 15px;\">\n                            {{noticeData.subject_name}}\n                        </h6>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-item class=\"row\">\n            <ion-grid style=\"margin: -10px 0 -10px 0;\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h4 style=\"font-size: 15px; font-weight: 700;\">\n                            Faculty\n                        </h4>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <h6 style=\"font-size: 15px;\">\n                            {{noticeData.faculty_name}}\n                        </h6>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n       <div style=\"position: relative;\n       left: 4px;\">\n        <h4 style=\"font-size: 15px; font-weight: 700;\">\n            Description\n         </h4>\n         <div [innerHTML]=\"html(noticeData.content)\" \n             style=\"font-size: 15px;\n                  position: relative;\n                 right: 10px;\n                 bottom: 10px;\n                 \">\n         </div>\n         <ul *ngIf=\"noticeData.files\" style=\"position: relative;\n         right: 18px;\n         bottom: 30px;\n         font-size: 18px;\">\n             <li *ngFor=\"let file of noticeData.files;let i=index\" style=\"padding: 10px;text-decoration: underline;\" (click)=\"fileopen(file)\">\n                 Download File - {{i+1}}</li>\n         </ul>\n       </div>\n        \n\n    </div>\n    <div *ngIf=\"noticeData\">\n        <!-- {{noticeData|json}} -->\n        <ion-card *ngIf=\"noticeData.length==0\" style=\"text-align: center;color: #000;margin: 15px;\">\n            <h3>No Assignment / Notice</h3>\n\n            <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n        </ion-card>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_circular_circularsingle_circularsingle_module_ts-es5.js.map