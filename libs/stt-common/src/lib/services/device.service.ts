import { Injectable, Inject } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends GenericService {
  constructor(http: HttpClient, @Inject('apiurl') apiurl: string) {
    super(http, 'device', apiurl);
  }
}
