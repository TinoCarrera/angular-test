import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SongsService extends BaseService {
  override baseUrl = environment.apiUri + '/songs';
}
