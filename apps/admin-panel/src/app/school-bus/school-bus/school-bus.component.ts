import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { AddSchoolBusDialogComponent } from '../add-school-bus-dialog/add-school-bus-dialog.component';
import {
  ToastService,
  MessageConstants,
  WithSubsComponent,
  SchoolModel,
  SchoolService,
  SchoolBusModel,
  SchoolBusService,
  BasicSchoolBusModel
} from '@stt-nx-workspace/stt-common';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './school-bus.component.html',
  styleUrls: ['./school-bus.component.scss']
})
export class SchoolBusComponent extends WithSubsComponent implements OnInit {
  constructor(
    private schoolService: SchoolService,
    private schoolBusService: SchoolBusService,
    public dialog: MatDialog,
    private toastService: ToastService
  ) {
    super();
  }

  schools: Observable<SchoolModel[]>;
  selectedSchoolCode: string;
  busDataSource: MatTableDataSource<BasicSchoolBusModel>;

  onSelectSchool() {
    this.refresh();
  }
  onBusDeleted() {
    this.refresh();
  }
  refresh() {
    this.subs.push(this.schoolBusService.getBySchool(this.selectedSchoolCode).subscribe(u => (this.busDataSource = new MatTableDataSource(u))));
  }

  OpenAddSchoolBusDialog(): void {
    const dialogRef = this.dialog.open(AddSchoolBusDialogComponent, {
      width: '600px'
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe(saved => {
        if (saved) {
          this.toastService.success(MessageConstants.SchoolBusSaved);
        }
      })
    );
  }
  ngOnInit() {
    this.schools = this.schoolService.getAll<SchoolModel>();
  }
}
