import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailComponent } from '.';
import { AuthGuard, MainComponent } from '@stt-nx-workspace/stt-common';
import { linkData } from '../link-data';

const routes: Routes = [
  {
    path: 'school',
    component: MainComponent,
    data: linkData,
    children: [
      {
        path: '',
        component: SchoolComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SchoolDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {}
