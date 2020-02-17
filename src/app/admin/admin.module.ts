import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SharedModule } from 'src/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AllSportTypesComponent } from './components/sport-types-admin/all-sport-types/all-sport-types.component';
import { CreateSportTypeComponent } from './components/sport-types-admin/create-sport-type/create-sport-type.component';
import { AllCategoriesAdminComponent } from './components/sport-categories-admin/all-categories-admin/all-categories-admin.component';
import { CreateCategoryAdminComponent } from './components/sport-categories-admin/create-category-admin/create-category-admin.component';
import { AllSportsAdminComponent } from './components/sports-admin/all-sports-admin/all-sports-admin.component';
import { CreateSportAdminComponent } from './components/sports-admin/create-sport-admin/create-sport-admin.component';



@NgModule({
    declarations: [
        AdminPanelComponent,
        CreateSportTypeComponent,
        AllSportTypesComponent,
        AllCategoriesAdminComponent,
        CreateCategoryAdminComponent,
        AllSportsAdminComponent,
        CreateSportAdminComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule,
    ],
    entryComponents: [
        CreateSportTypeComponent,
        CreateCategoryAdminComponent,
    ]
})
export class AdminModule { }
