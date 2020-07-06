import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditSchoolDialogComponent } from '../edit-school-dialog/edit-school-dialog.component';
import { SchoolUsersComponent } from '../school-users/school-users.component';

import {
  SchoolService,
  UserModel,
  ToastService,
  ImageService,
  MessageConstants,
  WithSubsComponent,
  SchoolModel,
  GradeRoomModel,
  SchoolGrade
} from '@stt-nx-workspace/stt-common';
import { Observable } from 'rxjs';

@Component({
  selector: 'stt-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent extends WithSubsComponent implements OnInit {
  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private router: Router,
    public dialog: MatDialog,
    private imageService: ImageService
  ) {
    super();
  }

  schoolCode: string;
  school: SchoolModel;
  selectedRoom: string;
  usersDataSource: MatTableDataSource<UserModel>;
  rooms$: Observable<GradeRoomModel[]>;
  isEditing = false;
  selectedFile: File;
  uploadText = 'Upload logo';
  uploading = false;
  @ViewChild(SchoolUsersComponent, { static: false }) schoolUsers: SchoolUsersComponent;

  ngOnInit() {
    this.subs.push(
      this.route.params.subscribe(params => {
        this.schoolCode = params.id;
        this.rooms$ = this.schoolService.getRooms(this.schoolCode);
        this.refreshSchoolDetail();
      })
    );
  }

  refreshSchoolUsers() {
    this.subs.push(
      this.schoolService
        .getStudentsInroom(this.schoolCode, this.selectedRoom)
        .subscribe(u => (this.usersDataSource = new MatTableDataSource(u)))
    );
  }

  getRoomName(room: GradeRoomModel) {
    return `${SchoolGrade[room.grade]} - ${room.name}`;
  }

  onFileChanged(event) {
    this.uploading = true;
    this.uploadText = 'Uploading...';
    this.selectedFile = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);

    this.subs.push(
      this.imageService.uploadSchoolLogo(this.schoolCode, uploadData).subscribe((response: any) => {
        if (response.body) {
          this.school.logoUrl = response.body.location;
          this.uploading = false;
          this.uploadText = 'Upload logo';
        } else {
          console.log(response);
        }
      })
    );
  }

  openEditSchoolDialog(): void {
    const dialogRef = this.dialog.open(EditSchoolDialogComponent, {
      width: '400px',
      data: this.school
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe(saved => {
        if (saved) {
          this.toastService.success(MessageConstants.SchoolSaved);
          this.refreshSchoolDetail();
        }
      })
    );
  }

  refreshSchoolDetail() {
    this.subs.push(
      this.schoolService.get<SchoolModel>(this.schoolCode).subscribe(school => {
        this.school = school;
      })
    );
  }
}
