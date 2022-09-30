import {Component, OnInit} from '@angular/core';
import {Iproduct} from "../../interface/iproduct";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

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
      // @ts-ignore
      console.log(id)
      this.product1 = this.product.findProductById(id);
      console.log(this.product1)
    })
  }

  ngOnInit(): void {
  }

}
