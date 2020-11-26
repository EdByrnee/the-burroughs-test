import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { PaymentsService } from '../payments/payments.service';
import { EmployeeDto } from './dto/employee.dto';
import { DayService } from '../payments/day.service';
import { ListEmployeesResponseDto, ViewEmployeeResponseDto } from "@the-burroughs-test/api-interfaces"


export class EmployeePayment{
  payment_amount: number;
  payment_date: string;
  payment_type:string;
}

@ApiTags("/employees")
@Controller('employees')
export class EmployeeController {
    
    constructor(
      private employeeService: EmployeeService,
      private paymentService: PaymentsService,
      private dayService: DayService
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Get a list of exisitng employees' })
    @ApiResponse({
        status: 200,
        description: 'Success',
        type: ListEmployeesResponseDto
      })
    async listEmployees(): Promise<any>{

        return this.employeeService.findAll({
          where:{},
          limit: 100
        })

    }

    @Get('/:id')
    @ApiOperation({ summary: 'View employee detail, including upcoming scheduled payments for the employee.' })
    @ApiResponse({
        status: 200,
        description: 'Success',
        type: ViewEmployeeResponseDto
      })
    async viewEmployee(@Param("id") id:number): Promise<any>{

        const employee: EmployeeDto = await this.employeeService.findOneById(id);
        const current_year = this.dayService.dayjs().year();
        const current_month = this.dayService.dayjs().month() + 1;
        

        // Build a list of payment for the next 12 months
        const upcoming_payments = [];

        // From current month, to 12 months ahead
        for (let i = 0; i < 12;i++){

          const calculated_month = current_month + i;
          
          // Each month there will be a base salaray payment
          const base_salary_payment:EmployeePayment = {
            payment_amount: employee.employee_base_salary,
            payment_date: this.paymentService.getLastWorkingDayOfMonth(current_year, calculated_month),
            payment_type: "Base Salary"
          }

          // Each month there will be a bonus payment
          const bonus_payment: EmployeePayment = {
            payment_amount: employee.employee_bonus,
            payment_date: this.paymentService.getBonusPaymentDateOfMonth(current_year, calculated_month),
            payment_type: "Bonus Payment"
          }

          upcoming_payments.push(bonus_payment);
          upcoming_payments.push(base_salary_payment);
          
        }

        return {
          employee: employee,
          upcoming_payments: upcoming_payments
        }
    }

}


