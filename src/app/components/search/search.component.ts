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
  public searchRes: Result[] = null;

  constructor(private _spotifyService:SpotifyService) {}

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.items;
      })
  }

}

// Result class
class Result {
  private id: number;
  private name: string;
  private genre: any;
}
