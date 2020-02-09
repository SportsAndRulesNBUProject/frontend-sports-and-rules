import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';






const routes: Routes = [
	{
		path: '',
		component: AdminPanelComponent,
	},
	// {
	// 	path: 'type/:id/categories',
	// 	component:
	// }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
