import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService, DialogComponent } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent extends DialogComponent<DeleteUserDialogComponent> {
  constructor(dr: MatDialogRef<DeleteUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public uid: string, private userService: UserService) {
    super(dr);
  }

  yes() {
    this.subs.push(
      this.userService.delete(this.uid).subscribe(() => {
        this.dialogRef.close(true);
      })
    );
  }
}
