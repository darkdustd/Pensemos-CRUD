import { Component, OnInit } from '@angular/core';
import {Department} from '../../../models/department';
import {DepartmentCRUDService} from '../../../services/department-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  department:Department = new Department();

  constructor(private departmentService: DepartmentCRUDService, private router: Router) {
    
   }

  ngOnInit(): void {
  }
 
  createDepartment(){
    let newDepartment = {
      code:this.department.code,
      name:this.department.name
    }
    this.departmentService.createDepartment(newDepartment);
    window.location.reload();

  }
}
