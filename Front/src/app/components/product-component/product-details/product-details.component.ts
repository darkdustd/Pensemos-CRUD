import { Component, OnInit } from '@angular/core';
import {ProductCRUDService} from '../../../services/product-crud.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct:Product;

  constructor(private productService:ProductCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.selectedProduct);
    this.productService.sharedProduct.subscribe(sharedObject => this.selectedProduct = sharedObject)
    console.log("Nepafter")
    console.log(this.selectedProduct);
  }
 
}
