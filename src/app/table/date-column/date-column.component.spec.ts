import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  DateColumnComponent,
  DateColumnComponentModule,
} from './date-column.component';

describe('DateColumnComponent', () => {
  let component: DateColumnComponent<any>;
  let fixture: ComponentFixture<DateColumnComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateColumnComponentModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
