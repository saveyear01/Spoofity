import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FEATURED_API } from '../../constants/api.const';
import { FeaturedPlaylist } from '../../models/spotify.models';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {
  public featured: FeaturedPlaylist = new FeaturedPlaylist();
  constructor(
    private http: HttpClient,
  ) { }

  getFeaturedPlaylist() {
    const response = this.http.get(FEATURED_API)
    .subscribe(resp => {
      this.featured = new FeaturedPlaylist(resp);
      console.log(this.featured);
    });
  }
}
