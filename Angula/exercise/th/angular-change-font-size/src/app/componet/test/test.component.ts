import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
      fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }

  changeFontSizeValue(value: any) {
    this.fontSize= value;
  }
}
