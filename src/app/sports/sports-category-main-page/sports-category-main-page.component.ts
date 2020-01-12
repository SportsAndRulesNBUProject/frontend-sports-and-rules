import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportDTO } from '../models/sport.dto';

@Component({
  selector: 'app-sports-category-main-page',
  templateUrl: './sports-category-main-page.component.html',
  styleUrls: ['./sports-category-main-page.component.scss']
})
export class SportsCategoryMainPageComponent implements OnInit, OnDestroy {
mobileQuery: MediaQueryList;
public categorySports: SportDTO[];
public sportSelected: string;
public currSport: SportDTO;

  constructor(
	changeDetectorRef: ChangeDetectorRef,
	media: MediaMatcher,
	private readonly route: ActivatedRoute,
  ) {
	this.mobileQuery = media.matchMedia('(max-width: 600px)');
 this._mobileQueryListener = () => changeDetectorRef.detectChanges();
 this.mobileQuery.addListener(this._mobileQueryListener);
  }

// tslint:disable-next-line:variable-name
private _mobileQueryListener: () => void;

  ngOnInit() {
	  this.route.data.subscribe(
		  ({ sports }) => {
			this.categorySports = sports;
		  }
	  );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  changeSport(sportId: string) {
	console.log(sportId);

  }

}
