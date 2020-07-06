import { SttAppComponent } from './components/stt-app/app.component';
import { WithSubsComponent } from './components/subscriptions.component';
import { CardService } from './services/card.service';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ImageService } from './services/image.service';
import { DashboardNotificationService, DeviceService, SchoolBusService, SchoolService, TokenService } from './services';
import { LocationService } from './services/location.service';
import { SpinnerService } from './services/spinner.service';
import { UserService } from './services/user.service';
import { MaterialModule } from './material.module';
import { PageNotFoundComponent, ClearComponent, MainComponent } from './components';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { SttLoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatherIconsModule } from './feather-icons/feather-icons.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    GooglePlacesDirective,
    SttLoginComponent,
    WithSubsComponent,
    ClearComponent,
    MainComponent,
    SttAppComponent,
    ConfirmationDialogComponent
  ],
  imports: [MaterialModule, ReactiveFormsModule, CommonModule, RouterModule, FeatherIconsModule]
})
export class SttCommonModule {
  public static forRoot(apiurl: string): ModuleWithProviders {
    return {
      ngModule: SttCommonModule,
      providers: [
        ImageService,
        ToastService,
        AuthService,
        CardService,
        DashboardNotificationService,
        DeviceService,
        ImageService,
        LocationService,
        SchoolBusService,
        SchoolService,
        SpinnerService,
        TokenService,
        UserService,
        {
          provide: 'apiurl', // you can also use InjectionToken
          useValue: apiurl
        }
      ]
    };
  }
}
