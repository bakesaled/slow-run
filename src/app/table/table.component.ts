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
  @ContentChildren(MatHeaderRowDef) headerRowDefs:
    | QueryList<MatHeaderRowDef>
    | undefined = undefined;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>> | undefined =
    undefined;
  @ContentChildren(MatColumnDef) columnDefs:
    | QueryList<MatColumnDef>
    | undefined = undefined;

  @ViewChild(MatTable, { static: true }) table: MatTable<T> | undefined =
    undefined;

  @Input()
  displayedColumns: (string | undefined)[] | undefined = [];

  @Input()
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  @Input()
  trackBy: TrackByFunction<T> = (index: number, _: T) => index;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.columnDefs) {
      this.columnDefs.forEach((columnDef) =>
        this.table ? this.table.addColumnDef(columnDef) : undefined
      );
    }
    if (this.rowDefs) {
      this.rowDefs.forEach((rowDef) =>
        this.table ? this.table.addRowDef(rowDef) : undefined
      );
    }
    if (this.headerRowDefs) {
      this.headerRowDefs.forEach((headerRowDef) =>
        this.table ? this.table.addHeaderRowDef(headerRowDef) : undefined
      );
    }
  }
}

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class TableComponentModule {}
