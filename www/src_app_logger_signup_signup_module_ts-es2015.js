(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_logger_signup_signup_module_ts"],{

/***/ 97193:
/*!********************************************************!*\
  !*** ./src/app/logger/signup/signup-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 24783);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 50309:
/*!************************************************!*\
  !*** ./src/app/logger/signup/signup.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": function() { return /* binding */ SignupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 97193);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 24783);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 24783:
/*!**********************************************!*\
  !*** ./src/app/logger/signup/signup.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 11603);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 82475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);







let SignupPage = class SignupPage {
    constructor(router, activatedrouted, auth, generalts) {
        this.router = router;
        this.activatedrouted = activatedrouted;
        this.auth = auth;
        this.generalts = generalts;
        this.mob_num = "";
        this.name = "asdfasd";
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.page = this.activatedrouted.snapshot.paramMap.get("p");
        console.log("SignupPage", this.page);
    }
    for_otp() {
        console.log(this.page, "pag");
        this.error = "";
        console.log(this.mob_num, "this.mob_num.toString().length");
        if ([null, "", undefined].indexOf(this.mob_num) > -1) {
            return (this.error = "Please enter valid Credentials");
        }
        else if (this.mob_num.toString().length < 4) {
            return (this.error = "Please enter valid Credentials");
        }
        else if (this.mob_num.toString().length > 4) {
            // const load = await this.generalts.loading("Loading ...");
            // await load.present();
            this.generalts.loadingPresent();
            var mob = { username: this.mob_num, type: this.page };
            this.auth.postt(mob, this.page).subscribe(sa => {
                this.generalts.loadingDismiss();
                // load.dismiss();
                console.log(sa, "asd");
                if (sa) {
                    this.router.navigate([
                        "/otpcheck",
                        { mob_num: this.mob_num, otp: sa.otp, fnct: this.page }
                    ]);
                }
                else if (sa.status_code == 400) {
                    console.error("sa!", sa.status_code, sa);
                    this.error = sa.message;
                }
            }, error => {
                // load.dismiss();
                this.generalts.loadingDismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status_code == 400) {
                    this.error = error.message;
                }
            }
            // (err: any) => {
            //   console.log("asdf1111", err);
            //   if (err.status == 400) {
            //     console.log("asdf1111", err);
            //     this.error = true;
            //     // this.LoginError =
            //     //   "Invalid Credentials. Please enter valid details ";
            //   }
            // }
            );
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-signup",
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 82475:
/*!************************************************!*\
  !*** ./src/app/logger/signup/signup.page.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dd {\n  font-size: 28px;\n  text-align: center;\n}\n\n.back {\n  padding: 6px 0px;\n  text-decoration: underline;\n  position: absolute;\n  left: 10px;\n  top: 17px;\n  font-size: 18px;\n  color: #ffffff;\n  background: #41232d;\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  box-shadow: 0px 2px 4px #585858;\n}\n\n.login-block {\n  display: block;\n  border: 1px solid #6b1a0d;\n  border-radius: 25px;\n  background: rgba(255, 255, 255, 0.52);\n  margin: 0 auto;\n  width: 80%;\n  padding: 14px 0;\n}\n\nimg.img-fluid {\n  width: 100%;\n}\n\n.item-label-floating.sc-ion-input-md-h,\n.item-label-floating .sc-ion-input-md-h,\n.item-label-stacked.sc-ion-input-md-h,\n.item-label-stacked .sc-ion-input-md-h {\n  position: relative !important;\n  top: 14px !important;\n}\n\n.label-floating.sc-ion-label-md-h {\n  position: relative !important;\n  top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBUUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNGLFVBQUE7RUFDRSxlQUFBO0FBTEY7O0FBcUJBO0VBQ0UsV0FBQTtBQWxCRjs7QUFzQkE7Ozs7RUFJRSw2QkFBQTtFQUNBLG9CQUFBO0FBbkJGOztBQXFCQTtFQUNFLDZCQUFBO0VBQ0Esb0JBQUE7QUFsQkYiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZCB7XG4gIC8vIG1hcmdpbi10b3A6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhY2sge1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICM0MTIzMmQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzU4NTg1ODtcbn1cbi8vIC5ib3JkIHtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2IxNzI2Nztcbi8vICAgbWFyZ2luOiAyMnB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAyOHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbi8vIH1cblxuLmxvZ2luLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjFhMGQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Mik7XG4gIG1hcmdpbjogMCBhdXRvO1xud2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTRweCAwO1xuXG4gIC8vIG1hcmdpbjogOTAlIDAgMCAwO1xufVxuXG4vLyBpb24taW5wdXQge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgcGFkZGluZzogMTJweCAyMHB4O1xuLy8gICBtYXJnaW46IDhweCAwO1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgIGJhY2tncm91bmQ6ICNmZmU2OWI7XG4vLyB9XG4vLyBpb24tY29udGVudCB7XG4vLyAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuLy8gfVxuaW1nLmltZy1mbHVpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXJnaW46IDAgMCA3NXB4IDA7XG59XG4vLyAuLi4uLi4uLi4uLi4uLi4uLlxuLml0ZW0tbGFiZWwtZmxvYXRpbmcuc2MtaW9uLWlucHV0LW1kLWgsXG4uaXRlbS1sYWJlbC1mbG9hdGluZyAuc2MtaW9uLWlucHV0LW1kLWgsXG4uaXRlbS1sYWJlbC1zdGFja2VkLnNjLWlvbi1pbnB1dC1tZC1oLFxuLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2MtaW9uLWlucHV0LW1kLWgge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ 11603:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logger/signup/signup.page.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <span class=\"back_butt ion-padding\" *ngIf=\"page=='register'\">\n      Sign up\n    </span>\n    <span class=\"back_butt ion-padding\" *ngIf=\"page=='forgot-password'\">\n      Forgot password ?\n    </span>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <!-- <img src=\"assets/images/asd.png\" class=\"img-fluid\" alt=\"\" /> -->\n    <img src=\"assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n  <div class=\"login-block \">\n    <!-- <h2 class=\"ion-text-center\" class=\"dd\">\n      <ion-icon\n        tappab0le\n        defaultHref=\"/login\"\n        style=\"float: right;font-size: 23px;\n      margin-top: 7px;\"\n        name=\"log-out\"\n      ></ion-icon>\n      Sign up\n    </h2> -->\n    <div *ngIf=\"page=='register'\" style=\"text-align: center; font-weight: 600;\">\n      <!-- <h2 style=\"font-weight: bold;\">\n        Welcome !!\n      </h2> -->\n      <h4 style=\"text-align: center; font-weight: bold;\">\n        Register\n      </h4>\n    </div>\n    <div\n      *ngIf=\"page=='forgot-password'\"\n      style=\"text-align: center;margin-bottom: 20px;\"\n    >\n      <h4 style=\"text-align: center; font-weight: bold;\">\n        Reset Password\n      </h4>\n    </div>\n\n    <!-- <div *ngIf=\"page=='signup'\">\n      <ion-label position=\"stacked\" style=\"font-size: 12px;\">Name</ion-label>\n      <ion-input\n        style=\"color: black;\"\n        [(ngModel)]=\"name\"\n        type=\"text\"\n      ></ion-input>\n    </div> -->\n\n    <div style=\"padding:0 35px;\">\n      <ion-item>\n        <ion-label style=\"font-size: 12px;\" position=\"floating\"\n          >Mobile No / Email Id\n        </ion-label>\n        <ion-input\n          style=\"color: black;\"\n          [(ngModel)]=\"mob_num\"\n          type=\"text\"\n        ></ion-input>\n      </ion-item>\n    </div>\n    <p class=\"red ion-text-center\" *ngIf=\"error\">\n      {{error}}\n    </p>\n\n    <div style=\"text-align: center;margin-top: 15px;\">\n      <ion-button shape=\"round\" color=\"tertiary\" (click)=\"for_otp()\">\n        <span *ngIf=\"page=='forgot-password'\">\n          Reset password\n        </span>\n        <span *ngIf=\"page=='register'\">\n          Register\n        </span>\n      </ion-button>\n    </div>\n\n    <div class=\"ion-text-center\">\n      <!-- <p>Or</p> -->\n\n      <!-- <ion-grid>\n        <ion-col size=\"4\">\n          <img src=\"../../assets/images/facebook (1).svg\" height=\"60\" />\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"../../assets/images/google-plus (1).svg\" height=\"60\" />\n        </ion-col>\n\n        <ion-col size=\"4\">\n          <img src=\"../../assets/images/instagram (1).svg\" height=\"60\" />\n        </ion-col>\n      </ion-grid> -->\n      <!-- <div *ngIf=\"page=='register'\">\n        <p style=\"color: black;\">Already Have an Account ?</p>\n        <p routerLink=\"/login\" style=\"font-size: 22px;\">\n          Sign in\n        </p>\n      </div> -->\n    </div>\n  </div>\n\n  <div>\n    <span routerLink=\"/login\" class=\"back\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </span>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_logger_signup_signup_module_ts-es2015.js.map