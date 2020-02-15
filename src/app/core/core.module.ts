import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CategorySportsResolver } from './resolvers/category-sports.resolver';
import { UserProfileResolver } from './resolvers/user-profile.resolver';
import { AuthCookieService } from './services/auth-cookie.service';
import { AuthService } from './services/auth.service';
import { DialogService } from './services/dialog.service';
import { SportsService } from './services/sports.service';
import { UsersService } from './services/users.service';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'node_modules/ngx-toastr';
import { SportCategoryService } from './services/sport-category.service';
import { ChampionshipService } from './services/championship.service';



@NgModule({
    imports: [
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            countDuplicates: true,
        }),
        CommonModule,
    ],
    providers: [
        AuthService,
        AuthCookieService,
        DialogService,
        UsersService,
        SportsService,
        UserProfileResolver,
        SportCategoryService,
        // SportTypesResolver,
        ChampionshipService,
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
