import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game.interface';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('video') videos: QueryList<any>;

  public gameRating = 0;
  public  game: Game;
  public thumbsSwiper: any;

  private _gameId: string;
  private _routeSub: Subscription;
  private _gameSub: Subscription;
  private _currentSlide = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _gamesService: GamesService,
  ) {}

  ngOnInit(): void {
    this._routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      this._gameId = params.id;
      this.getGameDetails(this._gameId);
    });
  }

  getGameDetails(id: string): void {
    this._gameSub = this._gamesService.getGameDetails(id).subscribe((data: Game) => {
      this.game = data;
      this.gameRating = this.game.metacritic;
    });
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

  ngOnDestroy(): void {
    if(this._routeSub) {
      this._routeSub.unsubscribe();
    }

    if(this._gameSub) {
      this._gameSub.unsubscribe();
    }
  }
}
