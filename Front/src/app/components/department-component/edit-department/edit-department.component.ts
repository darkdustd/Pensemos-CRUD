import { Component, OnInit, Input } from '@angular/core';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  //Variable to get the department data form department list component
   sharedDepartment:Department = new Department();

   //Variable to set the selected department data
   editedDepartment:Department = new Department();

  constructor(private departmentService:DepartmentCRUDService) { }

  ngOnInit(): void {
    //console.log("Nepfore")
    //console.log(this.sharedDepartment);

    //Get the selected department from department list component and set it in sharedDepartment variable
    this.departmentService.sharedDepartment.subscribe(sharedDepartment => this.sharedDepartment = sharedDepartment);

    //console.log("Nepafter")
    //console.log(this.sharedDepartment);
     
     //Assign the sharedDepartment data into editedDepartment
    //I have to do this because if we work using sharedDepartment, the changes made in this variable will also afect the department data from department list component
    this.editedDepartment.code = this.sharedDepartment.code;
    this.editedDepartment.name = this.sharedDepartment.name;
    
    //console.log(this.editedDepartment);
  }

  editDepartment(){
    let editedDepartment = {
      code:this.sharedDepartment.code,
      name:this.sharedDepartment.name
    }
    //Send the selected department to the departmentService in order to edit it
    this.departmentService.editDepartment(editedDepartment);
  }

}
