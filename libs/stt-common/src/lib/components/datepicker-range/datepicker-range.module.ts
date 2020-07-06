import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SttDatepickerRangeComponent } from './datepicker-range';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [SttDatepickerRangeComponent],
  exports: [SttDatepickerRangeComponent],
  bootstrap: [SttDatepickerRangeComponent]
})
export class SttDatepickerRangeModule {}
