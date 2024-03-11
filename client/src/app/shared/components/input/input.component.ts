import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() hasError: boolean = false;
  @Input() hint: string = '';
  @Input() placeholder: string = '';
}
