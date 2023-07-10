import { Artist } from "./artist";
import { Image } from "./image";
export interface Album {
 artists:Artist[];
 id:string;
 name:string;
 release_date:string;
 total_tracks:number;
 images: Image[];
}