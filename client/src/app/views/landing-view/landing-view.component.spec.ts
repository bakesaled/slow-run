import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingViewComponent } from './landing-view.component';
import { LandingViewModule } from './landing-view.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardViewModule } from './dashboard-view/dashboard-view.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

describe('LandingViewComponent', () => {
  let component: LandingViewComponent;
  let fixture: ComponentFixture<LandingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LandingViewModule,
        NoopAnimationsModule,
        RouterTestingModule,
        DashboardViewModule,
        HttpClientTestingModule,
      ],
      providers: [LocalStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
