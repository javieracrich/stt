import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSchoolBusDialogComponent } from './add-school-bus-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('AddSchoolBusDialogComponent', () => {
  let component: AddSchoolBusDialogComponent;
  let fixture: ComponentFixture<AddSchoolBusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FeatherIconsModule
      ],
      declarations: [AddSchoolBusDialogComponent],
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
    fixture = TestBed.createComponent(AddSchoolBusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
