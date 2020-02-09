import { Component, OnInit } from '@angular/core';
import { SportCategoryDTO } from '../models/sport-category.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-categories-from-type',
  templateUrl: './all-categories-from-type.component.html',
  styleUrls: ['./all-categories-from-type.component.scss']
})
export class AllCategoriesFromTypeComponent implements OnInit {
	public sportCategory: SportCategoryDTO[];
  constructor(
	  private readonly route: ActivatedRoute,
	  private readonly router: Router,
  ) { }

  ngOnInit() {
	this.route.data.subscribe(
		({ sportCategory }) => {
			this.sportCategory = sportCategory;
		}
	);
  }

  public goToSportType(sportTypeId: string) {
	this.router.navigateByUrl(`/sports/type/${sportTypeId}`);
  }

}
