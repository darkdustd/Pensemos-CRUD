import { Component, OnInit } from '@angular/core';
import {EmployeeCRUDService} from '../../../services/employee-crud.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  selectedEmployee:Employee;

  constructor(private employeeService:EmployeeCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.selectedEmployee);
    this.employeeService.sharedPerson.subscribe(sharedEmployee => this.selectedEmployee = sharedEmployee)
    console.log("Nepafter")
    console.log(this.selectedEmployee);
  }
  
}
