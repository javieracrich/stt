import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {
  UserModel,
  SchoolService,
  WithSubsComponent,
  UserCategory,
  SchoolModel,
  GradeRoomModel,
  PostUserFilter,
  SchoolGrade
} from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends WithSubsComponent implements OnInit, OnDestroy {
  usersDataSource: MatTableDataSource<UserModel>;
  categories: { id: number; name: string }[] = [];
  selectedUserCategory = UserCategory.Student;
  constructor(private schoolService: SchoolService) {
    super();
  }

  public users: Observable<UserModel[]>;
  public schools: Observable<SchoolModel[]>;
  public rooms$: Observable<GradeRoomModel[]>;
  public selectedSchoolCode = null;
  public selectedRoomCode = null;

  ngOnInit() {
    this.schools = this.schoolService.getAll();
    this.initCategories();
  }

  studentsSelected() {
    return this.selectedUserCategory === UserCategory.Student;
  }
  roomSelected() {
    return this.selectedRoomCode != null;
  }

  onSelectSchool() {
    this.getRooms();
  }

  initCategories() {
    for (const n in UserCategory) {
      if (typeof UserCategory[n] === 'number') {
        this.categories.push({ id: <any>UserCategory[n], name: n });
      }
    }
  }

  getRooms() {
    this.rooms$ = this.schoolService.getRooms(this.selectedSchoolCode);
  }

  getRoomName(room: GradeRoomModel) {
    return `${SchoolGrade[room.grade]} - ${room.name}`;
  }

  refreshSchoolUsers() {
    if (this.studentsSelected() && this.roomSelected()) {
      this.subs.push(
        this.schoolService
          .getStudentsInroom(this.selectedSchoolCode, this.selectedRoomCode)
          .subscribe(u => (this.usersDataSource = new MatTableDataSource(u)))
      );
    } else {
      const filter: PostUserFilter = {
        category: this.selectedUserCategory
      };

      this.subs.push(
        this.schoolService.getUsers(this.selectedSchoolCode, filter).subscribe(u => (this.usersDataSource = new MatTableDataSource(u)))
      );
    }
  }
}
