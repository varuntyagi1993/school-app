(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_profile_profile_module_ts"], {
    /***/
    63990:
    /*!********************************************************!*\
      !*** ./src/app/proj/profile/profile-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageRoutingModule": function ProfilePageRoutingModule() {
          return (
            /* binding */
            _ProfilePageRoutingModule
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.page */
      4251);

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
      }];

      var _ProfilePageRoutingModule = /*#__PURE__*/_createClass(function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      });

      _ProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePageRoutingModule);
      /***/
    },

    /***/
    20000:
    /*!************************************************!*\
      !*** ./src/app/proj/profile/profile.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageModule": function ProfilePageModule() {
          return (
            /* binding */
            _ProfilePageModule
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-routing.module */
      63990);
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page */
      4251);

      var _ProfilePageModule = /*#__PURE__*/_createClass(function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      });

      _ProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
      })], _ProfilePageModule);
      /***/
    },

    /***/
    4251:
    /*!**********************************************!*\
      !*** ./src/app/proj/profile/profile.page.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePage": function ProfilePage() {
          return (
            /* binding */
            _ProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile.page.html */
      675);
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page.scss */
      28580);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(actionSheetController, platform, camera, router, authService, generalts) {
          _classCallCheck(this, ProfilePage);

          this.actionSheetController = actionSheetController;
          this.platform = platform;
          this.camera = camera;
          this.router = router;
          this.authService = authService;
          this.generalts = generalts;
          this.profile_img = "";
        }

        _createClass(ProfilePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_tok");
            this.get_prof(); // this.userData = JSON.parse(localStorage.getItem("profile"));
            //  console.log(this.userData, this.userData.student_name, "user");
            //
            // student_name: "FATHIMATH MASNA ANASS";
            // register_no: null;
            // joining_date: "2019-11-25";
            // dob: "1996-02-21";
            // institution_name: "St. Agnes College (Autonomous) - UG";
            // programme: "B.Com.";
            // combination: "B.Com.";
            // academic_year: "2019 - 2020";
            // academic_period: "SEMESTER V";

            console.log(this.phone, this.email, "userData");
          }
        }, {
          key: "get_prof",
          value: function get_prof() {
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
                    link = "student/" + c_stu + "/profile";
                    console.log(link, "link", "this.c_stud ", c_stu);
                    this.authService.g_get(data, link, this.token).subscribe(function (prof) {
                      load.dismiss();
                      localStorage.setItem("profile", JSON.stringify(prof));
                      _this.userData = prof['studentDetails'];
                      console.log(prof, "prof1");
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
          key: "logot",
          value: function logot() {
            localStorage.clear();
            this.router.navigate(["/opem"]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "profileimg",
          value: function profileimg() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var actionSheet;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: "Photo",
                      cssClass: "action-sheets-basic-page",
                      buttons: [{
                        text: "Take photo",
                        role: "destructive",
                        icon: !this.platform.is("ios") ? "ios-camera" : null,
                        handler: function handler() {
                          _this2.takePhoto();
                        }
                      }, {
                        text: "Choose photo from Gallery",
                        icon: !this.platform.is("ios") ? "ios-images" : null,
                        handler: function handler() {
                          _this2.openGallery();
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    actionSheet.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openGallery",
          value: function openGallery() {
            var _this3 = this;

            //console.log("openGallery", this.id_partner);
            var options = {
              quality: 50,
              correctOrientation: true,
              allowEdit: true,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
            };
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              _this3.base64Image = "data:image/jpeg;base64," + imageData;
              console.log(_this3.base64Image, "base64Image");

              _this3.authService.postt({
                image: _this3.base64Image,
                id: _this3.userData.phone
              }, "imagez/profileimage_customer").subscribe(function (sa) {
                console.log(sa, "da");
              }); //   this.authService
              //     .updateprofileimage_driver({
              //       image: this.base64Image
              //       //driver_id: this.driver_id
              //     })
              //     .then(result => {
              //       console.log(result, "kilid");
              //       // setTimeout(() => {
              //       //   // console.log("this.profileData()123");
              //       //   this.profileData();
              //       // }, 1500);
              //       setTimeout(() => {
              //         this.profileData();
              //       }, 1500);
              //       this.generalts.showToast("Image Uploaded Successfully");
              //     })
              //     .catch(err => {
              //       console.log(err, "errerr");
              //       this.generalts.showToast(err.message);
              //       console.log(err.message); // something bad happened
              //       return 123;
              //     });
              //   // this.profile_img.push(this.base64Image);
              //   // this.profile_img.reverse();
              // },
              // err => {
              //   // Handle error

            });
          }
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this4 = this;

            //  console.log("Take Photo ", this.id_partner);
            var options = {
              quality: 50,
              correctOrientation: true,
              allowEdit: true,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              var userData = JSON.parse(localStorage.getItem("userData")); // this.id_partner = userData.id;

              _this4.base64Image = "data:image/jpeg;base64," + imageData;
              console.log(_this4.base64Image, "base64Image"); // this.authService
              //   .updateprofileimage_driver({
              //     image: this.base64Image,
              //     driver_id: this.driver_id
              //   })
              //   .then(result => {
              //     console.log(result, "kilid");
              //     // this.profileData();
              //     setTimeout(() => {
              //       this.profileData();
              //     }, 1500);
              //     this.generalts.showToast("Image Uploaded Successfully");
              //   })
              //   .catch(err => {
              //     console.log(err, "errerr");
              //     this.generalts.showToast(err.message);
              //     console.log(err.message); // something bad happened
              //     return 123;
              //   });
            });
          }
        }, {
          key: "profileData",
          value: function profileData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var userData, driverData, load;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    userData = JSON.parse(localStorage.getItem("userData"));
                    driverData = JSON.parse(localStorage.getItem("driverData"));
                    _context3.next = 4;
                    return this.generalts.loading("Loading ...");

                  case 4:
                    load = _context3.sent;
                    _context3.next = 7;
                    return load.present();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      _ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService
        }];
      };

      _ProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-profile",
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePage);
      /***/
    },

    /***/
    28580:
    /*!************************************************!*\
      !*** ./src/app/proj/profile/profile.page.scss ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".camico {\n  background: #e2e2e2;\n  position: absolute;\n  right: 4px;\n  color: #61605f;\n  width: 31px;\n  height: 31px;\n  line-height: 1.5;\n  text-align: center;\n  top: 60px;\n  padding-top: 5px;\n  border-radius: 50%;\n}\n\nh3 {\n  font-size: 15px;\n}\n\n.imku {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n}\n\n.marR-5 {\n  margin-right: 5px !important;\n}\n\n.yel-col {\n  color: #377fffc2;\n  font-size: 34px;\n  margin: 0 auto;\n  margin-top: 14px;\n  margin-left: 9px;\n}\n\n.das {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.das ion-item div {\n  overflow: scroll !important;\n  display: flex !important;\n}\n\n.das ion-item div::-webkit-scrollbar {\n  display: none;\n  -ms-overflow-style: none;\n}\n\n.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),\n.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h {\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUk7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBRU47O0FBQUk7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7QUFFTjs7QUFTQTs7RUFFRSxxQkFBQTtBQU5GIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbWljbyB7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM2MTYwNWY7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA2MHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmlta3Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vIGZsb2F0OiByaWdodDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuXG4ubWFyUi01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cbi55ZWwtY29sIHtcbiAgY29sb3I6ICMzNzdmZmZjMjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5kYXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgaW9uLWl0ZW0ge1xuICAgIGRpdiB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLWl0ZW0ge1xuLy8gICBmb250LXdlaWdodDogODAwO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyB9XG5cbi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkLnNjLWlvbi1sYWJlbC1tZC1oOm5vdCguaXRlbS1tdWx0aXBsZS1pbnB1dHMpLFxuLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQ6bm90KC5pdGVtLW11bHRpcGxlLWlucHV0cykgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    675:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/profile/profile.page.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- (click)=\"profileimg()\" -->\n    <ion-grid no-padding *ngIf=\"userData\">\n        <ion-row>\n            <ion-col style=\"text-align: center;\">\n                <!-- size=\"3\"\n      offset=\"4\"\n      style=\"padding-left: 10px;position: relative;\" -->\n                <img src=\"../../assets/images/no-image.png\" *ngIf=\"(['',null,undefined].indexOf(userData.photo) > -1)\" class=\"imku\" />\n\n                <img class=\"imku\" *ngIf=\"(['',null,undefined].indexOf(userData.photo) === -1)\" [src]=\"userData.photo\" />\n\n                <!-- <span class=\"camico\"> [src]=\"userData.student_name\"\n          <ion-icon name=\"camera\"></ion-icon>\n        </span> -->\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class=\"das\" *ngIf=\"userData\">\n        <!-- <ion-item>\n      <ion-thumbnail>\n        <ion-label position=\"fixed\">\n          <ion-icon name=\"contact\" class=\"yel-col\"></ion-icon> Name</ion-label\n        >\n      </ion-thumbnail>\n      <ion-input disabled [(ngModel)]=\"userData.student_name\"></ion-input>\n    </ion-item> -->\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"person\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Name</h3>\n                <div>{{userData.student_name}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"information-circle-outline\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Admission No.</h3>\n                <div>{{userData.admission_number}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"calendar\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Joining Date</h3>\n                <div>{{userData.joining_date| date:'dd-LL-yyyy'}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"time\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Date of Birth</h3>\n                <div>{{userData.dob | date:'dd-LL-yyyy'}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"school\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Institute</h3>\n                <div>{{userData.institution_name}}</div>\n            </ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"paper\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Programme</h3>\n                <div>{{userData.programme}}</div>\n            </ion-label>\n        </ion-item> -->\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"book\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Class</h3>\n                <div>{{userData.combination}}  -  {{userData.batch}} </div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"mail\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Academic Year</h3>\n                <div>{{userData.academic_year}}</div>\n            </ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"calendar\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Academic Period</h3>\n                <div>{{userData.academic_period}}</div>\n            </ion-label>\n        </ion-item> -->\n\n        <!-- .//LOGOUT -->\n\n        <!-- <ion-button\n      shape=\"round\"\n      style=\"margin-top: 20px;margin-bottom: 50px;\"\n      class=\"das\"\n      (click)=\"logot()\"\n    >\n      Logout\n    </ion-button> -->\n    </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_profile_profile_module_ts-es5.js.map