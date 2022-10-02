import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {DetailsProductComponent} from "./details-product/details-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  {path:'',component:ListProductComponent},
  {path:'add',component:CreateProductComponent},
  {path:'details/:id',component:DetailsProductComponent},
  {path:'deleteProduct/:id',component:DeleteProductComponent},
  {path:'UpdateProduct/:id',component:UpdateProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
