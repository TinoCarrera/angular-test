import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'songs',
    loadChildren: () => import('./pages/songs/songs.routes').then((m) => m.routes)
  },
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
  },
];
