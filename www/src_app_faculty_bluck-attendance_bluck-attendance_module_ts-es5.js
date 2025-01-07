(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_faculty_bluck-attendance_bluck-attendance_module_ts"], {
    /***/
    72672:
    /*!*****************************************************************************!*\
      !*** ./src/app/faculty/bluck-attendance/bluck-attendance-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BluckAttendancePageRoutingModule": function BluckAttendancePageRoutingModule() {
          return (
            /* binding */
            _BluckAttendancePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _bluck_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bluck-attendance.page */
      29546);

      var routes = [{
        path: '',
        component: _bluck_attendance_page__WEBPACK_IMPORTED_MODULE_0__.BluckAttendancePage
      }];

      var _BluckAttendancePageRoutingModule = /*#__PURE__*/_createClass(function BluckAttendancePageRoutingModule() {
        _classCallCheck(this, BluckAttendancePageRoutingModule);
      });

      _BluckAttendancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BluckAttendancePageRoutingModule);
      /***/
    },

    /***/
    35467:
    /*!*********************************************************************!*\
      !*** ./src/app/faculty/bluck-attendance/bluck-attendance.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BluckAttendancePageModule": function BluckAttendancePageModule() {
          return (
            /* binding */
            _BluckAttendancePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _bluck_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bluck-attendance-routing.module */
      72672);
      /* harmony import */


      var _bluck_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bluck-attendance.page */
      29546);

      var _BluckAttendancePageModule = /*#__PURE__*/_createClass(function BluckAttendancePageModule() {
        _classCallCheck(this, BluckAttendancePageModule);
      });

      _BluckAttendancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _bluck_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.BluckAttendancePageRoutingModule],
        declarations: [_bluck_attendance_page__WEBPACK_IMPORTED_MODULE_1__.BluckAttendancePage]
      })], _BluckAttendancePageModule);
      /***/
    },

    /***/
    29546:
    /*!*******************************************************************!*\
      !*** ./src/app/faculty/bluck-attendance/bluck-attendance.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BluckAttendancePage": function BluckAttendancePage() {
          return (
            /* binding */
            _BluckAttendancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_bluck_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./bluck-attendance.page.html */
      45680);
      /* harmony import */


      var _bluck_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bluck-attendance.page.scss */
      5476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);

      var _BluckAttendancePage = /*#__PURE__*/function () {
        function BluckAttendancePage(location, authService, general, toastController, datePipe, router, formBuilder) {
          _classCallCheck(this, BluckAttendancePage);

          this.location = location;
          this.authService = authService;
          this.general = general;
          this.toastController = toastController;
          this.datePipe = datePipe;
          this.router = router;
          this.formBuilder = formBuilder;
          this.attndDate = new Date().toISOString();
          this.count = 0;
          this.facData = JSON.parse(localStorage.getItem('myParam'));
          console.log(this.facData);
        }

        _createClass(BluckAttendancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              conducted0: [''],
              attended0: [''],
              allocated: ['']
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_faculty");
            this.load_studentList();
          }
          /***** Student List ****/

        }, {
          key: "load_studentList",
          value: function load_studentList() {
            var _this = this;

            this.getStudentList = []; // let date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');

            var page = "teaching-staff/class-guide-attendance/faculty-attendances-bulk?course_id=".concat(this.facData.course_id, "&batch_id=").concat(this.facData.batch_id, "&academic_year_id=").concat(this.facData.academic_year_id, "&year_id=").concat(this.facData.year_id, "&employeeDetailId=").concat(this.facData.employeeDetailId); // let item = {
            //   "course_id" : this.facData.course_id, 
            //   "batch_id" : this.facData.batch_id, 
            //   "institution_id" : this.facData.institution_id, 
            //   "date" : date
            // }
            // let p = 
            // console.log(p);
            // this.authService.get_fac_t(p, this.token)
            //     .subscribe(
            //       data => {
            //         console.log(data, 'ashok1');
            //       });

            this.general.loadingPresent();
            this.authService.get_fac_t(page, this.token).subscribe(function (data) {
              console.log(data, 'ashok');
              _this.studentList = data;
              _this.count = data.length;

              for (var i = 0; i < _this.count; i++) {
                _this.myForm.addControl('allocated' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')); // this.myForm.get('conducted'+i).setValidators([]);


                _this.myForm.controls['allocated' + i].setValue(data[i].class_guide_allocation_id);

                _this.myForm.addControl('conducted' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                _this.myForm.get('conducted' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);

                _this.myForm.controls['conducted' + i].setValue(data[i].conducted);

                _this.myForm.get('conducted' + i).updateValueAndValidity();

                _this.myForm.addControl('attended' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));

                _this.myForm.get('attended' + i).setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);

                _this.myForm.controls['attended' + i].setValue(data[i].attended);

                _this.myForm.get('attended' + i).updateValueAndValidity();
              }

              _this.general.loadingDismiss();
            }, function (err) {
              if (err.status == 401 || err.status == 422 || err.status == 0) {
                if (err.statusText == "Unauthorized") {
                  _this.general.loginAgain();

                  _this.router.navigateByUrl('/login');
                }
              }

              _this.general.loadingDismiss();
            });
          }
          /***** End Student List *****/

        }, {
          key: "changeValue",
          value: function changeValue(val) {
            for (var i = 0; i < this.count; i++) {
              this.myForm.addControl('conducted' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
              this.myForm.controls['conducted' + i].setValue(val.detail['value']);
              this.myForm.get('conducted' + i).updateValueAndValidity();
              this.myForm.addControl('attended' + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''));
              this.myForm.controls['attended' + i].setValue(val.detail['value']);
              this.myForm.get('attended' + i).updateValueAndValidity();
            }
          }
        }, {
          key: "changeConducted",
          value: function changeConducted(val, i) {
            console.log(val.detail['value']);
            console.log(this.myForm.controls['attended' + i].value);

            if (Number(this.myForm.controls['attended' + i].value) > Number(val.detail['value'])) {
              this.myForm.controls['attended' + i].setValue('');
              this.general.showToast('Attended Value lesser than Conducted');
            }
          }
        }, {
          key: "changeAttended",
          value: function changeAttended(val, i) {
            console.log(val.detail['value']);

            if (Number(this.myForm.controls['conducted' + i].value) < Number(val.detail['value'])) {
              this.myForm.controls['attended' + i].setValue('');
              this.general.showToast('Attended Value lesser than Conducted');
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            console.log(this.myForm.value);
            var a = [];

            for (var i = 0; i < this.count; i++) {
              a.push({
                'attended': this.myForm.value['attended' + i],
                'conducted': this.myForm.value['conducted' + i],
                'class_guide_allocation_id': this.myForm.value['allocated' + i]
              }); // console.log(a);
            }

            var SaveAttadance = {
              attendances: a
            };
            console.log(SaveAttadance);
            this.general.loadingPresent();
            this.authService.g_postt_fac(SaveAttadance, "teaching-staff/class-guide-attendance/save-attendance-bulk", this.token).subscribe(function (data) {
              console.log(data);

              if (data['status']) {
                _this2.general.showToast(data.message);
              }

              _this2.back();

              _this2.general.loadingDismiss();
            }, function (err) {
              if (err.status == 401 || err.status == 422 || err.status == 0) {
                if (err.statusText == "Unauthorized") {
                  _this2.general.loginAgain();

                  _this2.router.navigateByUrl('/login');
                }
              }

              _this2.general.loadingDismiss();
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return BluckAttendancePage;
      }();

      _BluckAttendancePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _BluckAttendancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-bluck-attendance',
        template: _raw_loader_bluck_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bluck_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BluckAttendancePage);
      /***/
    },

    /***/
    5476:
    /*!*********************************************************************!*\
      !*** ./src/app/faculty/bluck-attendance/bluck-attendance.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".grid-bordered .row-text {\n  white-space: normal;\n  line-height: 15px;\n}\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n\n.thumnails .list-thumbnail {\n  height: 10%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  border: 0px solid #d30c0c;\n  border-radius: 4px;\n  padding: 3px;\n  width: 160%;\n  font-size: 12px;\n  height: 100%;\n  margin: 0 2px 0 0;\n  line-height: 30px;\n}\n\n.ion-col {\n  border: 1px solid gray !important;\n  color: black;\n}\n\n.align {\n  text-align: center;\n  vertical-align: text-bottom;\n}\n\n.btn {\n  text-align: center;\n  color: #690d01fc;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdWNrLWF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNVO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQWJaOztBQXVCTTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFwQlY7O0FBcUJVO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBbkJkOztBQW9CYztFQUNJLHFCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBbkJsQjs7QUF5Qk07RUFDSSxpQ0FBQTtFQUNBLFlBQUE7QUF0QlY7O0FBeUJNO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQXRCUjs7QUF5Qk07RUFPUSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBN0JkIiwiZmlsZSI6ImJsdWNrLWF0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtYm9yZGVyZWR7XG4gICAgICAgICAgLy8gaW9uLXJvd3tcbiAgICAgICAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgLy8gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC8vICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIC8vIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgICAgIC8vICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAwcHg7XG4gICAgICAgICAgLy8gICBib3JkZXItY29sb3I6ICM1ZjU3NTc7XG4gICAgICAgICAgLy8gICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAvLyAvLyAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC5yb3ctdGV4dHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaW9uLWNvbHtcbiAgICAgICAgICAvLyAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgLy8gICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbiAgICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjogI2NjYzZjNjtcbiAgICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aHVtbmFpbHN7XG4gICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAubGlzdC10aHVtYm5haWx7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAuaW1nLXRodW1ie1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjExLCAxMiwgMTIpO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MCU7IFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMnB4IDAgMDsgXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICAuaW9uLWNvbCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkhaW1wb3J0YW50IDtcbiAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5hbGlnbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYnRuIHtcbiAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgLy8gLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIC8vIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgIzY5MGQwMWZjO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM2OTBkMDFmYztcbiAgICAgICAgICAgICAgY29sb3I6ICM2OTBkMDFmYztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfSJdfQ== */";
      /***/
    },

    /***/
    45680:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faculty/bluck-attendance/bluck-attendance.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title >Bluck Attendance </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-item>\n    \n        <ion-label position=\"floating\">Classes Held</ion-label>\n        <ion-input type=\"number\" placeholder=\"Classes Held\"  (ionChange)='changeValue($event)'  ></ion-input>\n       \n      </ion-item>\n      <ion-button style=\"padding-left: 50%;\" type=\"submit\" [disabled]=\"!myForm.valid\" >\n        Save</ion-button>\n    </ion-item>\n  \n  <!-- <div class=\"thumnails\" >\n    <div class=\"list-thumbnail\">\n      <div class=\"img-thumb\"> -->\n        \n          <ion-grid  class=\"grid-bordered\" >\n            <ion-row class=\"row-text\">\n              <!-- <ion-col text-center class=\"ion-col\" size=\"1\">\n                <p>Action</p>\n              </ion-col> -->\n              <ion-col text-center class=\"ion-col\" size=\"2\">\n                <p>Roll No</p>\n              </ion-col>\n              <ion-col text-center class=\"ion-col\" size=\"4\">\n                <p>Name</p>\n              </ion-col>\n              <ion-col text-center class=\"ion-col\" size=\"3\">\n                <p>Conducted</p>\n              </ion-col>\n              <ion-col text-center class=\"ion-col\" size=\"3\">\n                <p>Attended</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"row-text\" *ngFor=\"let student of studentList; let i=index\" >\n              <!-- <ion-col text-center class=\"ion-col\" size=\"1\">\n                <ion-label (click)=\"edit(student)\" class=\"label_ion\" >\n                  <ion-icon  class=\"btn\" name=\"create-outline\"></ion-icon>\n                </ion-label>\n                &nbsp;&nbsp;\n                <ion-label (click)=\"delete(student)\" class=\"label_ion\" *ngIf=\"student.remarks != null\">\n                  <ion-icon class=\"btn\" name=\"trash-outline\"></ion-icon>\n                </ion-label>\n              </ion-col>  -->\n              <ion-col text-center class=\"ion-col\" size=\"2\">\n                <ion-label class=\"label_ion\" >{{student.roll_no}}</ion-label>\n              </ion-col>\n              <ion-col text-center class=\"ion-col\" size=\"4\">\n                <ion-label class=\"label_ion\" >{{student.student_name}}</ion-label>\n              </ion-col>\n              <ion-col text-center class=\"ion-col\" size=\"3\">\n                <ion-input type=\"hidden\" formControlName=\"allocated{{i}}\"  ></ion-input>\n                <ion-input type=\"number\" formControlName=\"conducted{{i}}\" placeholder=\"Conducted\" (ionChange)='changeConducted($event, i)'></ion-input>\n                <!-- <ion-label class=\"label_ion\" >{{student.remarks}}</ion-label> -->\n              </ion-col>\n              <ion-col text-center class=\"ion-col\" size=\"3\">\n                <ion-input type=\"number\" formControlName=\"attended{{i}}\" placeholder=\"Attended\" (ionChange)='changeAttended($event, i)'></ion-input>\n                <!-- <ion-label class=\"label_ion\" >{{student.remarks}}</ion-label> -->\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n        \n      <!-- </div>\n    </div>\n  </div> -->\n</form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faculty_bluck-attendance_bluck-attendance_module_ts-es5.js.map