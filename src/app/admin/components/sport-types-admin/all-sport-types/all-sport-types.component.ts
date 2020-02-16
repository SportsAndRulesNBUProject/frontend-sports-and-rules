import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SportsService } from '../../../../core/services/sports.service';

@Component({
    selector: 'app-all-sport-types',
    templateUrl: './all-sport-types.component.html',
    styleUrls: ['./all-sport-types.component.scss']
})
export class AllSportTypesComponent implements OnInit, OnChanges {

    @Input() public sportTypes: SportTypeDTO[];
    displayedColumns: string[] = ['name', 'description', 'actions'];
    dataSource: MatTableDataSource<SportTypeDTO>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private readonly sportsService: SportsService,
    ) { }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.sportTypes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public ngOnChanges(change: SimpleChanges): void {
        this.sportTypes = change.sportTypes.currentValue;
        this.dataSource = new MatTableDataSource(this.sportTypes);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteType(id: string) {
        this.sportsService.deleteType(id).subscribe(() => {
            this.sportTypes = this.sportTypes.filter((sportType) => sportType.id !== id);
            this.dataSource = new MatTableDataSource(this.sportTypes);
        });
    }

}
