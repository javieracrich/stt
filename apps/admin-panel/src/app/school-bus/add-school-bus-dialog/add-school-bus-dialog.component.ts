import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import {
  SchoolModel,
  UserModel,
  UserCategory,
  ToastService,
  SchoolService,
  SchoolBusService,
  Common,
  WithSubsComponent,
  PostSchoolBusModel,
  PostUserFilter,
  DeviceService
} from '@stt-nx-workspace/stt-common';

@Component({
  templateUrl: './add-school-bus-dialog.component.html',
  styleUrls: ['./add-school-bus-dialog.component.scss']
})
export class AddSchoolBusDialogComponent extends WithSubsComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  schools: Observable<SchoolModel[]>;

  drivers: Observable<UserModel[]> = of([]);
  supervisors: Observable<UserModel[]> = of([]);

  selectedDrivers: UserModel[] = [];
  selectedSupervisors: UserModel[] = [];

  constructor(
    private schoolService: SchoolService,
    private deviceService: DeviceService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddSchoolBusDialogComponent>,
    private schoolBusService: SchoolBusService,
    private toastService: ToastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      patent: ['', Validators.required],
      school: ['', Validators.required],
      driver: ['', Validators.nullValidator],
      supervisor: ['', Validators.nullValidator]
    });

    this.schools = this.schoolService.getAll();

    this.drivers = this.f.driver.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchDriver(term))
    );

    this.supervisors = this.f.supervisor.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchSupervisor(term))
    );
  }

  addDriverToSchoolBus() {
    const selectedDriver = this.f.driver.value;
    const codes = this.selectedDrivers.map(x => x.code);
    if (!codes.includes(selectedDriver.code)) {
      this.selectedDrivers.push(selectedDriver);
      this.f.driver.setValue(null);
    }
    return false;
  }

  addSupervisorToSchoolBus() {
    const selectedSupervisor = this.f.supervisor.value;
    const codes = this.selectedSupervisors.map(x => x.code);
    if (!codes.includes(selectedSupervisor.code)) {
      this.selectedSupervisors.push(selectedSupervisor);
      this.f.supervisor.setValue(null);
    }
    return false;
  }

  removeSelectedDriver(driverCode: string) {
    this.selectedDrivers = this.selectedDrivers.filter(d => d.code !== driverCode);
  }
  removeSelectedSupervisor(supervisorCode: string) {
    this.selectedSupervisors = this.selectedSupervisors.filter(s => s.code !== supervisorCode);
  }

  searchDriver(term: string): Observable<UserModel[]> {
    if (typeof term !== 'string') {
      return of([]);
    }
    if (term === '') {
      return of([]);
    }

    const filter: PostUserFilter = {
      text: term,
      category: UserCategory.BusDriver
    };

    return this.schoolService.getUsers(this.f.school.value, filter);
  }

  searchSupervisor(term: string): Observable<UserModel[]> {
    if (typeof term !== 'string') {
      return of([]);
    }
    if (term === '') {
      return of([]);
    }
    const filter: PostUserFilter = {
      text: term,
      category: UserCategory.Supervisor
    };

    return this.schoolService.getUsers(this.f.school.value, filter);
  }

  displayUserFullName(user?: UserModel): string | undefined {
    return user ? `${user.firstName} ${user.lastName}` : undefined;
  }

  getUserDisplayCategory(user: UserModel) {
    return Common.getCategory(user.category);
  }

  close(): void {
    this.dialogRef.close(false);
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const schoolBus: PostSchoolBusModel = {
      name: this.f.name.value,
      schoolCode: this.f.school.value,
      patent: this.f.patent.value,
      drivers: [],
      supervisors: [],
      deviceCode: null
    };

    for (const driver of this.selectedDrivers) {
      schoolBus.drivers.push(driver.code);
    }
    for (const supervisor of this.selectedSupervisors) {
      schoolBus.supervisors.push(supervisor.code);
    }

    this.subs.push(
      this.schoolBusService.post(schoolBus).subscribe(
        _ => {
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
