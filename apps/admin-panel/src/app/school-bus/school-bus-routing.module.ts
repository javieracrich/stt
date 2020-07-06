import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolBusComponent } from './school-bus/school-bus.component';
import { SchoolBusDetailComponent } from './school-bus-detail/school-bus-detail.component';
import { AuthGuard, MainComponent } from '@stt-nx-workspace/stt-common';
import { linkData } from '../link-data';

const routes: Routes = [
  {
    path: 'school-bus',
    component: MainComponent,
    data: linkData,
    children: [
      {
        path: '',
        component: SchoolBusComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SchoolBusDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolBusRoutingModule {}
