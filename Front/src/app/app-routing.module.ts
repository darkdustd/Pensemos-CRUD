import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-component/employee-list/employee-list.component';
import {DepartmentListComponent} from './components/department-component/department-list/department-list.component';


const routes: Routes = [
  {path:'', component:EmployeeListComponent},
  {path:'departments', component:DepartmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
