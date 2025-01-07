(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_assign-faculty_assign-faculty_module_ts"],{

/***/ 39902:
/*!*************************************************************************!*\
  !*** ./src/app/faculty/assign-faculty/assign-faculty-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignFacultyPageRoutingModule": function() { return /* binding */ AssignFacultyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _assign_faculty_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign-faculty.page */ 370);




const routes = [
    {
        path: '',
        component: _assign_faculty_page__WEBPACK_IMPORTED_MODULE_0__.AssignFacultyPage
    }
];
let AssignFacultyPageRoutingModule = class AssignFacultyPageRoutingModule {
};
AssignFacultyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssignFacultyPageRoutingModule);



/***/ }),

/***/ 75132:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/assign-faculty/assign-faculty.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignFacultyPageModule": function() { return /* binding */ AssignFacultyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _assign_faculty_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign-faculty-routing.module */ 39902);
/* harmony import */ var _assign_faculty_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-faculty.page */ 370);







let AssignFacultyPageModule = class AssignFacultyPageModule {
};
AssignFacultyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _assign_faculty_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignFacultyPageRoutingModule
        ],
        declarations: [_assign_faculty_page__WEBPACK_IMPORTED_MODULE_1__.AssignFacultyPage]
    })
], AssignFacultyPageModule);



/***/ }),

/***/ 370:
/*!***************************************************************!*\
  !*** ./src/app/faculty/assign-faculty/assign-faculty.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignFacultyPage": function() { return /* binding */ AssignFacultyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_assign_faculty_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assign-faculty.page.html */ 47410);
/* harmony import */ var _assign_faculty_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-faculty.page.scss */ 80917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);








let AssignFacultyPage = class AssignFacultyPage {
    constructor(loadingController, router, authService, general) {
        this.loadingController = loadingController;
        this.router = router;
        this.authService = authService;
        this.general = general;
        this.SubjectData = [];
        this.FacSub_data = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_faculty");
        this.loadSubjects();
    }
    action(data) {
        this.router.navigate([
            "assignment-notices",
            { data: JSON.stringify(data) },
        ]);
    }
    loadSubjects() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.general.loading("Loading ...");
            load.present();
            let page = "teaching-staff/faculty-subjects?employeeDetailId=undefined";
            this.authService.get_fac_t(page, this.token).subscribe((data) => {
                load.dismiss();
                console.log(data, "sd");
                this.SubjectData = data.facultyElectiveSubjects;
                this.FacSub_data = true;
            }, (err) => {
                if (err.status == 401 || err.status == 422 || err.status == 0) {
                    if (err.statusText == "Unauthorized") {
                        this.general.loginAgain();
                        this.router.navigateByUrl("/opem");
                    }
                }
                this.FacSub_data = true;
                load.dismiss();
            });
        });
    }
};
AssignFacultyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService }
];
AssignFacultyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-assign-faculty",
        template: _raw_loader_assign_faculty_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assign_faculty_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssignFacultyPage);



/***/ }),

/***/ 80917:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/assign-faculty/assign-faculty.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  border: 1px solid gray !important;\n  color: black;\n  text-align: center;\n}\n\n.valData {\n  font-size: 13px;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi1mYWN1bHR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJhc3NpZ24tZmFjdWx0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFsRGF0YSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uSGVhZERhdGEge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogI2FlNWM1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 47410:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/assign-faculty/assign-faculty.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-button routerLink=\"/dashboard\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title> Assignment / Notice </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"!FacSub_data\">\n        <div class=\"ion-padding custom-skeleton\">\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n    \n        <div class=\"ion-padding custom-skeleton\">\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n    \n        <div class=\"ion-padding custom-skeleton\">\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </div>\n      </div>\n    <ion-grid *ngIf=\"FacSub_data\">\n        <ion-row class=\"HeadData\">\n            <ion-col size=\"3\"> Class </ion-col>\n            <ion-col size=\"3\"> Division </ion-col>\n            <ion-col size=\"4\"> Subject </ion-col>\n            <ion-col size=\"2\"> Action </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"SubjectData.length==0\">\n            <ion-col size=\"12\"> No data found </ion-col>\n        </ion-row>\n        <div class=\"valData\" *ngIf=\"SubjectData.length!=0\">\n            <ion-row *ngFor=\"let d of SubjectData\">\n                <ion-col size=\"3\"> {{d.class}} </ion-col>\n                <ion-col size=\"3\"> {{d.division}} </ion-col>\n                <ion-col size=\"4\"> {{d.subject_name}} </ion-col>\n                <ion-col size=\"2\" (click)=\"action(d)\">\n                    <ion-icon name=\"create\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_assign-faculty_assign-faculty_module_ts-es2015.js.map