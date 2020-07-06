import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolBusDialogComponent } from './edit-school-bus-dialog.component';

describe('EditSchoolBusDialogComponent', () => {
  let component: EditSchoolBusDialogComponent;
  let fixture: ComponentFixture<EditSchoolBusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditSchoolBusDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolBusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
