import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class DialogComponent<T> implements OnDestroy {
  form: FormGroup;
  loading = false;
  submitted = false;
  subs: Subscription[] = [];

  constructor(protected dialogRef: MatDialogRef<T>) {}

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  close(): void {
    this.dialogRef.close(false);
  }
  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }
}
