import { Injectable, Inject } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService extends GenericService {
  constructor(http: HttpClient, @Inject('apiurl') apiurl: string) {
    super(http, 'card', apiurl);
  }

  countAttached() {
    const url = `${this.apiurl}${this.resource}/count-attached`;
    return this.http.get<number>(url);
  }

  bulkInsert(file: FormData) {
    const url = `${this.apiurl}${this.resource}/bulk-insert`;
    return this.http.post(url, file, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
