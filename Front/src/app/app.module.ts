import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Imported Services
import { EmployeeCRUDService } from './services/employee-crud.service';
import { ProductCRUDService } from './services/product-crud.service';

//Imported components
import {CreateEmployeeComponent} from './components/employee-component/create-employee/create-employee.component';
import {DeleteEmployeeComponent} from './components/employee-component/delete-employee/delete-employee.component';
import {EditEmployeeComponent} from './components/employee-component/edit-employee/edit-employee.component';
import {EmployeeDetailsComponent} from './components/employee-component/employee-details/employee-details.component';
import {EmployeeListComponent} from './components/employee-component/employee-list/employee-list.component';

import {CreateProductComponent} from './components/product-component/create-product/create-product.component';
import {DeleteProductComponent} from './components/product-component/delete-product/delete-product.component';
import {EditProductComponent} from './components/product-component/edit-product/edit-product.component';
import {ProductDetailsComponent} from './components/product-component/product-details/product-details.component';
import {ProductListComponent} from './components/product-component/product-list/product-list.component';

//Imported modules form angular material
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    CreateProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    ProductListComponent
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
    MatSelectModule
  ],
  providers: [
    EmployeeCRUDService,
    ProductCRUDService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    CreateProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ProductDetailsComponent]
})
export class AppModule { }
