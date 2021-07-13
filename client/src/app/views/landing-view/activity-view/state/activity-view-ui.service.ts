import { Injectable } from '@angular/core';
import { ActivityViewUiStore } from './activity-view-ui.store';
import { Activity } from './activity.model';

@Injectable({ providedIn: 'root' })
export class ActivityViewUiService {
  constructor(private activityViewUiStore: ActivityViewUiStore) {}

  updateTableRows(rows: Activity[]) {
    this.activityViewUiStore.updateUi({
      tableRows: [...rows],
    });
  }
}
