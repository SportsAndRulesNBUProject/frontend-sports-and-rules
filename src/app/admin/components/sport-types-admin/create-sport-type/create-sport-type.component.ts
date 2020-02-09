import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sport-type',
  templateUrl: './create-sport-type.component.html',
  styleUrls: ['./create-sport-type.component.scss']
})
export class CreateSportTypeComponent implements OnInit {
public createSportTypeForm: FormGroup;
public createSportTypeEvent: EventEmitter<{name: string, description: string}> = new EventEmitter();
  constructor(
	  private readonly fb: FormBuilder,
  ) { }

  ngOnInit() {
	  this.createSportTypeForm = this.fb.group({
		  name: ['', Validators.required],
		  description: ['', Validators.required]
	  });
  }

  onSubmit() {
	  this.createSportTypeEvent.emit(this.createSportTypeForm.value);
  }

}
