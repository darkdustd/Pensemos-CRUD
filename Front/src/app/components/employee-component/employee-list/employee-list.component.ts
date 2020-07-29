import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';

//Imported components
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
 
//Imported service
import { EmployeeCRUDService } from '../../../services/employee-crud.service';

//Product model
import { Employee } from '../../../models/employee';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  myFormControl = new FormControl();
  filtredOptions: Observable<string[]>;

/////////////////////////////////////////////////////////////////////////////////////////////

  //Define product object
  employees: Employee[];


  constructor(public modal: MatDialog, private employeeService: EmployeeCRUDService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res =>{
      console.log(res);
      this.employees = res;
    });
    
    this.filtredOptions = this.myFormControl.valueChanges
      .pipe(
        startWith(''),
        map(searchValue => this.filter(searchValue))
      );
  }

  //Open create product modal component
  onCreateEmployee() {
    //Call the component create product and show it in a dialog/modal
    this.modal.open(CreateEmployeeComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open edit product modal component
  onEditEmployee(employee: Employee) {
    //Function to pass the selected product data to editProductComponent
    this.employeeService.changeSharedEmployee(employee);
    //Call the component create product and show it in a dialog/modal
    this.modal.open(EditEmployeeComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open product details modal component
  onSeeEmployee(employee: Employee) {
    //Function to pass the selected product data to productDetailsComponent
    this.employeeService.changeSharedEmployee(employee);
    this.modal.open(EmployeeDetailsComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  onDeleteEmployee(employee: Employee) {
    this.employeeService.changeSharedEmployee(employee);
    this.modal.open(DeleteEmployeeComponent, {
      //configure the dialog size
      height: '30%',
      width: '40%',
    });
  }

  searchEmployee(searchString) {
    console.log(searchString);
  }

  displayAutocomplete(subject) {
    return subject ? subject.firstName : undefined;
  }

  filter(searchValue: string): string[] {
    const filterValue = searchValue.toLowerCase();
    return this.employees.map(employees => employees.firstName).filter(employees =>
      employees.toLowerCase().includes(filterValue));
  }

}
