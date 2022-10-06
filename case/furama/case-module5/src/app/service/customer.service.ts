import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../interface/customer';
import {TypeCustomer} from '../interface/type-customer';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer() {
    return this.httpClient.get<any>('http://localhost:3000/customer');
  }

  saveCustomer(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customer', customer);
  }

  getAllTypeCustomer() {
    return this.httpClient.get<any>('http://localhost:3000/typeCustomer');
  }

  findById(id: string) {
    return this.httpClient.get<Customer>('http://localhost:3000/customer/' + id);
  }

  updateCustomer(customerUp: Customer) {
    console.log(customerUp);
    return this.httpClient.patch('http://localhost:3000/customer/' + customerUp.id, customerUp);
  }

  findTypeById(id: string): Observable<TypeCustomer> {
    console.log(id);
    return this.httpClient.get<TypeCustomer>('http://localhost:3000/typeCustomer/' + id);
  }
  deleteModal(id: string) {
    console.log(id);
    return this.httpClient.delete('http://localhost:3000/customer/' + id);
  }


  searchCustomer(name: string, type: string): Observable<Customer[]> {
    console.log(name);
    console.log(type)
    if (type == '0'){
      return this.httpClient.get<Customer[]>('http://localhost:3000/customer?name_like=' + name);
    }else{
      return this.httpClient.get<Customer[]>(
        'http://localhost:3000/customer?name_like=' + name+'&'+'typeCustomer.id='+ type);
    }
  }
}

