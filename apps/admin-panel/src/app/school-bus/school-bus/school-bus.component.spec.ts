import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolBusComponent } from './school-bus.component';
import { SchoolBusListComponent } from '../school-bus-list/school-bus-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';
import { FormsModule } from '@angular/forms';

describe('SchoolBusComponent', () => {
  let component: SchoolBusComponent;
  let fixture: ComponentFixture<SchoolBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule, FeatherIconsModule],
      declarations: [SchoolBusComponent, SchoolBusListComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
