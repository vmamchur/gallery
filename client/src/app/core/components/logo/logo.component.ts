import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
