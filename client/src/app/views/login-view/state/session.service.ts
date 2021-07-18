import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { tap } from 'rxjs/operators';
import { SessionState } from './session.model';
import { SessionDataService } from './session-data.service';

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
    this.sessionStore.logout();
  }
}