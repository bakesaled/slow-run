import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityViewRoutingModule } from './activity-view-routing.module';
import { ActivityViewComponent } from './activity-view.component';
import { ActivityTableComponentModule } from '../../../activity-table/activity-table.component';

@NgModule({
  declarations: [ActivityViewComponent],
  imports: [
    CommonModule,
    ActivityViewRoutingModule,
    ActivityTableComponentModule,
  ],
})
export class ActivityViewModule {}
