import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSchoolDialogComponent } from './../add-school-dialog/add-school-dialog.component';
import { SchoolListComponent } from '../school-list/school-list.component';
import { ToastService, MessageConstants, WithSubsComponent } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent extends WithSubsComponent {
  @ViewChild(SchoolListComponent, { static: false }) schoolList: SchoolListComponent;

  constructor(public dialog: MatDialog, private toastService: ToastService) {
    super();
  }

  openAddSchoolDialog(): void {
    const dialogRef = this.dialog.open(AddSchoolDialogComponent, { width: '400px' });

    this.subs.push(
      dialogRef.afterClosed().subscribe(saved => {
        if (saved) {
          this.toastService.success(MessageConstants.SchoolSaved);
          this.schoolList.refresh();
        }
      })
    );
  }
}
