import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolDialogComponent } from './edit-school-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '@stt-nx-workspace/stt-common';

describe('EditSchoolDialogComponent', () => {
  let component: EditSchoolDialogComponent;
  let fixture: ComponentFixture<EditSchoolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, HttpClientTestingModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [EditSchoolDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: (dialogResult: any) => {} }
        },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: 'apiurl', useValue: 'test' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
