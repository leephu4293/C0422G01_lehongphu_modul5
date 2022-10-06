import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../interface/customer';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TypeCustomer} from '../interface/type-customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateFrom: FormGroup;
  FindCustomer: Customer;
  typeCus: TypeCustomer[];

  constructor(private updateCustomer: CustomerService, private takeId: ActivatedRoute, private router: Router) {
    this.takeId.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.updateCustomer.findById(id).subscribe(data => {
        this.FindCustomer = data;
      }, () => {
      }, () => {
        this.updateCustomer.getAllTypeCustomer().subscribe(next => {
          this.typeCus = next;
          this.getForm();
        });
      });
    });
  }

  ngOnInit(): void {
  }

  getForm() {
    this.updateFrom = new FormGroup({
      id: new FormControl(this.FindCustomer.id),
      name: new FormControl(this.FindCustomer.name),
      dayOfBirth: new FormControl(this.FindCustomer.dayOfBirth),
      gender: new FormControl(this.FindCustomer.gender),
      idCard: new FormControl(this.FindCustomer.idCard),
      phone: new FormControl(this.FindCustomer.phone),
      email: new FormControl(this.FindCustomer.email),
      address: new FormControl(this.FindCustomer.address),
      typeCustomer: new FormControl(this.FindCustomer.typeCustomer.id)
    });
  }

  onUpdate() {
    this.updateCustomer.findTypeById(this.updateFrom.value.typeCustomer).subscribe(next => {
      this.updateFrom.value.typeCustomer = next;
      this.updateCustomer.updateCustomer(this.updateFrom.value).subscribe(() => {
        this.router.navigateByUrl('/customer-list');
      });
    });
    }
}
