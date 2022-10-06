import { Component, OnInit } from '@angular/core';
import {FinalService} from "../service/final.service";
import {Car} from "../model/car";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-final',
  templateUrl: './list-final.component.html',
  styleUrls: ['./list-final.component.css']
})
export class ListFinalComponent implements OnInit {
 listFinal: Car[];
 modalInfo: Car = {endCome: {id: "", name: ""}, starGo: {id: "", name: ""}};
  constructor(private serviceFinal: FinalService, private router: Router) {
  }

  ngOnInit(): void {
    this.serviceFinal.getAllCrud().subscribe(data =>{
      this.listFinal = data;
    })
  }

  modalTakeInfo(list: Car) {
    this.modalInfo = list
  }

  deleteModal(id: string) {
    this.serviceFinal.deleteFinal(id).subscribe(next =>{
      this.ngOnInit()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Delete has been Done',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('')
    })
  }
}
