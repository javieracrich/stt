import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import {
  SchoolService,
  ToastService,
  SchoolBusService,
  LocationService,
  SchoolBusModel,
  WithSubsComponent,
  SchoolModel,
  LocationModel,
  BasicSchoolBusModel
} from '@stt-nx-workspace/stt-common';
import { share } from 'rxjs/operators';

@Component({
  selector: 'stt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends WithSubsComponent implements OnInit {
  @ViewChild('gmap', { static: true }) gmapElement: any;
  map: google.maps.Map;
  markers: google.maps.Marker[] = [];
  path: google.maps.Polyline;

  schools: Observable<SchoolModel[]>;
  buses: Observable<BasicSchoolBusModel[]>;

  maxDate = new Date();
  minDate = new Date();

  selectedSchoolCode: string;
  selectedDeviceCode: string;

  fromDate: Date = null;
  untilDate: Date = null;

  currentLocations: LocationModel[];
  historicLocations: LocationModel[];

  selectedSchool: SchoolModel;

  constructor(
    private schoolService: SchoolService,
    private toastService: ToastService,
    private schoolBusService: SchoolBusService,
    private locationService: LocationService
  ) {
    super();
  }

  ngOnInit() {
    const d = new Date();
    d.setMonth(d.getMonth() - 3);
    this.minDate = d;

    const miami = new google.maps.LatLng(25.7823907, -80.2994983);

    const mapProp: google.maps.MapOptions = {
      center: miami,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      // https://mapstyle.withgoogle.com/
      //    styles: Common.getMapStyle()
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.schools = this.schoolService.getAll<SchoolModel>().pipe(share());
  }

  getMinDate() {
    if (this.fromDate) {
      return this.fromDate;
    }
    return this.minDate;
  }

  onSelectSchool(event: MatSelectChange) {
    this.selectedSchoolCode = event.value;
    if (this.selectedSchoolCode) {
      this.buses = this.schoolBusService.getBySchool(this.selectedSchoolCode);
    }
  }

  onSelectBus(event: MatSelectChange) {
    this.selectedDeviceCode = event.value;
  }

  searchCurrentLocation() {
    this.subs.push(this.locationService.getRecentLocations(this.selectedSchoolCode).subscribe(this.showRecentMarkers.bind(this)));
  }

  searchHistoricLocation() {
    this.subs.push(
      this.locationService
        .getHistoricLocation(escape(this.selectedDeviceCode), this.fromDate, this.untilDate)
        .subscribe(this.showHistoricMarkers.bind(this))
    );
  }

  deleteMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
    if (this.path) {
      this.path.setMap(null);
      this.path = null;
    }
  }

  showRecentMarkers(locations: LocationModel[]) {
    this.deleteMarkers();
    if (locations.length === 0) {
      this.toastService.error('could not find any coordinates');
    }

    locations.forEach(x => {
      const marker = new google.maps.Marker({
        position: { lat: x.lat, lng: x.lng },
        map: this.map,
        title: x.busName === undefined ? '' : x.busName,
        //  label: x.busName,
        animation: google.maps.Animation.DROP,
        icon: {
          // https://developers.google.com/maps/documentation/javascript/symbols#add_to_marker
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          strokeColor: 'blue'
        }
      });
      this.markers.push(marker);
    });
  }

  showHistoricMarkers(locations: LocationModel[]) {
    this.deleteMarkers();
    if (locations.length === 0) {
      this.toastService.error('could not find any coordinates');
      return;
    }

    const coords = [];

    for (const loc of locations) {
      coords.push({ lat: loc.lat, lng: loc.lng });
    }

    this.path = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: '#0000FF',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });

    this.path.setMap(this.map);
    locations = null;
  }
}
