import { Component, OnInit } from '@angular/core';
import {InventoryCRUDService} from '../../services/inventory-crud.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct:Product;

  constructor(private inventoryService:InventoryCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.selectedProduct);
    this.inventoryService.sharedProduct.subscribe(sharedObject => this.selectedProduct = sharedObject)
    console.log("Nepafter")
    console.log(this.selectedProduct);
  }
 
}
