import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Iproduct} from "../../interface/iproduct";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
   createForm = new FormGroup({
     id: new FormControl(),
     name:new FormControl(),
     price:new FormControl(),
     note:new FormControl(),
   })

  constructor(private createProduct : ProductService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.createProduct.createProducts(this.createForm.value).subscribe(next=>{
      this.router.navigateByUrl('');
    });

  }
}
