/// <reference types="@types/googlemaps" />
// https://stackoverflow.com/questions/51084724/types-googlemaps-index-d-ts-is-not-a-module

import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[sttGooglePlace]'
})
export class GooglePlacesDirective implements OnInit {
  @Output() select: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(elRef: ElementRef) {
    // elRef will get a reference to the element where
    // the directive is placed
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    const options: google.maps.places.AutocompleteOptions = {};

    options.types = ['address'];
    options.componentRestrictions = { country: 'us' };

    const autocomplete = new google.maps.places.Autocomplete(this.element, options);
    // Event listener to monitor place changes in the input
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // Emit the new address object for the updated place
      this.select.emit(autocomplete.getPlace());
    });
  }
}
