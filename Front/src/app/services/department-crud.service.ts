import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from '../models/department';
import {BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentCRUDService {

  //Server url 
  url:string ='http://';

  //private variable of type department witch will save a department from a component
  private toUpdateDepartment = new BehaviorSubject<Department>({code:null,name:null});
  sharedDepartment = this.toUpdateDepartment.asObservable();

  //private variable of type object witch will save an array of department from a component
  private toUpdateDepartments = new BehaviorSubject<any[]>([]);
  sharedDepartments = this.toUpdateDepartments.asObservable();

  constructor(private http:HttpClient, private router: Router) { }

  //function to get all departments 
  getDepartments(){
    //return this.http.get<Product[]>(this.url);
  }

  //function to get a specific searched department using a searchString 
  getDepartment(searchString:string){
    console.log(searchString);
  }

  //function to create a new product
  createDepartment(newDepartment){
    console.log(newDepartment);
    this.router.navigateByUrl('/departments').then(
      () => {this.router.navigateByUrl(this.router.url);});
  }
 
  //function to edit a product
  editDepartment(editedDepartment){
    console.log(editedDepartment);
  }

  //function to delete a product
  deleteDepartment(departmentId:string){
    console.log(departmentId);

  }

  //function to pass a department from a component to another one
  changeSharedDepartment(department:Department){
    this.toUpdateDepartment.next(department);
  }

  //function to pass a department array from a component to another one
  changeSharedDepartments(departments){
    this.toUpdateDepartments.next(departments);
  }
}
