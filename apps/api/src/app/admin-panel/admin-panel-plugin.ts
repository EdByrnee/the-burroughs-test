
import { INestApplication } from '@nestjs/common';
import AdminBro from 'admin-bro';
import * as AdminBroExpress from 'admin-bro-expressjs';

import { Database, Resource } from 'admin-bro-sequelizejs';
import { AdminBroSequelize } from 'admin-bro-sequelizejs';
import { EmployeeResource } from './resources/employee.resource';

export async function setupAdminPanel(app: INestApplication): Promise<void> {

  //AdminBro.registerAdapter(AdminBroSequelize)
  AdminBro.registerAdapter({ Database, Resource });

  /** Create adminBro instance */
  const adminBro = new AdminBro({
    resources: [
      EmployeeResource
    ],        // Here we will put resources
    rootPath: '/admin',   // Define path for the admin panel
  });
  
  /** Create router */
  const router = AdminBroExpress.buildRouter(adminBro);


  
  /** Bind routing */
  app.use(adminBro.options.rootPath, router);
  
}