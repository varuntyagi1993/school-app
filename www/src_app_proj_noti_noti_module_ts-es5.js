(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_noti_noti_module_ts"], {
    /***/
    52337:
    /*!**************************************************!*\
      !*** ./src/app/proj/noti/noti-routing.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotiPageRoutingModule": function NotiPageRoutingModule() {
          return (
            /* binding */
            _NotiPageRoutingModule
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


      var _noti_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./noti.page */
      49349);

      var routes = [{
        path: "",
        component: _noti_page__WEBPACK_IMPORTED_MODULE_0__.NotiPage
      }];

      var _NotiPageRoutingModule = /*#__PURE__*/_createClass(function NotiPageRoutingModule() {
        _classCallCheck(this, NotiPageRoutingModule);
      });

      _NotiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotiPageRoutingModule);
      /***/
    },

    /***/
    80095:
    /*!******************************************!*\
      !*** ./src/app/proj/noti/noti.module.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotiPageModule": function NotiPageModule() {
          return (
            /* binding */
            _NotiPageModule
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


      var _noti_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./noti-routing.module */
      52337);
      /* harmony import */


      var _noti_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./noti.page */
      49349);

      var _NotiPageModule = /*#__PURE__*/_createClass(function NotiPageModule() {
        _classCallCheck(this, NotiPageModule);
      });

      _NotiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _noti_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotiPageRoutingModule],
        declarations: [_noti_page__WEBPACK_IMPORTED_MODULE_1__.NotiPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe]
      })], _NotiPageModule);
      /***/
    },

    /***/
    49349:
    /*!****************************************!*\
      !*** ./src/app/proj/noti/noti.page.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotiPage": function NotiPage() {
          return (
            /* binding */
            _NotiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_noti_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./noti.page.html */
      88169);
      /* harmony import */


      var _noti_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./noti.page.scss */
      98102);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

      var _NotiPage = /*#__PURE__*/function () {
        function NotiPage(generalts, auth, router) {
          _classCallCheck(this, NotiPage);

          this.generalts = generalts;
          this.auth = auth;
          this.router = router;
          this.none = false;
          this.notifi = [];
        }

        _createClass(NotiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_tok");
            console.log("afs");
            this.getnoti();
          }
        }, {
          key: "datP",
          value: function datP(da) {
            // var o=new Date(da).toUTCString();
            // var gmtDateTime = moment.utc(da, "YYYY-MM-DD HH")
            // var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');
            var oi = moment__WEBPACK_IMPORTED_MODULE_4__(da).format('lll');
            return oi; //console.log(da,"got date",o,gmtDateTime,"local",local,"oi",oi);
          }
        }, {
          key: "read_noti",
          value: function read_noti(id, full_d) {
            this.router.navigate(["/noti-view", full_d]);
            console.log(id, "id");
            var link = "notifications/" + id + "/read";
            console.log(link, "link");
            var data = "";
            this.auth.g_put(data, link, this.token).subscribe(function (noti_read) {
              console.log(noti_read, "noti_read");
            });
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this = this;

            setTimeout(function () {
              console.log("Done", _this.next_page_url); // App logic to determine if all data is loaded
              // and disable the infinite scroll last_page_url last_page_url

              var link = _this.next_page_url;
              console.log(link, "link0o0");

              _this.auth.noti_scrol(link + "&limit=25", _this.token).subscribe(function (absent) {
                console.log(absent.next_page_url, "loabsentadData123");
                event.target.complete();
                _this.next_page_url = absent.next_page_url;

                for (var index = 0; index < absent.data.length; index++) {
                  console.log(absent.data, "loabsentadData12399887");
                  var element = absent.data[index];

                  _this.notifi.push(element);
                }

                console.log(_this.notifi, "loabsentadData", absent.data);
              }); // console.log(absent, "loadData");


              if (link == undefined || link == null) {
                event.target.disabled = true;
              }
            }, 500);
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            console.log(this.infiniteScroll, "toggleInfiniteScroll");
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }, {
          key: "getnoti",
          value: function getnoti() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var load, stud, data, c_stu, link;
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
                    stud = localStorage.getItem("c_stud");
                    data = "";
                    c_stu = localStorage.getItem("c_stud"); //this.dateMulti = [];
                    // var link = "notifications";

                    link = "student/" + c_stu + "/notifications?limit=25"; //var link = "notifications?limit=25";

                    console.log(link, "link");
                    this.auth.g_get(data, link, this.token).subscribe(function (absent) {
                      _this2.next_page_url = absent.next_page_url;
                      _this2.notifi = absent.data;
                      console.log(absent, "absent78", absent.data);
                      load.dismiss();

                      if (absent.data.length == 0) {
                        _this2.none = true;
                      } else {
                        _this2.none = false;
                      }
                    }, function (error) {
                      load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status == 401) {
                        _this2.auth.loginAgain(); //this.router.navigateByUrl('/login');

                      } else if (error.status_code == 400) {//this.err = error.message;
                      }
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return NotiPage;
      }();

      _NotiPage.ctorParameters = function () {
        return [{
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _NotiPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll]
        }]
      };
      _NotiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-noti",
        template: _raw_loader_noti_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_noti_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotiPage);
      /***/
    },

    /***/
    98102:
    /*!******************************************!*\
      !*** ./src/app/proj/noti/noti.page.scss ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".unread {\n  text-align: center;\n  background: #ae5c50;\n  color: #ffffff;\n}\n.unread h4 {\n  color: #ffffff;\n}\n.unread p span {\n  color: #ffffff;\n}\n.read_hdr {\n  float: right;\n  color: #cc897f;\n}\n.unread_hdr {\n  float: right;\n  color: #ffffff;\n}\n.readd {\n  text-align: center;\n  background: #dcdcdc;\n  color: #020202;\n}\n.readd h4 {\n  color: #ae5c50;\n}\n.readd p span {\n  color: #020202;\n}\n.time {\n  float: right;\n  margin: 4px;\n}\nh4,\np {\n  margin: 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 1.2em;\n  white-space: nowrap;\n}\nh4 {\n  margin: 8px;\n  margin-left: 5px;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQ0k7RUFDRSxjQUFBO0FBQ047QUFHQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQUY7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQUNJO0VBQ0UsY0FBQTtBQUNOO0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7O0VBRUUsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdBO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREYiLCJmaWxlIjoibm90aS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5yZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjYWU1YzUwO1xuICBjb2xvcjogI2ZmZmZmZjs7XG4gIGg0IHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBwIHtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuLnJlYWRfaGRyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2NjODk3Zjtcbn1cbi51bnJlYWRfaGRyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLy8gY29sb3I6ICNhZTVjNTA7XG59XG4ucmVhZGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNkY2RjZGM7XG4gIGNvbG9yOiAjMDIwMjAyO1xuICBoNCB7XG4gICAgY29sb3I6ICNhZTVjNTA7XG4gIH1cbiAgcCB7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzAyMDIwMjtcbiAgICB9XG4gIH1cbn1cblxuLnRpbWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNHB4O1xuICAvLyAgY29sb3I6ICMwMDA7XG59XG5oNCxcbnAge1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMS4yZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5oNCB7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    88169:
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/noti/noti.page.html ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Notifications </ion-title>\n       \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngFor=\"let no of notifi\">\n        <ion-card (click)=\"read_noti(no.id,no)\" style=\"text-align: left;padding: 0px 10px; \" [ngClass]=\"no.read==0 ? 'unread' : 'readd'\">\n            <h4 *ngIf=\"no.type=='ATTENDANCE'\">\n                Attendance\n                <span><ion-icon\n                    name=\"mail\"\n                    *ngIf=\"no.read==0\"\n                    class=\"unread_hdr\"\n                ></ion-icon></span>\n\n                <span><ion-icon\n                    name=\"mail-open\"\n                    *ngIf=\"no.read!=0\"\n                    class=\"read_hdr\"\n                ></ion-icon></span>\n            </h4>\n            \n            <h4  *ngIf=\"no.type!='ATTENDANCE'\">\n                Notice<span><ion-icon\n            name=\"mail\"\n            *ngIf=\"no.read==0\"\n            class=\"unread_hdr\"\n          ></ion-icon\n        ></span>\n\n                <span><ion-icon\n            name=\"mail-open\"\n            *ngIf=\"no.read!=0\"\n            class=\"read_hdr\"\n          ></ion-icon\n        ></span>\n            </h4>\n\n            <!-- [ngClass]=\"no.read==0 ? 'unread_hdr' : 'read_hdr'\" -->\n            <!-- | date:'MMM d yy, h:mm a' -->\n            <p>{{no.message}}<br /></p>\n            <!-- <p class=\"time\">{{no.date| date:'MMM dd yy, h:mm a'}}</p> -->\n            <p class=\"time\">{{datP(no.date)}}</p>\n        </ion-card>\n    </div>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more Notifications...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-card *ngIf=\"none==true\" style=\"text-align: center;color: #000;\">\n        <h3>No Notifications</h3>\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n    </ion-card>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_noti_noti_module_ts-es5.js.map