import { ApiProperty } from '@nestjs/swagger';
import { EmployeeDto } from './employee.dto';

export class EmployeePayment{
  payment_amount: number;
  payment_date: string;
  payment_type:string;
}

export class ListEmployeesResponseDto{

  @ApiProperty({ type: EmployeeDto, isArray: true })
  employees: any[];

}

export class ViewEmployeeResponseDto{

  @ApiProperty({ type: EmployeeDto, isArray: true })
  employee: any[];

  @ApiProperty({ type: EmployeePayment, isArray: true })
  scheduled_payments: any[];

}