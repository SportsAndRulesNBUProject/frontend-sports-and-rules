import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SportCategoryDTO } from '../../sports/models/sport-category.dto';

@Injectable({
    providedIn: 'root'
})
export class SportCategoryService {
    public readonly SportCategory$ = new BehaviorSubject<SportCategoryDTO>(null);

    constructor() { }

}
