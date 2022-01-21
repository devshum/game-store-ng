import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameResponse } from '../models/game-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  getGames(ordering: string, search?: string): Observable<GameResponse> {

    let options = {
      params: new HttpParams()
      .set('ordering', ordering)
    };

    if(search) {
      options = {
        params: new HttpParams()
        .set('ordering', ordering)
        .set('search', search)
      };
    }

    return this._http.get<GameResponse>(`${this._apiUrl}/games`, options);
  }
}
