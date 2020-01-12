import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportTypeDTO } from '../../sports/models/SportType.dto';

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
	this.router.navigateByUrl(`/sports/type/${sportTypeId}`);
  }

}
