import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl!: string;
  http = inject(HttpClient);

  getAll() {
    return this.http.get<any[]>(this.baseUrl).pipe(delay(400));
  }

  get(id: string | number) {
    return this.http.get<any>(this.baseUrl + '/' + id).pipe(delay(400));
  }
}
