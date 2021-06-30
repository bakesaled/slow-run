import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SIDENAV_UI_IS_OPEN, SidenavUi } from './sidenav-ui.model';
import { Injectable } from '@angular/core';

export interface SidenavUiState extends EntityState<SidenavUi> {
  ui: SidenavUi;
}

const initialState = {
  ui: {
    isOpen: SIDENAV_UI_IS_OPEN,
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sidenav-ui' })
export class SidenavUiStore extends EntityStore<SidenavUiState> {
  constructor() {
    super(initialState);
  }

  updateUi(ui: SidenavUiState['ui']) {
    this.update((state: SidenavUiState) => ({
      ui: {
        ...state.ui,
        ...ui,
      },
    }));
  }
}
