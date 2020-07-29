import { Component, OnInit } from '@angular/core';
import {ProductCRUDService} from '../../../services/product-crud.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  deletedProduct:Product;

  constructor(private productService:ProductCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.deletedProduct);
    this.productService.sharedProduct.subscribe(sharedObject => this.deletedProduct = sharedObject)
    console.log("Nepafter")
    console.log(this.deletedProduct);
  }

  deleteProduct(){
    this.productService.deleteProducts(this.deletedProduct.code);
  }
 
}
 