import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";


const routes : Routes = [
  {path:'', component:DictionaryDetailComponent},
  {path:'details/:id',component:DictionaryPageComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
