import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  myFormControl = new FormControl();
  filtredOptions: Observable<string[]>;

  //Define product object
  departments: Department[] = [{ code: "1", name: "Pudding" },
  { code: "2", name: "Cosplay" },
  { code: "3", name: "Book" },
  { code: "4", name: "Videogames" },
  { code: "5", name: "NGear" },
  { code: "6", name: "Gun" },
  { code: "7", name: "Drawing note" },
  { code: "8", name: "Megaphone" }];

  selectedDepartments: any[] = [];
  checkBoxValue: boolean[] = [];
  disabledButton:boolean = true;


  constructor(public modal: MatDialog, private departmentService: DepartmentCRUDService, private router: Router) { }

  ngOnInit(): void {
    this.filtredOptions = this.myFormControl.valueChanges
      .pipe(
        startWith(''),
        map(searchValue => this.filter(searchValue))
      );
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
    //Function to pass the selected product data to productDetailsComponent
    this.departmentService.changeSharedDepartment(department);
    this.modal.open(DepartmentDetailsComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  onDeleteDepartment(department: Department) {
    this.departmentService.changeSharedDepartment(department);
    this.modal.open(DeleteDeparmentComponent, {
      //configure the dialog size
      height: '30%',
      width: '40%',
    });
  }

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

  selectDepartmentsId(checkBoxValue, department, index) {
  //  console.log(checkBoxValue)
    if (checkBoxValue[index]) {
      this.selectedDepartments.push(department);
     // console.log(this.selectedDepartments);
    } else {
      let removeIndex = this.selectedDepartments.findIndex(x => x.code === department.code);
     // console.log('this is the deparment id ', department.code);
     // console.log('i will delete', removeIndex);
      this.selectedDepartments.splice(removeIndex, 1);
      //console.log(this.selectedDepartments);
    }

    //Condition to active/diseable the delete multiple departments
    if(this.selectedDepartments.length == 0){
      //If there is not selected departments then diseable the button
      this.disabledButton = true;
    }else{
       //If there is at least 1 selected department then active the button
      this.disabledButton = false;
    }
  }

}
