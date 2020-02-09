import { Component, OnInit, ViewChild } from '@angular/core';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SportsService } from 'src/app/core/services/sports.service';
import { SportDTO } from 'src/app/sports/models/sport.dto';

@Component({
  selector: 'app-all-sports-admin',
  templateUrl: './all-sports-admin.component.html',
  styleUrls: ['./all-sports-admin.component.scss']
})
export class AllSportsAdminComponent implements OnInit {

	public sports: SportDTO[];
	displayedColumns: string[] = ['name', 'description', 'actions'];
	  dataSource: MatTableDataSource<SportDTO>;

	  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	  @ViewChild(MatSort, {static: true}) sort: MatSort;

	  constructor(
		  private readonly sportsService: SportsService,
	  ) { }

	  ngOnInit() {
		  this.sportsService.getAllSports().subscribe(
			  (sports: SportDTO[]) => {
				this.sports = sports;
				this.dataSource = new MatTableDataSource(this.sports);
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
