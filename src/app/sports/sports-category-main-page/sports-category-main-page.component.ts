import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SportDTO } from '../models/sport.dto';
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
    public selectedValue: any;
    public currentSportCategory: SportCategoryDTO;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private readonly activeRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly sportCategoryService: SportCategoryService,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    // tslint:disable-next-line:variable-name
    private _mobileQueryListener: () => void;

    ngOnInit() {
        const currentSportId = +this.activeRoute.snapshot.queryParamMap.get('sportId');
        this.sportCategoryService.SportCategory$.subscribe((sportCategory) => {
            this.currentSportCategory = sportCategory;
        });

        this.activeRoute.data.subscribe(
            ({ sports }) => {
                this.sports = sports;

                if (currentSportId) {
                    this.selectedSport = this.sports.find((sport) => sport.id === currentSportId);
                    this.selectedValue = this.selectedSport;
                    this.handleQueryParamsChange(currentSportId);
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    handleSportSelect(event: MatSelectChange): void {
        this.selectedSport = event.value;
        this.handleQueryParamsChange(this.selectedSport.id);
    }

    handleQueryParamsChange(sportId: number): void {
        const queryParams: Params = { sportId };

        this.router.navigate(
            [],
            {
                relativeTo: this.activeRoute,
                queryParams,
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }
        );
    }
}
