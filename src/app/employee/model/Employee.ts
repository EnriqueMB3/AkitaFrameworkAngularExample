import {  EntityState } from '@datorama/akita';
export interface EmployeeModel{
    id?: number;
    firstName:  string,
    lastName:string,
    gender:string,
    salary:string
}


export interface EmployeeState extends EntityState<EmployeeModel> {}