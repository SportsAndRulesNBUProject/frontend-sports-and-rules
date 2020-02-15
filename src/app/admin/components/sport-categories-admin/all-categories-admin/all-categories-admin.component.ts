import { Component, OnInit, ViewChild } from '@angular/core';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SportsService } from 'src/app/core/services/sports.service';
import { SportTypeDTO } from '../../../../sports/models/SportType.dto';

@Component({
    selector: 'app-all-categories-admin',
    templateUrl: './all-categories-admin.component.html',
    styleUrls: ['./all-categories-admin.component.scss']
})
export class AllCategoriesAdminComponent implements OnInit {

    public sportTypes: SportTypeDTO[];
    displayedColumns: string[] = ['name', 'description', 'type', 'actions'];
    dataSource: MatTableDataSource<SportTypeDTO>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private readonly sportsService: SportsService,
    ) { }

    ngOnInit() {
        this.sportsService.getAllTypes().subscribe(
            (sportTypes: SportTypeDTO[]) => {
                this.sportTypes = sportTypes;
                this.dataSource = new MatTableDataSource(this.sportTypes);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        );
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    deleteType(id: string) {
        console.log('Delete type with id: ' + id);
    }
}
