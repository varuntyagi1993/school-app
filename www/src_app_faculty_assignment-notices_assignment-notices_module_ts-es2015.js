(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_assignment-notices_assignment-notices_module_ts"],{

/***/ 35977:
/*!*********************************************************************************!*\
  !*** ./src/app/faculty/assignment-notices/assignment-notices-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentNoticesPageRoutingModule": function() { return /* binding */ AssignmentNoticesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _assignment_notices_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignment-notices.page */ 64774);




const routes = [
    {
        path: '',
        component: _assignment_notices_page__WEBPACK_IMPORTED_MODULE_0__.AssignmentNoticesPage
    }
];
let AssignmentNoticesPageRoutingModule = class AssignmentNoticesPageRoutingModule {
};
AssignmentNoticesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssignmentNoticesPageRoutingModule);



/***/ }),

/***/ 15312:
/*!*************************************************************************!*\
  !*** ./src/app/faculty/assignment-notices/assignment-notices.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentNoticesPageModule": function() { return /* binding */ AssignmentNoticesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _assignment_notices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignment-notices-routing.module */ 35977);
/* harmony import */ var _assignment_notices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignment-notices.page */ 64774);







let AssignmentNoticesPageModule = class AssignmentNoticesPageModule {
};
AssignmentNoticesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _assignment_notices_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignmentNoticesPageRoutingModule
        ],
        declarations: [_assignment_notices_page__WEBPACK_IMPORTED_MODULE_1__.AssignmentNoticesPage]
    })
], AssignmentNoticesPageModule);



/***/ }),

/***/ 64774:
/*!***********************************************************************!*\
  !*** ./src/app/faculty/assignment-notices/assignment-notices.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentNoticesPage": function() { return /* binding */ AssignmentNoticesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_assignment_notices_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assignment-notices.page.html */ 35474);
/* harmony import */ var _assignment_notices_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignment-notices.page.scss */ 31468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);








let AssignmentNoticesPage = class AssignmentNoticesPage {
    constructor(route, router, authService, general, modalCtrl) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.general = general;
        this.modalCtrl = modalCtrl;
        this.assignID = "";
        this.listData = [];
        this.academicYearId = "";
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_faculty");
        this.assignID = JSON.parse(this.route.snapshot.paramMap.get("data")).id;
        this.academicYearId = JSON.parse(this.route.snapshot.paramMap.get("data")).academic_year_id;
        console.log(JSON.parse(this.route.snapshot.paramMap.get("data")), "academicYearIdacademicYearId", this.academicYearId);
        this.LoadList();
    }
    edit(d) {
        this.router.navigate([
            "assignmentedit",
            {
                data: JSON.stringify(d),
                topic: "Edit Notices",
                facultyDivisionId: this.assignID,
                academicYearId: this.academicYearId,
            },
        ]);
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // let a = {
            //       data: null,
            //       topic: "Add Notices",
            //       facultyDivisionId: this.assignID,
            //       academicYearId: this.academicYearId,
            //     };
            // const modal = await this.modalCtrl.create({
            //   component: AssignmenteditPage,
            //   componentProps: { assignment: a }
            // });
            // return await modal.present();
            this.router.navigate([
                "assignmentedit",
                {
                    data: null,
                    topic: "Add Notices",
                    facultyDivisionId: this.assignID,
                    academicYearId: this.academicYearId,
                },
            ]);
        });
    }
    delete(d) { }
    LoadList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.general.loading("Loading ...");
            load.present();
            let page = "teaching-staff/notices/get-notices?faculty_division_allocation_id=" +
                this.assignID;
            this.authService.get_fac_t(page, this.token).subscribe((data) => {
                load.dismiss();
                console.log(data, "sd");
                this.listData = data;
            }, (err) => {
                if (err.status == 401 || err.status == 422 || err.status == 0) {
                    if (err.statusText == "Unauthorized") {
                        this.general.loginAgain();
                        this.router.navigateByUrl("/opem");
                    }
                }
                load.dismiss();
            });
        });
    }
};
AssignmentNoticesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AssignmentNoticesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-assignment-notices",
        template: _raw_loader_assignment_notices_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assignment_notices_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssignmentNoticesPage);



/***/ }),

/***/ 31468:
/*!*************************************************************************!*\
  !*** ./src/app/faculty/assignment-notices/assignment-notices.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  border: 1px solid gray !important;\n  color: black;\n  text-align: center;\n}\n\n.valData {\n  font-size: 13px;\n}\n\n.valData ion-icon {\n  font-size: 18px;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnQtbm90aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUFJO0VBQ0ksZUFBQTtBQUVSOztBQUdJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoiYXNzaWdubWVudC1ub3RpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWxEYXRhIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuXG4uSGVhZERhdGEge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogI2FlNWM1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 35474:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/assignment-notices/assignment-notices.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-button routerLink=\"/assign-faculty\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title> Assignment / Notice </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button color=\"primary\" class=\"fab-btn\" (click)=\"create()\">\n          <ion-icon name=\"add\" class=\"add-icon\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-grid>\n        <ion-row class=\"HeadData\">\n            <ion-col size=\"2\"> S.No </ion-col>\n            <ion-col size=\"3\"> Title </ion-col>\n            <ion-col size=\"4\"> Created Date </ion-col>\n            <ion-col size=\"3\"> Action </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"listData.length==0\">\n            <ion-col size=\"12\"> No data found </ion-col>\n        </ion-row>\n        <div class=\"valData\" *ngIf=\"listData.length!=0\">\n            <ion-row *ngFor=\"let d of listData;let n=index\">\n                <ion-col size=\"2\"> {{n+1}} </ion-col>\n                <ion-col size=\"3\"> {{d.title}} </ion-col>\n                <ion-col size=\"4\"> {{d.notice_date_time}} </ion-col>\n                <ion-col size=\"3\">\n                    <ion-icon name=\"create\" style=\"color: blue; padding-right: 10px\" (click)=\"edit(d)\"></ion-icon>\n                    <!-- <ion-icon name=\"trash\" style=\"color: red\" (click)=\"delete(d)\"></ion-icon> -->\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_assignment-notices_assignment-notices_module_ts-es2015.js.map