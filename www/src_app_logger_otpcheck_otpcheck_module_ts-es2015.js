(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_logger_otpcheck_otpcheck_module_ts"],{

/***/ 6956:
/*!************************************************************!*\
  !*** ./src/app/logger/otpcheck/otpcheck-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpcheckPageRoutingModule": function() { return /* binding */ OtpcheckPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otpcheck_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpcheck.page */ 50254);




const routes = [
    {
        path: '',
        component: _otpcheck_page__WEBPACK_IMPORTED_MODULE_0__.OtpcheckPage
    }
];
let OtpcheckPageRoutingModule = class OtpcheckPageRoutingModule {
};
OtpcheckPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpcheckPageRoutingModule);



/***/ }),

/***/ 18716:
/*!****************************************************!*\
  !*** ./src/app/logger/otpcheck/otpcheck.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpcheckPageModule": function() { return /* binding */ OtpcheckPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otpcheck_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otpcheck-routing.module */ 6956);
/* harmony import */ var _otpcheck_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpcheck.page */ 50254);







let OtpcheckPageModule = class OtpcheckPageModule {
};
OtpcheckPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otpcheck_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpcheckPageRoutingModule
        ],
        declarations: [_otpcheck_page__WEBPACK_IMPORTED_MODULE_1__.OtpcheckPage]
    })
], OtpcheckPageModule);



/***/ }),

/***/ 50254:
/*!**************************************************!*\
  !*** ./src/app/logger/otpcheck/otpcheck.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpcheckPage": function() { return /* binding */ OtpcheckPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_otpcheck_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otpcheck.page.html */ 19227);
/* harmony import */ var _otpcheck_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otpcheck.page.scss */ 23808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);







let OtpcheckPage = class OtpcheckPage {
    constructor(auth, activatedroute, router, generalts) {
        this.auth = auth;
        this.activatedroute = activatedroute;
        this.router = router;
        this.generalts = generalts;
        this.mob_num = this.activatedroute.snapshot.paramMap.get("mob_num");
        this.otps = this.activatedroute.snapshot.paramMap.get("otp");
        this.fuct = this.activatedroute.snapshot.paramMap.get("fnct");
        console.log(this.mob_num, "sa");
    }
    ionViewDidView() {
        this.error = "";
    }
    bakk() {
        window.history.back();
    }
    ngOnInit() { }
    otp_verify() {
        console.log(this.fuct, "fuct");
        this.error = "";
        var verify_otp = {
            otp: this.otp,
            username: this.mob_num,
            type: this.fuct
        };
        console.log(verify_otp, "verify_otp");
        if ([null, "", undefined].indexOf(this.otp) > -1) {
            this.error = "Enter  OTP";
        }
        else if (this.otp.toString().length != 5) {
            this.error = "Enter OTP";
        }
        else if ([null, "", undefined].indexOf(this.otp) < -1 ||
            this.otp.toString().length == 5) {
            this.generalts.loadingPresent();
            // const load = await this.generalts.loading("Loading ...");
            // await load.present();
            this.auth.postt(verify_otp, "verify-otp-get-token").subscribe(response => {
                this.generalts.loadingDismiss();
                // load.dismiss();
                console.log(response, "response");
                if (response.token) {
                    localStorage.setItem("pas_tok", response.token);
                    this.router.navigate(["/password", { mob_num: this.mob_num }]);
                }
            }, error => {
                this.generalts.loadingDismiss();
                // load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status_code == 400) {
                    this.error = error.message;
                }
            });
        }
    }
};
OtpcheckPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService }
];
OtpcheckPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-otpcheck",
        template: _raw_loader_otpcheck_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otpcheck_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpcheckPage);



/***/ }),

/***/ 23808:
/*!****************************************************!*\
  !*** ./src/app/logger/otpcheck/otpcheck.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  padding: 6px 0px;\n  text-decoration: underline;\n  position: absolute;\n  left: 10px;\n  top: 17px;\n  font-size: 18px;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.78);\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  box-shadow: 0px 2px 4px #585858;\n}\n\nimg.img-fluid {\n  width: 100%;\n}\n\n#partitioned {\n  text-align: center;\n  letter-spacing: 42px;\n  border: 0;\n  background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 50px 1px;\n  background-repeat: repeat-x;\n  background-position-x: 35px;\n  width: 220px;\n}\n\nh3 {\n  margin-bottom: 25px;\n}\n\n.brde {\n  text-align: center;\n  border: 1px solid #6b1a0d;\n  padding: 20px 13px;\n  border-radius: 48px;\n  margin: 12px 13px;\n}\n\n.digit-group input {\n  width: 30px;\n  height: 50px;\n  background-color: #18182a;\n  border: none;\n  line-height: 50px;\n  text-align: center;\n  font-size: 24px;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 200;\n  color: white;\n  margin: 0 2px;\n}\n\n.digit-group .splitter {\n  padding: 0 5px;\n  color: white;\n  font-size: 24px;\n}\n\n.prompt {\n  margin-bottom: 20px;\n  font-size: 20px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cGNoZWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBUkY7O0FBVUE7RUFDRSxXQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdGQUFBO0VBS0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBWkY7O0FBY0E7RUFDRSxtQkFBQTtBQVhGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVZGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVRGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUkYiLCJmaWxlIjoib3RwY2hlY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWltZyB7XG4vLyAgIHdpZHRoOiAxNTNweDtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyB9XG4vLyBpb24taW5wdXQge1xuLy8gICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggI2Q2ZDJkMjtcbi8vICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5iYWNrIHtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzgpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICM1ODU4NTg7XG59XG5pbWcuaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbjogMCAwIDc1cHggMDtcbn1cbiNwYXJ0aXRpb25lZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiA0MnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBsZWZ0LFxuICAgIGJsYWNrIDcwJSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlXG4gICk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDFweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDM1cHg7XG4gIHdpZHRoOiAyMjBweDtcbn1cbmgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5icmRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmIxYTBkO1xuICBwYWRkaW5nOiAyMHB4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XG4gIG1hcmdpbjogMTJweCAxM3B4O1xufVxuLmRpZ2l0LWdyb3VwIGlucHV0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgyYTtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDAgMnB4O1xufVxuLmRpZ2l0LWdyb3VwIC5zcGxpdHRlciB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnByb21wdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ 19227:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logger/otpcheck/otpcheck.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>OTP Verification</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <img src=\"assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n  <!-- <ion-text class=\"ion-margin-vertical\" color=\"dark\">\n    <h1 no-margin><b>Verification...</b></h1>\n  </ion-text>\n  <ion-img src=\"../assets/images/otp.jpg\"></ion-img> -->\n  <!-- <ion-text color=\"primary\">\n    <p class=\"ion-margin-vertical ion-text-center\"><b>Enter O T P</b></p>\n  </ion-text>\n  <div text-center>\n    <input [(ngModel)]=\"otp\" type=\"tel\" maxlength=\"5\" />\n  </div> -->\n  <div class=\"brde\">\n    <h3 style=\"margin-top: 0;\">Verification Code</h3>\n    <div style=\"padding:  0 25px;\">\n      <ion-item>\n        <ion-label position=\"floating\">Enter OTP</ion-label>\n        <ion-input type=\"tel\" [(ngModel)]=\"otp\" maxlength=\"5\"></ion-input>\n      </ion-item>\n    </div>\n    <!-- //id=\"partitioned\" -->\n    <!-- <ion-text color=\"primary\">\n    <p class=\"ion-margin-vertical ion-text-right\"><small>Resend OTP</small></p>\n  </ion-text> -->\n    <p class=\"red ion-text-center\" *ngIf=\"error\">{{error}}</p>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-button\n        expand=\"default\"\n        (click)=\"otp_verify()\"\n        shape=\"round\"\n        color=\"tertiary\"\n        >Verify</ion-button\n      >\n    </div>\n\n    <p>Please enter your code from SMS</p>\n    <p>we've sent you</p>\n  </div>\n  <!-- <p style=\"text-align: center;\">\n    Your OTP is {{otps}}\n  </p> -->\n  <div>\n    <span (click)=\"bakk()\" class=\"back\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </span>\n  </div>\n  <!-- <form\n    method=\"get\"\n    class=\"digit-group\"\n    data-group-name=\"digits\"\n    data-autosubmit=\"false\"\n    autocomplete=\"off\"\n  >\n    <input type=\"text\" id=\"digit-1\" name=\"digit-1\" data-next=\"digit-2\" />\n    <input\n      type=\"text\"\n      id=\"digit-2\"\n      name=\"digit-2\"\n      data-next=\"digit-3\"\n      data-previous=\"digit-1\"\n    />\n    <input\n      type=\"text\"\n      id=\"digit-3\"\n      name=\"digit-3\"\n      data-next=\"digit-4\"\n      data-previous=\"digit-2\"\n    />\n    <span class=\"splitter\">&ndash;</span>\n    <input\n      type=\"text\"\n      id=\"digit-4\"\n      name=\"digit-4\"\n      data-next=\"digit-5\"\n      data-previous=\"digit-3\"\n    />\n    <input\n      type=\"text\"\n      id=\"digit-5\"\n      name=\"digit-5\"\n      data-next=\"digit-6\"\n      data-previous=\"digit-4\"\n    />\n    <input type=\"text\" id=\"digit-6\" name=\"digit-6\" data-previous=\"digit-5\" />\n  </form> -->\n  <!-- <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"../../assets/js/input.js\"></script> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_logger_otpcheck_otpcheck_module_ts-es2015.js.map