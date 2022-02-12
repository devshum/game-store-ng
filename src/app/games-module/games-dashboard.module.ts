
// common
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GamesHeadersInterceptor } from '../core/interceptors/games-headers.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// containers
import { HomeComponent } from './containers/home/home.component';
import { DetailsComponent } from './containers/details/details.component';

// custom components
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

// prime components
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';

// swiper
import { SwiperModule } from 'swiper/angular';

// lazy load
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    SearchBarComponent,
    CardComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    DropdownComponent
  ],
  imports: [
    FormsModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    TabViewModule,
    SkeletonModule,
    PaginatorModule,
    [SwiperModule],
    CommonModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: '/assets/icons/', bypassHttpClientInterceptorChain: true })
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GamesHeadersInterceptor,
      multi: true
    }
  ]
})
export class GamesDashboardModule { }
