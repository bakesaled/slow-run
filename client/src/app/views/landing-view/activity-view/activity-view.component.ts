import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableColumnDef } from '../../../table/table-column-def';
import { ActivityViewUiQuery } from './state/activity-view-ui.query';
import { ActivityViewUiService } from './state/activity-view-ui.service';
import { ActivitiesService } from './state/activities.service';
import { ActivitiesQuery } from './state/activities.query';
import { tap } from 'rxjs/operators';

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
      headerText: 'Date',
    },
    {
      columnDefName: 'type',
      headerText: 'Type',
    },
    {
      columnDefName: 'duration',
      headerText: 'Duration',
    },
    {
      columnDefName: 'distance',
      headerText: 'Distance',
    },
  ];

  constructor(
    public activityUiQuery: ActivityViewUiQuery,
    private activityViewUiService: ActivityViewUiService,
    private activitiesService: ActivitiesService,
    private activitiesQuery: ActivitiesQuery
  ) {}

  ngOnInit(): void {
    this.activitiesQuery
      .selectAll()
      .pipe(
        tap((data) => {
          this.activityViewUiService.updateTableRows(data);
        })
      )
      .subscribe();

    this.activitiesService.get().subscribe();
    // this.activityViewUiService.updateTableRows([
    //   {
    //     id: '1',
    //     date: new Date(),
    //     type: ActivityType.run,
    //     distance: 2000,
    //     duration: 3000,
    //   },
    // ]);
  }
}
