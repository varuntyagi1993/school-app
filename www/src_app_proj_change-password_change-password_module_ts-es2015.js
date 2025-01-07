(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_change-password_change-password_module_ts"],{

/***/ 29956:
/*!************************************************************************!*\
  !*** ./src/app/proj/change-password/change-password-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": function() { return /* binding */ ChangePasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 17694);




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ 5057:
/*!****************************************************************!*\
  !*** ./src/app/proj/change-password/change-password.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": function() { return /* binding */ ChangePasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 29956);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 17694);







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ 17694:
/*!**************************************************************!*\
  !*** ./src/app/proj/change-password/change-password.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": function() { return /* binding */ ChangePasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-password.page.html */ 40748);
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss */ 1492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let ChangePasswordPage = class ChangePasswordPage {
    constructor(formBuilder, authService, router, generalts, actroute) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.generalts = generalts;
        this.actroute = actroute;
        this.submitted = false;
    }
    ngOnInit() {
        this.changeForm = this.formBuilder.group({
            oldpassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        }, {
            validator: (0,src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.MustMatch)("password", "confirmPassword")
        });
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_faculty");
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.changeForm.controls;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            // stop here if form is invalid
            if (this.changeForm.invalid) {
                return;
            }
            else {
                //console.log(this.changeForm.value.confirmPassword, "reg"); 
                var pas = {
                    "existingPassword": this.changeForm.value.oldpassword,
                    "newPassword": this.changeForm.value.password,
                    "changePassword": true,
                    "password": "",
                    "password_confirm": ""
                };
                console.log(pas);
                ;
                this.generalts.loadingPresent();
                var token = localStorage.getItem("pas_tok");
                this.authService.g_postt(pas, "change-password", token).subscribe(sa => {
                    console.log(sa, "da");
                    if (sa.message) {
                        let status = sa.status;
                        let message = sa.message;
                        this.generalts.showToast(message);
                        if (status == 'success') {
                            this.router.navigateByUrl('/home');
                            this.changeForm.reset();
                        }
                        this.generalts.loadingDismiss();
                        localStorage.setItem("*/", this.mob);
                        //localStorage.setItem("asd", this.mob);
                    }
                    // else if (sa.status != true) {
                    //   this.err = sa.status;
                    // }
                }, error => {
                    this.generalts.loadingDismiss();
                    console.error("Error!", error.status_code, error.message);
                    if (error.status == 401) {
                        this.authService.loginAgain();
                        //this.router.navigateByUrl('/login');
                    }
                    else if (error.status_code == 400) {
                        this.err = error.message;
                    }
                });
            }
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePasswordPage);



/***/ }),

/***/ 1492:
/*!****************************************************************!*\
  !*** ./src/app/proj/change-password/change-password.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  padding: 0 15px !important;\n}\n\n.brde {\n  text-align: center;\n  border: 1px solid #6b1a0d;\n  padding: 4px 13px 20px;\n  border-radius: 48px;\n  margin: 0 13px;\n}\n\n.back {\n  padding: 6px 0px;\n  text-decoration: underline;\n  position: absolute;\n  left: 10px;\n  top: 17px;\n  font-size: 18px;\n  color: #ffffff;\n  background: rgba(0, 0, 0, 0.78);\n  border-radius: 50px;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  box-shadow: 0px 2px 4px #585858;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQkFBQTtBQUNEOztBQUlBO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREQ7O0FBR0E7RUFDQyxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUFEIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuXHQvLyAgIC5pb24tbGFiZWwge1xuXHQvLyAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcblx0Ly8gICB9XG59XG4uYnJkZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgIzZiMWEwZDtcblx0cGFkZGluZzogNHB4IDEzcHggMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNDhweDtcblx0bWFyZ2luOiAwIDEzcHg7XG59XG4uYmFjayB7XG5cdHBhZGRpbmc6IDZweCAwcHg7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDEwcHg7XG5cdHRvcDogMTdweDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc4KTtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3gtc2hhZG93OiAwcHggMnB4IDRweCAjNTg1ODU4O1xufVxuICAgICAgICAiXX0= */");

/***/ }),

/***/ 40748:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/change-password/change-password.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <img src=\"../../../assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n\n  <div class=\"brde\">\n    <h3>Change Password</h3>\n    <form style=\"margin-top: 10px;\" [formGroup]=\"changeForm\">\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">Old Password</ion-label>\n        <ion-input\n        type=\"password\"\n        clearOnEdit=\"false\"\n        formControlName=\"oldpassword\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.oldpassword.errors }\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.oldpassword.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.oldpassword.errors.required\">\n            Old Password is required\n          </div>\n          <div *ngIf=\"f.oldpassword.errors.minlength\">\n            Old Password must be at least 6 characters\n          </div>\n        </div>\n      </ion-item>\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">New Password</ion-label>\n        <ion-input\n        type=\"password\"\n        clearOnEdit=\"false\"\n        formControlName=\"password\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.password.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.password.errors.required\">\n            New Password is required\n          </div>\n          <div *ngIf=\"f.password.errors.minlength\">\n            New Password must be at least 6 characters\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input\n        clearOnEdit=\"false\"\n        type=\"password\"\n        formControlName=\"confirmPassword\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\n          \n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.confirmPassword.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.confirmPassword.errors.required\">\n            Confirm Password is required\n          </div>\n          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n            Password miss match\n          </div>\n        </div>\n      </ion-item>\n      <!-- <p text-center>{{err}}</p> -->\n      <div text-center style=\"margin-top: 10px;\">\n        <ion-button padding class=\"btn btn-primary\" (click)=\"onSubmit()\" color=\"tertiary\"\n          >Submit</ion-button\n        >\n      </div>\n    </form>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_change-password_change-password_module_ts-es2015.js.map