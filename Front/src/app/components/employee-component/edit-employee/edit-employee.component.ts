import { Component, OnInit, Input } from '@angular/core';
import {EmployeeCRUDService} from '../../../services/employee-crud.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

   sharedEmployee:Employee = new Employee();

   editedEmployee:Employee = new Employee();

  constructor(private employeeService:EmployeeCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.sharedEmployee);
    this.employeeService.sharedPerson.subscribe(sharedEmployee => this.sharedEmployee = sharedEmployee)
    console.log("Nepafter")
    console.log(this.sharedEmployee);
      
    //Assign the selected product atribute values to a local object
    this.editedEmployee.id = this.sharedEmployee.id;
    this.editedEmployee.firstName = this.sharedEmployee.firstName;
    this.editedEmployee.lastName = this.sharedEmployee.lastName;
    this.editedEmployee.email = this.sharedEmployee.email;;
    console.log(this.editedEmployee);
  }

  editEmployee(){
    let editedPerson = {
      id:this.editedEmployee.id,
      firstName:this.editedEmployee.firstName,
      lastName:this.editedEmployee.lastName,
      email:this.editedEmployee.email
    }
    this.employeeService.editEmployee(editedPerson);
  }

}
