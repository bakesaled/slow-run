import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './views/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { errorInterceptorProvider } from './interceptors/error.interceptor';
import { AuthModule } from './auth/auth.module';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
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
    errorInterceptorProvider,
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
