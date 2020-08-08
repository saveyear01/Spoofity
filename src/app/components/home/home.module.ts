import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PartialsModule } from '../partials/partials.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PartialsModule
  ]
})
export class HomeModule { }
