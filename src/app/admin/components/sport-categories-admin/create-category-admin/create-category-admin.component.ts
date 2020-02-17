import { Component, OnInit, EventEmitter, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';
import { SportsService } from 'src/app/core/services/sports.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-category-admin',
  templateUrl: './create-category-admin.component.html',
  styleUrls: ['./create-category-admin.component.scss']
})
export class CreateCategoryAdminComponent implements OnInit {
	public createSportCategoryForm: FormGroup;
	public types: SportTypeDTO[];
	  constructor(
		  private readonly fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateCategoryAdminComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { types: SportTypeDTO[] }
	  ) { }

	  ngOnInit() {
		  this.createSportCategoryForm = this.fb.group({
			  name: ['', Validators.required],
			  description: ['', Validators.required],
			  typeId: ['', Validators.required],
          });

    this.types = this.data.types;
	  }

	  onCancel() {
        this.dialogRef.close();
      }

	}
