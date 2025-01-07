(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_home_home_module_ts"],{

/***/ 68364:
/*!*****************************************************!*\
  !*** ./src/app/faculty/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 54465);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 69056:
/*!*********************************************!*\
  !*** ./src/app/faculty/home/home.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 68364);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 54465);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 54465:
/*!*******************************************!*\
  !*** ./src/app/faculty/home/home.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 32172);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 10488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);








//import { Storage } from '@ionic/storage';
let HomePage = class HomePage {
    constructor(menu, authService, general, router, alert, alertController, popoverController) {
        this.menu = menu;
        this.authService = authService;
        this.general = general;
        this.router = router;
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
                this.general.router.navigateByUrl('login');
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
        this.menu.enable(false);
        this.menu.close();
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
        this.router.navigate(['/attendance', { value: JSON.stringify(s) }]);
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
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 10488:
/*!*********************************************!*\
  !*** ./src/app/faculty/home/home.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\nion-content {\n  padding: 10px;\n}\n\n.hdr_card {\n  padding-left: 10px;\n  padding-right: 5px;\n  color: #000;\n}\n\nion-card-content {\n  padding: 0 !important;\n  overflow: scroll;\n}\n\nion-card-content ion-grid {\n  padding: 0 !important;\n}\n\n.expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.not-colapse {\n  height: auto;\n}\n\n.accordion-button {\n  border: none;\n  color: #1e2023;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #f1d0cb;\n  margin: 15px 19px;\n  height: 50px !important;\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #f1d0cb;\n  height: 48px !important;\n}\n\n.student_name {\n  margin-top: 15px;\n  font-size: 18px;\n  margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFBWSxhQUFBO0FBR1o7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUxJO0VBQ0kscUJBQUE7QUFPUjs7QUFGQTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUZFO0VBQ0Usb0JBQUE7QUFLSjs7QUFIRTtFQUNJLFlBQUE7QUFNTjs7QUFKRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBT0o7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBT0o7O0FBSEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU1KIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkhaW1wb3J0YW50IDtcbiAgICBjb2xvcjpibGFjaztcbn1cbmlvbi1jb250ZW50e3BhZGRpbmc6IDEwcHg7fVxuLmhkcl9jYXJke1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5pb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbCA7XG4gICAgaW9uLWdyaWR7XG4gICAgICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgIH1cbn1cblxuLmV4cGFuZC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gIH0gIFxuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5vdC1jb2xhcHNle1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5hY2NvcmRpb24tYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYigzMCwgMzIsIDM1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjA4LCAyMDMpO1xuICAgIG1hcmdpbjogMTVweCAxOXB4O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNmMWQwY2I7XG4gICAgaGVpZ2h0OiA0OHB4IWltcG9ydGFudDtcbn1cblxuXG4uc3R1ZGVudF9uYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ 32172:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/home/home.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Home </ion-title>\n    <ion-buttons slot=\"end\">\n\n      <!-- //(click)=\"presentPopover()\" logOut() routerLink=\"/login\" -->\n      <ion-button (click)=\"presentPopover()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar>\n    <ion-title> Hello {{Name}}</ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n  <p class=\"student_name\"> Hello {{Name}}</p>\n  <div *ngIf=\"!FacSub_data\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"FacSub_data\">\n    <mat-accordion style=\"padding:0px !important\">\n      <mat-expansion-panel [expanded]=\"true\" class=\"animated slideInLeft delay-0s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            Subjects\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\">\n              Class\n            </ion-col>\n            <ion-col size=\"3\">\n              Division\n            </ion-col>\n            <ion-col size=\"3\">\n              Subjects\n            </ion-col>\n            <ion-col size=\"3\">\n              Action\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of FacSubjects\">\n            <ion-col size=\"3\">\n              {{s.class}}\n            </ion-col>\n            <ion-col class=\"divsion\" text-center size=\"3\">\n              {{s.division}}\n            </ion-col>\n            <ion-col size=\"3\">\n              {{s.subject_code}}-{{s.subject_name}}\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n      <mat-expansion-panel class=\"animated slideInRight delay-1s\">\n        <mat-expansion-panel-header class=\"accordion-button\">\n          <mat-panel-title>\n            Mandatory Subjects\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\">\n              Class\n            </ion-col>\n            <ion-col size=\"3\" text-center>\n              Division\n            </ion-col>\n            <ion-col size=\"3\">\n              Subjects\n            </ion-col>\n            <ion-col size=\"3\">\n              Action\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let s of MandtorySub\">\n            <ion-col size=\"3\">\n              {{s.class}}\n            </ion-col>\n            <ion-col size=\"3\">\n              {{s.division}}\n            </ion-col>\n            <ion-col size=\"3\">\n              <!-- {{s.subject_code}} -->\n              {{s.subject_name}}\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-button color=\"tertiary\" size=\"small\" shape=\"round\" (click)=\"select(s)\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n              <!-- Attend -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_home_home_module_ts-es2015.js.map