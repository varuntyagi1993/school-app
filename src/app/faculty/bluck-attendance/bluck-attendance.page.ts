import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-bluck-attendance',
  templateUrl: './bluck-attendance.page.html',
  styleUrls: ['./bluck-attendance.page.scss'],
})
export class BluckAttendancePage implements OnInit {
  facData:any;
  token: any;
  getStudentList: any;
  studentList: any;
  attndDate:any =  new Date().toISOString();
  myForm: FormGroup; 
  count = 0;
  constructor(public location: Location,
    public authService: AuthService,
    public general: GeneralService,
    public toastController: ToastController,
    private datePipe: DatePipe,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { 
    this.facData = JSON.parse(localStorage.getItem('myParam'));
    console.log(this.facData)
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      conducted0: [''],
      attended0: [''],
      allocated: [''],
    });
  }

  ionViewWillEnter(){
    this.token = localStorage.getItem("pas_faculty");
    this.load_studentList();
  }


   /***** Student List ****/

   load_studentList(){
    this.getStudentList = [];
    
    // let date = this.datePipe.transform(this.attndDate, 'yyyy/MM/dd');
    let page = `teaching-staff/class-guide-attendance/faculty-attendances-bulk?course_id=${this.facData.course_id}&batch_id=${this.facData.batch_id}&academic_year_id=${this.facData.academic_year_id}&year_id=${this.facData.year_id}&employeeDetailId=${this.facData.employeeDetailId}`;
    // let item = {
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
    this.authService.get_fac_t(page, this.token)
        .subscribe(
          data => {
            console.log(data, 'ashok');
            this.studentList = data;
            this.count = data.length;
            for(var i=0; i<this.count; i++) {
              this.myForm.addControl('allocated'+i, new FormControl(''));
              // this.myForm.get('conducted'+i).setValidators([]);
              this.myForm.controls['allocated'+i].setValue(data[i].class_guide_allocation_id);

              this.myForm.addControl('conducted'+i, new FormControl(''));
              this.myForm.get('conducted'+i).setValidators([Validators.required]);
              this.myForm.controls['conducted'+i].setValue(data[i].conducted);
              this.myForm.get('conducted'+i).updateValueAndValidity();

              this.myForm.addControl('attended'+i, new FormControl(''));
              this.myForm.get('attended'+i).setValidators([Validators.required]);
              this.myForm.controls['attended'+i].setValue(data[i].attended);
              this.myForm.get('attended'+i).updateValueAndValidity();
            }
            this.general.loadingDismiss();
          },
          (err: any) => {
            if(err.status == 401 || err.status == 422 || err.status == 0) {
              if(err.statusText == "Unauthorized") {
                this.general.loginAgain();
                this.router.navigateByUrl('/login');
              }
            }
            this.general.loadingDismiss();
          }
          
        );
  }
  /***** End Student List *****/

  changeValue(val) {
    for(var i=0; i<this.count; i++) {
      this.myForm.addControl('conducted'+i, new FormControl(''));
      this.myForm.controls['conducted'+i].setValue(val.detail['value']);
          this.myForm.get('conducted'+i).updateValueAndValidity();

      this.myForm.addControl('attended'+i, new FormControl(''));
      this.myForm.controls['attended'+i].setValue(val.detail['value']);
      this.myForm.get('attended'+i).updateValueAndValidity();
    }
  }

  changeConducted(val, i) {
    console.log(val.detail['value'])
    console.log(this.myForm.controls['attended'+i].value)
    if(Number(this.myForm.controls['attended'+i].value) > Number(val.detail['value'])) {
      this.myForm.controls['attended'+i].setValue('');
      this.general.showToast('Attended Value lesser than Conducted');
    }
  }

  changeAttended(val, i) {
    console.log(val.detail['value'])
    if(Number(this.myForm.controls['conducted'+i].value) < Number(val.detail['value'])) {
      this.myForm.controls['attended'+i].setValue('');
      this.general.showToast('Attended Value lesser than Conducted');
    }
  }

  onSubmit() {
    console.log(this.myForm.value);
    let a: any = [];
    for(let i=0; i<this.count; i++) {
      a.push({
        'attended': this.myForm.value['attended'+i],
        'conducted':this.myForm.value['conducted'+i],
        'class_guide_allocation_id':this.myForm.value['allocated'+i]
      });
// console.log(a);
    }
    let SaveAttadance : any = {
      attendances : a
    };
    console.log(SaveAttadance);
    this.general.loadingPresent();
    this.authService.g_postt_fac(SaveAttadance, "teaching-staff/class-guide-attendance/save-attendance-bulk", this.token)
    .subscribe(
      data =>{
        console.log(data);
        if(data['status']) {
          this.general.showToast(data.message);
        }
        this.back();
        this.general.loadingDismiss();
      },(err: any) => {
        if(err.status == 401 || err.status == 422 || err.status == 0) {
          if(err.statusText == "Unauthorized") {
            this.general.loginAgain();
            this.router.navigateByUrl('/login');
          }
        }
        this.general.loadingDismiss();
      });
    
  }
  back() {
    this.location.back();
  }
}
