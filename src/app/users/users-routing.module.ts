import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { UserProfileResolver } from '../core/resolvers/user-profile.resolver';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: '',
		component: NotFoundComponent,
	},
	{
		path: ':id',
		component: ProfileComponent,
		resolve: { user: UserProfileResolver },
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
