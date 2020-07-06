import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolListComponent } from './school-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '@stt-nx-workspace/stt-common';

describe('SchoolListComponent', () => {
  let component: SchoolListComponent;
  let fixture: ComponentFixture<SchoolListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [SchoolListComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
