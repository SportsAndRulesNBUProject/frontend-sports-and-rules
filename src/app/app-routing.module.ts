import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SportCategoriesResolver } from './core/resolvers/sport-types.resolver';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full',
		// resolve: { sportCategory: SportCategoriesResolver }
	},
	{
		path: 'users',
		loadChildren: () => import('./users/users.module')
		.then(
			m => m.UsersModule,
		)
	},
	{
		path: 'sports',
		loadChildren: () => import('./sports/sports.module')
		.then(
			m => m.SportsModule,
		)
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module')
		.then(
			m => m.AdminModule,
		)
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
