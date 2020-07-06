import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolBusRoutingModule } from './school-bus-routing.module';
import { AddSchoolBusDialogComponent } from './add-school-bus-dialog/add-school-bus-dialog.component';
import { DeleteSchoolBusDialogComponent } from './delete-school-bus-dialog/delete-school-bus-dialog.component';
import { EditSchoolBusDialogComponent } from './edit-school-bus-dialog/edit-school-bus-dialog.component';
import { SchoolBusComponent } from './school-bus/school-bus.component';
import { SchoolBusDetailComponent } from './school-bus-detail/school-bus-detail.component';
import { SchoolBusListComponent } from './school-bus-list/school-bus-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SchoolBusRoutingModule, FeatherIconsModule],
  declarations: [
    AddSchoolBusDialogComponent,
    DeleteSchoolBusDialogComponent,
    EditSchoolBusDialogComponent,
    SchoolBusComponent,
    SchoolBusDetailComponent,
    SchoolBusListComponent
  ],
  entryComponents: [AddSchoolBusDialogComponent, DeleteSchoolBusDialogComponent, EditSchoolBusDialogComponent]
})
export class SchoolBusModule {}
