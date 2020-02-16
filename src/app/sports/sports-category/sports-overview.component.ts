import { Component, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { MatTabGroup, MatSort, MatTableDataSource } from '@angular/material';
import { SportDTO } from '../models/sport.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscribedComponent } from '../../../shared/subscription-destroy/subscription-destroy.component';
import { dayMonthYearCalendarFormat } from '../../common/constants/date-formats';

@Component({
    selector: 'app-sports-overview',
    templateUrl: './sports-overview.component.html',
    styleUrls: ['./sports-overview.component.scss']
})
export class SportsOverviewComponent extends SubscribedComponent implements OnInit, OnChanges {
    @Input() sport: SportDTO;
    @ViewChild('overviewTabs', { static: false }) overviewTabs: MatTabGroup;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    public championships = [
        { date: new Date('2020-02-28T21:24:00'), name: 'Hydrogen', host: 'UEFA', id: 1 },
        { date: new Date('2020-02-28T21:24:00'), name: 'Helium', host: 'FA Cup', id: 2 },
        { date: new Date('2020-02-28T21:24:00'), name: 'Lithium', host: 'EFL Cup', id: 3 },
        { date: new Date('2020-02-28T21:24:00'), name: 'Beryllium', host: 'National League', id: 4 },
    ];
    public readonly displayedColumns: string[] = ['date', 'name', 'host'];
    public dataSource: MatTableDataSource<any>;

    constructor(
        private readonly activeRouter: ActivatedRoute,
        private readonly route: Router,
    ) {
        super();
    }

    public ngOnChanges(): void {
        if (this.overviewTabs) {
            this.overviewTabs.selectedIndex = 0;
        }
    }

    public ngOnInit() {
        this.dataSource = new MatTableDataSource(this.championships);
        this.dataSource.sort = this.sort;
    }

    public handleChampionshipSelect(row: any): void {
        this.route.navigate([`championship/${row.id}`], { relativeTo: this.activeRouter });
    }
}
