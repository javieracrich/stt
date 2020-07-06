import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolBusService, WithSubsComponent } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-delete-school-bus-dialog',
  templateUrl: './delete-school-bus-dialog.component.html',
  styleUrls: ['./delete-school-bus-dialog.component.scss']
})
export class DeleteSchoolBusDialogComponent extends WithSubsComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteSchoolBusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public schoolBusId,
    private schoolBusService: SchoolBusService
  ) {
    super();
  }

  no() {
    this.dialogRef.close(false);
  }

  yes() {
    this.subs.push(
      this.schoolBusService.delete(this.schoolBusId).subscribe(_ => {
        this.dialogRef.close(true);
      })
    );
  }
}
