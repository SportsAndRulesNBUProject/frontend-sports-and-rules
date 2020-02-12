import { Component, OnInit } from '@angular/core';
import { SportCategoryDTO } from '../models/sport-category.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SportCategoryService } from '../../core/services/sport-category.service';

@Component({
    selector: 'app-all-categories-from-type',
    templateUrl: './all-categories-from-type.component.html',
    styleUrls: ['./all-categories-from-type.component.scss']
})
export class AllCategoriesFromTypeComponent implements OnInit {
    public sportCategory: SportCategoryDTO[];
    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly sportCategoryService: SportCategoryService,
    ) { }

    ngOnInit() {
        this.route.data.subscribe(
            ({ sportCategory }) => {
                this.sportCategory = sportCategory;
            }
        );
    }

    public goToSportFromCategory(sportCategory: SportCategoryDTO) {
        this.sportCategoryService.SortCategory$.next(sportCategory);
        this.router.navigateByUrl(`/sports/category/${sportCategory.id}`);
    }

}
