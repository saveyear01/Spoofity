import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FEATURED_API, RECOMMENDED_API, GENRE_API, NEW_RELEASE_API } from '../../constants/api.const';
import { FeaturedPlaylist, RecommendedSeed, Playlist, Albums } from '../../models/spotify.models';
import { queryparams } from '../../utils/http.utils';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {
  public featured: FeaturedPlaylist = new FeaturedPlaylist();
  public newReleases: Albums = new Albums();
  public genres: any;
  constructor(
    private http: HttpClient,
  ) { }

  async getFeaturedPlaylist() {
    const response = await this.http.get(FEATURED_API)
    .toPromise()
    .then((resp: FeaturedPlaylist) => {
      this.featured = new FeaturedPlaylist(resp);
    });

    return response;
  }
  getRecommendedPlaylist(data: RecommendedSeed) {
    const response = this.http.get(RECOMMENDED_API + queryparams(data))
    .toPromise();
    return response;
  }
  getNewReleases(data: any) {
    const response = this.http.get(NEW_RELEASE_API + queryparams(data))
    .toPromise()
    .then((resp: Albums) => {
      this.newReleases = new Albums(resp);
    });
    return response;
  }
  getGenres() {
    const response = this.http.get(GENRE_API)
    .subscribe((resp: any) => {
      this.genres = [...resp.genres];
    });
  }
}
