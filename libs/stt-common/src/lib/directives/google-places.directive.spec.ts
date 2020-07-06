import { GooglePlacesDirective } from './google-places.directive';
import { ElementRef } from '@angular/core';

describe('GooglePlacesDirective', () => {
  it('should create an instance', () => {
    const element = new ElementRef({});

    const directive = new GooglePlacesDirective(element);
    expect(directive).toBeTruthy();
  });
});
