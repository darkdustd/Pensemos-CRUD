import { Component, OnInit, Input } from '@angular/core';
import {EmployeeCRUDService} from '../../../services/employee-crud.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  //Variable to get the employee data form employee list component
   sharedEmployee:Employee = new Employee();

   //Variable to set the selected employee data
   editedEmployee:Employee = new Employee();

  constructor(private employeeService:EmployeeCRUDService) { }

  ngOnInit(): void {
    //console.log("Nepfore")
    //console.log(this.sharedEmployee);
 
    //Get the selected employee from employee list component and set it in sharedEmployee variable
    this.employeeService.sharedPerson.subscribe(sharedEmployee => this.sharedEmployee = sharedEmployee)
    
    //console.log("Nepafter")
    //console.log(this.sharedEmployee);
      
    //Assign the sharedEmployee data into editedEmployee
    //I have to do this because if we work using sharedEmployee, the changes made in this variable will also afect the employee data from employee list component
    this.editedEmployee.id = this.sharedEmployee.id;
    this.editedEmployee.firstName = this.sharedEmployee.firstName;
    this.editedEmployee.lastName = this.sharedEmployee.lastName;
    this.editedEmployee.email = this.sharedEmployee.email;;
    
    //console.log(this.editedEmployee);
  }

  editEmployee(){
    let editedPerson = {
      id:this.editedEmployee.id,
      firstName:this.editedEmployee.firstName,
      lastName:this.editedEmployee.lastName,
      email:this.editedEmployee.email
    }
    //Send the selected employee to the employeeService in order to edit it
    this.employeeService.editEmployee(editedPerson);
  }

}
