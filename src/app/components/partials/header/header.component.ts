import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/commons/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isTrue = true;
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.auth.user);

    setTimeout(() => {
    console.log(this.auth.user.images[0].url);
    }, 5000);
  }

}
