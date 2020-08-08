import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';

import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    UIRouterModule
  ],
  exports: [
    SliderComponent
  ]
})
export class PartialsModule { }
