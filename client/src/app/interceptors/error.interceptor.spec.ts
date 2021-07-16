import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { catchError } from 'rxjs/operators';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

@Injectable({
  providedIn: 'root',
})
class MockHttpService {
  constructor(private http: HttpClient) {}
  get(url: string): Observable<any> {
    return this.http.get<Array<any>>(url, {
      headers: new HttpHeaders().set('Accept', 'application/json'),
    });
  }
}

describe('ErrorInterceptor', () => {
  let httpMock: HttpTestingController;
  let service: MockHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MockHttpService);
  });

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should throw an error when an http error occurs', (done) => {
    const mockErrorResponse: HttpErrorResponse = new HttpErrorResponse({
      error: 'details',
      status: 404,
      statusText: 'Bad Request',
    });

    service
      .get('/data')
      .pipe(
        catchError((errResponse: HttpErrorResponse) => {
          expect(of(errResponse)).toBeDefined();
          expect(errResponse.message).toBe(
            'Http failure response for /data: 404 Bad Request'
          );
          done();
          return of(errResponse);
        })
      )
      .subscribe();

    const req = httpMock.expectOne('/data');
    req.flush({ errorMessage: 'uh oh' }, mockErrorResponse);
    httpMock.verify();
  });
});
