import { ApiProperty } from "@nestjs/swagger";

export class EmployeeDto{
    
    @ApiProperty({type: String, description: "Name of the employee"})
    readonly employee_name:string;

    @ApiProperty({type: Number, description: "The base salary of the employee"})
    readonly employee_base_salary:string;

    @ApiProperty({type: Number, description: "The bonus for the employee"})
    readonly employee_bonus:number;
    

    
}