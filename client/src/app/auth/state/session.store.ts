import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createInitialState, SessionState } from './session.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }

  login(session: SessionState) {
    this.update(session);
    localStorage.setItem('session', JSON.stringify(session));
  }

  logout() {
    localStorage.removeItem('session');
    this.update(createInitialState());
  }
}
