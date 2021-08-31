import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './components/employees-list.component';
import { CreateEmployeeComponent } from './components/create-employee.component';



@NgModule({
  declarations: [EmployeeListComponent, CreateEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers:[EmployeeService],
  exports:[EmployeeListComponent, CreateEmployeeComponent]
})
export class EmployeeModule { }
