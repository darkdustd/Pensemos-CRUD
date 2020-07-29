import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryCRUDService {

  //Server url 
  url:string ='http://localhost:8000';

  private toUpdateProduct = new BehaviorSubject<Product>({code:null,name:null,price:0,stock:0});
  sharedProduct = this.toUpdateProduct.asObservable();


  constructor(private http:HttpClient) { }

  //verify if i have to use camelcase upper or lower case, if upper case change all methods and variables names

  //Methos to get (all) products
  getProducts(){

    return this.http.get<any>(this.url);
  }

  //Method to get a specific searched product
  getProduct(searchString:string){

  }

  //Method to create a new product
  createProducts(newProduct:Product){
    console.log(newProduct);
  }

  //Method to edit a product
  editProducts(editedProduct:Product){
    console.log(editedProduct);
  }

  //Method to delete a product
  deleteProducts(productId:string){
    console.log(productId);

  }

  changeSharedProduct(product:Product){
    this.toUpdateProduct.next(product);
  }
}
