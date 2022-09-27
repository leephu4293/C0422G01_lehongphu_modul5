import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-facilities',
  templateUrl: './create-facilities.component.html',
  styleUrls: ['./create-facilities.component.css']
})
export class CreateFacilitiesComponent implements OnInit {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  inputs5: string;
  constructor() { }
  ngOnInit(): void {
  }

  getService(value: string) {
     switch (value) {
       case '1':
         this.input1 = 'block';
         this.input2 = 'block';
         this.input3 = 'block';
         this.input4 = 'block';
         this.input5 = 'none';
         this.inputs5 = '';
         break;
       case '2':
         this.input1 = 'block';
         this.input2 = 'block';
         this.input3 = 'none';
         this.input4 = 'block';
         this.input5 = 'none';
         this.inputs5 = '';
         break;
       case '3':
         this.input1 = 'none';
         this.input2 = 'none';
         this.input3 = 'none';
         this.input4 = 'none';
         this.input5 = 'block';
         break;

     }
  }
}
