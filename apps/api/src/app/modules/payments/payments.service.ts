import { Injectable, Inject } from '@nestjs/common';
import { DayService } from "./day.service";

@Injectable()
export class PaymentsService {

    constructor(private dayService: DayService) { }

    getLastWorkingDayOfMonth(year: number, month:number): any{

        // Go to the month
        let month_object = this.dayService.dayjs(`${year}-${month}-01`);

        // Go to the last day of the month
        month_object = month_object.add(month_object.daysInMonth() - 1, "day");

        // Get the day of week e.g. monday = 1
        const day_of_week = month_object.day();
        console.log(`The day of week for the month is ${day_of_week + " / " + month_object.toString()}`)

        if (day_of_week === 6){
            // If saturday, return friday
            month_object = month_object.subtract(1, "day");
        }
        if(day_of_week === 0){
            // If sunday, return friday
            month_object = month_object.subtract(2, "day");
        }

        return month_object;

    }

    getBonusPaymentDateOfMonth(year: number, month:number):any {

        // Go to the 15th of the month 
        let month_object = this.dayService.dayjs(`${year}-${month}-15`);

        // Get the day of week e.g. monday = 1
        const day_of_week = month_object.day();

        if (day_of_week === 6){
            // If saturday, return next wednesday
            month_object = month_object.add(4, "day");
        }
        if(day_of_week === 0){
            // If sunday, return next wednesday
            month_object = month_object.add(3, "day");
        }

        return month_object;

    }


}