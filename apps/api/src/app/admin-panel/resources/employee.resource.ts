import { ResourceWithOptions } from 'admin-bro';
import { Employee } from '../../modules/employee/entity/employee.entity';

export const EmployeeResource: ResourceWithOptions = {
  resource: Employee,
  options: {},
};
