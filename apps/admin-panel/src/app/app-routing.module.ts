import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card/card.component';
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
        path: 'card',
        component: CardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'map',
        component: MapComponent,
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
        path: 'register',
        component: RegisterComponent
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
