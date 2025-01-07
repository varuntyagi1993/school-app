import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  constructor(public router: Router,
    private location: Location) { }

  ngOnInit() {
  }

  rout(val) {
    console.log(val, "val");
    this.router.navigate([val]);
  }

  back() {
    this.location.back();
  }
}
