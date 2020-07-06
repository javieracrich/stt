import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolUsersComponent } from './school-users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('SchoolUsersComponent', () => {
  let component: SchoolUsersComponent;
  let fixture: ComponentFixture<SchoolUsersComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientTestingModule, BrowserAnimationsModule, FeatherIconsModule, RouterTestingModule],
      declarations: [SchoolUsersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
