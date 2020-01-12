import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandingDialogComponent } from './components/landing-dialog/landing-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoreModule } from './core/core.module';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';
import { EditUserDialogComponent } from './users/edit-user-dialog/edit-user-dialog.component';


@NgModule({
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	SharedModule,
	CoreModule,
	JwtModule.forRoot({
		config: {
		  tokenGetter: () => Cookie.get('token'),
		  whitelistedDomains: ['localhost:3000'],
		}
	  })
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
	HomeComponent,

	LandingDialogComponent,
	EditUserDialogComponent,
  ],
  providers: [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: TokenInterceptorService,
		multi: true
	  },
  ],
  bootstrap: [AppComponent],
  entryComponents: [LandingDialogComponent, EditUserDialogComponent],
})
export class AppModule { }
