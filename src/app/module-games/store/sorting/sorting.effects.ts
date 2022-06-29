import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import * as SortingActions from './sorting.actions';

@Injectable()

export class SortingEffects {
  enterSearch$ = createEffect(() => this._actions$.pipe(
    ofType(SortingActions.enterSearch),
    tap(() => this._router.navigate(['games']))
  ), { dispatch: false} );


  constructor(
    private _actions$: Actions,
    private _router: Router
  ) {}
}
