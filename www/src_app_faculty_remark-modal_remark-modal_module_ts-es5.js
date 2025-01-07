(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_remark-modal_remark-modal_module_ts"], {
    /***/
    72390:
    /*!*********************************************************************!*\
      !*** ./src/app/faculty/remark-modal/remark-modal-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemarkModalPageRoutingModule": function RemarkModalPageRoutingModule() {
          return (
            /* binding */
            _RemarkModalPageRoutingModule
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


      var _remark_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./remark-modal.page */
      208);

      var routes = [{
        path: '',
        component: _remark_modal_page__WEBPACK_IMPORTED_MODULE_0__.RemarkModalPage
      }];

      var _RemarkModalPageRoutingModule = /*#__PURE__*/_createClass(function RemarkModalPageRoutingModule() {
        _classCallCheck(this, RemarkModalPageRoutingModule);
      });

      _RemarkModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RemarkModalPageRoutingModule);
      /***/
    },

    /***/
    49997:
    /*!*************************************************************!*\
      !*** ./src/app/faculty/remark-modal/remark-modal.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemarkModalPageModule": function RemarkModalPageModule() {
          return (
            /* binding */
            _RemarkModalPageModule
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


      var _remark_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./remark-modal-routing.module */
      72390);
      /* harmony import */


      var _remark_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./remark-modal.page */
      208);

      var _RemarkModalPageModule = /*#__PURE__*/_createClass(function RemarkModalPageModule() {
        _classCallCheck(this, RemarkModalPageModule);
      });

      _RemarkModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _remark_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemarkModalPageRoutingModule],
        declarations: [_remark_modal_page__WEBPACK_IMPORTED_MODULE_1__.RemarkModalPage]
      })], _RemarkModalPageModule);
      /***/
    },

    /***/
    208:
    /*!***********************************************************!*\
      !*** ./src/app/faculty/remark-modal/remark-modal.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemarkModalPage": function RemarkModalPage() {
          return (
            /* binding */
            _RemarkModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_remark_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./remark-modal.page.html */
      44610);
      /* harmony import */


      var _remark_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./remark-modal.page.scss */
      25708);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
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

      var _RemarkModalPage = /*#__PURE__*/function () {
        function RemarkModalPage(formBuilder, navParams, authService, general, router, modalCtrl) {
          _classCallCheck(this, RemarkModalPage);

          this.formBuilder = formBuilder;
          this.navParams = navParams;
          this.authService = authService;
          this.general = general;
          this.router = router;
          this.modalCtrl = modalCtrl;
        }

        _createClass(RemarkModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
            this.studentDetails = this.navParams.get('data');
            this.assessmentParticularId = this.navParams.get('assessmentParticularId');
            console.log(this.assessmentParticularId, 'd');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_faculty");
            this.myForm.controls['remark'].setValue(this.studentDetails.remarks);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            console.log('ashok');
          }
        }, {
          key: "create",
          value: function create() {
            var _this = this;

            console.log(this.myForm.controls['remark'].value);
            var data = {
              "editStudentRemarks": {
                "class_guide_allocations_id": this.studentDetails.class_guide_allocations_id,
                "remarks": this.myForm.controls['remark'].value,
                "student_id": this.studentDetails.student_id,
                "student_name": this.studentDetails.student_name,
                "roll_no": this.studentDetails.roll_no
              },
              "assessmentParticularId": this.assessmentParticularId
            };
            this.general.loadingPresent();
            this.authService.g_postt_fac(data, 'teaching-staff/class-guide-marks-card-remarks/save-remarks', this.token).subscribe(function (response) {
              _this.general.loadingDismiss();

              console.log(response);

              if (response.status) {
                _this.general.showToast(response.message);
              }

              _this.general.filter('Added');

              _this.modalCtrl.dismiss();
            }, function (error) {
              console.log(error);

              _this.general.loadingDismiss();

              if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                  _this.general.loginAgain();

                  _this.router.navigateByUrl("/opem");
                }
              }
            });
            console.log(data);
          }
        }]);

        return RemarkModalPage;
      }();

      _RemarkModalPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }];
      };

      _RemarkModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-remark-modal',
        template: _raw_loader_remark_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_remark_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RemarkModalPage);
      /***/
    },

    /***/
    25708:
    /*!*************************************************************!*\
      !*** ./src/app/faculty/remark-modal/remark-modal.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1hcmstbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    44610:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/remark-modal/remark-modal.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Remarks Entry</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"black\">\n      \n      <!-- (click)=\"modal.dismiss()\"> -->\n      <ion-icon name=\"close-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <form [formGroup]=\"myForm\">\n      <ion-item>\n        <ion-label class=\"label\" position=\"stacked\">Student Name</ion-label>\n        <p>{{studentDetails.student_name}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"label\" position=\"stacked\">Roll No.</ion-label>\n        <p>{{studentDetails.roll_no}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Remarks</ion-label>\n        <ion-textarea formControlName=\"remark\"  placeholder=\"Remarks\"></ion-textarea>\n      </ion-item>\n      <ion-button (click)=\"create()\" expand=\"block\" [disabled]=\"!myForm.valid\" >\n        Save</ion-button>\n    </form>\n  </ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_remark-modal_remark-modal_module_ts-es5.js.map