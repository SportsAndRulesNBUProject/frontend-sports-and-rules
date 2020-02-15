import { Pipe, PipeTransform } from '@angular/core';
import { ChampionshipService } from '../../core/services/championship.service';

@Pipe({ name: 'convertTimeFormat' })
export class ConvertTimeFormatPipe implements PipeTransform {
    constructor(private readonly championshipService: ChampionshipService) {}

    public transform(createdAtComment: Date): string {
        return this.championshipService.convertDateFormat(createdAtComment);
    }
}
