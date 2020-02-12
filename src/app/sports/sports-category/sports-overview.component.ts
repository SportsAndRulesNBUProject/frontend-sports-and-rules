import { Component, OnInit, ViewChild, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MatTabGroup } from '@angular/material';
import { SportDTO } from '../models/sport.dto';

@Component({
    selector: 'app-sports-overview',
    templateUrl: './sports-overview.component.html',
    styleUrls: ['./sports-overview.component.scss']
})
export class SportsOverviewComponent implements OnInit, OnChanges {
    @Input() sport: SportDTO;
    @ViewChild('overviewTabs', { static: false }) overviewTabs: MatTabGroup;
    constructor() { }

    public ngOnChanges(change: SimpleChanges): void {
        if (this.overviewTabs) {
            this.overviewTabs.selectedIndex = 0;
        }
    }

    public ngOnInit() {
    }

}
