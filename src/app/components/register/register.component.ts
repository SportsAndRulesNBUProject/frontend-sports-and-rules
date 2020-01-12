import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordRegEx } from '../../common/constants/passwordRegEx';
import { matchingPasswords } from '../../common/validators/passwordMatch.validator';
import { RegisterDTO } from '../../users/models/register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

public registerForm: FormGroup;
@Output() public registerEvent: EventEmitter<RegisterDTO> = new EventEmitter();


  constructor(
	  private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
	this.registerForm = this.formBuilder.group({
		username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
		email: ['', Validators.compose([Validators.required, Validators.email])],
		password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(passwordRegEx)])],
		confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(passwordRegEx)])],
		keepMeLoggedIn: [false],
	},
	{
	  validators: [
		matchingPasswords('password', 'confirmPassword'),
	  ],
	  updateOn: 'blur',
	});
  }

  public register() {
	console.log(this.registerForm.value);
  }

}
