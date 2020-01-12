import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatListModule, MatOptionModule, MatSelectModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
	MatButtonModule,
	MatFormFieldModule,
	FormsModule,
    ReactiveFormsModule,
	MatInputModule,
	MatTabsModule,
	MatDialogModule,
	MatCardModule,
	MatSidenavModule,
	MatListModule,
	MatSelectModule,
	MatOptionModule,
  ],
  declarations: [
	NavigationComponent,
	NotFoundComponent,
  ],
  exports: [
	NavigationComponent,

	CommonModule,
    MatMenuModule,
    MatIconModule,
	MatButtonModule,
	MatFormFieldModule,
	FormsModule,
    ReactiveFormsModule,
	MatInputModule,
	MatTabsModule,
	MatDialogModule,
	MatCardModule,
	MatSidenavModule,
	MatListModule,
	MatSelectModule,
	MatOptionModule,
  ],
})

export class SharedModule { }
