(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_home_home_module_ts"], {
    /***/
    424:
    /*!******************************************!*\
      !*** ./src/app/proj/home/home.module.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      73394);

      var _HomePageModule = /*#__PURE__*/_createClass(function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      });

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: "",
          component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
        }])],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    73394:
    /*!****************************************!*\
      !*** ./src/app/proj/home/home.page.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      61559);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      97090);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/firebase/ngx */
      41636);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(popoverController, menu, generalts, auth, router, alertController, firebaseX) {
          _classCallCheck(this, HomePage);

          this.popoverController = popoverController;
          this.menu = menu;
          this.generalts = generalts;
          this.auth = auth;
          this.router = router;
          this.alertController = alertController;
          this.firebaseX = firebaseX;
          this.segs = "Regular";
          this.add = false;
          this.submenu = false;
          this.Institution = [];
          this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.token = localStorage.getItem("pas_tok");
            this.c_stud = localStorage.getItem("c_stud");
            this.firebase_token(this.c_stud);
            console.log("ionViewWillEnter", ["", null, undefined].indexOf(this.c_stud) > -1, this.c_stud); // this.get_sms_c(this.c_stud);

            if (["", null, undefined].indexOf(this.c_stud) > -1) {
              this.get_stud(); // this.menu.enable(true);
              // this.menu.swipeGesture(true);
              //this.menu.open('first');

              var prr = localStorage.getItem("profile");
              console.log(prr, 'fghh');
              setTimeout(function () {
                if (["", null, undefined].indexOf(prr) > -1) {
                  console.log('fffashok');

                  _this.stud();
                }
              }, 2000);
            } // this.get_sms_c();

          }
        }, {
          key: "menuIs",
          value: function menuIs() {
            this.newItemEvent.emit('item1');
          }
        }, {
          key: "get_sms_c",
          value: function get_sms_c(st_id) {
            var _this2 = this;

            // return
            var data = "";

            if (st_id) {
              this.auth.g_get(data, "student/" + st_id + "/notifications/count/unread", this.token).subscribe(function (smscount) {
                _this2.sms_count = smscount.count;
                console.log(smscount.count, "smscount");
              }, function (error) {
                // load.dismiss();
                console.error("Error!", error.status_code, error.message);

                if (error.status == 401) {
                  _this2.auth.loginAgain(); //this.router.navigateByUrl('/login');

                } else if (error.status_code == 400) {
                  _this2.err = error.message;
                } else if (error.status === 401 || error.status === 422) {
                  // this.error = true;
                  // this.loginError = "Invalid Credentials. Please Enter valid Details ";
                  console.log("error log list: ", error);
                  console.log("error log list: ", error.statusText);
                  console.log("error log list: ", error.message); //  localStorage.clear();
                  // this.generalts.loginAgain();  
                  // this.hide = true; 
                  // this.location.back();

                  _this2.router.navigateByUrl('/opem');
                }
              });
            } // console.log("fasd");

          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.get_sms_c(this.c_stud);
            this.get_prof(this.c_stud);
            this.menu.enable(true);
            this.menu.swipeGesture(true);
            console.log("ionViewDidEnter fg");
          }
        }, {
          key: "rout",
          value: function rout(val) {
            console.log(val, "val");
            this.router.navigate([val]);
          }
        }, {
          key: "stud",
          value: function stud() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this3 = this;

              var inputArray, ss, _iterator, _step, name, alert;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    inputArray = [];
                    this.c_stud = localStorage.getItem("c_stud");
                    ss = JSON.parse(localStorage.getItem("stu"));
                    console.log(localStorage.getItem("stu"), 'As111');

                    if (!ss) {
                      _context.next = 13;
                      break;
                    }

                    console.log(this.student_l, "ASd", ss);
                    _iterator = _createForOfIteratorHelper(ss);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        name = _step.value;

                        // console.log(name, "nameloop", name.student_id.toString(), this.c_stud);
                        if (name.student_id == this.c_stud) {
                          console.log(name.student_id, "name.student_id");
                          inputArray.push({
                            type: "radio",
                            label: name.student_name,
                            value: name.student_id,
                            checked: true
                          });
                        } else {
                          inputArray.push({
                            type: "radio",
                            label: name.student_name,
                            value: name.student_id,
                            checked: false
                          });
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    console.log(inputArray, "inputArray");
                    _context.next = 11;
                    return this.alertController.create({
                      header: "Select Student",
                      backdropDismiss: false,
                      buttons: [{
                        text: "OK",
                        handler: function handler(data) {
                          console.log("out", data);
                          localStorage.setItem("c_stud", data);

                          _this3.get_prof(data);

                          _this3.get_sms_c(data);
                        }
                      }],
                      inputs: inputArray
                    });

                  case 11:
                    alert = _context.sent;
                    alert.present();

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "firebase_token",
          value: function firebase_token(data) {
            var _this4 = this;

            console.log("firebase_token", data); // "update-mobile-notification-token";

            this.firebaseX.getToken().then(function (g_token) {
              console.log("The token is ".concat(g_token));

              if (g_token) {
                var data_token = {
                  token: g_token
                };

                _this4.auth.g_postt(data_token, "update-mobile-notification-token", _this4.token).subscribe(function (response) {
                  console.log(response, "token");
                });
              } else {
                setTimeout(function () {
                  _this4.firebaseX.onTokenRefresh().subscribe(function (g_token) {
                    console.log("Got a new token ".concat(g_token));
                    var data_token = {
                      token: g_token
                    };

                    _this4.auth.g_postt(data_token, "update-mobile-notification-token", _this4.token).subscribe(function (response) {
                      console.log(response, "token");
                    });
                  });
                }, 1500);
              }
            }) // save the token server-side and use it to push notifications to this device
            ["catch"](function (error) {
              return console.error("Error getting token", error);
            }); // this.firebaseX
            //   .onMessageReceived()
            //   .subscribe(data => console.log(`User opened a notification ${data}`));

            this.firebaseX.onNotificationOpen().subscribe(function (data) {
              return console.log(data);
            });
          }
        }, {
          key: "get_prof",
          value: function get_prof(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var load, data, link;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.generalts.loading("Loading ...");

                  case 2:
                    load = _context2.sent;
                    _context2.next = 5;
                    return load.present();

                  case 5:
                    data = "";
                    link = "student/" + id + "/profile";
                    console.log(link, "link", "this.c_stud ", this.c_stud);
                    this.auth.g_get(data, link, this.token).subscribe(function (prof) {
                      load.dismiss();
                      localStorage.setItem("profile", JSON.stringify(prof));
                      console.log(prof, "prof");
                      _this5.attendance = prof.attendance['percetage'];
                    }, function (error) {
                      load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status_code == 400) {
                        _this5.err = error.message;
                      } else if (error.status === 401 || error.status === 422) {
                        // this.error = true;
                        // this.loginError = "Invalid Credentials. Please Enter valid Details ";
                        console.log("error log list: ", error);
                        console.log("error log list: ", error.statusText);
                        console.log("error log list: ", error.message); //  localStorage.clear();
                        // this.generalts.loginAgain();  
                        // this.hide = true; 
                        // this.location.back();

                        _this5.router.navigateByUrl('/opem');
                      }
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "get_stud",
          value: function get_stud() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this6 = this;

              var load, data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.generalts.loading("Loading ...");

                  case 2:
                    load = _context3.sent;
                    _context3.next = 5;
                    return load.present();

                  case 5:
                    data = "";
                    this.auth.g_get(data, "students", this.token).subscribe(function (sa) {
                      load.dismiss();
                      console.log(sa, "da");

                      if ([null, undefined, ""].indexOf(sa[0]) == -1) {
                        var sas = JSON.stringify(sa);
                        console.log(sas, 'dfde');
                        localStorage.setItem("stu", sas);
                        localStorage.setItem("c_stud", sa[0].student_id); //  alert("password");

                        _this6.student_l = sa;
                        console.log(sa[0].student_id, "sassas");
                      } else if ([null, undefined, ""].indexOf(sa[0]) > -1) {
                        // alert("No Students found");
                        _this6.NostudentAlert();
                      }
                    }, function (error) {
                      load.dismiss();
                      console.error("Error!", error.status_code, error.message);

                      if (error.status_code == 400) {
                        _this6.err = error.message;
                      } else if (error.status === 401 || error.status === 422) {
                        // this.error = true;
                        // this.loginError = "Invalid Credentials. Please Enter valid Details ";
                        console.log("error log list: ", error);
                        console.log("error log list: ", error.statusText);
                        console.log("error log list: ", error.message); //  localStorage.clear();
                        // this.generalts.loginAgain();  
                        // this.hide = true; 
                        // this.location.back();

                        _this6.router.navigateByUrl('/opem');
                      }
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "NostudentAlert",
          value: function NostudentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this7 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'No Student',
                      message: 'Logout',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'close app',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          localStorage.clear();

                          _this7.router.navigate(['/opem']);

                          navigator["app"].exitApp();
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Logout',
                        handler: function handler() {
                          localStorage.clear();

                          _this7.router.navigate(['/opem']);

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          } // async presentPopover() {
          //   console.log("asdfasd");
          //   const popover = await this.popoverController.create({
          //     component: PopComponent
          //     //cssClass: "mod"
          //     // event: ev,
          //     //  translucent: true
          //   });
          //   return await popover.present();
          // }

        }, {
          key: "address",
          value: function address() {
            console.log("asdfasd");
            this.add = true;
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged() {
            console.log("asdf");
          }
        }, {
          key: "presentPopover",
          value: function presentPopover() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this8 = this;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    this.submenu = !this.submenu;

                    if (this.submenu) {
                      _context5.next = 4;
                      break;
                    }

                    this.generalts.popoverController.dismiss();
                    return _context5.abrupt("return");

                  case 4:
                    this.generalts.presentPopover1().then(function (data) {
                      console.log(_this8.generalts.instituteHit, "da;");

                      if (_this8.generalts.instituteHit) {
                        _this8.stud();

                        _this8.generalts.instituteHit = !_this8.generalts.instituteHit;
                      }

                      console.log(_this8.generalts.instituteHit, "da 123");
                    });

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_4__.Firebase
        }];
      };

      _HomePage.propDecorators = {
        newItemEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }]
      };
      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    97090:
    /*!******************************************!*\
      !*** ./src/app/proj/home/home.page.scss ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #620b23;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.card1 {\n  background: linear-gradient(to bottom, #cc6f61 0%, #54231c 100%);\n}\n\n.img1 {\n  width: 20px;\n  margin: 0px 35%;\n  margin-top: 20px;\n}\n\n.label {\n  margin-top: 5px;\n  font-size: 14px;\n  color: #ffff;\n}\n\n.text1 {\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 10px;\n  color: white;\n}\n\n.sms_c {\n  position: absolute;\n  top: 2px;\n  right: 45px;\n  color: #ae5c50;\n  background: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 2;\n  font-size: 10px;\n}\n\nion-segment {\n  color: #fff;\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked {\n  background: #bd5757;\n  color: #fff;\n  text-transform: unset;\n}\n\nion-segment .segment-button-checked:nth-child(1) {\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked:nth-child(2) {\n  border-radius: 0;\n}\n\nion-segment-button {\n  text-transform: unset !important;\n}\n\n.picker_input {\n  border: 1px solid #252525 !important;\n  border-radius: 40px;\n  margin-top: 20px;\n}\n\n.picker_input ion-input {\n  border: 1px solid transparent;\n  padding: 0;\n}\n\n.picker_input ion-icon {\n  margin: 5px !important;\n}\n\n.topicons_design {\n  margin-top: 20px;\n  color: #bdbdbd;\n}\n\n.topicons_design ion-icon {\n  font-size: 35px;\n  border: 1px solid #252525;\n  border-radius: 50%;\n  padding: 10px;\n}\n\n.topicons_design ion-label {\n  color: #252525;\n}\n\n.icons_design .active {\n  color: var(--ion-color-primary);\n  border: none !important;\n}\n\n.icons_design ion-col {\n  margin-top: 20px;\n  color: #bdbdbd;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.icons_design ion-col ion-icon {\n  font-size: 35px;\n}\n\n.prof {\n  font-size: 22px;\n  margin-top: 4px;\n}\n\n.seg {\n  background: #a93d3d;\n  margin-top: -4px;\n  height: 69px;\n  border-radius: 0;\n}\n\n.seg-btn {\n  width: 50%;\n}\n\n.line {\n  border-right: 1px solid #8b7777;\n}\n\n.line1 {\n  border-top: 1px solid #8b7777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUFDRDs7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUVFLGdFQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDRSxlQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUxFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBT0EscUJBQUE7QUFDSjs7QUFQSTtFQUNFLGdCQUFBO0FBU047O0FBUEk7RUFDRSxnQkFBQTtBQVNOOztBQUpBO0VBQ0UsZ0NBQUE7QUFPRjs7QUFKQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBT0o7O0FBSkU7RUFDRSxzQkFBQTtBQU1KOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7QUFLSjs7QUFEQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUFJRjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDRSxlQUFBO0FBR047O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBO0VBQ0UsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLDZCQUFBO0FBSUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogIzYyMGIyMztcbn1cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZDEge1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjc4NDcwIDAlLCAjYTkyYzE2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjY2M2ZjYxIDAlLCAjNTQyMzFjIDEwMCUpO1xufVxuLmltZzEge1xuICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW46IDBweCAzNSU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuLnRleHQxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc21zX2Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAycHg7XG4gICAgcmlnaHQ6IDQ1cHg7XG4gICAgY29sb3I6ICNhZTVjNTA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuaW9uLXNlZ21lbnQge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYmQ1NzU3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICNiZDU3NTc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICB9XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLnBpY2tlcl9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBpb24taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4udG9waWNvbnNfZGVzaWduIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjUyNTI1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICMyNTI1MjU7XG4gIH1cbn1cblxuLmljb25zX2Rlc2lnbiAuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc19kZXNpZ24ge1xuICBpb24tY29sIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gIH1cbn1cbi5wcm9mIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uc2VnIHtcbiAgYmFja2dyb3VuZDogI2E5M2QzZDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIGhlaWdodDogNjlweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uc2VnLWJ0biB7XG4gIHdpZHRoOiA1MCU7XG5cbn1cbi5saW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzhiNzc3Nztcbn1cbi5saW5lMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOGI3Nzc3O1xufVxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    61559:
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/home/home.page.html ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"menuIs()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Home </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      //(click)=\"presentPopover()\" routerLink=\"/login\"\n      <ion-button (click)=\"stud()\">\n        <ion-icon name=\"person\" class=\"prof\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <img src=\"assets/images/clg.png\"  /> -->\n  <img src=\"assets/images/banner_2.png\" style=\"width: 100%;\n  height: 202px;\" alt=\"\" />\n  \n    <!-- <ion-row class=\"seg\">\n      <ion-col class=\"seg-btn\">\n        <div style=\"text-align: center;\n        margin-bottom: 17px; margin-top: -7px;\">\n        <img class=\"img1\" src=\"assets/images/profile.png\" />\n        <ion-label class=\"label\">Profile</ion-label>\n        </div>\n        \n      </ion-col>\n      <ion-col>\n        <div style=\"text-align: center;\n        margin-bottom: 17px; margin-top: -11px;\">\n        <img class=\"img1\" src=\"assets/images/notification.png\" />\n        <ion-label class=\"label\">Notifications</ion-label>\n        <span *ngIf=\"sms_count\" class=\"sms_c\">{{sms_count}}</span>\n        </div>\n      </ion-col>\n    </ion-row> -->\n  \n  <ion-segment class=\"seg\" value=\"profile\">\n    <ion-segment-button value=\"profile\" class=\"seg-btn\" (click)=\"rout('/profile')\" >\n      <img class=\"img1\" src=\"assets/images/profile.png\" />\n      <ion-label class=\"label\">Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"notification\" (click)=\"rout('/noti')\">\n      <img class=\"img1\" src=\"assets/images/notification.png\" />\n      <ion-label class=\"label\">Notifications</ion-label>\n      <span *ngIf=\"sms_count\" class=\"sms_c\">{{sms_count}}</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid style=\"background: #620b23; height: 57%\">\n    <ion-row></ion-row>\n    <ion-row></ion-row>\n    <ion-row style=\"margin-top: 60px;\n    margin-bottom: 60px;\">\n      <ion-col size=\"4\" class=\"line\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/attendanc')\">\n       \n          <img class=\"img1\" src=\"assets/images/attendance.png\" />\n          <ion-label class=\"label\"> \n            <!-- <p style=\"color: #ffff;margin-top: 25px;\">96%</p> -->\n            Attendance\n            <!-- <p style=\"color: #ffff; \" *ngIf=\"attendance\n            \">{{attendance}}%</p> -->\n          </ion-label>\n          \n        </div>\n        \n      </ion-col>\n      <ion-col size=\"4\" class=\"line\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/circular')\">\n          <img class=\"img1\" src=\"assets/images/circular.png\" />\n          <ion-label class=\"label\">Assignment / Notice</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/calendar')\">\n          <img class=\"img1\" src=\"assets/images/calendar.png\" />\n          <ion-label class=\"label\">Calendar</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"line line1\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/timetable')\">\n          <img class=\"img1\" src=\"assets/images/timetable.png\" />\n          <ion-label class=\"label\">TimeTable</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"line line1\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\n        margin-top: -5px\"\n        (click)=\"rout('/marks-list')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Progress Report</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"line1\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/fee-payment')\">\n          <img class=\"img1\" src=\"assets/images/fee.png\" />\n          <ion-label class=\"label\">Fee</ion-label>\n          </div>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_home_home_module_ts-es5.js.map