import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Iproduct} from "../../interface/iproduct";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateForm = new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    price:new FormControl(),
    note:new FormControl(),
  })
  productUpdate : Iproduct;
  constructor(private productUp :ProductService,private check : ActivatedRoute,private router :Router) {
    this.check.paramMap.subscribe((param:ParamMap)=>{
      const id = param.get('id');
      this.productUpdate =  this.productUp.findProductById(id);
    })
  }

  ngOnInit(): void {
  }

  onUpdateSubmit() {
     this.productUp.updateProduct(this.updateForm.value)
     this.router.navigateByUrl('')

  }
}
