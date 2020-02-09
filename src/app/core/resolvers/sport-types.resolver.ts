import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SportTypeDTO } from '../../sports/models/SportType.dto';
import { SportsService } from '../services/sports.service';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';

@Injectable({
	providedIn: 'root'
})
export class SportCategoriesResolver implements Resolve<SportCategoryDTO[]> {

	constructor(
		private readonly sportsService: SportsService,
		private readonly router: Router,
	) {}

	resolve(): Observable<SportCategoryDTO[]> {
		return this.sportsService.getAllCategories().pipe(
			map(
				(categories: SportCategoryDTO[]) => {
					return categories;
				},
				(error) => {
					console.log(error.msg);
					// notify
					// this.router.navigateByUrl('/not-found');
				}
			)
		);
	}
}
