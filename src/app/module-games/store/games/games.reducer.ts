import { Action, createReducer, on } from '@ngrx/store';
import { GameResponse } from 'src/app/core/models/game-response.interface';
import * as GamesActions from './games.actions';

export interface State {
  gamesResponse: GameResponse;
  loading: boolean;
};

const initialState: State = {
  gamesResponse: {
    results: [],
    count: 0,
    seo_title: '',
  },
  loading: false
};

const _gamesReducer = createReducer(
  initialState,

  on(
    GamesActions.setGames,
    (state, action) => ({
      ...state,
      gamesResponse: { ...action.gameResponse },
      loading: false
    })
  ),

  on(
    GamesActions.fetchGames,
    (state, _) => ({
      ...state,
      gamesResponse: {
        results: [],
        count: 0,
        seo_title: '',
      },
      loading: true
    })
  )
);

export function gamesReducer(state: State, action: Action) {
  return _gamesReducer(state, action);
}

