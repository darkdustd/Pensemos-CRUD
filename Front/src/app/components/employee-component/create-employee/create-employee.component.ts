import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeCRUDService} from '../../../services/employee-crud.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();

  constructor(private employeeService: EmployeeCRUDService) {
    
   }

  ngOnInit(): void {
  }
  
  createEmployee(){
    let newEmployee = {
      firstName:this.employee.firstName,
      lastName:this.employee.lastName,
      email:this.employee.email
    }
    this.employeeService.createEmployee(newEmployee);
  }
}
