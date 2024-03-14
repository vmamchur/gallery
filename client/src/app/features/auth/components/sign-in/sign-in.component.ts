import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, AuthFormComponent],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  signInForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  handleSubmit() {
    console.log('Form submitted: ', this.signInForm.value);
  }
}
