import { Injectable } from '@angular/core';
import { SidenavUiStore } from './sidenav-ui.store';
import { SidenavUiQuery } from './sidenav-ui.query';

@Injectable({ providedIn: 'root' })
export class SidenavUiService {
  constructor(
    private sidenavUiStore: SidenavUiStore,
    private sidenavUiQuery: SidenavUiQuery
  ) {}

  toggleIsOpen() {
    this.sidenavUiStore.updateUi({
      isOpen: !this.sidenavUiQuery.getValue().ui.isOpen,
    });
  }
}
