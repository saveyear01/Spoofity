export class ExternalUrl {
  spotify: string = null;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

export class Follower {
  href: string = null;
  total: number = null;

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

export class User {
  display_name: string = null;
  email: string = null;
  href: string = null;
  id: string = null;
  type: string = null;
  uri: string = null;
  external_urls : ExternalUrl = new ExternalUrl();
  images: Images[] = Array<Images>();
  followers: Follower = new Follower();

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
