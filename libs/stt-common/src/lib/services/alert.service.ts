import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericService } from './generic.service';
import { PostAlertRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlertService extends GenericService {
  constructor(http: HttpClient, @Inject('apiurl') apiurl: string) {
    super(http, 'alert', apiurl);
  }

  send(request: PostAlertRequest): Observable<any> {
    const url = `${this.apiurl}alert`;
    return this.http.post(url, request);
  }
}
