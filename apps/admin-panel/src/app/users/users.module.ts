import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolModule } from '../school/school.module';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, SchoolModule, UsersRoutingModule, FeatherIconsModule],
  declarations: [UsersRoutingModule.components, DeleteUserDialogComponent, EditUserDialogComponent],
  entryComponents: [DeleteUserDialogComponent, EditUserDialogComponent]
})
export class UsersModule {}
