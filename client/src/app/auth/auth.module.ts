import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authInterceptorProvider } from './auth.interceptor';
import { SessionService } from './state/session.service';
import { authInitializer } from './auth.initializer';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: authInitializer,
      multi: true,
      deps: [SessionService],
    },
    authInterceptorProvider,
  ],
})
export class AuthModule {}
