import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../service/products.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {typeIsOrHasBaseType} from "tslint/lib/language/typeUtils";
import {Products} from "../../model/products";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productDetails: Products;
  constructor(private servicePro: ProductsService, private paramId: ActivatedRoute) {
    this.paramId.paramMap.subscribe((param:ParamMap) =>{
      const id = param.get("id");
      this.servicePro.findByIdProduct(id).subscribe(data=>{
        this.productDetails = data;
      })
    })
  }

  ngOnInit(): void {
  }

}
