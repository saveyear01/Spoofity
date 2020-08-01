import { Component, OnInit } from '@angular/core';

import { StateService } from '@uirouter/core';

import { AuthService } from 'src/app/commons/service/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private SpotifyAuth: AuthService,
    private state: StateService

  ) { }

  ngOnInit(): void {
    // console.log(this.getAccessTokenParam("access_token"))
    console.log(this.SpotifyAuth.isAuthenticated());
    if (this.getAccessTokenParam("access_token")) {
      this.SpotifyAuth.setToken(this.getAccessTokenParam("access_token"));
    }
    if (this.SpotifyAuth.isAuthenticated()) {
      // this.state.go('home');
    }
  }

  getAccessTokenParam(key) {
    const urlHash = window.location.hash.split('&').reduce((acc, val) => {
      const keyVal = val.replace('#', '').split('=');
      acc[keyVal[0]] = keyVal[1];
      return acc;
    }, {});

    return urlHash[key];
  }

  login() {
    this.SpotifyAuth.Authorize();
  }
}
