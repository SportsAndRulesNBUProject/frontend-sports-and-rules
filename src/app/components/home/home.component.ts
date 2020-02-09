import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportTypeDTO } from '../../sports/models/SportType.dto';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';
import { sportCategories } from 'src/app/core/services/sports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public sportTypes: SportTypeDTO[];
  constructor(
	  private readonly route: ActivatedRoute,
	  private readonly router: Router,
  ) { }

  ngOnInit() {
	this.route.data.subscribe(
		({ sportTypes }) => {
			this.sportTypes = sportTypes;
		}
	);
  }

  public goToSportType(sportTypeId: string) {
	this.router.navigateByUrl(`/sports/type/${sportTypeId}/categories`);
  }

}
