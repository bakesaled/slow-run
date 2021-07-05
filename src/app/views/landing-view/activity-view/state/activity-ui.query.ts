import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MatTableDataSource } from '@angular/material/table';
import { TableRow } from '../../../../table/table-row';
import { ActivityUiState, ActivityUiStore } from './activity-ui.store';

@Injectable({ providedIn: 'root' })
export class ActivityUiQuery extends QueryEntity<ActivityUiState> {
  dataSource$ = this.select(
    (state) => new MatTableDataSource<TableRow>(state.ui.tableRows)
  );

  constructor(protected store: ActivityUiStore) {
    super(store);
  }
}
