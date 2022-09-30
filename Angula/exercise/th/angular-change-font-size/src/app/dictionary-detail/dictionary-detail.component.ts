import { Component, OnInit } from '@angular/core';
import {DictonaryService} from "../service/dictonary.service";
import {DictonaryI} from "../interface/dictonary-i";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
   words : DictonaryI[] ;
  constructor(private takeWord: DictonaryService ) { }

  ngOnInit(): void {
    this.words = this.takeWord.getAll();
  }

}
