(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_home_home_module_ts"],{

/***/ 424:
/*!******************************************!*\
  !*** ./src/app/proj/home/home.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 73394);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: "",
                    component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 73394:
/*!****************************************!*\
  !*** ./src/app/proj/home/home.page.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 61559);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 97090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/firebase/ngx */ 41636);









let HomePage = class HomePage {
    constructor(popoverController, menu, generalts, auth, router, alertController, firebaseX) {
        this.popoverController = popoverController;
        this.menu = menu;
        this.generalts = generalts;
        this.auth = auth;
        this.router = router;
        this.alertController = alertController;
        this.firebaseX = firebaseX;
        this.segs = "Regular";
        this.add = false;
        this.submenu = false;
        this.Institution = [];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_tok");
        this.c_stud = localStorage.getItem("c_stud");
        this.firebase_token(this.c_stud);
        console.log("ionViewWillEnter", ["", null, undefined].indexOf(this.c_stud) > -1, this.c_stud);
        // this.get_sms_c(this.c_stud);
        if (["", null, undefined].indexOf(this.c_stud) > -1) {
            this.get_stud();
            // this.menu.enable(true);
            // this.menu.swipeGesture(true);
            //this.menu.open('first');
            var prr = localStorage.getItem("profile");
            console.log(prr, 'fghh');
            setTimeout(() => {
                if (["", null, undefined].indexOf(prr) > -1) {
                    console.log('fffashok');
                    this.stud();
                }
            }, 2000);
        }
        // this.get_sms_c();
    }
    menuIs() {
        this.newItemEvent.emit('item1');
    }
    get_sms_c(st_id) {
        // return
        var data = "";
        if (st_id) {
            this.auth
                .g_get(data, "student/" + st_id + "/notifications/count/unread", this.token)
                .subscribe(smscount => {
                this.sms_count = smscount.count;
                console.log(smscount.count, "smscount");
            }, error => {
                // load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status == 401) {
                    this.auth.loginAgain();
                    //this.router.navigateByUrl('/login');
                }
                else if (error.status_code == 400) {
                    this.err = error.message;
                }
                else if (error.status === 401 || error.status === 422) {
                    // this.error = true;
                    // this.loginError = "Invalid Credentials. Please Enter valid Details ";
                    console.log("error log list: ", error);
                    console.log("error log list: ", error.statusText);
                    console.log("error log list: ", error.message);
                    //  localStorage.clear();
                    // this.generalts.loginAgain();  
                    // this.hide = true; 
                    // this.location.back();
                    this.router.navigateByUrl('/opem');
                }
            });
        }
        // console.log("fasd");
    }
    ionViewDidEnter() {
        this.get_sms_c(this.c_stud);
        this.get_prof(this.c_stud);
        this.menu.enable(true);
        this.menu.swipeGesture(true);
        console.log("ionViewDidEnter fg");
    }
    rout(val) {
        console.log(val, "val");
        this.router.navigate([val]);
    }
    stud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let inputArray = [];
            this.c_stud = localStorage.getItem("c_stud");
            var ss = JSON.parse(localStorage.getItem("stu"));
            console.log(localStorage.getItem("stu"), 'As111');
            if (ss) {
                console.log(this.student_l, "ASd", ss);
                for (let name of ss) {
                    // console.log(name, "nameloop", name.student_id.toString(), this.c_stud);
                    if (name.student_id == this.c_stud) {
                        console.log(name.student_id, "name.student_id");
                        inputArray.push({
                            type: "radio",
                            label: name.student_name,
                            value: name.student_id,
                            checked: true
                        });
                    }
                    else {
                        inputArray.push({
                            type: "radio",
                            label: name.student_name,
                            value: name.student_id,
                            checked: false
                        });
                    }
                }
                console.log(inputArray, "inputArray");
                const alert = yield this.alertController.create({
                    header: "Select Student",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "OK",
                            handler: data => {
                                console.log("out", data);
                                localStorage.setItem("c_stud", data);
                                this.get_prof(data);
                                this.get_sms_c(data);
                            }
                        }
                    ],
                    inputs: inputArray
                });
                alert.present();
            }
        });
    }
    firebase_token(data) {
        console.log("firebase_token", data);
        // "update-mobile-notification-token";
        this.firebaseX
            .getToken()
            .then(g_token => {
            console.log(`The token is ${g_token}`);
            if (g_token) {
                var data_token = { token: g_token };
                this.auth
                    .g_postt(data_token, "update-mobile-notification-token", this.token)
                    .subscribe(response => {
                    console.log(response, "token");
                });
            }
            else {
                setTimeout(() => {
                    this.firebaseX.onTokenRefresh().subscribe((g_token) => {
                        console.log(`Got a new token ${g_token}`);
                        var data_token = { token: g_token };
                        this.auth
                            .g_postt(data_token, "update-mobile-notification-token", this.token)
                            .subscribe(response => {
                            console.log(response, "token");
                        });
                    });
                }, 1500);
            }
        }) // save the token server-side and use it to push notifications to this device
            .catch(error => console.error("Error getting token", error));
        // this.firebaseX
        //   .onMessageReceived()
        //   .subscribe(data => console.log(`User opened a notification ${data}`));
        this.firebaseX.onNotificationOpen().subscribe(data => console.log(data));
    }
    get_prof(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var data = "";
            var link = "student/" + id + "/profile";
            console.log(link, "link", "this.c_stud ", this.c_stud);
            this.auth.g_get(data, link, this.token)
                .subscribe(prof => {
                load.dismiss();
                localStorage.setItem("profile", JSON.stringify(prof));
                console.log(prof, "prof");
                this.attendance = prof.attendance['percetage'];
            }, error => {
                load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status_code == 400) {
                    this.err = error.message;
                }
                else if (error.status === 401 || error.status === 422) {
                    // this.error = true;
                    // this.loginError = "Invalid Credentials. Please Enter valid Details ";
                    console.log("error log list: ", error);
                    console.log("error log list: ", error.statusText);
                    console.log("error log list: ", error.message);
                    //  localStorage.clear();
                    // this.generalts.loginAgain();  
                    // this.hide = true; 
                    // this.location.back();
                    this.router.navigateByUrl('/opem');
                }
            });
        });
    }
    get_stud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var data = "";
            this.auth.g_get(data, "students", this.token).subscribe(sa => {
                load.dismiss();
                console.log(sa, "da");
                if ([null, undefined, ""].indexOf(sa[0]) == -1) {
                    var sas = JSON.stringify(sa);
                    console.log(sas, 'dfde');
                    localStorage.setItem("stu", sas);
                    localStorage.setItem("c_stud", sa[0].student_id);
                    //  alert("password");
                    this.student_l = sa;
                    console.log(sa[0].student_id, "sassas");
                }
                else if ([null, undefined, ""].indexOf(sa[0]) > -1) {
                    // alert("No Students found");
                    this.NostudentAlert();
                }
            }, error => {
                load.dismiss();
                console.error("Error!", error.status_code, error.message);
                if (error.status_code == 400) {
                    this.err = error.message;
                }
                else if (error.status === 401 || error.status === 422) {
                    // this.error = true;
                    // this.loginError = "Invalid Credentials. Please Enter valid Details ";
                    console.log("error log list: ", error);
                    console.log("error log list: ", error.statusText);
                    console.log("error log list: ", error.message);
                    //  localStorage.clear();
                    // this.generalts.loginAgain();  
                    // this.hide = true; 
                    // this.location.back();
                    this.router.navigateByUrl('/opem');
                }
            });
        });
    }
    NostudentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'No Student',
                message: 'Logout',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'close app',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            localStorage.clear();
                            this.router.navigate(['/opem']);
                            navigator["app"].exitApp();
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Logout',
                        handler: () => {
                            localStorage.clear();
                            this.router.navigate(['/opem']);
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // async presentPopover() {
    //   console.log("asdfasd");
    //   const popover = await this.popoverController.create({
    //     component: PopComponent
    //     //cssClass: "mod"
    //     // event: ev,
    //     //  translucent: true
    //   });
    //   return await popover.present();
    // }
    address() {
        console.log("asdfasd");
        this.add = true;
    }
    segmentChanged() {
        console.log("asdf");
    }
    presentPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.submenu = !this.submenu;
            if (!this.submenu) {
                this.generalts.popoverController.dismiss();
                return;
            }
            this.generalts.presentPopover1().then((data) => {
                console.log(this.generalts.instituteHit, "da;");
                if (this.generalts.instituteHit) {
                    this.stud();
                    this.generalts.instituteHit = !this.generalts.instituteHit;
                }
                console.log(this.generalts.instituteHit, "da 123");
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_4__.Firebase }
];
HomePage.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 97090:
/*!******************************************!*\
  !*** ./src/app/proj/home/home.page.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #620b23;\n}\n\nion-card {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.card1 {\n  background: linear-gradient(to bottom, #cc6f61 0%, #54231c 100%);\n}\n\n.img1 {\n  width: 20px;\n  margin: 0px 35%;\n  margin-top: 20px;\n}\n\n.label {\n  margin-top: 5px;\n  font-size: 14px;\n  color: #ffff;\n}\n\n.text1 {\n  margin-bottom: 10px;\n  text-align: center;\n  margin-top: 10px;\n  color: white;\n}\n\n.sms_c {\n  position: absolute;\n  top: 2px;\n  right: 45px;\n  color: #ae5c50;\n  background: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 2;\n  font-size: 10px;\n}\n\nion-segment {\n  color: #fff;\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked {\n  background: #bd5757;\n  color: #fff;\n  text-transform: unset;\n}\n\nion-segment .segment-button-checked:nth-child(1) {\n  border-radius: 0;\n}\n\nion-segment .segment-button-checked:nth-child(2) {\n  border-radius: 0;\n}\n\nion-segment-button {\n  text-transform: unset !important;\n}\n\n.picker_input {\n  border: 1px solid #252525 !important;\n  border-radius: 40px;\n  margin-top: 20px;\n}\n\n.picker_input ion-input {\n  border: 1px solid transparent;\n  padding: 0;\n}\n\n.picker_input ion-icon {\n  margin: 5px !important;\n}\n\n.topicons_design {\n  margin-top: 20px;\n  color: #bdbdbd;\n}\n\n.topicons_design ion-icon {\n  font-size: 35px;\n  border: 1px solid #252525;\n  border-radius: 50%;\n  padding: 10px;\n}\n\n.topicons_design ion-label {\n  color: #252525;\n}\n\n.icons_design .active {\n  color: var(--ion-color-primary);\n  border: none !important;\n}\n\n.icons_design ion-col {\n  margin-top: 20px;\n  color: #bdbdbd;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.icons_design ion-col ion-icon {\n  font-size: 35px;\n}\n\n.prof {\n  font-size: 22px;\n  margin-top: 4px;\n}\n\n.seg {\n  background: #a93d3d;\n  margin-top: -4px;\n  height: 69px;\n  border-radius: 0;\n}\n\n.seg-btn {\n  width: 50%;\n}\n\n.line {\n  border-right: 1px solid #8b7777;\n}\n\n.line1 {\n  border-top: 1px solid #8b7777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUFDRDs7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUVFLGdFQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDRSxlQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUxFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBT0EscUJBQUE7QUFDSjs7QUFQSTtFQUNFLGdCQUFBO0FBU047O0FBUEk7RUFDRSxnQkFBQTtBQVNOOztBQUpBO0VBQ0UsZ0NBQUE7QUFPRjs7QUFKQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBT0o7O0FBSkU7RUFDRSxzQkFBQTtBQU1KOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7QUFLSjs7QUFEQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUFJRjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDRSxlQUFBO0FBR047O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBO0VBQ0UsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLDZCQUFBO0FBSUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogIzYyMGIyMztcbn1cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZDEge1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjc4NDcwIDAlLCAjYTkyYzE2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjY2M2ZjYxIDAlLCAjNTQyMzFjIDEwMCUpO1xufVxuLmltZzEge1xuICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW46IDBweCAzNSU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuLnRleHQxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc21zX2Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAycHg7XG4gICAgcmlnaHQ6IDQ1cHg7XG4gICAgY29sb3I6ICNhZTVjNTA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuaW9uLXNlZ21lbnQge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYmQ1NzU3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICNiZDU3NTc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICB9XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLnBpY2tlcl9pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTI1MjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICBpb24taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4udG9waWNvbnNfZGVzaWduIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjUyNTI1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICMyNTI1MjU7XG4gIH1cbn1cblxuLmljb25zX2Rlc2lnbiAuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc19kZXNpZ24ge1xuICBpb24tY29sIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB9XG4gIH1cbn1cbi5wcm9mIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uc2VnIHtcbiAgYmFja2dyb3VuZDogI2E5M2QzZDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIGhlaWdodDogNjlweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uc2VnLWJ0biB7XG4gIHdpZHRoOiA1MCU7XG5cbn1cbi5saW5lIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzhiNzc3Nztcbn1cbi5saW5lMSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOGI3Nzc3O1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ 61559:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/home/home.page.html ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"menuIs()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Home </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      //(click)=\"presentPopover()\" routerLink=\"/login\"\n      <ion-button (click)=\"stud()\">\n        <ion-icon name=\"person\" class=\"prof\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover()\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <img src=\"assets/images/clg.png\"  /> -->\n  <img src=\"assets/images/banner_2.png\" style=\"width: 100%;\n  height: 202px;\" alt=\"\" />\n  \n    <!-- <ion-row class=\"seg\">\n      <ion-col class=\"seg-btn\">\n        <div style=\"text-align: center;\n        margin-bottom: 17px; margin-top: -7px;\">\n        <img class=\"img1\" src=\"assets/images/profile.png\" />\n        <ion-label class=\"label\">Profile</ion-label>\n        </div>\n        \n      </ion-col>\n      <ion-col>\n        <div style=\"text-align: center;\n        margin-bottom: 17px; margin-top: -11px;\">\n        <img class=\"img1\" src=\"assets/images/notification.png\" />\n        <ion-label class=\"label\">Notifications</ion-label>\n        <span *ngIf=\"sms_count\" class=\"sms_c\">{{sms_count}}</span>\n        </div>\n      </ion-col>\n    </ion-row> -->\n  \n  <ion-segment class=\"seg\" value=\"profile\">\n    <ion-segment-button value=\"profile\" class=\"seg-btn\" (click)=\"rout('/profile')\" >\n      <img class=\"img1\" src=\"assets/images/profile.png\" />\n      <ion-label class=\"label\">Profile</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"notification\" (click)=\"rout('/noti')\">\n      <img class=\"img1\" src=\"assets/images/notification.png\" />\n      <ion-label class=\"label\">Notifications</ion-label>\n      <span *ngIf=\"sms_count\" class=\"sms_c\">{{sms_count}}</span>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid style=\"background: #620b23; height: 57%\">\n    <ion-row></ion-row>\n    <ion-row></ion-row>\n    <ion-row style=\"margin-top: 60px;\n    margin-bottom: 60px;\">\n      <ion-col size=\"4\" class=\"line\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\" (click)=\"rout('/attendanc')\">\n       \n          <img class=\"img1\" src=\"assets/images/attendance.png\" />\n          <ion-label class=\"label\"> \n            <!-- <p style=\"color: #ffff;margin-top: 25px;\">96%</p> -->\n            Attendance\n            <!-- <p style=\"color: #ffff; \" *ngIf=\"attendance\n            \">{{attendance}}%</p> -->\n          </ion-label>\n          \n        </div>\n        \n      </ion-col>\n      <ion-col size=\"4\" class=\"line\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/circular')\">\n          <img class=\"img1\" src=\"assets/images/circular.png\" />\n          <ion-label class=\"label\">Assignment / Notice</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/calendar')\">\n          <img class=\"img1\" src=\"assets/images/calendar.png\" />\n          <ion-label class=\"label\">Calendar</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"line line1\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/timetable')\">\n          <img class=\"img1\" src=\"assets/images/timetable.png\" />\n          <ion-label class=\"label\">TimeTable</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"line line1\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\n        margin-top: -5px\"\n        (click)=\"rout('/marks-list')\">\n          <img class=\"img1\" src=\"assets/images/progress-report.png\" />\n          <ion-label class=\"label\">Progress Report</ion-label>\n          </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"line1\"> \n        <div style=\"text-align: center;\n        margin-bottom: 17px;\"\n        (click)=\"rout('/fee-payment')\">\n          <img class=\"img1\" src=\"assets/images/fee.png\" />\n          <ion-label class=\"label\">Fee</ion-label>\n          </div>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_home_home_module_ts-es2015.js.map