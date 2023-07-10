import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';


const routes: Routes = [
  {path: 'artists',component:ArtistsComponent},
  {path: 'artist/:id/albums',component:AlbumsComponent},
  {path: '',component:ArtistsComponent},
  {path: '**', component:ArtistsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [	
   ]
})
export class AppRoutingModule { }