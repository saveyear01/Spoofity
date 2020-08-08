import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PLAYLIST_API } from '../../constants/api.const';
import { urlFormat } from '../../utils/http.utils';
import { PlaylistItem, Tracks } from '../../models/spotify.models';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  public instance: PlaylistItem = new PlaylistItem();

  constructor(
    private http: HttpClient,
  ) { }

  getPlaylistData(id: string) {
    const response = this.http.get(urlFormat(PLAYLIST_API, id))
    .toPromise()
    .then((resp: PlaylistItem) => {
      this.instance = new PlaylistItem(resp);
    });
    return response;
  }

}
