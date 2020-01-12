import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
	  ProfileComponent,
  ],
  imports: [
	UsersRoutingModule,
	SharedModule,
  ]
})
export class UsersModule { }
