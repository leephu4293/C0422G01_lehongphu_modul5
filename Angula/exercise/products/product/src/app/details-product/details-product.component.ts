import {Component, OnInit} from '@angular/core';
import {Iproduct} from "../../interface/iproduct";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  product1: Iproduct;

  constructor(private product: ProductService, private active: ActivatedRoute) {
    this.active.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id')
       this.product.findProductById(id).subscribe(data=>{
         this.product1= data;
       });
      console.log(this.product1)
    })
  }

  ngOnInit(): void {
  }

}
