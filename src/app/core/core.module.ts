import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CategorySportsResolver } from './resolvers/category-sports.resolver';
import { UserProfileResolver } from './resolvers/user-profile.resolver';
import { AuthCookieService } from './services/auth-cookie.service';
import { AuthService } from './services/auth.service';
import { DialogService } from './services/dialog.service';
import { SportsService } from './services/sports.service';
import { UsersService } from './services/users.service';



@NgModule({
	providers: [
		AuthService,
		AuthCookieService,
		DialogService,
		UsersService,
		SportsService,

		UserProfileResolver,
		// SportTypesResolver,
		CategorySportsResolver,
	]
})
export class CoreModule {
	constructor(
		@Optional() @SkipSelf() parent: CoreModule,
	) {
		if (parent) {
			return parent;
		}
	}
}
