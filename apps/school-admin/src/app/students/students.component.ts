import { MatSelectChange } from '@angular/material/select';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolService, WithSubsComponent, SchoolModel, GradeRoomModel, UserModel, SchoolGrade } from '@stt-nx-workspace/stt-common';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'stt-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent extends WithSubsComponent implements OnInit {
  schools$: Observable<SchoolModel[]>;
  rooms$: Observable<GradeRoomModel[]>;
  users$: Observable<UserModel[]>;
  selectedSchool: string = null;
  selectedRoom: string = null;
  @ViewChild(StudentListComponent, { static: false }) students: StudentListComponent;

  constructor(private schoolService: SchoolService) {
    super();
  }

  ngOnInit() {
    this.schools$ = this.schoolService.getAll();
  }

  onSelectSchool(event: MatSelectChange) {
    this.rooms$ = this.schoolService.getRooms(event.value);
  }

  getRoomName(room: GradeRoomModel) {
    return `${SchoolGrade[room.grade]} - ${room.name}`;
  }

  search() {
    this.users$ = this.schoolService.getStudentsInroom(this.selectedSchool, this.selectedRoom);
  }
}
