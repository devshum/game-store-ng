// common
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule } from './module-layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
