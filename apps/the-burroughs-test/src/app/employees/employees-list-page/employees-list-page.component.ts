import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'the-burroughs-test-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['./employees-list-page.component.scss']
})
export class EmployeesListPageComponent implements OnInit {

  data;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employeeService.loadEmployees().then((data:any)=>{

      this.data = data;

    })
  }

}
