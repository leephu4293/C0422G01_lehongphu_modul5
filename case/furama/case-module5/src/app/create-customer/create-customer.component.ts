import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {TypeCustomer} from '../interface/type-customer';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
   createForm: FormGroup;
   list: TypeCustomer[];
  constructor( private saveService: CustomerService, private router: Router) {
    this.saveService.getAllTypeCustomer().subscribe(data => {
      console.log(data);
      this.list = data;
    });
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl(),
      dayOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      typeCustomer: new FormControl()
    });
  }
  onsubmit() {
    this.saveService.saveCustomer(this.createForm.value).subscribe(next => {
      this.router.navigateByUrl('/customer-list');
    });
  }
}
