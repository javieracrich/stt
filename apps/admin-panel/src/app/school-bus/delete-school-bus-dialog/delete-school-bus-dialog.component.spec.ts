import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteSchoolBusDialogComponent } from './delete-school-bus-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteSchoolBusDialogComponent', () => {
  let component: DeleteSchoolBusDialogComponent;
  let fixture: ComponentFixture<DeleteSchoolBusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DeleteSchoolBusDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: 'apiurl', useValue: 'test' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSchoolBusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
