import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportDTO } from '../models/sport.dto';
import * as uuidv1 from 'uuid/v1';
import { MatSelectChange } from '@angular/material';
import { SportCategoryService } from '../../core/services/sport-category.service';
import { SportCategoryDTO } from '../models/sport-category.dto';

@Component({
    selector: 'app-sports-category-main-page',
    templateUrl: './sports-category-main-page.component.html',
    styleUrls: ['./sports-category-main-page.component.scss']
})
export class SportsCategoryMainPageComponent implements OnInit, OnDestroy {
    mobileQuery: MediaQueryList;
    public sports: SportDTO[];
    public sportSelected: string;
    public selectedSport: SportDTO;
    public currSport: SportDTO;
    public currentSportCategory: SportCategoryDTO;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private readonly route: ActivatedRoute,
        private readonly sportCategoryService: SportCategoryService,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    // tslint:disable-next-line:variable-name
    private _mobileQueryListener: () => void;

    ngOnInit() {
        this.sportCategoryService.SortCategory$.subscribe((sportCategory) => {
            this.currentSportCategory = sportCategory;
        });

        this.route.data.subscribe(
            ({ sports }) => {
                this.sports = [
                    {
                        id: uuidv1(),
                        categoryId: 6,
                        history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quos!',
                        name: 'Football',
                        achievements: [],
                    },
                    {
                        id: uuidv1(),
                        categoryId: 6,
                        history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quos!',
                        name: 'Baseball',
                        achievements: [],
                    },
                    {
                        id: uuidv1(),
                        categoryId: 6,
                        history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quos!',
                        name: 'Basketball',
                        achievements: [],
                    }
                ];
            }
        );
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    handleSportSelect(event: MatSelectChange) {
        this.selectedSport = event.value;
    }

}
