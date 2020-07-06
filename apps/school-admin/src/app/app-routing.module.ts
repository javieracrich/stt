import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BusesComponent } from './buses/buses.component';
import { StudentsComponent } from './students/students.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent, AuthGuard, SttLoginComponent, ClearComponent, MainComponent } from '@stt-nx-workspace/stt-common';
import { linkData } from './link-data';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: linkData,

    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'buses',
        component: BusesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'students',
        component: StudentsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'chat',
        component: ChatComponent,
        canActivate: [AuthGuard]
      }
    ]
  },

  {
    path: '',
    component: ClearComponent,
    children: [
      {
        path: 'login',
        component: SttLoginComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
