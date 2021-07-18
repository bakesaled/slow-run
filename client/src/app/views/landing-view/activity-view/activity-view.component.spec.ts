import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityViewComponent } from './activity-view.component';
import { ActivityViewModule } from './activity-view.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';

describe('ActivityViewComponent', () => {
  let component: ActivityViewComponent;
  let fixture: ComponentFixture<ActivityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityViewModule, HttpClientTestingModule],
      providers: [
        {
          provide: NG_ENTITY_SERVICE_CONFIG,
          useValue: {
            baseUrl: 'http://localhost:4000/api',
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
