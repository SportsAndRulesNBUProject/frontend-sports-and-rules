import { Component, OnInit, ViewChild } from '@angular/core';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SportsService } from 'src/app/core/services/sports.service';

@Component({
  selector: 'app-all-categories-admin',
  templateUrl: './all-categories-admin.component.html',
  styleUrls: ['./all-categories-admin.component.scss']
})
export class AllCategoriesAdminComponent implements OnInit {

	public sportCategory: SportCategoryDTO[];
	displayedColumns: string[] = ['name', 'description', 'type' , 'actions'];
	  dataSource: MatTableDataSource<SportCategoryDTO>;

	  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	  @ViewChild(MatSort, {static: true}) sort: MatSort;

	  constructor(
		  private readonly sportsService: SportsService,
	  ) { }

	  ngOnInit() {
		  this.sportsService.getAllTypes().subscribe(
			  (categories: SportCategoryDTO[]) => {
				this.sportCategory = categories;
				this.dataSource = new MatTableDataSource(this.sportCategory);
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
