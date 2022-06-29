import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators' ;
import { Game } from 'src/app/core/models/game.interface';

import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

import * as fromApp from '../../../core/models/store.interface';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html'
})
export class GameDetailsComponent implements OnInit {
  public game$: Observable<Game | null>;

  constructor(
    private _store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.game$ = this._store.select('gameDetails').pipe(pluck('game'));
  }
}
