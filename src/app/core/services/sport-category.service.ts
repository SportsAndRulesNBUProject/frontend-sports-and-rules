import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SportCategoryDTO } from '../../sports/models/sport-category.dto';

@Injectable({
    providedIn: 'root'
})
export class SportCategoryService {
    public readonly SortCategory$ = new BehaviorSubject<SportCategoryDTO>(null);

    constructor() { }

}
