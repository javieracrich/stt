import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolService, SchoolBusService, SchoolBusModel, SchoolModel, BasicSchoolBusModel } from '@stt-nx-workspace/stt-common';
import { MatSelectChange } from '@angular/material/select';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'stt-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements AfterViewInit {
  constructor(private schoolService: SchoolService, private schoolBusService: SchoolBusService) {}

  schools$: Observable<SchoolModel[]>;
  buses$: Observable<BasicSchoolBusModel[]>;
  selectedBus: string;
  selectedSchool: string;

  @ViewChild('livemap', { static: false }) livemapElement: ElementRef;
  @ViewChild('historymap', { static: false }) hisytorymapElement: ElementRef;
  livemap: google.maps.Map;
  historymap: google.maps.Map;
  currentTabIndex = 0;

  ngAfterViewInit() {
    this.buses$ = this.schoolBusService.getAll();
    this.schools$ = this.schoolService.getAll();
  }

  onTabChange(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
  }

  onSelectSchool(event: MatSelectChange) {
    this.selectedSchool = event.value;
    this.buses$ = this.schoolBusService.getBySchool(this.selectedSchool);
  }

  onSelectShoolBus(event: MatSelectChange) {
    this.selectedBus = event.value;
  }
  search() {
    switch (this.currentTabIndex) {
      case 0: {
        this.initLiveMap();
        break;
      }
      case 1: {
        this.initHistoryMap();
        break;
      }
    }
  }

  getInitialMapOptions(): google.maps.MapOptions {
    const miami = new google.maps.LatLng(25.7823907, -80.2994983);
    const mapProp = {
      center: miami,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return mapProp;
  }

  initLiveMap() {
    this.livemap = new google.maps.Map(this.livemapElement.nativeElement, this.getInitialMapOptions());
  }

  initHistoryMap() {
    this.historymap = new google.maps.Map(this.hisytorymapElement.nativeElement, this.getInitialMapOptions());
  }
}
