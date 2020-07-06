import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSchoolDialogComponent } from './add-school-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@stt-nx-workspace/stt-common';

describe('AddSchoolDialogComponent', () => {
  let component: AddSchoolDialogComponent;
  let fixture: ComponentFixture<AddSchoolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, HttpClientTestingModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [AddSchoolDialogComponent],
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
    fixture = TestBed.createComponent(AddSchoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
