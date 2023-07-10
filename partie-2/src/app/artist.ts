import { Image } from "./image";


export interface Artist {
     followers:{total:number};
     id:string;
     images:Image[];
     name:string;
}