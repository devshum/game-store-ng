import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesDetailRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { SliderComponent } from './components/slider/slider.component';
import { SkeletonModule } from 'primeng/skeleton';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    GameDetailsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    GamesDetailRoutingModule,
    SkeletonModule,
    LazyLoadImageModule,
    SwiperModule
  ]
})
export class GameDetailsModule { }
