import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './album';
import { Artist } from './artist';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ArtistsListService {

artists: Artist[] = [];
albums: Album[] = [];
images: Image[] = [];
constructor(private http: HttpClient) { }


ngOnInit() {
  this.getArtistsList();
  this.getAlbumsList();
}

getArtistsList() {
  return this.http.get<Artist[]>("http://localhost:4080/api/artists")
    .subscribe((artistsFromApi: Artist[]) => {
      console.log('liste artistes', artistsFromApi)
      this.artists=artistsFromApi;
    })
}
getAlbumsList() {
  return this.http.get<Album[]>("http://localhost:4080/api/albums")
    .subscribe((albumsFromApi: Album[]) => {
      console.log('liste albums', albumsFromApi)
      this.albums=albumsFromApi;
    })

}
}