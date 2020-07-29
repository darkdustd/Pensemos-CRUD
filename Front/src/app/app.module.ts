import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Imported Services
import { InventoryCRUDService } from './services/inventory-crud.service';

//Imported components
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

//Imported modules form angular material
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    DeleteProductComponent
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
    MatButtonModule
  ],
  providers: [
    InventoryCRUDService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateProductComponent,
    EditProductComponent,
    ProductDetailsComponent]
})
export class AppModule { }
