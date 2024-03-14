import { Component, Input } from '@angular/core';

const BUTTON_VARIANT = {
  solid: 'border-black bg-black text-white',
  outline: 'border-black text-black',
  ghost: 'border-transparent text-black',
};

const BUTTON_SIZE = {
  s: 'px-3 py-1 rounded-md text-caption',
  m: 'px-4 py-2 rounded-md text-body',
  l: 'px-4 py-3 rounded-lg text-body-lg',
};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant!: keyof typeof BUTTON_VARIANT;
  @Input() size!: keyof typeof BUTTON_SIZE;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;

  getClasses(): string {
    return `${BUTTON_VARIANT[this.variant]} ${BUTTON_SIZE[this.size]}`;
  }
}
