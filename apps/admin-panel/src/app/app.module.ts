import {
  SttCommonModule,
  MaterialModule,
  AuthGuard,
  ErrorInterceptor,
  AuthorizationInterceptor,
  SpinnerInterceptor,
  Common,
  FeatherIconsModule,
  SttAppComponent
} from '@stt-nx-workspace/stt-common';
export function nullTokenGetter() {
  return '';
}

// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { LayoutModule } from '@angular/cdk/layout';

import { SchoolModule } from './school/school.module';
import { UsersModule } from './users/users.module';
import { SchoolBusModule } from './school-bus/school-bus.module';
import { AppRoutingModule } from './app-routing.module';

// components
import { DashboardComponent } from './dashboard';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card/card.component';

import { environment, webapiUrl } from '../environments/environment';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { ClientAppInterceptor } from './interceptors/client-app.interceptor';

@NgModule({
  declarations: [DashboardComponent, MapComponent, RegisterComponent, CardComponent, DashboardCardComponent],

  imports: [
    FormsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FeatherIconsModule,
    SchoolModule,
    SchoolBusModule,
    UsersModule,
    SttCommonModule.forRoot(webapiUrl),
    AppRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: nullTokenGetter,
        // do not add any Authorization header. we use the specific http interceptors for that
        blacklistedRoutes: Common.getblackListedRoutes()
      }
    })
  ],

  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientAppInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],

  bootstrap: [SttAppComponent]
})
export class AppModule {}
