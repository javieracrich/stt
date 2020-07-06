import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditUserDialogComponent } from './edit-user-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('EditUserDialogComponent', () => {
  let component: EditUserDialogComponent;
  let fixture: ComponentFixture<EditUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FeatherIconsModule
      ],
      declarations: [EditUserDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: 'apiurl', useValue: 'test' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
