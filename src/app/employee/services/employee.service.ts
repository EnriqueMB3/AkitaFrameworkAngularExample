import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EmployeeStore } from '../employee.store';
import { EmployeeModel } from '../model/Employee';


@Injectable()
export class EmployeeService {

  http: HttpClient;

  store: EmployeeStore;

  constructor(http: HttpClient, store: EmployeeStore) {
    this.http = http;
    this.store = store;
  }

  getAllCourses(): void {
     this.http.get<EmployeeModel[]>('/api/Employees').pipe(
      catchError((error: HttpErrorResponse) => {
      alert(error.message);
      return throwError(error.message);
    })
  )
  .subscribe(res => {
    this.store.set(res as EmployeeModel[])
  });
  }

  createCourse(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>('/api/Employees', employee).pipe(
      tap(value => {
        this.store.add([value]);
      })
    );
  }

  deleteCourse(employeeId: number): Observable<any> {
    return this.http.delete('/api/Employees/' + employeeId).pipe(
      tap(result => {
        this.store.remove(employeeId);
      })
    );
  }

  updateCourse(employeeId: number, employee: EmployeeModel): Observable<any> {
    employee.id= employeeId;
    return this.http.put('/api/Employees/' + employeeId, employee).pipe(
      tap(result => {
        this.store.update(employeeId, employee);
      })
    );
  }
}