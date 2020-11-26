import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@nestjs/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  loadEmployees(): Promise<any>{
    const url = environment.api_url + '/employees/';
    return this.http.get(url).toPromise();
  }

  loadEmployeeById(id: number): Promise<any>{
    const url = environment.api_url + '/employees/' + id;
    return this.http.get(url).toPromise();
  }

}
