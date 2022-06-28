import { createReducer, on, Action } from '@ngrx/store';
import { Game } from 'src/app/core/models/game.interface';
import * as GameDetailsActions from '../game-details/game-details.actions';

export interface State {
  id: string;
  game: Game | null;
};

const initialState: State = {
  id: '',
  game: null
};

const _gameDetailsReducer = createReducer(
  initialState,

  on(
    GameDetailsActions.getGameId,
    (state, action) => ({
      ...state,
      id: action.id,
      game: null
    })
  ),

  on(
    GameDetailsActions.setGameDetails,
    (state, action) => ({
      ...state,
      id: state.id,
      game: { ...action.gameDetails }
    })
  ),
);

export function gameDetailsReducer(state: State, action: Action) {
  return _gameDetailsReducer(state, action);
}
