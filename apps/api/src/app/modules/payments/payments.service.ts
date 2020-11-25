import { Injectable, Inject } from '@nestjs/common';
import { DayService } from "./day.service";

@Injectable()
export class PaymentsService {

    constructor(private dayService: DayService) { }

    getMonthlyPaymentSchedule(year: number, month:number){

        const month_object = this.dayService.dayjs(`${year}-${month}-01`);

        const excluded_days = [6,7]

        


    }


}