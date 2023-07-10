import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import {Image} from '../image';
@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];
  images: Image[]=[];
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getArtistsList();
  }

  getArtistsList() {
    return this.http.get<Artist[]>("http://localhost:4080/api/artists")
      .subscribe((artistsFromApi: Artist[]) => {
        console.log('liste artistes', artistsFromApi)
        this.artists=artistsFromApi
        console.log(artistsFromApi)
      })
    }
  }