import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TokenService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const hostNameWhiteList = ['localhost', 'sttadminpanel.z20.web.core.windows.net', 'sttschoolpanel.z20.web.core.windows.net'];

    const url = new window.URL(request.url);

    if (!hostNameWhiteList.includes(url.hostname)) {
      return next.handle(request);
    }

    const token = this.tokenService.getToken();

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
