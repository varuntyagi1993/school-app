(self["webpackChunkschool_app"] = self["webpackChunkschool_app"] || []).push([["default-src_app_proj_success_success_page_ts"],{

/***/ 77413:
/*!**********************************************!*\
  !*** ./src/app/proj/success/success.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPage": function() { return /* binding */ SuccessPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_success_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./success.page.html */ 68041);
/* harmony import */ var _success_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page.scss */ 58678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/general.service */ 21864);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);







// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { File } from '@ionic-native/file/ngx';


// pdfMake.vfs = pdfFonts.pdfMake.vfs;
let SuccessPage = class SuccessPage {
    constructor(modalController, navCtrl, router, gelService, plt, 
    // private file: File,
    // private fileOpener: FileOpener,
    authService, previewAnyFile) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.gelService = gelService;
        this.plt = plt;
        this.authService = authService;
        this.previewAnyFile = previewAnyFile;
        this.pdfObj = null;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = localStorage.getItem("pas_tok");
        this.student_id = localStorage.getItem("c_stud");
        var data = '';
    }
    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    generateReport(receipt) {
        console.log(receipt);
        var url = this.authService.base_path + 'pay-fee-v3/student/' + receipt.student_id + '/print-receipt?academic_year_id=' + this.academicYearId + '&ids=' + receipt.receipt_ids + '&type=pdf';
        console.log(url);
        this.previewAnyFile.preview(url)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
    // async generateReport() {
    //   const logo = await this.getBase64ImageFromURL("../../assets/images/logo.jpeg");
    //   var link1 = "student/" + this.student_id + "/print-receipt";
    //   var data = {
    //     "ids": this.receipt_ids,
    //     "academic_year_id": this.academicYearId 
    //   }
    //   this.gelService.loadingPresent();
    //   this.authService.g_postt(data, link1, this.token)
    //   .subscribe(rsp => {
    //     console.log(rsp)
    //     var recieptDetails = rsp.receiptDetails
    //     var docDefinition;
    //     if(recieptDetails) {
    //       var item = rsp.receiptDetailsFeeItems[recieptDetails[0].receipt_id];
    //       var amt = 0;
    //       item.forEach(element => {
    //         amt = amt + element.amount;
    //       });
    //       console.log(amt);
    //       var formatter = new Intl.NumberFormat('en-US', {
    //         style: 'currency',
    //         currency: 'INR',
    //       });
    //       var installment;
    //       if(recieptDetails[0].challan_description)
    //         installment = recieptDetails[0].challan_description;
    //       else
    //         installment = recieptDetails[0].installment;
    //       var student_details =  [
    //         [ 
    //           {text: "Receipt No.", fontSize: 12}, 
    //           {text: ': '+ recieptDetails[0].receipt_number, margin: [ -20, 0, 0, 0 ], fontSize: 12},
    //           {text: "Payment Date", margin: [ -20, 0, 0, 0 ], fontSize: 12},
    //           {text: ': '+ recieptDetails[0].receipt_date,  margin: [ -25, 0, 0, 0 ], fontSize: 12},
    //         ],
    //         [ 
    //           {text: "NAME", fontSize: 12}, 
    //           {text: ': '+recieptDetails[0].student_name, margin: [ -20, 0, 0, 0 ], fontSize: 12},
    //           {text: "CLASS", margin: [ -20, 0, 0, 0 ], fontSize: 12},
    //           {text: ': '+recieptDetails[0].course_name + ' - ' + recieptDetails[0].batch_name,  margin: [ -25, 0, 0, 0 ], fontSize: 12},
    //         ],
    //         [ 
    //           {text:  "Admission No.", fontSize: 12},
    //           {text: ': '+recieptDetails[0].admission_number, margin: [ -20, 0, 0, 0 ], fontSize: 12},
    //           {text: "Installment", margin: [ -20, 0, 0, 0 ], fontSize: 12},
    //           {text: ": " + installment,  margin: [ -25, 0, 0, 0 ], fontSize: 12}
    //         ],
    //         [ 
    //           {text: ""}, 
    //           {text: ''},
    //           {text: ""},
    //           {text: ""}
    //         ],
    //         [ 
    //           {text: ""}, 
    //           {text: ''},
    //           {text: ""},
    //           {text: ""}
    //         ],
    //         [ 
    //           {text: ""}, 
    //           {text: ''},
    //           {text: ""},
    //           {text: ""}
    //         ],
    //         [ 
    //           {text: "Total Paid Amount ", fontSize: 12}, 
    //           {text: ': '+ formatter.format(amt), margin: [ -9, 0, 0, 0 ], fontSize: 12},
    //           {text: ""},
    //           {text: ""}
    //         ],
    //         [ 
    //           {text: "Mode of Payment", fontSize: 12}, 
    //           {text: ': ' + recieptDetails[0].payment_type, margin: [ -9, 0, 0, 0 ], fontSize: 12},
    //           {text: ""},
    //           {text: ""}
    //         ],
    //         [ 
    //           {text:  "Amount in words", fontSize: 12},
    //           {text: ': Rupees ' + this.inWords(amt) +'only', margin: [ -9, 0, 0, 0 ], fontSize: 12},
    //           {text: ""},
    //           {text: ""}
    //         ]
    //       ];
    //       docDefinition = {
    //           content: [
    //             {
    //               style: 'tableExample',
    //               table: {
    //                 heights: [80, 120],
    //                 widths: ['*'],
    //                 body: [
    //                   [
    //                     {
    //                       columns: [
    //                         {
    //                             image: logo,
    //                             width: 70,
    //                             height: 80,
    //                         },
    //                         [
    //                           {text: recieptDetails[0].header1, style: 'title'},
    //                           {text: recieptDetails[0].header2, style: 'sub_title'},
    //                           {text: recieptDetails[0].header3+ ' (Student Copy)', style: 'f_title'},
    //                         ],
    //                       ]
    //                     },
    //                   ],
    //                   [
    //                     {
    //                       margin: [ 0, 20, 0,10],
    //                       style: 'header',
    //                       layout: 'noBorders',
    //                       table: {
    //                         widths: ['*',230,80,70],
    //                         body: student_details
    //                       }
    //                     }
    //                   ],
    //                 ]
    //               }
    //             }
    //           ],
    //           styles: {
    //             header: {
    //               fontSize: 9,
    //               //bold: true,
    //               margin: [0, 0, 10]
    //             },
    //             title: {
    //               bold: true,
    //               fontSize: 15,
    //               alignment: 'center',
    //               margin: [ -75, 10, 0, 0]
    //             },
    //             sub_title: {
    //               bold: true,
    //               fontSize: 12,
    //               alignment: 'center',
    //               margin: [ -75, 10, 0, 0]
    //             },
    //             f_title: {
    //               bold: true,
    //               fontSize: 10,
    //               alignment: 'center',
    //               margin: [ -75, 10, 0, 0]
    //             },
    //             footer_title: {
    //               bold: true,
    //               fontSize: 10,
    //               alignment: 'right'
    //             },
    //             tableExample: {
    //               margin: [0, 5, 0, 15]
    //             },
    //           }
    //         };
    //         this.pdfObj = pdfMake.createPdf(docDefinition);
    //         // this.pdfObj.open();
    //         if(this.plt.is('cordova')){
    //           this.pdfObj.getBuffer((buffer) => {
    //             var utf8 = new Uint8Array(buffer);
    //             var binaryArray = utf8.buffer;
    //             var blob = new Blob([binaryArray], { type: 'application/pdf'});
    //             this.file.writeFile(this.file.dataDirectory, 'PaymentReciept.pdf', blob, { replace: true }).then(fileEntry => {
    //               console.log(this.file.dataDirectory)
    //               this.fileOpener.open(this.file.dataDirectory + 'PaymentReciept.pdf', 'application/pdf');
    //             })
    //           })
    //         }else {
    //           this.pdfObj.open();
    //         }
    //     }
    //     this.gelService.loadingDismiss();
    //   })
    // }
    getBase64ImageFromURL(url) {
        return new Promise((resolve, reject) => {
            var img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = () => {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
            };
            img.onerror = error => {
                reject(error);
            };
            img.src = url;
        });
    }
    inWords(num) {
        var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var n = [];
        if ((num = num.toString()).length > 9)
            return 'overflow';
        n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n)
            return;
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
        return str;
    }
    back() {
        // this.gelService.loadingPresent();
        this.modalController.dismiss({
            'dismissed': true
        });
        this.router.navigateByUrl('/home');
        //this.gelService.loadingDismiss();
    }
};
SuccessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_4__.PreviewAnyFile }
];
SuccessPage.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    student_name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    payment_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    payment_date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    academicYearId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    receipt_ids: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
SuccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-success',
        template: _raw_loader_success_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_success_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SuccessPage);



/***/ }),

/***/ 58678:
/*!************************************************!*\
  !*** ./src/app/proj/success/success.page.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  margin-top: 70px;\n}\n\n.right-img {\n  width: 40px;\n  display: block;\n  margin: 0 auto;\n}\n\n.message-text {\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n  color: green;\n  font-size: 20px;\n  padding: 10px;\n}\n\n.failed-img {\n  width: 70px;\n  display: block;\n  margin: 0 auto;\n}\n\n.f-grid {\n  margin: 40px;\n}\n\n.message-error {\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n  color: red;\n  font-size: 20px;\n  padding: 10px;\n}\n\n.something-error {\n  text-align: center;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTUoiLCJmaWxlIjoic3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5yaWdodC1pbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWVzc2FnZS10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmZhaWxlZC1pbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmYtZ3JpZCB7XG4gICAgbWFyZ2luOiA0MHB4O1xufVxuLm1lc3NhZ2UtZXJyb3Ige1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnNvbWV0aGluZy1lcnJvciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIFxufSJdfQ== */");

/***/ }),

/***/ 68041:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proj/success/success.page.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Payment Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen *ngIf=\"isEnable\">\n  <ion-grid class=\"message\">\n    <ion-row>\n      <img class=\"right-img\" src=\"../../../assets/images/success.png\">\n    </ion-row>\n    <ion-row>\n      <p class=\"message-text\">{{ message }}</p>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-card>\n    <ion-item>\n      <ion-label>Student Name</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">{{ student_name }}</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Payment ID</ion-label>\n      <ion-note slot=\"end\" color=\"primary\"> {{ payment_id }}</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Payment Date</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">{{ payment_date }}</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Amount</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">{{ amount }}</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">{{ status }}</ion-note>\n    </ion-item>\n  </ion-card>\n  <ion-grid>\n    <ion-row *ngIf=\"receipt_ids\">\n      <ion-col size=\"6\" >\n        <ion-button \n        expand=\"full\"      \n        color=\"tertiary\"\n        (click)=\"generateReport()\"\n        >\n          <ion-icon name=\"print-outline\"></ion-icon> \n          &nbsp;Print\n        </ion-button>\n      </ion-col>\n     \n    \n      <ion-col size=\"6\">\n        <ion-button \n        expand=\"full\"      \n        color=\"tertiary\"\n        (click)=\"back()\">Close</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!receipt_ids\">\n      <ion-col>\n        <ion-button \n        expand=\"full\"      \n        color=\"tertiary\"\n        (click)=\"back()\">Close</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content fullscreen *ngIf=\"!isEnable\">\n  <ion-grid class=\"message\">\n    \n    <ion-row>\n      <p class=\"message-error\">Your Payment Failed</p>\n    </ion-row>\n    <ion-row><p class=\"something-error\">Something went wrong.</p></ion-row>\n  </ion-grid>\n<ion-grid class=\"f-grid\">\n  <ion-row>\n    <img class=\"failed-img\" src=\"../../../assets/images/failed.png\">\n  </ion-row>\n</ion-grid>\n  <ion-grid>\n    <ion-row>\n  \n      <ion-col ><ion-button expand=\"full\"      \n        color=\"tertiary\">Try Again</ion-button></ion-col>\n     \n    </ion-row>\n  </ion-grid>\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_proj_success_success_page_ts-es2015.js.map