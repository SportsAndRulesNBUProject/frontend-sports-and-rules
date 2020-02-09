import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SportsService } from 'src/app/core/services/sports.service';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,
	private readonly notificationsService: NotificationService,
	private readonly sportsService: SportsService,
  ) {

  }

  ngOnInit() {

  }

  createSportTypeEvent(event: { name: string, description: string}) {
	this.sportsService.createNewType(event).subscribe(
		(res) => {
			console.log(res);

		},
		(error) => {
			this.notificationsService.error(error.message);
		}
	);
  }

  createSportCategoryEvent(event: { name: string, description: string, typeId: string}) {
	this.sportsService.createNewCategory(event).subscribe(
		(res) => {
			console.log(res);

		},
		(error) => {
			this.notificationsService.error(error.message);
		}
	);
  }
}
