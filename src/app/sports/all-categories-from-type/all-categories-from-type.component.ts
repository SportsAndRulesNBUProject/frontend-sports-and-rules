import { Component, OnInit } from '@angular/core';
import { SportCategoryDTO } from '../models/sport-category.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SportCategoryService } from '../../core/services/sport-category.service';
import { SportsService } from '../../core/services/sports.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-all-categories-from-type',
    templateUrl: './all-categories-from-type.component.html',
    styleUrls: ['./all-categories-from-type.component.scss']
})
export class AllCategoriesFromTypeComponent implements OnInit {
    public sportCategories: SportCategoryDTO[];
    private readonly base64result = 'data:image/png;base64';
    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly sportCategoryService: SportCategoryService,
        private readonly sportsService: SportsService,
    ) { }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params) => this.sportsService.getAllCategoriesFromType(params.id))
        ).subscribe((sportCategories) => {
            this.sportCategories = sportCategories.map((sportCategory) => {
                if (!sportCategory.image) {
                    return sportCategory;
                }

                return {
                    ...sportCategory,
                    image: `${this.base64result},${sportCategory.image}`
                };
            });
        });
    }

    public goToSportFromCategory(sportCategory: SportCategoryDTO) {
        this.sportCategoryService.SportCategory$.next(sportCategory);
        this.router.navigateByUrl(`/sports/category/${sportCategory.id}`);
    }

}
