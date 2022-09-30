import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CreateFacilitiesComponent } from './create-facilities/create-facilities.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { ContractComponent } from './contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilitiesComponent,
    CreateFacilitiesComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    CustomerComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
