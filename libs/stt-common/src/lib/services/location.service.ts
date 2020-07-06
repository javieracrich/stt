import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  endpoint: string;
  constructor(private http: HttpClient, @Inject('apiurl') private apiurl: string) {
    this.endpoint = 'location';
  }

  /**
   * Returns the most recent location coordinates of all the buses of a school
   */
  getRecentLocations(schoolCode: string): Observable<LocationModel[]> {
    const url = `${this.apiurl}${this.endpoint}/mostrecent/${schoolCode}`;
    return this.http.get<LocationModel[]>(url);
  }

  getHistoricLocation(deviceCode: string, from: Date, until: Date): Observable<LocationModel[]> {
    const ISOfrom = from.toISOString();
    const ISOuntil = until.toISOString();
    const url = `${this.apiurl}${this.endpoint}/historic/${deviceCode}/${ISOfrom}/${ISOuntil}`;
    return this.http.get<LocationModel[]>(url);
  }
}
