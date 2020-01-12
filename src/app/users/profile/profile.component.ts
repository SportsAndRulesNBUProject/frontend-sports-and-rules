import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { DialogService } from '../../core/services/dialog.service';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { ShowUserDTO } from '../models/show-user.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	public user: ShowUserDTO;

	public loggedUser: ShowUserDTO;
	public isLogged: boolean;

  constructor(
	  private readonly route: ActivatedRoute,
	  private readonly authService: AuthService,
	  private readonly dialogService: DialogService,
  ) { }

  ngOnInit() {
	  this.route.data.subscribe(
		  ({ user }) => {
			this.user = user;
			console.log(this.user);

		  }
	  );

	  this.authService.isLogged$.subscribe(
		  (isLogged: boolean) => {
			this.isLogged = isLogged;
		  }
	  );

	  this.authService.loggedUser$.subscribe(
		  (loggedUser: ShowUserDTO) => {
			  this.loggedUser = loggedUser;
		  }
	  );
  }

  openEditDialog() {
	const dialogRef = this.dialogService.open(EditUserDialogComponent, {
		data: { user: this.user, loggedUser: this.loggedUser },
		autoFocus: true,
		disableClose: true,
	});
	const updateSub = dialogRef.componentInstance.updateUser.subscribe(
		(updatedUser: ShowUserDTO) => {
			console.log(updatedUser);
			// call the backend
		}
	);
  }

}
