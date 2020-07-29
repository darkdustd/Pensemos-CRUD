import { Component, OnInit } from '@angular/core';
import {InventoryCRUDService} from '../../services/inventory-crud.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  deletedProduct:Product;

  constructor(private inventoryService:InventoryCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.deletedProduct);
    this.inventoryService.sharedProduct.subscribe(sharedObject => this.deletedProduct = sharedObject)
    console.log("Nepafter")
    console.log(this.deletedProduct);
  }

  deleteProduct(){
    this.inventoryService.deleteProducts(this.deletedProduct.code);
  }
 
}
 