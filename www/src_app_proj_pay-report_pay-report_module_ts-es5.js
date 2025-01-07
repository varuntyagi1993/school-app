(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_pay-report_pay-report_module_ts"], {
    /***/
    75296:
    /*!**************************************************************!*\
      !*** ./src/app/proj/pay-report/pay-report-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PayReportPageRoutingModule": function PayReportPageRoutingModule() {
          return (
            /* binding */
            _PayReportPageRoutingModule
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


      var _pay_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pay-report.page */
      30458);

      var routes = [{
        path: '',
        component: _pay_report_page__WEBPACK_IMPORTED_MODULE_0__.PayReportPage
      }];

      var _PayReportPageRoutingModule = /*#__PURE__*/_createClass(function PayReportPageRoutingModule() {
        _classCallCheck(this, PayReportPageRoutingModule);
      });

      _PayReportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PayReportPageRoutingModule);
      /***/
    },

    /***/
    67696:
    /*!******************************************************!*\
      !*** ./src/app/proj/pay-report/pay-report.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PayReportPageModule": function PayReportPageModule() {
          return (
            /* binding */
            _PayReportPageModule
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


      var _pay_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pay-report-routing.module */
      75296);
      /* harmony import */


      var _pay_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pay-report.page */
      30458);

      var _PayReportPageModule = /*#__PURE__*/_createClass(function PayReportPageModule() {
        _classCallCheck(this, PayReportPageModule);
      });

      _PayReportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _pay_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayReportPageRoutingModule],
        declarations: [_pay_report_page__WEBPACK_IMPORTED_MODULE_1__.PayReportPage]
      })], _PayReportPageModule);
      /***/
    },

    /***/
    30458:
    /*!****************************************************!*\
      !*** ./src/app/proj/pay-report/pay-report.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PayReportPage": function PayReportPage() {
          return (
            /* binding */
            _PayReportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pay_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pay-report.page.html */
      48232);
      /* harmony import */


      var _pay_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pay-report.page.scss */
      61892);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PayReportPage = /*#__PURE__*/function () {
        function PayReportPage(modalController) {
          _classCallCheck(this, PayReportPage);

          this.modalController = modalController;
        }

        _createClass(PayReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            // using the injected ModalController this page
            // can "dismiss" itself and optionally pass back data
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);

        return PayReportPage;
      }();

      _PayReportPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _PayReportPage.propDecorators = {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _PayReportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pay-report',
        template: _raw_loader_pay_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pay_report_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PayReportPage);
      /***/
    },

    /***/
    61892:
    /*!******************************************************!*\
      !*** ./src/app/proj/pay-report/pay-report.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXktcmVwb3J0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    48232:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/pay-report/pay-report.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Payment Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item>\n      <!-- <ion-avatar slot=\"start\">\n        <img name=\"profile_pic\"\n        src=\"../../assets/img/profile.png\"\n        alt=\"Missing Image\">\n      </ion-avatar> -->\n      <ion-label>\n        <h2>Name</h2>\n        <p></p>\n      </ion-label>\n      <!-- <ion-label *ngIf=\"type === 'card'\">\n        <h2>Paid From</h2>\n        <p>{{ recieverName }}</p>\n      </ion-label> -->\n    </ion-item>\n    <ion-item>\n      <!-- <ion-avatar slot=\"start\">\n        <img name=\"profile_pic\"\n        src=\"../../assets/img/profile.png\"\n        alt=\"Missing Image\">\n      </ion-avatar> -->\n      <ion-label>\n        <h2>Payment Date</h2>\n        <p></p>\n      </ion-label>\n      <!-- <ion-label *ngIf=\"type === 'card'\">\n        <h2>Paid From</h2>\n        <p>{{ recieverName }}</p>\n      </ion-label> -->\n    </ion-item>\n    <ion-item>\n      <!-- <ion-avatar slot=\"start\">\n        <img name=\"profile_pic\"\n        src=\"../../assets/img/profile.png\"\n        alt=\"Missing Image\">\n      </ion-avatar> -->\n      <ion-label>\n        <h2>Payment Id</h2>\n        <p></p>\n      </ion-label>\n      <!-- <ion-label *ngIf=\"type === 'card'\">\n        <h2>Paid From</h2>\n        <p>{{ recieverName }}</p>\n      </ion-label> -->\n    </ion-item>\n    \n    <ion-item>\n      <!-- <ion-avatar slot=\"start\">\n        <img name=\"profile_pic\"\n        src=\"../../assets/img/profile.png\"\n        alt=\"Missing Image\">\n      </ion-avatar> -->\n      <ion-label>\n        <h2>Status</h2>\n        <p></p>\n      </ion-label>\n      <!-- <ion-label *ngIf=\"type === 'card'\">\n        <h2>Paid From</h2>\n        <p>{{ recieverName }}</p>\n      </ion-label> -->\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_pay-report_pay-report_module_ts-es5.js.map