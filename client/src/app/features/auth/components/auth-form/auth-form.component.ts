import { Component, Input } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input() title!: string;
}
