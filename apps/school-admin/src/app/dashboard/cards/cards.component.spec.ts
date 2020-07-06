import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SttCardsComponent } from './cards.component';
import { MaterialModule, FeatherIconsModule } from '@stt-nx-workspace/stt-common';

describe('CardsComponent', () => {
  let component: SttCardsComponent;
  let fixture: ComponentFixture<SttCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SttCardsComponent],
      imports: [MaterialModule, HttpClientTestingModule, FeatherIconsModule],
      providers: [{ provide: 'apiurl', useValue: 'test' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SttCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
