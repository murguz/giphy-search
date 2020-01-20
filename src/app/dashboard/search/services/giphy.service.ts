import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ConfigService } from './../../../config/config.service';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { GiphyPageRequest } from '../models/giphy-page-request.model';
import { GiphyPageResponse } from '../models/giphy-page-response.model';
import { GiphyItem } from '../models/giphy-item.model';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  search(gpr: GiphyPageRequest): Observable<GiphyPageResponse<GiphyItem>> {
    return this.http.get<GiphyPageResponse<GiphyItem>>(this.configService.getGiphyApiURI(), {
      params: new HttpParams()
        .set('api_key', this.configService.getGiphyApiKey())
        .set('q', gpr.q)
        .set('limit', gpr.limit.toString())
        .set('offset', gpr.offset.toString())
        .set('rating', gpr.rating)
        .set('lang', gpr.lang)
    }).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
