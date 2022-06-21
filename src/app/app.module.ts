// common
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule } from './module-layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { GamesHeadersInterceptor } from './core/interceptors/games-headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InlineSVGModule.forRoot({ baseUrl: '/assets/icons/', bypassHttpClientInterceptorChain: true }),
    LazyLoadImageModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule
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
