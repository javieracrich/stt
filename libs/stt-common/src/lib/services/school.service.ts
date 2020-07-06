import { Injectable, Inject } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel, PostUserModel, GradeRoomModel, PostUserFilter, PostStudentFilter, SchoolBusModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends GenericService {
  private readonly baseUrl: string;
  constructor(http: HttpClient, @Inject('apiurl') apiurl: string) {
    super(http, 'school', apiurl);
    this.baseUrl = `${this.apiurl}school/`;
  }

  getAssistance(): Observable<number> {
    const url = `${this.baseUrl}assistance`;
    return this.http.get<number>(url);
  }
  getStudentsInroom(schoolCode: string, roomCode: string) {
    const url = `${this.baseUrl}${schoolCode}/student/${roomCode}`;
    return this.http.get<UserModel[]>(url);
  }
  getStudents(schoolCode: string, filter: PostStudentFilter): Observable<UserModel[]> {
    const url = `${this.baseUrl}${schoolCode}/student`;
    return this.http.post<UserModel[]>(url, filter);
  }
  getUsers(schoolCode: string, filter: PostUserFilter): Observable<UserModel[]> {
    const url = `${this.baseUrl}${schoolCode}/user`;
    return this.http.post<UserModel[]>(url, filter);
  }
  getRooms(schoolCode: string): Observable<GradeRoomModel[]> {
    const url = `${this.baseUrl}${schoolCode}/room`;
    return this.http.get<GradeRoomModel[]>(url);
  }

  postDirector(schoolCode: string, director: PostUserModel): Observable<UserModel> {
    const url = `${this.baseUrl}${schoolCode}/director`;
    return this.http.post<UserModel>(url, director);
  }
  postDriver(schoolCode: string, driver: PostUserModel): Observable<UserModel> {
    const url = `${this.baseUrl}${schoolCode}/driver`;
    return this.http.post<UserModel>(url, driver);
  }
  postTeacher(schoolCode: string, teacher: PostUserModel): Observable<UserModel> {
    const url = `${this.baseUrl}${schoolCode}/teacher`;
    return this.http.post<UserModel>(url, teacher);
  }
}
