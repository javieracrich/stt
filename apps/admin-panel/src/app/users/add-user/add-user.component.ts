import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  SchoolModel,
  UserCategory,
  UserService,
  WithSubsComponent,
  SchoolService,
  UserModel,
  SchoolBusModel,
  SchoolBusService,
  PostUserModel,
  PostUserFilter,
  BasicSchoolBusModel
} from '@stt-nx-workspace/stt-common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'stt-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent extends WithSubsComponent implements OnInit {
  schools: Observable<SchoolModel[]>;
  categories: { id: number; name: string }[] = [];
  parents: Observable<UserModel[]>;
  buses: Observable<BasicSchoolBusModel[]>;

  form: FormGroup;
  loading = false;
  submitted = false;
  showParentField = false;
  showSchoolField = false;
  showSchoolBusField = false;
  showAccessFields = true;

  selectedSchool: string;
  selectedParent: string;
  selectedBus: string;
  selectedUserCat: UserCategory;

  constructor(
    private formBuilder: FormBuilder,
    private busService: SchoolBusService,
    private schoolService: SchoolService,
    private userService: UserService,
  ) {
    super();
  }

  ngOnInit() {
    this.initCategories();
    this.schools = this.schoolService.getAll();
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      schoolCode: ['', Validators.required],
      userCategory: ['', Validators.required],
      parent: [null],
      bus: [''],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required, Validators.minLength(6)]
    });

    this.parents = this.f.parent.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchParent(term))
    );
  }

  initCategories() {
    for (const n in UserCategory) {
      if (typeof UserCategory[n] === 'number') {
        this.categories.push({ id: <any>UserCategory[n], name: n });
      }
    }
  }

  displayParentFullName(user: UserModel): string {
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return '';
  }

  searchParent(term: string): Observable<UserModel[]> {
    if (typeof term !== 'string') {
      return of([]);
    }
    if (term === '') {
      return of([]);
    }
    const filter: PostUserFilter = {
      text: term,
      category: UserCategory.Parent
    };

    return this.schoolService.getUsers(this.selectedSchool, filter);
  }

  onParentSelected() {}
  onBusSelected() {}

  onSchoolChange() {
    if (this.f.schoolCode.value) {
      this.buses = this.busService.getBySchool(this.f.schoolCode.value);
    }
    this.buses = null;
  }

  onBusChange() {}

  onUserCategoryChange() {
    switch (this.f.userCategory.value) {
      case UserCategory.GovState:
      case UserCategory.Admin: {
        this.showParentField = false;
        this.showSchoolBusField = false;
        this.showSchoolField = false;

        break;
      }
      case UserCategory.Student: {
        this.showParentField = true;
        this.showSchoolBusField = false;
        this.showSchoolField = false;

        break;
      }
      case UserCategory.Supervisor: {
        this.showParentField = false;
        this.showSchoolBusField = true;
        this.showSchoolField = true;
        break;
      }
      case UserCategory.Teacher:
      case UserCategory.BusDriver:
      case UserCategory.SchoolDirector: {
        this.showParentField = false;
        this.showSchoolBusField = false;
        this.showSchoolField = true;
        break;
      }
      default: {
        this.showParentField = false;
        this.showSchoolBusField = false;
        this.showSchoolField = false;
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    const schoolCode = this.f.schoolCode.value;

    switch (this.f.userCategory.value) {
      case UserCategory.Admin: {
        this.userService.post(this.form).subscribe();

        break;
      }
      case UserCategory.SchoolDirector: {
        const body: PostUserModel = {
          email: this.f.email.value,
          firstName: this.f.firstName.value,
          lastName: this.f.lastName.value,
          phone: this.f.phone.value
        };
        this.schoolService.postDirector(schoolCode, body);
      }
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
}
