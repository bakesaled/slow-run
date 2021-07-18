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
import { DateColumnComponentModule } from '../table/date-column/date-column.component';
import { NumericColumnComponentModule } from '../table/numeric-column/numeric-column.component';
import { DynamicPipeObj } from '../pipes/dynamic/dynamic.pipe';
import { DistancePipe } from '../pipes/distance/distance.pipe';
import { DurationPipe } from '../pipes/duration/duration.pipe';

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

  trackRow(index: number, _: any): string {
    return `${index}`;
  }

  distancePipeObj: DynamicPipeObj = {
    pipe: DistancePipe,
    args: 'kilometers',
  };

  durationPipeObj: DynamicPipeObj = {
    pipe: DurationPipe,
  };
}

@NgModule({
  declarations: [ActivityTableComponent],
  imports: [
    CommonModule,
    TableComponentModule,
    MatTableModule,
    DateColumnComponentModule,
    NumericColumnComponentModule,
  ],
  exports: [ActivityTableComponent],
})
export class ActivityTableComponentModule {}
