import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionService } from '../auth/state/session.service';
import { SessionQuery } from '../auth/state/session.query';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private sessionQuery: SessionQuery
  ) {}

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

        if (errorResponse.status === 401 && this.sessionQuery.isLoggedIn()) {
          this.sessionService
            .logout()
            .pipe(
              tap(() => {
                this.router.navigate(['/login']);
              })
            )
            .subscribe();
        }
        // re-throw
        return throwError(errMsg);
      })
    );
  }
}

export const errorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
