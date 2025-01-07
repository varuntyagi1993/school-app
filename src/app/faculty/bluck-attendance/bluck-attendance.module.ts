import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluckAttendancePageRoutingModule } from './bluck-attendance-routing.module';

import { BluckAttendancePage } from './bluck-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BluckAttendancePageRoutingModule
  ],
  declarations: [BluckAttendancePage]
})
export class BluckAttendancePageModule {}
