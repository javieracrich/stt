import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolDetailComponent } from './school-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SchoolUsersComponent } from '../school-users/school-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';
import { FormsModule } from '@angular/forms';

describe('SchoolDetailComponent', () => {
  let component: SchoolDetailComponent;
  let fixture: ComponentFixture<SchoolDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, FeatherIconsModule],
      declarations: [SchoolDetailComponent, SchoolUsersComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
