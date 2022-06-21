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

  ngAfterViewInit(): void {
     if (this.videos.length) {
      const videos = this._convertVideos();

      videos.forEach(video => video.nativeElement.muted = true);

      videos[this._currentSlide].nativeElement.play();
    };
  }

  public onSlideChange([event]: any): void {
    const videos = this._convertVideos();

    this._currentSlide = event.snapIndex;

    videos.forEach(video => {
      video.nativeElement.pause();
      videos[this._currentSlide]?.nativeElement.play();
    });
  }

  private _convertVideos() {
    return this.videos.toArray();
  }
}

