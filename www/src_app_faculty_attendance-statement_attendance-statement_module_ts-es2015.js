(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_attendance-statement_attendance-statement_module_ts"],{

/***/ 43176:
/*!*************************************************************************************!*\
  !*** ./src/app/faculty/attendance-statement/attendance-statement-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceStatementPageRoutingModule": function() { return /* binding */ AttendanceStatementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _attendance_statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance-statement.page */ 25721);




const routes = [
    {
        path: '',
        component: _attendance_statement_page__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatementPage
    }
];
let AttendanceStatementPageRoutingModule = class AttendanceStatementPageRoutingModule {
};
AttendanceStatementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AttendanceStatementPageRoutingModule);



/***/ }),

/***/ 10439:
/*!*****************************************************************************!*\
  !*** ./src/app/faculty/attendance-statement/attendance-statement.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceStatementPageModule": function() { return /* binding */ AttendanceStatementPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _attendance_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance-statement-routing.module */ 43176);
/* harmony import */ var _attendance_statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance-statement.page */ 25721);







let AttendanceStatementPageModule = class AttendanceStatementPageModule {
};
AttendanceStatementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _attendance_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendanceStatementPageRoutingModule
        ],
        declarations: [_attendance_statement_page__WEBPACK_IMPORTED_MODULE_1__.AttendanceStatementPage]
    })
], AttendanceStatementPageModule);



/***/ }),

/***/ 25721:
/*!***************************************************************************!*\
  !*** ./src/app/faculty/attendance-statement/attendance-statement.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceStatementPage": function() { return /* binding */ AttendanceStatementPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_attendance_statement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./attendance-statement.page.html */ 66241);
/* harmony import */ var _attendance_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance-statement.page.scss */ 20280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/general.service */ 21864);









let AttendanceStatementPage = class AttendanceStatementPage {
    constructor(router, authService, alert, general) {
        this.router = router;
        this.authService = authService;
        this.alert = alert;
        this.general = general;
        this.cout = 0;
        this.fillType = "outline";
        this.showList = true;
        this.btnText = "Show Shortage List";
        this.shortage = "Show Full List";
        this.showShortage = "SHORTAGE";
    }
    ngOnInit() {
        this.token = localStorage.getItem("pas_faculty");
        let obj = JSON.parse(localStorage.getItem("sheet"));
        this.date = JSON.parse(localStorage.getItem("date"));
        this.statmentObj = obj;
        this.displayAttndSheet();
    }
    displayAttndSheet() {
        moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
        console.log(this.date);
        let page = `teaching-staff/class-guide-attendance/attendance-statement?institution_id=${this.statmentObj.institution_id}&year_id=${this.statmentObj.year_id}&academic_year_id=${this.statmentObj.academic_year_id}&course_id=${this.statmentObj.course_id}&batch_id=${this.statmentObj.batch_id}&date=${this.date}&attendanceStatementType=ALL&showOnlyActiveStudents=true`;
        this.general.loadingPresent();
        this.authService.get_fac_t(page, this.token).subscribe(data => {
            this.viewStatment = data;
            this.general.loadingDismiss();
        }, (err) => {
            if (err.status === 401 || err.status === 422) {
                localStorage.clear();
                this.alertMeassage('Session expierd');
                this.router.navigateByUrl('/login');
            }
            if (err.status === 200) {
                this.alertMeassage("Server Connection Error. Please Login Again.");
                localStorage.clear();
            }
            this.general.loadingDismiss();
        });
    }
    showlist() {
        this.cout = this.cout + 1;
        if (this.cout % 2 == 0) {
            this.showList = true;
            this.fillType = "outline";
        }
        else {
            this.showList = false;
            this.fillType = "solid";
        }
        this.cout % 2 == 0 ? this.btnText = "Show Shortage List" : this.btnText = "Show complete List";
        let status;
        this.cout % 2 == 0 ? status = "ALL" : status = "SHORTAGE";
        let page = `teaching-staff/class-guide-attendance/attendance-statement?institution_id=${this.statmentObj.institution_id}&year_id=${this.statmentObj.year_id}&academic_year_id=${this.statmentObj.academic_year_id}&course_id=${this.statmentObj.course_id}&batch_id=${this.statmentObj.batch_id}&date=${this.date}&attendanceStatementType=${status}&showOnlyActiveStudents=true`;
        this.general.loadingPresent();
        this.authService.get_fac_t(page, this.token).subscribe(data => {
            this.displyShortage = data;
            this.general.loadingDismiss();
        }, (err) => {
            if (err.status === 401 || err.status === 422) {
                localStorage.clear();
                this.alertMeassage('Session expierd');
                this.router.navigateByUrl('/login');
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
AttendanceStatementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService }
];
AttendanceStatementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-attendance-statement',
        template: _raw_loader_attendance_statement_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_attendance_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AttendanceStatementPage);



/***/ }),

/***/ 20280:
/*!*****************************************************************************!*\
  !*** ./src/app/faculty/attendance-statement/attendance-statement.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-bordered ion-row {\n  border-style: solid;\n  text-align: center;\n  font-style: bold;\n  font-weight: bold;\n  border-width: 1px 0px 1px 0px;\n  border-color: #5f5757;\n  line-height: 32px;\n}\n.grid-bordered ion-col {\n  border-style: solid;\n  border-radius: 2px;\n  border-width: 0px 1px 0px 1px;\n  border-color: #ccc6c6;\n}\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 250%;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n.thumnails .cat {\n  color: red;\n  font-size: 12px;\n}\n.thumnails .rat {\n  color: #1a1b1b;\n}\n.thumnails .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n.thumnails .white_space {\n  white-space: normal;\n}\nion-col.md.hydrated {\n  font-size: 12px !important;\n}\n.attendence-header {\n  color: #3880ff;\n  font-size: 15px;\n  padding-top: 5px;\n}\nion-title.md.title-md.hydrated {\n  font-size: 17px;\n  padding-top: 10px;\n}\n.badge {\n  margin-top: 10px;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2Utc3RhdGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBSE47QUFNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBRk47QUFHTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUlJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFGTjtBQUlJO0VBQ0UsY0FBQTtBQUZOO0FBSUk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBRk47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFPRTtFQUNFLDBCQUFBO0FBSko7QUFNQTtFQUFtQixjQUFBO0VBQWMsZUFBQTtFQUFlLGdCQUFBO0FBQWhEO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGIiwiZmlsZSI6ImF0dGVuZGFuY2Utc3RhdGVtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWJvcmRlcmVke1xuICAgIGlvbi1yb3d7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC8vICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMXB4IDBweDtcbiAgICAgIGJvcmRlci1jb2xvcjogIzVmNTc1NztcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB9XG4gICAgaW9uLWNvbHtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NjYzZjNjtcbiAgICB9XG4gIH1cbi50aHVtbmFpbHN7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAubGlzdC10aHVtYm5haWx7XG4gICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAuaW1nLXRodW1ie1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYigyMTEsIDEyLCAxMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB3aWR0aDogMjUwJTsgXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOjAgMnB4IDAgMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2F0e1xuICAgICAgY29sb3I6cmVkO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAucmF0e1xuICAgICAgY29sb3I6cmdiKDI2LCAyNywgMjcpO1xuICAgIH1cbiAgICAucm93LXRleHR7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC53aGl0ZV9zcGFjZXtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gIH1cblxuICBpb24tY29sLm1kLmh5ZHJhdGVke1xuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG59XG4uYXR0ZW5kZW5jZS1oZWFkZXJ7Y29sb3I6IzM4ODBmZjtmb250LXNpemU6MTVweDtwYWRkaW5nLXRvcDo1cHh9XG5pb24tdGl0bGUubWQudGl0bGUtbWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmJhZGdle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ 66241:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/attendance-statement/attendance-statement.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"attendance\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Attendance Statement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"thumnails\">\n    <div class=\"list-thumbnail\">\n      <div class=\"img-thumb\">\n        <ion-grid *ngIf=\"showList\"  text-center class=\"grid-bordered\">\n          <ion-row class=\"row-text\">\n            <ion-col size=\"1.5\">\n              Roll No\n            </ion-col>\n            <ion-col size=\"3.5\">\n              Student Name\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Conducted\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Attended\n            </ion-col>\n            <!-- <ion-col size=\"1\">\n              Exempt\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col size=\"0.9\">\n              Excused\n            </ion-col>\n            <ion-col size=\"0.8\">\n              Allowed\n            </ion-col> -->\n           \n            <ion-col size=\"0.7\">\n              Absent\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col  >\n              Absent Dates\n            </ion-col>\n          </ion-row>\n          <ion-virtual-scroll  [items]=\"viewStatment\" approxItemHeight=\"20px\" >\n            <ion-row class=\"row-text\" *virtualItem=\"let s;let i=index\" [ngClass]=\"s.shortage =='Y'?'cat':'rat'\"  >\n              <ion-col size=\"1.5\" > \n                {{s.roll_no}}\n              </ion-col>\n              <ion-col size=\"3.5\" style=\"text-align: left;\">\n                {{s.student_name}}\n              </ion-col> \n              <ion-col size=\"0.7\">\n                {{s.conducted}}\n              </ion-col>\n              <ion-col size=\"0.7\">\n                {{s.attended}}\n              </ion-col>\n              <!-- <ion-col size=\"1\">\n                {{s.exempt}}\n              </ion-col>\n              <ion-col size=\"0.7\">\n                {{s.percetage}}\n              </ion-col>\n              <ion-col size=\"0.9\">\n                {{s.excused}}\n              </ion-col>\n              <ion-col size=\"0.8\">      \n                {{s.allowed}}\n              </ion-col> -->\n             \n              <ion-col size=\"0.7\">\n                {{s.absent}}\n              </ion-col>\n              <ion-col size=\"0.7\">\n                {{s.final_percentage}}\n              </ion-col>\n              <ion-col class=\"white_space\" >\n                {{s.absent_dates}}\n              </ion-col>\n            </ion-row>\n          </ion-virtual-scroll>\n          <ion-row *ngIf=\"viewStatment?.length == 0\">\n            <ion-col size=\"12\">\n              No Data to Display\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid *ngIf=\"!showList\"  text-center class=\"grid-bordered\">\n          <ion-row class=\"row-text\">\n            <ion-col size=\"1.5\">\n              Roll No\n            </ion-col>\n            <ion-col size=\"3.5\">\n              Student Name\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Conducted\n            </ion-col>\n            <ion-col size=\"0.7\">\n              Attended\n            </ion-col>\n            <!-- <ion-col size=\"1\">\n              Exempt\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col size=\"0.9\">\n              Excused\n            </ion-col>\n            <ion-col size=\"0.8\">\n              Allowed\n            </ion-col> -->\n            <ion-col size=\"0.7\">\n              Absent\n            </ion-col>\n            <ion-col size=\"0.7\">\n              %\n            </ion-col>\n            <ion-col>\n              Absent Dates\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"displyShortage?.length == 0\">\n            <ion-col size=\"12\">\n              No Data to Display\n            </ion-col>\n          </ion-row>\n          <ion-row  class=\"row-text\" ngClass=\"cat\" *ngFor=\"let s of displyShortage\">\n            <ion-col size=\"1.5\">\n              {{s.roll_no}}\n            </ion-col>\n            <ion-col size=\"3.5\" style=\"text-align: left;\">\n              {{s.student_name}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.conducted}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.attended}}\n            </ion-col>\n            <!-- <ion-col size=\"1\">\n              {{s.exempt}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.percetage}}\n            </ion-col>\n            <ion-col size=\"0.9\">\n              {{s.excused}}\n            </ion-col>\n            <ion-col size=\"0.8\">\n              {{s.allowed}}\n            </ion-col> -->\n           \n            <ion-col size=\"0.7\">\n              {{s.absent}}\n            </ion-col>\n            <ion-col size=\"0.7\">\n              {{s.percetage}}\n            </ion-col>\n            <ion-col class=\"white_space\" >\n              {{s.absent_dates}}\n            </ion-col>\n          </ion-row> \n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer> \n  <ion-button (click)=\"showlist()\" shape=\"round\" expand=\"block\" fill=\"{{fillType}}\" size=\"small\" color=\"tertiary\">\n    {{btnText}}\n  </ion-button>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_attendance-statement_attendance-statement_module_ts-es2015.js.map