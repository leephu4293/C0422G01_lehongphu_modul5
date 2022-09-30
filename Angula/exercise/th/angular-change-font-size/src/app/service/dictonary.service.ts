import { Injectable } from '@angular/core';
import {DictonaryI} from "../interface/dictonary-i";

@Injectable({
  providedIn: 'root'
})
export class DictonaryService {
    words : DictonaryI[]=[{word:'hello',mean:'xin chao'},
      {word:'good bye',mean:'tam biet'},{word:'nice',mean:'tot'}]

  translateWord(check: number): DictonaryI{
      return this.words[check];
  }

  getAll(){
       return this.words;
  }
  constructor() { }
}
