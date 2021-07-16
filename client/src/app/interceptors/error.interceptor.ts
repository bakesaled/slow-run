import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse | any) => {
        let errMsg: string;
        if (errorResponse instanceof HttpErrorResponse) {
          const err =
            errorResponse.message || JSON.stringify(errorResponse.error);
          errMsg = `${errorResponse.status} - ${
            errorResponse.statusText || ''
          }. Details: ${err}`;
        } else {
          errMsg = errorResponse.message
            ? errorResponse.message
            : errorResponse.toString();
        }

        if (errorResponse.status === 401) {
          this.router.navigate(['./login']);
        }
        // re-throw
        return throwError(errMsg);
      })
    );
  }
}
