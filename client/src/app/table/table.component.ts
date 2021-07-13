import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
  TrackByFunction,
  AfterContentInit,
  QueryList,
  ContentChildren,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { DateColumnComponent } from './date-column/date-column.component';
import { NumericColumnComponent } from './numeric-column/numeric-column.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-table',
  },
})
export class TableComponent<T> implements OnInit, AfterContentInit {
  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ContentChildren(DateColumnComponent) dateColumns!: QueryList<
    DateColumnComponent<T>
  >;
  @ContentChildren(NumericColumnComponent) numericColumns!: QueryList<
    NumericColumnComponent<T>
  >;

  @ViewChild(MatTable, { static: true }) table!: MatTable<T>;

  @Input()
  displayedColumns!: string[];

  @Input()
  dataSource!: MatTableDataSource<T>;

  @Input()
  trackBy!: TrackByFunction<T>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.dateColumns.forEach((dateCol) =>
      this.table.addColumnDef(dateCol.columnDef)
    );
    this.numericColumns.forEach((numCol) =>
      this.table.addColumnDef(numCol.columnDef)
    );
    this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach((rowDef) => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach((headerRowDef) =>
      this.table.addHeaderRowDef(headerRowDef)
    );
  }
}

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class TableComponentModule {}
