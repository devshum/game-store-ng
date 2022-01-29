import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() game: Game;
  constructor() {
  }

  test(e: any): void {
    console.log(e.index);
  }
}
