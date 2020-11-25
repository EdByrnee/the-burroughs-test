import { Injectable, Inject } from '@nestjs/common';
import { EMPLOYEE_REPOSITORY } from '../../core/constants';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@Inject(EMPLOYEE_REPOSITORY) private readonly employeeRepository: typeof Employee) { }

    public async findOneById(id: number): Promise<Employee> {
        return await this.employeeRepository.findOne<Employee>({ where: { id } });
    }

    async findAll(opts:any): Promise<Employee[]> {
        return await this.employeeRepository.findAll<Employee>(opts);
    }

}