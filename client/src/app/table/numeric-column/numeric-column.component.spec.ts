import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  NumericColumnComponent,
  NumericColumnComponentModule,
} from './numeric-column.component';

describe('NumericColumnComponent', () => {
  let component: NumericColumnComponent<any>;
  let fixture: ComponentFixture<NumericColumnComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericColumnComponentModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
