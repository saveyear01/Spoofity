import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PartialsModule } from '../partials/partials.module';
import { PlaylistComponent } from './playlist/playlist.component';



@NgModule({
  declarations: [HomeComponent, PlaylistComponent],
  imports: [
    CommonModule,
    PartialsModule
  ]
})
export class HomeModule { }
