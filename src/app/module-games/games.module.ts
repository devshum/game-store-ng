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
import { CardsSkeletonComponent } from './components/cards-skeleton/cards-skeleton.component';

import { PaginationSkeletonComponent } from './components/pagination-skeleton/pagination-skeleton.component';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './store/games/games.effects';
import { SortingEffects } from './store/sorting/sorting.effects';

import { StoreModule } from '@ngrx/store';
import * as fromGames from '../module-games/store/games/games.reducer';
import * as fromPagination from '../module-games/store/pagination/pagination.reducer';
import * as fromSorting from '../module-games/store/sorting/sorting.reducer';

@NgModule({
  declarations: [
    CardComponent,
    DropdownComponent,
    GamesComponent,
    PaginatorComponent,
    CardsSkeletonComponent,
    PaginationSkeletonComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    PaginatorModule,
    SkeletonModule,
    SwiperModule,
    InlineSVGModule,
    LazyLoadImageModule,
    StoreModule.forFeature('gamesResponse', fromGames.gamesReducer),
    StoreModule.forFeature('pagination', fromPagination.paginationReducer),
    StoreModule.forFeature('sorting', fromSorting.sortingReducer),
    EffectsModule.forRoot([GamesEffects, SortingEffects]),
  ]
})
export class GamesModule { }
