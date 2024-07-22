import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../directives/email.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, emailValidator()]),
    password: new FormControl('', Validators.required)
  });
  // Use the names `name`, `email`, `password` for the form controls.
  registrationButtonText = 'login';
  isSubmitted = false;

  onSubmit() {     
    if (this.registrationForm.valid) {
      this.isSubmitted = true;
      console.log(this.registrationForm.value);
    } 
  }
}
