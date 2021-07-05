import { ACTIVITY_UI_TABLE_ROWS, ActivityUi } from './activity-ui.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ActivityUiState extends EntityState<ActivityUi> {
  ui: ActivityUi;
}

const initialState = {
  ui: {
    tableRows: ACTIVITY_UI_TABLE_ROWS,
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'activity-ui' })
export class ActivityUiStore extends EntityStore<ActivityUiState> {
  constructor() {
    super(initialState);
  }

  updateUI(ui: ActivityUiState['ui']) {
    this.update((state) => ({
      ui: {
        ...state.ui,
        ...ui,
      },
    }));
  }
}
