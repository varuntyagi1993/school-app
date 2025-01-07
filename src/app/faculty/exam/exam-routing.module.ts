import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamPage } from './exam.page';

const routes: Routes = [
  

  {
    path: '',
    component: ExamPage,
    children: [
      {
        path: 'class-list-mark',
        loadChildren: () => import('../../faculty/class-list-mark/class-list-mark.module').then( m => m.ClassListMarkPageModule),
        
      },
      {
        path: 'mark-remarks',
        loadChildren: () => import('../../faculty/mark-remarks/mark-remarks.module').then( m => m.MarkRemarksPageModule),
        
      },
      {
        path: '',
        redirectTo: 'class-list-mark',
        pathMatch: 'full'
      },
      

    ]
  },
  {
    path: '',
    redirectTo: '/class-list-mark',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPageRoutingModule {}
