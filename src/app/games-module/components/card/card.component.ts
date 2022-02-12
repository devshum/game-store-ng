import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/core/models/game.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() game: Game;

  constructor(
    private _router: Router
  ) { }

  openGameDetails(id: string): void {
    this._router.navigate(['details', id]);
  }
}
