import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input() title!: string;
  @Input() group!: FormGroup;
  @Input() isSubmitDisabled!: boolean;

  @Output() onSubmit = new EventEmitter();

  handleSubmit() {
    if (this.group.valid) {
      this.onSubmit.emit();
    } else {
      this.group.markAllAsTouched();
    }
  }
}
