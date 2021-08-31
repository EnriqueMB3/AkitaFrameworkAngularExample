
import { tap, switchMap, filter, take } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import {  EmployeeStore } from '../employee.store';
import { EmployeeQuery } from '../employee.query';
import { EmployeeModel, EmployeeState } from '../model/Employee';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html'
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  employeeToBeUpdated: EmployeeModel;

  isUpdateActivated = false;

  listEmployeeSub: Subscription;

  deleteEmployeeSub: Subscription;

  updateEmployeeSub: Subscription;

  employeeEmpty: EmployeeModel;

  cstate: EmployeeState;

  employees$: Observable<EmployeeModel[]>;

  constructor(private employeeService: EmployeeService, private employeeQuery: EmployeeQuery) {
  }

  ngOnInit() {
  this.loadEmployees();
  this.employees$ = this.employeeQuery.selectAll() ;
  }

  loadEmployees():void{
    this.employeeService.getAllCourses();
  }

  deleteEmployee(courseId: number) {
    this.deleteEmployeeSub = this.employeeService.deleteCourse(courseId).subscribe(result => {
    });
  }

  showUpdateForm(employee: EmployeeModel) {
    this.employeeToBeUpdated = {...employee};
    this.isUpdateActivated = true;
  }

  updateEmployee(updateForm) {
    console.log(updateForm);
    this.updateEmployeeSub = this.employeeService.updateCourse(
      this.employeeToBeUpdated.id, updateForm.value).subscribe(result => console.log(result)
    );
    this.isUpdateActivated = false;

    this.employeeToBeUpdated = null;
  }

  ngOnDestroy() {
    if (this.listEmployeeSub) {
      this.listEmployeeSub.unsubscribe();
    }

    if (this.deleteEmployeeSub) {
      this.deleteEmployeeSub.unsubscribe();
    }

    if (this.updateEmployeeSub) {
      this.updateEmployeeSub.unsubscribe();
    }
  }
}