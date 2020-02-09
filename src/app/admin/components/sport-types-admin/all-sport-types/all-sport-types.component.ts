import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SportsService } from 'src/app/core/services/sports.service';

@Component({
  selector: 'app-all-sport-types',
  templateUrl: './all-sport-types.component.html',
  styleUrls: ['./all-sport-types.component.scss']
})
export class AllSportTypesComponent implements OnInit {

public sportTypes: SportTypeDTO[];
displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource: MatTableDataSource<SportTypeDTO>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
	  private readonly sportsService: SportsService,
  ) { }

  ngOnInit() {
	  this.sportsService.getAllTypes().subscribe(
		  (types: SportTypeDTO[]) => {
			this.sportTypes = types;
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
