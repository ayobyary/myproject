import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 's';
  bg:boolean=false;
}




































// loginForme!: FormGroup;
// public isSubmittedEmile = false;
// public isSubmittedPassword = false;
//
// ngOnInit() {
//   this.loginForme = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/)]),
//     remember_me: new FormControl(false) // Added default value and validators
//   });
// }
//
// loginFun() {
//
//   if (this.loginForme.valid) {
//     this.isSubmittedEmile = !true;
//     this.isSubmittedPassword = !true;
//     alert('شما با موفقیت این مرحله را پشت سر گذاشتید');
//     console.log("ok man you can do it");
//     console.log(this.loginForme);
//     // Proceed with login functionality
//   } else {
//     // Handle invalid form
//     this.isSubmittedEmile = true;
//     this.isSubmittedPassword = true;
//     alert('Please fill in the required fields correctly.');
//   }
// }
