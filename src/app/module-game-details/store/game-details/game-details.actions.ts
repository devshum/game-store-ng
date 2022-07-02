import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/core/models/game.interface';

export const setGameDetails = createAction(
  '[Game Details] Set Game Details',
  props<{
    gameDetails: Game;
  }>()
);

export const getGameId = createAction(
  '[Game Details] Get Game ID',
  props<{
    id: string;
  }>()
);
