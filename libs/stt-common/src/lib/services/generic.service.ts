import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service';
import { IHaveCode } from '../models';

export abstract class GenericService implements Service {
  constructor(protected http: HttpClient, protected resource: string, protected apiurl: string) {}

  count(): Observable<number> {
    const url = `${this.apiurl}${this.resource}/count`;
    return this.http.get<number>(url);
  }

  getAll<T>(): Observable<T[]> {
    const url = `${this.apiurl}${this.resource}`;
    return this.http.get<T[]>(url);
  }

  getAllPaged<T>(pageNumber: number): Observable<T[]> {
    const url = `${this.apiurl}${this.resource}/page/${pageNumber}`;
    return this.http.get<T[]>(url);
  }

  get<T>(code: string): Observable<T> {
    const url = `${this.apiurl}${this.resource}/${code}`;
    return this.http.get<T>(url);
  }

  post(entity: any) {
    const url = `${this.apiurl}${this.resource}/`;
    return this.http.post(url, entity);
  }

  put(entity: IHaveCode) {
    const url = `${this.apiurl}${this.resource}/${entity.code}`;
    return this.http.put(url, entity);
  }

  delete(code: string) {
    const url = `${this.apiurl}${this.resource}/${code}`;
    return this.http.delete(url);
  }
}
