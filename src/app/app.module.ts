import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/components/employees-list.component';
import { CreateEmployeeComponent } from './employee/components/create-employee.component';
import { EmployeeModule } from './employee/employee.module';
const routes = [
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
