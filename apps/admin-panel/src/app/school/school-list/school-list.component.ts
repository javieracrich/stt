import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SchoolService, ToastService, WithSubsComponent, SchoolModel } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent extends WithSubsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: SchoolModel[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'director', 'action'];

  constructor(private schoolService: SchoolService, public dialog: MatDialog, private toastService: ToastService) {
    super();
  }

  ngOnInit() {
    this.dataSource = []
    this.refresh();
  }

  refresh() {
    this.subs.push(
      this.schoolService.getAll<SchoolModel>().subscribe(data => {
        this.dataSource = data;
      })
    );
  }

  getDirectorId(row) {
    if (row.director) {
      return row.director.id;
    }
    return '';
  }
  getDirectorName(row) {
    if (row.director) {
      return `${row.director.firstName} ${row.director.lastName}`;
    }
    return '[ not set ]';
  }
}
