(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_circular_circularsingle_circularsingle_module_ts"],{

/***/ 53064:
/*!*******************************************************************************!*\
  !*** ./src/app/proj/circular/circularsingle/circularsingle-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularsinglePageRoutingModule": function() { return /* binding */ CircularsinglePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _circularsingle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circularsingle.page */ 66596);




const routes = [
    {
        path: '',
        component: _circularsingle_page__WEBPACK_IMPORTED_MODULE_0__.CircularsinglePage
    }
];
let CircularsinglePageRoutingModule = class CircularsinglePageRoutingModule {
};
CircularsinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CircularsinglePageRoutingModule);



/***/ }),

/***/ 52920:
/*!***********************************************************************!*\
  !*** ./src/app/proj/circular/circularsingle/circularsingle.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularsinglePageModule": function() { return /* binding */ CircularsinglePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _circularsingle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circularsingle-routing.module */ 53064);
/* harmony import */ var _circularsingle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circularsingle.page */ 66596);







let CircularsinglePageModule = class CircularsinglePageModule {
};
CircularsinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _circularsingle_routing_module__WEBPACK_IMPORTED_MODULE_0__.CircularsinglePageRoutingModule
        ],
        declarations: [_circularsingle_page__WEBPACK_IMPORTED_MODULE_1__.CircularsinglePage]
    })
], CircularsinglePageModule);



/***/ }),

/***/ 66596:
/*!*********************************************************************!*\
  !*** ./src/app/proj/circular/circularsingle/circularsingle.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularsinglePage": function() { return /* binding */ CircularsinglePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_circularsingle_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./circularsingle.page.html */ 26597);
/* harmony import */ var _circularsingle_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circularsingle.page.scss */ 30531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);









let CircularsinglePage = class CircularsinglePage {
    constructor(activatedroute, router, authService, previewAnyFile, generalts, domSanitizer) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.authService = authService;
        this.previewAnyFile = previewAnyFile;
        this.generalts = generalts;
        this.domSanitizer = domSanitizer;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_tok");
        this.notice_id = this.activatedroute.snapshot.paramMap.get("notice_id");
        console.log("notice_id", this.notice_id);
        this.getNoticeValue();
    }
    fileopen(file) {
        console.log(file, "file");
        this.previewAnyFile.preview(file)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
        // const options: DocumentViewerOptions = {
        //   title: 'My PDF'
        // }
        // this.document.viewDocument(file, 'application/pdf', options)
    }
    html(d) {
        return this.domSanitizer.bypassSecurityTrustHtml(d);
    }
    getNoticeValue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var data = "";
            var c_stu = localStorage.getItem("c_stud");
            var link = "student/" + c_stu + "/notice/" + this.notice_id;
            // "student/" + c_stu + "/notices?type=Notices&paginate=0";
            console.log(link, "link", "this.c_stud ", c_stu);
            this.authService.g_get(data, link, this.token).subscribe(data => {
                load.dismiss();
                this.noticeData = data;
                console.log(data, "prof123");
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
};
CircularsinglePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__.PreviewAnyFile },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer }
];
CircularsinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-circularsingle',
        template: _raw_loader_circularsingle_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_circularsingle_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CircularsinglePage);



/***/ }),

/***/ 30531:
/*!***********************************************************************!*\
  !*** ./src/app/proj/circular/circularsingle/circularsingle.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  padding: 10px;\n}\n\nh4 {\n  color: #ae5c50;\n}\n\n.label {\n  color: white;\n  padding: 7px;\n  font-family: Arial;\n  background-color: #620b23;\n  float: right;\n  text-align: center;\n  font-size: 14px;\n}\n\n.img1 {\n  width: 15px;\n  top: 3px;\n  position: relative;\n}\n\n.row {\n  position: relative;\n  right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmN1bGFyc2luZ2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUdJLGNBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6ImNpcmN1bGFyc2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuaDQge1xuIFxuICAgIFxuICAgIGNvbG9yOiAjYWU1YzUwO1xufVxuLmxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwYjIzO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmltZzEge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHRvcDogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ 26597:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/circular/circularsingle/circularsingle.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"circular\"></ion-back-button>\n        </ion-buttons>\n        <!-- <span style=\"font-size: 18px;\">\n      \n    </span> -->\n        <ion-title>Assignment / Notice</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- <ion-grid>\n      <ion-row>\n        <ion-col><h6 class=\"desc-title\">Title</h6>\n          {{ this.noticeBoardInfo.title }}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h6 class=\"desc-title\">Description</h6>\n          <zoom-area\n            [(scale)]=\"scale\"\n            (afterZoomIn)=\"afterZoomIn($event)\"\n            (afterZoomOut)=\"afterZoomOut($event)\"\n            [(controls)]=\"showControls\"\n          >\n            <span [innerHTML]=\"description\" imageViewer></span>\n          </zoom-area>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   -->\n\n<ion-content>\n\n    <div *ngIf=\"noticeData\" style=\"padding: 35px 0 1px 0;\n    border-bottom: 2px solid #620b23;\n    \">\n        <span class=\"label\"><img class=\"img1\" src=\"assets/images/calendar.png\" /><span style=\"padding: 10px;\">{{ noticeData.notice_date }}</span></span><br/>\n        <br/>\n\n        <ion-item class=\"row\">\n            <ion-grid style=\"margin: -10px 0 -10px 0;\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h4 style=\"font-size: 15px; font-weight: 700;\">\n                            Title\n                        </h4>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <h6  style=\"font-size: 15px;\">\n                            {{noticeData.title}}\n                        </h6>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n           \n            \n        </ion-item>\n        <ion-item class=\"row\">\n            <ion-grid style=\"margin: -10px 0 -10px 0;\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h4 style=\"font-size: 15px; font-weight: 700;\">\n                            Subject\n                        </h4>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <h6  style=\"font-size: 15px;\">\n                            {{noticeData.subject_name}}\n                        </h6>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-item class=\"row\">\n            <ion-grid style=\"margin: -10px 0 -10px 0;\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h4 style=\"font-size: 15px; font-weight: 700;\">\n                            Faculty\n                        </h4>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <h6 style=\"font-size: 15px;\">\n                            {{noticeData.faculty_name}}\n                        </h6>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n       <div style=\"position: relative;\n       left: 4px;\">\n        <h4 style=\"font-size: 15px; font-weight: 700;\">\n            Description\n         </h4>\n         <div [innerHTML]=\"html(noticeData.content)\" \n             style=\"font-size: 15px;\n                  position: relative;\n                 right: 10px;\n                 bottom: 10px;\n                 \">\n         </div>\n         <ul *ngIf=\"noticeData.files\" style=\"position: relative;\n         right: 18px;\n         bottom: 30px;\n         font-size: 18px;\">\n             <li *ngFor=\"let file of noticeData.files;let i=index\" style=\"padding: 10px;text-decoration: underline;\" (click)=\"fileopen(file)\">\n                 Download File - {{i+1}}</li>\n         </ul>\n       </div>\n        \n\n    </div>\n    <div *ngIf=\"noticeData\">\n        <!-- {{noticeData|json}} -->\n        <ion-card *ngIf=\"noticeData.length==0\" style=\"text-align: center;color: #000;margin: 15px;\">\n            <h3>No Assignment / Notice</h3>\n\n            <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_circular_circularsingle_circularsingle_module_ts-es2015.js.map