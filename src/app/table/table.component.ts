import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
  TrackByFunction,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnInit {
  @Input()
  displayedColumns: (string | undefined)[] = [];

  @Input()
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  @Input()
  trackBy: TrackByFunction<T> = (index: number, _: T) => index;

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class TableComponentModule {}
