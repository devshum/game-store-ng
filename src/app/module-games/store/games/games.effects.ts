import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GameResponse } from 'src/app/core/models/game-response.interface';
import { environment } from 'src/environments/environment';

import * as GamesActions from './games.actions';

@Injectable()
export class GamesEffects {
  fetchGames$ = createEffect(() => this._actions$.pipe(
      ofType(GamesActions.fetchGames),
      map(action => {
        const options = {
          params: new HttpParams()
          .set('ordering', action.queries.ordering || '')
          .set('page_size', action.queries.pageSize || '')
          .set('page', action.queries.currentPage || '')
          .set('search', action.queries.search || '')
        };

        return options;
      }),
      switchMap(options => this._http.get<GameResponse>(`${this._apiUrl}/games`, options)),
      map(gameResponse => GamesActions.setGames({gameResponse}))
    ));

  private _apiUrl = environment.apiUrl;

  constructor(
    private _actions$: Actions,
    private _http: HttpClient
  ) {}
}
