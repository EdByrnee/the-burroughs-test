import { ResourceWithOptions } from 'admin-bro';
import { Employee } from '../../modules/employee/entity/Employee.entity';

export const EmployeeResource: ResourceWithOptions = {
  resource: Employee,
  options: {},
};
