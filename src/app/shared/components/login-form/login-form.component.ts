import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;
  loginButtonText = 'Login';
  //Use the names `email` and `password` for form controls.
  loginData = {
    email: '',
    password: '',
  };

  submitForm() {
    console.log(this.loginData);
  }
}
