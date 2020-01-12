import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../core/services/auth.service';
import { LoginDTO } from '../../users/models/login.dto';
import { RegisterDTO } from '../../users/models/register.dto';

@Component({
  selector: 'app-landing-dialog',
  templateUrl: './landing-dialog.component.html',
  styleUrls: ['./landing-dialog.component.scss']
})
export class LandingDialogComponent implements OnInit {

  constructor(
	public dialogRef: MatDialogRef<LandingDialogComponent>,
	public authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public login(event: LoginDTO) {
	console.log(event);
	this.authService.logIn(event).subscribe(
		(token) => {
			this.dialogRef.close(true);
		},
		(error) => {
			console.log(error.msg);

			// notification , stay on dialog
		}
	);
  }

  public register(event: RegisterDTO) {
	console.log(event);
	this.authService.register();
  }

  public onCancelClick() {
	  this.dialogRef.close(false);
  }

}
