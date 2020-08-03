import { Component, OnInit } from '@angular/core';
import {EmployeeCRUDService} from '../../../services/employee-crud.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  //Variable to get the selected employee data
  selectedEmployee:Employee;

  constructor(private employeeService:EmployeeCRUDService) { }

  ngOnInit(): void {
    //console.log("Nepfore")
    //console.log(this.selectedEmployee);

    //Get the selected employee data from employee list component and set it in selectedEmployee variable
    this.employeeService.sharedPerson.subscribe(sharedEmployee => this.selectedEmployee = sharedEmployee);

    //console.log("Nepafter")
    //console.log(this.selectedEmployee);
  }
  
}
