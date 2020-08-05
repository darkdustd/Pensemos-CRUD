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

  //private variable of type employee which will save a employee from a component
  private toUpdateEmployee = new BehaviorSubject<Employee>({id:null,firstName:null,lastName:null,email:null});
  sharedPerson = this.toUpdateEmployee.asObservable();

  //private variable which will save a department from a component
  private toUpdateEmployees = new BehaviorSubject<any[]>([]);
  sharedEmployees = this.toUpdateEmployees.asObservable();

  constructor(private http:HttpClient) { }
  
  //Function to get all employees
  getEmployees(){
    return this.http.get<Employee[]>(this.url);
  }

  //Function to get a specific searched employee using a search string
  getEmployee(searchString:string,requestType:number){
    if(requestType == 0){
      return this.http.get<Employee[]>(this.url);
    }else if(requestType == 1){
      return this.http.get<Employee[]>(this.url+'/'+searchString);
    }else{
      return this.http.get<Employee[]>('http://localhost:8080/api/employee'+'/'+searchString);
    }
    
  }

  //Method to create a new employee
  createEmployee(newEmployee){
    console.log(newEmployee);
    this.http.post(this.url,newEmployee).subscribe(res => {
      //Get the response form de back end
      console.log(res);
    },
      error => {
        //log and error if there are one
        console.log(error);
      },
      () => {
        //Display a confirmation message
        //this.flashMessage.show("El usuario ha sido creado exitosamente", {cssClass: 'alert-success', timeout: 3000});

      });
  }

  //Method to edit a employee
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

  //Method to delete a employee
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

  //function to pass a employee from a component to another one
  changeSharedEmployee(employee:Employee){
    this.toUpdateEmployee.next(employee);
  }

  //function to pass a employee array from a component to another one
  changeSharedEmployees(employee){
    this.toUpdateEmployees.next(employee);
  }
}
