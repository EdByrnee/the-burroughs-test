import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { EmployeesModule } from './modules/employee/employee.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    EmployeesModule,
    ConfigModule.forRoot({ isGlobal:true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
