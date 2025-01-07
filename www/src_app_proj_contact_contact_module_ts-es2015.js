(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_contact_contact_module_ts"],{

/***/ 24165:
/*!********************************************************!*\
  !*** ./src/app/proj/contact/contact-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": function() { return /* binding */ ContactPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 16316);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 92654:
/*!************************************************!*\
  !*** ./src/app/proj/contact/contact.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": function() { return /* binding */ ContactPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 24165);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 16316);







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 16316:
/*!**********************************************!*\
  !*** ./src/app/proj/contact/contact.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": function() { return /* binding */ ContactPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 35522);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 54458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ContactPage = class ContactPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactPage.ctorParameters = () => [];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



/***/ }),

/***/ 54458:
/*!************************************************!*\
  !*** ./src/app/proj/contact/contact.page.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont {\n  text-align: center;\n}\n.cont .ls {\n  color: #922616;\n  text-align: center;\n}\n.cont p {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7QUFFSiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAubHMge1xuICAgIGNvbG9yOiAjOTIyNjE2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 35522:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/contact/contact.page.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"cont\">\n    <p class=\"ls\">Infant Jesus School</p>\n    <p class=\"ls\">8th Mile, Amravati Road, Near Main Defence Gate, Wadi, Nagpur - 440023</p>\n    <p href=\"tel:7768836456\">\n      <ion-icon name=\"call\" outline></ion-icon>\n      7768836456 / 9370670250\n    </p>\n    <p href=\"infantjesuswadi123@gmail.com\">\n      <ion-icon name=\"mail-open\" outline></ion-icon>\n      infantjesuswadi123@gmail.com\n    </p>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_contact_contact_module_ts-es2015.js.map