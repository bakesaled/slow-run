import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionState } from './session.model';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  isLoggedin$ = this.select((state) => toBoolean(state.accessToken));
  selectName$ = this.select('username');

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getValue().accessToken);
  }

  getToken() {
    return this.getValue().accessToken;
  }
}
