import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard, MainComponent } from '@stt-nx-workspace/stt-common';
import { linkData } from '../link-data';

const routes: Routes = [
  {
    path: 'users',
    component: MainComponent,
    data: linkData,
    children: [
      {
        path: '',
        component: UsersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add',
        component: AddUserComponent
      },
      {
        path: ':id',
        component: UserDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  static components = [AddUserComponent, UserDetailComponent, UsersComponent];
}
