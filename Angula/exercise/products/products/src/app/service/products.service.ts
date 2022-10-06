import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Products} from "../../model/products";
import {Categorys} from "../../model/categorys";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient: HttpClient) { }

  getAllProducts(){
    return this.HttpClient.get<Products[]>('http://localhost:3000/product');
  }
  getAllCategory(){
    return this.HttpClient.get<Categorys[]>('http://localhost:3000/category');
  }

  findByIdProduct(id : string): Observable<Products>{
    return this.HttpClient.get('http://localhost:3000/product/'+id);
  }
  updateProduct(product:Products){
    return this.HttpClient.patch('http://localhost:3000/product/'+ product.id, product)
  }
}
