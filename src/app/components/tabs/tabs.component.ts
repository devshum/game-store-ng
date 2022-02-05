import { Component, Input } from '@angular/core';
import { Game } from 'src/app/core/models/game.interface';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() game: Game;
  thumbsSwiper: any;
  constructor() {
  }
}

