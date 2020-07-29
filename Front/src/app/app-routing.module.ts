import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-component/employee-list/employee-list.component';
import {ProductListComponent} from './components/product-component/product-list/product-list.component';


const routes: Routes = [
  {path:'', component:EmployeeListComponent},
  {path:'products', component:ProductListComponent}
  //{path:'createProduct', component:CreateProductComponent},
  //{path:'editProduct',component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
