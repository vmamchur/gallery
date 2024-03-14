import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, LogoComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  getAuthButtonVariant(route: '/sign-in' | '/sign-up') {
    return this.router.url === route ? 'solid' : 'outline';
  }
}
