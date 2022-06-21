import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { SwiperModule } from 'swiper/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GamesComponent } from './components/games/games.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    CardComponent,
    DropdownComponent,
    GamesComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    PaginatorModule,
    SkeletonModule,
    SwiperModule,
    InlineSVGModule,
    LazyLoadImageModule
  ]
})
export class GamesModule { }
