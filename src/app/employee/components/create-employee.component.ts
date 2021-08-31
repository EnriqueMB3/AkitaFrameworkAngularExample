import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { EmployeeStore } from '../employee.store';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../model/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.html'
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeSub: Subscription;

  constructor(private store: EmployeeStore, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(submittedForm: { value: {firstName: any; lastName:any; salary:any; gender: any; }; invalid: any; }) {

    if (submittedForm.invalid) {
      return;
    }

    const employee: EmployeeModel = {  firstName: submittedForm.value.firstName, lastName: submittedForm.value.lastName, gender: submittedForm.value.gender, salary: submittedForm.value.salary};
    this.createEmployeeSub = this.employeeService.createCourse(employee).subscribe(() => {
      this.router.navigateByUrl('/Employee');
    });
  }
}