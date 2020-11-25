import { Module } from '@nestjs/common';
import { DayService } from './day.service';
import { PaymentsService } from './payments.service';
@Module({
    imports: [],
    controllers: [],
    providers: [PaymentsService, DayService],
    exports: [
        PaymentsService, DayService
    ]
})
export class PaymentsModule {

    

}
