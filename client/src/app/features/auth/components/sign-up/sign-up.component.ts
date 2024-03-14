import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, AuthFormComponent],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {}
