import { Component } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
