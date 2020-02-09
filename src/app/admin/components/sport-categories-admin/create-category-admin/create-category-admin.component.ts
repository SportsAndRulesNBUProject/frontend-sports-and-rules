import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';
import { SportsService } from 'src/app/core/services/sports.service';

@Component({
  selector: 'app-create-category-admin',
  templateUrl: './create-category-admin.component.html',
  styleUrls: ['./create-category-admin.component.scss']
})
export class CreateCategoryAdminComponent implements OnInit {
	public createSportCategoryForm: FormGroup;
	public types: SportTypeDTO[];
	public createSportCategoryEvent: EventEmitter<{name: string, description: string}> = new EventEmitter();
	  constructor(
		  private readonly fb: FormBuilder,
		  private readonly sportsService: SportsService,
	  ) { }

	  ngOnInit() {
		  this.createSportCategoryForm = this.fb.group({
			  name: ['', Validators.required],
			  description: ['', Validators.required],
			  type: ['', Validators.required],
		  });

		  this.sportsService.getAllTypes().subscribe(
			  (types: SportTypeDTO[]) => {
				this.types = types;
			  }
		  );
	  }

	  onSubmit() {
		  this.createSportCategoryEvent.emit(this.createSportCategoryForm.value);
	  }

	}
