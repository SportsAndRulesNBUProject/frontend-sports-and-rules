import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CategorySportsResolver } from '../core/resolvers/category-sports.resolver';
import { SportsCategoryMainPageComponent } from './sports-category-main-page/sports-category-main-page.component';






const routes: Routes = [
	{
		path: '',
		component: NotFoundComponent,
	},
	{
		path: 'type/:id',
		component: SportsCategoryMainPageComponent,
		resolve: { sports: CategorySportsResolver }
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
