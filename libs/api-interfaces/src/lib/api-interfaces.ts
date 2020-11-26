import { ApiProperty } from '@nestjs/swagger';

export interface Message {
  message: string;
}

export class ListEmployeesResponseDto{

  @ApiProperty({ type: String, isArray: true, example: "emp1" })
  employees: any[];

}

export class ViewEmployeeResponseDto{

  @ApiProperty({ type: String, isArray: true, example: "emp1" })
  employee: any[];

  @ApiProperty({ type: String, isArray: true, example: "emp1" })
  scheduled_payments: any[];

}