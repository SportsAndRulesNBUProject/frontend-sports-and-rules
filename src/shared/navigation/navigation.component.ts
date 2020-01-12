import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LandingDialogComponent } from '../../app/components/landing-dialog/landing-dialog.component';
import { AuthService } from '../../app/core/services/auth.service';
import { DialogService } from '../../app/core/services/dialog.service';
import { ShowUserDTO } from '../../app/users/models/show-user.dto';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
private isLoggedSub: Subscription;
private loggedUserSub: Subscription;

public loggedUser: ShowUserDTO;
public isUserLogged: boolean;


  constructor(
	  private readonly router: Router,
	  private readonly authService: AuthService,
	  private readonly dialogService: DialogService,
  ) { }

  ngOnInit() {
	this.isLoggedSub = this.authService.isLogged$.subscribe(
		(isLogged: boolean) => {
			this.isUserLogged = isLogged;
		}
	);

	this.loggedUserSub = this.authService.loggedUser$.subscribe(
		(user: ShowUserDTO) => {
			this.loggedUser = user;
		}
	);
  }

  ngOnDestroy() {
	  this.loggedUserSub.unsubscribe();
	  this.isLoggedSub.unsubscribe();
  }

  public redirectToHome() {
	this.router.navigateByUrl('/');
  }

  public redirectToProfile() {
	  this.router.navigateByUrl(`/users/${this.loggedUser.id}`);
  }

  public openLandingDialog() {
	const dialogRef = this.dialogService.open(
		LandingDialogComponent,
		{
			autoFocus: true,
			disableClose: true,
		}
	);
	dialogRef.afterClosed().subscribe(
		result => {
			if (result) {
				this.router.navigateByUrl('/');
			}
		}
	);

  }

  public logout() {
	  this.authService.logout();
  }

}
