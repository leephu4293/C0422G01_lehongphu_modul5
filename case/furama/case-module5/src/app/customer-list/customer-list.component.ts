import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../interface/customer';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeCustomer} from "../interface/type-customer";
import Swalt from 'sweetalert2'
import Swal from "sweetalert2";
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
   display: Customer[];
   infoModal: Customer = {};
   listType: TypeCustomer[];
  p:number =1
   searchForm: FormGroup;
  constructor(private customerService: CustomerService, private router: Router) {
    this.customerService.getAllTypeCustomer().subscribe(data =>{
      console.log(data);
      this.listType= data;
    })
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data => {
      this.display = data;

    });

    this.searchForm = new FormGroup({
      name: new FormControl(''),
      customerType: new FormControl(0)
    });
  }
  deleteModal(id: any) {
    this.customerService.deleteModal(id).subscribe(next => {
         this.ngOnInit();
      this.p= 1;

      }, () => {}, () => {
        this.router.navigateByUrl('/customer-list');
      });
  }

  modalInfo(customer: Customer) {
    this.infoModal = customer;
  }

  searchCustomer() {
    let a = this.searchForm.value.name
    let b = this.searchForm.value.customerType
    console.log(a)
    this.customerService.searchCustomer(a,b)
      .subscribe(date => {
       this.display = date;
    });
  }
}
