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

// export const sports: SportCategoryDTO[] = [
//     {
//         id: '1',
//         name: 'Football',
//         typeId: '3',
//         history: 'History of football',
//         description: '22 players game on 2 teams',
//         imgUrl: 'assets/img/Rolling-Donut-Tanjung-Benoa-Watersport-1.jpg',
//     },
//     {
//         id: '2',
//         name: 'Swimming',
//         typeId: '2',
//         history: 'History of swimming',
//         description: 'Single person in a team',
//         imgUrl: 'assets/img/Rolling-Donut-Tanjung-Benoa-Watersport-1.jpg',
//     },
//     {
//         id: '3',
//         name: 'Ski jumps',
//         typeId: '1',
//         history: 'History of ski',
//         description: 'Single person in a team',
//         imgUrl: 'assets/img/Rolling-Donut-Tanjung-Benoa-Watersport-1.jpg',
//     }
// ];

@Injectable()
export class SportsService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    getAllTypes(): Observable<SportTypeDTO[]> {
        return this.http.get<SportTypeDTO[]>(`//localhost:8080/api/sport-types/`);
        // return of(sportCategories);
    }

    createNewType(type: { name: string, description: string }) {
        return this.http.post(`//localhost:8080/api/sport-types`, type);
    }

    deleteType(typeId: string) {
        return this.http.delete(`//localhost:8080/api/sport-types/${typeId}`);
    }

    getAllCategories(): Observable<SportCategoryDTO[]> {
        return this.http.get<SportCategoryDTO[]>(`//localhost:8080/api/sport-categories`);
    }

    getAllCategoriesFromType(typeId: string): Observable<SportCategoryDTO[]> {
        return this.http.get<SportCategoryDTO[]>(`//localhost:8080/api/sport-types/${typeId}/sport-categories`);
        // return of(sports);
    }

    createNewCategory(category: { name: string, typeId: string, description: string }) {
        return this.http.post(`//localhost:8080/api/sport-categories`, category);
    }

    deleteCategory(categoryId: string) {
        return this.http.delete(`//localhost:8080/api/sport-categories/${categoryId}`);
    }

    getAllSports() {
        return this.http.get<SportDTO[]>(`//localhost:8080/api/sports`);
    }

    getAllSportsFromCategory(categoryId: string): Observable<SportDTO[]> {
        return this.http.get<SportDTO[]>(`//localhost:8080/api/sport-categories/${categoryId}/sports`);
        // return of([
        //     {
        //         id: 1,
        //         categoryId: 1,
        //         history: string,
        //         name: string,
        //         achievements: AchievementDTO[],
        //     }
        // ])
    }

    getSport(sportId: string): Observable<SportDTO> {
        return this.http.get<SportDTO>(`//localhost:8080/api/sports${sportId}`);
    }

    createSport(sport: { id: string, categoryId: string, history: string, name: string }) {
        this.http.post(`//localhost:8080/api/sports`, sport);
    }

}
