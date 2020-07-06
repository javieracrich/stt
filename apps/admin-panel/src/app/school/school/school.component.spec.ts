import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolComponent } from './school.component';
import { SchoolListComponent } from '../school-list/school-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('SchoolComponent', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, RouterTestingModule, HttpClientTestingModule, FeatherIconsModule],
      declarations: [SchoolComponent, SchoolListComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
