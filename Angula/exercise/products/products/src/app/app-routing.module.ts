import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";


const routes: Routes = [
  {path:'details/:id', component: DetailsComponent},
  {path:'update/:id', component: UpdateComponent},
  {path:'',component: ListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
