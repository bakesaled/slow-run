import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityViewComponent } from './activity-view.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityViewRoutingModule {}
