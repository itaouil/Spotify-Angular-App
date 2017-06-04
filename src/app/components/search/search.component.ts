import { Component } from '@angular/core';

//Service
import { SpotifyService } from "../../services/spotify.service";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})

export class SearchComponent  {

  public searchStr: string = null;

  constructor(private _spotifyService:SpotifyService) {}

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res);
      })
  }

}
