import { Observable } from 'rxjs';
import { IHaveCode } from '../models';

export interface Service {
  getAll();
  getAllPaged(pageNumber: number);
  get(code: string);
  count(): Observable<number>;
  post(entity: any);
  put(entity: IHaveCode);
  delete(code: string);
}
