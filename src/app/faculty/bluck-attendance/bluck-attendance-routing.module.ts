import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluckAttendancePage } from './bluck-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: BluckAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluckAttendancePageRoutingModule {}
