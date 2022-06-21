import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { LoaderService } from 'src/app/core/services/loader.service';
import { takeUntil } from 'rxjs/operators';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  public game: Game;
  public load = true;

  private _gameId: string;
  private _unsubscribe = new Subject();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _gamesService: GamesService,
    private _loaderService: LoaderService
  ) {}

  ngOnInit(): void {
      this._loaderService.loadingStatus.pipe(takeUntil(this._unsubscribe))
                                       .subscribe((isLoad: boolean) => this.load = isLoad);

      this._activatedRoute.params.pipe(takeUntil(this._unsubscribe))
                                                .subscribe((params: Params) => {
      this._gameId = params.id;
      this._getGameDetails(this._gameId);
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }

  private _getGameDetails(id: string): void {
    this._loaderService.start();
    this._gamesService.getGameDetails(id)
                      .pipe(takeUntil(this._unsubscribe))
                      .subscribe((data: Game) => {
      this.game = data;
      this._loaderService.end();
    });
  }
}
