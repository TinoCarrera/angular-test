import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  readonly baseUrl = environment.apiUri + '/songs';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<Song[]>(this.baseUrl);
  }

  get(id: string) {
    return this.http.get<Song>(this.baseUrl + '/' + id);
  }
}
