import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserDialogComponent } from './delete-user-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('DeleteUserDialogComponent', () => {
  let component: DeleteUserDialogComponent;
  let fixture: ComponentFixture<DeleteUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatDialogModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FeatherIconsModule
      ],
      declarations: [DeleteUserDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: 'apiurl', useValue: 'test' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
