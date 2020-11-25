import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesViewPageComponent } from './employees-view-page/employees-view-page.component';
import { EmployeesListPageComponent } from './employees-list-page/employees-list-page.component';
import { RouterModule } from '@angular/router';
import { EmployeesService } from "./employees.service";


@NgModule({
  declarations: [
    EmployeesListPageComponent,
    EmployeesViewPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: "",
        component: EmployeesListPageComponent
      },
      {
        path: "employees",
        component: EmployeesListPageComponent
      },
      {
        path: "employees/:id",
        component: EmployeesViewPageComponent
      }

    ])
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
