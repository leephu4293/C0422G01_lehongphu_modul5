import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../service/products.service";
import {Products} from "../../model/products";
import {Categorys} from "../../model/categorys";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listProduct: Products[];
  listCategory: Categorys[];

  constructor(private servicePro : ProductsService, ) {
    this.servicePro.getAllProducts().subscribe(data => {
      this.listProduct = data;
    })
    this.servicePro.getAllCategory().subscribe(data=>{
      this.listCategory = data;
    })
  }

  ngOnInit(): void {
  }

}
