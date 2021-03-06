import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { tap } from 'rxjs/operators';
import { SessionState } from './session.model';
import { SessionDataService } from './session-data.service';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private sessionDataService: SessionDataService
  ) {}

  login(username: string, password: string) {
    return this.sessionDataService.login(username, password).pipe(
      tap((sessionState: SessionState) => {
        return this.sessionStore.login(sessionState);
      })
    );
  }

  logout() {
    const token = this.sessionStore.getValue().refreshToken;
    if (token) {
      this.sessionStore.logout();
      return this.sessionDataService.logout().pipe(
        tap((_) => {
          // this.sessionStore.logout();
        })
      );
    }
    return of(undefined);
  }

  refreshToken() {
    const token = this.sessionStore.getValue().refreshToken;
    if (token) {
      return this.sessionDataService.refresh(token).pipe(
        tap((sessionState: SessionState) => {
          return this.sessionStore.login(sessionState);
        })
      );
    }
    return of({});
  }
}
