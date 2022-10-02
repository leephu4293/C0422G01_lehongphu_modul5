import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../../interface/iproduct";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private deletePro : ProductService, private paramPro: ActivatedRoute, private route:Router) {
    this.paramPro.paramMap.subscribe((param:ParamMap)=>{
      const id = param.get('id')
      this.deletePro.RemoveProductById(id).subscribe(data=>{
        this.route.navigateByUrl('')
      });

    })
  }

  ngOnInit(): void {
  }

}
