import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';

//Imported components
import { CreateDepartmentComponent } from '../create-department/create-department.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
import { DepartmentDetailsComponent } from '../department-details/department-details.component';
import { DeleteDeparmentComponent } from '../delete-department/delete-department.component';

//Imported service
import { DepartmentCRUDService } from '../../../services/department-crud.service';

//Product model
import { Department } from '../../../models/department';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  myFormControl = new FormControl();
  filtredOptions: Observable<string[]>;

  //Variable to set all departments form the backend
  departments: Department[] = [{ code: "1", name: "Pudding" },
  { code: "2", name: "Cosplay" },
  { code: "3", name: "Book" },
  { code: "4", name: "Videogames" },
  { code: "5", name: "NGear" },
  { code: "6", name: "Gun" },
  { code: "7", name: "Drawing note" },
  { code: "8", name: "Megaphone" }];

  //Array of departments selecteds with de checkbox
  selectedDepartments: any[] = [];

  //Array of booleans which get the value of each department checkbox
  checkBoxValue: boolean[] = new Array(this.departments.length).fill(false);

  //Variable to get the value of the select all departments checkbox
  checkAllBoxesValue: boolean = false;

  //Variable to control the delete many users
  disabledButton: boolean = true;

  constructor(public modal: MatDialog, private departmentService: DepartmentCRUDService, private router: Router) { }

  ngOnInit(): void {
    //On enter into this page call the department service to get all the departments
    //Later

    /*
    this.filtredOptions = this.myFormControl.valueChanges
      .pipe(
        startWith(''),
        map(searchValue => this.filter(searchValue))
      );*/
  }

  //Open create product modal component
  onCreateDepartment() {
    //Call the component create product and show it in a dialog/modal
    this.modal.open(CreateDepartmentComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open edit product modal component
  onEditDepartment(department: Department) {
    //Function to pass the selected product data to editProductComponent
    this.departmentService.changeSharedDepartment(department);
    //Call the component create product and show it in a dialog/modal
    this.modal.open(EditDepartmentComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open product details modal component
  onSeeDepartment(department: Department) {
    //Call the department service to pass the selected department data to departmentDetailsComponent
    this.departmentService.changeSharedDepartment(department);
    //Call the department details component and show it in a dialog/modal
    this.modal.open(DepartmentDetailsComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open product details modal component
  onDeleteDepartment(department: Department) {
    //Call the department service to pass the selected department data to deleteDepartmentComponent
    this.departmentService.changeSharedDepartment(department);
    //Call the delete department component and show it in a dialog/modal
    this.modal.open(DeleteDeparmentComponent, {
      //configure the dialog size
      height: '30%',
      width: '40%',
    });
  }

  //Open delete department modal component with delete many departments configuration
  onDeleteManyDepartments() {
    console.log(this.selectedDepartments);
    //Call the department service to pass an empty department in order to delete many departments
    this.departmentService.changeSharedDepartment({ code: null, name: null });
    //Call the department service to pass the array of selecteds departments to deleteDepartmentComponent
    this.departmentService.changeSharedDepartments(this.selectedDepartments);
    //Call the delete department component and show it in a dialog/modal
    this.modal.open(DeleteDeparmentComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Funtion to search an especific department usign the search bar
  searchDepartment(searchString) {
    console.log(searchString);
  }

  displayAutocomplete(subject) {
    return subject ? subject.name : undefined;
  }

  filter(searchValue: string): string[] {
    const filterValue = searchValue.toLowerCase();
    return this.departments.map(x => x.name).filter(department =>
      department.toLowerCase().includes(filterValue));
  }

  //Funtion to add or remove a selected department to the selectedDepartments array
  selectDepartmentsId(checkBoxValue, department, index) {
    //  console.log(checkBoxValue)
    if (checkBoxValue[index]) {
      this.selectedDepartments.push(department);
      console.log(this.selectedDepartments);
    } else {
      let removeIndex = this.selectedDepartments.findIndex(x => x.code === department.code);
      // console.log('this is the deparment id ', department.code);
      // console.log('i will delete', removeIndex);
      this.selectedDepartments.splice(removeIndex, 1);
      console.log(this.selectedDepartments);
    }

    //Condition to active/diseable the delete multiple departments
    if (this.selectedDepartments.length == 0) {
      //If there is not selected departments then diseable the button
      this.disabledButton = true;
    } else {
      //If there is at least 1 selected department then active the button
      this.disabledButton = false;
    }

    // If departments were selected manually change check all departments checkbox value
    //If all are checked checkAllEmployess checkbox to true, otherwise its false
    if (this.selectedDepartments.length == this.departments.length) {
      console.log('nep selected all');
      this.checkAllBoxesValue = true;
    } else {
      console.log('nep did not select all')
      this.checkAllBoxesValue = false;
    }
  }

  //Funtion to change the value of all check boxes by clicing check all departments checkbox
  selectAllDepartmentsId(checkAllBoxesValue) {
    if (checkAllBoxesValue == true) {
      for (let i = 0; i < this.checkBoxValue.length; i++) {
        this.checkBoxValue[i] = true;
        this.selectedDepartments[i] = this.departments[i];
      }
      this.disabledButton = false;
      console.log(this.checkBoxValue);
      console.log(this.selectedDepartments);
    } else {
      for (let i = 0; i < this.checkBoxValue.length; i++) {
        this.checkBoxValue[i] = false;
      }
      this.selectedDepartments = [];
      this.disabledButton = true;
      console.log(this.checkBoxValue);

    }
  }
}
