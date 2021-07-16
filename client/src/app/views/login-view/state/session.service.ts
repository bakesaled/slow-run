import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SessionState } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('auth/login', { username, password }).pipe(
      tap((user: SessionState) => {
        if (user && user.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return this.sessionStore.update(user);
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.sessionStore.update({});
  }
}
