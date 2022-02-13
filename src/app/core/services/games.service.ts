import { GameResponse } from './../models/game-response.interface';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Game } from '../models/game.interface';
import { map } from 'rxjs/operators';
import { Queries } from '../models/queries.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }

  getGames(query: Partial<Queries>): Observable<GameResponse> {
    const options = {
      params: new HttpParams()
      .set('ordering', query.ordering || '')
      .set('page_size', query.pageSize || '')
      .set('page', query.currentPage || '')
      .set('search', query.search || '')
    };

    return this._http.get<GameResponse>(`${this._apiUrl}/games`, options);
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this._http.get(`${this._apiUrl}/games/${id}`);
    const gameTrailersRequest = this._http.get(`${this._apiUrl}/games/${id}/movies`);
    const gameScreenshotsRequest = this._http.get(`${this._apiUrl}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest,
      gameTrailersRequest,
      gameScreenshotsRequest
    }).pipe(
      map((resp: any) => ({
          ...resp.gameInfoRequest,
          screenshots: resp.gameScreenshotsRequest?.results,
          trailers: resp.gameTrailersRequest?.results
        }))
    );
  }
}
