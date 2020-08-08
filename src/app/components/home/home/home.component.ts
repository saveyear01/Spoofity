import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/commons/service/auth/auth.service';
import { BrowseService } from 'src/app/commons/service/spotify/browse.service';
import { RecommendedSeed } from 'src/app/commons/models/spotify.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectedGenres = ['pop', 'country', 'study'];
  public genresData = [];
  constructor(
    public Auth: AuthService,
    public Spotify: BrowseService
  ) { }

  async ngOnInit() {
    this.Spotify.getFeaturedPlaylist();
    await this.Auth.getUserData();
    await this.Spotify.getNewReleases({country: this.Auth.getCountry(), limit: 3});
    this.getGenre();
  }

  getGenre() {
    this.selectedGenres.forEach(item => {
      const data = new RecommendedSeed({market: this.Auth.getCountry(), seed_genres: item});
      this.Spotify.getRecommendedPlaylist(data)
      .then(resp => {
        this.genresData.push({name: item, ...resp});
      });
    });
  }

}
