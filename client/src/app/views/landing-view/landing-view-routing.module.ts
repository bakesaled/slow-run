import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingViewComponent } from './landing-view.component';

const routes: Routes = [
  {
    path: '',
    component: LandingViewComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard-view/dashboard-view.module').then(
            (module) => module.DashboardViewModule
          ),
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./activity-view/activity-view.module').then(
            (module) => module.ActivityViewModule
          ),
      },
      // {
      //   path: '**',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingViewRoutingModule {}
