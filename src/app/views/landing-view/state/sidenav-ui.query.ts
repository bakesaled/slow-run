import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SidenavUiState, SidenavUiStore } from './sidenav-ui.store';

@Injectable({ providedIn: 'root' })
export class SidenavUiQuery extends QueryEntity<SidenavUiState> {
  selectIsOpen$ = this.select((state) => state.ui.isOpen);

  constructor(protected store: SidenavUiStore) {
    super(store);
  }
}
