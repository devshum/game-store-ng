import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameResponse } from '../models/gameResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  getGames(ordering: string, search?: string): Observable<GameResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'ff865bb1dfmsh9ab225d644e14f1p172b82jsn8689cb5dd275'
    });

    let options = {
      params: new HttpParams()
      .set('ordering', ordering),
      headers
    };

    if(search) {
      options = {
        params: new HttpParams()
        .set('ordering', ordering)
        .set('search', search),
        headers
      };
    }

    return this._http.get<GameResponse>(`${this._apiUrl}/games`, options);
  }
}
