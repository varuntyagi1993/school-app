(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_noti-view_noti-view_module_ts"],{

/***/ 78873:
/*!************************************************************!*\
  !*** ./src/app/proj/noti-view/noti-view-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotiViewPageRoutingModule": function() { return /* binding */ NotiViewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _noti_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noti-view.page */ 37996);




const routes = [
    {
        path: '',
        component: _noti_view_page__WEBPACK_IMPORTED_MODULE_0__.NotiViewPage
    }
];
let NotiViewPageRoutingModule = class NotiViewPageRoutingModule {
};
NotiViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotiViewPageRoutingModule);



/***/ }),

/***/ 61685:
/*!****************************************************!*\
  !*** ./src/app/proj/noti-view/noti-view.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotiViewPageModule": function() { return /* binding */ NotiViewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _noti_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noti-view-routing.module */ 78873);
/* harmony import */ var _noti_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noti-view.page */ 37996);







let NotiViewPageModule = class NotiViewPageModule {
};
NotiViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _noti_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotiViewPageRoutingModule
        ],
        declarations: [_noti_view_page__WEBPACK_IMPORTED_MODULE_1__.NotiViewPage]
    })
], NotiViewPageModule);



/***/ }),

/***/ 37996:
/*!**************************************************!*\
  !*** ./src/app/proj/noti-view/noti-view.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotiViewPage": function() { return /* binding */ NotiViewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_noti_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./noti-view.page.html */ 12159);
/* harmony import */ var _noti_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noti-view.page.scss */ 21360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let NotiViewPage = class NotiViewPage {
    constructor(activatedroute) {
        this.activatedroute = activatedroute;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.type = this.activatedroute.snapshot.paramMap.get("type");
        this.message = this.activatedroute.snapshot.paramMap.get("message");
        console.log("ionvierw", this.type, this.message);
    }
};
NotiViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
NotiViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-noti-view",
        template: _raw_loader_noti_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_noti_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotiViewPage);



/***/ }),

/***/ 21360:
/*!****************************************************!*\
  !*** ./src/app/proj/noti-view/noti-view.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mes_d {\n  margin: 0;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGktdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6Im5vdGktdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzX2Qge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 12159:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/noti-view/noti-view.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"noti\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Notifications</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding style=\"background: #dcdcdc;color: #020202;\" >\n    <ion-card-header>\n      <h4 no-margin *ngIf=\"type=='ATTENDANCE'\" style=\"color: #ae5c50;\" >Attendance</h4>\n      <h4 no-margin *ngIf=\"type!='ATTENDANCE'\" style=\"color: #ae5c50;\">Notice</h4>\n    </ion-card-header>\n    <ion-card-content style=\"bottom: 15px;\">\n      <p class=\"mes_d\">{{message}}</p>\n    </ion-card-content>\n   \n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_noti-view_noti-view_module_ts-es2015.js.map