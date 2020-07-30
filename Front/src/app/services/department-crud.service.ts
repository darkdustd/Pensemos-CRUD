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

  private toUpdateDepartment = new BehaviorSubject<Department>({code:null,name:null});
  sharedDepartment = this.toUpdateDepartment.asObservable();


  constructor(private http:HttpClient, private router: Router) { }

  //verify if i have to use camelcase upper or lower case, if upper case change all methods and variables names

  //Methos to get (all) products
  getDepartments(){
    //return this.http.get<Product[]>(this.url);
  }

  //Method to get a specific searched product
  getDepartment(searchString:string){
    console.log(searchString);
  }

  //Method to create a new product
  createDepartment(newDepartment){
    console.log(newDepartment);
    this.router.navigateByUrl('/departments').then(
      () => {this.router.navigateByUrl(this.router.url);});
  }

  //Method to edit a product
  editDepartment(editedDepartment){
    console.log(editedDepartment);
  }

  //Method to delete a product
  deleteDepartment(departmentId:string){
    console.log(departmentId);

  }

  changeSharedDepartment(department:Department){
    this.toUpdateDepartment.next(department);
  }
}
