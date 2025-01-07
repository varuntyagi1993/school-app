(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_assignmentedit_assignmentedit_module_ts"], {
    /***/
    26376:
    /*!************************************************!*\
      !*** ./src/assets/js/quill.imageCompressor.js ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function warnAboutOptions(options) {
        if (options.maxWidth && typeof options.maxWidth !== "number") {
          console.warn("[config error] 'maxWidth' is required to be a \"number\" (in pixels), \n  recieved: ".concat(options.maxWidth, "\n  -> using default 1000"));
          options.maxWidth = 1000;
        }

        if (options.quality && typeof options.quality !== "number") {
          console.warn("quill.imageCompressor: [config error] 'quality' is required to be a \"number\", \n  recieved: ".concat(options.quality, "\n  -> using default 0.7"));
          options.quality = 0.7;
        }

        if (options.imageType && (typeof options.imageType !== "string" || !options.imageType.startsWith("image/"))) {
          console.warn("quill.imageCompressor: [config error] 'imageType' is required be in the form of \"image/png\" or \"image/jpeg\" etc ..., \n  recieved: ".concat(options.imageType, "\n  -> using default image/jpeg"));
          options.imageType = "image/jpeg";
        }
      }

      var imageCompressor = /*#__PURE__*/function () {
        function imageCompressor(quill, options) {
          _classCallCheck(this, imageCompressor);

          this.quill = quill;
          this.options = options;
          this.range = null;
          this.debug = options.debug == null || options.debug == true;
          warnAboutOptions(options);
          var toolbar = this.quill.getModule("toolbar");
          toolbar.addHandler("image", this.selectLocalImage.bind(this));
        }

        _createClass(imageCompressor, [{
          key: "selectLocalImage",
          value: function selectLocalImage() {
            var _this = this;

            this.range = this.quill.getSelection();
            this.fileHolder = document.createElement("input");
            this.fileHolder.setAttribute("type", "file");
            this.fileHolder.setAttribute("accept", "image/*");
            this.fileHolder.setAttribute("style", "visibility:hidden");
            this.fileHolder.onchange = this.fileChanged.bind(this);
            document.body.appendChild(this.fileHolder);
            this.fileHolder.click();
            window.requestAnimationFrame(function () {
              document.body.removeChild(_this.fileHolder);
            });
          }
        }, {
          key: "fileChanged",
          value: function fileChanged() {
            var _this2 = this;

            var file = this.fileHolder.files[0];

            if (!file) {
              return;
            }

            var fileReader = new FileReader();

            fileReader.onloadend = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(evt) {
                var base64ImageSrc, base64ImageSrcNew;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      base64ImageSrc = evt.target.result;
                      console.log(evt.target.result);
                      _context.next = 4;
                      return downscaleImage(base64ImageSrc, _this2.options.maxWidth, _this2.options.imageType, _this2.options.quality, _this2.debug);

                    case 4:
                      base64ImageSrcNew = _context.sent;

                      _this2.insertToEditor(base64ImageSrcNew);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }();

            fileReader.readAsDataURL(file);
          }
        }, {
          key: "insertToEditor",
          value: function insertToEditor(url) {
            var range = this.range; // Insert the compressed image

            this.logFileSize(url);
            this.quill.insertEmbed(range.index, "image", "".concat(url)); // Move cursor to next position

            range.index++;
            this.quill.setSelection(range, "api");
          }
        }, {
          key: "logFileSize",
          value: function logFileSize(dataUrl) {
            var head = "data:image/png;base64,";
            var fileSizeBytes = Math.round((dataUrl.length - head.length) * 3 / 4);
            var fileSizeKiloBytes = (fileSizeBytes / 1024).toFixed(0);

            if (this.debug) {
              console.log("quill.imageCompressor: estimated img size: " + fileSizeKiloBytes + " kb");
            }
          }
        }]);

        return imageCompressor;
      }(); // Take an image URL, downscale it to the given width, and return a new image URL.


      function downscaleImage(_x2, _x3, _x4, _x5, _x6) {
        return _downscaleImage.apply(this, arguments);
      }
      /* harmony default export */


      function _downscaleImage() {
        _downscaleImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataUrl, newWidth, imageType, imageQuality, debug) {
          "use strict"; // Provide default values

          var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                imageType = imageType || "image/jpeg";
                imageQuality = imageQuality || 0.7; // Create a temporary image so that we can compute the height of the downscaled image.

                image = new Image();
                image.src = dataUrl;
                _context2.next = 6;
                return new Promise(function (resolve) {
                  image.onload = function () {
                    resolve();
                  };
                });

              case 6:
                oldWidth = image.width;
                oldHeight = image.height;
                newHeight = Math.floor(oldHeight / oldWidth * newWidth); // Create a temporary canvas to draw the downscaled image on.

                canvas = document.createElement("canvas");
                canvas.width = newWidth;
                canvas.height = newHeight; // Draw the downscaled image on the canvas and return the new data URL.

                ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, newWidth, newHeight);
                newDataUrl = canvas.toDataURL(imageType, imageQuality);
                return _context2.abrupt("return", newDataUrl);

              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return _downscaleImage.apply(this, arguments);
      }

      __webpack_exports__["default"] = imageCompressor;
      /***/
    },

    /***/
    39044:
    /*!*************************************************************************!*\
      !*** ./src/app/faculty/assignmentedit/assignmentedit-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignmenteditPageRoutingModule": function AssignmenteditPageRoutingModule() {
          return (
            /* binding */
            _AssignmenteditPageRoutingModule
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


      var _assignmentedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assignmentedit.page */
      7527);

      var routes = [{
        path: '',
        component: _assignmentedit_page__WEBPACK_IMPORTED_MODULE_0__.AssignmenteditPage
      }];

      var _AssignmenteditPageRoutingModule = /*#__PURE__*/_createClass(function AssignmenteditPageRoutingModule() {
        _classCallCheck(this, AssignmenteditPageRoutingModule);
      });

      _AssignmenteditPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AssignmenteditPageRoutingModule);
      /***/
    },

    /***/
    20062:
    /*!*****************************************************************!*\
      !*** ./src/app/faculty/assignmentedit/assignmentedit.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignmenteditPageModule": function AssignmenteditPageModule() {
          return (
            /* binding */
            _AssignmenteditPageModule
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


      var _assignmentedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assignmentedit-routing.module */
      39044);
      /* harmony import */


      var _assignmentedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assignmentedit.page */
      7527);
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-quill */
      67185); // Quill.register('modules/imageCompress', ImageCompress);


      var _AssignmenteditPageModule = /*#__PURE__*/_createClass(function AssignmenteditPageModule() {
        _classCallCheck(this, AssignmenteditPageModule);
      });

      _AssignmenteditPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, // QuillModule.forRoot({
        //   modules: {
        //     syntax: false,
        //     toolbar: [
        //       ["bold", "italic", "underline"],
        //       [{ list: "bullet" }],
        //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
        //       [{ font: [] }],
        //       [{ align: [] }],
        //     ],
        //   },
        // }),
        ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillModule.forRoot({
          modules: {
            syntax: false // imageCompress: {
            //   quality: 0.5, // default
            //   maxWidth: 1000, // default
            //   maxHeight: 1000, // default
            //   imageType: "image/jpeg", // default
            //   debug: true, // default
            // },

          }
        }), _assignmentedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignmenteditPageRoutingModule],
        declarations: [_assignmentedit_page__WEBPACK_IMPORTED_MODULE_1__.AssignmenteditPage]
      })], _AssignmenteditPageModule);
      /***/
    },

    /***/
    7527:
    /*!***************************************************************!*\
      !*** ./src/app/faculty/assignmentedit/assignmentedit.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssignmenteditPage": function AssignmenteditPage() {
          return (
            /* binding */
            _AssignmenteditPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_assignmentedit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./assignmentedit.page.html */
      61449);
      /* harmony import */


      var _assignmentedit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assignmentedit.page.scss */
      13837);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _assets_js_quill_imageCompressor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../assets/js/quill.imageCompressor.js */
      26376);
      /* harmony import */


      var quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! quill */
      72161);
      /* harmony import */


      var quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      85838); // import * as Quill from "quill";
      // Quill.register("modules/imageCompress", imageCompressor);
      // import { FileChooser } from "@ionic-native/file-chooser/ngx";
      // import { FilePath } from "@ionic-native/file-path/ngx";
      // import { Base64 } from "@ionic-native/base64/ngx";
      // import { DocumentViewer, DocumentViewerOptions } from "@ionic-native/document-viewer/ngx";


      var Quill = quill__WEBPACK_IMPORTED_MODULE_6__; // Use quill as normal...

      Quill.register("modules/imageCompress", _assets_js_quill_imageCompressor_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

      var _AssignmenteditPage = /*#__PURE__*/function () {
        function AssignmenteditPage(route, router, location, authService, general, formBuilder, actionSheetController, camera, // public fileChooser: FileChooser,
        // public filePath: FilePath,
        // public base64: Base64,
        // private documents: DocumentViewer,
        previewAnyFile) {
          _classCallCheck(this, AssignmenteditPage);

          this.route = route;
          this.router = router;
          this.location = location;
          this.authService = authService;
          this.general = general;
          this.formBuilder = formBuilder;
          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.previewAnyFile = previewAnyFile;
          this.assignID = "";
          this.listData = [];
          this.headerr = null;
          this.facultyDivisionId = "";
          this.textFormat = "";
          this.loadData = false;
          this.img = '';
          this.modules = {
            toolbar: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], [{
              script: "sub"
            }, {
              script: "super"
            }], [{
              indent: "-1"
            }, {
              indent: "+1"
            }], [{
              direction: "rtl"
            }], [{
              size: ["small", false, "large", "huge"]
            }], [{
              header: [1, 2, 3, 4, 5, 6, false]
            }], [{
              color: []
            }, {
              background: []
            }], [{
              font: []
            }], [{
              align: []
            }], ["video"], ["clean"], ["link", "image", "code-block"] // link and image and code
            ],
            imageCompress: {
              quality: 0.5,
              maxWidth: 1000,
              imageType: "image/jpeg" // default

            }
          };
          this.document = [];
          this.isType = false;
          this.fileType = 'file';
          this.fileList = [];
          this.count = 0;
          this.indx = 1;
          this.hide = false;
          this.selectedAll = false;
          this.selectStudentIds = [];
          this.sendAssign = false;
          this.s = [];
          this.isEdit = false;
          this.studentId = [];
          this.checkStudents = [];
        }

        _createClass(AssignmenteditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changeForm = this.formBuilder.group({
              type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              desc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              fileType: [""]
            });
            this.document = [];
            this.isEdit = false;
            this.edits = this.isEdit;
          }
        }, {
          key: "save",
          value: function save() {
            console.log(this.textFormat, "fas");
          }
        }, {
          key: "submit",
          value: function submit() {
            console.log(this.typ, this.desc, this.tittl);
          }
        }, {
          key: "onEditorContentChange",
          value: function onEditorContentChange(sdfa) {
            console.log(sdfa, "sdfa.html", this.desc);
            this.desc = sdfa.html;
          }
        }, {
          key: "changedEditor",
          value: function changedEditor(event) {
            console.log(event);
          } // update() {
          //   console.log(
          //     this.typ,
          //     this.desc,
          //     this.tittl,
          //     "123//",
          //     this.route.snapshot.paramMap.get("data"),
          //     "update data"
          //   );
          //   let dd = JSON.parse(this.route.snapshot.paramMap.get("data"));
          //   let notice = {
          //     notice: {
          //       type: "DOCS",
          //       title: this.tittl,
          //       content: this.desc,
          //       plugin_notices_type_id: this.typ,
          //     },
          //     // "documents[0]": [],
          //     academicYearId: this.academicYearId,
          //     facultyDivisionId: parseInt(this.facultyDivisionId),
          //   };
          //   this.general.loadingPresent();
          //   this.authService
          //     .g_postt_fac(notice, "teaching-staff/notices/update-notice", this.token)
          //     .subscribe(
          //       (data) => {
          //         let response = data;
          //         console.log(response, "me Data");
          //         this.general.loadingDismiss()
          //       },
          //       (error) => {
          //         alert(error);
          //         console.log(error);
          //         this.general.loadingDismiss()
          //       }
          //     );
          // }

        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.document = [];
            this.removeFileId = '';
            this.token = localStorage.getItem("pas_faculty");
            this.LoadList();
            this.headerr = this.route.snapshot.paramMap.get("topic");
            this.facultyDivisionId = this.route.snapshot.paramMap.get("facultyDivisionId");
            this.academicYearId = this.route.snapshot.paramMap.get("academicYearId");
            console.log(this.facultyDivisionId, "academicYearId111", this.academicYearId);

            if ( // [undefined, null, ""].indexOf(this.route.snapshot.paramMap.get("data")) >
            //   -1 &&
            this.headerr == "Edit Notices") {
              console.log("getDatas45", JSON.parse(this.route.snapshot.paramMap.get("data")));
              this.assignID = JSON.parse(this.route.snapshot.paramMap.get("data")).plugin_notice_id;
              this.getDatas();
            }
          }
        }, {
          key: "getDatas",
          value: function getDatas() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this3 = this;

              var load, page;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isEdit = true;
                    this.edits = this.isEdit;
                    _context3.next = 4;
                    return this.general.loading("Loading ...");

                  case 4:
                    load = _context3.sent;
                    load.present();
                    page = "teaching-staff/notices/edit-notice?notice_id=" + this.assignID;
                    this.authService.get_fac_t(page, this.token).subscribe(function (data) {
                      load.dismiss();
                      console.log(data, "getDatas");
                      var editData = data.notice;
                      _this3.files = data.files.length != 0 ? data.files : '';
                      _this3.tittl = editData.title;
                      _this3.desc = editData.content; // this.listData = data;

                      _this3.typ = editData.plugin_notices_type_id;

                      _this3.changeForm.patchValue({
                        title: editData.title,
                        type: editData.plugin_notices_type_id,
                        desc: editData.content
                      });

                      var a = data.studentIds; // a.forEach(v => {
                      //   this.studentId.push()
                      // })

                      _this3.studentId = a;
                      _this3.selectStudentIds = _this3.studentId;
                      console.log(_this3.studentId);
                    }, function (err) {
                      if (err.status == 401 || err.status == 422 || err.status == 0) {
                        if (err.statusText == "Unauthorized") {
                          _this3.general.loginAgain();

                          _this3.router.navigateByUrl("/opem");
                        }
                      }

                      load.dismiss();
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "LoadList",
          value: function LoadList() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this4 = this;

              var load, page;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.general.loading("Loading ...");

                  case 2:
                    load = _context4.sent;
                    load.present();
                    page = "teaching-staff/notices/get-notices-types";
                    this.authService.get_fac_t(page, this.token).subscribe(function (data) {
                      load.dismiss();
                      _this4.loadData = true;
                      console.log(data, "sd");
                      _this4.listData = data;

                      if (_this4.listData.length != 0) {
                        var v = _this4.listData[0];
                        console.log(v['id']);

                        _this4.changeForm.patchValue({
                          type: v['id']
                        });
                      }

                      console.log(_this4.changeForm);
                    }, function (err) {
                      console.log(err.status, "err");

                      if (err.status == 401 || err.status == 422 || err.status == 0) {
                        if (err.statusText == "Unauthorized") {
                          _this4.general.loginAgain();

                          _this4.router.navigateByUrl("/opem");
                        }
                      } else {
                        alert("server issue");
                      }

                      load.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit() {
            var _this5 = this;

            console.log(this.typ, this.desc, this.tittl, "123//", this.route.snapshot.paramMap.get("data"), "update data");
            var dd = JSON.parse(this.route.snapshot.paramMap.get("data"));
            console.log("dd.academic_year_id,", this.academicYearId);
            this.selectStudentIds.forEach(function (v) {
              console.log({
                'id': v
              }, 'ad');

              _this5.s.push({
                'id': v
              });
            });
            var notice = {
              notice: {
                type: "DOCS",
                title: this.changeForm.value.title,
                content: this.changeForm.value.desc,
                plugin_notices_type_id: this.changeForm.value.type,
                plugin_notice_id: this.assignID,
                notice_to: "STUDENTS",
                notice_type: "PERMANENT",
                academic_year_id: this.academicYearId,
                selectedStudents: this.s
              },
              academicYearId: parseInt(this.academicYearId),
              facultyDivisionId: parseInt(this.facultyDivisionId),
              removedAttachementIds: this.removeFileId,
              documents: this.document
            };
            console.log(notice);
            this.general.loadingPresent();
            this.authService.g_postt_fac(notice, "teaching-staff/notices/update-notice", this.token).subscribe(function (data) {
              var response = data;
              console.log(response, "me Data");

              _this5.location.back();

              _this5.general.loadingDismiss();
            }, function (error) {
              console.log(error);

              _this5.general.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this5.general.loginAgain();

                  _this5.router.navigateByUrl("/opem");
                }
              }
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this6 = this;

              var options;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    options = {
                      quality: 50,
                      correctOrientation: true,
                      allowEdit: true,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                      targetWidth: 2732,
                      targetHeight: 2732
                    };
                    this.camera.getPicture(options).then(function (imageData) {
                      // imageData is either a base64 encoded string or a file URI
                      // If it's base64:
                      var base64Image = "data:image/jpeg;base64," + imageData;
                      console.log(base64Image);

                      _this6.document.push(base64Image);

                      if (_this6.fileList.length == '0') {
                        _this6.count = 1;
                      } else {
                        ++_this6.count;
                      }

                      var file = {
                        fileId: _this6.count,
                        fileType: _this6.fileType,
                        fileName: '',
                        base64: base64Image
                      };

                      _this6.fileList.push(file);
                    })["catch"](function (error) {
                      return console.error(error);
                    });
                    console.log(this.fileList, this.count, 'ashok');

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this7 = this;

            console.log(event.target.files.length);
            var filename = event.target.files[0].name;
            console.log("File Name");
            console.log(filename);
            var fileReader = new FileReader();
            fileReader.readAsDataURL(event.target.files[0]);

            fileReader.onload = function () {
              console.log(fileReader.result, 'FG');

              _this7.document.push(fileReader.result);

              if (_this7.fileList.length == '0') {
                _this7.count = 1;
              } else {
                ++_this7.count;
              }

              var file = {
                fileId: _this7.count,
                fileType: _this7.fileType,
                fileName: filename,
                base64: fileReader.result
              };

              _this7.fileList.push(file); // here this method will return base64 string enjoy 

            };

            console.log(this.fileList, 'ashok');
          }
        }, {
          key: "getFile",
          value: function getFile() {
            console.log('dsfd');
            document.getElementById('fileInput').click();
          }
        }, {
          key: "changeValue",
          value: function changeValue(fileType) {
            console.log(fileType);
            if (fileType == 'image') this.isType = true;
            if (fileType == 'file') this.isType = false;
          }
        }, {
          key: "create",
          value: function create() {
            var _this8 = this;

            if (this.changeForm.invalid) {
              console.log('invalid');
            } else {
              console.log(this.changeForm.value, "this.typ,");
              var dd = JSON.parse(this.route.snapshot.paramMap.get("data"));
              console.log("dd.academic_year_id,", this.academicYearId);
              console.log(this.document);
              this.selectStudentIds.forEach(function (v) {
                console.log({
                  'id': v
                }, 'ad');

                _this8.s.push({
                  'id': v
                });
              });
              var notice = {
                notice: {
                  type: "DOCS",
                  title: this.changeForm.value.title,
                  content: this.changeForm.value.desc,
                  plugin_notices_type_id: this.changeForm.value.type,
                  selectedStudents: this.s
                },
                academicYearId: parseInt(this.academicYearId),
                facultyDivisionId: parseInt(this.facultyDivisionId),
                documents: this.document // documents: [
                //   // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADZCAYAAACtvpV",
                //   // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADZCAYAAACtvpV",
                // ],

              };
              console.log(notice); //dev.pacifyca.com/pacifyca-v2/school-demo/api/teaching-staff/notices/save-notice
              //dev.pacifyca.com/pacifyca-v2/school-demo/api/teaching-staff/notices/save-notice

              this.general.loadingPresent();
              this.authService.g_postt_fac(notice, "teaching-staff/notices/save-notice", this.token).subscribe(function (data) {
                var response = data; // this.router.navigate(["/assign-faculty"]);

                _this8.location.back();

                console.log(response, "me Data");

                _this8.general.loadingDismiss();
              }, function (error) {
                console.log(error);

                _this8.general.loadingDismiss();

                if (error.status == 401 || error.status == 422 || error.status == 0) {
                  if (error.statusText == "Unauthorized") {
                    _this8.general.loginAgain();

                    _this8.router.navigateByUrl("/opem");
                  }
                }
              });
            }
          }
        }, {
          key: "removeFile",
          value: function removeFile(id) {
            var _this9 = this;

            console.log(id);
            this.fileList.splice(id, 1);
            console.log(this.fileList);
            this.document = [];
            this.fileList.forEach(function (element) {
              _this9.document.push(element.base64);
            });
          }
        }, {
          key: "removeUFile",
          value: function removeUFile(i, file_id) {
            console.log(file_id);
            this.files.splice(i, 1);
            this.removeFileId = this.removeFileId ? this.removeFileId + ',' + file_id : file_id;
          }
        }, {
          key: "viewDocument",
          value: function viewDocument(file) {
            // 
            this.previewAnyFile.preview(file.name).then(function (res) {
              return console.log(res);
            })["catch"](function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "viewDocument1",
          value: function viewDocument1(a) {
            window.open(a.base64);
          }
        }, {
          key: "continue",
          value: function _continue() {
            var _this10 = this;

            this.hide = true;
            var a = [];
            var page = "teaching-staff/notices/students?faculty_division_allocation_id=" + this.facultyDivisionId;
            this.general.loadingPresent();
            this.authService.get_fac_t(page, this.token).subscribe(function (data) {
              console.log(data);
              var v = [];
              _this10.studentList = data;
              _this10.students = _this10.studentList;

              _this10.students.forEach(function (s) {
                v[s.id] = false;
              }); //console.log(v);


              _this10.checkStudents = v;

              if (_this10.isEdit) {
                console.log(_this10.studentId);
                var i = 0;

                _this10.studentId.forEach(function (s) {
                  _this10.checkStudents[s] = true;
                  i++;
                });

                if (i === _this10.students.length) _this10.chec = true;else _this10.chec = false;
                console.log(i, _this10.students.length, _this10.checkStudents, 'edit'); //this.studentId = a;
              }

              _this10.general.loadingDismiss();
            }, function (error) {
              console.log(error);

              _this10.general.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this10.general.loginAgain();

                  _this10.router.navigateByUrl("/opem");
                }
              }
            });
          }
        }, {
          key: "selectAll",
          value: function selectAll(c) {
            console.log(c);
            var a = [];

            if (c == true) {
              this.selectedAll = true; // if(this.edits) {
              //   this.isEdit = false;
              //   this.sendAssign = true;
              // }
              // console.log(this.items);
            } else {
              this.selectedAll = false; // if(this.edits) {
              //   this.isEdit = true;
              //   this.sendAssign = false;
              // }
              // this.postAssignmnet.selectStudentIds = [];
            }

            Object.keys(this.checkStudents).forEach(function (s) {
              a[s] = c;
            });
            this.checkStudents = a;
            console.log(this.checkStudents, 'ashok');
          }
        }, {
          key: "getStudent",
          value: function getStudent(id, event) {
            console.log(this.selectAll, 'df');
            console.log(event.detail, 'sd'); // if(event.detail['checked'] == true) {

            if (this.selectStudentIds.indexOf(id) == -1) {
              this.selectStudentIds.push(id);
            } // }


            if (event.detail['checked'] == false) {
              var index = this.selectStudentIds.indexOf(id);

              if (index !== -1) {
                this.selectStudentIds.splice(index, 1);
              }
            }

            if (this.selectStudentIds.length > 0) {
              this.sendAssign = true;
            } else {
              this.sendAssign = false;
            }

            console.log(this.selectStudentIds);
          }
        }, {
          key: "getItems",
          value: function getItems(et) {
            //this.IntiliazeItmes;
            var val = et.target.value;
            console.log(val);

            if (val && val.trim() != '') {
              this.studentList = this.students.filter(function (item) {
                return item.student_name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              console.log(this.students);
              this.content.scrollToTop(400);
              this.studentList = this.students; //this.pushEnable = false;
              // this.getStudentList = this.getStudentList;
              //this.load_studentList()
              // this.IntiliazeItmes();
            }
          }
        }]);

        return AssignmenteditPage;
      }();

      _AssignmenteditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__.PreviewAnyFile
        }];
      };

      _AssignmenteditPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, {
            "static": false
          }]
        }],
        fileInputClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ['fileInput']
        }]
      };
      _AssignmenteditPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-assignmentedit",
        template: _raw_loader_assignmentedit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_assignmentedit_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AssignmenteditPage);
      /***/
    },

    /***/
    13837:
    /*!*****************************************************************!*\
      !*** ./src/app/faculty/assignmentedit/assignmentedit.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".file {\n  background: #690d01fc;\n  color: #690d01fc;\n  width: 90%;\n  padding: 10px;\n  border-radius: 10px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n#yourBtn {\n  position: relative;\n  width: 75%;\n  padding: 8px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  text-align: center;\n  background-color: #690d01fc;\n  color: #FFFF;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.footer-btn {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  color: white;\n  text-align: center;\n  z-index: 5;\n  padding: 15px;\n}\n\n.label {\n  color: #ae5c50;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnRlZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNVLHFCQUFBO0VBQ04sZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoiYXNzaWdubWVudGVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2OTBkMDFmYztcbiAgICBjb2xvcjogIzY5MGQwMWZjO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3lvdXJCdG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgIzY5MGQwMWZjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjkwZDAxZmM7XG4gICAgY29sb3I6ICNGRkZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4uZm9vdGVyLWJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmxhYmVsIHtcbiAgICBjb2xvcjogICNhZTVjNTA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
      /***/
    },

    /***/
    61449:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/assignmentedit/assignmentedit.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"headerr == 'Edit Notices'\"> Edit Assignment / Notice </ion-title>\n        <ion-title *ngIf=\"headerr == 'Add Notices'\"> Add Assignment / Notice </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form  [formGroup]=\"changeForm\">\n        <span *ngIf=\"!hide\">\n            <ion-item *ngIf=\"listData.length>0\">\n                <ion-label style=\"width: 50%;\" class=\"label\">Type</ion-label>\n                <ion-select slot=\"end\" placeholder=\"Select Type\"  formControlName=\"type\">\n                    <ion-select-option *ngFor=\"let data of listData\" [value]=\"data.id\">{{data.notices_type}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label class=\"label\">Title</ion-label>\n                <ion-input formControlName=\"title\"></ion-input>\n            </ion-item>\n            <!-- <ion-item>\n                <ion-label position=\"floating\">Description</ion-label>\n                <ion-textarea [(ngModel)]=\"desc\"></ion-textarea>\n            </ion-item> -->\n            <br/>\n            <ion-label style=\"padding-left: 15px\" class=\"label\" >Description</ion-label>\n            <br/><br/>\n            <div *ngIf=\"loadData\">\n                <quill-editor    \n                [modules]=\"modules\"\n                formControlName=\"desc\"\n                (ContentChanged)=\"onEditorContentChange($event)\"\n                placeholder=\"Insert Description here...\"\n                ></quill-editor>\n            </div>\n            <br/>\n            <ion-label style=\"padding-left: 15px\" class=\"label\" >Upload Files</ion-label>\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"8\">\n                        <!-- <ion-button *ngIf=\"isType\" (click)=\"uploadFile()\"> Choose Image</ion-button> -->\n                        <div  *ngIf=\"isType\">\n                            <div id=\"yourBtn\" (click)=\"getFile()\">Choose Image</div>\n                            <!-- this is your file input tag, so i hide it!-->\n                            <!-- i used the onchange event to fire the form submission-->\n                            <div style='height: 0px;width: 0px; overflow:hidden;'> \n                                <input  accept=\"image/*\" class=\"file\"  id='fileInput' type=\"file\" (change)=\"onFileChange($event)\" class=\"custom-file-upload\" />\n                            </div>\n                        </div>\n                        <div  *ngIf=\"!isType\">\n                            <div id=\"yourBtn\" (click)=\"getFile()\">Choose File</div>\n                            <!-- this is your file input tag, so i hide it!-->\n                            <!-- i used the onchange event to fire the form submission-->\n                            <div style='height: 0px;width: 0px; overflow:hidden;'> \n                                <input  accept=\"application/pdf\" class=\"file\"  id='fileInput' type=\"file\" (change)=\"onFileChange($event)\" class=\"custom-file-upload\" />\n                            </div>\n                        </div>\n                       \n                       \n                         \n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-select  formControlName=\"fileType\" [(ngModel)]=\"fileType\" (ionChange)=\"changeValue(fileType)\"  placeholder=\"Select Type\"  >\n                            <ion-select-option value=\"file\">File</ion-select-option>\n                            <ion-select-option value=\"image\">Image</ion-select-option>\n                            \n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid>\n                <ion-row *ngFor=\"let a of fileList; let i=index\">\n                    <ion-col size=\"9\" *ngIf=\"a.fileType == 'file'\"> <span>{{ a.fileName }}</span> </ion-col>\n                    <ion-col size=\"9\" *ngIf=\"a.fileType == 'image'\"> \n                        <img [src]=\"a.base64\" alt=\"\">\n                    </ion-col>\n                    <ion-col size=\"3\"><span style=\"color: #690d01fc;\" (click)=\"removeFile(i)\">Remove</span></ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid *ngIf=\"files\">\n                <ion-row>\n                    <ion-col class=\"ion-text-center\"><h3>Uploaded Files</h3></ion-col>\n                </ion-row>\n                <ion-row *ngFor=\"let file of files; let i=index\">\n                    <ion-col size=\"9\" *ngIf=\"file.upload_type == 'FILE'\">\n                        <span style=\"color: #06c;\" (click)=\"viewDocument(file)\">View Document -  {{i+1}}</span>\n                    </ion-col>\n                    <ion-col size=\"9\" *ngIf=\"file.upload_type == 'IMAGE'\"> <img [src]=\"file.name\" alt=\"\"></ion-col>\n                    <ion-col size=\"3\"><span style=\"color: #690d01fc;\" (click)=\"removeUFile(i, file.file_id)\">Remove</span></ion-col>\n                </ion-row>\n            </ion-grid>\n           \n          \n            <div style=\"text-align: center; padding-top: 15px\">\n                <!-- <ion-button (click)=\"edit()\" [disabled]=\"!changeForm.valid\" *ngIf=\"headerr == 'Edit Notices'\">\n                    Update</ion-button>\n                <ion-button (click)=\"create()\" [disabled]=\"!changeForm.valid\" *ngIf=\"headerr != 'Edit Notices'\">\n                    Submit</ion-button> -->\n    \n                <ion-button [disabled]=\"!changeForm.valid\" (click)=\"continue()\">Continue</ion-button>\n            </div>\n        </span>\n         </form>\n        <span *ngIf=\"hide\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                      <ion-toolbar class=\"search\">\n                        <ion-searchbar class=\"search-col\"  color=\"primary\"\n                          debounce=\"500\" [(ngModel)]=\"searchTerm\" (ionInput)=\"getItems($event)\"  ></ion-searchbar>\n                      </ion-toolbar>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-grid class=\"animated lightSpeedIn item-wrap\">\n                            <ion-row>\n                                <ion-col size=\"1\"><ion-checkbox [(ngModel)]=\"chec\" (ionChange)=\"selectAll(chec)\" ></ion-checkbox></ion-col>\n                                <ion-col size=\"3\">Roll No.</ion-col>\n                                <ion-col size=\"8\">Name</ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n                        <ion-grid class=\"animated lightSpeedIn item-wrap\">\n                            <ion-row class=\"border\" *ngFor=\"let student of studentList\">\n                                <ion-col size=\"1\">\n                                    <ion-checkbox  [checked]=\" checkStudents[student.id]\" [value]=\"student.id\"  (ionChange)=\"getStudent(student.id, $event)\"></ion-checkbox>\n                                </ion-col>\n                                <ion-col size=\"3\"> <ion-label class=\"label_ion\" >{{student.roll_no}}</ion-label></ion-col>\n                                <ion-col size=\"8\"> <ion-label class=\"label_ion\" >{{student.student_name}}</ion-label></ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <br/><br/><br/>\n            <div class=\"footer-btn\">\n                <ion-button (click)=\"edit()\" [disabled]=\"!sendAssign\" *ngIf=\"headerr == 'Edit Notices'\">\n                    Update</ion-button>\n                <ion-button (click)=\"create()\" [disabled]=\"!sendAssign\" *ngIf=\"headerr != 'Edit Notices'\">\n                    Submit</ion-button>\n    \n                \n            </div>\n        </span>\n        \n   \n    \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_assignmentedit_assignmentedit_module_ts-es5.js.map