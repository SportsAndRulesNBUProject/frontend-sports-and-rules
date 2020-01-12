import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SportTypeDTO } from '../../sports/models/SportType.dto';
import { SportsService } from '../services/sports.service';

@Injectable({
	providedIn: 'root'
})
export class SportTypesResolver implements Resolve<SportTypeDTO[]> {

	constructor(
		private readonly sportsService: SportsService,
		private readonly router: Router,
	) {}

	resolve(): Observable<SportTypeDTO[]> {
		return this.sportsService.getTypes().pipe(
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
