import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@ApiTags("/employees")
@Controller('employees')
export class EmployeeController {
    
    constructor(private employeeService: EmployeeService){}

    @Get('/')
    @ApiOperation({ summary: 'Get a list of nearby venues witin the delivery area. Open venues at the top.' })
    @ApiResponse({
        status: 200,
        description: 'Success',
        // type: GetVenuesByPostcodeResponseDto
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
        // type: GetVenuesByPostcodeResponseDto
      })
    async viewEmployee(): Promise<any>{

        let upcoming_payments = await this.employeeService.findOneById(1);

        return {
          upcoming_payments: upcoming_payments
        }
    }

}
