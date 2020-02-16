import { NgModule } from '@angular/core';
import { ConvertTimeFormatPipe } from './convert-time-format.pipe';
import { MonthDayYearFormatPipe } from './month-day-year-format.pipe';

@NgModule({
  declarations: [
    ConvertTimeFormatPipe,
    MonthDayYearFormatPipe,
  ],
  exports: [
    ConvertTimeFormatPipe,
    MonthDayYearFormatPipe,
  ],
})

export class PipesModule { }
