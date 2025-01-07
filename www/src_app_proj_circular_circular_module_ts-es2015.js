(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_circular_circular_module_ts"],{

/***/ 61473:
/*!**********************************************************!*\
  !*** ./src/app/proj/circular/circular-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularPageRoutingModule": function() { return /* binding */ CircularPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _circular_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circular.page */ 43110);




const routes = [
    {
        path: '',
        component: _circular_page__WEBPACK_IMPORTED_MODULE_0__.CircularPage
    }
];
let CircularPageRoutingModule = class CircularPageRoutingModule {
};
CircularPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CircularPageRoutingModule);



/***/ }),

/***/ 96189:
/*!**************************************************!*\
  !*** ./src/app/proj/circular/circular.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularPageModule": function() { return /* binding */ CircularPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _circular_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circular-routing.module */ 61473);
/* harmony import */ var _circular_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circular.page */ 43110);







let CircularPageModule = class CircularPageModule {
};
CircularPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _circular_routing_module__WEBPACK_IMPORTED_MODULE_0__.CircularPageRoutingModule
        ],
        declarations: [_circular_page__WEBPACK_IMPORTED_MODULE_1__.CircularPage]
    })
], CircularPageModule);



/***/ }),

/***/ 43110:
/*!************************************************!*\
  !*** ./src/app/proj/circular/circular.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularPage": function() { return /* binding */ CircularPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_circular_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./circular.page.html */ 79074);
/* harmony import */ var _circular_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circular.page.scss */ 12176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);








let CircularPage = class CircularPage {
    constructor(platform, router, authService, generalts) {
        this.platform = platform;
        this.router = router;
        this.authService = authService;
        this.generalts = generalts;
        this.circularData = [];
        this.none = false;
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
    }
    ngOnInit() {
    }
    openCircular(item) {
        this.router.navigate(["/circularsingle", { notice_id: item.notice_id }]);
    }
    ionViewWillEnter() {
        //{{ API_URL  }}/student/3289/notices?type=Notices > Type 1&paginate=3
        this.token = localStorage.getItem("pas_tok");
        this.circularData = [];
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.getCircular();
    }
    getCircular() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var data = "";
            var c_stu = localStorage.getItem("c_stud");
            var link = "student/" + c_stu + "/notices?type=Notices&paginate=0&page=" + this.page;
            console.log(link, "link", "this.c_stud ", c_stu);
            this.authService.g_get(data, link, this.token).subscribe(data => {
                load.dismiss();
                this.circularData = data.data;
                console.log(data, "prof123");
                if (this.circularData.length == 0) {
                    this.none = true;
                }
                else {
                    this.none = false;
                }
                this.perPage = data.per_page;
                this.totalData = data.to;
                this.totalPage = data.last_page;
            }, error => {
                load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status == 401) {
                    this.authService.loginAgain();
                    //this.router.navigateByUrl('/login');
                }
                else if (error.status_code == 400) {
                    this.err = error.message;
                }
            });
        });
    }
    doInfinite(event) {
        this.page = this.page + 1;
        var data = '';
        var c_stu = localStorage.getItem("c_stud");
        var link = "student/" + c_stu + "/notices?type=Notices&paginate=0&page=" + this.page;
        console.log(this.page);
        setTimeout(() => {
            this.authService.g_get(data, link, this.token)
                .subscribe(res => {
                console.log(res);
                let t = res.data;
                //this.transaction = t.data;
                this.perPage = res.per_page;
                this.totalData = res.to;
                this.totalPage = res.last_page;
                //console.log(this.transaction);
                for (let i = 0; i < t.length; i++) {
                    this.circularData.push(t[i]);
                }
            }, error => {
                this.generalts.loadingDismiss();
                if (error.status == 401) {
                    this.authService.loginAgain();
                    //this.router.navigateByUrl('/login');
                }
                else if (error.status_code == 400) {
                    this.error = error.message;
                    console.error("Error!", error.status_code, error.message);
                    this.generalts.presentAlert_g(this.error);
                }
                else {
                    this.generalts.presentAlert_g("Please check your Internet Connection");
                }
            });
            event.target.complete();
            //infiniteScroll.complete();
        }, 1000);
    }
};
CircularPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService }
];
CircularPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-circular',
        template: _raw_loader_circular_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_circular_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CircularPage);



/***/ }),

/***/ 12176:
/*!**************************************************!*\
  !*** ./src/app/proj/circular/circular.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 0;\n  padding: 10px;\n}\n\nion-row {\n  background: #620b23;\n  text-align: left;\n  padding-left: 5px !important;\n}\n\n.icon-info-col {\n  padding: 0px 10px 0px 0px !important;\n  background: #e4e2e2;\n  border-bottom: 2px solid #620b23;\n}\n\n.icon-col {\n  background: #620b23;\n  padding: 0px 10px 0px 0px !important;\n}\n\n.divider {\n  border-bottom: 1px solid #e4e2e2;\n  padding: 5px 0;\n}\n\n.img1 {\n  width: 20px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFFQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBRUEsbUJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdFO0VBQ0ksbUJBQUE7RUFDRixvQ0FBQTtBQUFKOztBQUlFO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0U7RUFDRSxXQUFBO0VBQ0UsZ0JBQUE7QUFBTiIsImZpbGUiOiJjaXJjdWxhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1yb3d7XG4gICAgYmFja2dyb3VuZDogIzYyMGIyMztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4IWltcG9ydGFudDtcbn1cblxuLmljb24taW5mby1jb2wge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAvL2Rpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlMmUyO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjIwYjIzO1xuICB9XG5cbiAgLmljb24tY29sIHtcbiAgICAgIGJhY2tncm91bmQ6ICM2MjBiMjM7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuIC8vICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICB9XG5cbiAgLmRpdmlkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlMmUyO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG4gIC5pbWcxIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH0iXX0= */");

/***/ }),

/***/ 79074:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/circular/circular.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Assignment / Notice</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div *ngIf=\"!none\" style=\"margin-top: 20px;\">\n        <ion-grid *ngFor=\"let item of circularData; let i = index\" style=\"padding: 8px 10px;\" >\n            <ion-row class=\"card-row \" (click)=\"openCircular(item)\">\n                <!-- [ngClass]=\"(item.noticeList[0].readable_status=== 0 ? 'unread_data ' : 'read_data')\" -->\n                <ion-col class=\"icon-col\" size=\"4\">\n                    \n                   <div style=\"display: flex;margin-left: 6px;\">\n                    <div style=\"width: 40%;\">\n                        <img class=\"img1\" src=\"assets/images/calendar.png\" />\n                    </div>\n                    <div style=\"margin-left: 6px;\">\n                        <p style=\"font-size: 12px; color: #ffff;\">{{ item.notice_date_time }}</p></div>\n                    </div>\n                     \n\n                </ion-col>\n                <ion-col class=\"icon-info-col\" size=\"8\">\n                    <h4 style=\"padding-left: 15px; font-size: 14px;\">{{ item.title }}</h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n        <!-- ////empty -->\n       \n    </div>\n    <ion-card *ngIf=\"none\" style=\"text-align: center;color: #000;margin: 15px;\">\n\n        <!-- {{ circularData.data.length|json}} -->\n\n        <h3>No Assignment / Notice</h3>\n\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n    </ion-card>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"page < totalPage\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_circular_circular_module_ts-es2015.js.map