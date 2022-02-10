import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { LoaderService } from 'src/app/core/services/loader.service';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public game: Game;
  public load = true;
  private _gameId: string;
  private _routeSub: Subscription;
  private _gameSub: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _gamesService: GamesService,
    private _loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this._loaderService.loadingStatus.subscribe((isLoad: boolean) => this.load = isLoad);
    this._routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      this._gameId = params.id;
      this.getGameDetails(this._gameId);
    });
  }

  getGameDetails(id: string): void {
    this._loaderService.start();
    this._gameSub = this._gamesService.getGameDetails(id).subscribe((data: Game) => {
      this.game = data;
      this._loaderService.end();
    });
  }

  ngOnDestroy(): void {
    if(this._routeSub) {
      this._routeSub.unsubscribe();
    }

    if(this._gameSub) {
      this._gameSub.unsubscribe();
    }
  }
}
