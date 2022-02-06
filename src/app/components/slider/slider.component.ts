import { Component, Input, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Game } from 'src/app/core/models/game.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChildren('video') videos: QueryList<any>;
  @Input() game: Game;

  public thumbsSwiper: any;

  private _currentSlide = 0;

  constructor() {
  }

  onSlideChange([event]: any): void {
    const videos = this.convertVideos();

    this._currentSlide = event.snapIndex;

    videos.forEach(video => {
      video.nativeElement.pause();
      videos[this._currentSlide]?.nativeElement.play();
    });
  }

  convertVideos() {
    return this.videos.toArray();
  }

  ngAfterViewInit(): void {
    this.videos.changes.subscribe(_ => {
      if (this.videos.length) {
        const videos = this.convertVideos();

        videos.forEach(video => video.nativeElement.muted = true);

        videos[this._currentSlide]?.nativeElement.play();
      };
    });
  }
}

