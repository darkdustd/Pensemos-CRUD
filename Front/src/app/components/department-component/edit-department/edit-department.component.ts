import { Component, OnInit, Input } from '@angular/core';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

   sharedDepartment:Department = new Department();

   editedDepartment:Department = new Department();

  constructor(private departmentService:DepartmentCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.sharedDepartment);
    this.departmentService.sharedDepartment.subscribe(sharedDepartment => this.sharedDepartment = sharedDepartment)
    console.log("Nepafter")
    console.log(this.sharedDepartment);
     
    //Assign the selected product atribute values to a local object
    this.editedDepartment.code = this.sharedDepartment.code;
    this.editedDepartment.name = this.sharedDepartment.name;
    console.log(this.editedDepartment);
  }

  editDepartment(){
    let editedDepartment = {
      code:this.sharedDepartment.code,
      name:this.sharedDepartment.name
    }
    this.departmentService.editDepartment(editedDepartment);
  }

}
