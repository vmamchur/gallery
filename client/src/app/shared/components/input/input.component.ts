import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() error: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  get hasError() {
    return this.control.errors && this.control.touched;
  }
}
