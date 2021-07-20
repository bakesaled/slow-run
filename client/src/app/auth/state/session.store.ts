import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createInitialState, SessionState } from './session.model';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor(private storageService: LocalStorageService) {
    super(createInitialState(storageService));
  }

  login(session: SessionState) {
    this.update(session);
    this.storageService.set('session', JSON.stringify(session));
  }

  logout() {
    this.storageService.remove('session');
    this.update(createInitialState(this.storageService));
  }
}
