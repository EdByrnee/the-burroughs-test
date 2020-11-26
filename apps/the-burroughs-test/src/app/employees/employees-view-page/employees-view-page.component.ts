import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'the-burroughs-test-employees-view-page',
  templateUrl: './employees-view-page.component.html',
  styleUrls: ['./employees-view-page.component.scss']
})
export class EmployeesViewPageComponent implements OnInit {

  id;
  
  upcoming_payments;
  employee;


  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute
    ) {
      this.id = route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employeeService.loadEmployeeById(this.id).then((data:any)=>{

      this.upcoming_payments = data['upcoming_payments'];
      this.employee = data['employee']

    })
  }

}
