(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_calendar_calendar_module_ts"],{

/***/ 50196:
/*!**********************************************************!*\
  !*** ./src/app/proj/calendar/calendar-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageRoutingModule": function() { return /* binding */ CalendarPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.page */ 83677);




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_0__.CalendarPage
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ 27230:
/*!**************************************************!*\
  !*** ./src/app/proj/calendar/calendar.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageModule": function() { return /* binding */ CalendarPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 50196);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page */ 83677);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ 13174);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 83362);










let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_7__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__.adapterFactory
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarPageRoutingModule,
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage]
    })
], CalendarPageModule);



/***/ }),

/***/ 83677:
/*!************************************************!*\
  !*** ./src/app/proj/calendar/calendar.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPage": function() { return /* binding */ CalendarPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calendar.page.html */ 26127);
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page.scss */ 84299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ 13174);
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/esm */ 98120);
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/esm */ 43257);
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/esm */ 57888);
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/esm */ 12297);
/* harmony import */ var date_fns_esm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/esm */ 62094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _attendanc_custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attendanc/custom-date-formatter.provider */ 63489);













const colors = {
    red: {
        primary: "#ad2121",
        secondary: "#FAE3E3"
    },
    blue: {
        primary: "#1e90ff",
        secondary: "#D1E8FF"
    },
    yellow: {
        primary: "#e3bc08",
        secondary: "#FDF1BA"
    }
};
let CalendarPage = class CalendarPage {
    constructor(generalts, auth, datepipe, modal, alertController) {
        this.generalts = generalts;
        this.auth = auth;
        this.datepipe = datepipe;
        this.modal = modal;
        this.alertController = alertController;
        this.calc = 1;
        this.dateMulti = [];
        this.dateMulti1 = [];
        this.string = "string";
        this.clicked_Date = false;
        this.lyt = false;
        this.keyValueCalendar = [];
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView.Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView;
        this.viewDate = new Date();
        this.actions = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.events = [];
        this.activeDayIsOpen = true;
        this.changeMonth = new Date();
        this.keyValueCz = [];
    }
    ionViewWillEnter() {
        this.calc = 1;
        this.token = localStorage.getItem("pas_tok");
        console.log("afs");
        this.get_absent();
        // this.getNoticeValue();
        //this.generalts.gen_loading();
        this.events = [];
    }
    ngOnInit() { }
    onSelect(event) {
        this.clicked_Date = true;
        console.log("eventonSelect ", event);
        //var date = new Date(event.time);
        var date = new Date(event);
        var dateFormat = this.datepipe.transform(date, "yyyy-MM-dd");
        this.absentDetails = this.absentData[dateFormat];
        // return (this.dateMulti = this.dateMulti1);
        var dass = this.datepipe.transform(date, "yyyy ,MM ,dd");
        // this._daysConfig.push({
        //   cssClass: "holiday",
        //   date: new Date(dass),
        //   subTitle: "2",
        //   marked: true
        // });
        this.keyValueCz = this.absentDetails;
        console.log(this.absentDetails, "length", this.dateMulti, this.absentData, dateFormat);
    }
    monthchnge(event) {
        console.log(event, "event147", event.value);
        var currentMonth1 = event.newMonth;
        this.currentMonth = currentMonth1.months.toString();
        console.log(this.absentData);
    }
    sda() {
        console.log("event", this.dateMulti);
        //this.dateMulti = [];
    }
    get_absent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // const load = await this.generalts.loading("Loading ...");
            // await load.present();
            var stud = localStorage.getItem("c_stud");
            var data = "";
            //this.dateMulti = [];
            // setTimeout(() => {
            var data = "";
            var link = "student/" + stud + "/calendar";
            // if (month && year) {
            //   link = "student/" + stud + "/calendar?month=" + month + "&year=" + year;
            // }
            // var link =
            //   "student/" + stud + "/absent-info?from=2018-06-01&to=2022-12-12";
            //console.log(link, "link");
            this.lyt = false;
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            this.auth.g_get(data, link, this.token).subscribe(absent => {
                this.lyt = true;
                load.dismiss();
                let arr;
                this.absentData = absent;
                // this.absentData = {
                //   "2019-07-03": [
                //     {
                //       "lecture_hour": 1,
                //       "subject_name": "18COM302 - Cost Accounting",
                //       "lecturer": "Ms. Alisha Mary Philip",
                //       "lecturer_mobile_number": null
                //     }
                //   ]
                // }
                //this.abs1=[];
                console.log(this.absentData, "given data RAWW");
                Object.keys(absent).forEach(element => {
                    this.dateMulti.push(element.toString());
                    this.dateMulti1.push(element.toString());
                    // this.dateMulti.push(element);
                    // console.log(this.dateMulti, "dat", this.events, "eventsevents123");
                    // // this.dateMulti;
                    // console.log(this.dateMulti, this.dateMulti1, "element");
                    // console.log(this.dateMulti);
                });
                for (let index = 0; index < this.dateMulti.length; index++) {
                    const element = this.dateMulti[index];
                    this.keyValueCalendar.push({
                        date: element,
                        value: this.absentData[this.dateMulti[index]]
                    });
                    console.log(element, "elementdateMulti", this.keyValueCalendar, "this.keyValueCalendar", 
                    // this.absentData["2019-06-28"],
                    new Date(this.keyValueCalendar[index]['date']).getMonth() + 1
                    // this.absentData[this.dateMulti[index]]
                    );
                    // var dataSort = this.keyValueCalendar[index]['date'];
                    // var monthz = this.changeMonth.getMonth() + 1;
                    // var year = this.changeMonth.getFullYear();
                    // if (new Date(dataSort).getMonth() + 1 == monthz && new Date(dataSort).getFullYear()) {
                    //   this.keyValueC.push({
                    //     date: element,
                    //     value: this.absentData[this.dateMulti[index]]
                    //   })
                    // }
                    let a = this.absentData[this.dateMulti[index]];
                    if (a != undefined) {
                        // console.log("ashok", typeof a, a.length);
                        for (let index1 = 0; index1 < a.length; index1++) {
                            const element = a[index1];
                            console.log(this.dateMulti[index], "dsa");
                            this.events.push({
                                start: (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_8__.default)((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_9__.default)(new Date(this.dateMulti[index])), 0),
                                //  end: addDays(new Date(), 1),
                                title: element,
                                color: colors.blue,
                                actions: this.actions,
                                allDay: true,
                                resizable: {
                                    beforeStart: false,
                                    afterEnd: false
                                },
                                draggable: false
                            });
                        }
                    }
                }
                this.closeOpenMonthViewDay(this.changeMonth);
                console.log(this.events, this.dateMulti, "55555");
                return this.events;
            }, error => {
                //   load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status == 401) {
                    this.auth.loginAgain();
                    //this.router.navigateByUrl('/login');
                }
                else if (error.status_code == 400) {
                    this.err = error.message;
                }
            });
            // }, 500);
        });
    }
    ////////////calender
    dayClicked({ date, events }) {
        if ((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_10__.default)(date, this.viewDate)) {
            if (((0,date_fns_esm__WEBPACK_IMPORTED_MODULE_11__.default)(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
            console.log(this.viewDate, "viewDate");
            this.onSelect(this.viewDate);
            //this.presentAlertConfirm(this.viewDate);
        }
    }
    presentAlertConfirm(date) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Absent Days!",
                message: "Message <strong>" + date + "</strong>!!!",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: blah => {
                            console.log("Confirm Cancel: blah");
                        }
                    },
                    {
                        text: "Okay",
                        handler: () => {
                            console.log("Confirm Okay");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign(Object.assign({}, event), { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent("Dropped or resized", event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: "lg" });
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: "New event",
                start: (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_9__.default)(new Date()),
                end: (0,date_fns_esm__WEBPACK_IMPORTED_MODULE_12__.default)(new Date()),
                //color: colors.red,
                cssClass: "asd",
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay(data) {
        this.changeMonth = data;
        var monthz = data.getMonth() + 1;
        var year = data.getFullYear();
        console.log(data, "month", monthz, year);
        // this.get_absent(monthz, year)
        this.getMonth(monthz, year);
        console.log(this.keyValueCalendar);
        this.activeDayIsOpen = false;
    }
    getMonth(month, year) {
        this.keyValueCz = [];
        console.log("getMonth", this.keyValueCalendar);
        for (let index = 0; index < this.keyValueCalendar.length; index++) {
            const element = this.keyValueCalendar[index];
            var dataSort = this.keyValueCalendar[index]['date'];
            var monthz = this.changeMonth.getMonth() + 1;
            var yeasr = this.changeMonth.getFullYear();
            // console.log(dataSort, new Date(dataSort).getMonth() + 1, new Date(dataSort).getFullYear(), "dataSort dataSort", yeasr, monthz, "res",
            //   new Date(dataSort).getMonth() + 1 == monthz && new Date(dataSort).getFullYear() == yeasr);
            console.log(element.value, "element123");
            for (let index = 0; index < element.value.length; index++) {
                const elementNew = element.value[index];
                console.log(elementNew.event, "element123NEw");
                if (new Date(dataSort).getMonth() + 1 == monthz && new Date(dataSort).getFullYear() == yeasr) {
                    elementNew.date = dataSort;
                    this.keyValueCz.push(elementNew);
                }
            }
            // }
        }
        return;
        console.log(this.keyValueCalendar);
        var stud = localStorage.getItem("c_stud");
        var data = "";
        //this.dateMulti = [];
        // setTimeout(() => {
        var data = "";
        var link = "student/" + stud + "/calendar";
        if (month && year) {
            link = "student/" + stud + "/calendar?month=" + month + "&year=" + year;
        }
        // var link =
        //   "student/" + stud + "/absent-info?from=2018-06-01&to=2022-12-12";
        //console.log(link, "link");
        // this.lyt = false;
        this.auth.g_get(data, link, this.token).subscribe(Data => {
            console.log(Data, "Data month");
            this.monthDAta = Data;
            // this.da = absent;
        });
    }
};
CalendarPage.ctorParameters = () => [
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController }
];
CalendarPage.propDecorators = {
    modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ["modalContent", { static: true },] }]
};
CalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [
            {
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarDateFormatter,
                useClass: _attendanc_custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_4__.CustomDateFormatter
            }
        ],
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalendarPage);

//   timetableData: any;
//   token: any; err: any;
//   constructor(private router: Router,
//     public authService: AuthService,
//     public generalts: GeneralService) { }
//   ngOnInit() {
//   }
//   ionViewWillEnter() {
//     this.token = localStorage.getItem("pas_tok");
//     // this.getNoticeValue();
//   }
// }


/***/ }),

/***/ 84299:
/*!**************************************************!*\
  !*** ./src/app/proj/calendar/calendar.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-clder {\n  background-color: white !important;\n  color: #d81d1d !important;\n}\n\n.abscent {\n  background: #222428;\n  width: 15px;\n  height: 15px;\n  display: inline-block;\n  border-radius: 30px;\n  margin-right: 5px;\n  position: relative;\n  top: 2px;\n}\n\n.holiday {\n  color: #fef5ff !important;\n  background-color: #c74c4e !important;\n}\n\nion-calendar .unavailableDay {\n  background-color: #f70e0e !important;\n}\n\nion-calendar .unavailableDay p {\n  color: white !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #746d6d;\n}\n\n.tabl ion-col {\n  border: 1px solid #746d6d;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #ae5c50;\n}\n\nion-grid {\n  padding: 0 5px !important;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.actived_Date .cal-month-view .cal-cell-top {\n  background-color: red;\n}\n\n.abst_list ion-row:last-child {\n  border-bottom: 1px solid #746d6d;\n}\n\n.a_list ion-row:first-child {\n  border-top: 1px solid #746d6d;\n}\n\n.no_data {\n  border-bottom: 1px solid #746d6d;\n}\n\n.cardss h4 {\n  margin: 0px;\n  margin-bottom: 7px;\n}\n\n.cardss p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFHSTtFQUNJLG9DQUFBO0FBQVI7O0FBQ1E7RUFDSSx1QkFBQTtBQUNaOztBQUtJO0VBQ0ksK0JBQUE7QUFGUjs7QUFJSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUZSOztBQU1BO0VBQ0ksa0JBQUE7QUFISjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU9BO0VBQ0kseUJBQUE7QUFKSjs7QUFLSTtFQUNJLGFBQUE7QUFIUjs7QUFRSTtFQUNJLHFCQUFBO0FBTFI7O0FBWUE7RUFDSSxnQ0FBQTtBQVRKOztBQVlBO0VBQ0ksNkJBQUE7QUFUSjs7QUFZQTtFQUNJLGdDQUFBO0FBVEo7O0FBYUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFWUjs7QUFZSTtFQUNJLFNBQUE7QUFWUiIsImZpbGUiOiJjYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNsZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoMjE2LCAyOSwgMjkpICFpbXBvcnRhbnQ7XG59XG5cbi5hYnNjZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyNDI4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG59XG5cbi5ob2xpZGF5IHtcbiAgICBjb2xvcjogcmdiKDI1NCwgMjQ1LCAyNTUpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3NGM0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FsZW5kYXIge1xuICAgIC51bmF2YWlsYWJsZURheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzBlMGUgIWltcG9ydGFudDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmwge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzQ2ZDZkO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc0NmQ2ZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiBpbmhlcml0O1xuICAgIH1cbn1cblxuaW9uLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjYWU1YzUwO1xuICAgIH1cbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE2LCAxMDksIDEwOSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDFweCAwO1xuICAgIH1cbn1cblxuLmFjdGl2ZWRfRGF0ZSB7XG4gICAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC10b3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxufVxuXG4vLyBpb24tcm93Om50aC1sYXN0LWNoaWxkKDIpIHtcbi8vICAgYmFja2dyb3VuZDogcmVkO1xuLy8gfVxuLmFic3RfbGlzdCBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ2ZDZkO1xufVxuXG4uYV9saXN0IGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzQ2ZDZkO1xufVxuXG4ubm9fZGF0YSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NDZkNmQ7XG59XG5cbi5jYXJkc3Mge1xuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 26127:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/calendar/calendar.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <!-- <span class=\"ion-padding back_butt\" style=\"font-size: 18px;\">\n      Calendar\n    </span> -->\n\n        <ion-title>Calendar</ion-title>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\"margin-top: 25px;\">\n            <ion-col size=\"3\">\n                <div class=\"btn btn-primary\" \n                mwlCalendarPreviousView \n                [view]=\"view\" \n                [(viewDate)]=\"viewDate\" \n                (viewDateChange)=\"closeOpenMonthViewDay(viewDate)\"\n                style=\"padding: 15px 0px 9px 6px;\"\n                >\n                <ion-icon name=\"arrow-back-circle\"></ion-icon>\n                </div>\n            </ion-col>\n\n            <ion-col size=\"6\">\n\n                <h3 no-margin>\n                    {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\n                </h3>\n            </ion-col>\n\n            <ion-col size=\"3\">\n                <div class=\"btn btn-primary\" \n                mwlCalendarNextView \n                [view]=\"view\" \n                [(viewDate)]=\"viewDate\" \n                (viewDateChange)=\"closeOpenMonthViewDay(viewDate)\"\n                style=\"padding: 15px 0px 9px 6px;\"\n                >\n                  <ion-icon name=\"arrow-forward-circle\"></ion-icon>\n                </div>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n    <div class=\"row ion-text-center\"></div>\n    <br />\n    <div [ngSwitch]=\"view\" class=\"ion-padding\" *ngIf=\"lyt\">\n        <mwl-calendar-month-view \n        *ngSwitchCase=\"CalendarView.Month\" \n        [viewDate]=\"viewDate\" \n        [events]=\"events\" \n        class=\"da\" \n        [refresh]=\"refresh\" \n        [activeDayIsOpen]=\"activeDayIsOpen\" \n        (dayClicked)=\"dayClicked($event.day)\" \n        (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n    </div>\n    <!-- /////table bottom -->\n    <div *ngIf=\"keyValueCalendar\">\n        <!-- {{this.viewDate}}  -->\n        <div *ngFor=\"let d of keyValueCz\">\n            <ion-card style=\"padding: 10px 20px; \" class=\"cardss\">\n                <h4 [style.color]=\"d.color\" style=\"font-size: 19px;\">{{d.name}}</h4>\n                <p>Event Date - {{d.date | date:'dd/MM/y'}}</p>\n                <p>Description - {{d.event}}</p>\n\n            </ion-card>\n\n        </div>\n\n\n    </div>\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_calendar_calendar_module_ts-es2015.js.map