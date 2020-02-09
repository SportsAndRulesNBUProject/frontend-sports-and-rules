import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SportsService } from '../services/sports.service';
import { SportTypeDTO } from 'src/app/sports/models/SportType.dto';





@Injectable({
	providedIn: 'root'
})
export class AllCategoriesFromTypeResolver implements Resolve<SportTypeDTO[]> {

	constructor(
		private readonly sportsService: SportsService,
		private readonly router: Router,
	) {}

	resolve(route: ActivatedRouteSnapshot): Observable<SportTypeDTO[]> {
		const id = route.paramMap.get('id');
		return this.sportsService.getAllCategoriesFromType(id).pipe(
			map(
				(types: SportTypeDTO[]) => {
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
