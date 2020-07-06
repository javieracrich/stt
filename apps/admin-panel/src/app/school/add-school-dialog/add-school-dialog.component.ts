import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchoolService, DialogComponent, PostSchoolModel } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-add-school-dialog',
  templateUrl: './add-school-dialog.component.html',
  styleUrls: ['./add-school-dialog.component.scss']
})
export class AddSchoolDialogComponent extends DialogComponent<AddSchoolDialogComponent> implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, dr: MatDialogRef<AddSchoolDialogComponent>, private schoolService: SchoolService) {
    super(dr);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
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

    const school: PostSchoolModel = {
      address: this.f.address.value,
      email: this.f.email.value,
      name: this.f.name.value,
      phone: this.f.phone.value
    };

    this.subs.push(
      this.schoolService.post(school).subscribe(() => {
        this.dialogRef.close(true);
      })
    );
  }
}
