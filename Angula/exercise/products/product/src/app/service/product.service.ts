import { Injectable } from '@angular/core';
import {Iproduct} from "../../interface/iproduct";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  httpClient : HttpClient) {

  }


  getList(){
     return this.httpClient.get<any>("http://localhost:3000/product");
  }
  createProducts(newProduct : Iproduct){
    return  this.httpClient.post<Iproduct>("http://localhost:3000/product",newProduct);
  }

  findProductById(id: string){
   return  this.httpClient.get("http://localhost:3000/product/"+ id);
  }

  RemoveProductById(id: string) {
    return this.httpClient.delete("http://localhost:3000/product/"+id);

  }

  updateProduct(product : Iproduct){
     return this.httpClient.patch("http://localhost:3000/product/" + product.id , product)
  }
}
