import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  gameSub: Subscription;
  gameRating = 0;
  constructor(
    private _router: Router,
    private _gamesService: GamesService
  ) { }
  ngOnInit(): void {
    this.getGameDetails(this.game.id);
  }

  getGameDetails(id: string): void {
    this.gameSub = this._gamesService.getGameDetails(id).subscribe((data: Game) => {
      this.game = data;
      this.gameRating = this.game.metacritic;
    });
  }

  openGameDetails(id: string): void {
    this._router.navigate(['details', id]);
  }
}
