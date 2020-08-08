import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StateService } from '@uirouter/core';

import { queryparams } from '../../utils/http.utils';

import { TOKEN_KEY } from '../../constants/config.const';
import { REQUEST_AUTH_URL, AUTH_CONFIG } from '../../constants/spotify.const';
import { USER_API } from '../../constants/api.const';

import { User } from '../../models/auth.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User = new User();

  constructor(
    private state: StateService,
    private http: HttpClient
  ) { }

  Authorize() {
    window.open(`${REQUEST_AUTH_URL}${queryparams(AUTH_CONFIG)}`);
  }

  async getUserData() {
    const response = this.http.get(USER_API)
    .subscribe(
      (resp: any) => {
        this.user = new User(resp);
      },
      error => {
        this.removeToken();
        this.state.go('login');
      }
    );
    return response;
  }


  setToken(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
    this.state.go('home');
  }

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  }

  resetUser() {
    this.user = new User();
  }

  isAuthenticated() {
    return (!!this.getToken());
  }

}
