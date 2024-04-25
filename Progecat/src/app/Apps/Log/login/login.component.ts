import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';
import {json} from "node:stream/consumers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: ['',Validators.required],
      email: ['',Validators.required]
    });
  }

  onSubmit(value: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>) {
    if (this.myForm.valid) {
      // اعمال منطق مربوط به ثبت فرم اینجا
      console.log(this.myForm.value);
      alert("ok ")
    } else {
      // نمایش پیام خطاها یا اعمال دیگری
    }
  }

}
