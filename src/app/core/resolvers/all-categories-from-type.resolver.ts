import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SportsService } from '../services/sports.service';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';
import { SportCategoryDTO } from '../../sports/models/sport-category.dto';





@Injectable({
	providedIn: 'root'
})
export class AllCategoriesFromTypeResolver implements Resolve<SportCategoryDTO[]> {

	constructor(
		private readonly sportsService: SportsService,
		private readonly router: Router,
	) {}

	resolve(route: ActivatedRouteSnapshot): Observable<SportCategoryDTO[]> {
		const id = route.paramMap.get('id');
		return this.sportsService.getAllCategoriesFromType(id).pipe(
			map(
				(types: SportCategoryDTO[]) => {
					return types;
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
