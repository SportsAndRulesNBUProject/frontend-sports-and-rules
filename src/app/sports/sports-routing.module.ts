import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CategorySportsResolver } from '../core/resolvers/category-sports.resolver';
import { SportsCategoryMainPageComponent } from './sports-category-main-page/sports-category-main-page.component';
import { AllCategoriesFromTypeComponent } from './all-categories-from-type/all-categories-from-type.component';
import { SportCategoriesResolver } from '../core/resolvers/sport-types.resolver';






const routes: Routes = [
	{
		path: '',
		component: NotFoundComponent,
	},
	{
		path: 'type/:id',
		component: SportsCategoryMainPageComponent,
		resolve: { sports: CategorySportsResolver }
	},
	{
		path: 'type/:id/categories',
		component: AllCategoriesFromTypeComponent,
		resolve: { sportCategory: SportCategoriesResolver }

	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
