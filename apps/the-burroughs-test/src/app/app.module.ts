import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EmployeesModule } from './employees/employees.module';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
