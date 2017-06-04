import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { NavbarTopComponent } from
'./components/navbar-top/navbar-top.component';
import { SearchComponent } from
'./components/search/search.component';
import { AboutComponent } from
'./components/about/about.component';

import { SpotifyService } from
'./services/spotify.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  declarations: [
    AppComponent, NavbarTopComponent,
    SearchComponent,
    AboutComponent],
  bootstrap:    [ AppComponent ],
  providers:    [SpotifyService]
})

export class AppModule { }
