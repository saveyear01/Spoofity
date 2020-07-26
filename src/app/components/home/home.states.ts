import { ContentOnly } from 'src/app/commons/utils/layouts.utils';

import { HomeComponent } from './home/home.component';

export const HOME_STATES: object[] = [
  {
    name: 'home',
    url: '/home',
    views: ContentOnly(HomeComponent)
  }
]
