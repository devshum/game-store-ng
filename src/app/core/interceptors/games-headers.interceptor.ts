import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GamesHeadersInterceptor implements HttpInterceptor {
  consctructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'ff865bb1dfmsh9ab225d644e14f1p172b82jsn8689cb5dd275'
      },
      setParams: {
        key: '1349c65df7f448dbab7311c933ef08cf'
      }
    });
    return next.handle(req);
  }
}
