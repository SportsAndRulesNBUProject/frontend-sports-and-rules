import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SportsCategoryMainPageComponent } from './sports-category-main-page/sports-category-main-page.component';
import { SportsCategoryComponent } from './sports-category/sports-category.component';
import { SportsFromCategoryNavComponent } from './sports-from-category-nav/sports-from-category-nav.component';
import { SportsRoutingModule } from './sports-routing.module';
import { AllCategoriesFromTypeComponent } from './all-categories-from-type/all-categories-from-type.component';



@NgModule({
  declarations: [SportsFromCategoryNavComponent, SportsCategoryComponent, SportsCategoryMainPageComponent, AllCategoriesFromTypeComponent],
  imports: [
	CommonModule,
	SharedModule,
	SportsRoutingModule,
  ]
})
export class SportsModule { }
