import { Action, createReducer, on } from '@ngrx/store';
import * as SortingActions from './sorting.actions';

export interface State {
  sorting: string;
  search: string;
};

const initialState: State = {
  sorting: '-added',
  search: ''
};

const _sortingReducer = createReducer(
  initialState,

  on(
    SortingActions.changeSorting,
    (state, action) => ({
      ...state,
      sorting: action.sortingValue
    })
  ),

  on(
    SortingActions.enterSearch,
    (state, action) => ({
      ...state,
      search: action.searchingValue
    })
  ),

  on(
    SortingActions.resetSorting,
    (state, _) => ({
      ...state,
      sorting: initialState.sorting
    })
  )
);

export function sortingReducer(state: State, action: Action) {
  return _sortingReducer(state, action);
}
