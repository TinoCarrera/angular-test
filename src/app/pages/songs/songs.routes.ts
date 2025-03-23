import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { SongAddComponent } from './song-add/song-add.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: SongAddComponent
  },
  {
    path: 'edit/:id',
    component: SongAddComponent
  },
  {
    path: ':id',
    component: SongDetailsComponent
  },
];
