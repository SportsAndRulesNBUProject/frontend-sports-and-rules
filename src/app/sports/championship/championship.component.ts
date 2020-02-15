import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-championship',
    templateUrl: './championship.component.html',
    styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {
    public commentFormControl: FormControl;
    public comments = [
        {
            user: { name: 'Gosho' },
            content: 'This is the comment',
            createdAt: new Date(),
        },
        {
            user: { name: 'Pesho' },
            content: 'This is the comment',
            createdAt: new Date(),
        },
        {
            user: { name: 'Marinka' },
            content: 'This is the comment',
            createdAt: new Date(),
        },
        {
            user: { name: 'Stamat' },
            content: 'This is the comment',
            createdAt: new Date(),
        },
        {
            user: { name: 'Vasko' },
            content: 'This is the comment',
            createdAt: new Date(),
        },
        {
            user: { name: 'Toshko' },
            content: 'This is the comment',
            createdAt: new Date(),
        }
    ];
    constructor(
        private readonly location: Location,
    ) { }

    public ngOnInit() {
        this.commentFormControl = new FormControl('', [Validators.max(200)]);
    }

    public handleAddComment(): void {
        if (this.commentFormControl.value && this.commentFormControl.value !== '') {
            this.comments.push(
                {
                    content: this.commentFormControl.value,
                    createdAt: new Date(),
                    user: { name: 'Gosho' },
                },
            );
            this.commentFormControl.reset();
        }
    }

    public handleBack(): void {
        this.location.back();
    }
}
