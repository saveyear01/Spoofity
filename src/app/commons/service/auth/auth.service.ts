import { Injectable } from '@angular/core';

import { StateService } from '@uirouter/core';

import { queryparams } from '../../utils/http.utils';
import { REQUEST_AUTH_URL, AUTH_CONFIG } from '../../constants/spotify.const';
import { TOKEN_KEY } from '../../constants/config.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private state: StateService
  ) { }

  Authorize() {
    var w = window.open(`${REQUEST_AUTH_URL}${queryparams(AUTH_CONFIG)}`);
  }

  setToken(token: string) {
    <any>window.localStorage.setItem(TOKEN_KEY, token);
    this.state.go('home');
  }

  getToken() {
    return <any>window.localStorage.getItem(TOKEN_KEY);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

}
