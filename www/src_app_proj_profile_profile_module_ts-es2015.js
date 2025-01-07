(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_profile_profile_module_ts"],{

/***/ 63990:
/*!********************************************************!*\
  !*** ./src/app/proj/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4251);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 20000:
/*!************************************************!*\
  !*** ./src/app/proj/profile/profile.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 63990);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4251);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4251:
/*!**********************************************!*\
  !*** ./src/app/proj/profile/profile.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 675);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 28580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









let ProfilePage = class ProfilePage {
    constructor(actionSheetController, platform, camera, router, authService, generalts) {
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.camera = camera;
        this.router = router;
        this.authService = authService;
        this.generalts = generalts;
        this.profile_img = "";
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_tok");
        this.get_prof();
        // this.userData = JSON.parse(localStorage.getItem("profile"));
        //  console.log(this.userData, this.userData.student_name, "user");
        //
        // student_name: "FATHIMATH MASNA ANASS";
        // register_no: null;
        // joining_date: "2019-11-25";
        // dob: "1996-02-21";
        // institution_name: "St. Agnes College (Autonomous) - UG";
        // programme: "B.Com.";
        // combination: "B.Com.";
        // academic_year: "2019 - 2020";
        // academic_period: "SEMESTER V";
        console.log(this.phone, this.email, "userData");
    }
    get_prof() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            var data = "";
            var c_stu = localStorage.getItem("c_stud");
            var link = "student/" + c_stu + "/profile";
            console.log(link, "link", "this.c_stud ", c_stu);
            this.authService.g_get(data, link, this.token).subscribe(prof => {
                load.dismiss();
                localStorage.setItem("profile", JSON.stringify(prof));
                this.userData = prof['studentDetails'];
                console.log(prof, "prof1");
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
    logot() {
        localStorage.clear();
        this.router.navigate(["/opem"]);
    }
    ngOnInit() { }
    profileimg() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let actionSheet = yield this.actionSheetController.create({
                header: "Photo",
                cssClass: "action-sheets-basic-page",
                buttons: [
                    {
                        text: "Take photo",
                        role: "destructive",
                        icon: !this.platform.is("ios") ? "ios-camera" : null,
                        handler: () => {
                            this.takePhoto();
                        }
                    },
                    {
                        text: "Choose photo from Gallery",
                        icon: !this.platform.is("ios") ? "ios-images" : null,
                        handler: () => {
                            this.openGallery();
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    openGallery() {
        //console.log("openGallery", this.id_partner);
        const options = {
            quality: 50,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.camera.getPicture(options).then(imageData => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = "data:image/jpeg;base64," + imageData;
            console.log(this.base64Image, "base64Image");
            this.authService
                .postt({ image: this.base64Image, id: this.userData.phone }, "imagez/profileimage_customer")
                .subscribe(sa => {
                console.log(sa, "da");
            });
            //   this.authService
            //     .updateprofileimage_driver({
            //       image: this.base64Image
            //       //driver_id: this.driver_id
            //     })
            //     .then(result => {
            //       console.log(result, "kilid");
            //       // setTimeout(() => {
            //       //   // console.log("this.profileData()123");
            //       //   this.profileData();
            //       // }, 1500);
            //       setTimeout(() => {
            //         this.profileData();
            //       }, 1500);
            //       this.generalts.showToast("Image Uploaded Successfully");
            //     })
            //     .catch(err => {
            //       console.log(err, "errerr");
            //       this.generalts.showToast(err.message);
            //       console.log(err.message); // something bad happened
            //       return 123;
            //     });
            //   // this.profile_img.push(this.base64Image);
            //   // this.profile_img.reverse();
            // },
            // err => {
            //   // Handle error
        });
    }
    takePhoto() {
        //  console.log("Take Photo ", this.id_partner);
        const options = {
            quality: 50,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(imageData => {
            let userData = JSON.parse(localStorage.getItem("userData"));
            // this.id_partner = userData.id;
            this.base64Image = "data:image/jpeg;base64," + imageData;
            console.log(this.base64Image, "base64Image");
            // this.authService
            //   .updateprofileimage_driver({
            //     image: this.base64Image,
            //     driver_id: this.driver_id
            //   })
            //   .then(result => {
            //     console.log(result, "kilid");
            //     // this.profileData();
            //     setTimeout(() => {
            //       this.profileData();
            //     }, 1500);
            //     this.generalts.showToast("Image Uploaded Successfully");
            //   })
            //   .catch(err => {
            //     console.log(err, "errerr");
            //     this.generalts.showToast(err.message);
            //     console.log(err.message); // something bad happened
            //     return 123;
            //   });
        });
    }
    profileData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let userData = JSON.parse(localStorage.getItem("userData"));
            let driverData = JSON.parse(localStorage.getItem("driverData"));
            const load = yield this.generalts.loading("Loading ...");
            yield load.present();
            //  this.presentLoadinga();
            // this.authservice.Driver_profile(this.driver_id).then(res => {
            //   load.dismiss();
            //   //this.loading1.dismiss();
            //   let data = res["response"][0];
            //   //console.log(data.profile_image, "data1231", res, JSON.stringify(res));
            // });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-profile",
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 28580:
/*!************************************************!*\
  !*** ./src/app/proj/profile/profile.page.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".camico {\n  background: #e2e2e2;\n  position: absolute;\n  right: 4px;\n  color: #61605f;\n  width: 31px;\n  height: 31px;\n  line-height: 1.5;\n  text-align: center;\n  top: 60px;\n  padding-top: 5px;\n  border-radius: 50%;\n}\n\nh3 {\n  font-size: 15px;\n}\n\n.imku {\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n}\n\n.marR-5 {\n  margin-right: 5px !important;\n}\n\n.yel-col {\n  color: #377fffc2;\n  font-size: 34px;\n  margin: 0 auto;\n  margin-top: 14px;\n  margin-left: 9px;\n}\n\n.das {\n  text-align: center;\n  margin-top: 5px;\n}\n\n.das ion-item div {\n  overflow: scroll !important;\n  display: flex !important;\n}\n\n.das ion-item div::-webkit-scrollbar {\n  display: none;\n  -ms-overflow-style: none;\n}\n\n.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),\n.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h {\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUk7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBRU47O0FBQUk7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7QUFFTjs7QUFTQTs7RUFFRSxxQkFBQTtBQU5GIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbWljbyB7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM2MTYwNWY7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA2MHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmlta3Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vIGZsb2F0OiByaWdodDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuXG4ubWFyUi01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cbi55ZWwtY29sIHtcbiAgY29sb3I6ICMzNzdmZmZjMjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cbi5kYXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgaW9uLWl0ZW0ge1xuICAgIGRpdiB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gaW9uLWl0ZW0ge1xuLy8gICBmb250LXdlaWdodDogODAwO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyB9XG5cbi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkLnNjLWlvbi1sYWJlbC1tZC1oOm5vdCguaXRlbS1tdWx0aXBsZS1pbnB1dHMpLFxuLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQ6bm90KC5pdGVtLW11bHRpcGxlLWlucHV0cykgLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ 675:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/profile/profile.page.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"menu\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- (click)=\"profileimg()\" -->\n    <ion-grid no-padding *ngIf=\"userData\">\n        <ion-row>\n            <ion-col style=\"text-align: center;\">\n                <!-- size=\"3\"\n      offset=\"4\"\n      style=\"padding-left: 10px;position: relative;\" -->\n                <img src=\"../../assets/images/no-image.png\" *ngIf=\"(['',null,undefined].indexOf(userData.photo) > -1)\" class=\"imku\" />\n\n                <img class=\"imku\" *ngIf=\"(['',null,undefined].indexOf(userData.photo) === -1)\" [src]=\"userData.photo\" />\n\n                <!-- <span class=\"camico\"> [src]=\"userData.student_name\"\n          <ion-icon name=\"camera\"></ion-icon>\n        </span> -->\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class=\"das\" *ngIf=\"userData\">\n        <!-- <ion-item>\n      <ion-thumbnail>\n        <ion-label position=\"fixed\">\n          <ion-icon name=\"contact\" class=\"yel-col\"></ion-icon> Name</ion-label\n        >\n      </ion-thumbnail>\n      <ion-input disabled [(ngModel)]=\"userData.student_name\"></ion-input>\n    </ion-item> -->\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"person\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Name</h3>\n                <div>{{userData.student_name}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"information-circle-outline\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Admission No.</h3>\n                <div>{{userData.admission_number}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"calendar\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Joining Date</h3>\n                <div>{{userData.joining_date| date:'dd-LL-yyyy'}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"time\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Date of Birth</h3>\n                <div>{{userData.dob | date:'dd-LL-yyyy'}}</div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"school\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Institute</h3>\n                <div>{{userData.institution_name}}</div>\n            </ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"paper\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Programme</h3>\n                <div>{{userData.programme}}</div>\n            </ion-label>\n        </ion-item> -->\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"book\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Class</h3>\n                <div>{{userData.combination}}  -  {{userData.batch}} </div>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"mail\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Academic Year</h3>\n                <div>{{userData.academic_year}}</div>\n            </ion-label>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"calendar\" class=\"yel-col\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>\n                <h3>Academic Period</h3>\n                <div>{{userData.academic_period}}</div>\n            </ion-label>\n        </ion-item> -->\n\n        <!-- .//LOGOUT -->\n\n        <!-- <ion-button\n      shape=\"round\"\n      style=\"margin-top: 20px;margin-bottom: 50px;\"\n      class=\"das\"\n      (click)=\"logot()\"\n    >\n      Logout\n    </ion-button> -->\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_proj_profile_profile_module_ts-es2015.js.map