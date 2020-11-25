
import { EMPLOYEE_REPOSITORY } from '../../core/constants';
import { Employee } from './entity/employee.entity';


export const employeeProviders = [{
    provide: EMPLOYEE_REPOSITORY,
    useValue: Employee
}];