import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/commons/service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public Auth: AuthService
  ) { }

  ngOnInit(): void {
    this.Auth.getUserData();
  }

}
