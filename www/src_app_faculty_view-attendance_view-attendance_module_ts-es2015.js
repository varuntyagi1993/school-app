(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_view-attendance_view-attendance_module_ts"],{

/***/ 36308:
/*!***************************************************************************!*\
  !*** ./src/app/faculty/view-attendance/view-attendance-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAttendancePageRoutingModule": function() { return /* binding */ ViewAttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _view_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-attendance.page */ 81232);




const routes = [
    {
        path: '',
        component: _view_attendance_page__WEBPACK_IMPORTED_MODULE_0__.ViewAttendancePage
    }
];
let ViewAttendancePageRoutingModule = class ViewAttendancePageRoutingModule {
};
ViewAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewAttendancePageRoutingModule);



/***/ }),

/***/ 35378:
/*!*******************************************************************!*\
  !*** ./src/app/faculty/view-attendance/view-attendance.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAttendancePageModule": function() { return /* binding */ ViewAttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-attendance-routing.module */ 36308);
/* harmony import */ var _view_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-attendance.page */ 81232);







let ViewAttendancePageModule = class ViewAttendancePageModule {
};
ViewAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewAttendancePageRoutingModule
        ],
        declarations: [_view_attendance_page__WEBPACK_IMPORTED_MODULE_1__.ViewAttendancePage]
    })
], ViewAttendancePageModule);



/***/ }),

/***/ 81232:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/view-attendance/view-attendance.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAttendancePage": function() { return /* binding */ ViewAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_view_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-attendance.page.html */ 57394);
/* harmony import */ var _view_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-attendance.page.scss */ 14769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/general.service */ 21864);









let ViewAttendancePage = class ViewAttendancePage {
    constructor(authService, router, toastController, alert, general) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.alert = alert;
        this.general = general;
        this.facData = [];
    }
    ngOnInit() {
        this.token = localStorage.getItem("pas_faculty");
        this.facData = JSON.parse(localStorage.getItem('myParam'));
        this.getDisplaySheet();
    }
    getDisplaySheet() {
        moment__WEBPACK_IMPORTED_MODULE_2__().format('hh:mm a');
        this.general.loadingPresent();
        let page = `teaching-staff/class-guide-attendance/attendance-sheet?institution_id=${this.facData.institution_id}&year_id=${this.facData.year_id}&academic_year_id=${this.facData.academic_year_id}&course_id=${this.facData.course_id}&batch_id=${this.facData.batch_id}`;
        this.authService.get_fac_t(page, this.token)
            .subscribe(data => {
            this.displaySheet = data;
            this.general.loadingDismiss();
        }, (err) => {
            if (err.status === 401 || err.status === 422) {
                localStorage.clear();
                this.alertMeassage('Session expierd');
                this.router.navigateByUrl('');
            }
            if (err.status === 200) {
                this.alertMeassage("Server Connection Error. Please Login Again.");
                localStorage.clear();
            }
            this.general.loadingDismiss();
        });
    }
    //Alert Message
    alertMeassage(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Alert Message!',
                message: data,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ViewAttendancePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService }
];
ViewAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-attendance',
        template: _raw_loader_view_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewAttendancePage);



/***/ }),

/***/ 14769:
/*!*******************************************************************!*\
  !*** ./src/app/faculty/view-attendance/view-attendance.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-bordered ion-row {\n  border-style: solid;\n  white-space: normal;\n  text-align: center;\n  font-style: bold;\n  font-weight: bold;\n  border-width: 1px 0px 1px 0px;\n  border-color: #5f5757;\n  line-height: 32px;\n}\n.grid-bordered .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n.grid-bordered ion-col {\n  border-style: solid;\n  border-radius: 2px;\n  border-width: 0px 1px 0px 1px;\n  border-color: #ccc6c6;\n}\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 160%;\n  font-size: 12px;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBR0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFITjtBQUtJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFITjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUpKO0FBS0k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUlRO0VBQ0kscUJBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIWiIsImZpbGUiOiJ2aWV3LWF0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtYm9yZGVyZWR7XG4gICAgaW9uLXJvd3tcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAwcHg7XG4gICAgICBib3JkZXItY29sb3I6ICM1ZjU3NTc7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgfVxuICAgIC5yb3ctdGV4dHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NjYzZjNjtcbiAgICB9XG59XG5cbi50aHVtbmFpbHN7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAubGlzdC10aHVtYm5haWx7XG4gICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAuaW1nLXRodW1ie1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjExLCAxMiwgMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE2MCU7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOjAgMnB4IDAgMDsgXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 57394:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/view-attendance/view-attendance.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"attendance\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Attendance Sheet</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"thumnails\">\n    <div class=\"list-thumbnail\">\n      <div class=\"img-thumb\">\n        <ion-grid text-center class=\"grid-bordered\">\n          <ion-row>\n            <!-- <ion-col size=\"1.5\">\n              Hour\n            </ion-col> -->\n            <ion-col size=\"2\">\n              Date\n            </ion-col>\n            <!-- <ion-col size=\"2\">\n              Lecture Hour\n            </ion-col> -->\n           \n            <!-- <ion-col size=\"2\">\n              Staff\n            </ion-col> -->\n            <ion-col size=\"2\">\n              Total Absentees\n            </ion-col>\n            <ion-col size=\"5\">\n              Absentees\n            </ion-col>\n            <ion-col size=\"3\">\n              Updated At\n            </ion-col>\n          </ion-row>\n          <ion-virtual-scroll [items]=\"displaySheet\" approxItemHeight=\"120px\">\n            <ion-row class=\"row-text\" *virtualItem=\"let s;let i=index\">\n              <!-- <ion-col size=\"1.5\">\n                {{s.progressive_hour}}\n              </ion-col> -->\n              <ion-col size=\"2\">\n                {{s.date| date: 'dd/MM/yyyy'}}\n              </ion-col>\n              <!-- <ion-col size=\"2\">\n                {{s.lecture_hour}}\n              </ion-col> -->\n              <!-- <ion-col size=\"2\">\n                {{s.staff_name}}\n              </ion-col> -->\n              <ion-col size=\"2\">\n                {{s.totalAbesentees}}\n              </ion-col>\n              <ion-col col-auto size=\"5\">\n                {{s.abesentees}}\n              </ion-col>\n              <ion-col size=\"3\">\n                {{s.updated_at| date: 'MMM d, h:mm a'}}\n              </ion-col>\n            </ion-row>\n          </ion-virtual-scroll>\n          <ion-row *ngIf=\"displaySheet?.length == 0\">\n            <ion-col size=\"12\">\n              No Data to Display\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_view-attendance_view-attendance_module_ts-es2015.js.map