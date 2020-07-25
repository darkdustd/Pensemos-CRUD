import { Component, OnInit, Input } from '@angular/core';
import {InventoryCRUDService} from '../../services/inventory-crud.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

   sharedProduct:Product = new Product();

   EditedProduct:Product = new Product();

  constructor(private inventoryService:InventoryCRUDService) { }

  ngOnInit(): void {
    console.log("Nepfore")
    console.log(this.sharedProduct);
    this.inventoryService.sharedProduct.subscribe(sharedObject => this.sharedProduct = sharedObject)
    console.log("Nepafter")
    console.log(this.sharedProduct);
     
    //Assign the selected product atribute values to a local object
    this.EditedProduct.code = this.sharedProduct.code;
    this.EditedProduct.name = this.sharedProduct.name;
    this.EditedProduct.price = this.sharedProduct.price;
    this.EditedProduct.stock = this.sharedProduct.stock;
    console.log(this.EditedProduct);
  }

  editProduct(){
    let editedProduct = {
      code:this.EditedProduct.code,
      name:this.EditedProduct.name,
      price:this.EditedProduct.price,
      stock:this.EditedProduct.stock
    }
    this.inventoryService.editProducts(editedProduct);
  }

}
