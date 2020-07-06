import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertsComponent } from './alerts.component';
import { MaterialModule } from '@stt-nx-workspace/stt-common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsComponent],
      imports: [MaterialModule, ReactiveFormsModule, HttpClientTestingModule, BrowserAnimationsModule, FormsModule, RouterTestingModule],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
