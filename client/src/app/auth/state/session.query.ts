import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionState } from './session.model';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.refreshToken));
  selectName$ = this.select('username');

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getValue().refreshToken);
  }
}
