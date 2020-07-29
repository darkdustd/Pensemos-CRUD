import { Component, OnInit } from '@angular/core';
import { EmployeeCRUDService } from '../../../services/employee-crud.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  deletedEmployee: Employee;

  constructor(private employeeService: EmployeeCRUDService) { }
 
  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.deletedEmployee);
    this.employeeService.sharedPerson.subscribe(sharedEmployee => this.deletedEmployee = sharedEmployee)
    console.log("Nepafter")
    console.log(this.deletedEmployee);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.deletedEmployee.id);
  }
 
}
