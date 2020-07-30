import { Component, OnInit } from '@angular/core';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDeparmentComponent implements OnInit {
 
  deletedDepartment:Department;

  constructor(private departmentService:DepartmentCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.deletedDepartment);
    this.departmentService.sharedDepartment.subscribe(sharedDepartment => this.deletedDepartment = sharedDepartment)
    console.log("Nepafter")
    console.log(this.deletedDepartment);
  }

  deleteDepartment(){
    this.departmentService.deleteDepartment(this.deletedDepartment.code);
  }
 
}
 