import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SportDTO } from '../models/sport.dto';

@Component({
  selector: 'app-sports-from-category-nav',
  templateUrl: './sports-from-category-nav.component.html',
  styleUrls: ['./sports-from-category-nav.component.scss']
})
export class SportsFromCategoryNavComponent implements OnInit {

	@Input() public categorySports: SportDTO[];
	@Output() public changeSport: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
	  console.log(this.categorySports);
  }

  sportClick(sportId: string) {
	this.changeSport.emit(sportId);
  }
}
