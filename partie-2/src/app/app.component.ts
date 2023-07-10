import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';

import { Album } from './album';
import { Image } from './image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  artists: Artist[] = [];
  albums: Album[] = [];
  images: Image[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    // this.getArtistsList();
    // this.getAlbumsList();
  }

  // getArtistsList() {
  //   return this.http.get<Artist[]>("http://localhost:4080/api/artists")
  //     .subscribe((artistsFromApi: Artist[]) => {
  //       console.log('liste artistes', artistsFromApi)
  //       this.artists=artistsFromApi;
  //     })
  // }
  // getAlbumsList() {
  //   return this.http.get<Album[]>("http://localhost:4080/api/albums")
  //     .subscribe((albumsFromApi: Album[]) => {
  //       console.log('liste albums', albumsFromApi)
  //       this.albums=albumsFromApi;
  //     })

  // }


}