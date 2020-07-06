import { async } from '@angular/core/testing';
import { webapiUrl, environment } from './environment';

describe('environment', () => {
  it('should have the correct webapiurl', async(() => {
    if (environment.production) {
      expect(webapiUrl).toBe('https://school-time-tracker-api.azurewebsites.net/');
    }
  }));
});
