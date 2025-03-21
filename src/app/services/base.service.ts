import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl!: string;
  http = inject(HttpClient);

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  get(id: string | number) {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
}
