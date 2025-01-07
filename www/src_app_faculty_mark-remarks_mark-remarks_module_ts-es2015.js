(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_mark-remarks_mark-remarks_module_ts"],{

/***/ 90170:
/*!*********************************************************************!*\
  !*** ./src/app/faculty/mark-remarks/mark-remarks-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkRemarksPageRoutingModule": function() { return /* binding */ MarkRemarksPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mark_remarks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mark-remarks.page */ 14875);




const routes = [
    {
        path: '',
        component: _mark_remarks_page__WEBPACK_IMPORTED_MODULE_0__.MarkRemarksPage
    }
];
let MarkRemarksPageRoutingModule = class MarkRemarksPageRoutingModule {
};
MarkRemarksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MarkRemarksPageRoutingModule);



/***/ }),

/***/ 8526:
/*!*************************************************************!*\
  !*** ./src/app/faculty/mark-remarks/mark-remarks.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkRemarksPageModule": function() { return /* binding */ MarkRemarksPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mark_remarks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mark-remarks-routing.module */ 90170);
/* harmony import */ var _mark_remarks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mark-remarks.page */ 14875);







let MarkRemarksPageModule = class MarkRemarksPageModule {
};
MarkRemarksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mark_remarks_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarkRemarksPageRoutingModule
        ],
        declarations: [_mark_remarks_page__WEBPACK_IMPORTED_MODULE_1__.MarkRemarksPage]
    })
], MarkRemarksPageModule);



/***/ }),

/***/ 14875:
/*!***********************************************************!*\
  !*** ./src/app/faculty/mark-remarks/mark-remarks.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkRemarksPage": function() { return /* binding */ MarkRemarksPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mark_remarks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mark-remarks.page.html */ 1074);
/* harmony import */ var _mark_remarks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mark-remarks.page.scss */ 48102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);










let MarkRemarksPage = class MarkRemarksPage {
    // compareWithFn(o1, o2) {
    //   return o1 === o2;
    // };
    constructor(authService, general, router, location, alertController, modalCtrl, formBuilder) {
        this.authService = authService;
        this.general = general;
        this.router = router;
        this.location = location;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.count = 0;
        this.token = localStorage.getItem("pas_faculty");
        // return
        let institute = localStorage.getItem("institute");
        this.general.listen().subscribe((m) => {
            console.log(m, 'fdf34');
            console.log(localStorage.getItem('event'));
            //  this.getRefresh(localStorage.getItem('event'));
        });
    }
    onKeyupEnter() {
        var nextEl = this.findNextTabStop(document.activeElement);
        nextEl.focus();
        // or try for ionic 4:
        // nextEl.setFocus();
    }
    findNextTabStop(el) {
        var universe = document.querySelectorAll("input, button, select, textarea, a[href]");
        var list = Array.prototype.filter.call(universe, function (item) {
            return item.tabIndex >= "0";
        });
        var index = list.indexOf(el);
        return list[index + 1] || list[0];
    }
    ngOnInit() {
        console.log('df');
        this.myForm = this.formBuilder.group({
            remark0: [''],
        });
        // this.particularsId = 85;
        // this.compareWith = this.compareWithFn;
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    ionViewWillEnter() {
        // window.location.reload();
        this.token = localStorage.getItem("pas_faculty");
        console.log('ds');
        // return
        let institute = localStorage.getItem("institute");
        // this.MyDefaultYearIdValue = 85 ;
        this.getClassGuide();
    }
    getClassGuide() {
        this.general.loadingPresent();
        this.authService.get_fac_t("teaching-staff/class-guide-marks-card-remarks/class-guide-details", this.token).subscribe(data => {
            console.log(data);
            // 
            this.general.loadingDismiss();
            let assessmentParticular = data['assessmentParticularIds'];
            this.assessmentParticular = Object.keys(assessmentParticular).map(function (index) {
                let a = assessmentParticular[index];
                return a;
            });
            let particularsId = this.assessmentParticular.filter(particular => particular.main == 1);
            this.particularsId = particularsId[0].id;
            console.log(this.particularsId, 'sd');
            this.length = data['yearIds'].length;
            // if(this.length == 1) {
            let y = data['yearIds'];
            this.yearId = y[0].id;
            // }
            this.years = data['yearIds'];
            this.getRefresh(this.particularsId, this.yearId);
        }, (error) => {
            console.log(error);
            this.general.loadingDismiss();
            if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                    this.general.loginAgain();
                    this.router.navigateByUrl("/opem");
                }
            }
        });
    }
    getYear(year) {
        this.yearId = year.detail['value'];
    }
    getStudent(event) {
        localStorage.setItem('event', event.detail['value']);
        this.general.loadingPresent();
        let particularsId = event.detail['value'];
        this.particularsId = particularsId;
        this.authService.get_fac_t("teaching-staff/class-guide-marks-card-remarks/fetch-students?year_id=" + this.yearId + "&assessment_Id=" + particularsId, this.token).subscribe(data => {
            console.log(data);
            this.count = data.length;
            this.studentDetails = data;
            this.general.loadingDismiss();
            for (var i = 0; i < this.count; i++) {
                this.myForm.addControl('remark' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
                this.myForm.controls['remark' + i].setValue(this.studentDetails[i].remarks);
                this.myForm.get('remark' + i).updateValueAndValidity();
            }
        }, (error) => {
            console.log(error);
            this.general.loadingDismiss();
            if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                    this.general.loginAgain();
                    this.router.navigateByUrl("/opem");
                }
            }
        });
    }
    getRefresh(event, yearId) {
        console.log(this.yearId);
        // this.general.loadingPresent();
        let particularsId = event;
        // this.particularsId = particularsId;
        this.authService.get_fac_t("teaching-staff/class-guide-marks-card-remarks/fetch-students?year_id=" + yearId + "&assessment_Id=" + particularsId, this.token).subscribe(data => {
            console.log(data);
            this.count = data.length;
            this.studentDetails = data;
            for (var i = 0; i < this.count; i++) {
                this.myForm.addControl('remark' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
                this.myForm.controls['remark' + i].setValue(this.studentDetails[i].remarks);
                this.myForm.get('remark' + i).updateValueAndValidity();
            }
            // this.general.loadingDismiss();
        }, (error) => {
            console.log(error);
            // this.general.loadingDismiss();
            if (error.status == 401 || error.status == 422 || error.status == 0) {
                if (error.statusText == "Unauthorized") {
                    this.general.loginAgain();
                    this.router.navigateByUrl("/opem");
                }
            }
        });
    }
    back() {
        this.router.navigateByUrl('dashboard');
    }
    delete(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let data = {
                "studentDetail": {
                    "class_guide_allocations_id": student.class_guide_allocations_id,
                    "remarks": student.remarks,
                    "student_id": student.student_id,
                    "student_name": student.student_name,
                    "roll_no": student.roll_no,
                },
                "assessmentParticularId": this.particularsId
            };
            console.log(data);
            this.general.loadingPresent();
            this.authService.g_postt_fac(data, 'teaching-staff/class-guide-marks-card-remarks/delete-remarks', this.token).subscribe(response => {
                this.general.loadingDismiss();
                console.log(response);
                if (response.status) {
                    this.general.showToast(response.message);
                }
                this.general.filter('Deleted');
                // location.reload();
            }, (error) => {
                console.log(error);
                this.general.loadingDismiss();
                if (error.status == 401 || error.status == 422 || error.status == 0) {
                    if (error.statusText == "Unauthorized") {
                        this.general.loginAgain();
                        this.router.navigateByUrl("/opem");
                    }
                }
            });
            // const alert = await this.alertController.create({
            //   header: 'Confirm!',
            //   message: "Are you sure you want to delete?",
            //   buttons: [
            //     {
            //       text: 'No',
            //       role: 'cancel',
            //       cssClass: 'secondary',
            //       handler: (blah) => {
            //         console.log('Confirm Cancel: blah');
            //       }
            //     }, {
            //       text: 'Yes',
            //       handler: () => {
            //         // this.popoverController.dismiss();
            //       }
            //     }
            //   ]
            // });
            // await alert.present();
        });
    }
    edit(value, student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (value.detail['value'] != '') {
                let data = {
                    "editStudentRemarks": {
                        "class_guide_allocations_id": student.class_guide_allocations_id,
                        "remarks": value.detail['value'],
                        "student_id": student.student_id,
                        "student_name": student.student_name,
                        "roll_no": student.roll_no
                    },
                    "assessmentParticularId": this.particularsId
                };
                console.log(data);
                // this.general.loadingPresent()
                this.authService.g_postt_fac(data, 'teaching-staff/class-guide-marks-card-remarks/save-remarks', this.token).subscribe(response => {
                    // this.general.loadingDismiss();
                    console.log(response);
                    if (response.status) {
                        this.general.showToast(response.message);
                    }
                    // this.general.filter('Added');
                    // this.modalCtrl.dismiss();
                }, (error) => {
                    console.log(error);
                    // this.general.loadingDismiss();
                    if (error.status == 401 || error.status == 422 || error.status == 0) {
                        if (error.statusText == "Unauthorized") {
                            this.general.loginAgain();
                            this.router.navigateByUrl("/opem");
                        }
                    }
                });
            }
            if (value.detail['value'] == '') {
                this.delete(student);
            }
            // const modal = await this.modalCtrl.create({
            //   component: RemarkModalPage,
            //   componentProps: {
            //     "data" : student,
            //     "assessmentParticularId": this.particularsId,
            //   }
            // });
            // modal.present();
        });
    }
};
MarkRemarksPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
MarkRemarksPage.propDecorators = {
    onKeyupEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener, args: ["keyup.enter",] }]
};
MarkRemarksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-mark-remarks',
        template: _raw_loader_mark_remarks_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mark_remarks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MarkRemarksPage);



/***/ }),

/***/ 48102:
/*!*************************************************************!*\
  !*** ./src/app/faculty/mark-remarks/mark-remarks.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-bordered .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 160%;\n  font-size: 12px;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n\n.ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\n.align {\n  text-align: center;\n  vertical-align: text-bottom;\n}\n\n.btn {\n  text-align: center;\n  color: #690d01fc;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n\n.font {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmstcmVtYXJrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBYk47O0FBdUJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQXBCSjs7QUFxQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFuQlI7O0FBb0JRO0VBQ0kscUJBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFuQlo7O0FBeUJBO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0FBdEJKOztBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUF0QkY7O0FBeUJBO0VBT1Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTdCUjs7QUFpQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUE5QlI7O0FBa0NBO0VBQ0ksZUFBQTtBQS9CSiIsImZpbGUiOiJtYXJrLXJlbWFya3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtYm9yZGVyZWR7XG4gICAgLy8gaW9uLXJvd3tcbiAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC8vICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAwcHg7XG4gICAgLy8gICBib3JkZXItY29sb3I6ICM1ZjU3NTc7XG4gICAgLy8gICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAvLyAvLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLy8gfVxuICAgIC5yb3ctdGV4dHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB9XG4gICAgLy8gaW9uLWNvbHtcbiAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLy8gICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAvLyAgIGJvcmRlci1jb2xvcjogI2NjYzZjNjtcbiAgICAvLyB9XG59XG5cbi50aHVtbmFpbHN7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAubGlzdC10aHVtYm5haWx7XG4gICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAuaW1nLXRodW1ie1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjExLCAxMiwgMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE2MCU7IFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOjAgMnB4IDAgMDsgXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkhaW1wb3J0YW50IDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBcbn1cbi5hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4uYnRuIHtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIHdpZHRoOiA3NSU7XG4gICAgICAgIC8vIHBhZGRpbmc6IDhweDtcbiAgICAgICAgLy8gLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8vIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgIzY5MGQwMWZjO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM2OTBkMDFmYztcbiAgICAgICAgY29sb3I6ICM2OTBkMDFmYztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uSGVhZERhdGEge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBjb2xvcjogI2FlNWM1MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuXG4uZm9udCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ 1074:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/mark-remarks/mark-remarks.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title >Remarks Entry </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item *ngIf=\"length > 1\">\n    <ion-label floating>Year</ion-label>\n      <ion-select\n      [(ngModel)]=\"yearId\" \n        placeholder=\"Select\"\n        (ionChange)=\"getYear($event)\">\n        <ion-select-option\n          *ngFor=\"let year of years;\"\n          [value]=\"year.id\">\n          {{year.year}}\n        </ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Particulars</ion-label>\n      <ion-select \n        [(ngModel)]=\"particularsId\" \n        placeholder=\"Select\"\n        (ionChange)=\"getStudent($event)\">\n        <ion-select-option\n          *ngFor=\"let item of assessmentParticular;\"\n          [value]=\"item.id\">\n          {{item.name}}\n        </ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <div class=\"thumnails\" *ngIf=\"studentDetails\">\n    <div class=\"list-thumbnail\">\n      <div class=\"img-thumb\">\n        <form [formGroup]=\"myForm\">\n          <ion-grid  class=\"grid-bordered\" >\n            <ion-row class=\"row-text HeadData\">\n              <!-- <ion-col text-center class=\"ion-col\" size=\"1\">\n                <p>Action</p>\n              </ion-col> -->\n              <ion-col text-center class=\"font ion-col\" size=\"1\">\n                <p>Roll No</p>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3\">\n                <p>Name</p>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3.5\">\n                <p>Remarks</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"row-text\" *ngFor=\"let student of studentDetails; let i=index\">\n              <!-- <ion-col text-center class=\"ion-col\" size=\"1\">\n                <ion-label (click)=\"edit(student)\" class=\"label_ion\" >\n                  <ion-icon  class=\"btn\" name=\"create-outline\"></ion-icon>\n                </ion-label>\n                &nbsp;&nbsp;\n                <ion-label (click)=\"delete(student)\" class=\"label_ion\" *ngIf=\"student.remarks != null\">\n                  <ion-icon class=\"btn\" name=\"trash-outline\"></ion-icon>\n                </ion-label>\n              </ion-col>  -->\n              <ion-col text-center class=\"font ion-col ion-text-center\" size=\"1\">\n                <ion-label class=\"label_ion\" >{{student.roll_no}}</ion-label>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3\">\n                <ion-label class=\"label_ion\" >{{student.student_name}}</ion-label>\n              </ion-col>\n              <ion-col text-center class=\"font ion-col\" size=\"3.5\">\n                <ion-input formControlName=\"remark{{i}}\"    (ionChange)='edit($event, student)'  placeholder=\"Remarks\"></ion-input>\n                <!-- <ion-label class=\"label_ion\" >{{student.remarks}}</ion-label> -->\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_mark-remarks_mark-remarks_module_ts-es2015.js.map