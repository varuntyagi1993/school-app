(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_circular_circular_module_ts"], {
    /***/
    61473:
    /*!**********************************************************!*\
      !*** ./src/app/proj/circular/circular-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircularPageRoutingModule": function CircularPageRoutingModule() {
          return (
            /* binding */
            _CircularPageRoutingModule
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


      var _circular_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./circular.page */
      43110);

      var routes = [{
        path: '',
        component: _circular_page__WEBPACK_IMPORTED_MODULE_0__.CircularPage
      }];

      var _CircularPageRoutingModule = /*#__PURE__*/_createClass(function CircularPageRoutingModule() {
        _classCallCheck(this, CircularPageRoutingModule);
      });

      _CircularPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CircularPageRoutingModule);
      /***/
    },

    /***/
    96189:
    /*!**************************************************!*\
      !*** ./src/app/proj/circular/circular.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircularPageModule": function CircularPageModule() {
          return (
            /* binding */
            _CircularPageModule
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


      var _circular_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./circular-routing.module */
      61473);
      /* harmony import */


      var _circular_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./circular.page */
      43110);

      var _CircularPageModule = /*#__PURE__*/_createClass(function CircularPageModule() {
        _classCallCheck(this, CircularPageModule);
      });

      _CircularPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _circular_routing_module__WEBPACK_IMPORTED_MODULE_0__.CircularPageRoutingModule],
        declarations: [_circular_page__WEBPACK_IMPORTED_MODULE_1__.CircularPage]
      })], _CircularPageModule);
      /***/
    },

    /***/
    43110:
    /*!************************************************!*\
      !*** ./src/app/proj/circular/circular.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircularPage": function CircularPage() {
          return (
            /* binding */
            _CircularPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_circular_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./circular.page.html */
      79074);
      /* harmony import */


      var _circular_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./circular.page.scss */
      12176);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _CircularPage = /*#__PURE__*/function () {
        function CircularPage(platform, router, authService, generalts) {
          _classCallCheck(this, CircularPage);

          this.platform = platform;
          this.router = router;
          this.authService = authService;
          this.generalts = generalts;
          this.circularData = [];
          this.none = false;
          this.page = 1;
          this.perPage = 0;
          this.totalData = 0;
          this.totalPage = 0;
        }

        _createClass(CircularPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openCircular",
          value: function openCircular(item) {
            this.router.navigate(["/circularsingle", {
              notice_id: item.notice_id
            }]);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            //{{ API_URL  }}/student/3289/notices?type=Notices > Type 1&paginate=3
            this.token = localStorage.getItem("pas_tok");
            this.circularData = [];
            this.page = 1;
            this.perPage = 0;
            this.totalData = 0;
            this.totalPage = 0;
            this.getCircular();
          }
        }, {
          key: "getCircular",
          value: function getCircular() {
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
                    link = "student/" + c_stu + "/notices?type=Notices&paginate=0&page=" + this.page;
                    console.log(link, "link", "this.c_stud ", c_stu);
                    this.authService.g_get(data, link, this.token).subscribe(function (data) {
                      load.dismiss();
                      _this.circularData = data.data;
                      console.log(data, "prof123");

                      if (_this.circularData.length == 0) {
                        _this.none = true;
                      } else {
                        _this.none = false;
                      }

                      _this.perPage = data.per_page;
                      _this.totalData = data.to;
                      _this.totalPage = data.last_page;
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
        }, {
          key: "doInfinite",
          value: function doInfinite(event) {
            var _this2 = this;

            this.page = this.page + 1;
            var data = '';
            var c_stu = localStorage.getItem("c_stud");
            var link = "student/" + c_stu + "/notices?type=Notices&paginate=0&page=" + this.page;
            console.log(this.page);
            setTimeout(function () {
              _this2.authService.g_get(data, link, _this2.token).subscribe(function (res) {
                console.log(res);
                var t = res.data; //this.transaction = t.data;

                _this2.perPage = res.per_page;
                _this2.totalData = res.to;
                _this2.totalPage = res.last_page; //console.log(this.transaction);

                for (var i = 0; i < t.length; i++) {
                  _this2.circularData.push(t[i]);
                }
              }, function (error) {
                _this2.generalts.loadingDismiss();

                if (error.status == 401) {
                  _this2.authService.loginAgain(); //this.router.navigateByUrl('/login');

                } else if (error.status_code == 400) {
                  _this2.error = error.message;
                  console.error("Error!", error.status_code, error.message);

                  _this2.generalts.presentAlert_g(_this2.error);
                } else {
                  _this2.generalts.presentAlert_g("Please check your Internet Connection");
                }
              });

              event.target.complete(); //infiniteScroll.complete();
            }, 1000);
          }
        }]);

        return CircularPage;
      }();

      _CircularPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }];
      };

      _CircularPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-circular',
        template: _raw_loader_circular_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_circular_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CircularPage);
      /***/
    },

    /***/
    12176:
    /*!**************************************************!*\
      !*** ./src/app/proj/circular/circular.page.scss ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n  padding: 10px;\n}\n\nion-row {\n  background: #620b23;\n  text-align: left;\n  padding-left: 5px !important;\n}\n\n.icon-info-col {\n  padding: 0px 10px 0px 0px !important;\n  background: #e4e2e2;\n  border-bottom: 2px solid #620b23;\n}\n\n.icon-col {\n  background: #620b23;\n  padding: 0px 10px 0px 0px !important;\n}\n\n.divider {\n  border-bottom: 1px solid #e4e2e2;\n  padding: 5px 0;\n}\n\n.img1 {\n  width: 20px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFFQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBRUEsbUJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdFO0VBQ0ksbUJBQUE7RUFDRixvQ0FBQTtBQUFKOztBQUlFO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBQ0UsZ0JBQUE7QUFBTiIsImZpbGUiOiJjaXJjdWxhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1yb3d7XG4gICAgYmFja2dyb3VuZDogIzYyMGIyMztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4IWltcG9ydGFudDtcbn1cblxuLmljb24taW5mby1jb2wge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAvL2Rpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjIwYjIzO1xuICB9XG5cbiAgLmljb24tY29sIHtcbiAgICAgIGJhY2tncm91bmQ6ICM2MjBiMjM7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuIC8vICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICB9XG5cbiAgLmRpdmlkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlMmUyO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG4gIC5pbWcxIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    79074:
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/circular/circular.page.html ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Assignment / Notice</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div *ngIf=\"!none\" style=\"margin-top: 20px;\">\n        <ion-grid *ngFor=\"let item of circularData; let i = index\" style=\"padding: 8px 10px;\" >\n            <ion-row class=\"card-row \" (click)=\"openCircular(item)\">\n                <!-- [ngClass]=\"(item.noticeList[0].readable_status=== 0 ? 'unread_data ' : 'read_data')\" -->\n                <ion-col class=\"icon-col\" size=\"4\">\n                    \n                   <div style=\"display: flex;margin-left: 6px;\">\n                    <div style=\"width: 40%;\">\n                        <img class=\"img1\" src=\"assets/images/calendar.png\" />\n                    </div>\n                    <div style=\"margin-left: 6px;\">\n                        <p style=\"font-size: 12px; color: #ffff;\">{{ item.notice_date_time }}</p></div>\n                    </div>\n                     \n\n                </ion-col>\n                <ion-col class=\"icon-info-col\" size=\"8\">\n                    <h4 style=\"padding-left: 15px; font-size: 14px;\">{{ item.title }}</h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n        <!-- ////empty -->\n       \n    </div>\n    <ion-card *ngIf=\"none\" style=\"text-align: center;color: #000;margin: 15px;\">\n\n        <!-- {{ circularData.data.length|json}} -->\n\n        <h3>No Assignment / Notice</h3>\n\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n    </ion-card>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"page < totalPage\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_circular_circular_module_ts-es5.js.map