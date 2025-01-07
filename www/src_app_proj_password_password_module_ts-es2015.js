(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_password_password_module_ts"],{

/***/ 17151:
/*!**********************************************************!*\
  !*** ./src/app/proj/password/password-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageRoutingModule": function() { return /* binding */ PasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.page */ 7242);




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_0__.PasswordPage
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ 144:
/*!**************************************************!*\
  !*** ./src/app/proj/password/password.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPageModule": function() { return /* binding */ PasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 17151);
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page */ 7242);







let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordPageRoutingModule
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_1__.PasswordPage]
    })
], PasswordPageModule);



/***/ }),

/***/ 7242:
/*!************************************************!*\
  !*** ./src/app/proj/password/password.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordPage": function() { return /* binding */ PasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./password.page.html */ 50490);
/* harmony import */ var _password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.page.scss */ 4244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let PasswordPage = class PasswordPage {
    constructor(formBuilder, auth, router, generalts, actroute) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.generalts = generalts;
        this.actroute = actroute;
        this.submitted = false;
        this.mob = this.actroute.snapshot.paramMap.get("mob_num");
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        }, {
            validator: (0,src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.MustMatch)("password", "confirmPassword")
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.submitted = true;
            // stop here if form is invalid
            if (this.registerForm.invalid) {
                return;
            }
            else {
                console.log(this.registerForm.value.confirmPassword, "reg");
                var pas = {
                    password: this.registerForm.value.password,
                    //mobile: this.mob,
                    password_confirm: this.registerForm.value.confirmPassword
                };
                var token = localStorage.getItem("pas_tok");
                const load = yield this.generalts.loading("Loading ...");
                yield load.present();
                this.auth.g_postt(pas, "change-password", token).subscribe(sa => {
                    console.log(sa, "da");
                    if (sa.message) {
                        load.dismiss();
                        //  alert("password");
                        this.generalts.showToast(sa.message);
                        localStorage.setItem("*/", this.mob);
                        this.router.navigate(["/home"]);
                        //localStorage.setItem("asd", this.mob);
                    }
                    // else if (sa.status != true) {
                    //   this.err = sa.status;
                    // }
                }, error => {
                    load.dismiss();
                    console.error("Error!", error.status_code, error.message);
                    if (error.status_code == 400) {
                        this.err = error.message;
                    }
                });
            }
            // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value));
        });
    }
};
PasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
PasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-password",
        template: _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PasswordPage);



/***/ }),

/***/ 4244:
/*!**************************************************!*\
  !*** ./src/app/proj/password/password.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  padding: 0 15px !important;\n}\n\n.brde {\n  text-align: center;\n  border: 1px solid #6b1a0d;\n  padding: 4px 13px 20px;\n  border-radius: 48px;\n  margin: 0 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAvLyAgIC5pb24tbGFiZWwge1xuICAvLyAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgLy8gICB9XG59XG4uYnJkZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZiMWEwZDtcbiAgcGFkZGluZzogNHB4IDEzcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbiAgbWFyZ2luOiAwIDEzcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 50490:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/password/password.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <img src=\"../../../assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n\n  <div class=\"brde\">\n    <h3>Change Password</h3>\n    <form style=\"margin-top: 10px;\" [formGroup]=\"registerForm\">\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input\n          type=\"password\"\n          clearOnEdit=\"false\"\n          formControlName=\"password\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.password.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.password.errors.required\">\n            Password is required\n          </div>\n          <div *ngIf=\"f.password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item class=\"form-group\">\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input\n          clearOnEdit=\"false\"\n          type=\"password\"\n          formControlName=\"confirmPassword\"\n          class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\n        ></ion-input>\n        <div\n          *ngIf=\"submitted && f.confirmPassword.errors\"\n          class=\"invalid-feedback red\"\n        >\n          <div *ngIf=\"f.confirmPassword.errors.required\">\n            Confirm Password is required\n          </div>\n          <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n            Password miss match\n          </div>\n        </div>\n      </ion-item>\n      <p text-center>{{err}}</p>\n      <div text-center>\n        <ion-button padding class=\"btn btn-primary\" (click)=\"onSubmit()\" color=\"tertiary\"\n          >Submit</ion-button\n        >\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n<!-- <div class=\"form-group\">\n      <label>Password</label>\n      <input\n        type=\"password\"\n        formControlName=\"password\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n      />\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        <div *ngIf=\"f.password.errors.minlength\">\n          Password must be at least 6 characters\n        </div>\n      </div>\n    </div> -->\n\n<!-- <div class=\"form-group\">\n      <label>Confirm Password</label>\n      <input\n        type=\"password\"\n        formControlName=\"confirmPassword\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"\n      />\n      <div\n        *ngIf=\"submitted && f.confirmPassword.errors\"\n        class=\"invalid-feedback\"\n      >\n        <div *ngIf=\"f.confirmPassword.errors.required\">\n          Confirm Password is required\n        </div>\n        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n          Passwords must match\n        </div>\n      </div>\n    </div>\n  \n  \n  <div class=\"form-group\">\n      <button class=\"btn btn-primary\">Register</button>\n    </div>-->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_password_password_module_ts-es2015.js.map