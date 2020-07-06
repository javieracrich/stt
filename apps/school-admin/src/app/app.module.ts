import { ClientAppInterceptor } from './interceptors/client-app.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { ChatComponent } from './chat/chat.component';
import { BusesComponent } from './buses/buses.component';
import { AlertsComponent } from './alerts/alerts.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SttCardsComponent } from './dashboard/cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment, webapiUrl } from '../environments/environment';
import {
  MaterialModule,
  SttDatepickerRangeModule,
  SttCommonModule,
  Common,
  SttAppComponent,
  FeatherIconsModule,
  AuthorizationInterceptor,
  SpinnerInterceptor,
  ErrorInterceptor,
  AuthGuard
} from '@stt-nx-workspace/stt-common';
import { JwtModule } from '@auth0/angular-jwt';
import { StudentListComponent } from './students/student-list/student-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

export function nullTokenGetter() {
  return '';
}

@NgModule({
  declarations: [DashboardComponent, StudentsComponent, ChatComponent, BusesComponent, AlertsComponent, UsersComponent, SttCardsComponent, StudentListComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SttDatepickerRangeModule,
    FeatherIconsModule,
    SttCommonModule.forRoot(webapiUrl),
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: nullTokenGetter,
        // do not add any Authorization header. we use the specific http interceptors for that
        blacklistedRoutes: Common.getblackListedRoutes()
      }
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
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
