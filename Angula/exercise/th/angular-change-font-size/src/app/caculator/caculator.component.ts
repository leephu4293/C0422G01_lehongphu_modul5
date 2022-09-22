import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
   message : any;

  calculatorCount(num1: string, num2: string, count: string) {

    switch (count) {
      case "+":
        this.message = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        this.message = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        this.message = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        if (parseInt(num2) == 0) {
          this.message = "error";
        } else {
          this.message = parseInt(num1) / parseInt(num2);
        }
        break;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
