import { ContentOnly, HeaderContent } from 'src/app/commons/utils/layouts.utils';

import { HomeComponent } from './home/home.component';
import { LoginRequired } from 'src/app/commons/utils/auth.utils';

export const HOME_STATES: object[] = [
  {
    name: 'home',
    url: '/home',
    views: HeaderContent(HomeComponent),
    onEnter: LoginRequired
  }
];

