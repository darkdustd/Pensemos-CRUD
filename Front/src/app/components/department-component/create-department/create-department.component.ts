import { Component, OnInit } from '@angular/core';
import {Department} from '../../../models/department';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  //create a new department variable
  department:Department = new Department();

  constructor(private departmentService: DepartmentCRUDService, private router: Router, private validateDataService:ValidateService) {
    
   }

  ngOnInit(): void {
  }
  
  createDepartment(){
    let newDepartment = {
      code:this.department.code,
      name:this.department.name
    }
    this.validateDataService.validateDepartmentData(newDepartment);
     //Send the new department to the department service in order to create it
    this.departmentService.createDepartment(newDepartment);
    //reload the page after submit the department
    //window.location.reload();

  }
}
