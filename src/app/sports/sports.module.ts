import { NgModule } from '@angular/core';
import { SportsFromCategoryNavComponent } from './sports-from-category-nav/sports-from-category-nav.component';
import { AllCategoriesFromTypeComponent } from './all-categories-from-type/all-categories-from-type.component';
import { SportsCategoryMainPageComponent } from './sports-category-main-page/sports-category-main-page.component';
import { SportsOverviewComponent } from './sports-category/sports-overview.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SportsRoutingModule } from './sports-routing.module';
import { ChampionshipComponent } from './championship/championship.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
    declarations: [
        SportsFromCategoryNavComponent,
        SportsOverviewComponent,
        SportsCategoryMainPageComponent,
        AllCategoriesFromTypeComponent,
        ChampionshipComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        SportsRoutingModule,
        PipesModule,
    ],
    exports: [
        SportsOverviewComponent,
    ]
})
export class SportsModule { }
