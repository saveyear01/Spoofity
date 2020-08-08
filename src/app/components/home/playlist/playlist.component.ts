import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { PlaylistService } from 'src/app/commons/service/spotify/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor(
    private state: StateService,
    public Playlist: PlaylistService
  ) { }

  async ngOnInit() {
    const id = this.state.params.id;
    await this.Playlist.getPlaylistData(id);
    console.log(this.Playlist.instance);
  }



}
