import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {

  //Server api url 
  url:string ='http://localhost:8080/api/employees';

  private toUpdateEmployee = new BehaviorSubject<Employee>({id:null,firstName:null,lastName:null,email:null});
  sharedPerson = this.toUpdateEmployee.asObservable();

  constructor(private http:HttpClient) { }
  
  //Methods to get all people
  getEmployees(){
    return this.http.get<Employee[]>(this.url);
  }

  //Method to get a specific searched person
  getEmployee(searchString:string){
    console.log(searchString);
    return this.http.get<Employee[]>(this.url+'/'+searchString);
  }

  //Method to create a new person
  createEmployee(newEmployee){
    console.log(newEmployee);
    this.http.post(this.url,newEmployee).subscribe(res => {
      console.log(res);
    },
      error => {
        console.log(error);
      },
      () => {
        //Display a confirmation message
        //this.flashMessage.show("El usuario ha sido creado exitosamente", {cssClass: 'alert-success', timeout: 3000});

      });
  }

  //Method to edit a person
  editEmployee(editedEmployee:Employee){
    console.log(editedEmployee);
    this.http.put(this.url,editedEmployee).subscribe(res => {
      console.log(res);
    },
      error => {
        console.log(error);
      },
      () => {
        //Display a confirmation message
        //this.flashMessage.show("El usuario ha sido creado exitosamente", {cssClass: 'alert-success', timeout: 3000});

      });
  }

  //Method to delete a person
  deleteEmployee(employeeId){
    console.log(employeeId);
    this.http.delete(this.url+'/'+employeeId).subscribe(res => {
      console.log(res);
    },
      error => {
        console.log(error);
      },
      () => {
        //Display a confirmation message
        //this.flashMessage.show("El usuario ha sido creado exitosamente", {cssClass: 'alert-success', timeout: 3000});

      });

  }

  changeSharedEmployee(employee:Employee){
    this.toUpdateEmployee.next(employee);
  }
}
