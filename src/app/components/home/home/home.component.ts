import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/commons/service/auth/auth.service';
import { BrowseService } from 'src/app/commons/service/spotify/browse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public Auth: AuthService,
    public Spotify: BrowseService
  ) { }

  async ngOnInit() {
    await this.Auth.getUserData();
    this.Spotify.getFeaturedPlaylist();
  }

}
