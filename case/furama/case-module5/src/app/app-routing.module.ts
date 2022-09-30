import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {FacilitiesComponent} from './facilities/facilities.component';
import {CreateFacilitiesComponent} from './create-facilities/create-facilities.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'facilites-list', component: FacilitiesComponent},
  {path: 'facilites-add', component: CreateFacilitiesComponent},
  {path: 'customer-add', component: CreateCustomerComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
