import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  template: ``
})
export class WithSubsComponent implements OnDestroy {
  constructor() {}

  subs: Subscription[] = [];
  ngOnDestroy() {
    this.subs.forEach(x => x.unsubscribe());
  }
}
