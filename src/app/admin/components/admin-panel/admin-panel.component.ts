import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SportsService } from 'src/app/core/services/sports.service';
import { MatDialog } from '@angular/material';
import { CreateSportTypeComponent } from '../sport-types-admin/create-sport-type/create-sport-type.component';
import { SubscribedComponent } from '../../../../shared/subscription-destroy/subscription-destroy.component';
import { takeUntil } from 'rxjs/operators';
import { SportTypeDTO } from '../../../sports/models/SportType.dto';
import { SportCategoryDTO } from 'src/app/sports/models/sport-category.dto';
import { CreateCategoryAdminComponent } from '../sport-categories-admin/create-category-admin/create-category-admin.component';

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent extends SubscribedComponent implements OnInit {
    public sportTypes: SportTypeDTO[];
    public sportCategories: SportCategoryDTO[];

    constructor(
        private readonly notificationsService: NotificationService,
        private readonly sportsService: SportsService,
        public readonly dialog: MatDialog,
    ) {
        super();
    }

    public ngOnInit(): void {
        this.sportsService.getAllTypes()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((sportTypes) => {
                this.sportTypes = sportTypes;
            });

        this.sportsService.getAllCategories()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((sportCategories) => {
                this.sportCategories = sportCategories;
            });
    }

    public createSportTypeEvent(event: { name: string, description: string }): void {
        this.sportsService.createNewType(event).subscribe(
            (res) => {
                this.sportTypes = [...this.sportTypes, res];
            },
            (error) => {
                this.notificationsService.error(error.message);
            }
        );
    }

    public createSportCategoryEvent(event: { name: string, description: string, typeId: string }) {
        console.log(event);

        this.sportsService.createNewCategory(event).subscribe(
            (res) => {
                console.log(res);

                this.sportCategories = [...this.sportCategories, res];
            },
            (error) => {
                this.notificationsService.error(error.message);
            }
        );
    }

    // This is full of shit way of doing it, but will leave it like that because we have to finish this
    public openCreateTypeDialog(): void {
        this.dialog
            .open(CreateSportTypeComponent, {
                width: '400px',
                data: {}
            })
            .afterClosed()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((createdSportType) => {
                if (createdSportType) {
                    this.createSportTypeEvent(createdSportType);
                }
            });
    }

    public openCreateCategoryDialog(): void {
        this.dialog.open(CreateCategoryAdminComponent, {
            width: '400px',
            data: { types: this.sportTypes },
        })
        .afterClosed()
        .pipe(takeUntil(this.componentDestroyed$))
        .subscribe((createdSportCategory) => {
            if (createdSportCategory) {
                this.createSportCategoryEvent(createdSportCategory);
            }
        });
    }
}
