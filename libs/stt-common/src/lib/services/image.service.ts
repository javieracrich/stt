import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient, @Inject('apiurl') private apiurl: string) {}

  uploadSchoolLogo(schoolId, file: FormData) {
    const url = `${this.apiurl}school/${schoolId}/image`;
    return this.http.post(url, file, {
      reportProgress: true,
      observe: 'events'
    });
  }

  uploadUserPhoto(userId: string, file: FormData) {
    const url = `${this.apiurl}user/${userId}/image`;
    return this.http.post(url, file, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
