import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShowUserDTO } from '../models/show-user.dto';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {
public editUserForm: FormGroup;
public updateUser: EventEmitter<ShowUserDTO> = new EventEmitter();
  constructor(
      public dialogRef: MatDialogRef<EditUserDialogComponent>,
	     private readonly formBuilder: FormBuilder,
	     @Inject(MAT_DIALOG_DATA) public data: { user: ShowUserDTO, loggedUser: ShowUserDTO },
  ) { }

  ngOnInit() {
	  this.editUserForm = this.formBuilder.group({
		  username: [this.data.user.username],
		  email: [this.data.user.email],
		  role: [this.data.user.role],
	  });
  }

  editUser() {
	this.updateUser.emit({ ...this.data.user, ...this.editUserForm.value });
  }

  onCancelClick() {
	  this.dialogRef.close();
  }
}
