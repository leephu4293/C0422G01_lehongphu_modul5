import { Component, OnInit } from '@angular/core';
import {DictonaryService} from "../service/dictonary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictonaryI} from "../interface/dictonary-i";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
   means : DictonaryI;
  constructor(private findWord: DictonaryService, private active:ActivatedRoute) {
    this.active.paramMap.subscribe((param : ParamMap)=>{
      const  id = param.get('id')
      console.log(id)
     this.means = this.findWord.translateWord(parseInt(id));
      console.log(this.means)
    })
  }

  ngOnInit(): void {
  }

}
