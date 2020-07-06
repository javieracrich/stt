import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolBusListComponent } from './school-bus-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('SchoolBusListComponent', () => {
  let component: SchoolBusListComponent;
  let fixture: ComponentFixture<SchoolBusListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule, FeatherIconsModule],
      declarations: [SchoolBusListComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolBusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
