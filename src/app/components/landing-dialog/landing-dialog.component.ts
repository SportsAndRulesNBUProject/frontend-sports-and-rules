import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../core/services/auth.service';
import { LoginDTO } from '../../users/models/login.dto';
import { RegisterDTO } from '../../users/models/register.dto';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MessageResponseDTO } from 'src/app/models/messageResponse.dto';
import { Router } from '@angular/router';
import { LoginResponseDTO } from 'src/app/models/loginResponse.dto';

@Component({
  selector: 'app-landing-dialog',
  templateUrl: './landing-dialog.component.html',
  styleUrls: ['./landing-dialog.component.scss']
})
export class LandingDialogComponent implements OnInit {

  constructor(
	public dialogRef: MatDialogRef<LandingDialogComponent>,
	private readonly authService: AuthService,
	private readonly notificationService: NotificationService,
	private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public login(event: LoginDTO) {
	console.log(event);
	this.authService.logIn(event).subscribe(
		(_: LoginResponseDTO) => {
			console.log(_.token);

			this.notificationService.success('Logged in successfully');
			this.dialogRef.close(true);
		},
		(error) => {
			console.log(error.msg);
			this.notificationService.error(error.msg);

			// notification , stay on dialog
		}
	);
  }

  public register(event: RegisterDTO) {
	console.log(event);
	this.authService.register(event).subscribe(
		(res: MessageResponseDTO) => {
			this.notificationService.success(res.message);
		},
		(error) => {
			console.log(error);

			this.notificationService.error(error.msg);
		}
	);
  }

  public onCancelClick() {
	  this.dialogRef.close(false);
  }

}
