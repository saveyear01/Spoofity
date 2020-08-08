import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { UIRouterModule } from '@uirouter/angular';

import { APP_STATES } from './commons/utils/states.utils';
import { AuthInterceptor } from './commons/service/interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeModule } from './components/home/home.module';
import { PartialsModule } from './components/partials/partials.module';
import { AuthModule } from './components/auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(APP_STATES),
    HttpClientModule,
    HomeModule,
    AuthModule,
    PartialsModule,
    NgbModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
