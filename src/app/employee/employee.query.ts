import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import {  EmployeeStore } from './employee.store';
import {  EmployeeModel, EmployeeState } from './model/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeQuery extends QueryEntity<EmployeeState, EmployeeModel> {

  // selectAreEmployeeLoaded$ = this.select(state => {
  //   return state.areEmployeeLoaded;
  // });
  selectVisibleEmployee$ = combineLatest(
    this.selectAll,
  )
 
  constructor(protected store: EmployeeStore) {
    super(store);
  }
}