import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users.component';

import { HttpClientModule } from '@angular/common/http';
import { SchoolUsersComponent } from '../../school';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FeatherIconsModule,
        HttpClientModule
      ],
      declarations: [UsersComponent, SchoolUsersComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
