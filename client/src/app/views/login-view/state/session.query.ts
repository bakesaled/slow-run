import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionState } from './session.model';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  selectIsLogin$ = this.select('accessToken');
  selectName$ = this.select('username');

  constructor(protected store: SessionStore) {
    super(store);
  }

  getToken() {
    return this.getValue().accessToken;
  }
}
