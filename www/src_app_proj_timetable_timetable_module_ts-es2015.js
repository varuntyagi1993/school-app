(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_timetable_timetable_module_ts"],{

/***/ 78297:
/*!************************************************************!*\
  !*** ./src/app/proj/timetable/timetable-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePageRoutingModule": function() { return /* binding */ TimetablePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable.page */ 67308);




const routes = [
    {
        path: '',
        component: _timetable_page__WEBPACK_IMPORTED_MODULE_0__.TimetablePage
    }
];
let TimetablePageRoutingModule = class TimetablePageRoutingModule {
};
TimetablePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimetablePageRoutingModule);



/***/ }),

/***/ 83255:
/*!****************************************************!*\
  !*** ./src/app/proj/timetable/timetable.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePageModule": function() { return /* binding */ TimetablePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable-routing.module */ 78297);
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.page */ 67308);







let TimetablePageModule = class TimetablePageModule {
};
TimetablePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimetablePageRoutingModule
        ],
        declarations: [_timetable_page__WEBPACK_IMPORTED_MODULE_1__.TimetablePage]
    })
], TimetablePageModule);



/***/ }),

/***/ 67308:
/*!**************************************************!*\
  !*** ./src/app/proj/timetable/timetable.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePage": function() { return /* binding */ TimetablePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./timetable.page.html */ 34924);
/* harmony import */ var _timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.page.scss */ 5204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);







let TimetablePage = class TimetablePage {
    // @ViewChild("mySlider", { static: true }) modalContent: TemplateRef<any>;
    constructor(router, authService, generalts) {
        this.router = router;
        this.authService = authService;
        this.generalts = generalts;
        this.day = new Date();
        this.slideOpts = {
            initialSlide: this.day.getDay() - 1,
            speed: 400,
            pager: false
        };
        this.isError = false;
        console.log(this.day.getDay(), 'd');
    }
    // startSlide(data) {
    //   data.ionSlideReachStart();
    // }
    prev(data) {
        data.slidePrev();
        // data.slideEnd();
    }
    nnext(data) {
        // console.log("asdf", data)
        data.slideNext();
        // this.slides.slideNext()
        // this.mySlider.slideNext();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_tok");
        // this.timetableData =
        // {
        //   "classTimeTable": {
        //     "Monday": [
        //       "Anatomy",
        //       "Physiology",
        //       "Physiology",
        //       "Nutrition",
        //       "Microbiology",
        //       "Kannada"
        //     ],
        //     "Tuesday": [
        //       "Anatomy",
        //       "Nutrition",
        //       "Microbiology",
        //       "Nursing Foundation",
        //       "English",
        //       null
        //     ],
        //     "Wednesday": [
        //       "Anatomy",
        //       "Nutrition",
        //       "Nursing Foundation",
        //       "English",
        //       "Psychology",
        //       null
        //     ],
        //     "Thursday": [
        //       "Physiology",
        //       "Biochemistry",
        //       null,
        //       null,
        //       null,
        //       null
        //     ],
        //     "Friday": [
        //       "Anatomy",
        //       "Nursing Foundation",
        //       null,
        //       null,
        //       null,
        //       null
        //     ],
        //     "Saturday": [
        //       "Nursing Foundation",
        //       null,
        //       null,
        //       null,
        //       null,
        //       null
        //     ],
        //     "Sunday": []
        //   },
        //   "classPeriodAndTime": {
        //     "1": "08:30 am to 09:30 am",
        //     "2": "09:30 am to 10:30 am",
        //     "3": "10:30 am to 11:30 am",
        //     "4": "11:30 am to 12:30 pm",
        //     "5": "01:30 pm to 02:30 pm",
        //     "6": "02:30 pm to 03:30 pm"
        //   }
        // }
        this.getNoticeValue();
        // var data = { "data": [{ "week_name": "MONDAY", "item": [{ "subName": "Kannada", "from_time": "11:30 AM", "end_time": "12:15 PM", "period_no": 1, "hrs": "11:30" }, { "subName": "Hindi", "from_time": "12:20 PM", "end_time": "01:05 PM", "period_no": 2, "hrs": "12:20" }] }, { "week_name": "TUESDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }, { "week_name": "WEDNESDAY", "item": [{ "subName": "Environmental Studies", "from_time": "11:30 AM", "end_time": "12:15 PM", "period_no": 1, "hrs": "11:30" }, { "subName": "Art Education", "from_time": "12:20 PM", "end_time": "01:05 PM", "period_no": 2, "hrs": "12:20" }] }, { "week_name": "THURSDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }, { "week_name": "FRIDAY", "item": [{ "subName": "Mathematics", "from_time": "11:30 AM", "end_time": "12:15 PM", "period_no": 1, "hrs": "11:30" }, { "subName": "English", "from_time": "12:20 PM", "end_time": "01:05 PM", "period_no": 2, "hrs": "12:20" }] }, { "week_name": "SATURDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }, { "week_name": "SUNDAY", "item": [{ "subName": null, "from_time": "", "end_time": "", "period_no": 1, "hrs": "5:30" }, { "subName": null, "from_time": "", "end_time": "", "period_no": 2, "hrs": "5:30" }] }] }
    }
    getNoticeValue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var data = "";
            var c_stu = localStorage.getItem("c_stud");
            var link = "student/" + c_stu + "/class-timetable";
            // "student/" + c_stu + "/notices?type=Notices&paginate=0";
            console.log(link, "link", "this.c_stud ", c_stu);
            this.authService.g_get(data, link, this.token).subscribe(data => {
                load.dismiss();
                this.timetableData = data;
                this.isError = false;
                console.log(data, "prof");
            }, error => {
                load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status == 401) {
                    this.authService.loginAgain();
                    //this.router.navigateByUrl('/login');
                }
                else if (error.status_code == 400) {
                    this.err = error.message;
                    this.isError = true;
                }
            });
        });
    }
};
TimetablePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService }
];
TimetablePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["Slides", { static: true },] }]
};
TimetablePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-timetable',
        template: _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TimetablePage);



/***/ }),

/***/ 5204:
/*!****************************************************!*\
  !*** ./src/app/proj/timetable/timetable.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 15px;\n}\n\nion-slides {\n  width: 100% !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #fff;\n}\n\n.tabl ion-col {\n  border: 1px solid #fff;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #ae5c50;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.abst_list {\n  background: #b9cbff;\n}\n\n.a_list {\n  background: #ae5c50;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSxzQkFBQTtBQUNSOztBQUdRO0VBQ0ksNEJBQUE7QUFBWjs7QUFFUTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUFaOztBQUlJO0VBQ0ksa0JBQUE7QUFEUjs7QUFFUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFaOztBQU9RO0VBQ0ksYUFBQTtBQUpaOztBQVFJO0VBQ0ksbUJBQUE7QUFMUjs7QUFRSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6InRpbWV0YWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC50YWJsIHtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNhZTVjNTA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDExNiwgMTA5LCAxMDkpO1xuICAgIH1cbiAgICBcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAxcHggMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYWJzdF9saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2I5Y2JmZjtcbiAgICB9XG4gICAgXG4gICAgLmFfbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhZTVjNTA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLy8gLmFic3RfbGlzdCBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIC8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc0NmQ2ZDtcbiAgICAvLyB9Il19 */");

/***/ }),

/***/ 34924:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/timetable/timetable.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> Time Table </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"!isError && timetableData\">\n        <!-- {{timetableData.classTimeTable.Monday|json}} -->\n        <!-- <ion-row class=\"no_data\">\n                      <ion-col size=\"12\" *ngIf=\"[undefined,'',null].indexOf(absentDetails)>-1\"><span style=\"color: red;\">No Data Found</span>\n                      </ion-col>\n                  </ion-row> -->\n        <!-- <div class=\"\">\n            <div>\n                <ion-grid class=\"tabl\">\n                    <ion-row class=\"a_list\">\n                        <ion-col size=\"2\">\n                            <p>Hour</p>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <p>Subject</p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <p>Lecturer</p>\n                        </ion-col>\n                    </ion-row>\n                   \n\n                    <div class=\"abst_list\" *ngFor=\"let Monday of timetableData.classTimeTable.Monday,let i=index\">\n                        <ion-row>\n                            <ion-col size=\"2\">\n                                <p>{{i+1}}</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>{{Monday.timings}}</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>{{Monday.subject_name}}</p>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </ion-grid>\n            </div>\n        </div> -->\n        <!-- <ion-row class=\"no_data\">\n                          <ion-col size=\"12\" *ngIf=\"[undefined,'',null].indexOf(absentDetails)>-1\"><span style=\"color: red;\">No Data Found</span>\n                          </ion-col>\n                      </ion-row> -->\n        <ion-slides pager=\"false\" #Slides [options]=\"slideOpts\">\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <!-- <ion-icon name=\"arrow-dropleft\"></ion-icon> -->\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Monday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                \n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Monday of timetableData.classTimeTable.Monday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Monday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Monday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Tuesday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Tuesday of timetableData.classTimeTable.Tuesday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Tuesday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Tuesday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Wednesday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Wednesday of timetableData.classTimeTable.Wednesday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Wednesday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Wednesday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Thursday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Thursday of timetableData.classTimeTable.Thursday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Thursday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Thursday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Friday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Friday of timetableData.classTimeTable.Friday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Friday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Friday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Saturday\n                            </ion-col>\n                            <ion-col size=\"3\" (click)=\"nnext(Slides)\">\n                                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Saturday of timetableData.classTimeTable.Saturday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Saturday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Saturday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <div class=\"\">\n                    <ion-grid class=\"tabl\">\n                        <ion-row>\n                            <ion-col size=\"3\" (click)=\"prev(Slides)\">\n                                <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                Sunday\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <!-- <ion-icon name=\"arrow-dropright\"></ion-icon> -->\n                            </ion-col>\n                        </ion-row>\n                        <ion-row class=\"a_list\">\n                            <ion-col size=\"2\">\n                                <p>Hour</p>\n                            </ion-col>\n                            <ion-col size=\"6\">\n                                <p>Timings</p>\n                            </ion-col>\n                            <ion-col size=\"4\">\n                                <p>Subject name</p>\n                            </ion-col>\n                        </ion-row>\n                        <div class=\"abst_list\" *ngFor=\"let Sunday of timetableData.classTimeTable.Sunday,let i=index\">\n                            <ion-row>\n                                <ion-col size=\"2\">\n                                    <p>{{i+1}}</p>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <p>{{Sunday.timings}}</p>\n                                </ion-col>\n                                <ion-col size=\"4\">\n                                    <p>{{Sunday.subject_name}}</p>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-grid>\n                </div>\n            </ion-slide>\n            <!-- \n            <ion-slide>\n                <h1>Slide 2</h1>\n            </ion-slide>\n            <ion-slide>\n                <h1>Slide 3</h1>\n            </ion-slide> -->\n        </ion-slides>\n\n    </div>\n    <ion-card *ngIf=\"isError\" style=\"text-align: center;color: #000;margin: 15px;\">\n\n        <!-- {{ circularData.data.length|json}} -->\n\n        <h3>{{err}}</h3>\n\n        <img src=\"../../../assets/images/noti.png\" class=\"imf\" />\n    </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_timetable_timetable_module_ts-es2015.js.map