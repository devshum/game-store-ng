import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId: string;
  game: Game;
  routeSub: Subscription;
  gameSub: Subscription;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params.id;
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.gameSub = this._gamesService.getGameDetails(id).subscribe((data: Game) => {
      this.game = data;
      this.gameRating = this.game.metacritic;
    });
  }

  ngOnDestroy(): void {
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }

    if(this.gameSub) {
      this.gameSub.unsubscribe();
    }
  }
}
