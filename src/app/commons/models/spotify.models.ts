export class FeaturedPlaylist {
  message: string = null;
  playlists: Playlist = new Playlist();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Playlist {
  href: string = null;
  limit: number = null;
  next: string = null;
  previous: string = null;
  offset: number = null;
  total: number = null;
  items: PlaylistItem[] = Array<PlaylistItem>();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class PlaylistItem {
  collaborative: boolean = null;
  description: string = null;
  external_urls: ExternalUrl = new ExternalUrl();
  href: string = null;
  images: Images[] = Array<Images>();
  name: string = null;
  owner: Owner = new Owner();
  primary_color: string = null;
  public: string = null;
  snapshot_id: string = null;
  tracks: Tracks = new Tracks();
  type: string = null;
  uri: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }

}

export class ExternalUrl {
  spotify: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Owner {
  display_name: string = null;
  external_url: ExternalUrl = new ExternalUrl();
  href: string = null;
  type: string = null;
  uri: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Images {
  height: string = null;
  width: string = null;
  url: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Tracks {
  href: string = null;
  total: number = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
