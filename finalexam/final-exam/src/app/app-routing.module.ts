import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFinalComponent} from "./list-final/list-final.component";
import {CreateFinalComponent} from "./create-final/create-final.component";
import {UpdateFinalComponent} from "./update-final/update-final.component";



const routes: Routes = [{path:'',component: ListFinalComponent},
  {path:'create',component: CreateFinalComponent},
  {path:'update/:id', component: UpdateFinalComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
