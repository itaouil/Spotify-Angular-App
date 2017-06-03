import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { NavbarTopComponent } from
'./components/navbar-top/navbar-top.component';
import { SearchComponent } from
'./components/search/search.component';
import { AboutComponent } from
'./components/about/about.component';

@NgModule({
  imports:      [
    BrowserModule,
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
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
