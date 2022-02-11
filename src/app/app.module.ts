import { GamesHeadersInterceptor } from './core/interceptors/games-headers.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { CardComponent } from './components/card/card.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { DetailsComponent } from './components/details/details.component';
import { SliderComponent } from './components/slider/slider.component';
import { TabViewModule } from 'primeng/tabview';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import {SkeletonModule} from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    CardModule,
    TabViewModule,
    [SwiperModule],
    SkeletonModule,
    PaginatorModule,
    LazyLoadImageModule,
    InlineSVGModule.forRoot({ baseUrl: '/assets/icons/', bypassHttpClientInterceptorChain: true })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GamesHeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
