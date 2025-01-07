(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_attendance_attendance_module_ts"],{

/***/ 61017:
/*!*****************************************************************!*\
  !*** ./src/app/faculty/attendance/attendance-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageRoutingModule": function() { return /* binding */ AttendancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.page */ 84824);




const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
    }
];
let AttendancePageRoutingModule = class AttendancePageRoutingModule {
};
AttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AttendancePageRoutingModule);



/***/ }),

/***/ 47068:
/*!*********************************************************!*\
  !*** ./src/app/faculty/attendance/attendance.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageModule": function() { return /* binding */ AttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance-routing.module */ 61017);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.page */ 84824);







let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendancePageRoutingModule
        ],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_1__.AttendancePage]
    })
], AttendancePageModule);



/***/ }),

/***/ 84824:
/*!*******************************************************!*\
  !*** ./src/app/faculty/attendance/attendance.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePage": function() { return /* binding */ AttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./attendance.page.html */ 43799);
/* harmony import */ var _attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.page.scss */ 56994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);










class Port {
}
let AttendancePage = class AttendancePage {
    constructor(route, router, authService, general, toastController, datePipe) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.general = general;
        this.toastController = toastController;
        this.datePipe = datePipe;
        this.arr = [];
        this.interval = [];
        this.interval_name = '';
        this.interval_list = [];
        this.disabled = false;
        this.fromDate = new Date(new Date().setDate(new Date().getDate() - 4)).toISOString();
        this.displayFac = false;
        this.progressShow = false;
        this.TakenAttdance = [];
        this.attndDate = new Date().toISOString();
        this.setDate = new Date().toISOString();
        this.leacturHour = [];
        this.TotalHour = [];
        this.totalHour = 1;
        this.totHour = 1;
        this.showTot = true;
        this.hide = true;
        this.getStudentList = [];
        this.PushAbsent = [];
        this.pushEnable = true;
        this.realoadAbsent = [];
        this.trackAbsent = [];
        this.reload_student = [];
        this.ShowProgrs = true;
        this.err = '';
        this.Sub_type = {
            subject_type: "",
            id: "" // faculty_division_allocation_id
        };
        this.SaveAttadance = {
            presentStudents: [],
            absentees: [],
            attendanceEntry: {
                date: "",
                interval: ""
            },
            attendanceClass: {
                institution_id: "",
                academic_year_id: "",
                attendance_entry: ""
            },
            lateComers: [],
            classType: null,
            absentReasons: {}
        };
        this.UpdateData = {
            progressHur: "",
            Date: "",
            interval: ""
        };
        this.UpdateAttdance = {
            presentStudents: [],
            absentees: [],
            attendanceEntry: {
                date: "",
                interval: ""
            },
            attendanceClass: {
                institution_id: "",
                academic_year_id: "",
                attendance_entry: ""
            },
            lateComers: [],
            classType: null,
            absentReasons: {}
        };
        this.getAbsenties = {
            subject_type: "",
            attendance_id: ""
        };
        // Jayashri.B
        this.getPresent = {
            subject_type: "",
            attendance_id: ""
        };
        this.classAny = "";
        this.subName = "";
        this.facData = JSON.parse(localStorage.getItem('myParam'));
        this.Sub_type.subject_type = this.facData.subject_type;
        this.Sub_type.id = this.facData.id;
        //console.log(this.f.class, 'sf');
        if (this.facData)
            this.displayFac = true;
        else
            this.displayFac = false;
        this.sub = this.route.params.subscribe(params => {
            this.id = params['s'];
        });
        // console.log(this.sub);
        //this.FindUser();
        this.err = '';
    }
    ngOnInit() {
        this.token = localStorage.getItem("pas_faculty");
        // console.log(this.fromDate, 'sds')
        this.getInterval();
    }
    ionViewDidEnter() {
        this.classAny = "";
        this.subName = "";
        this.facData = JSON.parse(localStorage.getItem('myParam'));
        this.fromDate = new Date(this.facData.attendance_start_date).toISOString();
        console.log(this.facData, 'fsd');
        let setdate = this.datePipe.transform(this.setDate, 'yyyy-MM-dd');
        if (setdate >= this.facData.attendance_last_date) {
            this.setDate = new Date(new Date(this.facData.attendance_last_date).setDate(new Date(this.facData.attendance_last_date).getDate() - 1)).toISOString();
            this.attndDate = this.setDate;
        }
        setTimeout(() => {
            this.displayList();
            this.progressShow = true;
            this.displayFac = true;
        }, 100);
        // this.sub = this.route.params.subscribe(params => {
        //   this.id = params['s']; 
        // });
        //this.FindUser();
        this.load_studentList();
        // console.log(this.facData, 'Data');
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_faculty");
        this.load_studentList();
    }
    /**** Interval Deatils ****/
    getInterval() {
        this.general.loadingPresent();
        this.authService.get_fac_t("teaching-staff/class-guide-attendance/intervals", this.token).subscribe(data => {
            console.log(data[0]);
            if (data.length != 0) {
                this.interval = data;
                this.inrval = data[0].id;
                this.interval_name = data[0].name;
            }
            this.general.loadingDismiss();
        });
    }
    intervalDetails(t) {
        console.log(this.inrval);
        let id = this.inrval;
        var interv = t.filter(function (intval) {
            return intval.id == id;
        });
        this.interval_name = interv[0].name;
        let i = this.interval_list.filter(function (v) {
            return v == id;
        });
        this.disabled = i.length != 0 ? true : false;
    }
    /*** End Interval ****/
    /**** New Attendace ****/
    GetNewAttdance() {
        if (this.getStudentList.length <= 0) {
            this.resentToast('No student are assigned.');
        }
        else {
            this.hide = false;
            this.displyDate = this.attndDate.split('T')[0];
            this.update = false;
            this.saveBtn = true;
            this.ShowProgrs = true;
            // setTimeout(() => {
            //   this.virtual = true;  
            // }, 100);
            this.load_studentList();
        }
    }
    /*** End New Attendace*/
    /***** Student List ****/
    load_studentList() {
        this.getStudentList = [];
        this.PushAbsent = [];
        this.realoadAbsent = [];
        this.reload_student = [];
        let date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
        let page = `teaching-staff/class-guide-attendance/faculty-assigned-students?course_id=${this.facData.course_id}&batch_id=${this.facData.batch_id}&institution_id=${this.facData.institution_id}&date=${date}&filter_for_students=${this.facData.filter_for_students}`;
        // let item = {
        //   "course_id" : this.facData.course_id, 
        //   "batch_id" : this.facData.batch_id, 
        //   "institution_id" : this.facData.institution_id, 
        //   "date" : date
        // }
        this.authService.get_fac_t(page, this.token)
            .subscribe(data => {
            console.log(data, 'ashok');
            this.studentList = data;
            this.reload_student = this.studentList;
            this.getStudentList = data;
            this.ShowProgrs = false;
        }, (err) => {
            if (err.status == 401 || err.status == 422 || err.status == 0) {
                if (err.statusText == "Unauthorized") {
                    this.general.loginAgain();
                    this.router.navigateByUrl('/login');
                }
            }
        });
    }
    /***** End Student List *****/
    /***** Attedance List *****/
    displayList() {
        this.TakenAttdance = [];
        this.Show_Lhour = false;
        console.log(this.datePipe.transform(this.attndDate, 'yyyy/MM/dd'));
        moment__WEBPACK_IMPORTED_MODULE_3__().format('hh:mm a');
        let date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
        let page = `teaching-staff/class-guide-attendance/faculty-attendances?course_id=${this.facData.course_id}&batch_id=${this.facData.batch_id}&institution_id=${this.facData.institution_id}&date=${date}&year_id=${this.facData.year_id}&academic_year_id=${this.facData.academic_year_id}`;
        // let item ={
        //   "institution_id" : this.facData.institution_id, 
        //   "year_id" : this.facData.year_id, 
        //   "academic_year_id" : this.facData.academic_year_id, 
        //   "course_id" :this.facData.course_id, 
        //   "batch_id" : this.facData.batch_id, 
        //   "date" : this.datePipe.transform(this.attndDate, 'yyyy/MM/dd')
        // }
        let i = [];
        this.authService.get_fac_t(page, this.token)
            .subscribe(data => {
            console.log(data);
            this.TakenAttdance = data.facultyAttendanceArray;
            this.facId = data.facultyId;
            this.PHour = data.progressiveHour;
            this.TakenAttdance.forEach(function (val) {
                i.push(val.interval_id);
            });
            console.log(this.PHour);
            this.interval_list = i;
            console.log(this.interval_list);
            let id = this.inrval;
            let c = this.interval_list.filter(function (v) {
                return v == id;
            });
            this.disabled = c.length != 0 ? true : false;
        }, (err) => {
            if (err.status === 401 || err.status === 422) {
                this.general.loginAgain();
                this.router.navigateByUrl('/login');
            }
        });
    }
    // ************  Method for get User Detail *************
    FindUser() {
        this.authService.g_postt_fac('item', 'me', this.token).subscribe(data => {
            let response = data;
            this.Name = response.name;
            console.log(response, 'me Data');
        });
    }
    //Alert Message
    resentToast(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: data,
                duration: 3000
            });
            toast.present();
        });
    }
    // *************** back button handler **************
    back() {
        this.hide = true;
        // this.check2 = false;
        // this.chec = false;
        console.log(this.getStudentList.length, 'hi');
        // if(this.getStudentList.length == 0) {
        // }
        this.getStudentList.push(...this.PushAbsent);
        this.reload_student.push(...this.PushAbsent);
        this.getStudentList.sort((a, b) => {
            // return a.roll_no -b.roll_no;
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.reload_student.sort((a, b) => {
            // return a.roll_no-b.roll_no; 
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.PushAbsent = [];
        this.realoadAbsent = [];
    }
    // ********* Method for add absent *************
    pushAbsent(s, i) {
        this.PushAbsent.length;
        // console.log(i);
        // console.log(s, 'sds');
        // if(this.pushEnable){ 
        this.allow_pop = true;
        this.getStudentList.splice(i, 1);
        // } else {
        //   this.getStudentList.splice(i,1);
        //   this.reload_student.splice(i,1);
        // }
        this.realoadAbsent.unshift(s);
        this.PushAbsent.unshift(s);
        this.PushAbsent.sort((a, b) => {
            // return a.roll_no -b.roll_no;
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.realoadAbsent.sort((a, b) => {
            // return a.roll_no-b.roll_no; 
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.getStudentList.length;
        console.log(this.getStudentList.length);
    }
    //************ Method for add student to present List   */
    pushPresent(s, b, indx) {
        console.log(b);
        console.log(this.getStudentList, 'before');
        if (this.pushEnable) {
            this.trackAbsent = [];
            this.allow_pop = false;
            this.PushAbsent.splice(indx, 1);
        }
        else {
            this.PushAbsent.splice(indx, 1);
            this.realoadAbsent.splice(indx, 1);
        }
        console.log(this.pushEnable);
        console.log(this.getStudentList.length);
        this.getStudentList.unshift(b);
        //this.reload_student.unshift(b);   
        this.getStudentList.sort((a, b) => {
            // return a.roll_no -b.roll_no;
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        // this.reload_student.sort((a,b)=>{
        //   return a.roll_no -b.roll_no;
        // })
        this.getStudentList.length;
        console.log(this.getStudentList);
    }
    //******** Method for selecting all Student in present List ********
    // ********* called in checkbox **********
    selectAll(c) {
        if (c == true) {
            this.check2 = false;
        }
    }
    //******** Method for selecting all Student in Absent List ********
    // ********* called in checkbox **********
    selectAllabsent(c) {
        if (c == true) {
            this.chec = false;
        }
    }
    pushAll() {
        this.PushAbsent.push(...this.getStudentList);
        this.realoadAbsent.push(...this.getStudentList);
        this.PushAbsent.sort((a, b) => {
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.realoadAbsent.sort((a, b) => {
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.getStudentList = [];
        this.reload_student = [];
        this.virtual = false;
        this.virtual2 = true;
        this.chec = false;
    }
    pushpresentAll() {
        this.getStudentList.push(...this.PushAbsent);
        this.reload_student.push(...this.PushAbsent);
        this.getStudentList.sort((a, b) => {
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.reload_student.sort((a, b) => {
            // return a.roll_no-b.roll_no; 
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.PushAbsent = [];
        this.realoadAbsent = [];
        this.virtual = true;
        this.virtual2 = false;
        this.check2 = false;
    }
    // *************** method for reloading student after search fires **************
    IntiliazeItmes() {
        this.getStudentList = [];
        this.PushAbsent = [];
        let item;
        if (this.realoadAbsent.length > 0 && this.allow_pop) {
            this.realoadAbsent.map(item => {
                for (let i in this.reload_student) {
                    if (item.roll_no == this.reload_student[i].roll_no) {
                        var rr = this.reload_student.splice(i, 1);
                    }
                    else {
                        console.log('no matching found');
                    }
                }
            });
        }
        if (this.reload_student.length > 0 && !this.allow_pop) {
            this.reload_student.map(item => {
                for (let i in this.realoadAbsent) {
                    if (item.roll_no == this.realoadAbsent[i].roll_no) {
                        var abst = this.realoadAbsent.splice(i, 1);
                        console.log('absent Found', abst);
                    }
                    else {
                        console.log('No matching found in absent list');
                    }
                }
            });
        }
        this.getStudentList.push(...this.reload_student);
        this.PushAbsent.push(...this.realoadAbsent);
        this.getStudentList.sort((a, b) => {
            // return a.roll_no -b.roll_no;
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        this.PushAbsent.sort((a, b) => {
            // return a.roll_no -b.roll_no;
            if (a.student_full_name < b.student_full_name) {
                return -1;
            }
            if (a.student_full_name > b.student_full_name) {
                return 1;
            }
            return 0;
        });
        //return this.getStudentList || this.PushAbsent;
        //  console.log(this.getStudentList.length,'reload items len');
    }
    // ++++++++++++  Method for search student +++++++++++++
    getItems(et) {
        //this.IntiliazeItmes;
        const val = et.target.value;
        if (val && val.trim() != '') {
            this.pushEnable = true;
            this.PushAbsent = this.PushAbsent.filter((item) => {
                return (item.student_name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.getStudentList = this.getStudentList.filter((item) => {
                return (item.student_name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.content.scrollToTop(400);
            this.pushEnable = false;
            // this.getStudentList = this.getStudentList;
            //this.load_studentList()
            this.IntiliazeItmes();
        }
    }
    // ************ Method for saving attendance ***********
    Save() {
        this.chec = false;
        this.check2 = false;
        this.err = '';
        this.searchTerm = "";
        this.spinerShow = true;
        setTimeout(() => {
            this.spinerShow = false;
        }, 500);
        this.SaveAttadance.absentees = [];
        this.SaveAttadance.presentStudents = [];
        this.SaveAttadance.attendanceEntry.date = this.displyDate;
        this.SaveAttadance.attendanceEntry.interval = this.inrval;
        this.SaveAttadance.attendanceClass.institution_id = this.facData.institution_id;
        this.SaveAttadance.attendanceClass.academic_year_id = this.facData.academic_year_id;
        this.SaveAttadance.attendanceClass.attendance_entry = 'New';
        this.general.loadingPresent();
        setTimeout(() => {
            for (let i of this.getStudentList) {
                // if(i.check == false){
                this.SaveAttadance.presentStudents.push(i.id);
                // }
            }
            for (let i of this.PushAbsent) {
                // if(i.check == true){ 
                this.SaveAttadance.absentees.push(i.id);
                // }
            }
            this.openModel();
        }, 1000);
    }
    // ************ Method for confirm save attendance ***********
    confirmSave() {
        console.log(this.SaveAttadance, 'save');
        this.general.loadingPresent();
        this.authService.g_postt_fac(this.SaveAttadance, "teaching-staff/class-guide-attendance/save-attendance", this.token)
            .subscribe(data => {
            this.general.loadingDismiss();
            this.resentToast('Saved successfully.');
            this.closeModel();
            this.displayList();
            this.back();
            this.err = '';
        }, error => {
            this.err = error;
            this.general.loadingDismiss();
            if (error.status == 401) {
                this.authService.loginAgain();
            }
            else if (error.status == 400) {
                console.error("Error!", error.status_code, error.message);
                this.general.presentAlert_g(error.message);
            }
            else {
                console.log(error.message);
                this.general.presentAlert_g("Please check your Internet Connection");
            }
        });
    }
    /***** Created Attendance Display */
    UpdateAttd(a) {
        console.log(a);
        this.UpdateData.progressHur = a.progressive_hour;
        this.UpdateData.interval = a.interval_name;
        this.UpdateData.Date = a.date;
        this.displyDate = a.date;
        this.PHour = a.progressive_hour;
        this.totHour = a.total_hours;
        this.inrval = a.interval_id;
        this.interval_name = a.interval_name;
        this.UpdateObj = a;
        this.update = true;
        this.ShowProgrs = true;
        this.saveBtn = false;
        this.virtual = false;
        this.virtual2 = false;
        let absentId;
        this.getStudentList = [];
        this.reload_student = [];
        this.realoadAbsent = [];
        this.PushAbsent = [];
        let showList = [];
        let rlo_a = [];
        let rlo_s = [];
        let date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
        let page1 = `teaching-staff/class-guide-attendance/faculty-assigned-students?course_id=${this.facData.course_id}&batch_id=${this.facData.batch_id}&institution_id=${this.facData.institution_id}&date=${date}&filter_for_students=${this.facData.filter_for_students}`;
        this.general.loadingPresent();
        this.authService.get_fac_t(page1, this.token)
            .subscribe(data => {
            console.log(data, 'Ashok');
            let element = data;
            element.forEach(element => {
                this.getStudentList.push({
                    id: element.id,
                    roll_no: element.roll_no,
                    student_name: element.student_name,
                    check: false
                });
                rlo_s.push({
                    id: element.id,
                    roll_no: element.roll_no,
                    student_name: element.student_name,
                    check: false
                });
            });
            /*** Absent Student Api ****/
            let page2 = `teaching-staff/class-guide-attendance/fetch-absentees?course_id=${this.facData.course_id}&batch_id=${this.facData.batch_id}&interval=${this.inrval}&date=${date}`;
            this.authService.get_fac_t(page2, this.token)
                .subscribe(data => {
                let elemtnt = data;
                absentId = data;
                console.log(absentId, 'hi');
                if (absentId.length == 0) {
                    showList.forEach(s => {
                        this.getStudentList.push({
                            id: s.id,
                            roll_no: s.roll_no,
                            student_name: s.student_name,
                            check: false
                        });
                        rlo_s.push({
                            id: s.id,
                            roll_no: s.roll_no,
                            student_name: s.student_name,
                            check: false
                        });
                        this.ShowProgrs = false;
                    });
                }
                for (let j in absentId) {
                    for (let i in this.getStudentList) {
                        if (this.getStudentList[i].id == absentId[j]) {
                            this.PushAbsent.push({
                                id: this.getStudentList[i].id,
                                student_name: this.getStudentList[i].student_name,
                                roll_no: this.getStudentList[i].roll_no,
                                check: true
                            });
                            rlo_a.push({
                                id: this.getStudentList[i].id,
                                student_name: this.getStudentList[i].student_name,
                                roll_no: this.getStudentList[i].roll_no,
                                check: true
                            });
                            this.getStudentList.splice(i, 1);
                            rlo_s.splice(i, 1);
                        }
                    }
                }
                this.reload_student = rlo_s;
                this.realoadAbsent = rlo_a;
                this.ShowProgrs = false;
                this.virtual = true;
                console.log(this.PushAbsent);
                this.virtual2 = true;
            });
            this.general.loadingDismiss();
        }, error => {
            this.err = error;
            this.general.loadingDismiss();
            if (error.status == 401) {
                this.authService.loginAgain();
                //this.router.navigateByUrl('/login');
            }
            else if (error.status == 400) {
                console.error("Error!", error.status_code, error.message);
                this.general.presentAlert_g(error.message);
            }
            else {
                console.log(error.message);
                this.general.presentAlert_g("Please check your Internet Connection");
            }
        });
    }
    //  ****************** api call of  Update Attadance ******** 
    UpdateSave() {
        this.chec = false;
        this.check2 = false;
        this.spinerShow = true;
        this.searchTerm = "";
        console.log(this.UpdateObj);
        this.UpdateAttdance.absentees = [];
        this.UpdateAttdance.presentStudents = [];
        this.UpdateAttdance.attendanceEntry.date = this.UpdateObj.date;
        this.UpdateAttdance.attendanceEntry.interval = this.UpdateObj.interval_id;
        this.UpdateAttdance.attendanceClass.institution_id = this.facData.institution_id;
        this.UpdateAttdance.attendanceClass.academic_year_id = this.facData.academic_year_id;
        this.UpdateAttdance.attendanceClass.attendance_entry = 'Update';
        console.log(this.UpdateAttdance.attendanceEntry);
        this.general.loadingPresent();
        setTimeout(() => {
            for (let i of this.getStudentList) {
                this.UpdateAttdance.presentStudents.push(i.id);
            }
            for (let i of this.PushAbsent) {
                this.UpdateAttdance.absentees.push(i.id);
            }
            this.openUpdtModel();
            this.refresh;
        }, 1000);
    }
    // ********** Method For Confrim update Attedance ***********
    confirmUpdate() {
        console.log(this.UpdateAttdance, 'testig');
        this.general.loadingPresent();
        this.authService.g_postt_fac(this.UpdateAttdance, "teaching-staff/class-guide-attendance/save-attendance", this.token).subscribe(data => {
            this.resentToast('Updated successfully.');
            this.closeUpdteModel();
            this.displayList();
            this.back();
            this.UpdateAttdance.absentees = [];
            this.UpdateAttdance.presentStudents = [];
            this.general.loadingDismiss();
        }, error => {
            console.log(error);
            this.general.loadingDismiss();
            if (error.status == 401) {
                this.authService.loginAgain();
                //this.router.navigateByUrl('/login');
            }
            else if (error.status == 400) {
                console.error("Error!", error.status_code, error.message);
                this.general.presentAlert_g(error.message);
            }
            else {
                console.log(error.message);
                this.general.presentAlert_g("Please check your Internet Connection");
            }
        });
    }
    // ********* Called in Menu Bar ****************
    navigateBack() {
        this.router.navigateByUrl('/homee');
    }
    //******** open confrimation model ********
    openModel() {
        this.modal = document.getElementById("myModal");
        this.modal.style.display = "block";
        this.general.loadingDismiss();
    }
    openUpdtModel() {
        this.updateModel = document.getElementById("UpdateModel");
        this.updateModel.style.display = "block";
        setTimeout(() => {
            this.spinerShow = false;
        }, 500);
        this.general.loadingDismiss();
    }
    // *********** close saving Model **********
    closeModel() {
        this.modal.style.display = "none";
    }
    // ********** close Updating Model **********
    closeUpdteModel() {
        this.updateModel.style.display = "none";
    }
    // ********** Method for View Attedance Statement ***********
    ViewStatemnt() {
        let date = this.attndDate.split('T')[0];
        localStorage.setItem('sheet', JSON.stringify(this.facData));
        localStorage.setItem('date', JSON.stringify(date));
        this.router.navigate(['attendance-statement']);
    }
    // ************** Method for View Attedance Sheet ************
    ViewSheet() {
        this.router.navigate(['/view-attdance']);
    }
};
AttendancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe }
];
AttendancePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, { static: false },] }],
    refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['refresh', { static: false },] }]
};
AttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-attendance',
        template: _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AttendancePage);



/***/ }),

/***/ 56994:
/*!*********************************************************!*\
  !*** ./src/app/faculty/attendance/attendance.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-row_up {\n  margin-top: 10px;\n}\n\n.span_line {\n  margin: 5px;\n  font-size: 13px;\n  margin-top: 60px;\n}\n\nion-item.pl-0.ion-untouched.ion-pristine.ion-valid.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated {\n  position: absolute;\n  bottom: -11px;\n}\n\nion-item.pl-0.item.md.ion-focusable.item-interactive.item-datetime.item-has-value.hydrated.ion-valid.ion-touched.ion-dirty {\n  height: 6px;\n  position: relative;\n  top: -10px;\n}\n\n.lable_color {\n  color: black;\n}\n\nion-select.drop.select_width.ng-untouched.ng-pristine.ng-valid.ion-untouched.ion-pristine.ion-valid.md.hydrated {\n  width: 35% !important;\n}\n\n.span_bold {\n  font-weight: bold;\n}\n\nion-select.drop.md.hydrated {\n  width: 35%;\n  background: #ae5c50;\n  color: #fff;\n  padding: 5px 10px;\n  margin-top: 0px !important;\n  opacity: 1;\n  float: right;\n  height: 25px;\n  font-size: 13px;\n}\n\n.label_text {\n  padding: 5px 10px;\n  margin-top: 0px !important;\n  opacity: 1;\n  float: right;\n  height: 25px;\n  font-size: 13px;\n  color: #000000;\n}\n\n.abst {\n  display: inline;\n  list-style-type: none;\n}\n\n.abst:after {\n  content: \", \";\n}\n\n.abst:last-child:after {\n  content: \" \";\n}\n\n.align_view {\n  margin-left: 83px !important;\n}\n\n.align_view1 {\n  margin-left: 20px !important;\n}\n\n.blue-bg {\n  background: #fdd2d26e;\n  padding: 10px;\n}\n\n.save_btn {\n  text-align: center;\n  text-transform: none;\n  align-items: center;\n}\n\n.back-btn {\n  background: none;\n  color: var(--ion-color-dark-tint);\n  font-size: 12px;\n  padding: 5px 25px;\n  border: 1px solid var(--ion-color-medium-shade);\n}\n\n.save {\n  height: 75%;\n  margin: 0px;\n  font-size: 12px;\n  position: relative;\n  top: -5px;\n}\n\n.ion-col-p {\n  font-weight: bold;\n  font-size: 12px;\n  box-sizing: border-box;\n  min-width: 10px;\n  border-color: whitesmoke;\n  background-color: white;\n}\n\nion-col.ion-col-p.colpadding.md.hydrated {\n  padding: 8px;\n}\n\n.hour-col .ion-col-p {\n  font-weight: bold;\n  font-size: 12px;\n  background-color: white;\n  padding: 8px 8px;\n}\n\n.item2, .item1 {\n  overflow: scroll;\n  height: 42vh;\n}\n\n.item1 {\n  grid-area: 1/1/2/2;\n}\n\n.item-absent {\n  background: #fcf8e3;\n}\n\n.border {\n  border-bottom: 1px solid #8d8989;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 105%;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n\n.label_ion {\n  font-size: 12px;\n  white-space: normal;\n}\n\n.label_ion:hover {\n  background-color: red;\n}\n\n.label_ion:hover {\n  --background-color: rgb(228, 25, 25)!important;\n}\n\n.label_ion:hover {\n  background-color: #f02222 !important;\n}\n\n.togle_btn {\n  margin-top: -32px;\n  opacity: -0.9;\n  height: 3px;\n  width: 135px;\n}\n\n.hover_stud:hover {\n  background-color: grey !important;\n}\n\n.att ion-col {\n  border: 1px solid #7c7c7c;\n  font-size: 12px;\n  color: var(--ion-color-dark-tint);\n}\n\n.blue-bg1 {\n  font-weight: bold;\n}\n\n.row-text {\n  white-space: normal;\n  line-height: 15px;\n  font-size: 9px;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 90%;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 999;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n.modal-content ion-col {\n  margin-right: 3px;\n  margin-top: 3px;\n  background: #ffebeb6e;\n  color: #434344;\n}\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.align_btn {\n  margin-left: 35%;\n}\n\n.view_button {\n  font-size: 13px;\n  width: 100%;\n}\n\n.alert-success {\n  padding: 0.2em 0.5em;\n  background-color: #d6ffa2;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUdJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFPQTtFQUNDLGlCQUFBO0FBSkQ7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpKOztBQVFBO0VBQVEsZUFBQTtFQUFpQixxQkFBQTtBQUh6Qjs7QUFJQTtFQUFjLGFBQUE7QUFBZDs7QUFDQTtFQUF5QixZQUFBO0FBR3pCOztBQURBO0VBQ0ksNEJBQUE7QUFJSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBREE7RUFBUyxxQkFBQTtFQUFxQixhQUFBO0FBTTlCOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTEE7RUFBVSxnQkFBQTtFQUNOLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUFTSjs7QUFQQTtFQUFPLFdBQUE7RUFBYyxXQUFBO0VBQWMsZUFBQTtFQUFpQixrQkFBQTtFQUFxQixTQUFBO0FBZXpFOztBQWJBO0VBSUksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQVlKOztBQVRBO0VBQ0ksWUFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWFKOztBQVZBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWEE7RUFBUyxrQkFBQTtBQWVUOztBQWRBO0VBQ0ksbUJBQUE7QUFpQko7O0FBZEE7RUFDSSxnQ0FBQTtBQWlCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBaEJJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBa0JOOztBQWpCTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFtQlI7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFpQko7O0FBZkk7RUFDSSxxQkFBQTtBQWlCUjs7QUFkQTtFQUNJLDhDQUFBO0FBaUJKOztBQWZBO0VBQ0ksb0NBQUE7QUFrQko7O0FBZkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFmQTtFQUNJLGlDQUFBO0FBa0JKOztBQWRJO0VBQ0kseUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUNBQUE7QUFnQlI7O0FBYkE7RUFDSSxpQkFBQTtBQWdCSjs7QUFaQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZUo7O0FBWkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkE7RUFDSSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFlBQUE7RUFBYyxlQUFBO0VBQ2Qsa0JBQUE7RUFBb0Isd0JBQUE7RUFDcEIsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsb0NBQUE7RUFBbUMscUJBQUE7QUF5QnZDOztBQXZCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQTBCSjs7QUF4QkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTJCSjs7QUF6QkE7O0VBRUksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTRCSjs7QUExQkE7RUFDSSxnQkFBQTtBQTZCSjs7QUExQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQTZCSjs7QUEzQkE7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQThCSiIsImZpbGUiOiJhdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tcm93X3Vwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc3Bhbl9saW5le1xuICAgIC8vICAgcGFkZGluZzogMTBweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcblxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODAsIDExNywgMjQwKTtcbn1cblxuaW9uLWl0ZW0ucGwtMC5pb24tdW50b3VjaGVkLmlvbi1wcmlzdGluZS5pb24tdmFsaWQuaXRlbS5tZC5pb24tZm9jdXNhYmxlLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1kYXRldGltZS5pdGVtLWhhcy12YWx1ZS5oeWRyYXRlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTExcHg7XG5cbn1cbmlvbi1pdGVtLnBsLTAuaXRlbS5tZC5pb24tZm9jdXNhYmxlLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1kYXRldGltZS5pdGVtLWhhcy12YWx1ZS5oeWRyYXRlZC5pb24tdmFsaWQuaW9uLXRvdWNoZWQuaW9uLWRpcnR5IHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTBweDtcbn1cblxuLmxhYmxlX2NvbG9ye1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIC8vICBsZWZ0OjIwcHg7XG59XG5cbmlvbi1zZWxlY3QuZHJvcC5zZWxlY3Rfd2lkdGgubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi12YWxpZC5tZC5oeWRyYXRlZHtcbiAgICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG4gICBcbn1cblxuLnNwYW5fYm9sZCB7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zZWxlY3QuZHJvcC5tZC5oeWRyYXRlZCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBiYWNrZ3JvdW5kOiAjYWU1YzUwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi10b3A6MHB4IWltcG9ydGFudDsgXG4gICAgb3BhY2l0eToxO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubGFiZWxfdGV4dHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW4tdG9wOjBweCFpbXBvcnRhbnQ7IFxuICAgIG9wYWNpdHk6MTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuICAgICAgICAgICAgXG4uYWJzdCB7IGRpc3BsYXk6IGlubGluZTsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG4uYWJzdDphZnRlciB7IGNvbnRlbnQ6IFwiLCBcIjsgfVxuLmFic3Q6bGFzdC1jaGlsZDphZnRlciB7IGNvbnRlbnQ6IFwiIFwiOyB9XG5cbi5hbGlnbl92aWV3IHtcbiAgICBtYXJnaW4tbGVmdDogODNweCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ25fdmlldzEge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ibHVlLWJne2JhY2tncm91bmQ6I2ZkZDJkMjZlO3BhZGRpbmc6MTBweDt9XG4uc2F2ZV9idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuLmJhY2stYnRue2JhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5zYXZleyBoZWlnaHQ6IDc1JTsgIG1hcmdpbjogMHB4OyAgZm9udC1zaXplOiAxMnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7ICB0b3A6IC01cHg7fVxuXG4uaW9uLWNvbC1we1xuICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgLy8gbWFyZ2luOiA1cHg7XG4gICAgLy8gd2lkdGg6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29sLmlvbi1jb2wtcC5jb2xwYWRkaW5nLm1kLmh5ZHJhdGVkIHtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4uaG91ci1jb2wgLmlvbi1jb2wtcHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XG59XG5cbi5pdGVtMiwuaXRlbTEge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA0MnZoO1xufVxuLml0ZW0xIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4uaXRlbS1hYnNlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmY2Y4ZTM7XG59XG5cbi5ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGQ4OTg5O1xufVxuXG4udGh1bW5haWxze1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLmxpc3QtdGh1bWJuYWlse1xuICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLmltZy10aHVtYntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjExLCAxMiwgMTIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgd2lkdGg6IDEwNSU7IFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjowIDJweCAwIDA7IFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICB9XG59XG5cbi5sYWJlbF9pb257XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgXG4gICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cbn1cbi5sYWJlbF9pb246aG92ZXJ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyNSwgMjUpIWltcG9ydGFudDtcbn1cbi5sYWJlbF9pb246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAzNCwgMzQpIWltcG9ydGFudDtcbn1cblxuLnRvZ2xlX2J0bntcbiAgICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgICBvcGFjaXR5OiAtMC45O1xuICAgIGhlaWdodDozcHg7XG4gICAgd2lkdGg6MTM1cHg7XG59XG5cbi5ob3Zlcl9zdHVkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleSFpbXBvcnRhbnQ7XG59XG5cbi5hdHR7IFxuICAgIGlvbi1jb2x7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDEyNCwgMTI0LCAxMjQpO1xuICAgICAgICAvLyBwYWRkaW5nOjhweDtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTsgIFxuICAgIH1cbn1cbi5ibHVlLWJnMXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucm93LXRleHR7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDlweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogOTAlO1xufVxuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDk5OTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG4ubW9kYWwtY29udGVudCBpb24tY29seyBcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZWJlYjZlO1xuICAgIGNvbG9yOiAjNDM0MzQ0O1xufVxuLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsaWduX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxuLnZpZXdfYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYWxlcnQtc3VjY2VzcyB7XG4gICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjU1LCAxNjIpO1xuICAgIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ 43799:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/attendance/attendance.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"class-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Attendance</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" size=\"small\" class=\"view_button\" (click)=\"ViewSheet()\" color=\"tertiary\">\n          View Sheet\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" size=\"small\" class=\"view_button\" (click)=\"ViewStatemnt()\" color=\"tertiary\">\n          View Statement\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <span *ngIf=\"displayFac\">\n    <ion-row class=\"ion-row_up\">\n      <ion-col size=\"7\">\n        <span class=\"span_line\"><span class=\"span_bold\">Class:</span> {{facData.class}}</span>\n      </ion-col>\n      <ion-col>\n        <span class=\"span_line\"> <span class=\"span_bold\">Batch:</span> {{facData.batch}}</span>\n      </ion-col>\n    </ion-row>\n  </span>\n  <!-- Card Format --->\n  <span *ngIf=\"hide\">\n    <ion-card padding class=\"card_hour\">\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\">Progressive Peroid</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"label_text\"> {{PHour}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\"> Date</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-datetime \n          style=\"background: #ae5c50;\n                color: #fff;\n                padding: 5px 10px;\n                margin-top: 0px !important;\n                opacity: 1;\n                float: right;\n                height: 25px;\n                font-size: 13px;\n                width:72%;\" display-format=\"DD MMM YYYY\"\n            (ionChange)=\"displayList()\" min=\"{{fromDate}}\" max=\"{{setDate}}\" [(ngModel)]=\"attndDate\"></ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"pl-0\">\n          <ion-label class=\"lable_color span_bold\">Interval</ion-label>\n          <ion-select [(ngModel)]=\"inrval\" interface=\"popover\" class=\"drop select_width\"\n          (ionChange)=\"intervalDetails(interval)\"\n          *ngIf=\"showTot\">\n\n            <ion-select-option *ngFor=\"let t of interval\" selected=\"t.id == inrval\" [value]=\"t.id\"\n              class=\"selecte_option\">{{t.name}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row class=\"blue-bg\">\n            <ion-col size=\"4\"></ion-col>\n            <ion-col size=\"5\">\n              <ion-button class=\"mt-0\" [disabled]=\"disabled\" tappable shape=\"round\" size=\"small\" fill=\"outline\"\n                (click)=\"GetNewAttdance()\" color=\"tertiary\" >Continue</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <div class=\"alert-success\">\n      <p style=\"text-align: center;\">Summary of Attendance Entered on ({{attndDate|date: 'dd/MM/yyyy'}})</p>\n    </div>\n    <!----List Of Attendances -->\n    <div class=\"thumnails\">\n      <div class=\"list-thumbnail\">\n        <div class=\"img-thumb\">\n          <ion-grid>\n            <ion-row class=\"blue-bg1 row-text att\">\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                Progressive Peroid\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                Interval\n              </ion-col>\n              <!-- <ion-col size=\"2\" class=\"ion-text-center\">\n                Teacher\n              </ion-col> -->\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                Created\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                Last Updated\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                Action\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let a of TakenAttdance\" class=\"att row-text\">\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                {{a.progressive_hour}}\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                {{a.interval_name}}\n              </ion-col>\n              <!-- <ion-col size=\"2\" class=\"ion-text-center\">\n                {{a.faculty_name}}\n              </ion-col> -->\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                {{a.created_at | date: \"d-MMM, h:mm a\"}}\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-text-center\">\n                {{a.updated_at | date: \"d-MMM, h:mm a\"}}\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                <ion-button [disabled]=\"a.faculty_id!=facId\" size=\"small\" (click)=\"hide=false;UpdateAttd(a)\"\n                  color=\"tertiary\">\n                  <ion-icon name=\"add-circle-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n    <!--- End List Of Attendances -->\n  </span>\n\n  <!----- Attedance Student Select Page ---->\n  <span *ngIf=\"!hide\">\n    <ion-card padding class=\"card_hour\">\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\">Progressive Peroid</ion-label>\n        </ion-col>\n        <ion-col class=\"label_text\">{{PHour}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\"> Date</ion-label>\n        </ion-col>\n        <ion-col class=\"label_text\"> {{displyDate|date: 'dd/MM/yyyy'}} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"lable_color span_bold\"> Interval </ion-label>\n        </ion-col>\n        <ion-col class=\"label_text\">{{interval_name}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"save_btn blue-bg\">\n          <ion-chip class=\"back-btn\" (click)=\"back()\">\n            <ion-label>Back</ion-label>\n          </ion-chip>\n          <ion-button *ngIf=\"saveBtn\" class=\"save\" shape=\"round\" (click)=\"Save()\" color=\"tertiary\">Save</ion-button>\n          <ion-button shape=\"round\" *ngIf=\"update\" class=\"save\" (click)=\"UpdateSave()\" color=\"tertiary\">Update\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-toolbar class=\"search\">\n          <ion-searchbar class=\"search-col\" [(ngModel)]=\"searchTerm\" (ionInput)=\"getItems($event)\" color=\"primary\"\n            debounce=\"500\"  ></ion-searchbar>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col class=\"ion-col-p colpadding\">\n            <ion-checkbox [(ngModel)]=\"chec\" (ionChange)=\"selectAll(chec)\"></ion-checkbox> Students\n            &nbsp;&nbsp;&nbsp;{{getStudentList?.length}} entries\n            <div class=\"item1\">\n              <div class=\"thumnails\">\n                <div class=\"list-thumnail\">\n                  <ion-progress-bar *ngIf=\"ShowProgrs\" type=\"indeterminate\"></ion-progress-bar>\n                </div>\n                <ion-list>\n                  <ion-grid *ngFor=\"let s of getStudentList; let i = index;\" class=\"animated lightSpeedIn item-wrap\">\n                    <ion-row class=\"border\">\n                      <ion-col size=\"12\">\n                        <ion-checkbox *ngIf=\"chec\" disabled=\"true\" checked=\"true\"></ion-checkbox>\n                        <ion-label class=\"label_ion\" (click)=\"pushAbsent(s,i)\">{{s.student_name}}</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-list>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col class=\"ion-col-p colpadding\">\n            <ion-checkbox [(ngModel)]=\"check2\" (ionChange)=\"selectAllabsent(check2)\"></ion-checkbox> Absentees &nbsp;\n            {{PushAbsent.length}} entries\n            <div class=\"item1 item-absent\">\n              <div class=\"thumnails\">\n                <div class=\"list-thumnail\">\n                  <ion-progress-bar *ngIf=\"ShowProgrs\" type=\"indeterminate\"></ion-progress-bar>\n                  <ion-grid class=\"animated lightSpeedIn item-wrap\" *ngFor=\"let s of PushAbsent;let i =index;\">\n                    <ion-row class=\"hover_stud border\">\n                      <ion-col size=\"12\">\n                        <ion-checkbox *ngIf=\"check2\" disabled=\"true\" checked=\"true\"></ion-checkbox>\n                        <ion-label class=\"label_ion\" (click)=\"pushPresent(s.check,s,i)\">{{s.student_name}}</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n            </div>\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n              <ion-fab-button>\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-fab *ngIf=\"chec\" (click)=\"pushAll()\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button>\n         <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-fab *ngIf=\"check2\" (click)=\"pushpresentAll()\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button>\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </span>\n\n  <div id=\"myModal\" class=\"modal\">\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span (click)=\"closeModel()\" class=\"close\">&times;</span>\n      <h6>ATTENDANCE SUMMARY</h6>\n      <span style=\"color: red;\">{{err}}</span>\n      <!-- <ion-row>\n        <ion-col>\n          <strong>Description</strong>\n        </ion-col>\n        <ion-col>\n          <strong>Details</strong>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>Class</ion-col>\n        <ion-col>{{facData?.class}}  {{facData?.batch}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Progressive Peroid</ion-col>\n        <ion-col>{{PHour}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Attendance Date</ion-col>\n        <ion-col>{{attndDate | date: 'dd/MM/yyyy'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Interval</ion-col>\n        <ion-col>{{interval_name}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Total No of Absentees</ion-col>\n        <ion-col>{{PushAbsent.length}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Absentees</ion-col>\n        <ion-col>\n          <ion-spinner *ngIf=\"spinerShow\" name=\"lines-small\"></ion-spinner>\n          <span *ngFor=\"let a of PushAbsent\" class=\"abst\">\n            {{a.roll_no}}\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"align_btn\" (click)=\"confirmSave()\" color=\"tertiary\">Confirm</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div id=\"UpdateModel\" class=\"modal\">\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span (click)=\"closeUpdteModel()\" class=\"close\">&times;</span>\n      <h6>ATTENDANCE SUMMARY</h6>\n      <!-- <ion-row>\n        <ion-col>\n          <strong> Description</strong>\n        </ion-col>\n        <ion-col>\n          <strong> Details</strong>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>Class</ion-col>\n        <ion-col>{{facData?.class}} {{facData?.batch}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Progressive Peroid</ion-col>\n        <ion-col>{{UpdateData.progressHur}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Attendance Date</ion-col>\n        <ion-col>{{UpdateData.Date | date: 'dd/MM/yyyy'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Interval</ion-col>\n        <ion-col>{{UpdateData.interval}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Total No of Absentees</ion-col>\n        <ion-col>{{PushAbsent.length}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Absentees</ion-col>\n        <ion-col>\n          <ion-spinner *ngIf=\"spinerShow\" name=\"lines-small\"></ion-spinner>\n          <span *ngFor=\"let a of PushAbsent\" class=\"abst\">\n            {{a?.roll_no}}\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"align_btn\" (click)=\"confirmUpdate()\" color=\"tertiary\">Confirm</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faculty_attendance_attendance_module_ts-es2015.js.map