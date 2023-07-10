import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { Artist } from '../artist';
import {Image} from '../image';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  id!:string |null;
  artists: Artist[] = [];
  albums: Album[] = [];
  images: Image[]=[];
  constructor(private http: HttpClient, private route : ActivatedRoute ) { }


  ngOnInit() {
    this.getAlbumsList();
     this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  
  getAlbumsList() {
    return this.http.get<Album[]>("http://localhost:4080/api/albums")
      .subscribe((albumsFromApi: Album[]) => {
        console.log('liste albums', albumsFromApi)
        this.albums=albumsFromApi;
        const albumId =this.albums.filter((item)=>item.artists[0].id==this.id);

        this.albums= albumId;
        console.log('albumId',albumId)
        const albumRatatat =this.albums.filter((item)=>item.artists[0].name=="Ratatat");
        console.log('Ratatat',albumRatatat)
        const albumAvicii =this.albums.filter((item)=>item.artists[0].name=="Avicii");
        console.log('Avicii',albumAvicii)
      })
      
}

}