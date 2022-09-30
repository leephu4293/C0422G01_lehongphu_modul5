import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './componet/test/test.component';
import { PetComponent } from './componet/pet/pet.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { ColorComponent } from './color/color.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {DictonaryService} from "./service/dictonary.service";
import {RouterModule} from "@angular/router";
import {RoutingModule} from "./routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PetComponent,
    ProductComponent,
    CaculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingModule

  ],
  providers: [DictonaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
