import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { DecodedToken } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private key: string;
  constructor(private helper: JwtHelperService) {
    this.key = 'school_time_tracker_access_token';
  }

  getToken(): string {
    const data = localStorage.getItem(this.key);
    if (data) {
      return JSON.parse(data).token;
    }
    return null;
  }
  getUsername(): string {
    const token = this.GetDecodedToken();
    return token.username;
  }
  getSchoolName(): string {
    const token = this.GetDecodedToken();
    return token.school_name;
  }
  getSchoolCode(): string {
    const token = this.GetDecodedToken();
    return token.school_code;
  }
  saveToken(token: string): void {
    localStorage.setItem(this.key, token);
  }
  clearToken(): void {
    localStorage.removeItem(this.key);
  }

  private GetDecodedToken(): DecodedToken {
    const token = this.getToken();
    if (token) {
      return <DecodedToken>this.helper.decodeToken(token);
    }
    throw new Error('Could not get token from local storage');
  }
}
