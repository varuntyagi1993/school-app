(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_dashboard_dashboard_module_ts"],{

/***/ 15075:
/*!***************************************************************!*\
  !*** ./src/app/faculty/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 75599);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 87869:
/*!*******************************************************!*\
  !*** ./src/app/faculty/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 15075);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 75599);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 75599:
/*!*****************************************************!*\
  !*** ./src/app/faculty/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 48289);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 53324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);








let DashboardPage = class DashboardPage {
    constructor(general, router, alertController, popoverController, authService, menu) {
        this.general = general;
        this.router = router;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.authService = authService;
        this.menu = menu;
        this.submenu = false;
        this.Institution = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menu.enable(true);
        this.menu.swipeGesture(true);
        this.token = localStorage.getItem("pas_faculty");
        let institute = localStorage.getItem("institute");
        if (!institute) {
            this.getInstitute();
        }
        else {
            // this.GetFacClasses();
            // this.FindUser();
        }
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
            if (response.institutions.length > 1) {
                console.log(response.institutions[0]);
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
            }
            if (response.institutions.length == 1) {
                // for (let name of response.institutions) {
                // if (name.id == '1') {
                let inst = response.institutions[0];
                localStorage.setItem("institute", inst.id);
                console.log(inst.id, "name.student_id");
                inputArray.push({
                    type: "radio",
                    label: inst.name,
                    value: inst.id,
                    checked: true
                });
                // } else {
                //   inputArray.push({
                //     type: "radio",
                //     label: name.name,
                //     value: name.id,
                //     checked: false
                //   });
                // }
                // }
            }
            const alert = yield this.alertController.create({
                header: "Select Institute",
                backdropDismiss: false,
                buttons: [
                    {
                        text: "OK",
                        handler: data => {
                            console.log("out", data);
                            localStorage.setItem("institute", data);
                            // this.GetFacClasses();
                            // this.FindUser();
                            console.log('kjh', 'me Data');
                        }
                    }
                ],
                inputs: inputArray
            });
            alert.present();
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
    rout(val) {
        console.log(val, "val");
        this.router.navigate([val]);
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 53324:
/*!*******************************************************!*\
  !*** ./src/app/faculty/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #620b23;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.card1 {\n  background: linear-gradient(to bottom, #cc6f61 0%, #54231c 100%);\n}\n\n.img1 {\n  width: 20px;\n  margin: 0px 35%;\n  margin-top: 20px;\n}\n\n.label {\n  margin-top: 5px;\n  color: #ffff;\n}\n\n.text1 {\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 10px;\n  color: white;\n}\n\n.sms_c {\n  position: absolute;\n  top: 2px;\n  right: 45px;\n  color: #ae5c50;\n  background: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 2;\n  font-size: 10px;\n}\n\nion-segment {\n  color: #fff;\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked {\n  background: #bd5757;\n  color: #fff;\n  text-transform: unset;\n}\n\nion-segment .segment-button-checked:nth-child(1) {\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked:nth-child(2) {\n  border-radius: 0;\n}\n\n.picker_input {\n  border: 1px solid #252525 !important;\n  border-radius: 40px;\n  margin-top: 20px;\n}\n\n.picker_input ion-input {\n  border: 1px solid transparent;\n  padding: 0;\n}\n\n.picker_input ion-icon {\n  margin: 5px !important;\n}\n\n.topicons_design {\n  margin-top: 20px;\n  color: #bdbdbd;\n}\n\n.topicons_design ion-icon {\n  font-size: 35px;\n  border: 1px solid #252525;\n  border-radius: 50%;\n  padding: 10px;\n}\n\n.topicons_design ion-label {\n  color: #252525;\n}\n\n.icons_design .active {\n  color: var(--ion-color-primary);\n  border: none !important;\n}\n\n.icons_design ion-col {\n  margin-top: 20px;\n  color: #bdbdbd;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.icons_design ion-col ion-icon {\n  font-size: 35px;\n}\n\n.prof {\n  font-size: 22px;\n  margin-top: 4px;\n}\n\n.seg {\n  background: #a93d3d;\n  margin-top: -4px;\n  height: 69px;\n  border-radius: 0;\n}\n\n.seg-btn {\n  width: 50%;\n}\n\n.line {\n  border-right: 1px solid #8b7777;\n}\n\n.line1 {\n  border-top: 1px solid #8b7777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxxQkFBQTtBQUFEOztBQUVBO0VBQ0MsdUJBQUE7RUFDQSxzQkFBQTtBQUNEOztBQUNBO0VBRUMsZ0VBQUE7QUFDRDs7QUFDQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRDs7QUFBQTtFQUNDLGVBQUE7RUFFQSxZQUFBO0FBRUQ7O0FBQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0Q7O0FBREE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUQ7O0FBRkE7RUFFQyxXQUFBO0VBQ0EsZ0JBQUE7QUFJRDs7QUFIQztFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQU9BLHFCQUFBO0FBREg7O0FBTEc7RUFDQSxnQkFBQTtBQU9IOztBQUxHO0VBQ0EsZ0JBQUE7QUFPSDs7QUFEQTtFQUNDLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlEOztBQUZDO0VBQ0MsNkJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREM7RUFDQyxzQkFBQTtBQUdGOztBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBRUQ7O0FBQUM7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQztFQUNDLGNBQUE7QUFFRjs7QUFFQTtFQUNDLCtCQUFBO0VBQ0EsdUJBQUE7QUFDRDs7QUFHQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDQyxlQUFBO0FBQUg7O0FBSUE7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQUREOztBQUdBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFEOztBQUdBO0VBQ0MsVUFBQTtBQUFEOztBQUdBO0VBQ0MsK0JBQUE7QUFBRDs7QUFFQTtFQUNDLDZCQUFBO0FBQ0QiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6ICM2MjBiMjM7XG59XG5pb24tY2FyZCB7XG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQxIHtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNzg0NzAgMCUsICNhOTJjMTYgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjYzZmNjEgMCUsICM1NDIzMWMgMTAwJSk7XG59XG4uaW1nMSB7XG5cdHdpZHRoOiAyMHB4O1xuXHRtYXJnaW46IDBweCAzNSU7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGFiZWwge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdC8vIGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNmZmZmO1xufVxuLnRleHQxIHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRjb2xvcjogd2hpdGU7XG59XG4uc21zX2Mge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMnB4O1xuXHRyaWdodDogNDVweDtcblx0Y29sb3I6ICNhZTVjNTA7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAyO1xuXHRmb250LXNpemU6IDEwcHg7XG59XG5pb24tc2VnbWVudCB7XG5cdC8vIGJvcmRlcjogMXB4IHNvbGlkICNiZDU3NTc7XG5cdGNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHQuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjYmQ1NzU3O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHQmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdH1cblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1bnNldDtcblx0fVxufVxuXG4ucGlja2VyX2lucHV0IHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzI1MjUyNSAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdGlvbi1pbnB1dCB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdGlvbi1pY29uIHtcblx0XHRtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi50b3BpY29uc19kZXNpZ24ge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRjb2xvcjogI2JkYmRiZDtcblxuXHRpb24taWNvbiB7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdH1cblx0aW9uLWxhYmVsIHtcblx0XHRjb2xvcjogIzI1MjUyNTtcblx0fVxufVxuXG4uaWNvbnNfZGVzaWduIC5hY3RpdmUge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmljb25zX2Rlc2lnbiB7XG5cdGlvbi1jb2wge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0Y29sb3I6ICNiZGJkYmQ7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRtYXJnaW46IDEwcHg7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdH1cblx0fVxufVxuLnByb2Yge1xuXHRmb250LXNpemU6IDIycHg7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbi5zZWcge1xuXHRiYWNrZ3JvdW5kOiAjYTkzZDNkO1xuXHRtYXJnaW4tdG9wOiAtNHB4O1xuXHRoZWlnaHQ6IDY5cHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zZWctYnRuIHtcblx0d2lkdGg6IDUwJTtcblxufVxuLmxpbmUge1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOGI3Nzc3O1xufVxuLmxpbmUxIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM4Yjc3Nzc7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 48289:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/dashboard/dashboard.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Dashboard </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <img src=\"assets/images/clg.png\"  /> -->\n  <img src=\"assets/images/banner_2.png\" style=\"width: 100%;\n  height: 202px;\" alt=\"\" />\n  <!-- <ion-segment class=\"seg\" value=\"profile\">\n    <ion-segment-button value=\"profile\" class=\"seg-btn\" (click)=\"rout('/profile')\" >\n      <img class=\"img1\" src=\"assets/images/profile.png\" />\n      <ion-label class=\"label\">Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"notification\" (click)=\"rout('/noti')\">\n      <img class=\"img1\" src=\"assets/images/notification.png\" />\n      <ion-label class=\"label\">Notifications</ion-label>\n      <span *ngIf=\"sms_count\" class=\"sms_c\">{{sms_count}}</span>\n    </ion-segment-button>\n  </ion-segment> -->\n  <ion-grid style=\"background: #620b23; height: 57%; \">\n    <ion-row>&nbsp;</ion-row>\n    <ion-row>&nbsp;</ion-row>\n    <ion-row>&nbsp;</ion-row>\n    <!-- <ion-row>&nbsp;</ion-row>\n    <ion-row>&nbsp;</ion-row> -->\n    \n    <ion-row style=\"margin-top: 20px;\n    margin-bottom: 20px;\">\n      <ion-col size=\"6\" class=\"line\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/class-list')\">\n          <img class=\"img1\" src=\"assets/images/calendar.png\" />\n          <ion-label class=\"label\">Attendance</ion-label>\n        </div>\n        \n      </ion-col>\n      <ion-col size=\"6\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/assign-faculty')\">\n          <img class=\"img1\" src=\"assets/images/circular.png\" />\n          <ion-label class=\"label\">Assignment / Notice</ion-label>\n          </div>\n      </ion-col>\n     \n     \n      \n    </ion-row>\n    <ion-row style=\"margin-top: 20px;\n    margin-bottom: 20px;\">\n      <ion-col size=\"6\" class=\"line\">\n        \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/exam')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Exam</ion-label>\n        </div>\n      </ion-col>\n      <!-- <ion-col size=\"6\" class=\"line\">\n        \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/mark-remarks')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Remarks For Mark Card</ion-label>\n        </div>\n      </ion-col> -->\n     \n     \n      \n    </ion-row>\n    <!-- <ion-row style=\"margin-top: 30px;\n    margin-bottom: 30px;\">\n      <ion-col size=\"3\" ></ion-col>\n      <ion-col size=\"6\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/class-list-mark')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Mark Entry</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\" ></ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_dashboard_dashboard_module_ts-es2015.js.map