import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService extends BaseService {
  override baseUrl = environment.apiUri + '/artists';
}
