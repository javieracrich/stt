import { TestBed, inject } from '@angular/core/testing';

import { DashboardNotificationService } from './dashboard-notification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardNotificationService]
    });
  });

  it('should be created', inject([DashboardNotificationService], (service: DashboardNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
