import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import validateAreEqual from '../../validators/are-equal.validator';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, AuthFormComponent],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  signUpForm = new FormGroup(
    {
      username: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    },
    validateAreEqual,
  );

  handleSubmit() {
    console.log('Form submitted: ', this.signUpForm.value);
  }
}
