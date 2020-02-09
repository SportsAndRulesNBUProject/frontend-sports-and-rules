import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SharedModule } from 'src/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AllSportTypesComponent } from './components/sport-types-admin/all-sport-types/all-sport-types.component';
import { CreateSportTypeComponent } from './components/sport-types-admin/create-sport-type/create-sport-type.component';



@NgModule({
  declarations: [
	  AdminPanelComponent,
	  CreateSportTypeComponent,
	  AllSportTypesComponent,
  ],
  imports: [
	CommonModule,
	SharedModule,
	AdminRoutingModule,
  ]
})
export class AdminModule { }
