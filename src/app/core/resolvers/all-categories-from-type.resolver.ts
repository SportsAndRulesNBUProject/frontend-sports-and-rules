// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { SportDTO } from '../../sports/models/sport.dto';
// import { SportsService } from '../services/sports.service';





// @Injectable()
// export class AllCategoriesFromType implements Resolve<SportDTO[]> {

// 	constructor(
// 		private readonly sportsService: SportsService,
// 		private readonly router: Router,
// 	) {}

// 	resolve(route: ActivatedRouteSnapshot): Observable<SportDTO[]> {
// 		const id = route.paramMap.get('id');
// 		return this.sportsService.getAllCategoriesFromType(id).pipe(
// 			map(
// 				(sports: SportDTO[]) => {
// 					return sports;
// 				},
// 				(error) => {
// 					console.log(error.msg);
// 					// notify
// 					// this.router.navigateByUrl('/not-found');
// 				}
// 			)
// 		);
// 	}
// }
