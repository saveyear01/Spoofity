import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ALBUM_API } from '../../constants/api.const';
import { queryparams, urlFormat } from '../../utils/http.utils';
import { Album } from '../../models/spotify.models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public instance: Album = new Album();
  constructor(
    private http: HttpClient
  ) { }

  getAlbum(id) {
    const response = this.http.get(urlFormat(ALBUM_API, id))
    .toPromise()
    .then((resp: Album) => {
      this.instance = new Album(resp);
    });

    return response;
  }
}
