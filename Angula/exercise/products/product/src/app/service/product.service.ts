import { Injectable } from '@angular/core';
import {Iproduct} from "../../interface/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   listProduct : Iproduct[]=[
     {id:1,name:'coca',price:5000,note:'no sugar'},
     {id:2,name:'pepsi',price:8000,note:'full sugar'},
     {id:3,name:'red bull',price:2000,note:'classic'},
     {id:4,name:'sting',price:9000,note:'red'},
     {id:5,name:'beer',price:5500,note:'huda'},
     {id:'dasd',name:'beer',price:5500,note:'huda'},
   ]

  constructor() {}

  getList(){
     return this.listProduct;
  }
  createProducts(newProduct : Iproduct){
     this.listProduct.push(newProduct)
  }

  findProductById(id: string){
    console.log(typeof id)
    console.log(typeof this.listProduct[this.listProduct.length - 1].id)
   return  this.listProduct.find(product => product.id == parseInt(id))

  }

  RemoveProductById(id: string) {
    for (let i=0; i< this.listProduct.length;i++) {
      if (parseInt(id) === this.listProduct[i].id){
          this.listProduct.splice(i,1)
      }
    }
  }

  updateProduct(product : Iproduct){
     for (let i=0;i<this.listProduct.length;i++){
       if(product.id === this.listProduct[i].id){
         this.listProduct[i]= product
       }
     }
  }
}
