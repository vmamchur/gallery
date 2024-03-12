import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {}
