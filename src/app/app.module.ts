import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UIRouterModule } from "@uirouter/angular";

import { AppComponent } from './app.component';

import { APP_STATES } from './commons/utils/states.utils';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(APP_STATES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
