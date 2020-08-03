import { Component, OnInit } from '@angular/core';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
 
   //Variable to get the selected department data
  selectedDepartment:Department;

  constructor(private departmentService:DepartmentCRUDService) { }

  ngOnInit(): void {
    //console.log("Nepfore")
    //console.log(this.selectedDepartment);

    //Get the selected employee data from department list component and set it in selectedDepartment variable
    this.departmentService.sharedDepartment.subscribe(sharedDepartment => this.selectedDepartment = sharedDepartment);

    //console.log("Nepafter")
    //console.log(this.selectedDepartment);
  }
 
}
