(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_logger_opem_opem_module_ts"],{

/***/ 18925:
/*!****************************************************!*\
  !*** ./src/app/logger/opem/opem-routing.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpemPageRoutingModule": function() { return /* binding */ OpemPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _opem_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opem.page */ 48182);




const routes = [
    {
        path: '',
        component: _opem_page__WEBPACK_IMPORTED_MODULE_0__.OpemPage
    }
];
let OpemPageRoutingModule = class OpemPageRoutingModule {
};
OpemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OpemPageRoutingModule);



/***/ }),

/***/ 68641:
/*!********************************************!*\
  !*** ./src/app/logger/opem/opem.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpemPageModule": function() { return /* binding */ OpemPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _opem_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opem-routing.module */ 18925);
/* harmony import */ var _opem_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opem.page */ 48182);







let OpemPageModule = class OpemPageModule {
};
OpemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _opem_routing_module__WEBPACK_IMPORTED_MODULE_0__.OpemPageRoutingModule
        ],
        declarations: [_opem_page__WEBPACK_IMPORTED_MODULE_1__.OpemPage]
    })
], OpemPageModule);



/***/ }),

/***/ 48182:
/*!******************************************!*\
  !*** ./src/app/logger/opem/opem.page.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpemPage": function() { return /* binding */ OpemPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_opem_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./opem.page.html */ 65985);
/* harmony import */ var _opem_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opem.page.scss */ 9005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ 21864);







let OpemPage = class OpemPage {
    constructor(menu, router, navCtrl, generalts) {
        this.menu = menu;
        this.router = router;
        this.navCtrl = navCtrl;
        this.generalts = generalts;
    }
    ngOnInit() {
        //localStorage.clear();
        this.login_check();
    }
    ionViewWillEnter() {
        this.menu.enable(false);
        this.menu.swipeGesture(false);
    }
    push(data) {
        console.log(data);
        this.router.navigate(["/login", { page: data }]);
    }
    login_check() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let pass_faculty = localStorage.getItem('pas_faculty');
            let pass_parent = localStorage.getItem('pas_tok');
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            if (pass_faculty) {
                this.menu.enable(false);
                this.menu.swipeGesture(false);
                localStorage.setItem("pas_faculty", pass_faculty);
                load.dismiss();
                this.navCtrl.navigateRoot("/dashboard");
            }
            if (pass_parent) {
                localStorage.setItem("pas_tok", pass_parent);
                this.menu.enable(true);
                this.menu.swipeGesture(true);
                load.dismiss();
                this.navCtrl.navigateRoot("/home");
            }
            load.dismiss();
        });
    }
};
OpemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
OpemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-opem",
        template: _raw_loader_opem_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_opem_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OpemPage);



/***/ }),

/***/ 9005:
/*!********************************************!*\
  !*** ./src/app/logger/opem/opem.page.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".opem {\n  text-align: center;\n}\n.opem h2 {\n  font-size: 20px;\n}\n.opem p {\n  font-size: 14px;\n}\nion-grid {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0M7RUFDRSxlQUFBO0FBQ0g7QUFFRTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoib3BlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiBcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuIHB7XG4gICBmb250LXNpemU6IDE0cHg7XG4gfVxuXG59IGlvbi1ncmlke1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gXG4gfVxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbi8vIH0iXX0= */");

/***/ }),

/***/ 65985:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logger/opem/opem.page.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  <div class=\"text-center\" style=\"text-align: center;\">\n    <img src=\"assets/images/banner_2.png\" class=\"img-fluid\" alt=\"\" />\n  </div>\n\n  <div class=\"opem\">\n    <h3>I am a </h3>\n    <p>\n      Select your Section you want to sign in\n    </p>\n\n  </div>\n      <!-- <ion-icon src=\"../../assets/images/ironing-board.svg\"> </ion-icon> -->\n\n  <ion-grid >\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=\"6\" class=\"ion-text-center\"\n        ><ion-button color=\"tertiary\" (click)=\"push('login_staff')\">\n        FACULTY\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\"\n        ><ion-button  color=\"tertiary\" (click)=\"push('login_parents')\">\n          PARENT\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_logger_opem_opem_module_ts-es2015.js.map