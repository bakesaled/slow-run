import {
  ACTIVITY_VIEW_UI_TABLE_ROWS,
  ActivityViewUi,
} from './activity-view-ui.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ActivityUiState extends EntityState<ActivityViewUi> {
  ui: ActivityViewUi;
}

const initialState = {
  ui: {
    tableRows: ACTIVITY_VIEW_UI_TABLE_ROWS,
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'activity-ui' })
export class ActivityViewUiStore extends EntityStore<ActivityUiState> {
  constructor() {
    super(initialState);
  }

  updateUi(ui: ActivityUiState['ui']) {
    this.update((state) => ({
      ui: {
        ...state.ui,
        ...ui,
      },
    }));
  }
}
