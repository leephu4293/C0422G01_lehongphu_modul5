import { Component, OnInit } from '@angular/core';
import {FinalService} from "../service/final.service";
import {LocationCar} from "../model/location-car";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-final',
  templateUrl: './create-final.component.html',
  styleUrls: ['./create-final.component.css']
})
export class CreateFinalComponent implements OnInit {
  listLoca: LocationCar[]
  formCreate: FormGroup

  constructor(private serviceCre : FinalService) {
    this.serviceCre.getLocationList().subscribe(data=>{
      this.listLoca = data
      this.formCreate = new FormGroup({
        carNumber: new FormControl('',[Validators.required]),
        typeCar: new FormControl('',
          [Validators.required]),
        nameCar: new FormControl('',
          [Validators.required]),
        phone: new FormControl('',
          [Validators.required,Validators.pattern('^(090)|(093)|(097)[0-9]{7}$')]),
        email: new FormControl('',
          [Validators.required, Validators.email]),
        timeGoOut: new FormControl('',
          [Validators.required,Validators.pattern('^([0-9]{2}:[0-9]{2})$')]),
        timeGoCome: new FormControl('',
          [Validators.required,Validators.pattern('^[0-9]{2}:[0-9]{2}$')]),
        starGo: new FormControl('',
          [Validators.required]),
        endCome: new FormControl('',
          [Validators.required])
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formCreate.value)
    this.serviceCre.createdCar(this.formCreate.value).subscribe(next=>{

    })
  }
}
