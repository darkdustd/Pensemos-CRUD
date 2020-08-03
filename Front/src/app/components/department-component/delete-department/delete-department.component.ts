import { Component, OnInit } from '@angular/core';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDeparmentComponent implements OnInit {
 
  //Valiable to set the data of only one department who will be deleted
  deletedDepartment:Department;

  //Variable to set multiple departments in order to delete them
  deletedDepartments:any[];

  //Variable to define if the user is going to delete only one or more than 1 department at the same time
  // true if the user will delete more than 1 and false if the user delete only 1
  deleteManyBoolean:boolean;

  constructor(private departmentService:DepartmentCRUDService) { }

  ngOnInit(): void {
    //console.log("Nepfore")
    //console.log(this.deletedDepartment);

    //Get exactly one department from department list component and set it in deletedDepartment variable
    this.departmentService.sharedDepartment.subscribe(sharedDepartment => this.deletedDepartment = sharedDepartment);

    //If the user send an array of departments to delete, him also set the sharedDepartment data as null, and if that data is null set deleteManyBoolean as true
    // but if the user send an specific department set deleteManyBoolean as false
    this.departmentService.sharedDepartments.subscribe(sharedDepartments => this.deletedDepartments = sharedDepartments);
    if(this.deletedDepartment.code == null){
      this.deleteManyBoolean=true;
    }else{
      this.deleteManyBoolean=false;
    }
    //console.log('these are the passed departments', this.deletedDepartments);
    //console.log("Nepafter")
    //console.log(this.deletedDepartment);
  }

  //Funtion to delete only one department
  deleteDepartment(){
    //Send the selected department id to the departmentService in order to delete it
    this.departmentService.deleteDepartment(this.deletedDepartment.code);
  }

  //funciton to delete many departments
  deleteDepartments(){
    
  }
 
}
 