import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authInterceptorProvider } from './auth.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [authInterceptorProvider],
})
export class AuthModule {}
