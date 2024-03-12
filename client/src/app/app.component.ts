import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgIconComponent, CoreModule, SharedModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
