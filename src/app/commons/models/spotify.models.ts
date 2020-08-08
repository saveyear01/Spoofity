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
export class Albums {
  albums: Playlist = new Playlist();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Album {
  id: string = null;
  album_type: string = null;
  artists: Owner[] = Array<Owner>();
  external_urls: ExternalUrl = new ExternalUrl();
  href: string = null;
  images: Images[] = Array<Images>();
  name: string = null;
  release_date: string = null;
  release_date_precision: string = null;
  total_tracks: number = null;
  type: string = null;
  uri: string = null;

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
  name: string = null;
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
  limit: number = null;
  next: string = null;
  previous: string = null;
  offset: number = null;
  total: number = null;
  items: TracksItem[] = Array<TracksItem>();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Track {
  id: string = null;
  album: Album = new Album();
  artists: Owner[] = Array<Owner>();
  disc_number: number = null;
  duration_ms: number = null;
  episode: boolean = null;
  explicit: boolean = null;
  external_url: ExternalUrl = new ExternalUrl();
  href: string = null;
  is_local: boolean = null;
  name: string = null;
  popularity: number = null;
  preview: string = null;
  track: boolean = null;
  track_number: number = null;
  type: string = null;
  uri: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
export class TracksItem {
  added_at: string = null;
  added_by: Owner = new Owner();
  is_local: string = null;
  primary_color: string = null;
  track: Track = new Track();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class RecommendedSeed {
  limit = 10;
  market: string = null;
  seed_genres: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
