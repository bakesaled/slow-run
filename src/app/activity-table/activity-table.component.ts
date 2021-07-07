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

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityTableComponent implements OnInit {
  displayedColumns: (string | undefined)[] | undefined = [];

  @Input()
  tableColumnDefs: TableColumnDef[] | undefined = undefined;

  @Input()
  dataSource: MatTableDataSource<TableRow> = new MatTableDataSource<TableRow>(
    []
  );

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumnDefs?.map((x) => x.columnDefName);
  }

  trackRow(index: number, _: Activity): string {
    return `${index}`;
  }
}

@NgModule({
  declarations: [ActivityTableComponent],
  imports: [CommonModule, TableComponentModule, MatTableModule],
  exports: [ActivityTableComponent],
})
export class ActivityTableComponentModule {}
