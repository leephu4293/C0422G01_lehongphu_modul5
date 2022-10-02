import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../../interface/iproduct";
import {ProductService} from "../service/product.service";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: Iproduct[];
  constructor(private takeList : ProductService) {
     this.takeList.getList().subscribe(data=>{
       this.list= data});
  }

  ngOnInit(): void {
  }

}
