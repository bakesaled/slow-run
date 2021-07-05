import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableColumnDef } from '../../../table/table-column-def';
import { ActivityUiQuery } from './state/activity-ui.query';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityViewComponent implements OnInit {
  tableColumnDefs: TableColumnDef[] = [
    {
      columnDefName: 'date',
    },
    {
      columnDefName: 'type',
    },
    {
      columnDefName: 'duration',
    },
    {
      columnDefName: 'distance',
    },
  ];

  constructor(public activityUiQuery: ActivityUiQuery) {}

  ngOnInit(): void {}
}
