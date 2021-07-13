import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MatTableDataSource } from '@angular/material/table';
import { TableRow } from '../../../../table/table-row';
import { ActivityUiState, ActivityViewUiStore } from './activity-view-ui.store';

@Injectable({ providedIn: 'root' })
export class ActivityViewUiQuery extends QueryEntity<ActivityUiState> {
  dataSource$ = this.select(
    (state) => new MatTableDataSource<TableRow>(state.ui.tableRows)
  );

  constructor(protected store: ActivityViewUiStore) {
    super(store);
  }
}
