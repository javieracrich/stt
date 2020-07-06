import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import {
  UserModel,
  UserCategory,
  UserService,
  ImageService,
  ToastService,
  MessageConstants,
  Common,
  WithSubsComponent
} from '@stt-nx-workspace/stt-common';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent extends WithSubsComponent implements OnInit {
  userCode: string;
  user: UserModel;
  uploadText = 'Upload Photo';
  uploading = false;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private imageService: ImageService,
    private toastService: ToastService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userCode = params.id;
      this.refresh();
    });
  }

  refresh() {
    this.subs.push(
      this.userService.get(this.userCode).subscribe((user: UserModel) => {
        this.user = user;
      })
    );
  }

  openEditUserDialog() {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: this.user
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe(saved => {
        if (saved) {
          this.toastService.success(MessageConstants.UserSaved);
          this.refresh();
        }
      })
    );
  }

  openDeleteUserDialog() {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '400px',
      data: this.userCode
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe(deleted => {
        if (deleted) {
          this.router.navigate(['/login']).then(() => {
            this.toastService.success(MessageConstants.UserDeleted);
          });
        }
      })
    );
  }

  getCategory(cat: number) {
    if (cat) {
      return Common.getCategory(cat);
    }
    return '';
  }
  userIsStudent(): boolean {
    if (this.user) {
      return this.user.category === UserCategory.Student;
    }
    return false;
  }

  onFileChanged(event) {
    this.uploadText = 'Uploading...';
    this.uploading = true;
    const selectedFile: File = event.target.files[0];

    const uploadData = new FormData();
    uploadData.append('file', selectedFile, selectedFile.name);

    const upload = this.imageService.uploadUserPhoto(this.userCode, uploadData);

    this.subs.push(
      upload.subscribe((response: any) => {
        if (response.body) {
          this.user.photoUrl = response.body.location;
          this.uploadText = 'Upload Photo';
          this.uploading = false;
        } else {
          console.log(response);
        }
      })
    );
  }
}
