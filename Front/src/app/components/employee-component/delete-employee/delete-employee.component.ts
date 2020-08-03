import { Component, OnInit } from '@angular/core';
import { EmployeeCRUDService } from '../../../services/employee-crud.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  //Valiable to set the data of only one employee who will be deleted
  deletedEmployee: Employee;
  
  //Variable to set multiple employees in order to delete them
  deletedEmployees:any[];

  //Variable to define if the user is going to delete only one or more than 1 employee at the same time
  // true if the user will delete more than 1 and false if the user delete only 1
  deleteManyBoolean:boolean;

  constructor(private employeeService: EmployeeCRUDService) { }
  
  ngOnInit(): void {
    //console.log("Nepfore")
    //console.log(this.deletedEmployee);

    //Get exactly one employee from employee list component and set it in deletedEmployee variable
    this.employeeService.sharedPerson.subscribe(sharedEmployee => this.deletedEmployee = sharedEmployee);
    
    //Get an array of employees from employee list component and set it in deletedEmployees variable
    this.employeeService.sharedEmployees.subscribe(sharedEmployees => this.deletedEmployees = sharedEmployees);
    
    //If the user send an array of employees to delete, him also set the sharedEmployee data as null, and if that data is null set deleteManyBoolean as true
    // but if the user send an specific employee set deleteManyBoolean as false
    if(this.deletedEmployee.id == null){
      this.deleteManyBoolean=true;
    }else{
      this.deleteManyBoolean=false;
    }
    //console.log('these are de deleted employees',this.deletedEmployees);
    //console.log("Nepafter")
    //console.log(this.deletedEmployee);
  }

  //Funtion to delete only one employee
  deleteEmployee() {
    //Send the selected employee id to the employeeService in order to delete it
    this.employeeService.deleteEmployee(this.deletedEmployee.id);
  }

  //funciton to delete many employees
  deleteEmployees(){
    
  }
 
}
