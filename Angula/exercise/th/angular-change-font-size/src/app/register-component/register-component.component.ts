import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {typeIsOrHasBaseType} from "tslint/lib/language/typeUtils";


class country {
  name?: string;
}

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  checkPass: any;
  country: country[] = [{name: 'VN'}, {name: 'EngLand'}, {name: 'China'}]

  createForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    checkPass: new FormGroup({
       password: new FormControl('', [Validators.required]),
       confirmPassword: new FormControl('', [Validators.required]),
    },[this.checkConfirm]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.pattern('^\\+84{1}[0-9]{9,10}$'), Validators.required]),
  });

  get emailValid() {
    return this.createForm.get('email');
  }

  checkConfirm(pass: AbstractControl) {
    let pass1 = pass.value.password;
    let pass2 = pass.value.confirmPassword;
     if (pass1 === pass2){
       return null;
     }else {
       return {"invalid": true}
     }

  }


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createForm.value)
  }


}
