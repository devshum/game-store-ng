import * as fromGames from '../../module-games/store/games/games.reducer';
import * as fromPagination from '../../module-games/store/pagination/pagination.reducer';
import * as fromSorting from '../../module-games/store/sorting/sorting.reducer';
import * as fromGameDetails from '../../module-game-details/store/game-details/game-details.reducer';

export interface AppState {
  gamesResponse: fromGames.State;
  pagination: fromPagination.State;
  sorting: fromSorting.State;
  gameDetails: fromGameDetails.State;
}
