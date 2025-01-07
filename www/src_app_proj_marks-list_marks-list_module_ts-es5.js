(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["src_app_proj_marks-list_marks-list_module_ts"], {
    /***/
    51076:
    /*!**************************************************************!*\
      !*** ./src/app/proj/marks-list/marks-list-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarksListPageRoutingModule": function MarksListPageRoutingModule() {
          return (
            /* binding */
            _MarksListPageRoutingModule
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


      var _marks_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./marks-list.page */
      76976);

      var routes = [{
        path: '',
        component: _marks_list_page__WEBPACK_IMPORTED_MODULE_0__.MarksListPage
      }];

      var _MarksListPageRoutingModule = /*#__PURE__*/_createClass(function MarksListPageRoutingModule() {
        _classCallCheck(this, MarksListPageRoutingModule);
      });

      _MarksListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MarksListPageRoutingModule);
      /***/
    },

    /***/
    34201:
    /*!******************************************************!*\
      !*** ./src/app/proj/marks-list/marks-list.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarksListPageModule": function MarksListPageModule() {
          return (
            /* binding */
            _MarksListPageModule
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


      var _marks_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./marks-list-routing.module */
      51076);
      /* harmony import */


      var _marks_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./marks-list.page */
      76976);

      var _MarksListPageModule = /*#__PURE__*/_createClass(function MarksListPageModule() {
        _classCallCheck(this, MarksListPageModule);
      });

      _MarksListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _marks_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MarksListPageRoutingModule],
        declarations: [_marks_list_page__WEBPACK_IMPORTED_MODULE_1__.MarksListPage]
      })], _MarksListPageModule);
      /***/
    },

    /***/
    76976:
    /*!****************************************************!*\
      !*** ./src/app/proj/marks-list/marks-list.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MarksListPage": function MarksListPage() {
          return (
            /* binding */
            _MarksListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_marks_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./marks-list.page.html */
      38523);
      /* harmony import */


      var _marks_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./marks-list.page.scss */
      39796);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);
      /* harmony import */


      var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/general.service */
      21864);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/preview-any-file/ngx */
      85838); //import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
      // import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
      // import { FileOpener } from '@ionic-native/file-opener/ngx';
      // import { File } from '@ionic-native/file/ngx';
      // import pdfMake from 'pdfmake/build/pdfmake';
      // import pdfFonts from 'pdfmake/build/vfs_fonts';
      // pdfMake.vfs = pdfFonts.pdfMake.vfs;


      var _MarksListPage = /*#__PURE__*/function () {
        function MarksListPage(authService, formBuilder, gelService, // private pdfGenerator: PDFGenerator,
        plt, // private file: File,
        previewAnyFile) {
          _classCallCheck(this, MarksListPage);

          this.authService = authService;
          this.formBuilder = formBuilder;
          this.gelService = gelService;
          this.plt = plt;
          this.previewAnyFile = previewAnyFile;
          this.isExamType = false;
          this.isMarks = false;
          this.message = '';
          this.pdfObj = null;
          this.show_internal_marks_as_grade_flag = false;
        }

        _createClass(MarksListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.examForm = this.formBuilder.group({
              exam: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              examType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.token = localStorage.getItem("pas_tok");
            this.student_id = localStorage.getItem("c_stud");
            this.getMarksInfo(); //console.log(this.exam_practicular)
          } // examParticular() {
          //   var data = '';
          //   var link = "student/" + this.student_id + "/assessment-particulars";
          //   console.log(link)
          //   this.gelService.loadingPresent();
          //   this.authService.g_get(data, link, this.token)
          //       .subscribe(
          //         data => {
          //           console.log(data)
          //           this.exam_practicular = data;
          //           this.gelService.loadingDismiss();
          //         }
          //       );
          // }

        }, {
          key: "getMarksInfo",
          value: function getMarksInfo() {
            var _this = this;

            //this.isExamType = true;
            var data = '';
            var link = "student/" + this.student_id + "/assessment-particulars"; //console.log(examParticular.detail['value'])

            this.gelService.loadingPresent();
            this.authService.g_get(data, link, this.token).subscribe(function (data) {
              console.log(data);
              _this.exam_type = data;

              _this.gelService.loadingDismiss();
            }, function (error) {
              _this.gelService.loadingDismiss();

              if (error.status == 401) {
                _this.authService.loginAgain(); //this.router.navigateByUrl('/login');

              } else if (error.status == 400) {
                _this.error = error.message;
                console.error("Error!", error.status_code, error.message);

                _this.gelService.presentAlert_g(_this.error);
              } else {
                console.log(error);

                _this.gelService.presentAlert_g("Please check your Internet Connection");
              }
            });
          }
        }, {
          key: "getProgressInfo",
          value: function getProgressInfo(assessmentDeatils) {
            var _this2 = this;

            console.log(this.token);
            var data = {
              "assessment_particular_id": assessmentDeatils.detail['value']
            };
            console.log(data);
            var link = "student/" + this.student_id + "/progress-report";
            console.log(link);
            this.gelService.loadingPresent();
            this.authService.g_postt(data, link, this.token).subscribe(function (data) {
              console.log(data);
              _this2.hide_attendance_flag = data['hide_attendance_flag'];

              if (data['marks'].length != 0) {
                _this2.marks = data['marks'];
                _this2.subjects = data['subjects'];
                _this2.attendance = data['attendance'].length == 0 ? '' : data['attendance']; //this.result = data['']

                _this2.show_internal_marks_as_grade_flag = data['show_internal_marks_as_grade_flag'];
                _this2.examList = data['examList'];
                _this2.isMarks = true;
                _this2.message = '';
                console.log(_this2.attendance.length == 0);
              } else {
                _this2.isMarks = false;
                _this2.message = 'No Data Found';
                _this2.examList = '';
              }

              _this2.gelService.loadingDismiss();

              console.log(_this2.isMarks);
            }, function (error) {
              _this2.gelService.loadingDismiss();

              if (error.status == 401) {
                _this2.authService.loginAgain(); //this.router.navigateByUrl('/login');

              } else if (error.status == 400) {
                _this2.error = error.message;
                _this2.message = error.message;
                console.error("Error!", error.status_code, error.message); // this.gelService.presentAlert_g(this.error);
              } else {
                console.log(error.message);
                _this2.message = "No Data Found"; // error.message;
                // this.gelService.presentAlert_g("Please check your Internet Connection");
              }
            });
          }
        }, {
          key: "downloadReport",
          value: function downloadReport() {
            var url = this.authService.base_path + 'student/' + this.student_id + '/download-marks?assessment_particular_id=' + this.examForm.value['examType'] + '&type=pdf';
            console.log(url);
            this.previewAnyFile.preview(url).then(function () {}, function (err) {
              alert(JSON.stringify(err));
            });
            var data = {
              "assessment_particular_id": this.examForm.value['examType']
            };
            console.log(data); // var link = "student/" + this.student_id + "/download-marks";
            // // // this.gelService.loadingPresent();
            // this.authService.g_postt(data, link, this.token)
            // .subscribe(
            //   data => {
            //     console.log(data)
            //     // window.open(data);
            //   });
          } // async downloadReport() {
          // const logo = await this.getBase64ImageFromURL("../../assets/images/logo.jpeg");
          //   var data = {
          //     "assessment_particular_id" : this.examForm.value['examType']
          //   };
          //   var link = "student/" + this.student_id + "/download-marks";
          //   this.gelService.loadingPresent();
          //   this.authService.g_postt(data, link, this.token)
          //   .subscribe(
          //     data => {
          //       console.log(data);
          //       var docDefinition;
          //       var examList = data['examList'];
          //       var academicYear = data['academicYear'];
          //       var downloadDate = data['downloadDate'];
          //       var institutionDetails = data['institutionDetails'];
          //       var studentDetails = data['studentDetails'];
          //       var marks = data['marks'];
          //       var totalMaxMarks = data['totalMaxMarks'];
          //       var totalMinMarks = data['totalMinMarks'];
          //       var totalObtainedMarks = data['totalObtainedMarks'];
          //       // const logo = await
          //      //console.log(logo)
          //      //await
          //       var i=1;
          //       var markslist = marks.map(function(item) {
          //         return [
          //           { text: i++, alignment: 'center' },
          //           { text: item['subject_name'],  },
          //           { text: item['max_marks'], alignment: 'center' },
          //           { text: item['min_marks'], alignment: 'center' },
          //           { text: item['reason'] ? item['reason'] : item['set_marks'], alignment: 'center' }
          //         ];
          //       });
          //       markslist.push(
          //         [
          //           { text: "TOTAL MARKS", colSpan: 2, aligments: 'center', bold: true, margin: [ 60, 0, 0,0]},
          //           {},
          //           { text: totalMaxMarks, alignment: 'center'},
          //           { text: totalMinMarks, alignment: 'center'},
          //           { text: totalObtainedMarks, alignment: 'center'},
          //         ]
          //       )
          //       var student_details =  [
          //         [
          //           {text: "NAME :", bold: true},
          //           {text: studentDetails['student_name'], bold: true, margin: [ -53, 0, 0, 0 ]},
          //           {text: "ADMISSION NO :", bold: true, margin: [ -1, 0, 0, 0 ]},
          //           {text: studentDetails['admission_number'], bold: true, margin: [ -16, 0, 0, 0 ]},
          //         ],
          //         [
          //           {text:  "CLASS & SEC  :", bold: true},
          //           {text: studentDetails['course_name']+' & '+ studentDetails['batch_name'], bold: true, margin: [ -20, 0, 0, 0 ]},
          //           {text: ""},
          //           {text: ""}
          //         ]
          //       ];
          //       markslist.unshift(
          //         [
          //           { text: '', colSpan: 2},
          //           { },
          //           { text: examList, colSpan: 3, alignment: 'center', bold: true },
          //           {},
          //           {}
          //         ],
          //         [
          //           { text: 'SL. No', alignment: 'center', bold: true },
          //           { text: 'SUBJECT',  alignment: 'center',  bold: true},
          //           { text:"MAX. MARKS", alignment: 'center',  bold: true },
          //           { text:"MIN. MARKS", alignment: 'center',  bold: true },
          //           { text:"OBTAINED MARKS", alignment: 'center',  bold: true }
          //         ]
          //       );
          //   docDefinition = {
          //     content: [
          //       {
          //         columns: [
          //           {
          //               image: logo,
          //               width: 70,
          //               height: 80,
          //               alignment: 'center'
          //           },
          //           [
          //             {text: institutionDetails['institution'].toUpperCase( ), style: 'title'},
          //             {text: institutionDetails['address'].toUpperCase( ), style: 'sub_title'},
          //             {text: institutionDetails['city'].toUpperCase( ), style: 'sub_title'},
          //             {text: 'Phone No. ' + institutionDetails['phone_number'], style: 'f_title'},
          //             {text: 'Email: ' + institutionDetails['email_address'], style: 'f_title'},
          //           ],
          //         ]
          //       },
          //       {
          //         margin: [ 0, 40, 0,10],
          //         layout: 'noBorders',
          //         //color: '#444',
          //         fontSize: 18,
          //         table: {
          //           // headers are automatically repeated if the table spans over multiple pages
          //           // you can declare how many rows should be treated as headers
          //           headerRows: 1,
          //           widths: [ 400, 100],
          //           body: [
          //             [
          //               {text: 'PROGRESS REPORT - ' + academicYear, alignment: 'center', fontSize:13, bold: true, colSpan: 2},
          //               {}
          //             ]
          //             // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
          //           ]
          //         }
          //       },
          //       {
          //         margin: [ 0, 20, 0,10],
          //         style: 'header',
          //         layout: 'noBorders',
          //         table: {
          //           widths: [80,280,80,50],
          //           headerRows: 1,
          //           body: student_details
          //         }
          //       },
          //       {
          //         style: 'header',
          //         //color: '#444',
          //         headerRows: 2,
          //         table: {
          //           widths: [40, 150, 90, 90, 90],
          //           headerRows: 1,
          //           body: markslist
          //         }
          //       }
          //     ],
          //     styles: {
          //       header: {
          //         fontSize: 9,
          //         //bold: true,
          //         margin: [0, 0, 0, 10]
          //       },
          //       title: {
          //         bold: true,
          //         fontSize: 18,
          //         alignment: 'center',
          //         margin: [ -75, 0, 0,0]
          //       },
          //       sub_title: {
          //         bold: true,
          //         fontSize: 12,
          //         alignment: 'center',
          //         margin: [ -75, 0, 0,0]
          //       },
          //       f_title: {
          //         bold: true,
          //         fontSize: 10,
          //         alignment: 'center',
          //         margin: [ -75, 0, 0,0]
          //       },
          //       footer_title: {
          //         bold: true,
          //         fontSize: 10,
          //         alignment: 'right'
          //       }
          //     }
          //   }
          //   this.pdfObj = pdfMake.createPdf(docDefinition);
          //   // this.pdfObj.open();
          //   if(this.plt.is('cordova')){
          //     this.pdfObj.getBuffer((buffer) => {
          //       var utf8 = new Uint8Array(buffer);
          //       var binaryArray = utf8.buffer;
          //       var blob = new Blob([binaryArray], { type: 'application/pdf'});
          //       this.file.writeFile(this.file.dataDirectory, 'ProgressCard.pdf', blob, { replace: true }).then(fileEntry => {
          //         console.log(this.file.dataDirectory)
          //         this.fileOpener.open(this.file.dataDirectory + 'ProgressCard.pdf', 'application/pdf');
          //       })
          //     })
          //   }else {
          //     this.pdfObj.open();
          //   }
          //   this.gelService.loadingDismiss();
          //     },  error => {
          //       this.gelService.loadingDismiss();
          //       if(error.status == 401 ) {
          //         this.authService.loginAgain();
          //         //this.router.navigateByUrl('/login');
          //       }
          //       else if (error.status == 400) {
          //         this.error = error.message;
          //         console.error("Error!", error.status_code, error.message);
          //         this.gelService.presentAlert_g(this.error);
          //       }
          //       else{
          //         console.log(error);
          //         this.gelService.presentAlert_g("Please check your Internet Connection");
          //       }
          //     }
          //   )
          //   //this.inapp.create('https://www.irjet.net/archives/V4/i2/IRJET-V4I2413.pdf', '_system')
          //   //console.log(this.examForm.value['examType']);
          //   // this.content = "<h1>welcome</h1>";
          //   // let options = {
          //   //   documentSize: 'A4',
          //   //   type: 'share',
          //   //   // landscape: 'portrait',
          //   //   fileName: 'Order-Invoice.pdf'
          //   // };
          //   // this.pdfGenerator.fromData(this.content, options)
          //   //   .then((base64) => {
          //   //     console.log('OK', base64);
          //   //   }).catch((error) => {
          //   //     console.log('error', error);
          //   //   });
          // }

        }, {
          key: "getBase64ImageFromURL",
          value: function getBase64ImageFromURL(url) {
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.setAttribute("crossOrigin", "anonymous");

              img.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
              };

              img.onerror = function (error) {
                reject(error);
              };

              img.src = url;
            });
          }
        }]);

        return MarksListPage;
      }();

      _MarksListPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }, {
          type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__.PreviewAnyFile
        }];
      };

      _MarksListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-marks-list',
        template: _raw_loader_marks_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_marks_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MarksListPage);
      /***/
    },

    /***/
    39796:
    /*!******************************************************!*\
      !*** ./src/app/proj/marks-list/marks-list.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-size: 15px;\n}\n\nion-slides {\n  width: 100% !important;\n}\n\n.tabl ion-row {\n  border-right: 1px solid #fff;\n}\n\n.tabl ion-col {\n  border: 1px solid #fff;\n  border-bottom-width: inherit;\n  border-right-width: inherit;\n}\n\nion-col {\n  text-align: center;\n}\n\nion-col ion-icon {\n  font-size: 24px;\n  margin-top: 1px;\n  color: #ae5c50;\n}\n\nion-grid p {\n  margin: 1px 0;\n}\n\n.abst_list {\n  background: #b9cbff;\n}\n\n.a_list {\n  background: #ae5c50;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFHSTtFQUNJLDRCQUFBO0FBQVI7O0FBRUk7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBRUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBUjs7QUFPSTtFQUNJLGFBQUE7QUFKUjs7QUFRQTtFQUNJLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFMSiIsImZpbGUiOiJtYXJrcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnRhYmwge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiBpbmhlcml0O1xuICAgIH1cbn1cblxuaW9uLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjYWU1YzUwO1xuICAgIH1cbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE2LCAxMDksIDEwOSk7XG59XG5cbmlvbi1ncmlkIHtcbiAgICAvLyBwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDFweCAwO1xuICAgIH1cbn1cblxuLmFic3RfbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2I5Y2JmZjtcbn1cblxuLmFfbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2FlNWM1MDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8vIC5hYnN0X2xpc3QgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc0NmQ2ZDtcbi8vIH0iXX0= */";
      /***/
    },

    /***/
    38523:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/marks-list/marks-list.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"menu\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Progress Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"examForm\">\n    <!-- <ion-item>\n      <ion-label floating\n        >Exam<span class=\"mandatory-asterick\">*</span></ion-label\n      >\n        <ion-select  \n          formControlName=\"exam\"\n          placeholder=\"Exam\"\n          (ionChange)=\"getMarksInfo($event)\">\n          <ion-select-option\n          *ngFor=\"let item of exam_practicular;\"\n          [value]=\"item.exam_particular_id\"\n          >{{item.name}}</ion-select-option>\n        </ion-select>\n    </ion-item> -->\n    <ion-item>\n      <ion-label floating>Exam</ion-label>\n      <ion-select formControlName=\"examType\" placeholder=\"Select\" (ionChange)=\"getProgressInfo($event)\">\n        <ion-select-option *ngFor=\"let item of exam_type;\" [value]=\"item.assessment_particular_id\">\n          {{item.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </form>\n  <ion-grid class=\"tabl\" *ngIf=\"isMarks\">\n    <ion-row>\n      <ion-col>\n        <h2 style=\"font-weight: bold;\">{{examList }} Progress Report</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"a_list\">\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\">\n        <p>Subjects</p>\n      </ion-col>\n      <ion-col *ngIf=\"!hide_attendance_flag\" [size]=\"hide_attendance_flag ? 6 : 4\">\n        <p>Attendance</p>\n      </ion-col>\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"!show_internal_marks_as_grade_flag\">\n        <p>Marks</p>\n      </ion-col>\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"show_internal_marks_as_grade_flag\">\n        <p>Grades</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"abst_list\" *ngFor=\"let subject of subjects\">\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\">\n        <p style=\"text-align: left;\">{{subject}}</p>\n      </ion-col>\n      \n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"attendance &&!hide_attendance_flag\">\n        <p>{{attendance[subject][0]['attended']}} / {{attendance[subject][0]['total_classes']}}</p>\n      </ion-col>\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"!attendance &&!hide_attendance_flag\">\n        <p>--</p>\n      </ion-col>\n\n\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"marks[subject][0] && !show_internal_marks_as_grade_flag\">\n        <p *ngIf=\"marks[subject][0]['marks']\">\n          {{marks[subject][0]['marks'] }} <span\n            *ngIf=\"marks[subject][0]['min_marks'] > 0\">({{marks[subject][0]['max_marks']}}/{{marks[subject][0]['min_marks']}})</span>\n            <span\n            *ngIf=\"marks[subject][0]['min_marks'] <= 0\">/{{marks[subject][0]['max_marks']}}</span>\n        </p>\n        <p *ngIf=\"!marks[subject][0]['marks']\">\n          -\n        </p>\n      </ion-col>\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"marks[subject][0] && show_internal_marks_as_grade_flag\">\n        <p *ngIf=\"marks[subject][0]['grade']\">\n          {{marks[subject][0]['grade']}}\n        </p>\n        <p *ngIf=\"!marks[subject][0]['grade']\">\n          -\n        </p>\n      </ion-col>\n      <ion-col [size]=\"hide_attendance_flag ? 6 : 4\" *ngIf=\"!marks[subject][0]\">\n        <p>-</p>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row class=\"abst_list\">\n      <ion-col size=\"8\">Result</ion-col>\n      <ion-col size=\"4\">{{marks['result']}}</ion-col>\n    </ion-row>-->\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"mt-0\" tappable shape=\"round\" color=\"tertiary\" (click)=\"downloadReport()\">Download Progress\n          Report</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-grid class=\"tabl\" *ngIf=\"!isMarks\">\n    <ion-row><ion-col>{{message}}</ion-col></ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_proj_marks-list_marks-list_module_ts-es5.js.map