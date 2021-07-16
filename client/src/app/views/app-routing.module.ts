import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login-view/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login-view/login-view.module').then(
        (module) => module.LoginViewModule
      ),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./landing-view/landing-view.module').then(
        (module) => module.LandingViewModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
