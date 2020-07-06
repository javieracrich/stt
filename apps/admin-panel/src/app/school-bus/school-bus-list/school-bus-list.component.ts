import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteSchoolBusDialogComponent } from '../delete-school-bus-dialog/delete-school-bus-dialog.component';
import { SchoolBusService, ToastService, MessageConstants, WithSubsComponent, SchoolBusModel } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-school-bus-list',
  templateUrl: './school-bus-list.component.html',
  styleUrls: ['./school-bus-list.component.css']
})
export class SchoolBusListComponent extends WithSubsComponent {
  @Input() public dataSource: MatTableDataSource<SchoolBusModel>;
  @Output() busDeleted: EventEmitter<void> = new EventEmitter();
  displayedColumns = ['name', 'patent', 'action'];
  constructor(private schoolBusService: SchoolBusService, public dialog: MatDialog, private toastService: ToastService) {
    super();
  }

  openDeleteSchoolBusDialog(schoolBusCode) {
    const dialogRef = this.dialog.open(DeleteSchoolBusDialogComponent, {
      width: '400px',
      data: schoolBusCode
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe(deleted => {
        if (deleted) {
          this.toastService.success(MessageConstants.SchoolBusDeleted);
          this.busDeleted.emit();
        }
      })
    );
  }
}
