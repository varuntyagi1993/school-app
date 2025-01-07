(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_noti_noti_module_ts"],{

/***/ 52337:
/*!**************************************************!*\
  !*** ./src/app/proj/noti/noti-routing.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotiPageRoutingModule": function() { return /* binding */ NotiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _noti_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noti.page */ 49349);




const routes = [
    {
        path: "",
        component: _noti_page__WEBPACK_IMPORTED_MODULE_0__.NotiPage
    }
];
let NotiPageRoutingModule = class NotiPageRoutingModule {
};
NotiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], NotiPageRoutingModule);



/***/ }),

/***/ 80095:
/*!******************************************!*\
  !*** ./src/app/proj/noti/noti.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotiPageModule": function() { return /* binding */ NotiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _noti_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noti-routing.module */ 52337);
/* harmony import */ var _noti_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noti.page */ 49349);







let NotiPageModule = class NotiPageModule {
};
NotiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _noti_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotiPageRoutingModule],
        declarations: [_noti_page__WEBPACK_IMPORTED_MODULE_1__.NotiPage], providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe]
    })
], NotiPageModule);



/***/ }),

/***/ 49349:
/*!****************************************!*\
  !*** ./src/app/proj/noti/noti.page.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotiPage": function() { return /* binding */ NotiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_noti_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./noti.page.html */ 88169);
/* harmony import */ var _noti_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noti.page.scss */ 98102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);









let NotiPage = class NotiPage {
    constructor(generalts, auth, router) {
        this.generalts = generalts;
        this.auth = auth;
        this.router = router;
        this.none = false;
        this.notifi = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_tok");
        console.log("afs");
        this.getnoti();
    }
    datP(da) {
        // var o=new Date(da).toUTCString();
        // var gmtDateTime = moment.utc(da, "YYYY-MM-DD HH")
        // var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');
        var oi = moment__WEBPACK_IMPORTED_MODULE_4__(da).format('lll');
        return oi;
        //console.log(da,"got date",o,gmtDateTime,"local",local,"oi",oi);
    }
    read_noti(id, full_d) {
        this.router.navigate(["/noti-view", full_d]);
        console.log(id, "id");
        var link = "notifications/" + id + "/read";
        console.log(link, "link");
        var data = "";
        this.auth.g_put(data, link, this.token).subscribe(noti_read => {
            console.log(noti_read, "noti_read");
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log("Done", this.next_page_url);
            // App logic to determine if all data is loaded
            // and disable the infinite scroll last_page_url last_page_url
            var link = this.next_page_url;
            console.log(link, "link0o0");
            this.auth.noti_scrol(link + "&limit=25", this.token).subscribe(absent => {
                console.log(absent.next_page_url, "loabsentadData123");
                event.target.complete();
                this.next_page_url = absent.next_page_url;
                for (let index = 0; index < absent.data.length; index++) {
                    console.log(absent.data, "loabsentadData12399887");
                    const element = absent.data[index];
                    this.notifi.push(element);
                }
                console.log(this.notifi, "loabsentadData", absent.data);
            });
            // console.log(absent, "loadData");
            if (link == undefined || link == null) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        console.log(this.infiniteScroll, "toggleInfiniteScroll");
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    getnoti() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var stud = localStorage.getItem("c_stud");
            var data = "";
            var c_stu = localStorage.getItem("c_stud");
            //this.dateMulti = [];
            // var link = "notifications";
            var link = "student/" + c_stu + "/notifications?limit=25";
            //var link = "notifications?limit=25";
            console.log(link, "link");
            this.auth.g_get(data, link, this.token).subscribe(absent => {
                this.next_page_url = absent.next_page_url;
                this.notifi = absent.data;
                console.log(absent, "absent78", absent.data);
                load.dismiss();
                if (absent.data.length == 0) {
                    this.none = true;
                }
                else {
                    this.none = false;
                }
            }, error => {
                load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status == 401) {
                    this.auth.loginAgain();
                    //this.router.navigateByUrl('/login');
                }
                else if (error.status_code == 400) {
                    //this.err = error.message;
                }
            });
        });
    }
};
NotiPage.ctorParameters = () => [
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
NotiPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll,] }]
};
NotiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-noti",
        template: _raw_loader_noti_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_noti_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotiPage);



/***/ }),

/***/ 98102:
/*!******************************************!*\
  !*** ./src/app/proj/noti/noti.page.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unread {\n  text-align: center;\n  background: #ae5c50;\n  color: #ffffff;\n}\n.unread h4 {\n  color: #ffffff;\n}\n.unread p span {\n  color: #ffffff;\n}\n.read_hdr {\n  float: right;\n  color: #cc897f;\n}\n.unread_hdr {\n  float: right;\n  color: #ffffff;\n}\n.readd {\n  text-align: center;\n  background: #dcdcdc;\n  color: #020202;\n}\n.readd h4 {\n  color: #ae5c50;\n}\n.readd p span {\n  color: #020202;\n}\n.time {\n  float: right;\n  margin: 4px;\n}\nh4,\np {\n  margin: 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 1.2em;\n  white-space: nowrap;\n}\nh4 {\n  margin: 8px;\n  margin-left: 5px;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQ0k7RUFDRSxjQUFBO0FBQ047QUFHQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQUY7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQUNJO0VBQ0UsY0FBQTtBQUNOO0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7O0VBRUUsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdBO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREYiLCJmaWxlIjoibm90aS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5yZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjYWU1YzUwO1xuICBjb2xvcjogI2ZmZmZmZjs7XG4gIGg0IHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICBwIHtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuLnJlYWRfaGRyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2NjODk3Zjtcbn1cbi51bnJlYWRfaGRyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLy8gY29sb3I6ICNhZTVjNTA7XG59XG4ucmVhZGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNkY2RjZGM7XG4gIGNvbG9yOiAjMDIwMjAyO1xuICBoNCB7XG4gICAgY29sb3I6ICNhZTVjNTA7XG4gIH1cbiAgcCB7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzAyMDIwMjtcbiAgICB9XG4gIH1cbn1cblxuLnRpbWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNHB4O1xuICAvLyAgY29sb3I6ICMwMDA7XG59XG5oNCxcbnAge1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMS4yZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5oNCB7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 88169:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/noti/noti.page.html ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Notifications </ion-title>\n       \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngFor=\"let no of notifi\">\n        <ion-card (click)=\"read_noti(no.id,no)\" style=\"text-align: left;padding: 0px 10px; \" [ngClass]=\"no.read==0 ? 'unread' : 'readd'\">\n            <h4 *ngIf=\"no.type=='ATTENDANCE'\">\n                Attendance\n                <span><ion-icon\n                    name=\"mail\"\n                    *ngIf=\"no.read==0\"\n                    class=\"unread_hdr\"\n                ></ion-icon></span>\n\n                <span><ion-icon\n                    name=\"mail-open\"\n                    *ngIf=\"no.read!=0\"\n                    class=\"read_hdr\"\n                ></ion-icon></span>\n            </h4>\n            \n            <h4  *ngIf=\"no.type!='ATTENDANCE'\">\n                Notice<span><ion-icon\n            name=\"mail\"\n            *ngIf=\"no.read==0\"\n            class=\"unread_hdr\"\n          ></ion-icon\n        ></span>\n\n                <span><ion-icon\n            name=\"mail-open\"\n            *ngIf=\"no.read!=0\"\n            class=\"read_hdr\"\n          ></ion-icon\n        ></span>\n            </h4>\n\n            <!-- [ngClass]=\"no.read==0 ? 'unread_hdr' : 'read_hdr'\" -->\n            <!-- | date:'MMM d yy, h:mm a' -->\n            <p>{{no.message}}<br /></p>\n            <!-- <p class=\"time\">{{no.date| date:'MMM dd yy, h:mm a'}}</p> -->\n            <p class=\"time\">{{datP(no.date)}}</p>\n        </ion-card>\n    </div>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more Notifications...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-card *ngIf=\"none==true\" style=\"text-align: center;color: #000;\">\n        <h3>No Notifications</h3>\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n    </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_noti_noti_module_ts-es2015.js.map