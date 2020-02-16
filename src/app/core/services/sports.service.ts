import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SportDTO } from '../../sports/models/sport.dto';
import { SportTypeDTO } from '../../sports/models/SportType.dto';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SportsService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    getAllTypes(): Observable<SportTypeDTO[]> {
        return this.http.get<SportTypeDTO[]>(`//localhost:8080/api/sport-types/`);
    }

    createNewType(type: { name: string, description: string }): any {
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
    }

    getSportById(sportId: string): Observable<SportDTO> {
        return this.http.get<SportDTO>(`//localhost:8080/api/sports/${sportId}`);
    }

    createSport(sport: { id: string, categoryId: string, history: string, name: string }) {
        this.http.post(`//localhost:8080/api/sports`, sport);
    }

}
