import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-create-sport-type',
    templateUrl: './create-sport-type.component.html',
    styleUrls: ['./create-sport-type.component.scss']
})
export class CreateSportTypeComponent implements OnInit {
    public createSportTypeForm: FormGroup;

    constructor(
        private readonly fb: FormBuilder,
        public dialogRef: MatDialogRef<CreateSportTypeComponent>
    ) { }

    ngOnInit() {
        this.createSportTypeForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    public onCancel(): void {
        this.dialogRef.close();
    }
}
