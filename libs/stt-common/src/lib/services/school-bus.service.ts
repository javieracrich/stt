import { Injectable, Inject } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicSchoolBusModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SchoolBusService extends GenericService {
  constructor(http: HttpClient, @Inject('apiurl') apiurl: string) {
    super(http, 'schoolbus', apiurl);
  }

  getBySchool(schoolCode: string): Observable<BasicSchoolBusModel[]> {
    const url = `${this.apiurl}${this.resource}/school/${schoolCode}`;
    return this.http.get<BasicSchoolBusModel[]>(url);
  }
}
