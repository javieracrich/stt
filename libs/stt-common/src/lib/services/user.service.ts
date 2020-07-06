import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {
  constructor(http: HttpClient, @Inject('apiurl') apiurl: string) {
    super(http, 'user', apiurl);
  }
}
