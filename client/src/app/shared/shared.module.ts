import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [ButtonComponent, InputComponent, ContainerComponent],
  exports: [ButtonComponent, InputComponent, ContainerComponent],
})
export class SharedModule {}
