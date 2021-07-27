import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingViewComponent } from './landing-view.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingViewComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login-view/login-view.module').then(
            (module) => module.LoginViewModule
          ),
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./dashboard-view/dashboard-view.module').then(
            (module) => module.DashboardViewModule
          ),
      },
      {
        path: 'activities',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./activity-view/activity-view.module').then(
            (module) => module.ActivityViewModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingViewRoutingModule {}
