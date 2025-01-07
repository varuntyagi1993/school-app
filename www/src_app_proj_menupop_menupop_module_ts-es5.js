(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_menupop_menupop_module_ts"], {
    /***/
    70787:
    /*!********************************************************!*\
      !*** ./src/app/proj/menupop/menupop-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenupopPageRoutingModule": function MenupopPageRoutingModule() {
          return (
            /* binding */
            _MenupopPageRoutingModule
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


      var _menupop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menupop.page */
      11475);

      var routes = [{
        path: '',
        component: _menupop_page__WEBPACK_IMPORTED_MODULE_0__.MenupopPage
      }];

      var _MenupopPageRoutingModule = /*#__PURE__*/_createClass(function MenupopPageRoutingModule() {
        _classCallCheck(this, MenupopPageRoutingModule);
      });

      _MenupopPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MenupopPageRoutingModule);
      /***/
    },

    /***/
    39903:
    /*!************************************************!*\
      !*** ./src/app/proj/menupop/menupop.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenupopPageModule": function MenupopPageModule() {
          return (
            /* binding */
            _MenupopPageModule
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


      var _menupop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menupop-routing.module */
      70787);
      /* harmony import */


      var _menupop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menupop.page */
      11475);

      var _MenupopPageModule = /*#__PURE__*/_createClass(function MenupopPageModule() {
        _classCallCheck(this, MenupopPageModule);
      });

      _MenupopPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _menupop_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenupopPageRoutingModule],
        declarations: [_menupop_page__WEBPACK_IMPORTED_MODULE_1__.MenupopPage]
      })], _MenupopPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_menupop_menupop_module_ts-es5.js.map