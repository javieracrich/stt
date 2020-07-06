import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';

import { EditSchoolDialogComponent } from './edit-school-dialog/edit-school-dialog.component';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolUsersComponent } from './school-users/school-users.component';
import { AddSchoolDialogComponent } from './add-school-dialog/add-school-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SchoolRoutingModule, FeatherIconsModule],
  exports: [SchoolUsersComponent],
  declarations: [
    AddSchoolDialogComponent,
    EditSchoolDialogComponent,
    SchoolComponent,
    SchoolDetailComponent,
    SchoolListComponent,
    SchoolUsersComponent
  ],
  entryComponents: [AddSchoolDialogComponent, EditSchoolDialogComponent]
})
export class SchoolModule {}
