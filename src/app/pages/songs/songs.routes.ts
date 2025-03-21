import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongDetailsComponent } from './song-details/song-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: SongDetailsComponent
  },
];
