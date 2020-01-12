import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordRegEx } from '../../common/constants/passwordRegEx';
import { LoginDTO } from '../../users/models/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public loginForm: FormGroup;

@Output() public loginEvent: EventEmitter<LoginDTO> = new EventEmitter();

  constructor(
	  private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
	this.loginForm = this.formBuilder.group({
		username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
		password: ['', [Validators.required, Validators.pattern(passwordRegEx)]],
	});
  }

  login() {
	this.loginEvent.emit(this.loginForm.value);
  }

}
