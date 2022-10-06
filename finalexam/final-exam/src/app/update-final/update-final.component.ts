import { Component, OnInit } from '@angular/core';
import {FinalService} from "../service/final.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../model/category";
import Swal from "sweetalert2";
import {XmlTagDefinition} from "@angular/compiler/src/ml_parser/xml_tags";
import {Car} from "../model/car";
import {LocationCar} from "../model/location-car";

@Component({
  selector: 'app-update-final',
  templateUrl: './update-final.component.html',
  styleUrls: ['./update-final.component.css']
})
export class UpdateFinalComponent implements OnInit {
  carInfoUp : Car;
  formUpdate: FormGroup;
  locationCar: LocationCar[];
  constructor(private serviceFinal: FinalService,private paramUp: ActivatedRoute, private router:Router) {
    this.paramUp.paramMap.subscribe((param:ParamMap) =>{
      const id = param.get("id");
      this.serviceFinal.findByIdFinal(id).subscribe(data =>{
        this.carInfoUp = data
         this.serviceFinal.getLocationList().subscribe(next=>{
             this.locationCar= next;
        },()=>{},()=>{
           this.formUpdate= new FormGroup({
             id: new FormControl(this.carInfoUp.id,
               [Validators.required]),
             carNumber: new FormControl(this.carInfoUp.carNumber,
               [Validators.required]),
             typeCar: new FormControl(this.carInfoUp.typeCar,
               [Validators.required]),
             nameCar: new FormControl(this.carInfoUp.nameCar,
               [Validators.required]),
             phone: new FormControl(this.carInfoUp.phone,
               [Validators.required,Validators.pattern('^(090)|(093)|(097)[0-9]{7}$')]),
             email: new FormControl(this.carInfoUp.email,
               [Validators.required, Validators.email]),
             timeGoOut: new FormControl(this.carInfoUp.timeGoOut,
               [Validators.required,Validators.pattern('^([0-9]{2}:[0-9]{2})$')]),
             timeGoCome: new FormControl(this.carInfoUp.timeGoCome,
               [Validators.required,Validators.pattern('^[0-9]{2}:[0-9]{2}$')]),
             starGo: new FormControl(this.carInfoUp.starGo,
               [Validators.required]),
             endCome: new FormControl(this.carInfoUp.endCome,
               [Validators.required])
           })
         })
        })
      })
  }

  ngOnInit(): void {
  }

  onSubmitUpdate() {
    console.log(this.formUpdate.value)
    this.serviceFinal.updateFinal(this.formUpdate.value).subscribe(next=>{
      this.router.navigateByUrl('')
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Update has been saved',
        showConfirmButton: false,
        timer: 1500
      })

    })
  }
}
