import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GameDetailsActions from '../game-details/game-details.actions';
import { Router } from '@angular/router';
import { tap, map, share, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class GameDetailsEffects {
  getGameId$ = createEffect(() => this._actions$.pipe(
    ofType(GameDetailsActions.getGameId),
    tap(action => {
      this._router.navigate(['details', action.id]);
    })
    ), { dispatch: false },
  );


  getGameById$ = createEffect(() => this._actions$.pipe(
    share(),
    ofType(GameDetailsActions.getGameId),
    switchMap(action => {
      const id = action.id;

      const gameInfoRequest = this._http.get(`${this._apiUrl}/games/${id}`);
      const gameTrailersRequest = this._http.get(`${this._apiUrl}/games/${id}/movies`);
      const gameScreenshotsRequest = this._http.get(`${this._apiUrl}/games/${id}/screenshots`);

      return forkJoin({
        gameInfoRequest,
        gameTrailersRequest,
        gameScreenshotsRequest
      }).pipe(
        map((resp: any) => {
          const gameDetailsData = {
            ...resp.gameInfoRequest,
            screenshots: resp.gameScreenshotsRequest?.results,
            trailers: resp.gameTrailersRequest?.results
          };

          return GameDetailsActions.setGameDetails({gameDetails: gameDetailsData});
        })
      );
    }),

  ));

  private _apiUrl = environment.apiUrl;

  constructor(
    private _actions$: Actions,
    private _http: HttpClient,
    private _router: Router,
  ) {}
}
