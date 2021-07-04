import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityViewRoutingModule } from './activity-view-routing.module';
import { ActivityViewComponent } from './activity-view.component';


@NgModule({
  declarations: [
    ActivityViewComponent
  ],
  imports: [
    CommonModule,
    ActivityViewRoutingModule
  ]
})
export class ActivityViewModule { }
