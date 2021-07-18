import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './views/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { authInterceptorProvider } from './views/login-view/auth.interceptor';
import { errorInterceptorProvider } from './interceptors/error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.production
      ? []
      : AkitaNgDevtools.forRoot({
          maxAge: 25,
          logTrace: false,
        }),
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'http://localhost:4000/api',
      },
    },
    authInterceptorProvider,
    errorInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
