import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
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

      setTimeout(() => {
        this.gameRating = this.game.metacritic;
      }, 1000);
    });
  }

  getColor(value: number): string {
    switch (true) {
      case value > 75:
        return '#5ee432';
      case value > 50:
        return '#fffa50';
      case value > 30:
        return '#f7aa38';
      default:
        return '#ef4655';
    }
  }
}
