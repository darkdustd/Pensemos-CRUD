import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductCRUDService} from '../../../services/product-crud.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product = new Product();

  constructor(private productService: ProductCRUDService) {
    
   }

  ngOnInit(): void {
  }
 
  createProduct(){
    let newProduct = {
      code:this.product.code,
      name:this.product.name,
      price:this.product.price,
      stock:this.product.stock
    }
    this.productService.createProducts(newProduct);
  }
}
