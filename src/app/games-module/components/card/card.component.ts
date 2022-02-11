import { takeUntil } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import { GamesService } from 'src/app/core/services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() game: Game;

  private _unsubscribe = new Subject();

  constructor(
    private _router: Router,
    private _gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.getGameDetails(this.game.id);
  }

  getGameDetails(id: string): void {
    this._gamesService.getGameDetails(id)
                      .pipe(takeUntil(this._unsubscribe))
                      .subscribe((data: Game) => this.game = data);
  }

  openGameDetails(id: string): void {
    this._router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }
}
