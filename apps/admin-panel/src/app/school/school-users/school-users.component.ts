import { Component, ChangeDetectionStrategy, EventEmitter, OnInit, ViewChild, Input, OnChanges, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { UserModel, ToastService, Common, WithSubsComponent, PushType, BasicSchoolModel } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-school-users',
  templateUrl: './school-users.component.html',
  styleUrls: ['./school-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolUsersComponent extends WithSubsComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input() public users: UserModel[];
  @Input() public dataSource: MatTableDataSource<UserModel>;
  @Input() public disabled: boolean;
  @Input() public displayedColumns: string[] = ['fullName', 'school', 'category', 'action'];
  @Output() userDetached = new EventEmitter();

  constructor(private toastService: ToastService, public dialog: MatDialog) {
    super();
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  ngOnInit() {}

  ngOnChanges() {
    if (!this.dataSource) {
      return;
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'fullName': {
          return item['firstName'] + item['lastName'];
        }
        default: {
          return item[property];
        }
      }
    };
  }

  applySearch(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCategory(cat: number) {
    return Common.getCategory(cat);
  }
  getStatus(lastStatusId: number) {
    switch (lastStatusId) {
      case PushType.ENTERING_SCHOOL: {
        return 'Entering School';
      }
      case PushType.LEAVING_SCHOOL: {
        return 'Leaving School';
      }
      default:
        return '[ unknown ]';
    }
  }

  getSchoolName(school: BasicSchoolModel) {
    if (school) {
      return school.name;
    }
    return '[not set]';
  }
  getSchoolCode(school: BasicSchoolModel) {
    if (school) {
      return school.code;
    }
    return null;
  }
}
