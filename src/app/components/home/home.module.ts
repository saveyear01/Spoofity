import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PartialsModule } from '../partials/partials.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent } from './album/album.component';



@NgModule({
  declarations: [
    HomeComponent,
    PlaylistComponent,
    AlbumComponent],
  imports: [
    CommonModule,
    PartialsModule
  ]
})
export class HomeModule { }
