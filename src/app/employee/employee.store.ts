
import { Injectable } from '@angular/core';
import {  EntityStore, StoreConfig, EntityState } from '@datorama/akita';
import { EmployeeModel, EmployeeState } from './model/Employee';




@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'employees' })
export class EmployeeStore extends EntityStore<EmployeeState, EmployeeModel> {

    constructor() {
        super();
    }

}
  