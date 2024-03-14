import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [SharedModule, AuthFormComponent],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {}
