import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/commons/service/spotify/album.service';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(
    public album: AlbumService,
    public state: StateService
  ) { }

  ngOnInit() {
    const id = this.state.params.id;
    this.album.getAlbum(id);
  }

}
