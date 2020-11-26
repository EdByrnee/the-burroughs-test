import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { PaymentsModule } from '../payments/payments.module';
import { PaymentsService } from '../payments/payments.service';
import { EmployeeController } from './employee.controller';
import { employeeProviders } from './employee.providers';
import { EmployeeService } from './employee.service';

@Module({
    imports: [
        PaymentsModule
    ],
    controllers: [EmployeeController],
    providers: [
        EmployeeService,
        ...employeeProviders
    ]
})
export class EmployeesModule {

    

}
