import { ContentOnly, HeaderContent } from 'src/app/commons/utils/layouts.utils';

import { LoginRequired } from 'src/app/commons/utils/auth.utils';

import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent } from './album/album.component';

export const HOME_STATES: object[] = [
  {
    name: 'home',
    url: '/home',
    views: HeaderContent(HomeComponent),
    onEnter: LoginRequired
  },
  {
    name: 'playlist',
    url: '/playlist/:id',
    views: HeaderContent(PlaylistComponent),
    onEnter: LoginRequired
  },
  {
    name: 'album',
    url: '/album/:id',
    views: HeaderContent(AlbumComponent),
    onEnter: LoginRequired
  }
];

