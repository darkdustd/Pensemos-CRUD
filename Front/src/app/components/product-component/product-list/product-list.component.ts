import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';

//Imported components
import { CreateProductComponent } from '../create-product/create-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

//Imported service
import { ProductCRUDService } from '../../../services/product-crud.service';

//Product model
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  myFormControl = new FormControl();
  filtredOptions: Observable<string[]>;

  //Define product object
  products: Product[] = [{ code: "1", name: "Pudding", price: 2000, stock: 98 },
  { code: "2", name: "Cosplay", price: 20000, stock: 23 },
  { code: "3", name: "Book", price: 10000, stock: 50 },
  { code: "4", name: "Videogames", price: 200000, stock: 10 },
  { code: "5", name: "NGear", price: 2000000, stock: 1 },
  { code: "6", name: "Gun", price: 1000000, stock: 10 },
  { code: "7", name: "Drawing note", price: 10000, stock: 50 },
  { code: "8", name: "Megaphone", price: 200000, stock: 10 }];


  constructor(public modal: MatDialog, private productService: ProductCRUDService) { }

  ngOnInit(): void {
    this.filtredOptions = this.myFormControl.valueChanges
      .pipe(
        startWith(''),
        map(searchValue => this.filter(searchValue))
      );
  }

  //Open create product modal component
  onCreateProduct() {
    //Call the component create product and show it in a dialog/modal
    this.modal.open(CreateProductComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open edit product modal component
  onEditProduct(product: Product) {
    //Function to pass the selected product data to editProductComponent
    this.productService.changeSharedProduct(product);
    //Call the component create product and show it in a dialog/modal
    this.modal.open(EditProductComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  //Open product details modal component
  onSeeProduct(product: Product) {
    //Function to pass the selected product data to productDetailsComponent
    this.productService.changeSharedProduct(product);
    this.modal.open(ProductDetailsComponent, {
      //configure the dialog size
      height: '50%',
      width: '40%',
    });
  }

  onDeleteProduct(product: Product) {
    this.productService.changeSharedProduct(product);
    this.modal.open(DeleteProductComponent, {
      //configure the dialog size
      height: '30%',
      width: '40%',
    });
  }

  searchProduct(searchString) {
    console.log(searchString);
  }

  displayAutocomplete(subject) {
    return subject ? subject.name : undefined;
  }

  filter(searchValue: string): string[] {
    const filterValue = searchValue.toLowerCase();
    return this.products.map(x => x.name).filter(product =>
      product.toLowerCase().includes(filterValue));
  }

}
