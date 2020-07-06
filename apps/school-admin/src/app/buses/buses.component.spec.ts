import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BusesComponent } from './buses.component';
import { MaterialModule, SttDatepickerRangeModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('BusesComponent', () => {
  let component: BusesComponent;
  let fixture: ComponentFixture<BusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        SttDatepickerRangeModule,
        BrowserAnimationsModule,
        FeatherIconsModule,
        HttpClientModule
      ],
      declarations: [BusesComponent],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
