import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Imported Services
import { EmployeeCRUDService } from './services/employee-crud.service';
import { DepartmentCRUDService } from './services/department-crud.service';
import { ValidateService } from './services/validate.service';

//Imported components
import { CreateEmployeeComponent } from './components/employee-component/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './components/employee-component/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './components/employee-component/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './components/employee-component/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-component/employee-list/employee-list.component';

import { CreateDepartmentComponent } from './components/department-component/create-department/create-department.component';
import { DeleteDeparmentComponent } from './components/department-component/delete-department/delete-department.component';
import { EditDepartmentComponent } from './components/department-component/edit-department/edit-department.component';
import { DepartmentDetailsComponent } from './components/department-component/department-details/department-details.component';
import { DepartmentListComponent } from './components/department-component/department-list/department-list.component';

//Imported modules form angular material
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    CreateDepartmentComponent,
    DeleteDeparmentComponent,
    EditDepartmentComponent,
    DepartmentDetailsComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [
    EmployeeCRUDService,
    DepartmentCRUDService,
    ValidateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    CreateDepartmentComponent,
    DeleteDeparmentComponent,
    EditDepartmentComponent,
    DepartmentDetailsComponent]
})
export class AppModule { }
