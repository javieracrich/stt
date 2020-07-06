import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CardModel, UserModel, CardService, UserService, ToastService, DialogComponent } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent extends DialogComponent<EditUserDialogComponent> implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  cards: Observable<CardModel[]> = of([]);
  cardSelected: boolean;

  constructor(
    private fb: FormBuilder,
    dr: MatDialogRef<EditUserDialogComponent>,
    private cardService: CardService,
    private userService: UserService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public user: UserModel
  ) {
    super(dr);
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.email, Validators.required]],
      phone: [this.user.phone, [Validators.pattern('[0-9]+')]],
      cards: [this.user.cards, Validators.nullValidator]
    });
  }

  displayCardCode(card?: CardModel): string | undefined {
    return card ? `${card.cardCode}` : undefined;
  }

  optionCardSelected() {
    this.cardSelected = true;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.user.email = this.f.email.value;
    this.user.firstName = this.f.firstName.value;
    this.user.lastName = this.f.lastName.value;
    this.user.phone = this.f.phone.value;

    this.subs.push(
      this.userService.put(this.user).subscribe(
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
