import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  fontSize = 14;
  color ;

  constructor() { }

  ngOnInit(): void {
  }

  changeFontSizeValue(value: any, color: any) {
    this.fontSize= value;
    this.color=color;
  }
}
