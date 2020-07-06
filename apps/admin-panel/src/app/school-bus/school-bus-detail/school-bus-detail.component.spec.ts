import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolBusDetailComponent } from './school-bus-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SchoolBusService } from '@stt-nx-workspace/stt-common';

describe('SchoolBusDetailComponent', () => {
  let component: SchoolBusDetailComponent;
  let fixture: ComponentFixture<SchoolBusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [SchoolBusDetailComponent],
      providers: [SchoolBusService, { provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
