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

  //Variable to set all employees form the backend
  employees: any = [];

  //Array of employees selecteds with de checkbox
  selectedEmployees: any[] = [];

  //Array of booleans which get the value of each employee checkbox
  checkBoxValue: boolean[] = new Array(this.employees.length).fill(false);

  //Variable to get the value of the select all employees checkbox
  checkAllBoxesValue: boolean = false;

  //Variable to control the delete many users
  disabledButton: boolean = true;


  constructor(public modal: MatDialog, private employeeService: EmployeeCRUDService) { }

  ngOnInit(): void {
    //On enter into this page call the employee service to get all the employees
    this.employeeService.getEmployees().subscribe(res => {
      console.log(res);
      this.employees = res;
    });

    /* this.filtredOptions = this.myFormControl.valueChanges
       .pipe(
         startWith(''),
         map(searchValue => this.filter(searchValue))
       );
       */
  }

  //Open create employee modal component
  onCreateEmployee() {
    //Call the create employee component and show it in a dialog/modal
    this.modal.open(CreateEmployeeComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open edit employee modal component
  onEditEmployee(employee: Employee) {
    //Call the employee service to pass the selected employee data to editEmployeeComponent
    this.employeeService.changeSharedEmployee(employee);
    //Call the edit employee component and show it in a dialog/modal
    this.modal.open(EditEmployeeComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open employee details modal component
  onSeeEmployee(employee: Employee) {
    //Call the employee service to pass the selected employee data to employeeDetailsComponent
    this.employeeService.changeSharedEmployee(employee);
    //Call the employee details component and show it in a dialog/modal
    this.modal.open(EmployeeDetailsComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open delete employee modal component
  onDeleteEmployee(employee: Employee) {
    //Call the employee service to pass the selected employee data to deleteEmployeeComponent
    this.employeeService.changeSharedEmployee(employee);
    //Call the delete employee component and show it in a dialog/modal
    this.modal.open(DeleteEmployeeComponent, {
      //configure the dialog size
      height: '30%',
      width: '40%',
    });
  }

  //Open delete employee modal component with delete many employees configuration
  onDeleteManyEmployees() {
    console.log(this.selectedEmployees);
    //Call the employee service to pass an empty employee in order to delete many employees
    this.employeeService.changeSharedEmployee({id:null,firstName:null,lastName:null,email:null});
    //Call the employee service to pass the array of selecteds employees to deleteEmployeeComponent
    this.employeeService.changeSharedEmployees(this.selectedEmployees);
    //Call the delete employee component and show it in a dialog/modal
    this.modal.open(DeleteEmployeeComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Funtion to search an especific employee usign the search bar
  searchEmployee(searchString) {
    console.log(searchString);
    //this.employees.push( {id:1,firstName:'nicolas',lastName:'hola',email:'4'});
    //
    this.employeeService.getEmployee(searchString).subscribe(res => {
      //Get the response form de back end
      console.log(res);
     this.employees = [];
     this.employees.push(res);
    },
      error => {
        //log and error if there are one
        console.log(error);
      },
      () => {
        //Display a confirmation message
        //this.flashMessage.show("El usuario ha sido creado exitosamente", {cssClass: 'alert-success', timeout: 3000});

      });;
  }

  displayAutocomplete(subject) {
    return subject ? subject.firstName : undefined;
  }

  filter(searchValue: string): string[] {
    const filterValue = searchValue.toLowerCase();
    return this.employees.map(employees => employees.firstName).filter(employees =>
      employees.toLowerCase().includes(filterValue));
  }
//////////////////////

//Funtion to add or remove a selected employee to the selectedEmployees array
  selectEmployees(checkBoxValue, employee, index) {
    if (checkBoxValue[index]) {
      this.selectedEmployees.push(employee);
      console.log(this.selectedEmployees);
    } else {
      let removeIndex = this.selectedEmployees.findIndex(x => x.id === employee.id);
      // console.log('this is the deparment id ', department.code);
      // console.log('i will delete', removeIndex);
      this.selectedEmployees.splice(removeIndex, 1);
      console.log(this.selectedEmployees);
    }

    //Condition to active/diseable the delete multiple departments
    if (this.selectedEmployees.length == 0) {
      //If there is not selected departments then diseable the button
      this.disabledButton = true;
    } else {
      //If there is at least 1 selected department then active the button
      this.disabledButton = false;
    }
    // If employees were selected manually change check all employees checkbox value
    //If all are checked checkAllEmployess checkbox to true, otherwise its false
    if (this.selectedEmployees.length == this.employees.length) {
      console.log('nep selected all');
      this.checkAllBoxesValue = true;
    } else {
      console.log('nep did not select all')
      this.checkAllBoxesValue = false;
    }
  }

  //Funtion to change the value of all check boxes by clicing check all employees checkbox
  selectAllEmployees(checkAllBoxesValue) {
    if (checkAllBoxesValue == true) {
      for (let i = 0; i < this.checkBoxValue.length; i++) {
        this.checkBoxValue[i] = true;
        this.selectedEmployees[i] = this.employees[i];
      }
      this.disabledButton = false;
      console.log(this.checkBoxValue);
      console.log(this.selectedEmployees);
    } else {
      for (let i = 0; i < this.checkBoxValue.length; i++) {
        this.checkBoxValue[i] = false;
      }
      this.selectedEmployees = [];
      this.disabledButton = true;
      console.log(this.checkBoxValue);
    }
  }
}
