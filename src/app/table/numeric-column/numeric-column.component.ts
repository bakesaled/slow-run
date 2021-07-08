import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  OnDestroy,
  ViewChild,
  Input,
  Optional,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatColumnDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';

@Component({
  selector: 'app-numeric-column',
  templateUrl: './numeric-column.component.html',
  styleUrls: ['./numeric-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumericColumnComponent<T> implements OnInit, OnDestroy {
  @ViewChild(MatColumnDef, { static: true }) columnDef!: MatColumnDef;

  @Input()
  columnDefName!: string;
  @Input()
  headerCellText!: string | undefined;

  @Input() dataAccessor!: (data: T, name: string) => string;
  @Input() isTotal: boolean = false;

  constructor(
    @Optional() public table: MatTable<any>,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.changeDetector.detectChanges();
    this.columnDef.name = this.columnDefName;
  }

  ngOnDestroy() {
    this.table.removeColumnDef(this.columnDef);
  }

  getData(data: T): any {
    return this.dataAccessor
      ? this.dataAccessor(data, this.columnDefName)
      : (data as any)[this.columnDefName];
  }
}

@NgModule({
  declarations: [NumericColumnComponent],
  imports: [CommonModule, MatTableModule],
  exports: [NumericColumnComponent],
})
export class NumericColumnComponentModule {}
