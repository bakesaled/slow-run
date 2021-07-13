import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingViewModule } from './dashboard-routing-view.module';
import { DashboardViewComponent } from './dashboard-view.component';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [CommonModule, DashboardRoutingViewModule],
})
export class DashboardViewModule {}
