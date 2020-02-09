import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SportDTO } from '../../sports/models/sport.dto';
import { SportTypeDTO } from '../../sports/models/SportType.dto';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';
import { HttpClient } from '@angular/common/http';

export const sportCategories = [
	{
		id: '1',
		name: 'Winter sports',
		imgUrl: 'assets/img/Rolling-Donut-Tanjung-Benoa-Watersport-1.jpg',
		description: 'Description about winter sports',

	},
	{
		id: '2',
		name: 'Water sports',
		imgUrl: 'assets/img/Rolling-Donut-Tanjung-Benoa-Watersport-1.jpg',
		description: 'Description about water sports',

	},
	{
		id: '3',
		name: 'Sports with balls',
		imgUrl: 'assets/img/Rolling-Donut-Tanjung-Benoa-Watersport-1.jpg',
		description: 'Description about sports with balls',

	}
];

export const sports = [
	{
		id: '1',
		name: 'Football',
		typeId: '3',
		history: 'History of football',
	},
	{
		id: '2',
		name: 'Swimming',
		typeId: '2',
		history: 'History of swimming',

	},
	{
		id: '3',
		name: 'Ski jumps',
		typeId: '1',
		history: 'History of ski',
	}
];

@Injectable()
export class SportsService {

  constructor(
	  private readonly http: HttpClient,
  ) { }

  getAllCategories(): Observable<SportCategoryDTO[]> {
	return this.http.get<SportCategoryDTO[]>(`//localhost:8080/api/sport-categories`);
  }

  getAllTypes(): Observable<SportTypeDTO[]> {
	  return this.http.get<SportTypeDTO[]>(`//localhost:8080/api/sport-types/`);
  }

  getAllSportsFromType(typeId: string): Observable<SportDTO[]> {
	return of(sports.filter(e => e.typeId === typeId));
  }

  getAllCategoriesFromType(typeId: string): Observable<SportCategoryDTO[]> {
	  return ;
  }
}
