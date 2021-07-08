import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponentModule } from '../table/table.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableColumnDef } from '../table/table-column-def';
import { TableRow } from '../table/table-row';
import { Activity } from '../views/landing-view/activity-view/state/activity.model';
import { DateColumnComponentModule } from '../table/date-column/date-column.component';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityTableComponent implements OnInit {
  displayedColumns: string[] = [];

  @Input()
  tableColumnDefs!: TableColumnDef[];

  @Input()
  dataSource!: MatTableDataSource<TableRow>;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumnDefs?.map(
      (x) => x.columnDefName
    ) as string[];
  }

  trackRow(index: number, _: Activity): string {
    return `${index}`;
  }
}

@NgModule({
  declarations: [ActivityTableComponent],
  imports: [
    CommonModule,
    TableComponentModule,
    MatTableModule,
    DateColumnComponentModule,
  ],
  exports: [ActivityTableComponent],
})
export class ActivityTableComponentModule {}
