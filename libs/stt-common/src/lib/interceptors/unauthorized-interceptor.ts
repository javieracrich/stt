import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, ToastService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private toastService: ToastService, private dialog: MatDialog) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        const operationId = err.headers.get('stt-operation-id');
        console.log('stt-operation-id', operationId);
        switch (err.status) {
          case 0: {
            this.toastService.error(JSON.stringify(err.statusText));
            console.log(err);
            return next.handle(request);
          }
          case 401: {
            // auto logout if 401 response returned from api
            this.authService.logout();
            location.reload();
            return next.handle(request);
          }
          case 400: {
            this.toastService.error(JSON.stringify(err.error));
            this.dialog.closeAll();
            return next.handle(request);
          }
          case 404: {
            this.toastService.error(JSON.stringify(err.error));
            this.dialog.closeAll();
            return next.handle(request);
          }
          case 500: {
            this.toastService.error(`An error ocurred! operation-id: ${operationId}`);
            this.dialog.closeAll();
            return next.handle(request);
          }
          default:
            return throwError(err);
        }
      })
    );
  }
}
