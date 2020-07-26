import { LoginComponent } from './login/login.component';
import { ContentOnly, HeaderContent } from 'src/app/commons/utils/layouts.utils';

export const AUTH_STATE: object[] = [
  {
    name: 'login',
    url: '/login',
    views: ContentOnly(LoginComponent)
  }
]