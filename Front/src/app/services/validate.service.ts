import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  //Funtion to validate that all employee fields are filled
  validateEmployeeData(employee) {
    //If employee data is null return false
    if (employee.id == undefined ||
      employee.firstName == undefined ||
      employee.lastName == undefined) {
      console.log('invalid because of null');
      return false;
      //If employee data is null return false
    } else if (String(employee.firstName).length == 0 ||
      String(employee.lastName).length == 0) {
      console.log('invalid because of empty fields');
      return false;
    } else {
      //Otherwise the data is valid so return true
      console.log('its valid');
      return true;
    }

  }

  //Funtion to validate that the employee email follows emails format
  validateEmployeeEmail(employeeEmail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(employeeEmail).toLowerCase());
  }

  //Funtion to validate that all department fields are filled
  validateDepartmentData(department) {
    console.log(String(department.name).length);
    //If employee data is null return false
    if (department.code == undefined ||
      department.name == undefined) {
      console.log('its not valid because of null');
      return false;
      //If employee data is null return false
    } else if (String(department.name).length == 0) {
      console.log('its not valid because department name its short');
      return false;
    } else {
      //Otherwise the data is valid so return true
      console.log('its valid');
      return true;
    }

  }
}
