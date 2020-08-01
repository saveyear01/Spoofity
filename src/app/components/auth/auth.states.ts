import { LoginComponent } from './login/login.component';
import { ContentOnly, HeaderContent } from 'src/app/commons/utils/layouts.utils';
import { Disconnect } from 'src/app/commons/utils/auth.utils';

export const AUTH_STATE: object[] = [
  {
    name: 'login',
    url: '/login',
    views: HeaderContent(LoginComponent)
  },
  {
    name: 'logout',
    url: '/logout',
    onEnter: Disconnect
  }
];
