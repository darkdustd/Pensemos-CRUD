import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeCRUDService} from '../../../services/employee-crud.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //create a new employee variable
  employee:Employee = new Employee();

  constructor(private employeeService: EmployeeCRUDService) {
    
   }

  ngOnInit(): void {
  }
  
  createEmployee(){
    let newEmployee = {
      id:this.employee.id,
      firstName:this.employee.firstName,
      lastName:this.employee.lastName,
      email:this.employee.email
    }
    //Send the new employee to the employee service in order to create it
    this.employeeService.createEmployee(newEmployee);
  }
}
