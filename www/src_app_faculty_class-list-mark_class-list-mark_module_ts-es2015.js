(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_class-list-mark_class-list-mark_module_ts"],{

/***/ 58602:
/*!***************************************************************************!*\
  !*** ./src/app/faculty/class-list-mark/class-list-mark-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListMarkPageRoutingModule": function() { return /* binding */ ClassListMarkPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _class_list_mark_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list-mark.page */ 61891);




const routes = [
    {
        path: '',
        component: _class_list_mark_page__WEBPACK_IMPORTED_MODULE_0__.ClassListMarkPage
    }
];
let ClassListMarkPageRoutingModule = class ClassListMarkPageRoutingModule {
};
ClassListMarkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClassListMarkPageRoutingModule);



/***/ }),

/***/ 69828:
/*!*******************************************************************!*\
  !*** ./src/app/faculty/class-list-mark/class-list-mark.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListMarkPageModule": function() { return /* binding */ ClassListMarkPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_list_mark_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list-mark-routing.module */ 58602);
/* harmony import */ var _class_list_mark_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list-mark.page */ 61891);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);











let ClassListMarkPageModule = class ClassListMarkPageModule {
};
ClassListMarkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _class_list_mark_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassListMarkPageRoutingModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        ],
        declarations: [_class_list_mark_page__WEBPACK_IMPORTED_MODULE_1__.ClassListMarkPage]
    })
], ClassListMarkPageModule);



/***/ }),

/***/ 61891:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/class-list-mark/class-list-mark.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListMarkPage": function() { return /* binding */ ClassListMarkPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_class_list_mark_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-list-mark.page.html */ 86742);
/* harmony import */ var _class_list_mark_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list-mark.page.scss */ 8340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









let ClassListMarkPage = class ClassListMarkPage {
    constructor(menu, authService, general, router, location, alert, alertController, popoverController) {
        this.menu = menu;
        this.authService = authService;
        this.general = general;
        this.router = router;
        this.location = location;
        this.alert = alert;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.Institution = [];
        this.sub = true;
        this.submenu = false;
    }
    // private storage: Storage) { }
    getInstitute() {
        this.authService.get_fac_Institute('teaching-staff/institutions', this.token).subscribe(response => {
            this.Institution = response;
            this.institute(response);
            if (this.Institution['institutions'].length == 0) {
                console.log(response, "asdda", response.token);
                alert("You have no Institute");
                localStorage.clear();
                localStorage.removeItem("token");
                localStorage.setItem('value', JSON.stringify(1));
                this.general.router.navigateByUrl('opem');
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
                                this.GetFacSubjects();
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
            // const popover = await this.popoverController.create({
            //   component: PopComponent,
            //   cssClass: 'my-custom-class',
            //   event: ev,
            //   translucent: true
            // });
            // await popover.present();
            // const { role } = await popover.onDidDismiss();
            // console.log('onDidDismiss resolved with role', role);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_faculty");
        // return
        let institute = localStorage.getItem("institute");
        if (!institute) {
            this.getInstitute();
        }
        else {
            this.GetFacSubjects();
            this.FindUser();
        }
        // this.menu.enable(false);
        // this.menu.close();
        // this.GetFacSubjects();
        // console.log('kjh', 'me Data');
        // this.FindUser();
    }
    FindUser() {
        // return
        this.authService.g_postt_fac('item', 'me', this.token).subscribe(data => {
            console.log(data, "jhfdfhg");
            let response = data;
            this.Name = response.name;
            console.log(response, 'me Data', this.Name);
        });
    }
    GetFacSubjects() {
        this.authService.get_fac_t("teaching-staff/faculty-subjects", this.token).subscribe(data => {
            this.FacSub_data = true;
            console.log(data, 'dataget_fac_t');
            let response = (data);
            this.reponseData = (data);
            this.FacSubjects = response.facultyElectiveSubjects;
            this.MandtorySub = response.facultyMandatorySubjects;
            console.log(this.FacSubjects, "FacSubjects");
        }, (err) => {
            if (err.status === 401 || err.status === 422) {
                this.general.loginAgain();
            }
        });
    }
    select(s) {
        localStorage.setItem('myParam', JSON.stringify(s));
        this.router.navigate(['/fac-markentry', { value: JSON.stringify(s) }]);
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
                this.router.navigateByUrl('opem');
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
    back() {
        this.router.navigateByUrl('dashboard');
    }
};
ClassListMarkPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController }
];
ClassListMarkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-class-list-mark',
        template: _raw_loader_class_list_mark_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_list_mark_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassListMarkPage);



/***/ }),

/***/ 8340:
/*!*******************************************************************!*\
  !*** ./src/app/faculty/class-list-mark/class-list-mark.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.hdr_card {\n  padding-left: 10px;\n  padding-right: 5px;\n  color: #000;\n}\n\nion-card-content {\n  padding: 0 !important;\n  overflow: scroll;\n}\n\nion-card-content ion-grid {\n  padding: 0 !important;\n}\n\n.expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.not-colapse {\n  height: auto;\n}\n\n.accordion-button {\n  border: none;\n  color: #1e2023;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f1d0cb;\n  margin: 15px 19px;\n  height: 50px !important;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #f1d0cb;\n  height: 48px !important;\n}\n\n.student_name {\n  margin-top: 15px;\n  font-size: 18px;\n  margin-left: 25px;\n}\n\n.HeadData ion-col {\n  color: #ae5c50;\n  font-weight: bold;\n}\n\n.font {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWxpc3QtbWFyay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDVSxpQ0FBQTtFQUNBLFlBQUE7QUFDVjs7QUFDTTtFQUFZLGFBQUE7QUFHbEI7O0FBRk07RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtWOztBQUhNO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQU1WOztBQUxVO0VBQ0kscUJBQUE7QUFPZDs7QUFGTTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQUtWOztBQUZRO0VBQ0Usb0JBQUE7QUFLVjs7QUFIUTtFQUNJLFlBQUE7QUFNWjs7QUFKUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBT1Y7O0FBSk07RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBT1Y7O0FBSE07RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1WOztBQUZJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBS1I7O0FBREE7RUFDSSxlQUFBO0FBSUoiLCJmaWxlIjoiY2xhc3MtbGlzdC1tYXJrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgICAgICAgIGJvcmRlcjogMXB4ICBzb2xpZCBncmF5IWltcG9ydGFudCA7XG4gICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICB9XG4gICAgICBpb24tY29udGVudHtwYWRkaW5nOiAxMHB4O31cbiAgICAgIC5oZHJfY2FyZHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGwgO1xuICAgICAgICAgIGlvbi1ncmlke1xuICAgICAgICAgICAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5leHBhbmQtd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xuICAgICAgICB9ICBcbiAgICAgICAgXG4gICAgICAgIC5jb2xsYXBzZWQge1xuICAgICAgICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5ub3QtY29sYXBzZXtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiByZ2IoMzAsIDMyLCAzNSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIwOCwgMjAzKTtcbiAgICAgICAgICBtYXJnaW46IDE1cHggMTlweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFkMGNiO1xuICAgICAgICAgIGhlaWdodDogNDhweCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgLnN0dWRlbnRfbmFtZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICB9XG4gICAgICBcbi5IZWFkRGF0YSB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGNvbG9yOiAjYWU1YzUwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5mb250IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ 86742:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/class-list-mark/class-list-mark.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n     \n      <ion-title >Marks Entry </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!FacSub_data\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"FacSub_data\">\n    <mat-accordion style=\"padding:0px !important\">\n      <mat-expansion-panel [expanded]=\"true\" class=\"animated slideInLeft delay-0s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            Subjects\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row class=\"HeadData\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Class\n            </ion-col>\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Division\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              Subjects\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              Action\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of FacSubjects\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              {{s.class}}\n            </ion-col>\n            <ion-col class=\"font divsion ion-text-center\" text-center size=\"3\" >\n              {{s.division}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              {{s.subject_code}}-{{s.subject_name}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n      <mat-expansion-panel class=\"animated slideInRight delay-1s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            Mandatory Subjects\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row class=\"HeadData\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Class\n            </ion-col>\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              Division\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              Subjects\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              Action\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of MandtorySub\">\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              {{s.class}}\n            </ion-col>\n            <ion-col size=\"3\" class=\"font ion-text-center\">\n              {{s.division}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"font ion-text-center\">\n              <!-- {{s.subject_code}} -->\n              {{s.subject_name}}\n            </ion-col>\n            <ion-col size=\"2\" class=\"font ion-text-center\">\n              <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n              <!-- Attend -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_class-list-mark_class-list-mark_module_ts-es2015.js.map