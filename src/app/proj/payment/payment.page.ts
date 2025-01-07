import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
// import sha256 from 'crypto-js/sha256';
// import hmac_sha256 from 'crypto-js/hmac-sha256';
// import Base64 from 'crypto-js/enc-base64';
import { GeneralService } from 'src/app/services/general.service';
import { ModalController, Platform } from '@ionic/angular';
import { SuccessPage } from '../success/success.page';
import { PayReportPage } from '../pay-report/pay-report.page';

// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { File } from '@ionic-native/file/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { DatePipe } from '@angular/common';
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  token: any;
  student_id: any;
  orders: any;
  orders1: any;
  logo: any;
  status = false;
  error: any;
  pdfObj = null;
  academicYearId: any;
  admissionFeesInStudentDashboard: any;
  isEnable = false;
  isError = false;
isTab = true;
  type = 'fees';
  isValid = true;
  amount = 0;
  paidDate:any =  new Date().toISOString();
  setting: any;
  constructor(public authService: AuthService,
    public gelService: GeneralService,
    private modalController: ModalController,
    private plt: Platform,
    // private file: File,
    private previewAnyFile: PreviewAnyFile,
    private datePipe: DatePipe
    // private fileOpener: FileOpener
    ) { 
      setTimeout(() => {
        // this.intialData();
        
        console.log('sfsd');
      }, 2000);

      this.gelService.listen().subscribe((m: any) => {
        console.log(m, 'fdf34');
        console.log(localStorage.getItem('event'))
        //  this.getRefresh(localStorage.getItem('event'));
      })
    }

  ngOnInit() {

  }

  segmentChanged() {
    this.orders = [];
    // console.log(ev.detail['value']);
    // if(ev.detail['value'] == 'fees') 
    // {
    //   this.intialData();
    // }
    // if(ev.detail['value'] == 'fee-v3') {
    var data = '';
    var link = "pay-fee-v3/student/" + this.student_id + "/student-fees";
    // this.gelService.loadingPresent();
    this.authService.g_get(data, link, this.token)
                    .subscribe(data => {
                      console.log(data);
                      this.orders1 = data['studentFees'];
                      this.amount = this.orders1[0]['pending_amount'];
                      console.log(this.orders1[0], 'ada');
                      // this.gelService.loadingDismiss();
                    },  error => {
                      // this.gelService.loadingDismiss();
                      console.log(error);
                      if(error.status == 401 ) {
                        this.authService.loginAgain();
                      }
                      else if (error.status_code == 400) {
                        this.error = error.message;
                        this.isError = true;
                        console.error("Error!", error);
                        //this.gelService.presentAlert_g(this.error);
                      }
                      else if(error.status_code == 404) {
                        this.error = error.message;
                        this.isError = true;
                      }
                      else{
                        this.gelService.presentAlert_g("Please check your Internet Connection");
                      }
                  });
                // }

  }
  ionViewWillEnter() {
    this.token = localStorage.getItem("pas_tok");
    this.student_id = localStorage.getItem("c_stud");
   
    this.intialData();
                //console.log('Rupees ' + this.inWords(100000) + 'only');
    //console.log(this.exam_practicular)
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }



  generalSetting() {
    var data = '';
    var link = "pay-fee-v3/student/" + this.student_id + "/general-settings";
    // this.gelService.loadingPresent();
    this.authService.g_get(data, link, this.token).subscribe(resp => {
console.log(resp);
this.setting = resp;
    });
  }

  intialData() {
    var data = '';
    var link = "student/" + this.student_id + "/get-challans";
    //console.log(examParticular.detail['value'])
    this.segmentChanged();
    this.generalSetting();
    this.gelService.loadingPresent();
    this.authService.g_get(data, link, this.token)
                    .subscribe(data => {
                      console.log(data)
                      this.logo = data.logo;
                      this.admissionFeesInStudentDashboard = data.admissionFeesInStudentDashboard;
                      this.orders = data.challans;
                      this.academicYearId = data.academicYearId;
                      this.isError = false;
                      console.log(this.academicYearId );
                      this.gelService.loadingDismiss();
                    },  error => {
                      this.gelService.loadingDismiss();
                      console.log(error);
                      if(error.status == 401 ) {
                        this.authService.loginAgain();
                      }
                      else if (error.status_code == 400) {
                        this.error = error.message;
                        this.isError = true;
                        console.error("Error!", error);
                        //this.gelService.presentAlert_g(this.error);
                      }
                      else if(error.status_code == 404) {
                        this.error = error.message;
                        this.isError = true;
                      }
                      else{
                        this.gelService.presentAlert_g("Please check your Internet Connection");
                      }
                  })
  }

  onChangeAmount(event, pending_amount) {
   this.isValid = (event.detail['value'] <= pending_amount ) && event.detail['value'] != 0;
    this.amount = event.detail['value'];

  }

  generateOrder(order, type) {
    console.log(order)
    if(type == 'fees') {
      var item = {
        "challan_id": order.challan_id,
        "challan_type_id": order.challan_type_id,
        "amount": order.amount
      };
      console.log(this.token);
      var link = "student/" + this.student_id + "/create-order";
      this.gelService.loadingPresent();
      this.authService.g_postt(item, link, this.token)
                      .subscribe(data => {
                        this.gelService.loadingDismiss();
                        console.log(data);
                        var order_id = data.razorpayOrderId;
                        var secret = order.paymentKey;
                        var options = {
                          description: 'Online Payment',
                          image: this.logo,
                          order_id: data.razorpayOrderId,
                          currency: 'INR',
                          key: order.paymentKey,
                          amount: order.amount,
                          name: order.challan_type,
                          theme: {
                            color: '#620b23'
                              }
                          };
                          console.log(options, 'orders');
                          var successCallback = (success) => {
                            this.status = true;
                            console.log(success , 'success');
                            //alert('payment_id: ' + success.razorpay_payment_id)
                            var razorpay_payment_id = success;
                            this.isEnable = true;
                              var response = {
                                "orderId" : order_id,
                                "challanData" : {
                                  "student_id" : order.student_id,
                                  "challan_type_id" : order.challan_type_id, 
                                  "challan_id" : order.challan_id 
                                },
                                "paymentResponse" :  {
                                  "razorpay_payment_id": razorpay_payment_id 
                                },
                                "isEnable": this.isEnable
                              }
                              this.paymentResponse(response, 'fees');
                              console.log(success)
                              
                          }
                          var cancelCallback = (error) => {
                            console.log(error);
                            let errors = error.error;
                            this.gelService.presentAlert_g(errors.description);
                            this.isEnable = false;
                            // var response = {
                            //   'message':'',
                            //   'student_name': '',
                            //   'payment_id': '',
                            //   'payment_date': '',
                            //   'amount': '',
                            //   'status': '',
                            //   "isEnable": this.isEnable
                            // }
                            //this.openModal(response);
                          }
                            
                            RazorpayCheckout.open(options, successCallback, cancelCallback);
                            console.log(this.status)
      },  error => {
        this.gelService.loadingDismiss();
        if(error.status == 401 ) {
         
          this.authService.loginAgain();
          //this.router.navigateByUrl('/login');
        
        }
        else if (error.status == 400) {
          this.error = error.message;
          console.error("Error!", error.status_code, error.message);
          this.gelService.presentAlert_g(this.error);
        }
        else{
          console.log(error);
          
          this.gelService.presentAlert_g("Please check your Internet Connection1");
        }
      })
    }
    if(type = 'fee-v3') {
      // order.amount = this.amount;
      let o = {
        "student_id": order.student_id,
        "institution_id": order.institution_id,
        "student_name": order.student_name,
        "fathers_name": order.fathers_name,
        "mothers_name": order.mothers_name,
        "application_no": order.application_no,
        "class_batch": order.class_batch,
        "year": order.year,
        "challan_type_id": order.challan_type_id,
        "challan_type": order.challan_type,
        "challan_exist": order.challan_exist,
        "challan_number": order.challan_number,
        "total_fees": order.total_fees,
        "pending_amount": order.pending_amount,
        "paid_amount": order.paid_amount,
        "concession": order.concession,
        "student_concession": order.student_concession,
        "remarks_receipt": order.remarks_receipt,
        "installment": order.installment,
        "academic_year_id": order.academic_year_id,
        "year_id": order.year_id,
        "programme_id": order.programme_id,
        "combination_id": order.combination_id,
        "combination": order.combination,
        "batch_id": order.batch_id,
        "fee_batch_id": order.fee_batch_id,
        "second_language_id": order.second_language_id,
        "second_language": order.second_language,
        "is_nri": order.is_nri,
        "is_nri_display": order.is_nri_display,
        "state_id": order.state_id,
        "last_studied_state": order.last_studied_state,
        "district_id": order.district_id,
        "last_studied_district": order.last_studied_district,
        "admission_board_id": order.admission_board_id,
        "last_studied_board": order.last_studied_board,
        "email_id": order.email_id,
        "student_mobile_no": order.student_mobile_no,
        "admission_number": order.admission_number,
        "freeship": order.freeship,
        "fee_structure_category_id": order.fee_structure_category_id,
        "challanIds": order.challanIds,
        "fathers_mobile_no": order.fathers_mobile_no,
        "mothers_mobile_no": order.mothers_mobile_no,
        "student_minimum_amount": order.student_minimum_amount,
        "payment_block": order.payment_block,
        "payment_block_print": order.payment_block_print,
        "receipt_view": order.receipt_view,
        "receipt_ids": order.receipt_ids,
        "otherFees": order.otherFees,
        "arrearFees": order.arrearFees,
        "settled_amount": order.settled_amount,
        "non_settled_amount": order.non_settled_amount,
        "pay_amount": this.amount,
        "minimum_amount": order.minimum_amount,
        "possible_installment": order.possible_installment,
        "fee_details": order.fee_details,
        "discount_details": order.discount_details,
        "fee_type_id": order.fee_type_id,
        "paymentKey": order.paymentKey,
        "amount": this.amount
      };

      // "fee_details": [
        //   {
        //     "challan_type_id": 21,
        //     "fee_type_id": 21,
        //     "setting_fee_header_id": 110,
        //     "fee_item": "Tuition",
        //     "type": "COMBINATION_FEES",
        //     "amount": "0.00",
        //     "sort_order": 2,
        //     "fee_structure_amount": 15640,
        //     "paid_amount": 0,
        //     "balance": 15640,
        //     "discounts": {
        //       "42": null,
        //       "43": null
        //     }
        //   },
        //   {
        //     "challan_type_id": 21,
        //     "fee_type_id": 21,
        //     "setting_fee_header_id": 111,
        //     "fee_item": "Exam",
        //     "type": "COMBINATION_FEES",
        //     "amount": "0.00",
        //     "sort_order": 3,
        //     "fee_structure_amount": 345,
        //     "paid_amount": 0,
        //     "balance": 345,
        //     "discounts": {
        //       "42": null,
        //       "43": null
        //     }
        //   },
        //   {
        //     "challan_type_id": 21,
        //     "fee_type_id": 21,
        //     "setting_fee_header_id": 112,
        //     "fee_item": "Sports",
        //     "type": "COMBINATION_FEES",
        //     "amount": "0.00",
        //     "sort_order": 4,
        //     "fee_structure_amount": 60,
        //     "paid_amount": 0,
        //     "balance": 60,
        //     "discounts": {
        //       "42": null,
        //       "43": null
        //     }
        //   }
        // ],

        // "discount_details": {
        //   "42": 0,
        //   "43": 0
        // },
      // let o = {
      //   "student_id": order.student_id,
      //   "institution_id": order.institution_id,
      //   "student_name": order.student_name,
      //   "fathers_name": order.fathers_name,
      //   "mothers_name": order.mothers_name,
      //   "application_no": order.application_no,
      //   "class_batch": order.class_batch,
      //   "year": order.year,
      //   "challan_type_id": order.challan_type_id,
      //   "challan_type": order.challan_type,
      //   "challan_exist": order.challan_exist,
      //   "challan_number": order.challan_number,
      //   "total_fees": order.total_fees,
      //   "pending_amount": order.pending_amount,
      //   "paid_amount": order.paid_amount,
      //   "concession": order.concession,
      //   "student_concession": order.student_concession,
      //   "remarks_receipt": order.remarks_receipt,
      //   "installment": order.installment,
      //   "academic_year_id": order.academic_year_id,
      //   "year_id": order.year_id,
      //   "programme_id": order.programme_id,
      //   "combination_id": order.combination_id,
      //   "combination": order.combination_id,
      //   "batch_id": order.batch_id,
      //   "fee_batch_id": order.fee_batch_id,
      //   "second_language_id": order.second_language_id,
      //   "second_language": order.second_language,
      //   "is_nri": order.is_nri,
      //   "is_nri_display": order.is_nri_display,
      //   "state_id": order.state_id,
      //   "last_studied_state": order.last_studied_state,
      //   "district_id": order.district_id,
      //   "last_studied_district": order.last_studied_district,
      //   "admission_board_id": order.admission_board_id,
      //   "last_studied_board": order.last_studied_board,
      //   "email_id": order.email_id,
      //   "student_mobile_no": order.student_mobile_no,
      //   "admission_number": order.admission_number,
      //   "freeship": order.freeship,
      //   "fee_structure_category_id": order.fee_structure_category_id,
      //   "challanIds": order.challanIds,
      //   "fathers_mobile_no": order.fathers_mobile_no,
      //   "mothers_mobile_no": order.mothers_mobile_no,
      //   "student_minimum_amount": order.student_minimum_amount,
      //   "payment_block": order.payment_block,
      //   "payment_block_print": order.payment_block_print,
      //   "receipt_view": order.receipt_view,
      //   "receipt_ids": order.receipt_ids,
      //   "otherFees": order.otherFees,
      //   "arrearFees": order.arrearFees,
      //   "settled_amount": order.settled_amount,
      //   "non_settled_amount": order.non_settled_amount,
      //   "pay_amount": order.pay_amount,
      //   "minimum_amount": order.minimum_amount,
      //   "possible_installment": order.possible_installment,
      //   "fee_details": order.fee_details,
      //   "discount_details": order.discount_details,
      //   "fee_type_id": order.fee_type_id,
      //   "paymentKey": order.paymentKey,
      //   "amount": order.amount
      // };
      console.log(o, 'as')
      
      var link = "pay-fee-v3/student/" + this.student_id + "/create-order";
      this.gelService.loadingPresent();
      this.authService.g_postt(o, link, this.token)
                      .subscribe(data => {
                        this.gelService.loadingDismiss();
                        console.log(data);
                        var challan_id = data.challanId;
                        var order_id = data.razorpayOrderId;
                        var options = {
                          description: 'Online Payment',
                          image: this.logo,
                          order_id: data.razorpayOrderId,
                          currency: 'INR',
                          key: order.paymentKey,
                          amount: this.amount,
                          name: order.challan_type,
                          theme: {
                            color: '#620b23'
                          }
                        };
                          console.log(options, 'orders');
                          var successCallback = (success) => {
                            this.status = true;
                            console.log(success , 'success');
                            //alert('payment_id: ' + success.razorpay_payment_id)
                            var razorpay_payment_id = success;
                            // alert(razorpay_payment_id+"orderId:"+order_id );
                            this.isEnable = true;
                              var response = {
                                "paymentResponse" :  {
                                  "razorpay_payment_id": razorpay_payment_id,
                                  "razorpay_order_id": order_id,
                                  "razorpay_signature":"" 
                                },
                                "feeData": {
                                  "student_id": o.student_id,
                                  "institution_id": o.institution_id,
                                  "student_name": o.student_name,
                                  "fathers_name": o.fathers_name,
                                  "mothers_name": o.mothers_name,
                                  "application_no": o.application_no,
                                  "class_batch": o.class_batch,
                                  "year": o.year,
                                  "challan_type_id": o.challan_type_id,
                                  "challan_type": o.challan_type,
                                  "challan_exist": o.challan_exist,
                                  "challan_number": o.challan_number,
                                  "total_fees": o.total_fees,
                                  "pending_amount": o.pending_amount,
                                  "paid_amount": o.paid_amount,
                                  "concession": o.concession,
                                  "student_concession": o.student_concession,
                                  "remarks_receipt": o.remarks_receipt,
                                  "installment": o.installment,
                                  "academic_year_id": o.academic_year_id,
                                  "year_id": o.year_id,
                                  "programme_id": o.programme_id,
                                  "combination_id": o.combination_id,
                                  "combination": o.combination,
                                  "batch_id": o.batch_id,
                                  "fee_batch_id": o.fee_batch_id,
                                  "second_language_id": o.second_language_id,
                                  "second_language": o.second_language,
                                  "is_nri": o.is_nri,
                                  "is_nri_display": o.is_nri_display,
                                  "state_id": o.state_id,
                                  "last_studied_state": o.last_studied_state,
                                  "district_id": o.district_id,
                                  "last_studied_district": o.last_studied_district,
                                  "admission_board_id": o.admission_board_id,
                                  "last_studied_board": o.last_studied_board,
                                  "email_id": o.email_id,
                                  "student_mobile_no": o.student_mobile_no,
                                  "admission_number": o.admission_number,
                                  "freeship": o.freeship,
                                  "fee_structure_category_id":o.fee_structure_category_id,
                                  "challanIds": o.challanIds,
                                  "fathers_mobile_no": o.fathers_mobile_no,
                                  "mothers_mobile_no": o.mothers_mobile_no,
                                  "student_minimum_amount": o.student_minimum_amount,
                                  "payment_block": o.payment_block,
                                  "payment_block_print": o.payment_block_print,
                                  "receipt_view": o.receipt_view,
                                  "receipt_ids": o.receipt_ids,
                                  "otherFees": o.otherFees,
                                  "arrearFees": o.arrearFees,
                                  "settled_amount": o.settled_amount,
                                  "non_settled_amount": o.non_settled_amount,
                                  "pay_amount": o.amount,
                                  "minimum_amount": o.minimum_amount,
                                  "possible_installment": o.possible_installment,
                                  "fee_details": o.fee_details,
                                  "discount_details": o.discount_details,
                                  "fee_type_id": o.fee_type_id,
                                  "paymentKey": o.paymentKey,
                                  "amount": o.amount,
                                  "challan_id": challan_id,
                                },

                                "orderId" : order_id,
                                "paymentDate": this.datePipe.transform(this.paidDate, 'yyyy-MM-dd'), 
                                "academic_year_id":order.academic_year_id,
                                
                              }
                              // alert(JSON.stringify(response));
                              this.paymentResponse(response, 'fee-v3');
                              console.log(response);
                              
                          }
                          var cancelCallback = (error) => {
                            console.log(error);
                            let errors = error.error;
                            this.gelService.presentAlert_g(errors.description);
                            this.isEnable = false;
                            // var response = {
                            //   'message':'',
                            //   'student_name': '',
                            //   'payment_id': '',
                            //   'payment_date': '',
                            //   'amount': '',
                            //   'status': '',
                            //   "isEnable": this.isEnable
                            // }
                            //this.openModal(response);
                          }
                            
                            RazorpayCheckout.open(options, successCallback, cancelCallback);
                            console.log(this.status)
                      }, error => {
                        this.gelService.loadingDismiss();
                        if(error.status == 401 ) {
                         
                          this.authService.loginAgain();
                          //this.router.navigateByUrl('/login');
                        
                        }
                        else if (error.status == 400) {
                          this.error = error.message;
                          console.error("Error!", error.status_code, error.message);
                          this.gelService.presentAlert_g(this.error);
                        }
                        else{
                          console.log(error);
                          
                          this.gelService.presentAlert_g("Please check your Internet Connection1");
                        }
                      });
    }
    
  }

   paymentResponse(response, type) {
    console.log(response, 'sdfd');
    if(type === 'fees') {
      var link1 = "student/" + this.student_id + "/payment-response";
      this.gelService.loadingPresent();
       this.authService.g_postt(response, link1, this.token)
                               .subscribe(resp => {
                                 resp.isEnable = response.isEnable;
                                 console.log(resp);
                                 this.openModal(resp);
                                 this.gelService.loadingDismiss();
                               },  error => {
                                 this.gelService.loadingDismiss();
                                 if(error.status == 401 ) {
                                   this.authService.loginAgain();
                                   //this.router.navigateByUrl('/login');
                                 }
                                 else if (error.status_code == 400) {
                                   this.error = error.message;
                                   console.error("Error!", error.status_code, error.message);
                                   this.gelService.presentAlert_g(this.error);
                                 }
                                 else{
                                   console.log(error)
                                   this.gelService.presentAlert_g("Please check your Internet Connection2");
                                 }
                             });
    }

    if(type = 'fee-v3') {
      var link1 = "pay-fee-v3/student/" + this.student_id + "/payment-response";
      this.gelService.loadingPresent();
       this.authService.g_postt(response, link1, this.token)
        .subscribe(resp => {
          resp.isEnable = this.isEnable;
          console.log(resp);
          this.openModal(resp);
          this.gelService.loadingDismiss();
        },  error => {
          this.gelService.loadingDismiss();
          if(error.status == 401 ) {
            this.authService.loginAgain();
            //this.router.navigateByUrl('/login');
          }
          else if (error.status_code == 400) {
            this.error = error.message;
            console.error("Error!", error.status_code, error.message);
            this.gelService.presentAlert_g(this.error);
          }
          else{
            console.log(error)
            // alert("Error!"+ error.status+ "mesg:" + error.message);
            this.gelService.presentAlert_g("Please check your Internet Connection2");
          }
      });
    }
   
  }

async openModal(resp) {
  console.log(resp);
  // alert(JSON.stringify(resp));
  const modal = await this.modalController.create({
    component: SuccessPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'message': resp.message,
      'student_name': resp.student_name,
      'payment_id': resp.payment_id,
      'payment_date': resp.payment_date,
      'amount': resp.amount,
      'academicYearId':resp.academicYearId,
      'receipt_ids': resp.receipt_ids,
      'status': resp.status,
      'isEnable': resp.isEnable
    }
  });
  return await modal.present();
}

// async generateReport(receipt_ids) {
//   const logo = await this.getBase64ImageFromURL("../../assets/images/logo.jpeg");
//   var link1 = "student/" + this.student_id + "/print-receipt";
//   var data = {
//     "ids": receipt_ids,
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
//           {text: ': '+ (recieptDetails[0].receipt_number) ? recieptDetails[0].receipt_number : '', margin: [ -20, 0, 0, 0 ], fontSize: 12},
//           {text: "Payment Date", margin: [ -20, 0, 0, 0 ], fontSize: 12},
//           {text: ': '+ (recieptDetails[0].receipt_date) ? recieptDetails[0].receipt_date : '',  margin: [ -25, 0, 0, 0 ], fontSize: 12},
//         ],
//         [ 
//           {text: "NAME", fontSize: 12}, 
//           {text: ': '+ (recieptDetails[0].student_name) ? recieptDetails[0].student_name : '', margin: [ -20, 0, 0, 0 ], fontSize: 12},
//           {text: "CLASS", margin: [ -20, 0, 0, 0 ], fontSize: 12},
//           {text: ': '+ (recieptDetails[0].course_name) ? recieptDetails[0].course_name : '' + ' - ' + (recieptDetails[0].batch_name) ? recieptDetails[0].batch_name : '',  margin: [ -25, 0, 0, 0 ], fontSize: 12},
//         ],
//         [ 
//           {text:  "Admission No.", fontSize: 12},
//           {text: ': '+ (recieptDetails[0].admission_number) ? recieptDetails[0].admission_number : '', margin: [ -20, 0, 0, 0 ], fontSize: 12},
//           {text: "Installment", margin: [ -20, 0, 0, 0 ], fontSize: 12},
//           {text: ": " + (installment) ? installment : '',  margin: [ -25, 0, 0, 0 ], fontSize: 12}
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
//           {text: ': '+ (amt) ? formatter.format(amt) : '', margin: [ -9, 0, 0, 0 ], fontSize: 12},
//           {text: ""},
//           {text: ""}
//         ],
//         [ 
//           {text: "Mode of Payment", fontSize: 12}, 
//           {text: ': ' + (recieptDetails[0].payment_type) ? recieptDetails[0].payment_type : '', margin: [ -9, 0, 0, 0 ], fontSize: 12},
//           {text: ""},
//           {text: ""}
//         ],
//         [ 
//           {text:  "Amount in words", fontSize: 12},
//           {text: ': Rupees ' + (amt) ? this.inWords(amt) +'only' : '', margin: [ -9, 0, 0, 0 ], fontSize: 12},
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

generateReport(receipt) {
  console.log(receipt);
  var url = this.authService.base_path + 'pay-fee-v3/student/'+receipt.student_id+'/print-receipt?academic_year_id='+this.academicYearId+'&ids='+receipt.receipt_ids+'&type=pdf';
  console.log(url);
    this.previewAnyFile.preview(url)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error))
}


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
    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    var n = [];
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
    return str;
}

}
