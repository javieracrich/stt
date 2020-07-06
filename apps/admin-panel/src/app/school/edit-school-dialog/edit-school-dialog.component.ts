import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolService, ToastService,  DialogComponent, SchoolModel } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-edit-school-dialog',
  templateUrl: './edit-school-dialog.component.html',
  styleUrls: ['./edit-school-dialog.component.scss']
})
export class EditSchoolDialogComponent extends DialogComponent<EditSchoolDialogComponent> implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    dr: MatDialogRef<EditSchoolDialogComponent>,
    private schoolService: SchoolService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public school: SchoolModel
  ) {
    super(dr);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.school.name, Validators.required],
      email: [this.school.email, [Validators.email, Validators.required]],
      phone: [this.school.phone, Validators.required],
      address: [this.school.address, Validators.required]
    });
  }

  setAddress(place: google.maps.places.PlaceResult) {
    this.f.address.setValue(place.formatted_address);
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.school.address = this.f.address.value;
    this.school.email = this.f.email.value;
    this.school.name = this.f.name.value;
    this.school.phone = this.f.phone.value;

    this.subs.push(
      this.schoolService.put(this.school).subscribe(
        () => {
          this.dialogRef.close(true);
        },
        response => {
          this.toastService.error(response.error);
          this.loading = false;
        }
      )
    );
  }
}
