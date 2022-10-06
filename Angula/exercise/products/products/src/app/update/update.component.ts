import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductsService} from "../service/products.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Products} from "../../model/products";
import {Categorys} from "../../model/categorys";
import Swal from "sweetalert2"
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formUpdate: FormGroup
  productUp: Products
  categoryUp: Categorys[];
  constructor(private servicePro:ProductsService, private paramId: ActivatedRoute, private router: Router) {
    this.paramId.paramMap.subscribe((param:ParamMap)=>{
      const id = param.get("id")
      this.servicePro.findByIdProduct(id).subscribe(data =>{
        this.productUp= data;
        this.servicePro.getAllCategory().subscribe(data =>{
          this.categoryUp= data;
          console.log(this.categoryUp)
        },()=>{},()=>{
          this.formUpdate= new FormGroup({
            name: new FormControl(this.productUp.name,),
            id: new FormControl(this.productUp.id),
            price: new FormControl(this.productUp.price),
            note: new FormControl(this.productUp.note),
            category: new FormControl(this.productUp.category.id)
          })
        })
      })
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.servicePro.updateProduct(this.formUpdate.value).subscribe(next=>{
      this.router.navigateByUrl('');
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}
