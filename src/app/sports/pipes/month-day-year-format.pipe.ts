import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { dayMonthYearCalendarFormat } from '../../common/constants/date-formats';

@Pipe({ name: 'monthDayYearFormat' })
export class MonthDayYearFormatPipe implements PipeTransform {
    constructor() {}

    public transform(date: Date): string {
        return moment(date).format(dayMonthYearCalendarFormat.sameElse);
    }
}
