(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_class-list_class-list_module_ts"],{

/***/ 96002:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/class-list/class-list-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPageRoutingModule": function() { return /* binding */ ClassListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _class_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list.page */ 7675);




const routes = [
    {
        path: '',
        component: _class_list_page__WEBPACK_IMPORTED_MODULE_0__.ClassListPage
    }
];
let ClassListPageRoutingModule = class ClassListPageRoutingModule {
};
ClassListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClassListPageRoutingModule);



/***/ }),

/***/ 2661:
/*!*********************************************************!*\
  !*** ./src/app/faculty/class-list/class-list.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPageModule": function() { return /* binding */ ClassListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list-routing.module */ 96002);
/* harmony import */ var _class_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list.page */ 7675);







let ClassListPageModule = class ClassListPageModule {
};
ClassListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassListPageRoutingModule
        ],
        declarations: [_class_list_page__WEBPACK_IMPORTED_MODULE_1__.ClassListPage]
    })
], ClassListPageModule);



/***/ }),

/***/ 7675:
/*!*******************************************************!*\
  !*** ./src/app/faculty/class-list/class-list.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPage": function() { return /* binding */ ClassListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-list.page.html */ 24357);
/* harmony import */ var _class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list.page.scss */ 21114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);








let ClassListPage = class ClassListPage {
    constructor(menu, authService, general, router, alert, alertController, popoverController) {
        this.menu = menu;
        this.authService = authService;
        this.general = general;
        this.router = router;
        this.alert = alert;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.Institution = [];
        this.bulk_class_guide_attendanc = 0;
        this.sub = true;
        this.submenu = false;
    }
    getInstitute() {
        this.authService.get_fac_Institute('teaching-staff/institutions', this.token)
            .subscribe(response => {
            this.Institution = response;
            this.institute(response);
            if (this.Institution['institutions'].length == 0) {
                console.log(response, "asdda", response.token);
                alert("You have no Institute");
                localStorage.clear();
                localStorage.removeItem("token");
                localStorage.setItem('value', JSON.stringify(1));
                this.general.router.navigateByUrl('/login');
            }
            else {
                // localStorage.setItem('institute', JSON.stringify(1));
            }
            console.log(response, "response111", response.token);
        });
    }
    institute(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let inputArray = [];
            if (response.institutions[0]) {
                for (let name of response.institutions) {
                    if (name.id == '1') {
                        console.log(name.id, "name.student_id");
                        inputArray.push({
                            type: "radio",
                            label: name.name,
                            value: name.id,
                            checked: true
                        });
                    }
                    else {
                        inputArray.push({
                            type: "radio",
                            label: name.name,
                            value: name.id,
                            checked: false
                        });
                    }
                }
                console.log(inputArray, "inputArray");
                const alert = yield this.alertController.create({
                    header: "Select Institute",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "OK",
                            handler: data => {
                                console.log("out", data);
                                localStorage.setItem("institute", data);
                                this.GetFacClasses();
                                this.FindUser();
                                console.log('kjh', 'me Data');
                            }
                        }
                    ],
                    inputs: inputArray
                });
                alert.present();
            }
        });
    }
    presentPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.submenu = !this.submenu;
            if (!this.submenu) {
                this.general.popoverController.dismiss();
                return;
            }
            this.general.presentPopover().then((data) => {
                console.log(this.general.instituteHit, "da;");
                if (this.general.instituteHit) {
                    this.getInstitute();
                    this.general.instituteHit = !this.general.instituteHit;
                }
                console.log(this.general.instituteHit, "da 123");
            });
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_faculty");
        let institute = localStorage.getItem("institute");
        if (!institute) {
            this.getInstitute();
        }
        else {
            this.GetFacClasses();
            this.FindUser();
        }
        this.menu.enable(true);
    }
    FindUser() {
        this.authService.g_postt_fac('item', 'me', this.token).subscribe(data => {
            console.log(data, "jhfdfhg");
            let response = data;
            this.Name = response.name;
            console.log(response, 'me Data', this.Name);
        });
    }
    GetFacClasses() {
        this.general.loadingPresent();
        this.authService.get_fac_t("teaching-staff/class-guide-attendance/attendance-general-settings", this.token).subscribe(resp => {
            console.log(resp['settings']['bulk_class_guide_attendance'], 'ssss');
            this.bulk_class_guide_attendanc = resp['settings']['bulk_class_guide_attendance'] ? resp['settings']['bulk_class_guide_attendance'] : 0;
        });
        this.authService.get_fac_t("teaching-staff/class-guide-attendance/faculty-allocated-classes", this.token).subscribe(data => {
            this.FacSub_data = true;
            console.log(data, 'dataget_fac_t');
            let response = (data);
            this.FacClasses = (data);
            console.log(this.FacClasses, "FacClass");
            this.general.loadingDismiss();
        }, (err) => {
            if (err.status === 401 || err.status === 422) {
                this.general.loginAgain();
            }
            this.general.loadingDismiss();
        });
    }
    select(s) {
        localStorage.setItem('myParam', JSON.stringify(s));
        this.router.navigate(['/attendance']);
    }
    bluck(val) {
        localStorage.setItem('myParam', JSON.stringify(val));
        this.router.navigate(['/bluck-attendance']);
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Confirm!',
                message: 'Are You Sure!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            console.log('Confirm Ok');
                            this.auth_logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    auth_logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.general.loading("Loading ...");
            load.present();
            this.authService.g_postt_fac('{}', "logout", this.token).subscribe(data => {
                console.log(data);
                load.dismiss();
                localStorage.clear();
                localStorage.removeItem("token");
                localStorage.setItem('value', JSON.stringify(1));
                this.router.navigateByUrl('login');
            }, (err) => {
                this.data = true;
                if (err.status === 401 || err.status === 422) {
                    if (err.statusText == 'Unauthorized') {
                        localStorage.clear();
                        localStorage.removeItem("token");
                        alert("session expired!!");
                        this.router.navigateByUrl("login");
                    }
                }
                if (err.status === 200) {
                    alert("Server Connection Error. Please Login Again.");
                    localStorage.clear();
                }
            });
        });
    }
    logOut() {
        this.presentAlertConfirm();
    }
};
ClassListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController }
];
ClassListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-class-list',
        template: _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassListPage);



/***/ }),

/***/ 21114:
/*!*********************************************************!*\
  !*** ./src/app/faculty/class-list/class-list.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.hdr_card {\n  padding-left: 10px;\n  padding-right: 5px;\n  color: #000;\n}\n\nion-card-content {\n  padding: 0 !important;\n  overflow: scroll;\n}\n\nion-card-content ion-grid {\n  padding: 0 !important;\n}\n\n.expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.not-colapse {\n  height: auto;\n}\n\n.accordion-button {\n  border: none;\n  color: #1e2023;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f1d0cb;\n  margin: 15px 19px;\n  height: 50px !important;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #f1d0cb;\n  height: 48px !important;\n}\n\n.student_name {\n  margin-top: 15px;\n  font-size: 18px;\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDQyxhQUFBO0FBRUQ7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUhJO0VBQ0kscUJBQUE7QUFLUjs7QUFEQTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQUlKOztBQURBO0VBQ0Esb0JBQUE7QUFJQTs7QUFGQTtFQUNDLFlBQUE7QUFLRDs7QUFIQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBTUo7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBTUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUtKIiwiZmlsZSI6ImNsYXNzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkhaW1wb3J0YW50IDtcbiAgICBjb2xvcjpibGFjaztcbn1cbmlvbi1jb250ZW50e1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuLmhkcl9jYXJke1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5pb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbCA7XG4gICAgaW9uLWdyaWR7XG4gICAgICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uZXhwYW5kLXdyYXBwZXIge1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbn0gIFxuICBcbi5jb2xsYXBzZWQge1xuaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4ubm90LWNvbGFwc2V7XG5cdGhlaWdodDogYXV0bztcbn1cbi5hY2NvcmRpb24tYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYigzMCwgMzIsIDM1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjA4LCAyMDMpO1xuICAgIG1hcmdpbjogMTVweCAxOXB4O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNmMWQwY2I7XG4gICAgaGVpZ2h0OiA0OHB4IWltcG9ydGFudDtcbn1cblxuXG4uc3R1ZGVudF9uYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ 24357:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/class-list/class-list.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Attendance</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 class=\"ion-text-center\">Class Attendance</h3>\n    <div class=\"thumnails\" >\n              <div class=\"list-thumbnail\">\n                <div class=\"img-thumb\">\n  <ion-grid>\n    <ion-row>\n      <ion-col [size]=\"bulk_class_guide_attendanc == 1 ? 3 : 4\" class=\"ion-text-center\">\n        Class\n      </ion-col>\n      <ion-col [size]=\"bulk_class_guide_attendanc == 1 ? 3 : 4\" class=\"ion-text-center\">\n        Batch\n      </ion-col>\n      <ion-col [size]=\"bulk_class_guide_attendanc == 1 ? 6 : 4\" class=\"ion-text-center\">\n        Action\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let s of FacClasses\">\n      <ion-col [size]=\"bulk_class_guide_attendanc == 1 ? 3 : 4\" class=\"ion-text-center\">\n        {{s.class}}\n      </ion-col>\n      <ion-col class=\"divsion ion-text-center\" [size]=\"bulk_class_guide_attendanc == 1 ? 3 : 4\">\n        {{s.batch}}\n      </ion-col>\n      <ion-col [size]=\"bulk_class_guide_attendanc == 1 ? 6 : 4\" class=\"ion-text-center\" *ngIf=\"bulk_class_guide_attendanc == 0\">\n        <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\" [disabled]=\"s.enable_attendnace == 'false'\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col [size]=\"bulk_class_guide_attendanc == 1 ? 6 : 4\" class=\"ion-text-center\" *ngIf=\"bulk_class_guide_attendanc == 1\">\n        <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"bluck(s)\" [disabled]=\"s.enable_attendnace == 'false'\">\n          Bulk Attendance\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </div>\n  </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_class-list_class-list_module_ts-es2015.js.map