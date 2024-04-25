// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {AuthenticateService} from "../../Authenticict/authenticate.service";
// import {HttpClient} from "@angular/common/http";
//
// @Component({
//   selector: 'app-login-one',
//   templateUrl: './login-one.component.html',
//   styleUrls: ['./login-one.component.css'] // Changed styleUrl to styleUrls
// })
// export class LoginOneComponent implements OnInit {
//   loginForme!: FormGroup;
//   public isSubmittedEmile = false;
//   public isSubmittedPassword = false;
//   Submitsed: boolean=true;
//   // formGroupp!:FormGroup;
//
//   constructor(private formBuilder:FormBuilder,) {
//   }
//   ngOnInit() {
//     this.isSubmittedEmile = !true;
//     this.isSubmittedPassword = !true;
//     this.loginForme = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/)]),
//       remember_me: new FormControl(false) // Added default value and validators
//     });
//     // this.formGroupp=this.formBuilder.group({
//     //   'email':[null,Validators.required],
//     //   'password':[null,Validators.required],
//     // })
//   }
//
//   loginFun() {
//     if (this.loginForme.valid) {
//       alert('شما با موفقیت این مرحله را پشت سر گذاشتید');
//       console.log("ok man you can do it");
//       console.log(this.loginForme);
//      // this.Authenticate.login(email,password)
//
//       const email = this.loginForme.value.email;
//       const password = this.loginForme.value.password;
//       this.Submitsed=false;
//
//     } else {
//       // Handle invalid form
//       this.isSubmittedEmile = true;
//       this.isSubmittedPassword = true;
//       alert('Please fill in the required fields correctly.');
//
//     }
//   }
// }
import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticateService} from "../../../Authenticict/authenticate.service";
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrls: ['./login-one.component.css']
})
export class LoginOneComponent implements OnInit {





  loginForme!: FormGroup;
  public isSubmittedEmile = false;
  public isSubmittedPassword = false;
  Submitsed: boolean=false;

  constructor(private formBuilder:FormBuilder,private authenticateService:AuthenticateService,private translateService: TranslateService)
  {
    translateService.setDefaultLang('fa')
  }
  ngOnInit() {
    this.loginForme=this.formBuilder.group({
      'username':[null,Validators.required],
      'password':[null,Validators.required],
    })
    this.isSubmittedEmile = !true;
    this.isSubmittedPassword = !true;
  }

  loginFun() {
    const loginForme=this.loginForme.value;
    const username=loginForme.username;
    const password=loginForme.password;

    this.authenticateService.login({username, password}).subscribe(
      (response)=>{
        alert('شما با موفقیت این مرحله را پشت سر گذاشتید');
        console.log("Login successful:", response);
        this.Submitsed=false

      },
      (error) => {
        alert('لطفا دوباره تلاش کنید')
        console.error("Login error:", error);
        this.Submitsed=true
      }
    );
    this.isSubmittedEmile = true;

    this.isSubmittedPassword = true;
  }


}
