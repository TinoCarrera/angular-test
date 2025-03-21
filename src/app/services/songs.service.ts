import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  readonly baseUrl = environment.apiUri + '/songs';
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<any>(this.baseUrl);
  }
}
